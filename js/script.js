// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Navbar background change on scroll
// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('bg-dark');
//         navbar.classList.add('shadow-sm');
//     } else {
//         navbar.classList.remove('bg-dark');
//         navbar.classList.remove('shadow-sm');
//     }
// });


// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    form.reset();
});