import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';

export const Register = async (req, res, next) => {
    const mname = req.body.mname;
    const memail = req.body.memail;
    const mphone =  Number(req.body.mphone);
    const mdate = req.body.mdate;
    const maddress =  req.body.maddress;
    const mage =  Number(req.body.mage);
    const mgender = req.body.mgender;
    const mrole = req.body.mrole;
    const mnic =  Number(req.body.mnic);
    const mwdays =  req.body.mwdays;
    const msalary =  Number(req.body.msalary);



    const newUser = new User({
        mname,
        memail,
        mphone,
        mdate,
        maddress,
        mage,
        mgender,
        mrole,
        mnic,
        mwdays,
        msalary

    })
try {

    await newUser.save();
    res.status(201).json('User created successfully!');
} catch (eror) {

   next(error);
}

};