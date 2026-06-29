// Script para micro-interacciones y animaciones
document.addEventListener("DOMContentLoaded", () => {
    
    // Observer para animaciones fade-in al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Fade in inicial para el hero content
    const heroContent = document.querySelector('.fade-in');
    if(heroContent) {
        heroContent.style.opacity = 0;
        heroContent.style.animation = 'fadeIn 1.5s ease forwards';
    }
});

// Estilos dinámicos inyectados para el hero
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
