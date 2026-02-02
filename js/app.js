import { router } from './router.js';

// 1. Escuchar clics en enlaces con el atributo [data-link]
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router(); // Ejecutar el router al cargar la página
});

// 2. Función para navegar sin recargar la página
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// 3. Manejar el botón "atrás" del navegador
window.addEventListener("popstate", router);