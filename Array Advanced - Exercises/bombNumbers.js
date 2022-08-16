function bombNumbers(nums, bomb) {
    let searchNum = bomb[0];
    let power = Number(bomb[1]);
    let indexOfBomb = nums.indexOf(searchNum);
    while (indexOfBomb != -1) {
      let startExplosioIndex = Math.max(0, indexOfBomb - power);
      let explosionLength = power * 2 + 1;
      nums.splice(startExplosioIndex, explosionLength);
      indexOfBomb = nums.indexOf(searchNum);
    }
    //   let sum = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    console.log(sum);
  }
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 5])