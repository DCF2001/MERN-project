const mongoose = require('mongoose');

const schema = mongoose.Schema;

const CreatetaskSchema = new schema({

    Name : {
        type : String,
        required : true
    },

    Property_Type :{
        type : String,
        required : true
    },

    Service : {
        type : String,
        required : true
    },

    Other_Services : {
        type : String,
        
    }
}, { timestamps : true});

const Createtask = mongoose.model("Createtask",CreatetaskSchema );

module.exports = Createtask;