const http = require('http')

const server = http.createServer((req, res) => {
  if ( req.method === 'POST' ){
    console.log('request method:', req.method)

    let postData = ''

    // stream 流
    req.on('data', chunk => {
      postData += chunk.toString()
    })

    req.on('end', () => {
      console.log(postData)
      res.end('post request end.')
    })

    console.log('content-type of post data:', req.headers['content-type'])
  }
})

server.listen(10000, () => {
  console.log('Server running at 10000 port')
})