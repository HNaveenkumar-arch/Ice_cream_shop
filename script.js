

setTimeout(() => {
  const preloader = document.getElementById('preloader');

  if (preloader) {
    preloader.classList.add('preloader-hidden');

    setTimeout(() => {
      preloader.style.display = 'none';
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50 });
      }
    }, 500);
  } else {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true, offset: 50 });
    }
  }
}, 2000); 



window.addEventListener('scroll', function () {
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  }
});



const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



const hamburger = document.querySelector('.hamburger');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const mobileOverlay = document.querySelector('.mobile-overlay');
const closeBtn = document.querySelector('.close-btn');

function openMenu() {
  if (mobileSidebar) mobileSidebar.classList.add('active');
  if (mobileOverlay) mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  if (mobileSidebar) mobileSidebar.classList.remove('active');
  if (mobileOverlay) mobileOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (hamburger) hamburger.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);



const sections = document.querySelectorAll('section');
const desktopNavLinks = document.querySelectorAll('.nav-links li a');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links li a');


mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

function updateActiveMenu() {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let currentSection = 'home'; 

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      if (section.getAttribute('id')) {
        currentSection = section.getAttribute('id');
      }
    }
  });


  if (scrollPosition < 50) {
    currentSection = 'home';
  }


}


window.addEventListener('scroll', updateActiveMenu);

updateActiveMenu();

window.addEventListener('load', updateActiveMenu);



const hoverLinks = document.querySelectorAll('.hover-effect');

hoverLinks.forEach(link => {
  link.addEventListener('mouseenter', function () {
    createStars(this);
  });
});

function createStars(element) {
  for (let i = 0; i < 4; i++) {
    let star = document.createElement('i');
    const icons = ['fa-star', 'fa-circle'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    star.className = `fa-solid ${randomIcon} star-particle`;

    let leftPosition = Math.random() * 100;
    let animationDelay = Math.random() * 0.2;
    let size = (Math.random() * 6) + 8;

    star.style.left = `${leftPosition}%`;
    star.style.animationDelay = `${animationDelay}s`;
    star.style.fontSize = `${size}px`;

    const colors = ['#f1c40f', '#ff5e78', '#74b9ff'];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    element.appendChild(star);

    setTimeout(() => { star.remove(); }, 800);
  }
}



const orderForm = document.getElementById('orderForm');
const areaCodeInput = document.getElementById('areaCode');
const errorMsg = document.getElementById('errorMsg');

if (orderForm) {
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = areaCodeInput.value.trim();

    if (value === '') {
      errorMsg.style.display = 'block';
      errorMsg.textContent = 'Please enter your area code or ZIP!';
    } else {
      errorMsg.style.display = 'none';
      const btn = orderForm.querySelector('button');
      btn.textContent = 'Wait...';
      btn.style.opacity = '0.8';

      setTimeout(() => {
        window.location.href = '404page.html';
      }, 1000);
    }
  });
}

