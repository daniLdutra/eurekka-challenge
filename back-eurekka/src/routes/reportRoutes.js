const { Router } = require('express');
const report = require('../model/Report');
const { body, validationResult, param } = require('express-validator');
const { upload } = require('../middlewares/upload');

const reportRoutes = Router();

const createReportValidation = [
  body('veterinary').isLength({ min: 2, max: 40 }),
  body('guardian').isLength({ min: 2, max: 40 }),
  body('pacient').isLength({ min: 2, max: 40 }),
  body('specie').isLength({ min: 2, max: 10 }),
  body('breed').isLength({ min: 2, max: 20 }),
  body('sex').isLength({ min: 1, max: 1 }),
  body('age').isLength({ min: 1, max: 20 }),
  body('region').isLength({ min: 2, max: 20 }),
  body('report').isLength({ min: 5, max: 255 }),
];

reportRoutes.post(
  '/',
  upload.single('file'),
  createReportValidation,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Please send an image file' });
    }

    const obj = {
      ...req.body,
      imgRx: req.file.filename,
    };

    const created = await report.create(obj);
    return res.status(201).json(created);
  }
);

reportRoutes.get('/:id', param('id').isMongoId(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const findReport = await report.findById(req.params.id);
    return res.status(200).json(findReport);
  } catch (error) {
    return res.status(400).json({ error: 'Report not found' });
  }
});

module.exports = { reportRoutes };
