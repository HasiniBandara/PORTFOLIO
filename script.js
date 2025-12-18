document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Sticky header and active link
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Active nav link
        sections.forEach(sec => {
            const offset = sec.offsetTop - 160;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollY >= offset && scrollY < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href="#${id}"]`)?.classList.add('active');
            }
        });

        // Sticky header
        header.classList.toggle('sticky', scrollY > 100);
    });

    // Mobile menu toggle
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});
