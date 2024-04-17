function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 0.5}s`; 
    document.body.appendChild(star);
  
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
  
  setInterval(createShootingStar, 100); 
  