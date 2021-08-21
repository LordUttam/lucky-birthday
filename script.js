const alertBox = document.querySelector("#alertBox");
const closeAlertBox = document.querySelector("#closeAlertBox");
const datePicker = document.querySelector("#datePicker");
const luckyNumberEntry = document.querySelector("#luckyNumber");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

function removeAlertBox() {
  alertBox.style.display = "none";
}

function luckyOrNot(luckyNumber, dob) {
  console.log(dob);
  console.log(luckyNumber);
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += dob % 10;
    dob = Math.floor(dob / 10);
  }
  console.log(sum);

  if (sum % luckyNumber === 0) {
    result.innerHTML = "<h4>Congrats! Your birthday is lucky!! 🎉😁</h4>";
  } else {
    result.innerHTML = "<h4>Sorry, your birthday is not lucky :( </h4>";
  }
}

closeAlertBox.addEventListener("click", removeAlertBox);
checkButton.addEventListener("click", () => {
  let luckyNumber = parseInt(luckyNumberEntry.value);
  let dob = parseInt(datePicker.value.replace(/-/g, ""));

  if (luckyNumber && dob) {
    luckyOrNot(luckyNumber, dob);
  } else {
    result.innerHTML =
      "Entries Invalid! Please enter valid values in both fields.";
  }
});
