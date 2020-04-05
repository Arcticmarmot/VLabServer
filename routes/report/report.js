const {handleError, succeed} = require("../../utils/constant");
const report = require('../../models/report');
const user = require('../../models/user')
const {verify} = require("../../utils/auth");
exports.postReport = (req,res,next)=>{
    const postData = req.body;
    verify(req,(err,decode)=>{
        if(err) return succeed(res,'authorize fail',{tip: 'Unknown error'});
        postData.student = decode.account;
        postData.score = '';
        postData.teacher = '';
        user.findOne({account: decode.account}).then(userData=>{
            let flag = false;
            userData.reports.forEach(rep=>{
                if(rep.name === postData.name){
                    flag = rep.isSubmit;
                }
            });
            if(!flag){
                new report(postData).save().then(data=>{
                    user.updateOne({account: decode.account},{reports: getReports(data,userData)})
                        .then(data=>{
                            succeed(res,'succeed',{tip: 'submit succeed'});
                        }).catch(err=>{
                        return handleError(next,500,'fail','Unknown error');
                    })
                }).catch(err=>{
                    return handleError(next,500,'fail','Unknown error');
                })
            }else{
                return handleError(next,401,'fail','Already submitted');
            }
        });
    });
};
function getReports(report, userData){
    const reports = userData.reports;
    reports.forEach(rep=>{
        if(rep.name === report.name){
            rep.isSubmit = true;
            rep.id = report._id;
        }
    })
    return reports;
}
