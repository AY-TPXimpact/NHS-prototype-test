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
      name: 'Riverside Pharmacy',
      address: '14 Cornwall Road, Waterloo, London, SE1 675',
      website: 'https://riversidepharmacy.example',
      websiteText: 'Riverside pharmacy website',
      openUntil: '6:30pm',
      phone: '02 3544 4334',
      phoneHref: 'tel:0235444334',
      email: 'riversidepharmacy@gmail.com',
      emailHref: 'mailto:riversidepharmacy@gmail.com',
      services: [
        'Pharmacy First',
        'Blood pressure check',
        'Flu vaccination',
        'NHS repeat prescription'
      ],
      bookingOptions: [
        {
          text: 'Book through NHS booking services',
          href: 'https://www.nhs.uk/nhs-services/online-services/',
          external: true
        },
        {
          text: 'Book through pharmacy’s website',
          href: 'https://riversidepharmacy.example',
          external: true
        },
        {
          text: 'Book by calling 02 3544 4334',
          href: 'tel:0235444334',
          external: false
        }
      ],
      access: 'Consultation room, car parking, disabled car parking, step-free access',
      secondaryBookingText: 'Book through NHS booking services',
      secondaryBookingHref: 'https://www.nhs.uk/nhs-services/online-services/'
    },
    {
      name: 'Harborne Pharmacy',
      address: '22 Harborne Road, Birmingham, B17 9QJ',
      website: 'https://harbornepharmacy.example',
      websiteText: 'Harborne pharmacy website',
      openUntil: '7:00pm',
      phone: '0121 555 0198',
      phoneHref: 'tel:01215550198',
      email: 'harbornepharmacy@example.com',
      emailHref: 'mailto:harbornepharmacy@example.com',
      services: [
        'Pharmacy First',
        'Blood pressure check',
        'Flu vaccination',
        'NHS repeat prescription'
      ],
      bookingOptions: [
        {
          text: 'Book through NHS booking services',
          href: 'https://www.nhs.uk/nhs-services/online-services/',
          external: true
        },
        {
          text: 'Book through Harborne Pharmacy website',
          href: 'https://harbornepharmacy.example',
          external: true
        },
        {
          text: 'Book by calling 0121 555 0198',
          href: 'tel:01215550198',
          external: false
        }
      ],
      access: 'Consultation room, disabled parking, step-free access',
      secondaryBookingText: 'Book through NHS booking services',
      secondaryBookingHref: 'https://www.nhs.uk/nhs-services/online-services/'
    },
    {
      name: 'Waterside Pharmacy',
      address: '8 Waterside Lane, Cambridge, CB1 2LE',
      website: 'https://watersidepharmacy.example',
      websiteText: 'Waterside pharmacy website',
      openUntil: '7:30pm',
      phone: '01223 555 0123',
      phoneHref: 'tel:012235550123',
      email: 'watersidepharmacy@example.com',
      emailHref: 'mailto:watersidepharmacy@example.com',
      services: [
        'Pharmacy First',
        'Blood pressure check',
        'Flu vaccination',
        'NHS repeat prescription'
      ],
      bookingOptions: [
        {
          text: 'Book through NHS booking services',
          href: 'https://www.nhs.uk/nhs-services/online-services/',
          external: true
        },
        {
          text: 'Book through Waterside Pharmacy website',
          href: 'https://watersidepharmacy.example',
          external: true
        },
        {
          text: 'Book by calling 01223 555 0123',
          href: 'tel:012235550123',
          external: false
        }
      ],
      access: 'Consultation room, car parking, disabled car parking, step-free access',
      secondaryBookingText: 'Book through NHS booking services',
      secondaryBookingHref: 'https://www.nhs.uk/nhs-services/online-services/'
    }
  ]

  res.render('Results', { postcode: postcode.toUpperCase(), results })
})

module.exports = router
