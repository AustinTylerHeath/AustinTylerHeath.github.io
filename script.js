const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".project,.hero-copy,.hero-frame,.about-title,.about-body,.contact > *").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
  reveal.observe(el);
});
