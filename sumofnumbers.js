const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNums));

function sumRecursion(nums) {
  let number = 0;
  if (nums.length === 0) {
    return 0;
  }
  number = nums[0] + sumRecursion(nums.slice(1, nums.length)); // slice will grab the rest of the array
  return number;
}
console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testNums));
