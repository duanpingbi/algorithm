/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空
示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
* 可以利用归并排序的思想
*/
var findMedianSortedArrays = function (nums1, nums2) {
    let temp = new Array(nums1.length + nums2.length);
    let i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length) {
        temp[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
    }
    while (i < nums1.length) {
        temp[k++] = nums1[i++];
    }
    while (j < nums2.length) {
        temp[k++] = nums2[j++];
    }
    if (temp.length % 2 === 0) {
        return parseFloat((temp[parseInt(temp.length / 2)] + temp[parseInt((temp.length - 1) / 2)]) / 2);
    } else {
        return temp[parseInt(temp.length / 2)];
    }
};

let res = findMedianSortedArrays([1, 3], [2]);
console.log('res', res);