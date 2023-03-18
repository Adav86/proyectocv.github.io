function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let sql = document.getElementById("sql");
crearBarra(sql);
let github = document.getElementById("github");
crearBarra(github);
let boostrap = document.getElementById("boostrap");
crearBarra(boostrap);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalNodejs = setInterval(function(){
            pintarBarra(nodejs, 11, 2, intervalNodejs);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 15, 3, intervalSql);
        },100);
        const intervalGithub = setInterval(function(){
            pintarBarra(github, 16, 4, intervalGithub);
        },100);
        const intervalBoostrap = setInterval(function(){
            pintarBarra(boostrap, 11, 5, intervalBoostrap);
        },100);
    }
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}