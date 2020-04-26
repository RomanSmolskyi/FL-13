let getMiddle = prompt(`Enter your word:`, ``);
if (getMiddle === null) {
  alert(`Invalid value`)
}
getMiddle = getMiddle.trim();
let numberTwo = 2;
let lengthWord = getMiddle.length;
let middle = Math.floor(lengthWord/numberTwo);
console.log(middle)
let odd = getMiddle.slice(middle, middle + 1);
console.log(odd)
let even = getMiddle.slice(middle - 1, middle + 1)
console.log(even)

if (getMiddle ===``) {
  alert(`Invalid value`)
} else if (lengthWord % numberTwo === 0) {
  alert(even)
} else if (lengthWord % numberTwo === 1) {
  alert(odd)
}

