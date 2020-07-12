const express = require('express')
const 

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "Hitting the wine route"})
})

module.exports = router