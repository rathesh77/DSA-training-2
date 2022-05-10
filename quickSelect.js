
function quick_select(array, begin, end, k) {

  if (k > array.length) {
    k = array.length
  }
  if (begin < end) {
    let j = partition(array, begin, end - 1, k)
    if (j < k - 1) {
      return quick_select(array, j + 1, end, k)

    } else if (j > k - 1) {
      return quick_select(array, begin, j, k)
    }
    return array[j]
  }
  return array[begin]
}


function partition(array, begin, end, k) {
  let pivot = array[begin]
  let i = begin
  let j = end

  while (i < j) {
    while (array[i] <= pivot) {
      i++
    }

    while (array[j] > pivot) {
      j--

    }

    if (i < j) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  let temp = array[begin]
  array[begin] = array[j]
  array[j] = temp

  return j
}

let arr = [1023, 2, 7, 190, 238, 512]


console.log(quick_select(arr, 0, arr.length, 4))