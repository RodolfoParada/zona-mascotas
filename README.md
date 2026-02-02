#### Estructura básica

```
/proyecto-gatos
│
├── .gitignore
├── /css
│   └── styles.css
├── /js
│   ├── app.js          <-- Punto de entrada e inicialización
│   ├── router.js       <-- Lógica para cambiar de "página"
│   ├── /views          <-- Funciones que retornan el HTML de cada sección
│   │   ├── Home.js
│   │   ├── Detalle.js
│   │   └── Contacto.js
│   └── data.js         <-- Aquí podrías tener tu JSON de temas
├── index.html          <-- El único HTML que existe
└── ads.txt             <-- Tu archivo para validación de publicidad
```

#### avisa si dejas variables sin usar o si te falta un punto y como
```
npm install --save-dev eslint
```