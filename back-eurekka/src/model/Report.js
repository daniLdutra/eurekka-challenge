const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    veterinary: {
      type: String,
      required: true,
    },
    guardian: {
      type: String,
      required: true,
    },
    pacient: {
      type: String,
      required: true,
    },
    specie: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    report: {
      type: String,
      required: true,
    },
    imgRx: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const report = mongoose.model('report', ReportSchema);

module.exports = report;
