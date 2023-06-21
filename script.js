window.addEventListener("scroll", function () {
  var scrollButton = document.querySelector(".scroll-to-top");
  if (window.pageYOffset > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

document.querySelector(".scroll-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
