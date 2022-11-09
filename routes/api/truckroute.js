const express = require('express')
const truckCtrl = require('../../controllers/api/trucks')

const router = express.Router()

// ==== GET /api/users/check-token
// router.get('/check-token', truckCtrl.checkToken);

// ==== POST /api/users
router.post('/', truckCtrl.create)


module.exports = router;