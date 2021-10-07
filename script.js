const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbarLinks.classList.toggle('active')
    navbarLinks.classList.add('move-up')


    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbarLinks.classList.toggle('active')
    navbarLinks.classList.add('move-up')
    menuOpen = false;
  }
});

  let slider = tns({
    container: '.my-slider',
    items: 1,
    speed: 600,
    controls: false,
    mouseDrag: true,
    autoplayHoverPause: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    nav: false
  });
  
  
  
  
  
  
  alert(`W: ${screen.width} H: ${screen.height} DPI: ${devicePixelRatio}`); 
