import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";
export const getMessagesService = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.id,
    });
    return messages;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createMessageService = async (req, res) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
  });
  console.log(newMessage);
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );

    return savedMessage;
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
