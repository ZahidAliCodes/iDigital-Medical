/* ==========================================================
   🌐 Global Website Script
   Description: Handles sticky header, mobile navigation, 
   dropdown menu interactions, video loading optimization, 
   and interactive hover effects for service cards and feature cards.
   Author: Zahid Ali
   ========================================================== */

/* ===========================
   📌 Sticky Header Functionality
   - Adds a "sticky" class to header on scroll
   - Adjusts logo color based on scroll position
   =========================== */
const header = document.getElementById("siteHeader");

if (header) {
  const logo = header.querySelector(".site-logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
      if (logo) logo.style.color = "#000";
    } else {
      header.classList.remove("sticky");
      if (logo) logo.style.color = "#fff";
    }
  });
}

/* ===========================
   📱 Dropdown Touch Handling (Mobile)
   - Enables touch-based dropdown open behavior
   - Requires double tap to navigate to actual link
   =========================== */
document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
  const dropdown = link.nextElementSibling;
  let tappedOnce = false;

  link.addEventListener('touchstart', function (e) {
    if (window.innerWidth >= 992) return;

    if (!tappedOnce) {
      tappedOnce = true;
      e.preventDefault();
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
      setTimeout(() => tappedOnce = false, 1000);
    } else {
      window.location.href = this.getAttribute('href');
    }
  });
});

/* ===========================
   🍔 Hamburger Menu Toggle (Mobile)
   - Toggles navigation menu visibility
   - Adds/Removes active states on click
   =========================== */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("siteNav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("open");
  });
}

/* ===========================
   📂 Mobile Dropdown Toggle
   - Expands/collapses dropdown items in mobile view
   =========================== */
document.querySelectorAll(".has-dropdown").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      item.parentElement.classList.toggle("open");
    }
  });
});

/* ===========================
   🧭 Our Services Cards Hover Effect
   - Expands 30% card on hover and hides 70% card image
   - Resets layout on mouse leave
   =========================== */
const flexWrappers = document.querySelectorAll(".our-services-card-flex");

if (flexWrappers.length > 0) {
  flexWrappers.forEach((wrapper) => {
    const card30 = wrapper.querySelector(".our-services-card-30");
    const card70 = wrapper.querySelector(".our-services-card-70");
    const card30Img = card30?.querySelector(".service-card-img");
    const card70Img = card70?.querySelector(".service-card-img");
    const card70Center = card70?.querySelector(".service-card-center");

    // Get computed gap between cards
    const gap = parseInt(getComputedStyle(wrapper).gap) || 0;

    if (card30 && card70) {
      // 🟦 Expand 30% card on hover
      card30.addEventListener("mouseenter", () => {
        card30.style.flex = "0 0 65%";
        if (card30Img) card30Img.style.display = "flex";

        card70.style.flex = `0 0 calc(35% - ${gap}px)`;
        if (card70Img) card70Img.style.display = "none";

        if (card70Center) {
          card70Center.style.width = "100%";
          card70Center.style.textAlign = "center";
        }
      });

      // 🟨 Reset layout on mouse leave
      card30.addEventListener("mouseleave", () => {
        card30.style.flex = "0 0 34%";
        if (card30Img) card30Img.style.display = "none";

        card70.style.flex = `0 0 calc(66% - ${gap}px)`;
        if (card70Img) card70Img.style.display = "flex";

        if (card70Center) {
          card70Center.style.width = "";
          card70Center.style.textAlign = "";
        }
      });
    }
  });
}

/* ===========================
   🎥 Hero Video Lazy Loading
   - Loads and plays hero video only once per session
   - Improves page performance on repeat visits
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('video[data-src]');
  if (!video) return;

  const cached = sessionStorage.getItem('heroVideoLoaded');

  if (!cached) {
    video.src = video.dataset.src;
    video.oncanplaythrough = () => {
      video.play();
      sessionStorage.setItem('heroVideoLoaded', 'true');
    };
  } else {
    video.src = video.dataset.src;
    video.play();
  }
});

/* ===========================
   🧠 Feature Cards Click Interaction
   - Activates clicked feature card
   - Deactivates all others
   =========================== */
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
  card.addEventListener('click', () => {
    if (!card.classList.contains('active')) {
      featureCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    } else {
      console.log('Card is already active');
    }
  });
});
