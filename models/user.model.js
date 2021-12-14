
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    username:String,
    password:{
        type:String,
        require:true
    }
    
})

module.exports = mongoose.model('User',userSchema)
