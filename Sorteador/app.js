var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
const { response } = require('express');
var ioZ = require('socket.io')();
var app = express();
app.io = ioZ;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.log(err);
    res.status(err.status || 500);
    res.render('error');

});

module.exports = app;