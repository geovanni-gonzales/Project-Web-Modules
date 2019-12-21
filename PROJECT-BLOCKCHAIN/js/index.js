(function () {
    'use strict';
    var hr, he, posy, v, x, h, t, t2, a, h2, p, modal, i, ul_coins, u, div;
     
    
    /*- Funcion de Redimencion de imagen de fondo de acuerdo al tamaño del header */
    function resize() {
        he = hr.offsetHeight;
        hr.style.backgroundSize = "100%" + " " + he + "px";
    }
    /*------------------------------------------------------------------- */

    /*- Funcion de Animacion de los parrafos h1, h2, P....*/
    /*
    function animar(array, clase) {
        v = window.innerHeight;
        a = array.length;
        for (i = 0; i < a; i += 1) {
            t = array[i].getBoundingClientRect().top;
            h = array[i].getBoundingClientRect().height / 4;
            x = (t + h);
            if (x < v) {
                array[i].className = clase;
            }
            //else{
                //array[i].className = "";
            //}
        }
    }
    */
    //!!!!!la funcion animar se ejecuta tanto en el evento load y scroll
    function animar(nodelist, clase) {
        v = window.innerHeight;
        a = nodelist.length;
        if (a > 1) {
            for (i = 0; i < a; i += 1) {
                t = nodelist[i].getBoundingClientRect().top;
                h = nodelist[i].getBoundingClientRect().height / 4;
                x = (t + h);
                if (x < v) {
                    nodelist[i].className = clase;
                }
            }
        } else if (a <= 1) {
            t2 = nodelist[0].getBoundingClientRect().top + 100;
            if (t2 < v) {
                nodelist[0].className = clase;
            }
            
        }
    }//animar (3 de 5)
    /*---------------------------------------------------------------- */
    function resiz() {
        resize();
    }
    function posit() {
        posy = window.pageYOffset * 0.30;
        hr.style.backgroundPosition = "0" + " " + "-" + posy + "px";
    }
    function top() {
        animar(h2, "h2");
        animar(p, "parf");
        animar(div, "mainbox_author display"); //animar (3 de 4)
    }//animar(5 de 5)
    //INICIO del Modulo de Navegacion Movil
    function nav_scroll() {
        var scrolly, nv, div_im, ul;
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
        //-----------Para cerrar el div y el menu-------------
        // no es posible con un bucle for--------------
        /*
        document.querySelector(".section_one").addEventListener("click", function () {
            div_im.removeAttribute("class");
            ul.removeAttribute("class");
        });
        
        document.querySelector(".section_two").addEventListener("click", function () {
            div_im.removeAttribute("class");
            ul.removeAttribute("class");
        });
        */
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
        hr = document.getElementsByTagName("header")[0];
        h2 = document.getElementsByTagName("h2");
        p = document.getElementsByTagName("p");
        div = document.getElementsByClassName("mainbox_author");//animar(2 de 5);
        window.addEventListener("resize", resiz);
        window.addEventListener("scroll", posit);
        window.addEventListener("scroll", top);//animar(4 de 5)

        resize();
        animar(h2, "h2");
        animar(p, "parf");
        animar(div, "mainbox_author display"); //animar(1 de 5)
        
        //INICIO del modulo NAV MOVIL
        document.querySelector(".nav_movil > .ul_movil").addEventListener("click", toogle_movil);
        window.addEventListener("scroll", nav_scroll);
        //INICIO DEL MODAL
        modal = document.querySelector("div.modal");
        //document.querySelector("ul.coins").addEventListener("click", show);
        
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