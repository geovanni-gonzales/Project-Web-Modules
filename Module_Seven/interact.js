(function(){
    'use strict';
    
    function validateName(e){
        var tags = document.getElementsByClassName("dates");
        for(var i = 0; i < tags.length; i++){
            if(tags[i].value === ""){
                error(tags[i]);
                e.preventDefault();
                return false;
                //break;
            }
            else{
                return true;
            }
        }
    }
    function error(tag){
        tag.className = "error";
        tag.focus();
        tag.value = "";
    }
    function cleanError(e){
        e.target.className = "";
    }
    function validate(e){
        validateName(e);
//        validateEmail(e);
//        validateCountry(e);
//        validateMessage(e);
    }
    //FIN DE FUNCIONES INDEPENDIENTES------------------
    function execute () {
//        document.getElementById("message").addEventListener("change", cleanError);
//        document.getElementById("country").addEventListener("change", cleanError);
//        document.getElementById("email").addEventListener("change", cleanError);
//        document.getElementById("name").addEventListener("change", cleanError);
        document.getElementById("form").addEventListener("submit", validate);
    }
    
    window.addEventListener("load", execute);
}());