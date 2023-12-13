import { proyectos } from "./projects.js"

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
    items.forEach((item) => {
        item.innerHTML = "";
    });
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
//cerrar desde el boton
cerrarModalBtn.addEventListener("click", (event) => {
    cerrarModal();
    event.preventDefault();
});
//cerrar desde fuera de modal
$(modalContainer).on('click', function (event) {
    if (!$(event.target).closest("[data-animado='modal']").length) {
        cerrarModal();
    }
});
