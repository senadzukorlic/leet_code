// //88. Merge Sorted Array
// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1 //2 duzina regularnih clanova niza1
//   let j = n - 1 //2 duzina niza2
//   let k = m + n - 1 //5 duzina niza1

//   //m elemnit niz1 koji se trebaju sppojiti,n elementi niza2,n+m velicina niza1
//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i]
//       i--
//     } else {
//       nums1[k] = nums2[j]
//       j--
//     }
//     k--
//   }
//   console.log("Array:", nums1)
// }

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

//27. Remove Element
var removeElement = function (nums, val) {
  // val - element kojeg treba ukloniti iz niza,koliko god da ih ima
  // nums - niz

  j = nums.length
  for (let i = 0; i < j; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }

  let k = nums.length
  return k
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
