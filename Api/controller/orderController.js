import { addOrderService, getOrdersService } from "../service/orderSerivce.js";

export const getOrders = async (req, res) => {
  try {
    const result = await getOrdersService(req, res);
    if (result) return res.status(200).json({ result });
    return res.status(404).json({ message: "Couldnt get orders" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const addOrder = async (req, res) => {
  try {
    const result = await addOrderService(req, res);
    if (result) return res.status(200).json({ result });
    return res.status(404).json({ message: "Couldnt register orders" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
