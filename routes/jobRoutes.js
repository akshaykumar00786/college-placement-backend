const express = require('express');
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJobById,
  applyToJob,
  shortlistStudent
} = require('../controllers/jobController');

router.post('/create', createJob);
router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/apply/:jobId', applyToJob);
router.post('/shortlist/:jobId/:studentId', shortlistStudent);

module.exports = router;
