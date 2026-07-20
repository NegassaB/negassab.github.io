document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Navigation & Mobile Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. Auto-update Year in Footer ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- 3. Project Archive Toggle (Homepage Only) ---
    const toggleBtn = document.getElementById('toggleBtn');
    const archive = document.getElementById('archive');
    const projectsSection = document.getElementById('projects');

    // This guard prevents the "Cannot set properties of null" error
    if (toggleBtn && archive) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = archive.classList.contains('hidden');
            if (isHidden) {
                archive.classList.remove('hidden');
                toggleBtn.textContent = 'Hide projects';
            } else {
                archive.classList.add('hidden');
                toggleBtn.textContent = 'View all projects';
                // Only scroll if the projects section exists
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // --- 4. Scroll Reveal Logic (Intersection Observer) ---
    // This is safe to run on all pages; if no cards are found, it simply does nothing.
    const revealElements = document.querySelectorAll('.card, .col, .post-container');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });
    }
});