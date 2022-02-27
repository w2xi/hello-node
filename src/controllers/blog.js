const blogAPI = {
  get(){
    return [
      {
        id: 1,
        title: 'title-1',
        content: 'content-1',
        createTime: 1645536040119,
      },
      {
        id: 2,
        title: 'title-2',
        content: 'content-2',
        createTime: 1645536060119,
      }
    ]
  },

  detail(id){
    return {
      id,
      title: 'title-1',
      content: 'content-1'
    }
  },

  add(id, reqData){
    return {
      id,
      ...reqData,
    }
  },

  update(id, reqData){
    return {
      id,
      ...reqData
    }
  },

  delete(id){
    return {
      id,
    }
  }
}

module.exports = blogAPI