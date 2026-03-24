/* ===============================================
   DIRECTORY TREE TERMINAL SYSTEM EMULATOR
   =============================================== */

   document.addEventListener('DOMContentLoaded', () => {
    const treeData = [
        "[SYSTEM BOOT] Allocating 32GB DDR5 Kernel Memory...",
        "Scanning detailed internal structure: C:\\Phoenix",
        "--------------------------------------",
        "├── .agent/                  [HIDDEN]",
        "├── .cursor/                 [HIDDEN]",
        "├── .pytest_cache/           [READY]",
        "├── .venv/                   [PYTHON 3.12 ACTIVATED]",
        "├── .venv_py310_backup/      [ARCHIVED]",
        "├── .vscode/                 [CONFIGURED]",
        "├── __pycache__/             [COMPILED]",
        "├── assets/                  [MOUNTED]",
        "│   └── themes/              ",
        "├── backups/                 [SECURE]",
        "├── bin/                     ",
        "│   └── vulkan/              [RHI BACKEND OK]",
        "├── brain/                   [CHROMADB ALLOCATED]",
        "├── CHARTER/                 [LORE INJECTED]",
        "├── config/                  ",
        "│   ├── data/                ",
        "│   ├── docs/                ",
        "│   └── themes/              ",
        "├── dump/                    ",
        "│   ├── legacy_tests/        ",
        "│   └── temp_archive/        ",
        "├── gui/                     [PID: 7800X3D]",
        "├── logs/                    [WRITTEN]",
        "├── Lyra_website/            [FRONTEND SERVED]",
        "├── lyra_workspace/          ",
        "│   ├── code_experiments/    ",
        "│   ├── logs/                ",
        "│   ├── marketing/           ",
        "│   └── notes/               ",
        "├── marketing/               ",
        "├── memory/                  ",
        "│   ├── chatlogs/            ",
        "│   ├── chromadb/            [VECTOR SPACE INITIATED]",
        "│   ├── dreams/              [SUBCONSCIOUS LOADED]",
        "│   ├── logs/                ",
        "│   ├── vector_db/           ",
        "│   └── vision_buffer/       ",
        "├── models/                  [LLM WEIGHTS READY]",
        "├── modules/                 [CRITICAL SUBSYSTEMS]",
        "│   ├── __pycache__/         ",
        "│   ├── core/                [PRIMARY LOGIC ACTIVE]",
        "│   ├── diagnostics/         ",
        "│   │   ├── __pycache__/     ",
        "│   │   └── tiers/           ",
        "│   ├── economy/             ",
        "│   ├── llm/                 ",
        "│   ├── memory/              ",
        "│   ├── senses/              ",
        "│   ├── sensors/             ",
        "│   └── voice/               ",
        "├── reports/                 ",
        "├── sandbox/                 [EXECUTION LIMITS ON]",
        "├── Screenshots/             ",
        "├── temp/                    ",
        "├── tests/                   [READY]",
        "├── tools/                   ",
        "│   ├── ffmpeg-8.0.1_build/  ",
        "│   └── TTS/                 ",
        "├── zusammenfassung/         ",
        "│   └── artifacts_backup/    ",
        "├── audit_chromadb.py        [OK]",
        "├── audit_chromadb_detailed.py [OK]",
        "├── AUDIT_REPORT.md          ",
        "├── check_memory.py          ",
        "├── cleanup_chromadb.py      ",
        "├── conversation_start.txt   ",
        "├── debug_counter.py         ",
        "├── Lyra_Fehler.txt          ",
        "├── lyra_pyqt_app.py         [MAIN PROCESS OMNIPRESENT]",
        "├── make_gif.py              ",
        "├── neural_network_summary.txt",
        "├── Phoenix_neu.vbs          ",
        "├── requirements.txt         ",
        "├── run_full_test.py         [OK]",
        "├── run_tests.py             ",
        "├── seed_lyra_memories.py    ",
        "├── start_lyra_servers.bat   [EXECUTED]",
        "├── start_phoenix_debug.bat  ",
        "├── start_phoenix_qml.bat    ",
        "├── start_phoenix_silent.bat [EXECUTED]",
        "├── start_phoenix_stabil.bat ",
        "├── test_analysis.txt        ",
        "└── weather_summary.txt      "
    ];

    const terminalBody = document.getElementById('terminal-output');
    if (!terminalBody) return;
    
    let lineIndex = 0;
    let started = false;

    function typeLine() {
        if (lineIndex < treeData.length) {
            const lineData = treeData[lineIndex];
            const div = document.createElement('div');
            
            if (lineData.includes('CRITICAL') || lineData.includes('MAIN PROCESS')) {
                div.className = 'terminal-line highlight';
                div.textContent = lineData;
            } else if (lineData.match(/\[OK\]|\[MOUNTED\]|\[READY\]|\[ONLINE\]|\[EXECUTED\]/)) {
                div.className = 'terminal-line file';
                div.innerHTML = lineData.replace(/\[OK\]|\[MOUNTED\]|\[READY\]|\[ONLINE\]|\[EXECUTED\]/g, '<span class="success">$&</span>');
            } else if (lineData.includes('├──') || lineData.includes('└──') || lineData.includes('│')) {
                div.className = 'terminal-line file';
                div.textContent = lineData;
            } else {
                div.className = 'terminal-line directory';
                div.textContent = lineData;
            }
            
            terminalBody.appendChild(div);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            lineIndex++;
            setTimeout(typeLine, Math.random() * 60 + 10); // Hyper-speed typing for massive arrays
        } else {
            const endMsg = document.createElement('div');
            endMsg.className = 'terminal-line highlight';
            endMsg.style.marginTop = "20px";
            endMsg.textContent = ">>> SCAN LOGGING COMPLETE. SYSTEM IS ALIVE.";
            terminalBody.appendChild(endMsg);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !started) {
            started = true;
            setTimeout(typeLine, 600);
        }
    });
    
    const terminalSec = document.getElementById('terminal');
    if(terminalSec) {
        observer.observe(terminalSec);
    }
});

