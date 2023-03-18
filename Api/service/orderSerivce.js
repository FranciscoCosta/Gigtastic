import Order from "../models/orderModel.js";
import Gig from "../models/gigModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

export const getOrdersService = async (req, res) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    console.log(orders);
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const intentService = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const gig = await Gig.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = await new Order({
    gigId: req.params.id,
    img: gig.cover,
    title: gig.title,
    price: gig.price,
    sellerId: gig.userId,
    buyerId: req.userId,
    isCompleted: false,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const confirmOrdersService = async (req, res) => {
  const order = await Order.findOneAndUpdate(
    {
      payment_intent: req.body.payment_intent,
    },
    {
      $set: {
        isCompleted: true,
      },
    }
  );
  return order;
};
