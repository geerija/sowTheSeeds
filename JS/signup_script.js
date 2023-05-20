"use strict";
let signupValidate = document.querySelector("#signupValidate");
signupValidate.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector(".usernamefield").value;
  let emailfield = document.querySelector(".emailfield").value;
  let pwfield = document.querySelector(".pwfield").value;
  if (username == "" || pwfield == "") {
    alert("kindly enter appropriate username or password");
    username.focus();
    return false;
  } else if (username.length >= 20) {
    alert("maximum length for username is 20");
    username.focus();
    return false;
  } else if (pwfield.length <= 8) {
    alert("kindly enter password digit more than 8");
    pwfield.focus();
    return false;
  } else {
    alert("congratulation! account created successfully");
    window.location.href = "/login.html";
    return true;
  }
});
