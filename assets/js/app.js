var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
var selector = ["original","blanco-negro","sepia","invertir-colores"];
select.onchange = function(){
  for (var i=0; i<selector.length; i++)
    if(select.value == selector[i]){
        for(var j =0; j<img.length;j++){
            eliminar(img[j].classList);
            img[j].classList.add(selector[i]);
        }
    }
}

function eliminar(param){
   if(param.item(1) != ""){
       param.remove(param.item(1));
   }
}
