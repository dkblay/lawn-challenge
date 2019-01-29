const { readFile } = require('fs')

const loadFile = (fileName) => {
  return new Promise((resolve, reject) => {
    readFile(fileName, 'UTF8', (err, data) => {
      if (err) {
        return reject(Error('An error occured'))
      }
      return resolve(data.split('\n'))
    })
  })
}

module.exports = {
  loadFile
}
