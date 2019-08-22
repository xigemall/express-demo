const mongoose = require('mongoose');
const {mongo} = require('../../config/database');
const uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;
mongoose.connect(uri, function (error) {
    if (error) throw error;
});

module.exports = mongoose;
