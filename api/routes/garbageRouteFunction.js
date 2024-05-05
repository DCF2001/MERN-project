import express from 'express';
import {GarbageRoute} from '../models/garbageRoute.js';

const router = express.Router();

//create
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.number ||
            !req.body.startLocation ||
            !req.body.endLocation ||
            !req.body.noOfHouses ||
            !req.body.houseAddresses ||
            !req.body.date
        ) {
            return res.status(400).send({
                message: 'Send all required fields: number, startLocation, endLocation, noOfHouses, houseAddresses, date',
            });
        }
        const newGarbageRoute = {
            number: req.body.number,
            startLocation: req.body.startLocation,
            endLocation: req.body.endLocation,
            noOfHouses: req.body.noOfHouses,
            houseAddresses: req.body.houseAddresses,
            date: req.body.date,
        };

        const garbageRoute = await GarbageRoute.create(newGarbageRoute);

        return res.status(201).send(garbageRoute);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//get all
router.get('/', async(req,res) => {
    try{
        const garbageRoutes = await GarbageRoute.find({});
        return res.status(200).json({
            count: garbageRoutes.length,
            data: garbageRoutes
        });
    }catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//get one
router.get('/:id', async(req,res) => {
    try{
        const { id } = req.params;
        const garbageRoute = await GarbageRoute.findById(id);
        return res.status(200).json(garbageRoute);
    }catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//update
router.put('/:id', async(req, res) => {
    try{
        if (
            !req.body.number ||
            !req.body.startLocation ||
            !req.body.endLocation ||
            !req.body.noOfHouses ||
            !req.body.houseAddresses ||
            !req.body.date
        ){
            return res.status(400).send({
                message: 'Send all required fields: number, startLocation, endLocation, noOfHouses, houseAddresses, date',
            });
        }  

        const { id } = req.params;

        const result = await GarbageRoute.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({message: 'Record is not found'});
        }

        return res.status(200).send({message: 'Record Updated Successfully'});
    }catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//delete
router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;

        const result =  await GarbageRoute.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message: 'Record is not found'});
        }

        return res.status(200).send({message: 'Record Deleted Successfully'});
    }catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;