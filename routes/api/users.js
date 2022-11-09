const express = require('express')
const userCtrl = require('../../controllers/api/users')

const router = express.Router()

// ==== GET /api/users/check-token
router.get('/check-token', userCtrl.checkToken);

// ==== POST /api/users
router.post('/', userCtrl.create)


module.exports = router;