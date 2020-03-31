const createError = require('http-errors')
const PASSWORDPATTERN = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,20}$/;
exports.MAX_AGE = 1000*60*60*24*365*10;
exports.PAGESIZE = 8;
exports.handleError = (next,code,statusText,tip)=>{
  next(createError(code,statusText,{tip:tip}));
};

exports.succeed = (res,statusText,data)=>{
    res.writeHead(200, statusText, {
        'Content-Type': 'application/json;charset=utf8'
    });
    res.end(JSON.stringify(data));
};
exports.INIT_REPORT = [
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
];
