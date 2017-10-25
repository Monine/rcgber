import iconStyle from './icon-style'

module.exports = function rcgber ($el, options = {}) {
  const { icons, containerStyle, size = 30, alpha = 0.15 } = options
  let { num } = options
  num = num.toFixed ? num : getRangeRandom(num.max, num.min)
  const rangeNum = num + 1

  if (typeof $el === 'string') $el = document.querySelector($el)

  const $container = document.createElement('div')
  $container.className = 'rcgber-container'
  Object.assign($container.style, containerStyle)

  const iconLen = icons.length
  for (let i = 1; i < rangeNum; i++) {
    const { top, left } = getIconOffset(rangeNum, i)
    const icon = iconLen === 1 ? icons[0] : icons[Math.floor(Math.random() * iconLen)]
    const iconSize = icon.size
      ? icon.size.toFixed ? icon.size : getRangeRandom(icon.size.min, icon.size.max)
      : size.toFixed ? size : getRangeRandom(size.min, size.max)
    const iconAlpha = icon.alpha || alpha
    const iconLightAlpha = iconAlpha + 0.1

    $container.appendChild(createIcon({ icon, top, left, alpha: iconAlpha, lightAlpha: iconLightAlpha, size: iconSize }))
  }

  $el.insertAdjacentElement('afterBegin', $container)
}

function createIcon ({ icon, top, left, size, alpha, lightAlpha }) {
  const { r, g, b } = getRandomRGB()
  let $icon = null

  if (!icon.type || icon.type === 'css') {
    const { name } = icon
    $icon = document.createElement('span')
    $icon.className = `rcgber-icon--${name}`
    Object.assign($icon.style, {
      color: `rgba(${r}, ${g}, ${b}, ${lightAlpha})`,
      backgroundColor: `rgba(${r}, ${g}, ${b}, ${alpha})`
    }, iconStyle[name](size))
  } else if (icon.type === 'img') {
    $icon = document.createElement('img')
    $icon.src = icon.src
    $icon.className = 'rcgber-icon--img'
    Object.assign($icon.style, {
      width: `${size}px`,
      opacity: alpha,
      transform: `translate(-50%, -50%) rotate(${Math.round(Math.random() * 360)}deg)`
    })
  }

  $icon.className += ' rcgber-icon'
  Object.assign($icon.style, {
    top: `${top}%`,
    left: `${left}%`
  })

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
