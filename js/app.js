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
                contenido = `<span class="letrasLogo resaltador">${letra}</span>`
            } else {
                contenido = `<span class="letrasLogo">${letra}</span>`
            }
            logo.innerHTML += contenido
            const delayLetras = document.querySelector(`.letrasLogo:nth-child(${index + 1})`);
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

const mostrarQuienSoyContainer = () => {
    let [pos, size] = '';
    const animacionQuienSoy = document.querySelector("[data-animado='quien-soy']");
    const animacionMisSkills = document.querySelector("[data-animado='mis-skills']");
    [pos, size] = posicionObj(animacionQuienSoy, 1.3);
    if (pos < size) {
        animacionQuienSoy.classList.add("izquierda-medio");
    };
    [pos, size] = posicionObj(animacionMisSkills, 1.5);
    if (pos < size) {
        animacionMisSkills.classList.add("derecha-medio");
    };
};
const llenarBarras = () => {
    const animacionBar = document.querySelectorAll("[data-animado='porcentaje_skills']");
    let seg = 0
    animacionBar.forEach((bar, index) => {
        const [pos, size] = posicionObj(bar, 1);
        console.log(bar);
        if (pos < size) {
            seg += 0.2
            const barPorcentaje  = document.querySelector(`.bar:nth-of-type(${index + 1}) .bar_porcentaje`);
            const porcentajeBarra = bar.textContent.trim();
            barPorcentaje.style.animation = `llenarBarras 0.5s forwards`;
            barPorcentaje.style.setProperty('--porcentaje-barra', `${porcentajeBarra}`);
            barPorcentaje.style.animationDelay = `${seg}s`;
        };
    });
};

window.addEventListener("scroll", function () {
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
                    llenarBarras();
            }
        }
    });

});