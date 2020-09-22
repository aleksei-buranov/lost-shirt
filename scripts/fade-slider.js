(function () {
  const slides = document.querySelectorAll(".fade-slider__item");
  const visibleSlide = "fade-slider__item--visible";
  let index = 0;
  setInterval(function () {
    slides[index].classList.remove(visibleSlide);
    index = index >= slides.length - 1 ? 0 : index + 1;
    slides[index].classList.add(visibleSlide);
  }, 5000);
})();
