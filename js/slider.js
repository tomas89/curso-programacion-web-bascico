console.log("Soy el slider");

let slider_index = 0;

function show_slide (index){
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.doNav');

    if(index >= slides.length) slider_index = 0;
    if(index < 0){ slider_index = slides.length -1 } 

    for(let i=0;i< slides.length; i++ ){
        slides[i].style.display = 'none';
        dots[i].classList.remove('active-dot');
    }

    console.log(slides + " soy la variable slides");
    console.log(dots + "Soy la variable dots");
    console.log(slider_index);
    console.log(slides[slider_index] + "soy un arreglo");
   
    slides[slider_index].style.display = 'block';
    //dots[slider_index].classList.add('active-dot');
    
}

show_slide(slider_index);