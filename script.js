// Small enhancement: reveal project cards as they enter the viewport.
const items = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach(item => observer.observe(item));
