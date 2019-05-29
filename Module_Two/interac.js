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
    function toogle_movil(e) {
        var ul, div_im, ul_at, div_at, section;
        ul = document.querySelector(".nav_movil li > span + ul");
        div_im = document.querySelector(".nav_movil li > div");

        //if(e.target.tagName.toLowerCase() == "span"){
        if (e.target.className === "icon-menu") {
            ul_at = ul.getAttribute("class");
            if (ul_at === null) {
                ul.setAttribute("class", "toggle_menu");
                div_im.removeAttribute("class");
            } else {
                ul.removeAttribute("class");
            }
        } else if (e.target.id === "i_author") {
        //else{
            div_at = div_im.getAttribute("class");
            if (div_at === null) {
                div_im.setAttribute("class", "toggle_image");
                ul.removeAttribute("class");
            } else {
                div_im.removeAttribute("class");
            }
        }
        //-----------Otra opcion con delegacion-------------
        document.querySelector(".container").addEventListener("click", function (e) {
            var tag = e.target.tagName;
            if (tag === "SECTION" || tag === "ARTICLE" || tag === "P" || tag === "H2" || tag === "CANVAS") {
                div_im.removeAttribute("class");
                ul.removeAttribute("class");
            }
        });
        //-----------Para cerrar el div y el menu-------------
    }
    function execute() {
        //INICIO del modulo NAV MOVIL
        document.querySelector(".nav_movil > .ul_movil").addEventListener("click", toogle_movil);
        window.addEventListener("scroll", nav_scroll);
    }
    window.addEventListener("load", execute);
}());