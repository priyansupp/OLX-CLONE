const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        require: [true, 'firstName is required.']
    },
    lastName: {
        type: String,
        require: [true, 'lastName is required.']
    },
    age: {
        type: String
    },
    hostel: {
        type: String,
        require: [true, 'Hostel is required.']
    },
    department: {
        type: String
    },
    email: {
        type: String,
        require: [true, 'Email is required.']
    },
    phone: {
        type: Number,
        require: [true, 'Phone number is required.']
    },
    profile_pic: {
        type: File
    },
    password: {
        type: String,
        require: [true, 'Password is required.']
    }
});

// creates a model/collection with the name 'users' by pluralising the first parameter. The 2nd parameter is the schema it should follow to create the collection.
const Users = mongoose.model('user', userSchema);

module.exports = Users;


