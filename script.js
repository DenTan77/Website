// Smooth-scroll anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
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