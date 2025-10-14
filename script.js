document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const contactForm = document.querySelector('.contact-form');
    // Assuming you have an element with ID 'contact-message' to show form success/error messages.
    const messageBox = document.getElementById('contact-message'); 

    // 1. Mobile Menu Toggle Functionality
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Toggle icon for better user experience
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. Close Menu when a Nav Link is clicked (for single-page scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is open and close it after clicking
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // Reset icon
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. Simple Form Submission Handling (Prevent default for demonstration)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Using the messageBox element instead of alert()
            if (messageBox) {
                messageBox.textContent = 'Thank you for your message! We will get back to you shortly.';
                setTimeout(() => messageBox.textContent = '', 5000);
            }
            contactForm.reset();
        });
    }

    // --- Slideshow Functions ---

    /**
     * Handles the fading transition logic for any slideshow container.
     * @param {string} containerId The ID of the parent container (e.g., 'hero-slideshow-container').
     * @param {string} slideClassName The class name applied to the individual image slides (e.g., 'hero-slide-image').
     * @param {number} interval The time in milliseconds between slides.
     */
    function startSlideshow(containerId, slideClassName, interval) {
        const slideshowContainer = document.getElementById(containerId);
        if (slideshowContainer) {
            // Use querySelectorAll on the container to find only relevant slides
            const slides = slideshowContainer.querySelectorAll('.' + slideClassName);
            let currentSlide = 0;

            // Important: Make sure at least one slide exists before starting
            if (slides.length === 0) {
                 console.warn(`Slideshow container ${containerId} found, but no slides with class ${slideClassName} found.`);
                 return;
            }

            function nextSlide() {
                if (slides.length <= 1) return; // No need to cycle if 0 or 1 slide

                // 1. Remove active class from the current slide (fades out)
                slides[currentSlide].classList.remove('active');
                
                // 2. Calculate the index of the next slide (loops back to 0)
                currentSlide = (currentSlide + 1) % slides.length;
                
                // 3. Add active class to the next slide (fades in due to CSS transition)
                slides[currentSlide].classList.add('active');
            }

            // Ensure the first slide is active on initial load
            slides[0].classList.add('active');
            
            // Start the automatic slideshow
            setInterval(nextSlide, interval);
        } else {
             console.warn(`Slideshow container with ID ${containerId} not found.`);
        }
    }

    // 4. Hero Section Slideshow Logic (Runs every 7 seconds for a slow, premium look)
    startSlideshow('hero-slideshow-container', 'hero-slide-image', 7000); 

    // 5. About Section Slideshow Logic (Runs every 5 seconds, assuming it uses 'about-slideshow-container')
    startSlideshow('about-slideshow-container', 'slideshow-image', 5000); 
});
const track = document.querySelector('.room-carousel .carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function moveToSlide(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
}, 3000); // Change every 3 seconds
