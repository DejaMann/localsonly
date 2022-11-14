const express = require('express')
const truckCtrl = require('../../controllers/api/trucks')

const router = express.Router()

// ==== GET /api/users/check-token
// router.get('/check-token', truckCtrl.checkToken);
router.get('/', (req, res) => {
    res.json({message:'hello'})
})
// ==== POST /api/users
router.post('/', truckCtrl.create)


module.exports = router;