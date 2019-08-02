// add menu
const slides = [
  {
    image: './images/cat1.jpg'
  },
  {
    image: './images/cat2.jpg'
  },
  {
    image: './images/cat3.jpg'
  }
]

let currentIndex = 0

function prev () {
  let a = currentIndex - 1
  if (a < 0) {
    a = slides.length - 1
  }
  currentIndex = a
  renderSlider()
}

function next () {
  let a = currentIndex + 1
  if (a > slides.length - 1) {
    a = 0
  }
  currentIndex = a
  renderSlider()
}

function renderSlider () {
  const el = window.slider
  el.innerHTML = `
<div>
  <img style="max-width: 200px" src="${slides[currentIndex].image}">
</div>
<div>
  <button onclick="prev()">Prev</button>
  <button onclick="next()">Next</button>
</div>
  `
}

renderSlider()
