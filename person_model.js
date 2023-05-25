const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//establishing connection with mongoDB server
mongoose.connect("mongodb://127.0.0.1:27017/crud_management_system", { useNewUrlParser: true });
//Creating person schema
const personSchema = {
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 132
    },
    address: String,
    contact: String,
}

//creating mongoose model
const Person = new mongoose.model("Person", personSchema);

module.exports = Person;