const mongoose = require('../init/mongoose');

const ReportSchema = mongoose.Schema(
    {
        checkMethod: String,
        patientName: String,
        age: Int8Array,
        gender: String,
        checkData: Date,
        checkFinding: String,
        conclusion: String,
    }
);

const Report = mongoose.model('report',ReportSchema);

module.exports = Report;
