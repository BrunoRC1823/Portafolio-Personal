import { escribirLogo } from "./nav.js"
import { mostrarHexagonos, mostrarQuienSoyContainer } from "./sobre-mi.js"
import { aparecerProyectos } from "./projects.js"
import { aparecerFormaciones } from "./formaciones.js"
import { aparecerFormContacto } from "./contacto.js"

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

export const posicionObj = (obj, ver) => {
    const positionObj = obj.getBoundingClientRect().top;
    const pantallaSize = window.innerHeight / ver;
    return [positionObj, pantallaSize];
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
var year = new Date().getFullYear();
document.getElementById("anio").textContent += year;

window.addEventListener("scroll", () => {
    const animaciones = document.querySelectorAll("[data-animado]");
    animaciones.forEach((animacion) => {
        const [pos, size] = posicionObj(animacion, 1);
        const tipo = animacion.dataset.animado;
        if (pos < size) {
            switch (tipo) {
                case "logo_nav":
                    escribirLogo();
                    break;
                case "titulo":
                    mostrarTitulos();
                    break;
                case "hexagono":
                    mostrarHexagonos();
                    break;
                case "quien-soy_container":
                    mostrarQuienSoyContainer();
                    break;
                case "card":
                    aparecerProyectos();
                    break;
                case "formaciones":
                    aparecerFormaciones();
                    break;
                case "contacto_form":
                    aparecerFormContacto();
                    break;
            }
        }
    });
});

