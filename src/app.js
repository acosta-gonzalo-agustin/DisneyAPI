var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressFileUpload = require('express-fileupload');

var peliculasRouter = require('./routes/peliculasRoute');
var usuariosRouter = require('./routes/usuariosRoute');
var personajesRouter = require('./routes/personajesRoute');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




/*----------------------------------------------RUTA DE EXPRESS FILE UPLOAD-------------------------------*/
app.use(expressFileUpload({
  // limits: { fileSize: 512000 }, // 500kb
  abortOnLimit: true
})
);

app.use('/auth', usuariosRouter);
app.use('/characters', personajesRouter);
app.use('/movies', peliculasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
