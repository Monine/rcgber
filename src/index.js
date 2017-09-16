import iconStyle from './icon-style'

module.exports = function rcgber ($el, options = {}) {
  const { icons = ['circle'], num = 3, size = 30, alpha = 0.15 } = options
  const iconNum = num.toFixed ? num + 1 : getRangeRandom(num.max, num.min)
  const lightAlpha = alpha + 0.1

  if (typeof $el === 'string') $el = document.querySelector($el)

  const $container = document.createElement('div')
  $container.className = 'rcgber-container'

  const iconLength = icons.length

  for (let i = 1; i <= iconNum; i++) {
    const { top, left } = getIconOffset(iconNum, i)
    const icon = iconLength === 1 ? icons[0] : icons[Math.floor(Math.random() * iconLength)]
    const iconSize = size.toFixed ? size : getRangeRandom(size.max, size.min)

    $container.appendChild(createIcon({ icon, top, left, alpha, lightAlpha, size: iconSize }))
  }

  $el.insertAdjacentElement('afterBegin', $container)
}

function createIcon ({ icon, top, left, size, alpha, lightAlpha }) {
  const halfSize = size / 2
  const { r, g, b } = getRandomRGB()
  const $icon = document.createElement('span')
  $icon.className = `rcgber-icon rcgber-icon--${icon}`

  Object.assign($icon.style, {
    top: `${top}%`,
    left: `${left}%`,
    color: `rgba(${r}, ${g}, ${b}, ${lightAlpha})`,
    backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`
  }, iconStyle[icon](size))

  return $icon
}

function getRandomRGB () {
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256)
  return { r, g, b }
}

function getIconOffset (num, index) {
  const top = Math.round(Math.random() * 100)
  const left = Math.round((100 / num * index))
  return { top, left }
}

function getRangeRandom (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}
