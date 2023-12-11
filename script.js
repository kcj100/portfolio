let bg = document.querySelector('body .section_1')

document.addEventListener('scroll', () => {        
  let x = window.pageYOffset
  bg.style.backgroundSize = (100 + x/10)+'% auto'
})