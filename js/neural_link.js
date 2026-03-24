/* ===============================================
   NEURAL LINK - SPA & INTERACTIVE FX
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const bg = document.getElementById('background-image');

    // Routing Logic (SPA)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (!targetId) return; // Lässt externe Links (wie Ko-Fi) normal passieren

            e.preventDefault();
            
            // Highlight Link
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show Target Section
            sections.forEach(sec => {
                sec.classList.remove('active');
            });
            
            const targetSec = document.getElementById(targetId);
            if(targetSec) targetSec.classList.add('active');
        });
    });

    // Random Glitch Effect Generator for titles
    const glitches = document.querySelectorAll('.glitch');
    setInterval(() => {
        glitches.forEach(glitch => {
            // Extrem seltene Glitches (Organisches Gefühl)
            if (Math.random() > 0.96) {
                glitch.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                glitch.style.textShadow = `${Math.random() * 10 - 5}px 0 rgba(230, 29, 43, 0.8), ${Math.random() * -10 + 5}px 0 rgba(0, 229, 255, 0.8)`;
                
                setTimeout(() => {
                    glitch.style.transform = 'none';
                    glitch.style.textShadow = '0 0 20px rgba(255,255,255,0.2)';
                }, 100 + Math.random() * 80);
            }
        });
    }, 250);
});
