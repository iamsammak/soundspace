// A
// matrix_region_sum
// given a matrix of integers and coordinates of a rectangular region within the matrix
// find the sum of numbers falling inside the rectangle

// ex.
// Matrix[[1,2], [3,4], [5,6]]
// 1 2
// 3 4
// 5 6
// top_left_coords = [0][0]
// top_right_coords = [3][1]


// RUBY
// def matrix_region_sum(matrix, top_left_coords, bottom_right_coords)
//   total_sum = 0
//
//   (top_left_coords[0]..bottom_right_coords[0]).each do |row_idx|
//     (top_left_coords[1]..bottom_right_coords[1]).each do |col_idx|
//       total_sum += matrix[row_idx][col_idx]
//     end
//   end
//
//   total_sum
// end

// merge, mergeSort
function merge(left, right) {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }
  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}


// function merge(left, right) {
//   const merged = [];
//
//   while (left.length > 0 && right.length > 0) {
//     let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
//     merged.push(nextItem);
//   }
//
//   return merged.concat(left, right);
// }
//
// function mergeSort(array) {
//   if (array.length < 2) {
//     return array;
//   } else {
//     const middle = Math.floor(array.length / 2);
//
//     const left = mergeSort(array.slice(0, middle));
//     const right = mergeSort(array.slice(middle));
//
//     return merge(left, right);
//   }
// }

// bsearch
function bsearch(array, target) {
  if (array.length === 0) {
    return -1;
  }
  const probeIdx = Math.floor(array.length / 2);
  const probe = array[probeIdx];
  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    const left = array.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = array.slice(probeIdx + 1);
    const subproblem = bsearch(right, target);

    return subproblem === -1 ? -1 : subproblem + (probeIdx + 1);
  }
}


// function bsearch(numbers, target) {
//   if (numbers.length === 0) {
//     return -1;
//   }
//
//   const probeIdx = Math.floor(numbers.length / 2);
//   const probe = numbers[probeIdx];
//   if (target === probe) {
//     return probeIdx;
//   } else if (target < probe) {
//     const left = numbers.slice(0, probeIdx);
//     return bsearch(left, target);
//   } else {
//     const right = numbers.slice(probeIdx + 1);
//     const subproblem = bsearch(right, target);
//
//     return subproblem === -1 ? -1 : subproblem + (probeIdx + 1);
//   }
// }


// productify

// Given a list of numbers in an array, replace all the numbers with the product of all other numbers. Do this in O(n) time without using division.
//
// Solution

// ex [1, 2, 3, 4]
// products [24, 12, 8, 6]
//
// def productify(arr)
//   products = Array.new(arr.length, 1)
//
//   lower_prod = 1
//   0.upto(arr.size - 1) do |i|
//     products[i] = products[i] * lower_prod
//     lower_prod = lower_prod * arr[i]
//   end
//
//   upper_prod = 1
//   (arr.size - 1).downto(0) do |i|
//     products[i] = products[i] * upper_prod
//     upper_prod = upper_prod * arr[i]
//   end
//
//   products
// end

// Each item products[j] in the result array can be thought
// of the product of all elements where index i > j (the elements before i) times all the items where index i < j (the elements after i).
//
// How do we get the product of all the items before and
// after each element in O(n) time? We can first find the lower_product at each index i, which keeps track of the product of all the elements before i, and multiply each element products[i] in the result array by the current lower_product. We then step backwards through the indices to calculate the upper_product and multiply each element products[i] in the result array with the current upper_product.
//
// This allows us to calculate the product of all elements except
// for the element at arr[i] in O(n) time.
