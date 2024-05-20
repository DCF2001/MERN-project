import mongoose from "mongoose";
const { Schema } = mongoose;

const PaymentsSchema = new mongoose.Schema({
    Card_Number : {
                 type : String,
                 required : true
         },
        
         Amount :{
                 type : String,
                 required : true
             },
        
             Expiration_Month : {
                 type : String,
                 required : true
             },
        
             Expiration_Year : {
                 type : String,
                 required : true
                
            },

            CVN : {
                type : String,
                required : true
               
           },

            


});

export const payments = mongoose.model("Payments", PaymentsSchema);

export default payments;