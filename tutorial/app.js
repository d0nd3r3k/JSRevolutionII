
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var stylus = require('stylus');

var app = express();

//Getting port from env variables or 3000
app.set('port', process.env.PORT || 3000);

//Setting up the views directory
app.set('views', __dirname + '/views');

//Setting up our HTML preprocessor
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));

//Used for Submitting Forms
app.use(express.bodyParser());
app.use(express.methodOverride());

//Used for routes 
app.use(app.router);

//Setting up our CSS preprocessor
app.use(
  stylus.middleware({
    src:  __dirname + "/views", 
    dest: __dirname + "/public",
    debug: true,
    force: true,
    compile : function(str, path) {
      console.log('compiling');
      return stylus(str)
        .set('filename', path)
        .set('warn', true)
        .set('compress', true);
    }
  })
 );

//Setting up the public directory
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
app.post('/submit',routes.submit)
app.get('/', routes.index);

//Create the server instance using express app
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
