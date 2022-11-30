function removeStickyClass() {
  if (window.innerWidth >= 769) {
    $(".nav").addClass("sticky");
  }
}
window.onload = removeStickyClass;

window.addEventListener("resize", function () {
  // viewport and full window dimensions will change

  var viewport_width = window.innerWidth;
  if (viewport_width > 769) {
    $(".nav").addClass("sticky");
  } else {
    $(".nav").removeClass("sticky");
  }
});
