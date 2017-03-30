var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){ 
    if(select.value == "original"){
        for(var i =0; i<img.length;i++){
            eliminar(img[i].classList);
            img[i].classList.add("original");
        }
    }
    if(select.value == "blanco-negro"){
        for(var i =0; i<img.length;i++){
            eliminar(img[i].classList);
            img[i].classList.add("blanco-negro");
        }
    }
    if(select.value == "sepia"){
        for(var i =0; i<img.length;i++){
            eliminar(img[i].classList);
            img[i].classList.add("sepia");
        }
    }
    if(select.value == "invertir-colores"){
        for(var i =0; i<img.length;i++){
            eliminar(img[i].classList);
            img[i].classList.add("invertir-colores");
        }
    }
}

function eliminar(param){        
   if(param.item(1) != ""){
       param.remove(param.remove(param.item(1)));
   }
}