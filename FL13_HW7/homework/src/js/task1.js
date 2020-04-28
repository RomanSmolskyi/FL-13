let userName = prompt(`Please enter your login:`, ``);
let dateNow = new Date();
dateNow = dateNow.getHours();
const numberEight = 8;
const numberTwenty = 20;
const numberFour = 4;
let goodDay = dateNow >= numberEight && dateNow < numberTwenty;
let goodEvening = dateNow >= numberTwenty || dateNow < numberEight;

if (userName === `User`) {
  let password = prompt(`Please enter your password:`, ``);

  if ( password === `UserPass` && goodDay) {
    alert(`Good day, dear User!`)
  } else if (password === `UserPass` && goodEvening) {
    alert(`Good evening, dear User!`)
  } else if (password === null || password === ``) {
    alert(`Canceled`)
  } else {
    alert(`Wrong password`)
  }
} else if (userName ===`Admin`) {
  let password = prompt(`Please enter your password:`, ``);
   
  if (password === `RootPass` && goodDay) {
    alert(`Good day, dear User!`)
  } else if (password === `RootPass` && goodEvening) {
    alert(`Good evening, dear User!`)
  } else if (password === null || password === ``) {
    alert(`Canceled`)
  } else {
    alert(`Wrong password`)
  }
} else if (userName === null || userName === ``) {
  alert(`Canceled`)
} else if (userName.length < numberFour) {
  alert(`I don't know any users having name length less than 4 symbols`);
} else {
  alert(`I don’t know you`);
}














