import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    syear: {
        type: String,
        required: true
    },
    smonth: {
        type: String,
        required: true
    },
    sweek: {
        type: String,
        required: true
    },
    samount: {
        type: Number,
        required: true
    },
    sstatus: {
        type: String,
        required: true
    }
}, { timestamps: true });

const StaffSalary = mongoose.model('StaffSalary', userSchema);

export default StaffSalary;
