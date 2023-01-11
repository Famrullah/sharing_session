const lazyImages = [].slice.call(document.querySelectorAll(".lazy-loaded-image.lazy"));
console.log(lazyImages)
let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      let lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
      lazyImageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
});