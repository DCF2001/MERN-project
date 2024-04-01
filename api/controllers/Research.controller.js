import Research from "../models/Research.model.js"


export const CreateResearch = async (req,res,next) =>{
    try {
        
        const research = await Research.create (req.body);

        return res.status(201).json(research)
    } catch (error) {
        next(error)
    }
}


