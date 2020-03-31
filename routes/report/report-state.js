const {handleError, succeed} = require("../../utils/constant");
const user = require('../../models/user');
const {verify} = require("../../utils/auth");

exports.getReportState = (req, res, next)=>{
    verify(req,(err,decode)=>{
        if(err) return succeed(res,'authorize fail',{tip: 'Unknown error'});
        user.findOne({account: decode.account}).then((data)=>{
            if(!data) return handleError(next,403,'get report state fail',"Account isn't exists.");
            return succeed(res,'get report state succeed',{
                role: data.role,
                reports: data.reports
            });
        }).catch(err=>{
            return handleError(next,500,'get report state fail','Unknown error');
        });
    });
};
