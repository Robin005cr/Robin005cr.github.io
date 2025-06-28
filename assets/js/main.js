/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle','nav-menu');

/*===== THEME TOGGLE =====*/
// Theme toggle: toggles dark mode and icon
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    // Set initial icon based on theme
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('active');
        if (icon) {
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('bx-moon');
                icon.classList.add('bx-sun');
            } else {
                icon.classList.remove('bx-sun');
                icon.classList.add('bx-moon');
            }
        }
    });
}

var example = ['A', 'B', 'C', 'D'];

let seqIndex = 0;
setInterval(function() {
    const sequenceElem = document.getElementById("sequence");
    if (sequenceElem) {
        sequenceElem.innerHTML = "We Do " + example[seqIndex];
    }
    seqIndex = (seqIndex + 1) % example.length;
}, 3000); // Change every 3 seconds

/*===== CONTACT FORM =====*/
// Contact form: prevent default and show alert (replace with backend logic as needed)
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted! Implement your backend logic here.');
    });
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

// Remove mobile menu after clicking a nav link
navLink.forEach(link => link.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('show');
}));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active-link');
            } else {
                navItem.classList.remove('active-link');
            }
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/
// Scroll reveal animations (if ScrollReveal is loaded)
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });
    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
}
