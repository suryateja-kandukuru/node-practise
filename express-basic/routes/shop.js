const path = require('path')
const express = require('express')
const adminRoute = require('./admin')
const router =  express.Router()

router.get('/', (req,res) =>{
  // res.status(200).sendFile(path.join(__dirname, '../', 'views',  'shop.html'))
  const  products = adminRoute.products
  res.render('shop', {prods: products})
})

module.exports = router