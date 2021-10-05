const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const hamButton = document.getElementsByClassName('ham-con')[0];

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbarLinks.classList.toggle('active')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbarLinks.classList.toggle('active')
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
  