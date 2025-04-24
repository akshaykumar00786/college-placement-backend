const Interview = require('../models/Interview');

// Schedule an interview
const scheduleInterview = async (req, res) => {
  const { studentId, officerId, jobId, interviewDate, interviewTime } = req.body;

  try {
    const newInterview = new Interview({
      studentId,
      officerId,
      jobId,
      interviewDate,
      interviewTime,
    });
    await newInterview.save();
    res.status(200).json({ success: true, message: 'Interview scheduled successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error scheduling interview.' });
  }
};

// Get interviews scheduled for a student
const getStudentInterviews = async (req, res) => {
  const { studentId } = req.params;

  try {
    const interviews = await Interview.find({ studentId }).populate('jobId').populate('officerId');
    res.status(200).json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching interviews.' });
  }
};

// Get all interviews scheduled by an officer
const getOfficerInterviews = async (req, res) => {
  const { officerId } = req.params;

  try {
    const interviews = await Interview.find({ officerId }).populate('studentId').populate('jobId');
    res.status(200).json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching interviews.' });
  }
};

module.exports = { scheduleInterview, getStudentInterviews, getOfficerInterviews };
