var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var staderRouter = require('./routes/stader');
var landerRouter = require('./routes/lander');
var addRouter = require('./routes/add');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/stader', staderRouter);
app.use('/lander', landerRouter);
app.use('/add', addRouter);

module.exports = app;
