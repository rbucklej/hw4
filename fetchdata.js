var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
var url = 'https://api-v3.mbta.com/vehicles?api_key=7347704f744f4c69b536525085cf0d8f&filter[route]=1&include=trip'
var fetch = require('node-fetch')

async function fetchurl(){
    var url = 'https://api-v3.mbta.com/vehicles?api_key=7347704f744f4c69b536525085cf0d8f&filter[route]=1&include=trip'
    var res= await fetch(url)
    var json= await res.json()
    return json.data}

db.defaults({ vehicles: [] }).write()

async function datafetch() {
    var buses=[]
    data= await fetchurl()
    console.log(new Date())
    for (var i = 0; i < data.length; i++) {
        id= data[i].id
        label = data[i].attributes.label    
        direction_id = data[i].attributes.direction_id
        lat = data[i].attributes.latitude
        long = data[i].attributes.longitude
        buses.push({id:id,
            direction_id:direction_id,
            label:label,
            lat:lat,
            long:long})}
        db.get('vehicles')
        .push(buses)
        .write()
    }

startTime=new Date().getTime()

var myvar=setInterval(function(){
                datafetch()
                if (new Date().getTime()-startTime>3600000){
                    clearInterval(myvar)
                }
                },15000)