//creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
    for (i=0;i<=10;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div); 
    }
}
//creo las barras pintadas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let php = document.getElementById("php");
crearBarra(php);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;
//funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro =true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html ,10 , 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 5, 1, intervalJavascript);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 5, 2, intervalPhp);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253"
    }else {
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades()
}