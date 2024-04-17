import mongoose from "mongoose";
const { Schema } = mongoose;

const createtaskSchema = new mongoose.Schema({
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
                 required : true
                
            }

});

export const CreateTask = mongoose.model("CreateTask", createtaskSchema);

export default CreateTask;