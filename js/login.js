document.getElementById("login-btn").addEventListener("click", function () {
  //Get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;

  //Get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;

  //Match pin and mobile number
  if (contactNumber == "01234567890" && pin == "1234") {
    //True :: alert = Home page
    alert("Login Successful");
    //window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    //False :: alert = return
    alert("Login Failed");
    return;
  }
});
