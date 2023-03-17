import {
  getConversationsService,
  getConversationService,
  createConversationService,
  updateConversationService,
} from "../service/conversationService.js";

export const getConversations = async (req, res) => {
  try {
    const conversations = await getConversationsService(req, res);
    if (conversations) return res.status(201).json({ conversations });
    return res.status(403).json({ message: "Wasnt able to get conversations" });
  } catch (eror) {
    return res.status(403).json({ message: "Wasnt able to get conversations" });
  }
};

export const getConversation = async (req, res) => {
  try {
    const getconversation = await getConversationService(req, res);
    if (getconversation) return res.status(201).json({ getconversation });
    return res.status(404).json({ message: "Conversation dosent exist" });
  } catch (eror) {
    return res.status(404).json({ message: "Conversation dosent exist" });
  }
};

export const createConversation = async (req, res) => {
  try {
    const conversation = await createConversationService(req, res);
    if (conversation) return res.status(201).json({ conversation });
    return res
      .status(403)
      .json({ message: "Wasnt able to create conversation" });
  } catch (eror) {
    return res
      .status(403)
      .json({ message: "Wasnt able to create conversation" });
  }
};

export const updateConversation = async (req, res) => {
  console.log(req.params.id, "entrei no update");
  try {
    const updatedconversation = await updateConversationService(req, res);
    if (updatedconversation)
      return res.status(201).json({ updatedconversation });
    return res
      .status(403)
      .json({ message: "Wasnt able to update conversation" });
  } catch (eror) {
    return res
      .status(403)
      .json({ message: "Wasnt able to update conversation" });
  }
};
