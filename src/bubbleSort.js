export default function bubbleSort (array) {
  let swap, temp
  do {
    swap = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1] && !isNaN(array[i])) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swap = true
      } else if (isNaN(array[i])) {
        return 'invalid input'
      }
    }
  } while (swap)
}
