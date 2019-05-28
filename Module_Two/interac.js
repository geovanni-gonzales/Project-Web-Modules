(function () {
    'use strict';
    //INICIO del Modulo de Navegacion Movil
    function nav_scroll() {
        var scrolly, nv, div_im, ul, modal;
        scrolly = window.pageYOffset;
        nv = document.querySelector("nav.nav_movil");
        div_im = document.querySelector(".nav_movil li > div");
        ul = document.querySelector(".nav_movil li > span + ul");

        if (scrolly > 1) {
            nv.setAttribute("class", "nav_movil visible");
        } else {
            nv.setAttribute("class", "nav_movil");
            div_im.removeAttribute("class");
            ul.removeAttribute("class");
            modal.setAttribute("class", "modal");
        }
    }
    function execute() {
        //INICIO del modulo NAV MOVIL
        window.addEventListener("scroll", nav_scroll);
    }
    window.addEventListener("load", execute);
}());