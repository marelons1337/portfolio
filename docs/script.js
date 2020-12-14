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

  