const express = require('express')
const app = express()
const mongoose = require("mongoose")
const routeUser = require('./routes/user.route')
const bodyParser = require('body-parser')

const port = 8080
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// mongoose.connect('mongodb://localhost/27017/examples')
// mongoose.connect('mongodb://localhost:27017/cuoi')
mongoose.connect('mongodb://localhost:7897/examples')
// mongoose.connect('mongodb://localhost/bepmina')
const User = require('./models/user.model')
console.log(mongoose.connection.readyState);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/post',async(req,res)=>{

  let user = new User({username,password}=req.body)
  try {
    let usedUser = await user.save()
    res.json(usedUser)
  } catch (error) {
    res.json('err')
  }
})
app.get('/get',async(req,res)=>{
  try {
    let user = await User.find()
    res.json(user)
  } catch (error) {
    res.json('err')
    
  }
})
app.use('/user',routeUser)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})