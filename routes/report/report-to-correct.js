const {handleError, succeed} = require("../../utils/constant");
const report = require('../../models/report');
const user = require('../../models/user')
const {verify} = require("../../utils/auth");

exports.getReportToCorrect = (req,res,next) => {
    const name = req.query.name;
    report.find({name: name}).then(data=>{
        console.log(data);
        succeed(res,'succeed',data);
    })
};

exports.postCorrect = (req,res, next)=>{
    const postData = req.body;
    console.log(postData);
    verify(req, (err, decode)=>{
        if(err) return succeed(res,'authorize fail',{tip: 'Unknown error'});
        report.updateOne({$and: [{name: postData.name},{student: postData.student}]}, {$set: {score: postData.score}}).then(data=>{
            report.updateOne({$and: [{name: postData.name},{student: postData.student}]}, {$set: {teacher: decode.account}}).then(data=>{
                succeed(res, 'succeed', {tip: 'save succeed'});
            }).catch(err=>{
                return handleError(next,500,'fail','Unknown error');
            })
        }).catch(err=>{
            return handleError(next,500,'fail','Unknown error');
        })
    })
}
