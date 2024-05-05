import mongoose from "mongoose";

const garbageRouteSchema = mongoose.Schema(
    {
        number : {
            type :Number,
            required: true,
        },
        startLocation :{
            type :String,
            required:true
        },
        endLocation :{
            type :String,
            required:true
        },
        noOfHouses :{
            type :Number,
            required:true
        },
        houseAddresses :{
            type: String,
            required:true
        },
        date :{
            type:Date,
            required:true
        }
    },{
        timestamps: true,
    }
);

export const GarbageRoute = mongoose.model('garbageRouteSchema', garbageRouteSchema);