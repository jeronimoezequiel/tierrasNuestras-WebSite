/*=============== MOSTRAR MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');


/* Mostrar menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Ocultar menu */
if (navClose) {
    navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
});

/*===== CERRAR MENU =======*/
document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el clic en los elementos <li> del menú
    document.querySelectorAll('.navbar > ul > li').forEach((li) => {
        li.addEventListener('click', function (event) {
            // Detecta el submenú dentro del <li> clicado
            let submenu = this.querySelector('ul');

            if (submenu) {
                // Alterna la visibilidad del submenú
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
                // Prevenir la propagación del clic para evitar que se cierren otros menús
                event.stopPropagation();
            }
        });
    });

    // Función para manejar el clic fuera del menú
    document.addEventListener('click', function (event) {
        // Cierra todos los submenús si se hace clic fuera del menú
        document.querySelectorAll('.navbar ul ul').forEach((submenu) => {
            submenu.style.display = 'none';
        });
    });

    // Manejar el submenú dentro de "Auxiliares"
    document.querySelectorAll('.navbar ul ul > li').forEach((li) => {
        li.addEventListener('click', function (event) {
            // Prevenir la propagación del clic para que el menú no se cierre
            event.stopPropagation();

            // Alternar el submenú dentro del elemento "Auxiliares"
            let nestedSubmenu = this.querySelector('ul');
            if (nestedSubmenu) {
                if (nestedSubmenu.style.display === 'block') {
                    nestedSubmenu.style.display = 'none';
                } else {
                    nestedSubmenu.style.display = 'block';
                }
            }
        });
    });
});


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.app__nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //Cuando se hace click sobre algun nav__link, se oculta el menu hamburguesa
    navMenu.classList.remove('show-menu')
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('app-header')
    //agrega la clase cuando al hacer scroll en el eje Y supera los 50vh
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
};
window.addEventListener('scroll', bgHeader);
bgHeader();

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true, 
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollElement = document.getElementById('scroll-up');
    const fabContainer = document.querySelector('.fab-container');

    // Mostrar el FAB y el botón de scroll-up si se ha hecho scroll hacia abajo
    if (window.scrollY >= 350) {
        scrollElement.classList.add('show-scroll');
        fabContainer.classList.add('show-scroll');
    } else {
        scrollElement.classList.remove('show-scroll');
        fabContainer.classList.remove('show-scroll');
    }
};

// Función para abrir/cerrar el menú de opciones del FAB
const toggleFabOptions = () => {
    const fabContainer = document.querySelector('.fab-container');

    if (fabContainer.classList.contains('show-options')) {
        fabContainer.classList.remove('show-options');
    } else {
        fabContainer.classList.add('show-options');
    }
};

// Agregar eventos de scroll y clic para controlar la visibilidad del FAB y el scroll-up
window.addEventListener('scroll', scrollUp);
document.querySelector('.fab').addEventListener('click', toggleFabOptions);

scrollUp(); // Ejecutar al cargar la página para inicializar el estado


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.app__nav__menu a[href*=' + sectionId +']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        };
    });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(`.home__content, .services__data, .services__swiper, .footer__container`)
sr.reveal(`.home__images`, {origin: 'bottom', delay: 1000})
sr.reveal(`.about__images, .contact__img`, {origin: 'left'})
sr.reveal(`.about__data, .contact__data`, {origin: 'right'})
sr.reveal(`.projects__card`, {interval: 100});

/*=============== DROPDOWN-MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos dropdown en la navegación
    const dropdownLinks = document.querySelectorAll('.dropdown');
  
    dropdownLinks.forEach((dropdown) => {
        const link = dropdown.querySelector('.app__nav__link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  
        // Añade un listener para abrir el menú al pasar el ratón por encima
        link.addEventListener('mouseenter', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        });
  
        // Añade un listener para cerrar el menú cuando se sale con el ratón
        dropdown.addEventListener('mouseleave', () => {
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    });

    // Manejo del sub-dropdown-menu
    const subDropdowns = document.querySelectorAll('.sub-dropdown-menu');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    subDropdowns.forEach((subDropdown) => {
        const parentDropdown = subDropdown.closest('.dropdown');

        parentDropdown.addEventListener('mouseenter', () => {
            subDropdown.classList.add('sub-dropdown-menu-show');
        });

        parentDropdown.addEventListener('mouseleave', () => {
            subDropdown.classList.remove('sub-dropdown-menu-show');
        });
    });

    // Cierra todos los menús si se hace clic fuera de ellos
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown') && !event.target.closest('.sub-dropdown-menu')) {
            dropdownMenus.forEach((menu) => {
                menu.style.display = 'none';
            });
            subDropdowns.forEach((submenu) => {
                submenu.classList.remove('sub-dropdown-menu-show');
            });
        }
    });
});





