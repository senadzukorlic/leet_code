// 88. Merge Sorted Array
function MergeSortedArray88(nums1, nums2, m, n) {
  nums1.length = m + n

  let j = 0
  for (let i = 0; i < n; i++) {
    if (nums1[j] < nums2[i]) {
      nums1.push(nums2[i])
      j++
      break
    } else if (nums1[j] === nums2[i]) {
      nums1.push(nums2[i])
      j++
      break
    } else if (nums1[j] > nums2[i]) {
      nums1.splice(j - 1, 0, nums2[i])
      j++
      break
    }
  }
  console.log("Merged arrays", nums1)
}

MergeSortedArray88([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3)
