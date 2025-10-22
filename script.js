// Particles.js Configuration for Underwater Bubbles
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#64ffda', '#ff6b9d', '#ffffff']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 8,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'top',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 15,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 10
            }
        }
    },
    retina_detect: true
});

// Smooth Scrolling
function scrollToSection(selector) {
    document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Advanced Bubble Creation on Click
document.addEventListener('click', (e) => {
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        setTimeout(() => {
            createAdvancedBubble(e.clientX, e.clientY);
        }, i * 50);
    }
    
    // Create sparkles
    createSparkles(e.clientX, e.clientY);
});

function createAdvancedBubble(x, y) {
    const bubble = document.createElement('div');
    const size = Math.random() * 50 + 20;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    const duration = Math.random() * 2 + 1;
    
    bubble.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.9),
            rgba(100, 255, 218, 0.7) 40%,
            rgba(100, 255, 218, 0.3));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 
            inset -10px -10px 20px rgba(255, 255, 255, 0.5),
            0 0 30px rgba(100, 255, 218, 0.5);
        animation: bubbly ${duration}s ease-out forwards;
    `;
    
    bubble.style.setProperty('--tx', ${Math.cos(angle) * distance}px);
    bubble.style.setProperty('--ty', ${Math.sin(angle) * distance - 200}px);
    
    document.body.appendChild(bubble);
    
    setTimeout(() => bubble.remove(), duration * 1000);
}

function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 8;
        const distance = Math.random() * 80 + 40;
        
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #64ffda, #ff6b9d);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sparkle-burst 0.8s ease-out forwards;
        `;
        
        sparkle.style.setProperty('--sx', ${Math.cos(angle) * distance}px);
        sparkle.style.setProperty('--sy', ${Math.sin(angle) * distance}px);
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
}

// Animation Styles
const animStyles = document.createElement('style');
animStyles.textContent = `
    @keyframes bubbly {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes sparkle-burst {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--sx)), calc(-50% + var(--sy))) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animStyles);

// Add Ocean Decorations
function addOceanDecorations() {
    // Add coral decorations
    const coralLeft = document.createElement('div');
    coralLeft.className = 'coral-decoration coral-left';
    document.body.appendChild(coralLeft);
    
    const coralRight = document.createElement('div');
    coralRight.className = 'coral-decoration coral-right';
    document.body.appendChild(coralRight);
    
    // Add jellyfish
    for (let i = 0; i < 3; i++) {
        const jellyfish = document.createElement('div');
        jellyfish.className = 'jellyfish';
        jellyfish.style.animationDelay = ${i * 5}s;
        jellyfish.style.left = ${20 + i * 30}%;
        document.body.appendChild(jellyfish);
    }
    
    // Add school of fish
    const fishSchool = document.createElement('div');
    fishSchool.className = 'fish-school';
    fishSchool.innerHTML = '🐠🐟🐡';
    document.body.appendChild(fishSchool);
    
    // Add light rays
    const lightRays = document.createElement('div');
    lightRays.className = 'light-rays';
    document.body.appendChild(lightRays);
    
    // Add seaweed
    for (let i = 0; i < 6; i++) {
        const seaweed = document.createElement('div');
        seaweed.className = 'seaweed';
        document.body.appendChild(seaweed);
    }
}

// Initialize ocean decorations
addOceanDecorations();

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 25, 47, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section-container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Form Submission with Bubble Effect
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create success bubble
    const successBubble = document.createElement('div');
    successBubble.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: rgba(17, 34, 64, 0.95);
        backdrop-filter: blur(10px);
        border: 2px solid var(--water-blue);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        z-index: 10000;
        animation: popIn 0.5s ease-out forwards;
    `;
    
    successBubble.innerHTML = `
        <h3 style="color: var(--water-blue); margin-bottom: 1rem; font-size: 2rem;">
            🌊 Message Sent!
        </h3>
        <p style="color: #8892b0;">
            Thanks for diving into my inbox! I'll swim back to you soon.
        </p>
    `;
    
    document.body.appendChild(successBubble);
    
    setTimeout(() => {
        successBubble.style.animation = 'popOut 0.5s ease-out forwards';
        setTimeout(() => successBubble.remove(), 500);
    }, 3000);
    
    e.target.reset();
});

// Pop animations
const popStyles = document.createElement('style');
popStyles.textContent = `
    @keyframes popIn {
        to { transform: translate(-50%, -50%) scale(1); }
    }
    @keyframes popOut {
        to { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(popStyles);

// Dynamic Cursor Trail
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 5px;
            height: 5px;
            background: rgba(100, 255, 218, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: fadeOut 1s ease-out forwards;
            z-index: 9998;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 1000);
    }
});

const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeOut {
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(fadeStyle);

console.log('🌊 Welcome to the underwater tech ocean! 🐠');
console.log('💙 Portfolio created with love by Anshika Agrawal');