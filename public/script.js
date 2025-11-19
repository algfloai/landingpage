document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.background-glow');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Smoothly move the glow to the cursor position
        // Using requestAnimationFrame for better performance could be added if needed, 
        // but CSS transition handles smoothing here.
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });
});