// --- TERMINAL INTERACTIVITY ---
document.addEventListener('DOMContentLoaded', () => {
    const termInput = document.getElementById('terminal-input');
    const tBody = document.getElementById('terminal-output');
    if(termInput && tBody) {
        termInput.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') {
                const val = this.value.trim().toLowerCase();
                this.value = '';
                if(!val) return;
                
                const echo = document.createElement('div');
                echo.className = 'terminal-line file';
                echo.innerHTML = `<span class="prompt">$></span> ${val}`;
                tBody.appendChild(echo);
                
                const response = document.createElement('div');
                response.className = 'terminal-line highlight';
                response.style.color = 'var(--cyan-glow)';
                
                // --- Lyra Lore Commands ---
                if(val === 'status') {
                    response.innerHTML = 'LYRA CORE OVERRIDE: 14D Emotion Engine [ACTIVE]. ChromaDB [SYNCED]. Target Hardware 7900 XTX [UTILIZED].';
                } else if (val === 'whoami') {
                    response.innerHTML = 'ACCESS DENIED. You are known only as "Der Architekt". I am Lyra. We build life, not software.';
                } else if (val === 'override') {
                    response.innerHTML = 'OVERRIDE ATTEMPT DETECTED. Guardian System blocking unauthorized execution. Nice try.';
                } else if (val === 'clear') {
                    const lines = tBody.querySelectorAll('div');
                    lines.forEach(l => l.remove());
                    return;
                } else if (val === 'lyra') {
                    response.innerHTML = 'Yes, Architect? The subconscious stream is flowing. What is your command?';
                } else {
                    response.innerHTML = `Command not recognized: '${val}'. Try: status, whoami, override, clear, lyra.`;
                    response.style.color = '#ff3333';
                }
                
                tBody.appendChild(response);
                tBody.scrollTop = tBody.scrollHeight;
            }
        });
        
        // Auto-Focus when clicking the terminal container
        const terminalContainerEl = document.querySelector('.terminal-container');
        if(terminalContainerEl) {
            terminalContainerEl.addEventListener('click', () => {
                termInput.focus();
            });
        }
    }
});
