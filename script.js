// ==================== PARALLAX SCROLL EFFECT ====================
class ParallaxEffect {
    constructor() {
        this.layers = document.querySelectorAll('.parallax-layer');
        this.shapes = document.querySelectorAll('.shape');
        this.sections = document.querySelectorAll('section');
        this.journeyImages = document.querySelectorAll('.parallax-image');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.handleScroll(); // Initial call
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        // Parallax layers move at different speeds
        this.layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.05;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });

        // Shapes move at different speeds and directions
        this.shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.03);
            const direction = index % 2 === 0 ? 1 : -1;
            const yPos = scrolled * speed * direction;
            const xPos = (scrolled * speed * 0.5) * (index % 2 === 0 ? -1 : 1);
            
            shape.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${scrolled * 0.05}deg)`;
        });

        // Journey images parallax effect
        this.journeyImages.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const speed = parseFloat(img.dataset.speed) || 0.5;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (window.innerHeight - rect.top) * speed * 0.1;
                const placeholder = img.querySelector('.image-placeholder');
                if (placeholder) {
                    placeholder.style.transform = `translateY(${-yPos}px) scale(1.1)`;
                }
            }
        });

        // Add depth effect to sections
        this.sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const centerY = window.innerHeight / 2;
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(centerY - sectionCenter);
            const maxDistance = window.innerHeight;
            const scale = 1 - (distance / maxDistance) * 0.05;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.style.transform = `scale(${scale})`;
                section.style.opacity = scale;
            }
        });
    }
}

// ==================== ANIMATED GRADIENT BACKGROUND (Similar to Techfest.org) ====================
class GradientAnimation {
    constructor() {
        this.canvas = document.getElementById('gradient-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 60;
        this.mouse = { x: null, y: null, radius: 150 };
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        this.addEventListeners();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(168, 85, 247, 0.6)',    // Purple
            'rgba(236, 72, 153, 0.6)',    // Pink
            'rgba(59, 130, 246, 0.6)',    // Blue
            'rgba(6, 182, 212, 0.6)',     // Cyan
            'rgba(16, 185, 129, 0.6)'     // Green
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    drawGradient() {
        // Create animated gradient background with depth
        const time = Date.now() * 0.0001;
        
        // Multiple gradient layers for depth effect
        const gradient1 = this.ctx.createRadialGradient(
            this.canvas.width * 0.3 + Math.sin(time) * 100, 
            this.canvas.height * 0.3 + Math.cos(time) * 100, 
            0, 
            this.canvas.width * 0.3, 
            this.canvas.height * 0.3, 
            this.canvas.width * 0.6
        );
        gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
        gradient1.addColorStop(1, 'transparent');
        
        const gradient2 = this.ctx.createRadialGradient(
            this.canvas.width * 0.7 + Math.cos(time * 0.8) * 150, 
            this.canvas.height * 0.6 + Math.sin(time * 0.8) * 150, 
            0, 
            this.canvas.width * 0.7, 
            this.canvas.height * 0.6, 
            this.canvas.width * 0.5
        );
        gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.08)');
        gradient2.addColorStop(1, 'transparent');
        
        // Base gradient
        const baseGradient = this.ctx.createRadialGradient(
            this.canvas.width / 2, 
            this.canvas.height / 2, 
            0, 
            this.canvas.width / 2, 
            this.canvas.height / 2, 
            this.canvas.width / 2
        );
        baseGradient.addColorStop(0, '#0a0e27');
        baseGradient.addColorStop(0.5, '#1a1054');
        baseGradient.addColorStop(1, '#0a0e27');
        
        // Draw base
        this.ctx.fillStyle = baseGradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw animated gradients
        this.ctx.fillStyle = gradient1;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = gradient2;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = particle.color;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${1 - distance / 120})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Mouse interaction
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    
                    particle.x -= forceDirectionX * force * 3;
                    particle.y -= forceDirectionY * force * 3;
                }
            }

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }
        });
    }

    animate() {
        this.drawGradient();
        this.drawParticles();
        this.connectParticles();
        this.updateParticles();
        
        requestAnimationFrame(() => this.animate());
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
}

// ==================== TYPEWRITER EFFECT ====================
class Typewriter {
    constructor(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ==================== SCROLL ANIMATIONS ====================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.glass-effect, .skill-category, .project-card, .stat-card');
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal', 'active');
                }
            });
        }, { threshold: 0.1 });

        this.elements.forEach(element => {
            element.classList.add('reveal');
            observer.observe(element);
        });
    }
}

// ==================== NAVBAR FUNCTIONALITY ====================
class Navbar {
    constructor() {
        this.header = document.querySelector('header');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        
        this.init();
    }

    init() {
        this.addScrollEffect();
        this.addMobileMenu();
        this.addSmoothScroll();
    }

    addScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
    }

    addMobileMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
            });

            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.navMenu.classList.remove('active');
                });
            });
        }
    }

    addSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ==================== FORM HANDLING ====================
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }
    }

    handleSubmit() {
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.form.reset();
    }
}

// ==================== PARTICLE EFFECTS ON HOVER ====================
class ParticleEffects {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .project-link, .social-icon');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                this.createParticles(e);
            });
        });
    }

    createParticles(e) {
        const rect = e.target.getBoundingClientRect();
        const particleCount = 10;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(168, 85, 247, 0.8)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = `${rect.left + rect.width / 2}px`;
            particle.style.top = `${rect.top + rect.height / 2}px`;
            
            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 2;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let x = rect.left + rect.width / 2;
            let y = rect.top + rect.height / 2;
            let opacity = 1;

            const animate = () => {
                x += vx;
                y += vy;
                opacity -= 0.02;

                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                particle.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };

            animate();
        }
    }
}

// ==================== CURSOR TRAIL EFFECT ====================
class CursorTrail {
    constructor() {
        this.coords = [];
        this.init();
    }

    init() {
        window.addEventListener('mousemove', (e) => {
            this.coords.push({ x: e.clientX, y: e.clientY });
            
            if (this.coords.length > 20) {
                this.coords.shift();
            }
            
            this.drawTrail();
        });
    }

    drawTrail() {
        const existingTrails = document.querySelectorAll('.cursor-trail');
        existingTrails.forEach(trail => trail.remove());

        this.coords.forEach((coord, index) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: rgba(168, 85, 247, ${(index + 1) / this.coords.length * 0.5});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                left: ${coord.x}px;
                top: ${coord.y}px;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.style.opacity = '0';
                setTimeout(() => trail.remove(), 300);
            }, 50);
        });
    }
}

// ==================== INITIALIZE ALL ON DOM LOAD ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize parallax effect
    new ParallaxEffect();
    
    // Initialize animated gradient background
    new GradientAnimation();
    
    // Initialize typewriter effect
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const texts = [
            'Robotics Developer 🤖',
            'AI/ML Enthusiast 🧠',
            'Full Stack Developer 💻',
            'IoT Innovator 📡',
            'Open Source Contributor 🌟',
            'Problem Solver 🚀'
        ];
        new Typewriter(typewriterElement, texts);
    }
    
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Initialize navbar
    new Navbar();
    
    // Initialize contact form
    new ContactForm();
    
    // Initialize particle effects
    new ParticleEffects();
    
    // Initialize cursor trail (optional - can be removed if too distracting)
    // new CursorTrail();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add floating animation to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for resize events
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add console welcome message
console.log('%c🚀 Welcome to Anshika\'s Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%cFeel free to explore the code! 💻', 'color: #a855f7; font-size: 14px;');
