const observerElements = document.querySelectorAll('.scroll-reveal');

const rootconfig = {
  root: null,
  rootMargin: '0px',
};

const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        console.log(entry)
      }
    });
  }, 
  rootconfig
);

observerElements.forEach(el => {
  Observer.observe(el);
});