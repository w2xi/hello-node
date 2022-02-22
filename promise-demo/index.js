const fs = require('fs')
const path = require('path')

// function getFileContent(filename, callback) {
//   const fullFilePath = path.resolve(__dirname, 'data', filename)

//   fs.readFile(fullFilePath, (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }

//     callback(JSON.parse(data.toString()))
//   })
// }

// callback hell

// getFileContent('a.json', res => {
//   console.log('aData', res)

//   getFileContent(res.next, res => {
//     console.log('bData', res)

//     getFileContent(res.next, res => {
//       console.log('cData', res)
//     })
//   })
// })


// Promise style

function getFileContent(filename) {
  const fullFilePath = path.resolve(__dirname, 'data', filename)

  return new Promise((resolve, reject) => {
    fs.readFile(fullFilePath, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })
}

getFileContent('a.json').then(res => {
  console.log('aData', res)

  return getFileContent(res.next)
}).then(res => {
  console.log('bData', res)

  return getFileContent(res.next)
}).then(res => {
  console.log('cData', res)
})