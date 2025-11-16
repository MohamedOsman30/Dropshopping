// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Testimonials Slider
    let currentSlide = 0;
    let slideInterval;
    let dots = [];

    function initializeSlider() {
        const testimonialsContainer = document.querySelector('.testimonials-container');
        dots = document.querySelectorAll('.slider-dot');
        const testimonials = document.querySelectorAll('.testimonial');
        
        if (!testimonialsContainer || testimonials.length === 0) return;
        
        // Reset to first slide
        currentSlide = 0;
        
        function showSlide(index) {
            if (testimonialsContainer && dots.length > 0) {
                // Calculate translation based on direction
                const direction = document.documentElement.dir === 'rtl' ? 1 : -1;
                const translateX = index * 100 * direction;
                testimonialsContainer.style.transform = `translateX(${translateX}%)`;
                
                // Update active dot
                updateActiveDot(index);
                
                currentSlide = index;
            }
        }

        function updateActiveDot(activeIndex) {
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Remove existing event listeners and add new ones
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                // Clone to remove existing event listeners
                const newDot = dot.cloneNode(true);
                dot.parentNode.replaceChild(newDot, dot);
            });
            
            // Re-select dots after cloning
            dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetSlideInterval();
                });
            });
        }

        // Show first slide initially
        showSlide(0);

        // Auto slide every 5 seconds
        function startSlideInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(() => {
                if (dots.length > 0) {
                    currentSlide = (currentSlide + 1) % dots.length;
                    showSlide(currentSlide);
                }
            }, 5000);
        }

        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }

        // Start the slider
        startSlideInterval();
        
        return { showSlide, resetSlideInterval };
    }

    // Initialize slider on page load
    let sliderControls = initializeSlider();

    // Re-initialize slider when language changes
    function handleLanguageChange() {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            sliderControls = initializeSlider();
        }, 150);
    }

    // Listen for language changes
    document.addEventListener('languageChanged', handleLanguageChange);
    
    // Also observe dir attribute changes as backup
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                handleLanguageChange();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir']
    });

    // Form Submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                const currentLang = localStorage.getItem('selectedLanguage') || 'ar';
                const errorMessage = currentLang === 'ar' 
                    ? 'يرجى ملء جميع الحقول المطلوبة.' 
                    : 'Please fill in all required fields.';
                alert(errorMessage);
                return;
            }
            
            // Here you would typically send the form data to a server
            const currentLang = localStorage.getItem('selectedLanguage') || 'ar';
            const successMessage = currentLang === 'ar' 
                ? 'تم تسجيلك بنجاح! سنتواصل معك قريباً.' 
                : 'Registration successful! We will contact you soon.';
            
            alert(successMessage);
            
            // Reset form
            this.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(window.innerWidth <= 768 && navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && navLinks && mobileMenu) {
            if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});