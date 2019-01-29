const { actions } = require('./constants')
class Operator {
  constructor (mower) {
    this.mower = mower
  }

  run (commands) {
    commands.forEach((c) => {
      switch (c) {
        case actions.left:
          this.mower.turnLeft()
          break
        case actions.right:
          this.mower.turnRight()
          break
        case actions.foward:
          this.mower.move()
          break
      }
    })
  }
}

module.exports = Operator
