const arr = [3, 3];

function twoSum(nums: number[], target: number): number[] {
  for (let firstIndex: number = 0; firstIndex <= nums.length; firstIndex++) {
    for (
      let secondIndex: number = firstIndex + 1;
      secondIndex <= nums.length;
      secondIndex++
    ) {
      if (nums[firstIndex] + nums[secondIndex] == target) {
        return [firstIndex, secondIndex];
      }
    }
  }
  return [];
}

console.log(twoSum(arr, 6));
