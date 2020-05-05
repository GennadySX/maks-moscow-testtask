import {Cors} from "./config/Cors";

var express = require('express'),
 path = require('path'),
 cookieParser = require('cookie-parser'),
 logger = require('morgan'),

    Mongo = require('./config/database'),

    indexRouter = require('./routes/index'),
    blogRouter = require('./routes/blog'),
    userRouter = require('./routes/users'),

    app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => Cors(req, res, next));


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);

module.exports = app;
