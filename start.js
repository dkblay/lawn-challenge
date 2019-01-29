const { loadFile } = require('./utils')
const { join } = require('path')
const Mower = require('./mower')
const Operator = require('./operator')

const run = async () => {
  const fileName = 'input.txt'
  const filePath = join(__dirname, fileName)

  let input = null
  try {
    input = await loadFile(filePath)
  } catch (e) {
    console.error("File couldn't be loaded")
  }

  const [lawn, ...mowers] = input
  const lawData = lawn.split(' ').map(num => +num)
  for (let counter = 0, len = mowers.length; counter < len; counter += 2) {
    const parts = mowers[counter].split(' ')
    const position = [+parts[0], +parts[1]]
    const orientation = parts[2]
    const mower = new Mower([...position, orientation], lawData)
    const operator = new Operator(mower)
    const commands = mowers[counter + 1].split('')
    operator.run(commands)
    console.log(mower.position)
  }
}

run()
