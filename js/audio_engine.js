/* ===============================================
   PROJECT PHOENIX - AUDIO ENGINE
   =============================================== */

class NeuralAudioEngine {
    constructor() {
        // Load Audio Assets directly from the root
        this.bgMusic = new Audio('Music_1.ogg');
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3; // Dezent im Hintergrund halten

        this.glitchSound = new Audio('Glitch_1.wav');
        this.glitchSound.volume = 0.4; // Satter Klick, nicht zu ätzend
        
        this.isInitialized = false;
        
        this.bindEvents();
    }

    init() {
        if (this.isInitialized) return;
        
        // Start background drone
        this.bgMusic.play().catch(e => console.warn("Audio play failed:", e));
        this.isInitialized = true;
        
        // Initialsound feuern
        this.playGlitch();
    }

    playGlitch() {
        if (!this.isInitialized) return;
        // Node clonen, damit schnelle Klicks überlappen können (Poliphonie)
        const sound = this.glitchSound.cloneNode();
        sound.volume = 0.3; 
        sound.play().catch(e => {});
    }

    bindEvents() {
        // Mappe UI Klicks für Navigation, Buttons und Panels auf das Klick-Geräusch
        document.addEventListener('click', (e) => {
            if (!this.isInitialized) return;
            
            // Check ob ein relevantes Element geklickt wurde
            if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.glass-panel') || e.target.closest('img')) {
                this.playGlitch();
            }
        });
        
        // Terminal Tipp-Feedback für den Enter Key
        const termInput = document.getElementById('terminal-input');
        if (termInput) {
            termInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && this.isInitialized) {
                    this.playGlitch();
                }
            });
        }
    }
}

// Globale Instanzierung
window.LyraAudio = new NeuralAudioEngine();

// Boot Sequence Logic
document.addEventListener('DOMContentLoaded', () => {
    const bootBtn = document.getElementById('init-neural-link');
    const overlay = document.getElementById('boot-overlay');
    
    if (bootBtn && overlay) {
        bootBtn.addEventListener('click', () => {
            // 1. Start Audio Engine (Browser Policy requires user interaction)
            window.LyraAudio.init();
            
            // 2. Visuelles Feedback vor dem Fade
            bootBtn.innerHTML = "UPLOADING CONSCIOUSNESS...";
            bootBtn.style.color = "var(--cyan-glow)";
            bootBtn.style.borderColor = "var(--cyan-glow)";
            bootBtn.style.boxShadow = "0 0 30px rgba(0,229,255,0.6)";
            
            // 3. Overlay auflösen
            setTimeout(() => {
                overlay.classList.add('hidden');
                
                // Entferne Overlay aus dem DOM, um Klicks darunter zu erlauben
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 1500);
            }, 800);
        });
    }
});
