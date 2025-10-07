/* ==========================================================
   Global Website Script
   Description: Handles sticky header, mobile navigation, and
   card hover interactions across all pages.
   Author: Zahid Ali
   ========================================================== */

/* ===========================
   Sticky Header Functionality
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
   Hamburger Menu Toggle (Mobile)
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
   Mobile Dropdown Toggle
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
   Our Services Cards Hover Effect
   =========================== */
const flexWrappers = document.querySelectorAll(".our-services-card-flex");

if (flexWrappers.length > 0) {
    flexWrappers.forEach((wrapper) => {
        const card30 = wrapper.querySelector(".our-services-card-30");
        const card70 = wrapper.querySelector(".our-services-card-70");
        const card30Img = card30?.querySelector(".service-card-img");
        const card70Img = card70?.querySelector(".service-card-img");
        const card70Center = card70?.querySelector(".service-card-center");

        // Dynamically calculate the flex gap
        const gap = parseInt(getComputedStyle(wrapper).gap) || 0;

        if (card30 && card70) {
            // Expand smaller card (30%) on hover
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

            // Reset cards on mouse leave
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

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('video[data-src]');
  const cached = sessionStorage.getItem('heroVideoLoaded');

  if (!cached) {
    video.src = video.dataset.src;
    video.oncanplaythrough = () => {
      video.play();
      sessionStorage.setItem('heroVideoLoaded', 'true');
    };
  } else {
    // Already loaded once in session, play immediately
    video.src = video.dataset.src;
    video.play();
  }
});
