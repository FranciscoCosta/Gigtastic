import {
  getOrdersService,
  intentService,
  confirmOrdersService,
} from "../service/orderSerivce.js";

export const getOrders = async (req, res) => {
  try {
    const result = await getOrdersService(req, res);
    if (result) return res.status(200).json({ result });
    return res.status(404).json({ message: "Couldnt get orders" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const intent = async (req, res) => {
  try {
    const result = await intentService(req, res);
    if (result) return res.status(200).json({ result });
    return res.status(404).json({ message: "Couldnt register orders" });
  } catch (error) {
    return res.status(404).json({ message: "Couldnt register orders" });
  }
};

export const confirmOrders = async (req, res) => {
  try {
    const result = await confirmOrdersService(req, res);
    if (result) return res.status(200).json({ result });
    return res.status(404).json({ message: "Couldnt register orders" });
  } catch (error) {
    return res.status(404).json({ message: "Couldnt register orders" });
  }
};
