const User = require('../models/user');


module.exports = {
    index,
    create,
    delete: deleteOne,
    update
  };


async function index(req, res) {
    try {
        const user = await User.findById(req.body.user);
        res.status(200).json(user);
        
    } catch (error) {
        console.error(error)
        throw new Error(error)
        
    }
}


async function create(req, res) {
try {
    
   await User.findById(req.body.user._id).exec(function(err, user) {
        let {
            name
        } = req.body
        user.tours.push({name});
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

