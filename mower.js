const { compass } = require('./constants')

class Mower {
  constructor (mowerData, lawanData) {
    [this.x, this.y, this.direction] = mowerData;
    [this.horizontalBoundary, this.verticalBoundary] = lawanData
  }

  navigate (value) {
    const cardinals = ['N', 'E', 'S', 'W']
    const index = cardinals.indexOf(this.direction)
    const newIndex = index + value
    if (newIndex < 0) {
      this.direction = compass.west
    } else if (newIndex > 3) {
      this.direction = compass.north
    } else {
      this.direction = cardinals[newIndex]
    }
  }

  get position () {
    return `${this.x} ${this.y} ${this.direction}`
  }

  turnLeft () {
    this.navigate(-1)
  }

  turnRight () {
    this.navigate(1)
  }

  _canMove (x, y) {
    return x >= 0 && x <= this.horizontalBoundary && y >= 0 && y <= this.verticalBoundary
  }

  move () {
    switch (this.direction) {
      case compass.east:
        if (this._canMove(this.x + 1, this.y)) this.x += 1
        break
      case compass.west:
        if (this._canMove(this.x - 1, this.y)) this.x -= 1
        break
      case compass.north:
        if (this._canMove(this.x, this.y + 1)) this.y += 1
        break
      case compass.south:
        if (this._canMove(this.x, this.y - 1)) this.y -= 1
        break
      default:
        throw new Error('Invalid direction...')
    }
  }
}

module.exports = Mower
