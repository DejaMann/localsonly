const express = require('express')
const shopCtrl = require('../../controllers/api/shops')

const router = express.Router()

// ==== GET /api/users/check-token
// router.get('/check-token', shopCtrl.checkToken);

// ==== POST /api/users
router.post('/', shopCtrl.create)


module.exports = router;