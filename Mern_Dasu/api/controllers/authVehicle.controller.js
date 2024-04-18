export const signUpDasu = (req, res) =>{

    const {username, email, password} = req.body;
    const newUser = new uservehicle({username, email, password});
    await.newUser.save();
    res.status(201).json('User created succefully!');
};