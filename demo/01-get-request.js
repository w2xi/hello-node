const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log('method: ', req.method)
  console.log('url: ', req.url)

  const query = querystring.parse(req.url.split('?')[1])

  res.end(JSON.stringify(query))
})

server.listen(10000, () => {
  console.log('Server running at 10000 port')
})

