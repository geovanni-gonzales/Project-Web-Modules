(function(){
    'use strict';
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
    
    function execute() {
        document.getElementsByClassName("boton")[0].addEventListener("click", toggle);
        window.addEventListener("scroll", fixed);
        document.getElementsByClassName("articleContainer")[0].addEventListener("click", close);
    }
    
    window.addEventListener("load", execute);
}());