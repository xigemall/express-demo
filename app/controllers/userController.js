const db = require('../../utils/mysql');
const redis= require('../../utils/redis');
const mongo = require('../../utils/mongodb')

class userController{
    index(req, res) {
        const data = function(results){
           res.send(results[0]);
        }
        db.select('select * from user where id=1',data);
        // res.json(data)
    }

    store(req, res) {
        res.status(201)
        res.json({name: 'store'})
        res.end();
    }

    show(req, res) {
        res.json({name: 'show'}).end();
    }

    setRedis(req,res){
        const data = redis.set('name','liu');
        res.send(data)
    }
    getRedis(req,res){
        redis.get('name',function(value){
            console.log(value)
            res.send(value)
        });
        // res.send('redis')
    }

    getMongo(req,res){
        const MongoClient = require('mongodb').MongoClient;
        const url = 'mongodb://192.168.0.18:27017';
        MongoClient.connect(url,function(err,client){

            client.db('data').collection('user').find({}).toArray(function(err,doc){
                console.log(doc)
                res.send(doc)
            });

        })
    }
}

module.exports = new userController();

