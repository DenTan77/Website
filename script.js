// Smooth-scroll anchor links with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80; // fixed header height + buffer
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Highlight current section in nav
window.addEventListener('scroll',()=>{
    const sections=document.querySelectorAll('section');
    const navLinks=document.querySelectorAll('.navbar a');
    let current='home';
    sections.forEach(sec=>{
        const secTop=sec.offsetTop;
        if(scrollY>=secTop-60) current=sec.getAttribute('id');
    });
    navLinks.forEach(link=>{
        link.classList.remove('active');
        if(link.getAttribute('href').slice(1)===current) link.classList.add('active');
    });
});

// simple slider for experiences
(function(){
    const slidesContainer = document.querySelector('.experiences .slides');
    if (!slidesContainer) return; // no slider on the page
    const slides = slidesContainer.children;
    let idx = 0;

    function update() {
        slidesContainer.style.transform = `translateX(-${idx * 100}%)`;
    }

    document.querySelector('.slider-nav .next').addEventListener('click',()=>{
        idx = (idx + 1) % slides.length;
        update();
    });
    document.querySelector('.slider-nav .prev').addEventListener('click',()=>{
        idx = (idx - 1 + slides.length) % slides.length;
        update();
    });
})();

// snow effect
(function(){
    const maxFlakes = 120;
    const body = document.body;

    function createFlake() {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = '❄';
        // set random horizontal position and animation duration
        flake.style.left = Math.random() * 100 + 'vw';
        const size = (Math.random() * 1.2 + 0.8).toFixed(2); // larger flakes
        flake.style.fontSize = size + 'rem';
        flake.style.opacity = Math.random() * 0.8 + 0.3;
        flake.style.animationDuration = (Math.random() * 6 + 6) + 's'; // slower fall
        flake.style.animationDelay = '-' + (Math.random() * 6) + 's';
        body.appendChild(flake);
        // remove after animation
        setTimeout(()=>{ flake.remove(); }, 12000);
    }

    // spawn flakes periodically
    setInterval(()=>{
        if(document.getElementsByClassName('snowflake').length < maxFlakes) {
            createFlake();
        }
    }, 200);
})();