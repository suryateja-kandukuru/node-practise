const express = require('express')
const path =  require('path')
const router = express.Router()

const products = []
router.get('/add-product', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '../', 'views','add-product.html'))
})

router.post('/add-product', (req,res) => {
  const data = req.body
  products.push(data)
 res.redirect('/')
})

module.exports.router = router
module.exports.products = products