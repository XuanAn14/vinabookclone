// menu click
var headerbot__listbooks = document.querySelector(".header-bot__listbooks");
var listbooks__list = document.querySelector(".listbooks-list");
headerbot__listbooks.onclick = function(){
    listbooks__list.classList.toggle("listbooks_none");
}

// cart click
var headermid_cart = document.querySelector(".header-mid__cart");
var cart_box = document.querySelector(".cart-box");
headermid_cart.onclick = function(){
  cart_box.classList.toggle("cart-box-none");
}

// header fixed
window.onscroll = function() {myFunction()};

var header = document.getElementById("headerFixed");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("header-mid_fixed");
  } else {
    header.classList.remove("header-mid_fixed");
  }
}