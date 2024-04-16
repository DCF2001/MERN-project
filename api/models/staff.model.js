import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model('Staff', userSchema);

export default Staff;