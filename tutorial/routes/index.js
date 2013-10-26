
/*
 * Routes functions, can be considered as a controller
 */
var MongoClient = require('mongodb').MongoClient;

exports.index = function(req, res){
	res.render('index', { title: 'JSRevolutionII' });
};

exports.submit = function(req, res){
	console.log(req.body);
	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/jsr", function(err, db) {
  		
  		if(err) { return console.dir(err); }
			
		db.createCollection('messages', function(err, collection) {});

		var messages = db.collection('messages');
		var msg = { 'name':req.body.name,
					'email': req.body.email, 
					'message':req.body.message, 
					'Date': Date.now() };

		messages.insert(msg, function(err, results){
			console.log(results)
			res.render('thanks', { title: 'thanks' });
		});
	})
};	