const Student = require('../models/Student');

exports.getProfile = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.params.id }).populate('appliedJobs');
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.applyToJob = async (req, res) => {
  try {
    const student = await Student.findOne({ userId: req.body.userId });
    if (!student.appliedJobs.includes(req.body.jobId)) {
      student.appliedJobs.push(req.body.jobId);
      await student.save();
    }
    res.json({ message: 'Applied successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
