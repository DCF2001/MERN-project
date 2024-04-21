import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    staffsize: {
        type: Number,
        required: true
    },
    workarea: {
        type: String,
        required: true
    },
    reqdate: {
        type: String,
        required: true
    },
    cnumber: {
        type: Number,
        required: true
    },
    reqstatus: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('StaffRequests', userSchema);

export default User;
