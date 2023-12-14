
//Activar menu burger
const burgerButton = document.querySelector("[data-burger-button");
const menu = document.querySelector("[data-menu]");
burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle('activo');
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.classList.toggle('activo_nav_burger');
    }, 100);

});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("[data-nav]");
    const home = document.querySelector("#home");
    const total = home.offsetTop + home.offsetHeight;

    if (window.scrollY >= total - 3) {
        nav.classList.add('fixed')
        setTimeout(() => {
            nav.classList.add('show');
            if (window.innerWidth <= 640) {
                menu.style.boxShadow = "0 2px 10px var(--color-primario)";
            }
        }, 50);
    } else {
        nav.classList.remove('fixed', 'show');
        menu.style.boxShadow = "";
        setTimeout(() => {
            if (window.innerWidth > 640) {
                menu.style.boxShadow = "";
            }
        }, 50);
    }
});
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

let animacionLetrasEjecutada = false;
export const escribirLogo = () => {
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