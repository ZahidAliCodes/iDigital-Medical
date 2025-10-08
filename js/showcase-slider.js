/* ==========================================================
   🖼️ Feature Text & Image Slider
   Description:
   - Synchronizes active text slide with corresponding image card.
   - Supports dynamic previous slide styling.
   - Advances slide on container click.
   Author: Zahid Ali
   ========================================================== */

/* ===========================
   📌 DOM Element References
   =========================== */
const textSlides = document.querySelectorAll('.feature-text-slide');
const imageCards = document.querySelectorAll('.feature-image-card');
const totalSlides = textSlides.length;
let currentIndex = 0;

/* ===========================
   🧭 showSlide()
   Description:
   - Activates a text slide and corresponding image card
   - Resets and applies previous slide classes for smooth transitions
   =========================== */
function showSlide(index) {
  // Activate the correct text slide
  textSlides.forEach((slide, i) => slide.classList.toggle('text-active', i === index));

  // Reset all image cards to base class
  imageCards.forEach(card => card.className = 'feature-image-card');

  // Set active class on the current image card
  imageCards[index].classList.add('active');

  // Add prev1 to prev4 classes for previous image cards
  for (let i = 1; i <= 4; i++) {
    const prevIndex = (index - i + totalSlides) % totalSlides;
    if (imageCards[prevIndex]) {
      imageCards[prevIndex].classList.add(`prev${i}`);
    }
  }
}

/* ===========================
   🟢 Initialize First Slide
   =========================== */
showSlide(0);

/* ===========================
   🖱️ Click Event: Advance Slider
   - Moves to the next slide on container click
   =========================== */
document.querySelector('.feature-images').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});
