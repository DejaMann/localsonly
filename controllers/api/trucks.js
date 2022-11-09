const Truck = require('../../models/trucks')

async function create(req, res) {
    try {
       const truck = await Truck.create(req.body) 
       res.json(Truck)
    } catch (err) {
        console.log(err);
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
    }

}

module.exports = {create}