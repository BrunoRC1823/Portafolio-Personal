//Animacion para el nav
window.addEventListener("scroll", function () {
    const nav = document.querySelector("[data-nav]");
    const home = document.querySelector("#home");
    const total = home.offsetTop + home.offsetHeight;

    if (window.scrollY >= total - 3) {
        nav.classList.add('fixed')
        this.setTimeout(() => {
            nav.classList.add('show');
        }, 50);
    } else {
        nav.classList.remove('fixed', 'show');
    }
});
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
//scrolleo suave
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
//activar nav link
const menuLink = document.querySelectorAll(".nav [data-animado='scroll']")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        console.log(id)
        const menuLink = document.querySelector(`.nav a[href ="#${id}"]`);
        if (entry.isIntersecting) {
            const menuActivo = document.querySelector(".nav a.activo");
            console.log(menuActivo);
            menuActivo.classList.remove("activo");
            menuLink.classList.add("activo");
            console.log(menuLink);
        }
    });
}, { rootMargin: "-30% 0px -70% 0px" });
menuLink.forEach(menuLink =>{
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
});
//Animaciones
const posicionObj = (obj, ver) => {
    const positionObj = obj.getBoundingClientRect().top;
    const pantallaSize = window.innerHeight / ver;
    return [positionObj, pantallaSize];
}
let animacionEjecutada = false;
const escribirLogo = () => {
    if (!animacionEjecutada) {
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
        animacionEjecutada = true;
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

