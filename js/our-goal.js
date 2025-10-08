/**
 * ====================================
 * 🖼️ Simple Image Slider Functionality
 * ====================================
 * - Cycles through images when the "Next" button is clicked.
 * - Active slide is indicated by a CSS modifier class.
 */

// Get all slide elements
const slides = document.querySelectorAll('.image-slider__image');

// Get "Next" button element
const nextBtn = document.getElementById('sliderNextBtn');

// Track current active slide index
let currentSlide = 0;

/**
 * ========================
 * 👉 Next Button Listener
 * ========================
 * - Removes active class from the current slide
 * - Increments the slide index
 * - Wraps back to the first slide if at the end
 * - Adds active class to the new current slide
 */
nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('image-slider__image--active');

  // Update index (looping back if needed)
  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('image-slider__image--active');
});
