
let titles = document.querySelectorAll('.title')
let buttons = document.querySelectorAll('button')
let ps = document.querySelectorAll('p')
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animate__animated', 'animate__fadeInLeftBig')
      observer.unobserve(entry.target);
    }
  });
}), {threshold:0};

let array = [titles, buttons, ps]

array.forEach (arr => {
  arr.forEach(el => {
    observer.observe(el);
  })
});


//particlesjs options
window.onload = function() {
  Particles.init
  ({
    
  // normal options
    selector: 
  '.background'
  ,
    maxParticles: 
  450
  ,
  color:
  '#4464AD'
  ,
    
  // options for breakpoints
    responsive: [
      {
        breakpoint: 
  768
  ,
        options: {
          maxParticles: 
  200
  ,
          color: 
  '#4464AD'
  ,
          connectParticles: 
  false
        }
      }, {
        breakpoint: 
  425
  ,
        options: {
          maxParticles: 
  100
  ,
        }
      }, {
        breakpoint: 
  320
  ,
        options: {
          maxParticles: 
  50
   
  // smallest screen
        }
      }
    ]
  });
  };

  