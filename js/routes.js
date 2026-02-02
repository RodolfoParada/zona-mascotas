const routes = {
    '/': () => '<h1>Bienvenidos a la Enciclopedia Gatuna</h1>',
    '/tema': (params) => `<h1>Viendo el tema: ${params.id}</h1>`,
    '/contacto': () => '<h1>Contacto</h1>'
};

export const navigateTo = (url) => {
    history.pushState(null, null, url);
    handleRoute();
};

const handleRoute = () => {
    const path = window.location.pathname;
    const view = routes[path] || routes['/'];
    document.getElementById('app').innerHTML = view();
};

// Escuchar cuando el usuario usa las flechas atrás/adelante del navegador
window.addEventListener('popstate', handleRoute);