console.log("Este es el proyecto");
document.addEventListener('DOMContentLoaded', function() {
    let el = document.getElementById("shop");
    el.addEventListener("click", mostrar_ocultar, false); 

    var menu = document.getElementById("menuHam");
   menu.addEventListener("click", oculta_muestra_menu , false);
});







function mostrar(){
    document.getElementById('menu').style.display = 'block';
    
    
  
}

function ocultar(){
    document.getElementById('menu').style.display ='none';
}

function mostrar_Menu(){
    console.log("muestra hamburguesa");
    document.getElementById('navleft').style.display = 'block';
    document.getElementById('navright').style.display = 'block';
    
}

function ocultar_Menu(){
    console.log("oculta hamburguesa");
    document.getElementById('navleft').style.display ='none';
    document.getElementById('navright').style.display ='none';
}

   


function oculta_muestra_menu(){
    let m = document.getElementById('navleft');
    let m2 = document.getElementById("navright");
    let iconM = document.getElementById("iconM");
    if(m2.style.display == "none"){
        mostrar_Menu();
    }else{
        console.log("elegi ocultar");
        ocultar_Menu();
        iconM.classList.toggle('fa-times');
        
    }
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







