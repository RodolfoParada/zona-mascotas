
import { temasGatos } from '../data.js';

export const DetailView = (params) => {
    // Buscamos el tema en nuestra "Lista Maestra"
    const tema = temasGatos.find(t => t.id === params.id);

    if (!tema) return '<h1>Tema no encontrado</h1>';

    return `
        <article class="cat-article">
            <h1>${tema.titulo}</h1>
            <p>${tema.contenido}</p>
            
            <div id="ad-container" class="ad-placeholder">
                <small>Publicidad</small>
                </div>
            
            <button onclick="window.history.back()">Volver</button>
        </article>
    `;
};