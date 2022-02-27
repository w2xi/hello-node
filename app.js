const querystring = require('querystring')
const blogRouteHandle = require('./src/routes/blog')

const serverHandler = (req, res) => {
  // 设置响应格式
  res.setHeader('Content-Type', 'application/json')

  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  req.path = path
  req.query = query

  getPostData(req).then(postData => {
    req.body = postData

    const blogData = blogRouteHandle(req, res)
  
    if (blogData) {
      res.end(JSON.stringify(blogData))
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.write('404 Not Found')
      res.end()
    }
  })
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    if (req.method === 'POST') {
      let postData = ''

      // stream 流
      req.on('data', chunk => {
        postData += chunk.toString()
      })

      req.on('end', () => {
        if ( !postData ){
          return resolve({})
        }

        return resolve(JSON.parse(postData))
        // console.log(postData)
        // res.end('post request end.')
      })
    } else {
      resolve({})
    }
  })
}

module.exports = serverHandler