/**
 * @prettier
 */
const express = require('express')

const router = express.Router()

router.get('/events', (req, res) => {
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
    res.write('event: usermsg\n')
    const json = {
      time: new Date().getTime(),
    }
    const jsonStr = JSON.stringify(json)
    res.write(`data: ${jsonStr}\n\n`)
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
