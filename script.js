const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
const slideCount = slides.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
}, 8000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    }
    
    lastScroll = currentScroll;
}); 