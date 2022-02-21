const http = require('http')
const serverHandler = require('../app')

const PORT = 10000

const server = http.createServer(serverHandler)

server.listen(PORT, () => {
  console.log('Server running at 10000 port')
})

