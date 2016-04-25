// server.js
// set up ======================================================================
// get all the tools we need
var express  = require('express');
var mongodb  = require('mongodb');
var app      = express();
var MongoClient = require('mongodb').MongoClient;
var db;
var port     = process.env.PORT || 8080;

// configuration ===============================================================
//MongoClient.connect("mongodb://appharbor_64v0nrc6:fdmoda9lh21hu2g7cc9jnbulgr@ds013280.mlab.com:13280/appharbor_64v0nrc6", function(err, database)
MongoClient.connect("mongodb://naoufal:naoufal@ds019980.mlab.com:19980/naoufal", function(err, database)
{
if(err) throw err;
db = database;
app.listen(port, function ()
{
console.log('Example app listening on port' + port);
});
});
app.get('/', function (req, res) {
res.json({ message: 'my first screendy test' });
});
app.get('/Users', function (req, res)
{
db.collection("User").find().toArray(function(err, users) {
res.send(users);
});
});
/*---------------------------------------------------------------------------*/
var bodyParser = require('body-parser');
app.use(bodyParser.json() ); //to support JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); //to support URL encoded bodies

//ajouter un utilisateur
app.post('/addUser', function(req, res){
	db.collection('User').insertOne(
		{
			"name" : req.body['name'],
			"email" : req.body['email'],
			"password" : req.body['password']
		}, function(err, result) {
			res.json({ message: 'your User has been added' });
		}
	);
});




//modifier un utilisateur
app.post('/editEmailofUsername', function(req, res){
	db.collection('User').updateOne(
		{ "name" : req.body['name'] },
	{
		$set: { "email": req.body['email'] }
	},  function(err, results){
		res.json({ message: 'user: '+req.body['name']+' changed to: '+req.body['email']});
	});
});

//suprimer un utilisateur
app.post('/deleteUsername', function(req, res){
	db.collection('User').updateOne(
		{ "name" : req.body['name'] },
		function(err, results){
		res.json({ message: 'user: '+req.body['name']+' deleted '});
	}
	);
});
