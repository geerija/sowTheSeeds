"use strict";
/*Navbar */
const home = document.querySelector(".home");
const product = document.querySelector(".product");
const guide = document.querySelector(".guide");
const about = document.querySelector(".about");
const login = document.querySelector(".login");
const mycart = document.querySelector(".mycart");
const see_more_btn = document.querySelector(".see_more_btn");

home.addEventListener("click", () => {
  home.href = "home.html";
});
product.addEventListener("click", () => {
  product.href = "Products.html";
});
guide.addEventListener("click", () => {
  guide.href = "guide.html";
});
about.addEventListener("click", () => {
  about.href = "aboutus.html";
});
mycart.addEventListener("click", () => {
  mycart.href = "cart.html";
});
login.addEventListener("click", () => {
  login.href = "login.html";
});
see_more_btn.addEventListener("click", () => {
  see_more_btn.href = "Products.html";
});
