var express = require('express');
var path = require('path');
var logger = require('morgan');
const port = 5000;
const db = require('./config/Db/index')
const route = require('./routes/index')
const { engine } = require('express-handlebars')
var cors = require('cors');

var app = express();

db.connect()

// view engine setup
app.engine('hbs', engine({
  defaultLayout:'main',
  extname: '.hbs',
  helpers: {
    sum: (a , b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

route(app)

app.listen(port)

module.exports = app;
