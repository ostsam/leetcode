let arr27 = [3, 2, 2, 2, 3, 3, 3];

function removeElement(nums: number[], val: number): number {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter;
}

console.log(removeElement(arr27, 3));
console.log("logging", arr27);
