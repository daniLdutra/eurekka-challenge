const { Router } = require('express');
const report = require('../model/Report');

const reportRoutes = Router();

reportRoutes.post('/', async (req, res) => {
  const created = await report.create(req.body);
  return res.status(200).json(created);
});

module.exports = { reportRoutes };
