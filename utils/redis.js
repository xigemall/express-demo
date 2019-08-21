const redis = require('redis');
const database = require('../config/database');
const client = redis.createClient(database.redis);

client.on('error', function (err) {
    console.log('Error ' + err)
})

module.exports = {
    set:function(key,value){
       return client.set(key, value, redis.print);

    },
    get:function(key,callback){
       client.get(key,function(err,value){
            if(err) throw err;
           callback(value)
        });
    }
}

