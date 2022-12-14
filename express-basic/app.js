const express = require('express')
const bodyParser = require('body-parser')
const path  = require('path')

const adminRoute  = require('./routes/admin')
const shopRoute  = require('./routes/shop')

const app = express()
app.set('view engine', 'pug') // telling  express to use view engine as pug
app.set('views', 'views') // telling express to  use  view  folder as  views

app.use(bodyParser.urlencoded({
  extended:false,
})) // using bodyparser to  parse the body from  req,res

app.use(express.static(path.join(__dirname, 'public'))) // setting  this express static to serve static files like .css,.js from public folder
app.use('/admin',adminRoute.router) // custom route /admin is more like module
app.use('/',shopRoute)

// 404
app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views',  '404.html'))
})

//server listen at 3000
app.listen(3000)