const blogAPI = require("../controllers/blog")
const { SuccessModel } = require("../models/responseModel")

const blogRouteHandle = (req, res) => {
  const method = req.method
  const id = req.query.id
  const body = req.body
  // console.log(req.path)
  
  if ( method === 'GET' && req.path === '/api/blog/list' ){
    const results = blogAPI.get()
  
    return new SuccessModel(results)
  }else if ( method === 'GET' && req.path === '/api/blog/detail' ){
    const result = blogAPI.detail(id)

    return new SuccessModel(result)
  }else if ( method === 'POST' && req.path === '/api/blog/new' ){
    console.log('id', id);
    console.log('reqData', body);

    const result = blogAPI.add(id, body)

    return new SuccessModel(result)
  }else if ( method === 'POST' && req.path === '/api/blog/update' ){
    console.log('id', id);
    console.log('reqData', body);

    const result = blogAPI.update(id, body)

    return new SuccessModel(result)
  }else if ( method === 'POST' && req.path === '/api/blog/delete' ){
    console.log('id', id);

    const result = blogAPI.delete(id)

    return new SuccessModel(result)
  }else {
    return {
      msg: '404 Not Found',
    }
  }
}

module.exports = blogRouteHandle