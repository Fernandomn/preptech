const bubbleSort = (nums) => {
  for (let i = nums.length - 1; i > 1; i--) {
    let anySwap = false;
    for (let j = 1; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        anySwap = true;
      }
    }
    if (!anySwap) break;
  }
};
