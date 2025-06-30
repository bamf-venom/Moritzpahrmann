// ASCII Art - Formatted for better display
const asciiArt = `███╗   ███╗ ██████╗ ██████╗ ██╗████████╗███████╗
████╗ ████║██╔═══██╗██╔══██╗██║╚══██╔══╝╚══███╔╝
██╔████╔██║██║   ██║██████╔╝██║   ██║     ███╔╝ 
██║╚██╔╝██║██║   ██║██╔══██╗██║   ██║    ███╔╝  
██║ ╚═╝ ██║╚██████╔╝██║  ██║██║   ██║   ███████╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝

██████╗  █████╗ ██╗  ██╗██████╗ ███╗   ███╗ █████╗ ███╗   ██╗███╗   ██╗
██╔══██╗██╔══██╗██║  ██║██╔══██╗████╗ ████║██╔══██╗████╗  ██║████╗  ██║
██████╔╝███████║███████║██████╔╝██╔████╔██║███████║██╔██╗ ██║██╔██╗ ██║
██╔═══╝ ██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║╚██╗██║██║╚██╗██║
██║     ██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝`;

// Typing Animation Variables
let currentMessageIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const messages = [
    'moritz@terminal:~$ ./portfolio.sh',
    'Loading VFX Artist Profile...',
    'System Ready.',
    'Awaiting Launch...'
];

// Typing Animation Function
function typeWriter() {
    const typingElement = document.getElementById('typingText');
    const currentMessage = messages[currentMessageIndex];
    
    if (!isDeleting && currentCharIndex < currentMessage.length) {
        // Typing
        typingElement.textContent = currentMessage.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(typeWriter, 80);
    } else if (isDeleting && currentCharIndex > 0) {
        // Deleting
        typingElement.textContent = currentMessage.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(typeWriter, 40);
    } else if (!isDeleting && currentCharIndex === currentMessage.length) {
        // Start deleting after pause
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to next message
        isDeleting = false;
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        setTimeout(typeWriter, 200);
    }
}

// Countdown Timer Function
function updateCountdown() {
    const targetDate = new Date('2025-07-07T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // Countdown finished
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Get current date for last login
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Check if device is mobile
function isMobileDevice() {
    return window.innerWidth <= 767;
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set ASCII Art only for desktop/tablet
    const asciiElement = document.getElementById('asciiArt');
    if (asciiElement && !isMobileDevice()) {
        asciiElement.textContent = asciiArt;
    }
    
    // Set current date for last login
    document.getElementById('lastLogin').textContent = `Last login: ${getCurrentDate()} on ttys001`;
    
    // Start typing animation
    typeWriter();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add interactive effects to time blocks
    const timeBlocks = document.querySelectorAll('.time-block');
    timeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add touch events for mobile devices
    timeBlocks.forEach(block => {
        block.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        block.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Handle window resize to toggle ASCII art display
window.addEventListener('resize', function() {
    const asciiElement = document.getElementById('asciiArt');
    if (asciiElement) {
        if (isMobileDevice()) {
            asciiElement.textContent = '';
        } else {
            asciiElement.textContent = asciiArt;
        }
    }
});

// Add random glitch effect
function addRandomGlitch() {
    const asciiElement = document.getElementById('asciiArt');
    if (asciiElement && !isMobileDevice()) {
        asciiElement.style.textShadow = '0 0 20px rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            asciiElement.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
        }, 100);
    }
}

// Random glitch effect every 10-15 seconds
setInterval(addRandomGlitch, Math.random() * 5000 + 10000);

// Easter egg: Konami code for extra effects
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.toString() === konamiSequence.toString()) {
        // Secret matrix effect
        document.body.style.animation = 'matrix 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        konamiCode = [];
    }
});

// Smooth scrolling for better mobile experience
function smoothScroll() {
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Initialize smooth scroll and optimizations
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    
    // Enhanced focus management for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #4CAF50';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// Console Easter Egg
console.log('%c🎬 MORITZ PAHRMANN - VFX ARTIST 🎬', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to the terminal! Type the Konami Code for a surprise: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #888; font-size: 12px;');
console.log('%cPortfolio launching July 7, 2025', 'color: #fff; font-size: 14px;');