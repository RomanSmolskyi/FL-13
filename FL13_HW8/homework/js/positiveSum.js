function positiveSum(arr) {
  return arr.reduce(function (sum, current) {
    if (sum >= 0 && current > 0) {
      return sum + current;
    } else if (current <= 0) {
      return sum;
    }
    return ``;
  }, 0);
}
console.log(positiveSum([0, -3, 5, 7]));
