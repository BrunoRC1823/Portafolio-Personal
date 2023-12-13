import { posicionObj } from './app.js'

export const aparecerFormContacto = () => {
    const form = document.querySelector("[data-animado='contacto_form']");
    const [pos, size] = posicionObj(form, 2);
    if (pos < size) {
        form.style.animation = `scale-up-center  0.5s forwards`;;
    }
};