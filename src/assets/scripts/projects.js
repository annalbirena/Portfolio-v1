import BookingProject from "../images/booking.png";
import DevsUnited from "../images/devs-united.png";
import Gifos from "../images/gifos.png";


const data = [
    {
        id: 1,
        title: "Tweet app",
        description: "Red social de tweets. Puedes tener tu pagina de perfil, crear, borrar y marcar como favoritos los tweets.",
        technologies: [
            "React",
            "Firebase",
            "Sass",
            "Atomic Design"
        ],
        imagen: `${DevsUnited}`,
        giturl: "https://github.com/annalbirena/tweet-app",
        url: "https://db-tweet-app.web.app/"
    },
    {
        id: 2,
        title: "Gifos",
        description: "Aplicación Web responsive. Permite buscar gifs, autocompleta sugerencias y tiene DarkMode.",
        technologies: [
            "React",
            "Giphy API",
            "SASS"
        ],
        imagen: `${Gifos}`,
        giturl: "https://github.com/annalbirena/FinderGIFs",
        url: "https://annalbirena.github.io/FinderGIFs/"
    },
    {
        id: 3,
        title: "Booking",
        description: "Aplicación Web diseñado en FIGMA, permite la búsqueda de hoteles por filtros de fecha, país, costo y tamaño.",
        technologies: [
            "React",
            "SASS"
        ],
        imagen: `${BookingProject}`,
        giturl: "https://github.com/annalbirena/Booking",
        url: "https://annalbirena.github.io/Booking/"
    }
]

export default data;