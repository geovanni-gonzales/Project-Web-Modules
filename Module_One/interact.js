(function(){
    'use strict';
    var hr, he;
    
    /*- Funcion de Redimencion de imagen de fondo de acuerdo al tamaño del header */
    function resize() {
        he = hr.offsetHeight;
        hr.style.backgroundSize = "100%" + " " + he + "px";
    }
    /*------------------------------------------------------------------- */
    function resiz() {
        resize();
    }
    
    function execute(){
        hr = document.getElementsByTagName("header")[0];
        window.addEventListener("resize", resiz);/*Se ejecuta solo al redimencionar la ventana con el evento resize*/
        resize();/*Necesario para redimencionar el fondo de imagen al cargar la web*/
    }
    window.addEventListener("load", execute);
}());