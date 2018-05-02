/**
 * @prettier
 */

// server send events examples

const express = require('express')

const router = express.Router()

router.get('/', (req, res /* , next */) => {
  res.render('events', {
    title: 'Server-send events',
  })
})

module.exports = router
