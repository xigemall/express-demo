const db = require('../../utils/mysql/mysql');
const redis = require('../../utils/redis');
const User = require('../models/userModel');

class userController {
    login(request, res) {
        console.log(request.body)
        res.json({user: '15882158753', password: '123456'})
    }

    index(req, res) {
        db.table('user').get(function (result) {
            res.send(result)
        })
    }

    store(req, res) {
        res.status(201)
        res.json({name: 'store'})
        res.end();
    }

    show(req, res) {
        res.json({name: 'show'}).end();
    }

    setRedis(req, res) {
        const data = redis.set('name', 'liu');
        res.send(data)
    }

    getRedis(req, res) {
        redis.get('name', function (value) {
            console.log(value)
            res.send(value)
        });
        // res.send('redis')
    }


    getMongoose(req, res) {
        // const user = new User;
        // user.name = 'name2';
        // user.title = 'title';
        // user.save();
        const user = User.find({}, function (err, documents) {
            console.log(documents)
            res.send(documents)
        });
    }
}

module.exports = new userController();

