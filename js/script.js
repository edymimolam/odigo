var hamburger = document.querySelector(".hamburger");
  var nav = document.querySelector(".main-nav");
  // On click
  hamburger.addEventListener("click", function() {
    console.log(nav);
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    // Do something else, like open/close menu
  });