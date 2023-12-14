import { posicionObj } from './app.js'

export const mostrarHexagonos = () => {
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
        const porcentajeBarra = bar.querySelector('.text-porcentaje').textContent.trim();
        const barPorcentaje = document.querySelector(`.bar:nth-of-type(${index + 1}) .bar_porcentaje`);
        barPorcentaje.style.animation = `llenarBarras 0.5s forwards`;
        barPorcentaje.style.setProperty('--porcentaje-barra', `${porcentajeBarra}`);
        barPorcentaje.style.animationDelay = `${seg}s`;
    });
};
export const mostrarQuienSoyContainer = () => {
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