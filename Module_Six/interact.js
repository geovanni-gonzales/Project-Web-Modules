(function(){
    'use strict';
    
    function toggle(){
        document.querySelector("ul.descript > li:nth-child(2)").classList.toggle("toggle");      
        document.querySelector("ul.descript > li:first-child > p").classList.toggle("active");      
    }
    
    function execute() {
        document.querySelector("section ul.descript>li>p").addEventListener("click", toggle);
    }
    
    window.addEventListener("load", execute);
}());