import { handleRequest } from './foobar'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
