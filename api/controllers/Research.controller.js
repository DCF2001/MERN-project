import Research from "../models/Research.model.js";


export const CreateResearch = async (req, res, next) => {
    try {
        const research = await Research.create(req.body);
        return res.status(201).json(research);
    } catch (error) {
        next(error);
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


export const RReadResearch = async (req, res, next) => {
    try {
        const { researchId, title, category, date } = req.query;

        if (researchId || title || category || date) {
            const researchData = await Research.find({ 
                researchId,
                title,
                category,
                date
            });
            
            return res.status(200).json(researchData);
        }
    } catch (error) {
        next(error);
    }
};


export const RemoveResearch = async (req, res, next) => {
    try {
      const { researchId } = req.params;
      const deletedResearch = await Research.findOneAndDelete({ researchId });
      if (!deletedResearch) {
        return res.status(404).json({ error: 'Research not found' });
      }
      return res.status(204).send(); 
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  export const UpdateResearch = async (req, res) => {
    const { researchId } = req.params; 
    const newData = req.body;
    try {
        const updatedResearch = await Research.findOneAndUpdate({ researchId }, newData, { new: true });
        if (!updatedResearch) {
            return res.status(404).json({ message: "Research not found" });
        }
        return res.status(200).json({ message: "Research updated successfully", updatedResearch });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
};

export const RetrieveProducts = async (req, res, next) => {
    try {
       
        const products = await Research.find({ isProduct: true });

       
        return res.status(200).json(products);
    } catch (error) {
       
        next(error);
    }
};


