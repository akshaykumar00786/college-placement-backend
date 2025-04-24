const express = require('express');
const router = express.Router();
const { scheduleInterview, getStudentInterviews, getOfficerInterviews } = require('../controllers/interviewController');

// Route to schedule an interview
router.post('/schedule', scheduleInterview);

// Route to get interviews for a student
router.get('/student/:studentId', getStudentInterviews);

// Route to get interviews for an officer
router.get('/officer/:officerId', getOfficerInterviews);

module.exports = router;
