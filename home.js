// Highlight active navigation link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky Navigation Bar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Testimonials Carousel
const slider = document.querySelector('.testimonial-slider');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : 2;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex < 2) ? slideIndex + 1 : 0;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
});