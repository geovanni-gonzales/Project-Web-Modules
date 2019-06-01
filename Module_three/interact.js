(function () {
    'use strict';
    var v, a, i, t, h, x, t2, h2, p;
    
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
    
    function top() {
        animar(h2, "h2");
        animar(p, "parf");
        //animar(div, "mainbox_author display"); //animar (3 de 4)
    }//animar(5 de 5)
    
    function execute() {
        h2 = document.getElementsByTagName("h2");
        p = document.getElementsByTagName("p");
        
        window.addEventListener("scroll", top);//animar(4 de 5)
        
        animar(h2, "h2");
        animar(p, "parf");
    }
    
    window.addEventListener("load", execute);
}());