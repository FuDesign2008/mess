/**
 * @prettier
 */

// server send events examples

const express = require('express')

const router = express.Router()

router.get('/', (req, res /* , next */) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  })

  res.write('retry: 10000\n')
  res.write('event: connecttime\n')
  res.write(`data: ${new Date()}\n\n`)
  res.write(`data: ${new Date()}\n\n`)

  const interval = setInterval(() => {
    res.write(`data: ${new Date()}\n\n`)
  }, 2000)

  req.connection.addListener(
    'close',
    () => {
      clearInterval(interval)
    },
    false,
  )
})

module.exports = router
