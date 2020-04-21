console.log("Este es el proyecto");
document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("shop");
    el.addEventListener("click", mostrar_ocultar, false);  
});

function mostrar(){
    document.getElementById('menu').style.display = 'block';
}

function ocultar(){
    document.getElementById('menu').style.display ='none';
}


function mostrar_ocultar(){
    console.log('mostrar ocultar')
    var caja = document.getElementById("menu");
    if(caja.style.display == "none"){
        mostrar();
    }else{
        ocultar();
    }
}





