"use strict";
let loginvalidate = document.querySelector("#loginvalidate");
loginvalidate.addEventListener("submit", function formValidation(e) {
  e.preventDefault();
  const email = document.querySelector(".fieldEmail").value;
  const password = document.querySelector(".fieldPw").value;
  if (email == "geerija@123.com" && password == "geerija") {
    alert("Login Successfull");
    window.location.href = "Products.html";
  } else if (email == "" || password == "") {
    alert("wrong email or password");
  } else {
    alert("Error check again");
  }
});
