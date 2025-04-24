const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  eligibility: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  interviewDate: Date
});
module.exports = mongoose.model('Job', jobSchema);
