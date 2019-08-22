const mongoose = require('../../utils/mongoose/mongoose');
const userSchema = new mongoose.Schema({
    title: 'string',
    name:'string'
});
const User = mongoose.model('User',userSchema);

module.exports = User;
