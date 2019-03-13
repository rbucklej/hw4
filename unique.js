var fetch    = require('node-fetch');
var low      = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter  = new FileSync('db.json');
var db       = low(adapter);

db.defaults({ vehicles: [] }).write()
var unids=[]
var buus = db.get('vehicles')
		
console.log(buus.__wrapped__.vehicles[1][2].id);
var datalist=buus.__wrapped__.vehicles
datalist.forEach(function(inserted){
    for(var j=0;j<inserted.length;j++){
        if(unids.includes(inserted[j].id)){
            return unids}
        else{
            unids.push(inserted[j].id) 
            }
        }
    })

console.log(unids)
console.log('number of unique bus IDs='+unids.length)