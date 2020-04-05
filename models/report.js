const mongoose = require('../init/mongoose');

const ReportSchema = mongoose.Schema(
    {
        student: String,
        name: String,
        checkMethod: String,
        patientName: String,
        age: String,
        gender: String,
        checkData: Date,
        checkFinding: String,
        conclusion: String,
        score: String,
        teacher: String,
    }
);

const Report = mongoose.model('report',ReportSchema);

module.exports = Report;
