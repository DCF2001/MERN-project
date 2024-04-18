import Staff from '../models/staff.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newStaff = new Staff({ username, email, password: hashedPassword });
    try {
      await newStaff.save();
      res.status(201).json('User created successfully!');
    } catch (error) {
      next(error);
    }
};
 
  
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await Staff.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
};


export const google = async (req, res, next) => {
    try {
      const staff = await Staff.findOne({ email: req.body.email });
      if (staff) {
        const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = user._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newStaff = new Staff({
          username:
            req.body.name.split(' ').join('').toLowerCase() +
            Math.random().toString(36).slice(-4),
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.photo,
        });
        await newStaff.save();
        const token = jwt.sign({ id: newStaff._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = newStaff._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
};
  
