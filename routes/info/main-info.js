const {handleError, succeed} = require("../../utils/constant");
const cases = require('../../models/case')
exports.getMainInfo = (req,res,next)=>{
    getInfo(req,res,next,'mainInfo');
};
exports.getUrl = (req,res,next)=>{
    getInfo(req,res,next,'url');
};
exports.getKey = (req,res,next)=>{
    getInfo(req,res,next,'key');
};
function getInfo(req,res,next,query){
    const name = req.query.name;
    cases.findOne({name: name}).then(data=>{
        if(!data) return handleError(next,404,'fail',"not found");
        succeed(res, 'succeed', {data: data[query]})
    }).catch(err=>{
        return handleError(next,500,'fail',"Unknown error");
    })
}
