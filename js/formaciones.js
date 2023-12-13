import { posicionObj } from './app.js'

const cards = document.querySelectorAll("[data-animado='formaciones']");

export const aparecerFormaciones = () => {
    cards.forEach((card) => {
        const [pos, size] = posicionObj(card, 1.5);
        if (pos < size) {
            card.style.animation = `animacionSubirFormaciones  0.5s 0.5s ease-out forwards`;
        }
    });
};