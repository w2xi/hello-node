const blogRouteHandle = (req, res) => {
  const method = req.method

  console.log(req.path)

  if ( method === 'GET' && req.path === '/api/blog/list' ){
    return {
      msg: '博客列表接口',
    }
  }else if ( method === 'GET' && req.path === '/api/blog/detail' ){
    return {
      msg: '博客详情接口',
    }
  }else if ( method === 'POST' && req.path === '/api/blog/new' ){
    return {
      msg: '博客新增接口',
    }
  }else if ( method === 'POST' && req.path === '/api/blog/update' ){
    return {
      msg: '博客更新接口',
    }
  }else if ( method === 'POST' && req.path === '/api/blog/delete' ){
    return {
      msg: '博客删除接口',
    }
  }
}

module.exports = blogRouteHandle