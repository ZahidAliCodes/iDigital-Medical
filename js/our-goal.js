  const slides = document.querySelectorAll('.image-slider__image');
  const nextBtn = document.getElementById('sliderNextBtn');
  let currentSlide = 0;

  nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('image-slider__image--active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('image-slider__image--active');
  });