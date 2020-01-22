const Tour = require('../models/tour');



async function index(req, res) {
    try {
        const tours = await Tour.find({});
        res.status(200).json(tours);
        
    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }

}

async function show(req, res) {
    try {

        const tour = await Tour.findById(req.params.id);
        res.status(200).json(tour);
        
    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }

}

async function create(req, res) {
   console.log(req.body)
    try {
        
        const tour = await Tour.create(req.body);
        res.status(201).json(tour);

    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }
}


async function deleteOne(req, res) {
    try {
        
        const deletedTour = await Tour.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedTour);

    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }

}

async function update(req, res) {
    try {
        
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedTour);

    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }

}


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
  };