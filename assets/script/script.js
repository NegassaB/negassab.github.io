document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Auto-update year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Current Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Project Archive Toggle
    const toggleBtn = document.getElementById('toggleBtn');
    const archive = document.getElementById('archive');

    toggleBtn.addEventListener('click', () => {
        const isHidden = archive.classList.contains('hidden');
        if (isHidden) {
            archive.classList.remove('hidden');
            toggleBtn.textContent = 'Hide projects';
        } else {
            archive.classList.add('hidden');
            toggleBtn.textContent = 'View all projects';
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 3. Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .col').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});