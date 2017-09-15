module.exports = function rcgber ($el, options = {}) {
  const { num = 3, size = 30, alpha = 0.15 } = options
  const spotNum = num.toFixed ? num + 1 : getRangeRandom(num.max, num.min)

  if (typeof $el === 'string') $el = document.querySelector($el)

  const $container = document.createElement('div')
  $container.classList.add('rcgber-container')

  for (let i = 1; i <= spotNum; i++) {
    const { top, left } = getSpotOffset(spotNum, i)
    const spotSize = size.toFixed ? size : getRangeRandom(size.max, size.min)
    $container.appendChild(createSpot({ top, left, alpha, size: spotSize }))
  }

  $el.insertAdjacentElement('afterBegin', $container)
}

function createSpot ({ top, left, size, alpha }) {
  const halfSize = size / 2
  const { r, g, b } = getRandomRGB()
  const $spot = document.createElement('span')
  $spot.classList.add('rcgber-spot')

  Object.assign($spot.style, {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    marginTop: `-${halfSize}px`,
    marginLeft: `-${halfSize}px`,
    borderRadius: '50%',
    backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`
  })

  return $spot
}

function getRandomRGB () {
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256)
  return { r, g, b }
}

function getSpotOffset (num, index) {
  const top = Math.round(Math.random() * 100)
  const left = Math.round((100 / num * index))
  return { top, left }
}

function getRangeRandom (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}
