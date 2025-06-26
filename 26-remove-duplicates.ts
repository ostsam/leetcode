const arr26 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums: number[]): number {
  for (let i = nums.length; i >= 0; i--) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}
const noDups = removeDuplicates(arr26);

console.log(noDups);
console.log(removeDuplicates(arr26));
