let checkSum = prompt(`Check number:`, ``);
checkSum = parseFloat(checkSum);
checkSum = Math.round(checkSum);
let percentAmount = prompt(`Tip:`, ``);
percentAmount = parseFloat(percentAmount);
percentAmount = Math.round(percentAmount);
let oneHundred = 100;
let tipAmount = checkSum * (percentAmount/oneHundred);
let totalSum = Number(checkSum) + tipAmount;

if (checkSum < 0 || percentAmount < 0) {
  alert(`Invalid input data`)
} else if (checkSum === `` || percentAmount === ``) {
  alert(`Invalid input data`) 
} else if (percentAmount > oneHundred) {
  alert(`Invalid input data`)
} else if (checkSum !== +checkSum || percentAmount !== +percentAmount ) {
  alert(`Invalid input data`)
} else {
alert(`Check number: ${checkSum}
Tip: ${percentAmount}%
Tip amount: ${tipAmount}
Total sum to pay: ${totalSum}`)
}


  