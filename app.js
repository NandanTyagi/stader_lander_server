var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var staderRouter = require('./routes/stader');
var landerRouter = require('./routes/lander');
var addRouter = require('./routes/add');
var removeRouter = require('./routes/remove');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/stader', staderRouter);
app.use('/lander', landerRouter);
app.use('/add', addRouter);
app.use('/remove', removeRouter);

module.exports = app;
