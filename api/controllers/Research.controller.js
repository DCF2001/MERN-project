import Research from "../models/Research.model.js"


export const CreateResearch = async (req,res,next) =>{
    try {
        
        const research = await Research.create (req.body);

        return res.status(201).json(research)
    } catch (error) {
        next(error)
    }
};


export const ReadResearch = async (req, res, next) => {
    try {
        // Find all research data
        const researchData = await Research.find();

        // Return the data as JSON response
        return res.status(200).json(researchData);
    } catch (error) {
        next(error);
    }
};



