import Order from "../models/orderModel.js";
import Gig from "../models/gigModel.js";

export const addOrderService = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    const newOrder = await new Order({
      gigId: req.params.id,
      img: gig.cover,
      title: gig.title,
      price: gig.price,
      sellerId: gig.userId,
      buyerId: req.userId,
      isCompleted: false,
      payment_intent: "temporary",
    });
    await newOrder.save();
    return res.status(200).json({ newOrder });
  } catch (error) {
    return res.status(500).send(error);
  }
};

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
