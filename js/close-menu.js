const enlacesNav = document.querySelectorAll('.item-menu');
const checkboxMenu = document.querySelector('#control-menu');

enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (checkboxMenu) {
            checkboxMenu.checked = false;
        }
        document.body.style.overflow = 'auto';
    });
});
