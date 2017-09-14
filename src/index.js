class Rcgber {
  constructor (options) {
    this.options = Object.assign({
      el: document.body,
      num: 3,
      min: 30,
      max: 50,
      alpha: 0.15
    }, options)
  }
}

Object.assign(Rcgber.prototype, {
  render () {
    const { num } = this.options
    const $container = document.createElement('div')

    Object.assign($container.style, {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    })

    for (let i = 0; i < num; i++) {
      const { alpha } = this.options
      const size = Math.round(Math.random() * (this.options.max - this.options.min) + this.options.min)
      const { top, left } = getPosition(num, i + 1)

      $container.appendChild(new Spot({ top, left, size, alpha }))
    }

    this.options.el.appendChild($container)
  }
})

class Spot {
  constructor (options) {
    this.options = Object.assign({
      top: '50%',
      left: '50%',
      size: 30,
      alpha: .15
    }, options)

    return this.makeSpot()
  }
}

Object.assign(Spot.prototype, {
  makeSpot () {
    const $spot = document.createElement('span')
    const { top, left, size, alpha } = this.options
    const halfSize = size / 2
    const { R, G, B } = getRandomRGB()

    Object.assign($spot.style, {
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      marginTop: `-${halfSize}px`,
      marginLeft: `-${halfSize}px`,
      borderRadius: '50%',
      backgroundColor: `rgba(${R}, ${G}, ${B}, ${alpha})`
    })

    return $spot
  }
})

function getRandomRGB () {
  const R = Math.round(Math.random() * 256)
  const G = Math.round(Math.random() * 256)
  const B = Math.round(Math.random() * 256)

  return { R, G, B }
}

function getPosition (num, index) {
  const top = Math.round(Math.random() * 100)
  const left = Math.round((100 / (num + 1) * index))

  return { top, left }
}

module.exports = Rcgber
