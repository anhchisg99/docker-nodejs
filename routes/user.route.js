const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('con heo be be')
})
module.exports = router