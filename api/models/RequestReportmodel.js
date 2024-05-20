import mongoose from "mongoose";
const { Schema } = mongoose;

const RequestReportSchema = new mongoose.Schema({
    Date : {
                 type : Date,
                 required : true
         },
        
         Decision :{
                 type : String,
                 required : true
             },
        
             Amount : {
                 type : String,
                 required : true
             },
        
             Note: {
                 type : String,
                 required : true
                
            },

            


});

export const requestreport = mongoose.model("Requestreport", RequestReportSchema);

export default requestreport;