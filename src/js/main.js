document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderItem = document.querySelector(".slider-item");
  const clone = slider.innerHTML;

  slider.innerHTML += clone; // Dupliquer le contenu pour l'effet infini

  function checkAnimation() {
    const sliderWidth = slider.scrollWidth / 2;
    const scrollLeft = slider.scrollLeft;

    if (scrollLeft >= sliderWidth) {
      slider.scrollLeft = 0;
    }
  }

  slider.addEventListener("animationiteration", checkAnimation);
});
