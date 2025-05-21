const hold = document.querySelector("#hold")
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
const head = document.querySelector('.header')
const show = document.querySelector('.display')
const sections = document.querySelectorAll('.section')
console.log(sections)
const buttons = document.getElementsByTagName('button')
console.log(buttons)

console.log(document.getElementsByClassName('btn'))
const container = document.querySelector('.container')

const text = document.createElement('div')
text.classList.add('welcome')
text.innerHTML =
 'Free shipping on orders over #20000. <button class="btn showing">Got it</button>'
show.append(text)

document.querySelector('.showing'). addEventListener('click', () => {
    text.parentElement.removeChild(text)
})

// sticky

const header = document.querySelector('.header');
const trigger = document.querySelector('.observer-trigger');
const navHeight = header.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(trigger);


// page delegation
/*
document.querySelectorAll('.same-link').forEach(function(el){
  el.addEventListener('click', function (e){
    e.preventDefault()
    const id = this.getAttribute('href');
    console.log(id)
    document.querySelector(id).scrollIntoView({
      behaviour: 'smooth'
    })
  })
})
  */
 document.querySelector('.menu').addEventListener('click', function (e){
  e.preventDefault()
  if(e.target.classList.contains('same-link')){
  const id = e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({
    behaviour: 'smooth'
  })
  }
 })
 
//  fade
const allLink = document.querySelector('.all-link')
const handleOver = function (e) {
    if(e.target.classList.contains('same-link')) {
        const link = e.target;
        const siblings = link.closest('.all-link').querySelectorAll('.same-link')
        const men= link.closest('.all-link').querySelector('.men')
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this
        })
        men.style.opacity = this
    }
}
allLink.addEventListener('mouseover', handleOver.bind(0.5))
allLink.addEventListener('mouseout', handleOver.bind(1))
// cards
const cards = document.querySelectorAll('.under-pro');

cards.forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('.under-pro.active')?.classList.remove('active');
    card.classList.add('active');
  });
});

