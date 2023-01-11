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
      console.log(entry)
      if (entry.isIntersecting) {
        console.log(entry)
        const id = entry.target.id
        getData(api[id],id)
        Observer.unobserve(entry.target);
      }
    });
  }, 
  rootconfig
);


async function getData(api,id) {
  const req = await fetch(api)
  const res = await req.json()
  renderHTML(res,id)
}

function peopleUI(data) {
  return`<div>${data.name}</div>`
}

function filmsUi(data) {
  return`<div>${data.title}</div>`
}

function vehicleUi(data) {
  return`<div>${data.name}</div>`
}

function renderHTML (data,id) {
  console.log(data)
  let container =''
  if(id == 'people') {
    container = peopleUI(data)
    const peopleContainer = document.querySelector('.people-container')
    peopleContainer.innerHTML = container
  }

  if(id == 'films'){
    container = filmsUi(data)
    const peopleContainer = document.querySelector('.films-container')
    peopleContainer.innerHTML = container
  }

  if(id == 'vehicle'){
    container = vehicleUi(data)
    const peopleContainer = document.querySelector('.vehicle-container')
    peopleContainer.innerHTML = container
  }
}

observerElements.forEach(el => {
  Observer.observe(el);
});