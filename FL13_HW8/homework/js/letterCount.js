function letterCount(someStr, letter) {
  let strLow = someStr.toLowerCase();
  let letterLow = letter.toLowerCase();
  return strLow.split(letterLow).length - 1;
}
console.log(letterCount("Barry", "r"));
