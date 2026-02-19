document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.item-menu, .aside-menu a');
    const checkbox = document.getElementById('control-menu');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (evento) => {
            setTimeout(() => {
                checkbox.checked = false;
            }, 300); 
        });
    });
});
