const blogRouteHandle = require('./src/routes/blog')

const serverHandler = (req, res) => {
  // 设置响应格式
  res.setHeader('Content-Type', 'application/json')

  const url = req.url
  const path = url.split('?')[0]

  req.path = path

  const blogData = blogRouteHandle(req, res)

  if ( blogData ){
    res.end(JSON.stringify(blogData))
  }else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found')
    res.end()``
  }
}


module.exports = serverHandler