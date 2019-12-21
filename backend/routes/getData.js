const router = require('express').Router()
let getData = require('../models/data.json')

// Get API

router.route('/').get((req,res)=>{
   res.json({getData})
})

module.exports = router;