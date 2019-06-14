const express = require('express')
const router = express.Router();

const user = require('../models/user')

router.get('/', (req, res) => {
    return res.send(Object.values(user))
})



module.exports = router;