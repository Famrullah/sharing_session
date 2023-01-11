const list = document.querySelector(".list");
function loadItems(number) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array(number).fill("A List Item"));
    }, 500);
  }).then((data) => {
    const html = data.map((item) => `<li>${item}</li>`);
    list.innerHTML += html.join("");
  });
}

const intersectionObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;
  loadItems(20);
  console.log("Loaded new items");
});
intersectionObserver.observe(document.querySelector(".virtual"));
