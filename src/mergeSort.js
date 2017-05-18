
export default function mergeSort (array) {
  const lngth = array.length
  if (lngth < 2) {
    return array
  }
  if (array.some(isNaN)) {
    return 'invalid input'
  } else {
    let midPoint = Math.floor(lngth / 2)
    let left = array.slice(0, midPoint)
    let right = array.slice(midPoint)
    return merge(mergeSort(left), mergeSort(right), array)
  }
}

function merge (left, right, array) {
  let leftLngth = left.length
  let rightLngth = right.length
  let lIndex = 0
  let rIndex = 0
  let aIndex = 0
  while (lIndex < leftLngth && rIndex < rightLngth) {
    if (left[lIndex] < right[rIndex]) {
      array[aIndex++] = left[lIndex++]
    } else {
      array[aIndex++] = right[rIndex++]
    }
  }

  while (lIndex < leftLngth) {
    array[aIndex++] = left[lIndex++]
  }

  while (rIndex < rightLngth) {
    array[aIndex++] = right[rIndex++]
  }
  return array
}
