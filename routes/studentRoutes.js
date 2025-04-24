const express = require('express');
const router = express.Router();
const {
  getStudentProfile,
  updateStudentProfile,
  scheduleInterview,
  sendNotification
} = require('../controllers/studentController');

router.get('/:id', getStudentProfile);
router.put('/:id', updateStudentProfile);
router.post('/schedule/:id', scheduleInterview);
router.post('/notify/:id', sendNotification);

module.exports = router;
