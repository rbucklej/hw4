var fetch    = require('node-fetch');
var low      = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter  = new fs('db.json');
var db       = low(adapter);

// Set some defaults
db.defaults({ vehicles: [] }).write()
var count = db.get('vehicles')
			  .size()
			  .value()

			  
console.log(count);