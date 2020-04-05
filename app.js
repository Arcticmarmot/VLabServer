const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/others/index');
const loginRouter = require('./routes/login/login');
const authRouter = require('./routes/login/auth');
const logoutRouter = require('./routes/login/logout');
const reportStateRouter = require('./routes/report/report-state');
const mainInfoStateRouter = require('./routes/info/main-info')
const reportRouter = require('./routes/report/report');
const reportToCorrectRouter = require('./routes/report/report-to-correct')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  if(req.path !== '/' && !req.path.includes('.')){
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
});

//routes
app.use('/', indexRouter);
app.post('/login',loginRouter.login);
app.get('/auth',authRouter.auth);
app.get('/logout',logoutRouter.logout);
app.get('/report_state', reportStateRouter.getReportState);
app.get('/main_info', mainInfoStateRouter.getMainInfo);
app.get('/url', mainInfoStateRouter.getUrl);
app.get('/key', mainInfoStateRouter.getKey);
app.post('/report', reportRouter.postReport);
app.get('/report_to_correct', reportToCorrectRouter.getReportToCorrect);
app.post('/report_to_correct', reportToCorrectRouter.postCorrect);

app.use(function(err, req, res, next) {
  console.log(err);
  res.writeHead(err.status || 500,err.message,
      {'Content-Type': 'application/json;charset=utf8'}
  );
  res.end(JSON.stringify({tip:err.tip || ''}));
});
module.exports = app;
