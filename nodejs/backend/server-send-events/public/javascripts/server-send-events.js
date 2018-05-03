/**
 * @prettier
 */
const console = window.console
if ('EventSource' in window) {
  const url = '/api/events'
  const source = new EventSource(url)

  source.addEventListener(
    'open',
    (event) => {
      console.log('open', event)
    },
    false,
  )

  source.addEventListener(
    'message',
    (event) => {
      console.log('message', event.data)
    },
    false,
  )

  source.addEventListener('usermsg', (event) => {
    console.log('usermsg', event.data)
  })

  source.addEventListener(
    'error',
    (event) => {
      console.log('error', event)
    },
    false,
  )
} else {
  console.log('no EventSource')
}
