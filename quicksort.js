function quick_sort(array, begin, end) {
  if (begin < end) {
    let j = partition(array, begin, end - 1)
    array = quick_sort(array, begin, j)
    array = quick_sort(array, j + 1, end)
  }
  return array
}


function partition(array, begin, end) {
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

let arr = [1, 0, 2, 7, 4]


for (let i = 0; i < 100; i++) {
  let arr = []
  for (let j = 0; j < 1; j++) {
    const num = Math.floor(Math.random() * 100)
    arr.push(num)
  }
  arr = quick_sort(arr, 0, arr.length)
  console.log(is_sorted(arr))
}

function is_sorted(array) {
  for (let i = 1; i < array.length; i++)
    if (array[i] < array[i - 1])
      return false
  return true
}
console.log(quick_sort(arr, 0, arr.length))