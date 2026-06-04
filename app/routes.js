// External dependencies
const express = require('express')
const router = express.Router()

function isValidPostcode(postcode) {
  const normalized = postcode.toUpperCase().replace(/\s+/g, '')
  return /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(normalized)
}

router.get('/address', (req, res) => {
  res.render('Address')
})

router.post('/results', (req, res) => {
  const postcode = req.body && req.body.postcode ? req.body.postcode.trim() : ''
  const errors = []

  if (!postcode) {
    errors.push({ text: 'Enter a postcode', href: '#postcode' })
  } else if (!isValidPostcode(postcode)) {
    errors.push({ text: 'Enter a valid postcode in England, like LS1 1AB', href: '#postcode' })
  }

  if (errors.length) {
    return res.render('Address', { postcode, errors })
  }

  const results = [
    {
      name: 'High Street Pharmacy',
      address: '123 High Street, London',
      distance: '0.5 miles',
      website: 'https://highstreetpharmacy.example'
    },
    {
      name: 'Town Centre Pharmacy',
      address: '17 Market Road, London',
      distance: '1.2 miles',
      website: 'https://towncentrepharmacy.example'
    },
    {
      name: 'Community Pharmacy',
      address: '2 Station Road, London',
      distance: '1.8 miles',
      website: 'https://communitypharmacy.example'
    }
  ]

  res.render('Results', { postcode: postcode.toUpperCase(), results })
})

module.exports = router
