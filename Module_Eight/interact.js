(function(){
    'use strict';
    var h4;
    function copy(){
        var text = document.querySelector("div input.text");
        var spanCopy = document.querySelector("div .icon-copy");
        
        text.focus();
        document.execCommand("selectAll");
        document.execCommand("copy");
        h4.setAttribute("class", "color");
        
        text.value = "Address copied";
        text.blur();
        
        setTimeout(function(){
            text.value = "Este texto sera copiado";
            h4.removeAttribute("class");
        },3000);
    }
    function closedi (){
        
    }
    
    function execute() {
        h4 = document.querySelector("div h4");
        h4.addEventListener("click", copy);
        document.querySelector("input.closedi").addEventListener("click", closedi);
    }
    
    window.addEventListener("load", execute);
}());