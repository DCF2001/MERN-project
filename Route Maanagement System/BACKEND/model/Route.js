const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    number : {
        type :String,
        required: true
    },
    startLocation :{
        type :String,
        required:true
    },
    endLocation :{
        type :String,
        required:true
    },
    date :{
        type:Date,
        required:true
    }
})

const Route = mongoose.model("Route", RouteSchema);

module.exports = Route;