//Animacion para el nav
window.addEventListener("scroll", () => {
    const nav = document.querySelector("[data-nav]");
    const home = document.querySelector("#home");
    const total = home.offsetTop + home.offsetHeight;

    if (window.scrollY >= total - 3) {
        nav.classList.add('fixed')
        this.setTimeout(() => {
            nav.classList.add('show');
            if (window.innerWidth <= 640) {
                menu.style.boxShadow="0 2px 10px var(--color-primario)";
            } 
        }, 50);
    } else {
        nav.classList.remove('fixed', 'show');
        this.setTimeout(() => {
            if (window.innerWidth > 640) {
                menu.style.boxShadow="";
            } 
        }, 50);
    }
});

//proyectos
const proyectos = [
    {
        imgs: ["assets/img/alura-geek.jpg", "assets/img/aluraG1.png", "assets/img/aluraG2.png", "assets/img/aluraG3.png"],
        titulo: "Alura-Geek",
        subTitulo: "Pagina de venta de productos Geek",
        descripcion: "Alura-Geek es una pagina de venta y compra de productos de colección, este proyecto fue parte del Challenge nro2 de la formacion de Alura Latam.",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Alura-Geek", "https://brunorc1823.github.io/Alura-Geek/"]
    },
    {
        imgs: ["assets/img/encriptador-texto.jpg", "assets/img/encriptadorT1.png", "assets/img/encriptadorT2.png", "assets/img/encriptadorT3.png"],
        titulo: "Encriptador de texto",
        subTitulo: "Proyecto que encripta y desencripta textos",
        descripcion: "El encriptador de texto fue el primer challenge de la formacion de principiante de programacion de Alura Latam",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Encriptador-texto", "https://brunorc1823.github.io/Encriptador-texto/"]
    },
    {
        imgs: ["assets/img/lista_tareas.jpg", "assets/img/creadoLista1.png", "assets/img/creadoLista2.png", "assets/img/creadoLista3.png", "assets/img/aluraG4.png"],
        titulo: "Lista de tareas",
        subTitulo: "Creador de lista de tareas",
        descripcion: "Es un pequeño proyecto que realice en mis primeras etapas de formacion como programador",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT"],
        links: ["https://github.com/BrunoRC1823/Creador-Lista-Tareas", "https://brunorc1823.github.io/Creador-Lista-Tareas/"]
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
//
const enviarDatosModal = (datos) => {
    const { imgs, titulo, subTitulo, descripcion, links } = datos
    const items = document.querySelectorAll("[data-slider-item]")
    items.forEach((item, index) => {
        const contenido = `
        <img class="img_slide" src="${imgs[index + 1]}" alt="slider imagen">
        `
        item.innerHTML += contenido;
    });
    const modalTitulo = document.querySelector("[data-modal='titulo']")
    modalTitulo.textContent = titulo;
    const modalSubTitulo = document.querySelector("[data-modal='subTitulo']")
    modalSubTitulo.textContent = subTitulo;
    const modalDescr = document.querySelector("[data-modal='descripcion']")
    modalDescr.textContent = descripcion;
    const modalLinks = document.querySelectorAll("[data-modal='link']")
    modalLinks.forEach((link, index) => {
        link.href = links[index]
    });
}
const quitarDatos = () => {
    const items = document.querySelectorAll("[data-slider-item]")
    console.log(items)
    items.forEach((item) => {
        item.innerHTML = "";
    });
    console.log(items)
    const modalTitulo = document.querySelector("[data-modal='titulo']")
    modalTitulo.textContent = "";
    const modalSubTitulo = document.querySelector("[data-modal='subTitulo']")
    modalSubTitulo.textContent = "";
    const modalDescr = document.querySelector("[data-modal='descripcion']")
    modalDescr.textContent = "descripcion";
    const modalLinks = document.querySelectorAll("[data-modal='link']")
    modalLinks.forEach((link) => {
        link.href = ""
    });
}
//Animacion para el contenido de las cards del la seccion proyectos
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

//Scrolleo suave
$(function () {
    var ir_a = $("[data-animado='scroll']");
    ir_a.on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        if ($this.hasClass("disabled")) {
            return false;
        }
        $this.addClass("disabled");
        $("body, html").animate({
            scrollTop: $($this.attr("href")).offset().top,
        }, 500, function () {
            $this.removeClass("disabled");
        });
        setTimeout(function () {
            $this.on("click", scrollHandler);
        }, 1000);
        $this.off("click", scrollHandler);
    });

    function scrollHandler(event) {
        event.preventDefault();
        $(this).trigger("click");
    }
});
//Activar menu burger
const burgerButton = document.querySelector("[data-burger-button");
const menu =  document.querySelector("[data-menu]");
burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle('activo');
    menu.style.display = 'flex';
    this.setTimeout(() => {
        menu.classList.toggle('activo_nav_burger');
    }, 100);
    
});
//

