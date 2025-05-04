document.addEventListener('DOMContentLoaded', () => {
    // Initialize sections
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Show first section immediately
    sections[0].classList.add('active');

    // Intersection Observer for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Update navigation
                navLinks.forEach(link => {
                    if (link.getAttribute('href').slice(1) === entry.target.id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth Scroll Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero Section Animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Card Hover Effects
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.borderColor = 'var(--accent-primary)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'var(--card-border)';
        });
    });

    // Mobile Navigation
    const mobileBreakpoint = 768;
    const sidenav = document.querySelector('.sidenav');
    
    function handleResize() {
        if (window.innerWidth <= mobileBreakpoint) {
            sidenav.style.transform = 'translateX(-100%)';
        } else {
            sidenav.style.transform = 'translateX(0)';
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    // Add loaded class to body
    document.body.classList.add('loaded');
});
