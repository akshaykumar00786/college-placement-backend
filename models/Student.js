const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  branch: String,
  cgpa: Number,
  resumeLink: String,
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
});
module.exports = mongoose.model('Student', studentSchema);

