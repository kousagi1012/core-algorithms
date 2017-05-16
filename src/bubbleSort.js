export default function bubbleSort (array) {
  let swap, temp
  do {
    swap = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swap = true
      }
    }
  } while (swap)
}
