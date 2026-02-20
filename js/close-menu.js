const enlacesNav = document.querySelectorAll('.enlace-nav');

enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuCompleto.classList.remove('menu-abierto');
        botonAbrir.classList.remove('menu-activo');
        document.body.style.overflow = '';
    });
});
