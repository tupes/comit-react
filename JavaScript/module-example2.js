import { square, halve } from './module-example.js'

function processValue(num) {
  const squaredValue = square(num)
  const processedValue = halve(squaredValue)
  console.log(processedValue)
  return processedValue
}

processValue(5)

// export default processValue