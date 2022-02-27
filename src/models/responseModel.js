class BaseModel {
  constructor(data, message){
    this.data = data
    this.message = message
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message){
    super(data, message)

    this.errno = 0
  }
}

class FailModel extends BaseModel {
  constructor(data, message){
    super(data, message)

    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  FailModel
}