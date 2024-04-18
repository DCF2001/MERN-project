
import mongoose from "mongoose";

const researchSchema = new mongoose.Schema(
    {
        researchId: {
            type: String,
            unique: true,
            required:true,
        },

        title: {
            type: String,
            required: true,
        },

        name:{
            type : String,
            required: true,
        },

            
        address:{
            type : String,
            required: true,
        },

        
        description:{
            type : String,
            required: true,
        },

     
        date: {
            type: Date,
            required: true,
        },

        category:{
            type: String,
            required: true,
        },

        composting:{
            type: Boolean,
            required: true,
        },

        reducing:{
            type: Boolean,
            required: true,
        },

        donating:{
            type: Boolean,
            required: true,
        },

        energy:{
            type: Boolean,
            required: true,
        },

        reuse:{
            type: Boolean,
            required: true,
        },

        other:{
            type: Boolean,
            required: true,
        },


        imgUrls:{

            type:Array,
            required:true,
        },

        
    isProduct: {
        type: Boolean,
        required: true,
        default: false 
    },
    
    
    price: {
        type: Number, 

    },
    importance: {
        type: String,
        
    }

},
    {timestamps:true}

 
);

const Research = mongoose.model('Research',researchSchema);

export default Research;