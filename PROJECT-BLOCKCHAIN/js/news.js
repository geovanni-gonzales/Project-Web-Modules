(function () {
    'use strict';
    var v, a, i, t, h, x, t2, h2, p, modal, ul_coins, u, div;
    function fixed() {
        //var posY = window.scrollY; alias de pageYOffset
        var posY, boton, heightHead;
        posY = window.pageYOffset;
        boton = document.getElementsByClassName("boton")[0];
        heightHead = document.getElementsByTagName("header")[0].offsetHeight;
        
        if (posY > heightHead) {
            boton.style.position = "fixed";
            boton.style.top = "0px";
        } else {
            boton.style.position = "static";
        }
    }
    function toggle() {
        document.getElementsByTagName("aside")[0].classList.toggle("toggle");
    }
    function close() {
        document.getElementsByTagName("aside")[0].classList.remove("toggle");
        
    }
    //!!!!!la funcion animar de P, H2, DIV... se ejecuta tanto en el evento load y scroll
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
            t2 = nodelist[0].getBoundingClientRect().top + 90;//se modifico el div es menos alto
            if (t2 < v) {
                nodelist[0].className = clase;
            }
            
        }
    }//animar(3 de 5)
    //---------Fin de la funcion Animar------------------------------
    //---------Tambien necesario para la funcion Animar--------------
    function top() {
        animar(h2, "h2");
        animar(p, "parf");
        animar(div, "boxauthor_article display"); //animar(5 de 5)
    }//animar()
    //---------Fin de la funcion Animar------------------------------
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
            asignar("APORTE BITCOIN", "../images/binance_bitcoin.png", "1PZh2W88B1wSAYyB5ZwyY5zexKnjM2DC8S");
        } else if (t_span === "icon-ethereum") {
            asignar("APORTE ETHERIUM", "../images/uphold_ethereum.png", "0x09bDb8e103162220CA91EE01D1cF87098E2FCac1");
        } else if (t_span === "icon-monero") {
            asignar("APORTE MONERO", "../images/poloniex_monero.png", "4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbS2YWqhhgA9S13zRqHH");
        }
    }
    function closeModal(e) {
        if (e.target.className === "modal show") {
            modal.setAttribute("class", "modal");
        }
    }
    //-------INICIO DEL MODAL----------
    function execute() {
        document.getElementsByClassName("boton")[0].addEventListener("click", toggle);
        window.addEventListener("scroll", fixed);
        document.getElementsByClassName("articleContainer")[0].addEventListener("click", close);
        window.addEventListener("scroll", top);//animar(4 de 5)
        
        h2 = document.getElementsByTagName("h2");
        p = document.getElementsByTagName("p");
        animar(h2, "h2");
        animar(p, "parf");
        
        div = document.getElementsByClassName("boxauthor_article");//animar(2 de 5);
        animar(div, "boxauthor_article display"); //animar(1 de 5)
        
        //INICIO DEL MODAL
        modal = document.querySelector("div.modal");
        //document.querySelector("ul.coins").addEventListener("click", show);
        
        ul_coins = document.querySelectorAll("ul.coins");
        for (u = 0; u < ul_coins.length; u += 1) {
            ul_coins[u].addEventListener("click", show);
        }
        document.querySelector("div.box_coins").addEventListener("click", closeModal);
        //FIN DEL MODAL
    }
    window.addEventListener("load", execute);
}());