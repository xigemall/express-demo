const db = require('../../utils/mysql');
const redis= require('../../utils/redis');

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
        redis.set('name','liu');
        res.send('redis set')
    }
    getRedis(req,res){
        redis.get('name',function(value){
            console.log(value)
        });
        res.send('redis')
    }
}

module.exports = new userController();

