// ===========================
// Enhanced 3D Portfolio Interactions
// ===========================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling with Offset
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation on Scroll
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Enhanced Glassmorphism Navbar
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.25)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.4)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }
});

// ===========================
// 3D Tilt Effect on Cards
// ===========================
function addTiltEffect(selector) {
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// Apply tilt effect to various cards
addTiltEffect('.project-card');
addTiltEffect('.skill-card');
addTiltEffect('.stat-card');
addTiltEffect('.contact-card');

// ===========================
// Enhanced Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.project-card, .skill-card, .stat-card, .contact-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px) scale(0.9)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    fadeInObserver.observe(el);
});

// ===========================
// Animated Skill Progress Bars
// ===========================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    skillObserver.observe(card);
});

// ===========================
// Enhanced Parallax Effect
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    // Parallax for floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const rotation = scrolled * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
    });

    // Parallax for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const offset = scrolled * 0.4;
        heroImage.style.transform = `translateY(${offset}px)`;
    }
});

// ===========================
// 3D Mouse Follow Effect for Hero
// ===========================
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// ===========================
// Enhanced Cursor Trail with Hearts
// ===========================
let lastSparkleTime = 0;
const sparkleDelay = 80;

function createEnhancedSparkle(e) {
    const sparkles = ['✨', '💖', '💫', '🌸', '💕', '⭐'];
    const sparkle = document.createElement('div');
    const randomSparkle = sparkles[Math.floor(Math.random() * sparkles.length)];

    sparkle.textContent = randomSparkle;
    sparkle.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 15}px;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        opacity: 1;
        user-select: none;
        animation: sparkleFloat ${Math.random() * 2 + 1}s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(${Math.random() * 360}deg) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > sparkleDelay) {
        createEnhancedSparkle(e);
        lastSparkleTime = now;
    }
});

// ===========================
// Cycling Typing Effect for Subtitle
// ===========================
const typingElement = document.getElementById('typing-text');
if (typingElement) {
    const titles = [
        'Engineering Manager',
        'Product Owner',
        'Project Leader',
        'Problem Solver'
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeTitle() {
        const currentTitle = titles[titleIndex];

        if (!isDeleting) {
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentTitle.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else {
                typingSpeed = 100;
            }
        } else {
            typingElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typingSpeed = 500; // Pause before next title
            } else {
                typingSpeed = 50;
            }
        }

        setTimeout(typeTitle, typingSpeed);
    }

    window.addEventListener('load', () => {
        setTimeout(typeTitle, 1000);
    });
}

// ===========================
// Contact Form with Animation
// ===========================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;

    // Animate button
    submitBtn.style.transform = 'scale(0.95)';
    submitBtn.textContent = 'Sending... 💌';

    setTimeout(() => {
        submitBtn.style.transform = 'scale(1)';

        // Create success notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #FFB8E8, #D4A5F5);
            color: white;
            padding: 1.5rem 2.5rem;
            border-radius: 25px;
            box-shadow: 0 16px 48px rgba(255, 159, 213, 0.35), 0 24px 96px rgba(212, 165, 245, 0.3);
            z-index: 9999;
            font-weight: 600;
            animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            border: 2px solid rgba(255, 255, 255, 0.3);
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">✨</span>
                <span>Message sent successfully!</span>
            </div>
        `;

        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px) rotate(10deg);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) rotate(0deg);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0) rotate(0deg);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px) rotate(10deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(notificationStyle);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);

        submitBtn.textContent = originalText;
        contactForm.reset();
    }, 1500);
});

// ===========================
// Floating Elements Animation
// ===========================
function createFloatingElement() {
    const elements = ['💫', '✨', '🌸', '💖', '🦋', '🌙', '⭐'];
    const element = document.createElement('div');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    element.textContent = randomElement;
    element.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 30 + 20}px;
        left: ${Math.random() * 100}vw;
        bottom: -50px;
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
        animation: floatUp ${Math.random() * 10 + 15}s linear;
    `;

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 25000);
}

const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Create floating elements periodically
setInterval(createFloatingElement, 3000);

// ===========================
// Scroll to Top Button (3D Style)
// ===========================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FFB8E8, #D4A5F5);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 8px 32px rgba(255, 159, 213, 0.25), 0 16px 64px rgba(212, 165, 245, 0.2);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    backdrop-filter: blur(10px);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'all';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.15) translateY(-5px) rotate(360deg)';
    scrollTopBtn.style.boxShadow = '0 0 20px rgba(255, 159, 213, 0.5), 0 0 40px rgba(212, 165, 245, 0.3), 0 0 60px rgba(183, 148, 244, 0.2)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0) rotate(0deg)';
    scrollTopBtn.style.boxShadow = '0 8px 32px rgba(255, 159, 213, 0.25), 0 16px 64px rgba(212, 165, 245, 0.2)';
});

// ===========================
// Image Hover 3D Effect
// ===========================
const imageWrapper = document.querySelector('.image-wrapper');
if (imageWrapper) {
    imageWrapper.addEventListener('mousemove', (e) => {
        const rect = imageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        imageWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    imageWrapper.addEventListener('mouseleave', () => {
        imageWrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ===========================
// Project Card Click Effect
// ===========================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-link')) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-15px) rotateX(5deg)';
            }, 100);
        }
    });
});

// ===========================
// Add Glow Effect on Scroll
// ===========================
const addGlowOnScroll = () => {
    const elements = document.querySelectorAll('.section-title');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            element.style.filter = 'drop-shadow(0 4px 20px rgba(255, 159, 213, 0.5))';
        } else {
            element.style.filter = 'drop-shadow(0 4px 12px rgba(255, 159, 213, 0.3))';
        }
    });
};

window.addEventListener('scroll', addGlowOnScroll);

// ===========================
// Lazy Load Images with Fade
// ===========================
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            img.style.transform = 'scale(0.9)';

            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 100);

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ===========================
// Interactive Project Tags
// ===========================
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.stopPropagation();
        tag.style.transform = 'scale(0.9)';
        setTimeout(() => {
            tag.style.transform = 'translateY(-3px)';
        }, 100);
    });
});

// ===========================
// Console Art
// ===========================
console.log('%c✨ Welcome to Sai Kameshwar\'s Portfolio! ✨',
    'color: #4A90E2; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(74, 144, 226, 0.5);');
console.log('%cBuilt with dedication and modern 3D design 💼',
    'color: #50C878; font-size: 14px; font-weight: 600;');
console.log('%cEngineering Manager | Product Owner | CSPO 🚀',
    'color: #9B59B6; font-size: 12px;');

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedParallax = debounce(() => {
    const scrolled = window.scrollY;
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const rotation = scrolled * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
    });
}, 10);

window.addEventListener('scroll', debouncedParallax);

// ===========================
// Initial Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Add Confetti on Button Click
// ===========================
function createConfetti(x, y) {
    const colors = ['#FFB8E8', '#D4A5F5', '#B794F4', '#FF9FD5', '#E5C4FF'];
    const shapes = ['●', '■', '▲', '★', '♥'];

    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            font-size: ${Math.random() * 20 + 10}px;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${Math.random() * 2 + 1}s ease-out forwards;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add confetti to primary buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
    });
});
