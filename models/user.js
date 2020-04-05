const mongoose = require('../init/mongoose');
const {INIT_REPORT} = require('../utils/constant');
const userSchema = mongoose.Schema(
    {
        account: String,
        password: String,
        role: String,
        createdAt: Date,
        reports: Array
    }
);

const User = mongoose.model('user',userSchema);
// new User(
//     {
//             account: '3180704102',
//             password:'d123456',
//             role: 'teacher',
//             createdAt: new Date(),
//             reports: INIT_REPORT,
//     }).save();
// new User(
//     {
//             account: '3180704101',
//             password:'d123456',
//             role: 'student',
//             createdAt: new Date(),
//             reports: INIT_REPORT,
//     }).save();
// new User(
//     {
//             account: '3180704103',
//             password:'d123456',
//             role: 'student',
//             createdAt: new Date(),
//             reports: INIT_REPORT,
//     }).save();
module.exports = User;
