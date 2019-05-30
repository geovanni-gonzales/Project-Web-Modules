(function(){
    'use strict';
    var hr, he, posy;
    
    /*- Funcion de Redimencion de imagen de fondo de acuerdo al tamaño del header */
    function resize() {
        he = hr.offsetHeight;
        hr.style.backgroundSize = "100%" + " " + he + "px";
    }
    /*------------------------------------------------------------------- */
    function resiz() {
        resize();
    }
    
    /*Funcion para el efecto paralax*/
    function posit() {
        posy = window.pageYOffset * 0.30;
        hr.style.backgroundPosition = "0" + " " + "-" + posy + "px";
    }
    /*Funcion para el efecto paralax*/
    
    function execute(){
        hr = document.getElementsByTagName("header")[0];
        window.addEventListener("resize", resiz);/*Se ejecuta solo al redimencionar la ventana con el evento resize*/
        resize();/*Necesario para redimencionar el fondo de imagen al cargar la web*/
        
        
        window.addEventListener("scroll", posit);/*efecto paralax*/
    }
    window.addEventListener("load", execute);
}());