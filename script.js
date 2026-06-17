document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SMOOTH BUTTON CLICK SCROLLING ---
    const scrollButton = document.getElementById('scrollToContactBtn');
    const contactSection = document.getElementById('contactSection');

    if (scrollButton && contactSection) {
        scrollButton.addEventListener('click', function() {
            contactSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // --- 2. ADVANCED SCROLL ENTRANCE ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Configuration settings for scroll checking
    const observerOptions = {
        root: null, // target viewport context
        rootMargin: '0px',
        threshold: 0.15 // fires animation when 15% of row is visible
    };

    // Callback that manages adding the visible trigger class
    const intersectionCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stops tracking once animation triggers to protect system performance
                observer.unobserve(entry.target);
            }
        });
    };

    // Initialize checking process
    if ('IntersectionObserver' in window) {
        const scrollObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        // Fallback option: displays rows immediately if system browser is very old
        animatedElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }
    
});