//Activar nav link
const menuLink = document.querySelectorAll(".nav [data-animado='scroll']")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav a[href ="#${id}"]`);
        if (entry.isIntersecting) {
            const menuActivo = document.querySelector(".nav a.activo");
            menuActivo.classList.remove("activo");
            menuLink.classList.add("activo");
        }
    });
}, { rootMargin: "-30% 0px -70% 0px" });
menuLink.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});
//Slider
var splide = new Splide('.splide');
var bar = splide.root.querySelector('.my-slider-progress-bar');
// Updates the bar width whenever the carousel moves:
splide.on('mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
});
splide.mount();
const restablecerSlider = () => {
    splide.go(0); // Restablecer el carrusel a la primera posición
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min(1 / end, 1);
    bar.style.width = String(100 * rate) + '%';
    splide.index = 0; // Establecer el index del carrusel en 0
}
//Activar modal
const botonesModal = document.querySelectorAll("[data-abrir-modal]");
const cerrarModalBtn = document.querySelector("[data-cerrar-modal]");
const modalContainer = document.querySelector("[data-animado='modal-container']");
const modal = document.querySelector("[data-animado='modal']");

botonesModal.forEach((botonModal, index) => {
    botonModal.addEventListener("click", (event) => {
        const proyecto = proyectos[index];
        enviarDatosModal(proyecto)
        event.preventDefault();
        modalContainer.classList.add("modal_container--show");
        modal.classList.add("aparecer--modal");
    });
});

const cerrarModal = () => {
    modal.classList.remove("aparecer--modal");
    setTimeout(() => {
        modalContainer.classList.remove("modal_container--show");
        restablecerSlider();
        quitarDatos();
    }, 500);
};
cerrarModalBtn.addEventListener("click", cerrarModal);
$(modalContainer).on('click', function (event) {
    if (!$(event.target).closest("[data-animado='modal']").length) {
        cerrarModal();
        quitarDatos();
    }
});

//Animaciones
const posicionObj = (obj, ver) => {
    const positionObj = obj.getBoundingClientRect().top;
    const pantallaSize = window.innerHeight / ver;
    return [positionObj, pantallaSize];
}
let animacionLetrasEjecutada = false;
const escribirLogo = () => {
    if (!animacionLetrasEjecutada) {
        const logo = document.querySelector("[data-animado='logo_nav']");
        const logoText = logo.textContent.trim();
        const letrasLogo = logoText.split("");
        logo.innerHTML = ''
        let seg = 0
        letrasLogo.forEach((letra, index) => {
            logo.style.opacity = 1;
            seg += 0.03;
            let contenido;
            if ((index >= 2 && index <= 7) || (index >= 14 && index <= 18)) {
                contenido = `<span class="letrasLogo resaltador data-animado='letra-logo'">${letra}</span>`
            } else {
                contenido = `<span class="letrasLogo" data-animado='letra-logo'>${letra}</span>`
            }
            logo.innerHTML += contenido
            const delayLetras = document.querySelector(`.letrasLogo:nth-of-type(${index + 1})`);
            delayLetras.style.animationDelay = `${seg}s`;
        });
        animacionLetrasEjecutada = true;
    }
}

const mostrarTitulos = () => {
    const animacionesTitulos = document.querySelectorAll("[data-animado='titulo']");
    animacionesTitulos.forEach((titulo, index) => {
        const [pos, size] = posicionObj(titulo, 1.5)
        if (pos < size) {
            if (index % 2 == 0) {
                titulo.classList.add("izquierda-medio");
            } else {
                titulo.classList.add("derecha-medio");
            }
        }
    })
}
const mostrarHexagonos = () => {
    const animacionesHexagonos = document.querySelectorAll("[data-animado='hexagono']");
    const animacionesHexagonosText = document.querySelectorAll("[data-animado='hexagono_text']");
    let seg = 0
    animacionesHexagonos.forEach((hexagono, index) => {
        seg += 0.3;
        const [pos, size] = posicionObj(hexagono, 1.5);
        if (pos < size) {
            const delayHexagono = document.querySelector(`.soft-skills:nth-of-type(${index + 1}) .hexagono`);
            delayHexagono.style.animation = `aparecer-skill-icon 0.5s ${seg}s forwards `;
        };
    });
    seg = 0
    animacionesHexagonosText.forEach((texto, index) => {
        seg += 0.3;
        const [pos, size] = posicionObj(texto, 1.5);
        if (pos < size) {
            const delayHexagono = document.querySelector(`.soft-skills:nth-of-type(${index + 1}) .soft-skill_text_container`);
            delayHexagono.style.animation = `aparecer 0.5s ${seg}s forwards `;
        };
    });
}
const llenarBarras = () => {
    const animacionBar = document.querySelectorAll("[data-animado='porcentaje_skills']");
    let seg = 0;
    animacionBar.forEach((bar, index) => {
        seg += 0.1
        const barPorcentaje = document.querySelector(`.bar:nth-of-type(${index + 1}) .bar_porcentaje`);
        const porcentajeBarra = bar.textContent.trim();
        barPorcentaje.style.animation = `llenarBarras 0.5s forwards`;
        barPorcentaje.style.setProperty('--porcentaje-barra', `${porcentajeBarra}`);
        barPorcentaje.style.animationDelay = `${seg}s`;
    });
};
const mostrarQuienSoyContainer = () => {
    let [pos, size] = '';
    const animacionQuienSoy = document.querySelector("[data-animado='quien-soy']");
    const animacionMisSkills = document.querySelector("[data-animado='mis-skills']");
    [pos, size] = posicionObj(animacionQuienSoy, 1.3);
    if (pos < size) {
        animacionQuienSoy.classList.add("izquierda-medio");
        animacionQuienSoy.style.animationDelay = `0.5s`;
        setTimeout(() => {
            llenarBarras();
        }, 800);
    };
    [pos, size] = posicionObj(animacionMisSkills, 1.5);
    if (pos < size) {
        animacionMisSkills.classList.add("derecha-medio");
        animacionMisSkills.style.animationDelay = `0.5s`;
    };
};
const aparecerProyectos = () => {
    let seg = 0;
    cards.forEach((card) => {
        seg += 0.1;
        [pos, size] = posicionObj(card, 1.5);
        if (pos < size) {
            card.style.animation = `blur-in-expand  0.5s ${seg}s linear both`;
        }
    });
};
const aparecerFormContacto = () => {
    const form = document.querySelector("[data-animado='contacto_form']");
    [pos, size] = posicionObj(form, 2);
    if (pos < size) {
        form.style.animation = `scale-up-center  0.5s forwards`;;
    }
};
window.addEventListener("scroll", () => {
    const animaciones = document.querySelectorAll("[data-animado]");
    animaciones.forEach((animacion) => {
        const [pos, size] = posicionObj(animacion, 1)
        const tipo = animacion.dataset.animado;
        if (pos < size) {
            switch (tipo) {
                case "logo_nav":
                    escribirLogo();
                case "titulo":
                    mostrarTitulos();
                case "hexagono":
                    mostrarHexagonos();
                case "quien-soy_container":
                    mostrarQuienSoyContainer();
                case "card":
                    aparecerProyectos();
                case "contacto_form":
                    aparecerFormContacto();
            }
        }
    });
});

