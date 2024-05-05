import mongoose from "mongoose";
const { Schema } = mongoose;

const vehiclerequestSchema = new mongoose.Schema({
    First_Name : {
                 type : String,
                 required : true
            },
    
    Last_Name : {
                type : String,
                required : true
           },
        
             Type_of_Requested_Service :{
                 type : String,
                 required : true
             },
        
             Frequency_of_Service : {
                 type : String,
                 required : true
             },
        
             Preferred_Collection_days : {
                 type : String,
                 required : true
                
            },

            Type_and_Amount_of_Waste : {
                type : String,
                required : true
               
           },

           Special_Instructions_or_Requests : {
            type : String,
            required : true
           
       },

       Property_type : {
        type : String,
        required : true
       
   }

});

export const VehicleRequest = mongoose.model("VehicleRequests", vehiclerequestSchema);

export default VehicleRequest;