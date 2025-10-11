document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // 1. Mobile Menu Toggle Functionality
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // 2. Close Menu when a Nav Link is clicked (for single-page scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is open and close it after clicking
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // 3. Simple Form Submission Handling (Prevent default for demonstration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly. (This is a demonstration; no actual email was sent.)');
            contactForm.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing code for navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly. (This is a demonstration; no actual email was sent.)');
            contactForm.reset();
        });
    }

    // --- NEW CAROUSEL LOGIC ---
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    const slideWidth = slides[0] ? slides[0].offsetWidth : 0;
    let currentIndex = 0;
    const slideCount = slides.length;
    const intervalTime = 4000; // Change slide every 4 seconds

    // 1. Create Dots for navigation
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // 2. Function to move the carousel
    function moveToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Loop to the end
        } else if (index >= slideCount) {
            index = 0; // Loop back to the start
        }

        const amountToMove = -index * 100; // Move by 100% of container width
        track.style.transform = `translateX(${amountToMove / slideCount}%)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }

    // 3. Auto-scrolling interval
    setInterval(() => {
        currentIndex++;
        moveToSlide(currentIndex);
    }, intervalTime);

    // Initial check to prevent issues if there are no slides
    if (slideCount > 0) {
        moveToSlide(0);
    }
});