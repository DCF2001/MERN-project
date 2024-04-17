import mongoose from "mongoose";
const { Schema } = mongoose;

const routerequestsSchema = new mongoose.Schema({
    Location_Details : {
                 type : String,
                 required : true
         },
        
             Type_and_Amount_of_Waste :{
                 type : String,
                 required : true
             },
        
             Preffered_Collection_Time : {
                 type : String,
                 required : true
             },
        
             Special_instructions : {
                 type : String,
                 required : true
                
            },

            Contact_information : {
                type : String,
                required : true
               
           }


});

export const RouteRequests = mongoose.model("RouteRequests", routerequestsSchema );

export default RouteRequests;