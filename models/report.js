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
//new User({account: '3180704101','password':'d123456',isLogin: false, role: 'student'}).save();
//new User({account: '3180704102','password':'d123456',isLogin: false, role: 'teacher'}).save();
module.exports = Report;
