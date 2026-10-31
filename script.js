// Smooth-scroll anchor links with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Highlight current section in nav
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    let current = 'home';

    sections.forEach(sec => {
        const secTop = sec.offsetTop;
        if (window.scrollY >= secTop - 80) current = sec.getAttribute('id');
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href').slice(1) === current;
        link.classList.toggle('active', isActive);
    });
});

// simple slider for experiences
(function () {
    const slidesContainer = document.querySelector('.experiences .slides');
    if (!slidesContainer) return;

    const slides = slidesContainer.children;
    const nextButton = document.querySelector('.slider-nav .next');
    const prevButton = document.querySelector('.slider-nav .prev');
    let idx = 0;

    function update() {
        slidesContainer.style.transform = `translateX(-${idx * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        idx = (idx + 1) % slides.length;
        update();
    });

    prevButton.addEventListener('click', () => {
        idx = (idx - 1 + slides.length) % slides.length;
        update();
    });
})();