import bcryptjs from 'bcryptjs';
import Listing from '../models/listing.model.js';

export const test = (req, res)=> {
    res.json({
        message: 'Api route is working ! ',
    });
};

export const getListings = async (req, res, next) => {
    try {
      const listings = await Listing.find();
  
      // Check if any listings were found
      if (!listings.length) {
        return res.status(404).json({ message: 'No listings found' });
      }
  
      res.status(200).json(listings);
    } catch (error) {
      next(error); // Pass the error to the error handler middleware
    }
  };
  