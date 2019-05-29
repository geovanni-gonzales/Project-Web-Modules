(function () {
    'use strict';
    var modal, ul_coins, u;
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
    //----------INICIO DEL MODAL-----------
    function show(e) {
        e.stopPropagation();
        var t_span, h2, img, text;
        t_span = e.target.className;
        h2 = document.querySelector(".coin > h2");
        img = document.querySelector(".qr > img");
        text = document.querySelector("input");

        function asignar(propina, icon, value) {
            modal.setAttribute("class", "modal show");
            h2.innerHTML = propina;
            img.setAttribute("src", icon);
            text.setAttribute("value", value);
        }

        if (t_span === "icon-bitcoin") {
            asignar("APORTE BITCOIN", "images/binance_bitcoin.png", "1PZh2W88B1wSAYyB5ZwyY5zexKnjM2DC8S");
        } else if (t_span === "icon-ethereum") {
            asignar("APORTE ETHERIUM", "images/uphold_ethereum.png", "0x09bDb8e103162220CA91EE01D1cF87098E2FCac1");
        } else if (t_span === "icon-monero") {
            asignar("APORTE MONERO", "images/poloniex_monero.png", "4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbS2YWqhhgA9S13zRqHH");
        }
    }
    function closeModal(e) {
        if (e.target.className === "modal show") {
            modal.setAttribute("class", "modal");
        }
    }
    //-------INICIO DEL MODAL----------
    //FIN del Modulo de Navegacion Movil
    
    function execute() {
        //INICIO del modulo NAV MOVIL
        document.querySelector(".nav_movil > .ul_movil").addEventListener("click", toogle_movil);
        window.addEventListener("scroll", nav_scroll);
        //INICIO DEL MODAL
        modal = document.querySelector("div.modal");
        
        ul_coins = document.querySelectorAll("ul.coins");
        for (u = 0; u < ul_coins.length; u += 1) {
            ul_coins[u].addEventListener("click", show);
        }
        document.querySelector("div.box_coins").addEventListener("click", closeModal);
        //FIN DEL MODAL
        //FIN del modulo NAV MOVIL
    }
    window.addEventListener("load", execute);
}());