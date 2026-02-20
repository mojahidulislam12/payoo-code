document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  const newBalance = Number(balance) - Number(cashoutAmount);
  //console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Balance");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Successful");
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   //Get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   if (cashoutNumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }
//   //Get the amount , validate , covert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   //Get the current balance , validate , covert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   //Calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   //Calculate new balance
//   //Get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin === "1234") {
//     //true :: show an alert > set balance
//     alert("Cashout Successful");
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     //false :: show an error alert > return
//     alert("Invalid Pin");
//     return;
//   }
// });
