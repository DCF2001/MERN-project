import Research from "../models/Research.model.js";
import multer from 'multer';

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded file
  },
});

const upload = multer({ storage: storage });

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

export const UploadImg = async (req, res, next) => {
    try {
        upload.array('images', 6)(req, res, (err) => {
            if (err) {
                console.error('Error uploading images:', err);
                return res.status(500).json({ message: 'Failed to upload images. Please try again later.' });
            }
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: 'No images were uploaded.' });
            }
            // Assuming uploads directory is static and served by Express
            const fileUrls = req.files.map((file) => ({ url: `/upload${file.filename}` }));
            res.status(200).json(fileUrls);
        });
    } catch (error) {
        next(error);
    }
};
