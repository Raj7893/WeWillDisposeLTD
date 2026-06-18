document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SMOOTH SCROLLING NAVIGATION ---
    const scrollButton = document.getElementById('scrollToContactBtn');
    const contactSection = document.getElementById('contactSection');

    if (scrollButton && contactSection) {
        scrollButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent jump
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // --- 2. HARDWARE-ACCELERATED ENTRANCE ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Setting up the observer config (Trigger when 15% of the element is visible)
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    // The function that adds the visibility class
    const intersectionCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the CSS class that triggers the transform/opacity
                entry.target.classList.add('is-visible');
                // Unobserve so the animation only happens once per page load
                observer.unobserve(entry.target);
            }
        });
    };

    // Check if the browser supports IntersectionObserver (all modern ones do)
    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        // Ultimate fallback for ancient web browsers: show everything immediately
        animatedElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }
    
});
