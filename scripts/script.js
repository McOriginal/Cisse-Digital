const containers = document.querySelectorAll('.show_animation');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.1, // Déclenche l'animation lorsque 10% de l'élément est visible
  }
);

containers.forEach((container) => {
  observer.observe(container);
});
