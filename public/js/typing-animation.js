const roles = ["AI & ML Engineer", "Python Developer", "Full Stack Web Developer"];
let currentRoleIndex = 0;
let isDeleting = false;
let text = '';
let charIndex = 0;
let blinkCount = 0;
let isCursorVisible = true;
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseTime = 1000;
const blinkSpeed = 300;

function typeEffect() {
    const currentRole = roles[currentRoleIndex];
    
    // Handle blinking after completing a role
    if (!isDeleting && charIndex === currentRole.length && blinkCount < 4) {
        isCursorVisible = !isCursorVisible;
        document.getElementById('role').textContent = text + (isCursorVisible ? '_' : '');
        blinkCount++;
        setTimeout(typeEffect, blinkSpeed);
        return;
    }
    
    // Reset blink count and continue with normal typing/deleting
    if (!isDeleting && charIndex === currentRole.length && blinkCount >= 4) {
        blinkCount = 0;
        isCursorVisible = true;
        isDeleting = true;
    }
    
    if (isDeleting) {
        text = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        text = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    document.getElementById('role').textContent = text + '_';
    
    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = pauseTime;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeEffect, pauseTime);
});

