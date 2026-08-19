// Scroll-reveal for sections
document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    ".about-grid, .rooms-grid .room-card, .gallery-grid .gallery-item, .video-block, .location-grid, .contact-grid, .booking-note"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));

  // Subtle parallax on the hero hill layers — mist drifting as you scroll
  const back = document.querySelector(".hills-back");
  const mid = document.querySelector(".hills-mid");
  const front = document.querySelector(".hills-front");
  const hero = document.querySelector(".hero");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && back && mid && front && hero) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < hero.offsetHeight + 200) {
          back.style.transform = `translateY(${y * 0.08}px)`;
          mid.style.transform = `translateY(${y * 0.16}px)`;
          front.style.transform = `translateY(${y * 0.05}px)`;
        }
      },
      { passive: true }
    );
  }

  // Placeholder contact links — gently remind that they need real info,
  // without blocking navigation for buttons that already have real hrefs.
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Add your real link here yet — open index.html and update this contact card's href."
      );
    });
  });
});
