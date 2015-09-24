var express = require('express');
var tilelive = require('tilelive');
require('tilelive-bridge').registerProtocols(tilelive);

var app = express();

tilelive.load('bridge://'+ __dirname +'/map.xml', function(err, source) {
	if (err) throw err;

	getGrid = function(req, res){
		var x = parseInt(req.params.x);
		var y = parseInt(req.params.y);
		var z = parseInt(req.params.z);
		console.log(x,y,z);
		source.getTile(z, x, y, function(err, tile, headers) {
			res.set('Access-Control-Allow-Origin', '*');
			res.set(headers);
			res.send(tile);
			return;
		});
	}

	app.listen(80);
	console.log("Listening on port 80");

	app.get('/:z(\\d+)/:x(\\d+)/:y(\\d+).*', getGrid);
});