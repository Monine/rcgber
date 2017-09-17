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
    // 弧度计算公式：PI * 角度 / 180
    const halfSize = size / 2
    const height = halfSize / Math.cos(Math.PI / 6) + 1
    return {
      width: `${size}px`,
      height: `${height}px`,
      transform: `translate(-${halfSize}px, -${height / 2}px) rotate(${getRandomRotate()}deg)`
    }
  }
}

function getRandomRotate () {
  return Math.round(Math.random() * 360)
}
