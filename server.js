// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var mongodb  = require('mongodb');
var app      = express();
var MongoClient = require('mongodb').MongoClient;
var db;
var port     = process.env.PORT || 8080;

// configuration ===============================================================
MongoClient.connect(mongodb://appharbor_200k1237:k0ha9d23i3tuehsnn11vjv62s7@ds019480.mlab.com:19480/appharbor_200k1237, function(err, database)
{
if(err) throw err;
db = database;
app.listen(port, function ()
{
console.log('Example app listening on port' + port);
});
});
app.get('/', function (req, res) {
res.json({ message: 'welcome api!' });
});








/*


//var passport = require('passport');
//var flash    = require('connect-flash');

//var morgan       = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser   = require('body-parser');
//var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


*/