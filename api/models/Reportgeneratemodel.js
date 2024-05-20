import mongoose from "mongoose";
const { Schema } = mongoose;

const ReportgeneratesSchema = new mongoose.Schema({
    Date : {
                 type : Date,
                 required : true
         },
        
             Income_Amount :{
                 type : Number,
                 required : true
             },
        
             Amount_of_Expenditure : {
                 type : Number,
                 required : true
             },
        
             Special_Note : {
                 type : String,
                 required : true
                
            },

            


});

export const reportgenerate = mongoose.model("Reportgenerate", ReportgeneratesSchema);

export default reportgenerate;