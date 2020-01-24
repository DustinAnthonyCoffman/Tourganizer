const User = require('../models/user');


module.exports = {

    create,
    delete: deleteOne,
    update
  };




async function create(req, res) {
    console.log(req.body)
    try {
       await User.findById(req.body.user._id).exec(function(err, user) {
        user.tours.forEach(function(tour) {
            console.log(tour.shows)

            tour.find((tour) => tour._id === 123)

        })   
        let {
                lineup,
                address,
                city,
                state,
                pay,
                confirmed
            } = req.body
       
                //let q2 = accounts.find((account) => account.acctNo === 123)
                shows.push({lineup, address, city, state, pay, confirmed});
            user.save(function(err) {
                if (err) return next(err)
                res.status(201).json()
            })
        }) 
        }  catch (error) {
            console.error(error)
            throw new Error(error)
            
        }
    }



    async function deleteOne(req, res) {
        try {
                let tourIndex = req.params.id;
                User.findById(req.body.userId, function(err, user) {
                    user.tours.remove(tourIndex);
                    user.save() 
                    res.status(200).json(tourIndex)
                    
                })
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