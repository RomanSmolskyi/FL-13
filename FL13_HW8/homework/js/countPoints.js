function countPoints(gameResults) {
  return gameResults.reduce(function (sumPoints, current) {
    if (current[0] > current[2]) {
      sumPoints += 3;
    } else if (current[0] === current[2]) {
      sumPoints += 1;
    } else {
      sumPoints += 0;
    }
    return sumPoints;
  }, 0);
}
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));