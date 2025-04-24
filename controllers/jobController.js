const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.body.userId });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('applicants');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.scheduleInterview = async (req, res) => {
  try {
    const job = await Job.findById(req.body.jobId);
    job.interviewDate = req.body.interviewDate;
    await job.save();
    res.json({ message: 'Interview scheduled' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

