var express = require('express');
var app = express();

var argv = require('minimist')(process.argv.slice(2));

var port = 3000;

if(argv.env && argv.env === 'prod'){
	app.use(express.static(__dirname + '/build'));
	port = 1337;
	console.log('Prod Server initialized');
} else {
	app.use(express.static(__dirname + '/src'));
	console.log('Dev Server initialized');
}



app.listen(port);
