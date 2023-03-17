import Conversation from "../models/conversationModel.js";

export const getConversationsService = async (req, res) => {
  console.log(req.isSeller, req.userId);
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    console.log(conversations);
    return conversations;
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getConversationService = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    console.log(conversation);
    return conversation;
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createConversationService = async (req, res) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    return savedConversation;
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateConversationService = async (req, res) => {
  try {
    const updateConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        readBySeller: true,
        readByBuyer: true,
      },
      { new: true }
    );
    console.log(updateConversation);
    return updateConversation;
  } catch (error) {
    return res.status(500).json({ error });
  }
};
