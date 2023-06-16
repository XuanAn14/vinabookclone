// menu click
var headerbot__listbooks = document.querySelector(".header-bot__listbooks");
var listbooks__list = document.querySelector(".listbooks-list");
headerbot__listbooks.onclick = function(){
    listbooks__list.classList.toggle("listbooks_none");
}

// fixed
window.onscroll = function() {myFunction()};

var header = document.querySelector(".header-mid");
var stickyHeader = header.offsetTop;
var tab_detail = document.querySelector(".tab-detail");
var stickyTab = tab_detail.offsetTop;

function myFunction() {
  if (window.scrollY > stickyHeader) {
    header.style.setProperty("display","flex");
    header.classList.add("header-mid_fixed");
  } else{
    header.classList.remove("header-mid_fixed");
  }
  
  if (window.scrollY > stickyTab) {
    header.style.setProperty("display","none");
    tab_detail.classList.add("tab-detail_fixed");
  } else {
    tab_detail.classList.remove("tab-detail_fixed");
  }

}



