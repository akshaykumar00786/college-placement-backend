const Notification = require('../models/Notification'); // This is the notification model.

const sendNotification = async (req, res) => {
  try {
    const { userId, message } = req.body; // userId is the student or officer to be notified

    const notification = new Notification({
      userId,
      message,
      read: false,
    });

    await notification.save();
    res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { sendNotification };
