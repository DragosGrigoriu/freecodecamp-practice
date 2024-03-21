document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }
});
