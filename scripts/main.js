// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// 3D Tilt Effect for cards
const cards = document.querySelectorAll('.glass');

cards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
});

function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const angleX = (e.clientY - cardCenterY) * 0.1;
    const angleY = (cardCenterX - e.clientX) * 0.1;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

function resetTilt() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Three.js Background Animation
function initThreeJS() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    heroBackground.appendChild(renderer.domElement);

    // Create animated sphere
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x58a6ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);

    // Create floating shapes
    const shapes = [];
    const shapeCount = 15;
    const shapeGeometries = [
        new THREE.TetrahedronGeometry(0.5),
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.OctahedronGeometry(0.5)
    ];

    for (let i = 0; i < shapeCount; i++) {
        const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
        const material = new THREE.MeshPhongMaterial({
            color: 0x58a6ff,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        const shape = new THREE.Mesh(geometry, material);
        
        // Random position
        shape.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        
        // Random rotation
        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        shapes.push(shape);
        scene.add(shape);
    }

    // Add lights
    const light = new THREE.PointLight(0x58a6ff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    scene.add(sphere);
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate main sphere
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;

        // Animate floating shapes
        shapes.forEach((shape, i) => {
            shape.rotation.x += 0.002 * (i % 2 ? 1 : -1);
            shape.rotation.y += 0.003 * (i % 3 ? 1 : -1);
            shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
        });

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // Parallax effect for hero section
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
        
        sphere.rotation.y = moveX;
        sphere.rotation.x = moveY;

        shapes.forEach((shape, i) => {
            shape.position.x += moveX * 0.02 * (i % 2 ? 1 : -1);
            shape.position.y += moveY * 0.02 * (i % 3 ? 1 : -1);
        });
    });
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
}

window.addEventListener('scroll', updateScrollProgress);

// Initialize everything when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Initial scroll progress
    updateScrollProgress();

    // Initialize GSAP animations
    gsap.from('.hero-content', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5
    });

    gsap.from('.social-links a', {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 1
    });

    // Initialize Three.js scene
    initThreeJS();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.backdropFilter = 'blur(12px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
    }
});
