var navigationBlock = document.querySelector(".main-header__navigation");
var btnToggle = document.querySelector(".main-header__toggle");

navigationBlock.classList.remove("main-header__navigation--opened");
navigationBlock.classList.add("main-header__navigation--closed");

btnToggle.addEventListener("click", function(event) {
  event.preventDefault();
  if (navigationBlock.classList.contains("main-header__navigation--closed")) {
    navigationBlock.classList.remove("main-header__navigation--closed");
    navigationBlock.classList.add("main-header__navigation--opened");
  }
  else {
    navigationBlock.classList.remove("main-header__navigation--opened");
    navigationBlock.classList.add("main-header__navigation--closed");
  }
});
