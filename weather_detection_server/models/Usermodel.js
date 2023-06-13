const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    phone: String,
    profession: String,
    gender: String,
    birthday: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    imageurl: String

})





const User = mongoose.model('user', UserSchema);
module.exports = User;



