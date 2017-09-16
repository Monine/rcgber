export default {
  circle (size) {
    const halfSize = size / 2
    return { width: `${size}px`, height: `${size}px`, marginTop: `-${halfSize}px`, marginLeft: `-${halfSize}px` }
  },
  heart (size) {
    size = (size / 1.5).toFixed(2)
    const halfSize = size / 2
    return {
      width: `${size}px`,
      height: `${size}px`,
      transform: `translate(-${halfSize}px, -${halfSize}px) rotate(${getRandomRotate()}deg)`
    }
  },
  envelope (size) {
    const height = Math.sqrt((size * size) / (2 * (1 - Math.cos(90)))).toFixed(2)
    return {
      width: `${size}px`,
      height: `${height}px`,
      transform: `translate(-${size / 2}px, -${height / 2}px) rotate(${getRandomRotate()}deg)`
    }
  }
}

function getRandomRotate () {
  return Math.round(Math.random() * 360)
}
