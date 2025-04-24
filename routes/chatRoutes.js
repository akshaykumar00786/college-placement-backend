const express = require('express');
const router = express.Router();
const { sendMessage, getChatHistory } = require('../controllers/chatController');

// Route to send a message
router.post('/send', sendMessage);

// Route to get chat history between two users
router.get('/:senderId/:receiverId', getChatHistory);

module.exports = router;

