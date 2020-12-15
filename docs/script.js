var title = document.getElementById('title')

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Element has just become visible in screen');
}, { threshold: [0] });

observer.observe(title)


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

  