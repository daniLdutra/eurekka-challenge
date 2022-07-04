const { Router } = require('express');
const report = require('../model/Report');
const { body, validationResult, param } = require('express-validator');

const reportRoutes = Router();

const createReportValidation = [
  body('veterinary').isLength({ min: 2, max: 40 }),
  body('guardian').isLength({ min: 2, max: 40 }),
  body('pacient').isLength({ min: 2, max: 40 }),
  body('specie').isLength({ min: 2, max: 10 }),
  body('breed').isLength({ min: 2, max: 20 }),
  body('sex').isLength({ min: 1, max: 1 }),
  body('age').isNumeric({ no_symbols: true }),
  body('region').isLength({ min: 2, max: 20 }),
  body('report').isLength({ min: 5, max: 255 }),
];

reportRoutes.post('/', createReportValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const created = await report.create(req.body);
  return res.status(201).json(created);
});

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
