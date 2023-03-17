import {
  getMessagesService,
  createMessageService,
} from "../service/messageService.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await getMessagesService(req, res);
    if (messages) return res.status(200).json(messages);
    return res.status(404).json({ error: "Messages not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const messages = await createMessageService(req, res);
    if (messages) return res.status(201).json(messages);
    return res.status(400).json({ error: "Message not created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
