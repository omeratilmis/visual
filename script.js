document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const videoContainer = document.querySelector('.video-container');
    const description = document.querySelector('.description');

    // Smooth scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        title.style.transform = `translateY(${scrolled * 0.1}px)`;
        videoContainer.style.transform = `translateY(${scrolled * 0.05}px)`;
    });

    // Mouse movement parallax effect on title
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        title.style.transform = `translate(
            ${mouseX * 20}px,
            ${mouseY * 20}px
        )`;
    });

    // Fade in elements on load
    const elements = [title, videoContainer, description];
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});