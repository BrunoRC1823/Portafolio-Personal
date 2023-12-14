import { posicionObj } from './app.js'

export const proyectos = [
    {
        imgs: ["assets/img/investgo/investgo.png", "assets/img/investgo/investgoC1.png", "assets/img/investgo/investgoC2.png", "assets/img/investgo/investgoC3.png", "assets/img/investgo/investgoC4.png", "assets/img/investgo/investgoC5.png"],
        titulo: "InvestGo",
        subTitulo: "Pagina de subasta de facturas",
        descripcion: "Es un proyecto realizado en mi ultimo ciclo de computación e informática. InvestGo es una pagina subasta de factura, donde las empresas publican facturas en busca de inversionistas, que recibirán un retorno de su inversion al finalizar la subasta",
        tecnologias: ["ANGULAR", "PRIMENG", "JAVA", "SPRINGBOOT"],
        links: ["https://github.com/BrunoRC1823/Creador-Lista-Tareas", "https://brunorc1823.github.io/Creador-Lista-Tareas/"]
    },
    {
        imgs: ["assets/img/alura-flix/alura-flix.png", "assets/img/alura-flix/alura-flixC1.png", "assets/img/alura-flix/alura-flixC2.png", "assets/img/alura-flix/alura-flixC3.png"],
        titulo: "Aluraflix",
        subTitulo: "Pagina de videos de alura latam.",
        descripcion: "Pagina de videos que trata de simular Netflix pero con videos de la formacion de alura latam. También fue el 4to challenge de la formación.",
        tecnologias: ["REACT", "MATERIALUI", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/aluraflix", "https://aluraflix-jet.vercel.app/"]
    },
    {
        imgs: ["assets/img/org/org.png", "assets/img/org/orgC1.png", "assets/img/org/orgC2.png", "assets/img/org/orgC3.png"],
        titulo: "ORG",
        subTitulo: "Pagina de organización de equipos",
        descripcion: "Pagina para organizar los equipos de una organización, de los primeros proyectos donde implemente react.",
        tecnologias: ["REACT", "MATERIALUI", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Org", "https://org-coral.vercel.app/"]
    },
    {
        imgs: ["assets/img/alura-geek/alura-geek.jpg", "assets/img/alura-geek/aluraG1.png", "assets/img/alura-geek/aluraG2.png", "assets/img/alura-geek/aluraG3.png"],
        titulo: "Alura-Geek",
        subTitulo: "Pagina de venta de productos Geek.",
        descripcion: "Alura-Geek es una pagina de venta y compra de productos de colección, este proyecto fue parte del Challenge nro2 de la formacion de Alura Latam.",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Alura-Geek", "https://brunorc1823.github.io/Alura-Geek/"]
    },
    {
        imgs: ["assets/img/encriptador/encriptador-texto.jpg", "assets/img/encriptador/encriptadorT1.png", "assets/img/encriptador/encriptadorT2.png", "assets/img/encriptador/encriptadorT3.png"],
        titulo: "Encriptador de texto",
        subTitulo: "Proyecto que encripta y desencripta textos.",
        descripcion: "El encriptador de texto fue el primer challenge de la formacion de principiante de programacion de Alura Latam.",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Encriptador-texto", "https://brunorc1823.github.io/Encriptador-texto/"]
    },
    {
        imgs: ["assets/img/todo-list/lista_tareas.jpg", "assets/img/todo-list/creadoLista1.png", "assets/img/todo-list/creadoLista2.png", "assets/img/todo-list/creadoLista3.png"],
        titulo: "Lista de tareas",
        subTitulo: "Creador de lista de tareas.",
        descripcion: "Es un pequeño proyecto que realice en mis primeras etapas de formacion como programador.",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/investgo-front-end", "https://investgo-front-end.vercel.app/auth/login"]
    },

];

const generarCards = (proyecto) => {
    const { imgs, titulo, tecnologias } = proyecto
    const galeria = document.querySelector("[data-animado='galeria']");
    const tecnologiasString = tecnologias.join(" / ");
    let contenido = `            
    <div class="card flex" data-animado="card">
    <img class="card_img" alt="Imagen de ${titulo}" src="${imgs[0]}">
    <div class="card_contenido_container flex">
        <div class="card_text_container">
            <h2 class="card_titulo">${titulo}</h2>
            <br>
            <p><span class="resaltador">${tecnologiasString}</span></p>
        </div>
        <div class="card_button_container">
            <button class="card_button button" data-abrir-modal>Ver más</button>
        </div>
    </div>
</div>`
    galeria.innerHTML += contenido;
}

proyectos.forEach((proyecto) => {
    generarCards(proyecto);
})

const ajustarContenidoCard = (card) => {
    const primerHijo = card.querySelector('.card_text_container');
    const segundoHijo = card.querySelector('.card_button_container');
    primerHijo.classList.toggle("aparecer-card_text_container");
    segundoHijo.classList.toggle("aparecer-card_button_container");
};
const cards = document.querySelectorAll("[data-animado='card']");
cards.forEach((card) => {
    const cardContent = card.querySelector(".card_contenido_container");
    let visibility = "hidden";
    card.addEventListener("mouseenter", () => {
        if (visibility == "hidden") {
            cardContent.style.visibility = "visible";
            ajustarContenidoCard(card);
            visibility = "visible";
        }
    });
    card.addEventListener("mouseleave", () => {
        if (visibility == "visible") {
            cardContent.style.visibility = "hidden";
            visibility = "hidden";
            ajustarContenidoCard(card);
        }
    });
});

export const aparecerProyectos = () => {
    let seg = 0;
    cards.forEach((card) => {
        seg += 0.1;
        const [pos, size] = posicionObj(card, 1.5);
        if (pos < size) {
            card.style.animation = `blur-in-expand  0.5s ${seg}s linear both`;
        }
    });
};
