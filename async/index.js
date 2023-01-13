const rootconfig = {
  root: null,
  rootMargin: '0px',
};
const observerElements = document.querySelectorAll('.scroll-reveal');
const api = {
  people:'https://swapi.dev/api/people/1',
  films:'https://swapi.dev/api/films/1/',
  vehicle:'https://swapi.dev/api/vehicles/4/'
}

const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const {id} = entry.target
        const classList = entry.target.classList[1]
        getData(api[id], id , classList)
        Observer.unobserve(entry.target);
      }
    });
  }, 
  rootconfig
);

async function getData(api,id ,classList) {
  const req = await fetch(api)
  const res = await req.json()
  renderHTML(res,id, classList)
}

function peopleComponent(data) {
  return`<div>${data.name}</div>`
}

function filmsComponent(data) {
  return`<div>${data.title}</div>`
}

function vehiclesComponent(data) {
  return`<div>${data.name}</div>`
}

function renderHTML (data,id,classList) {
  const componentUpdate = {
    people: () => peopleComponent(data),
    films: () => filmsComponent(data),
    vehicle: () => vehiclesComponent(data)
  }
  let container = componentUpdate[id]()
  let selector = document.querySelector(`.${classList}`)
  selector.innerHTML = container
}

observerElements.forEach(el => {
  Observer.observe(el);
});