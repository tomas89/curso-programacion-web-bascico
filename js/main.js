console.log("Este es el proyecto");

function mostrar(){
    document.getElementById('menu').style.display = 'block';

}

function ocultar(){
    document.getElementById('menu').style.display ='none';
}


function mostrar_ocultar(){

    var caja = document.getElementById("menu");

    if(caja.style.display == "none"){
        mostrar();
    }else{
        ocultar();
    }
}


function load (){
    var el = document.getElementById("t");
    el.addEventListener("click", mostrar_ocultar(), false);  
}




