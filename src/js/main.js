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
// ----------------------

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].style.display = "flex";
  dots[slideIndex].classList.add("active");
  updateDotColor(slideIndex); // Appel pour mettre à jour la couleur du dot
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

function updateDotColor(index) {
  dots.forEach((dot) => dot.classList.remove("dot-1", "dot-2", "dot-3"));
  dots[index].classList.add(`dot-${index + 1}`);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlides();
});
