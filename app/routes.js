// External dependencies
const express = require('express')
const router = express.Router()

router.get('/address', (req, res) => {
  res.render('Address')
})

router.post('/results', (req, res) => {
  const postcode = req.body && req.body.postcode ? req.body.postcode.trim() : ''

  const results = [
    {
      name: 'High Street Pharmacy',
      address: '123 High Street, London',
      distance: '0.5 miles'
    },
    {
      name: 'Town Centre Pharmacy',
      address: '17 Market Road, London',
      distance: '1.2 miles'
    },
    {
      name: 'Community Pharmacy',
      address: '2 Station Road, London',
      distance: '1.8 miles'
    }
  ]

  res.render('Results', { postcode, results })
})

module.exports = router
