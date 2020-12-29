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
/** new User(
//     {
            account: '222',
             password:'222',
            role: 'teacher',
             createdAt: new Date(),
             reports: [
        {
                name: 'Case 1',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 2',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 3',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 4',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 5',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 6',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 7',
                isSubmit: false,
                id: ''
        },{
                name: 'Case 8',
                isSubmit: false,
                id: ''
        },
        {
                name: 'Case 9',
                isSubmit: false,
                id: ''
        },
],
   }).save();
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
//     }).save();*/
module.exports = User;
