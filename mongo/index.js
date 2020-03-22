const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/InsertDBNameHere', { useNewUrlParser: true, useUnifiedTopology: true });

let schema = mongoose.Schema({
    //_id: unique auto generated
    field1: String,
    field2: Object,
    field3: [Object]
});

let MongoCollection = mongoose.model('group', schema); //MongoCollection in mongo shell will appear as mongocollections

module.exports = MongoCollection