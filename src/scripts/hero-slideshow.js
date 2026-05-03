function initBackgroundSlideshow() {
  const sections = document.querySelectorAll(".hero-showcase");

  sections.forEach((section) => {
    if (section.dataset.slideshowInitialized === "true") return;
    section.dataset.slideshowInitialized = "true";

    const slides = section.querySelectorAll(".hero-slide");
    if (slides.length <= 1) return;

    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 5000);
  });
}

initBackgroundSlideshow();
document.addEventListener("astro:page-load", initBackgroundSlideshow);