const express = require('express');
const router = express.Router();
const app = express();
const userController = require('../app/controllers/userController');


const middleware = function(req,res,next){
    next();
};
app.use(middleware);

app.route('/user')
    .get(userController.index)
    .post(userController.store);

app.route('/user/:id')
    .get(userController.show);

app.route('/redis')
    .get(userController.getRedis);

app.route('/redis_set')
    .get(userController.setRedis);

app.route('/mongo')
    .get(userController.getMongo)

module.exports =  app;
