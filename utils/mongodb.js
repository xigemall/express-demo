const database = require('../config/database');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://192.168.0.18:27017';
const dbName = 'data';

// MongoClient.connect(url,{},function(err,client){
//    if(err) throw err;
//    const db = client.db(dbName);
//    db.collection('user').find().toArray(function (err,result) {
//        console.log(result);
//        client.close();
//    })
// });
//
// module.exports = {
//     find:function(){
//         console.log('ee')
//     }
// }


