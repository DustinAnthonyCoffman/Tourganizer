const Tour = require('../models/tour');



async function index(req, res) {
  const tours = await Tour.find({});
  res.status(200).json(tours);
}

async function show(req, res) {
  const tour = await Tour.findById(req.params.id);
  res.status(200).json(tour);
}

async function create(req, res) {
  const tour = await Tour.create(req.body);
  res.status(201).json(tour);
}

async function deleteOne(req, res) {
  const deletedTour = await Tour.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTour);
}

async function update(req, res) {
  const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedTour);
}


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
  };