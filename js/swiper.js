/* ==========================================================
   🌀 Swiper Slider Initialization
   Description:
   - Creates a smooth, continuously scrolling horizontal slider.
   - Uses free mode for natural scrolling.
   - Autoplay runs without delay for seamless animation.
   Author: Zahid Ali
   ========================================================== */

/* ===========================
   🧭 Swiper Configuration
   =========================== */
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',         // Show slides based on their width
  spaceBetween: 16,              // Gap between each slide (in px)
  loop: false,                   // Looping disabled for continuous linear scroll
  freeMode: true,                // Enables smooth, free scrolling
  freeModeMomentum: false,       // Prevents "bounce back" effect at edges
  speed: 4000,                   // Scroll animation speed (ms)

  /* ===========================
     🔁 Autoplay Settings
     - delay: 0 for continuous scroll
     - disableOnInteraction: false allows manual interaction without stopping autoplay
     =========================== */
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
