document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // ✅ SINGLE scroll handler (IMPORTANT)
    window.addEventListener('scroll', () => {

        let scrollY = window.scrollY;

        // ===== ACTIVE NAV LINK =====
        sections.forEach(sec => {
            const offset = sec.offsetTop - 160;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollY >= offset && scrollY < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href="#${id}"]`)
                        ?.classList.add('active');
                });
            }
        });

        // ===== STICKY HEADER =====
        header.classList.toggle('sticky', scrollY > 100);
    });

    // ===== MOBILE MENU TOGGLE =====
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // ===== CLOSE MENU ON LINK CLICK =====
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // ===== RESPONSIVE HANDLER =====
    function handleResponsive() {
        if (window.innerWidth <= 1200) {
            logo.style.marginRight = '2rem';
            menuIcon.style.display = 'block';
            navbar.style.display = 'none';
            header.style.paddingLeft = '2rem';
            header.style.paddingRight = '2rem';
        } else {
            logo.style.marginRight = '79rem';
            menuIcon.style.display = 'none';
            navbar.style.display = 'flex';
            header.style.paddingLeft = '10rem';
            header.style.paddingRight = '4rem';
        }

        const homeContent = document.querySelector('.home-content p');
        if (homeContent) {
            homeContent.style.width = window.innerWidth <= 1200 ? '80%' : '1000px';
        }
    }

    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});
