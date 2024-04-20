import Listing from '../models/listing.model.js';
import { errorHandler } from '../utiles/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};


export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
  
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }

    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json('Listing has been deleted!');
    } catch (error) {
      next(error);
    }
  };
   

  export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
  
  
    try {
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };

  // export const getListing = async (req, res, next) => {
  //   try {
  //     const listing = await Listing.findById(req.params.id);
  //     if (!listing) {
  //       return next(errorHandler(404, 'Listing not found!'));
  //     }
  //     res.status(200).json(listing);
  //   } catch (error) {
  //     next(error);
  //   }
  // };


  export const getListing = async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit) || 100;
      const startIndex = parseInt(req.query.startIndex) || 0;
  
      const searchTerm = req.query.searchTerm || ''; // Empty string by default
  
      const sort = req.query.sort || 'createdAt';
      const order = req.query.order || 'desc';
  
      const listing = await Listing.find({
        // Include searchTerm logic for name field
        name: searchTerm ? { $regex: searchTerm, $options: 'i' } : {}, // Apply regex only if searchTerm exists
      })
        .sort({ [sort]: order })
        .limit(limit)
        .skip(startIndex);
  
      return res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  };
  
 
  