const Chat = require('../models/Chat');

// Send a new message
const sendMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  
  const newMessage = new Chat({
    senderId,
    receiverId,
    message,
  });

  try {
    await newMessage.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending message.' });
  }
};

// Get chat history between two users
const getChatHistory = async (req, res) => {
  const { senderId, receiverId } = req.params;

  try {
    const messages = await Chat.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching chat history.' });
  }
};

module.exports = { sendMessage, getChatHistory };
