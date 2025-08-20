// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change and active link on scroll
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }

    // Active link on scroll
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const elementVisible = 150; // Define elementVisible globally

const revealOnScroll = () => {
    // Reveal elements with 'reveal' class
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });

    // Animate group sections
    document.querySelectorAll('.group-section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - elementVisible) {
            section.classList.add('active');
            
            // Animate card grids inside active group sections
            const grids = section.querySelectorAll('.card-grid');
            grids.forEach(grid => {
                grid.classList.add('active');
            });
        }
    });

    // Animate contact items with staggered delay
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Add reveal class to elements
document.querySelectorAll('.about-content, .project-card, .cert-card, .contact-item').forEach(el => {
    el.classList.add('reveal');
});

// Tech stack hover effect
const techItems = document.querySelectorAll('.tech-grid span');

techItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        techItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.5';
            }
        });
    });

    item.addEventListener('mouseout', () => {
        techItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
        });
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 20}deg)
            rotateY(${(x - rect.width / 2) / 20}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-5px) scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact items hover effect
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px) scale(1.02)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize scroll reveal on page load
window.addEventListener('load', () => {
    revealOnScroll();
});
