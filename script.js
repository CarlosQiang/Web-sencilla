// script.js
console.log("Bienvenidos a la página web sencilla.");

const galeria = `<div id="galeria" class="carousel slide"> <div class="carousel-inner"> <div class="carousel-item active"><img src="descarga.jpeg" class="d-block w-100" alt="..."></div><div class="carousel-item"> <img src="descarga (1).jpeg" class="d-block w-100" alt="..."></div> <div class="carousel-item">  <img src="descarga (2).jpeg" class="d-block w-100" alt="..."> </div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">  <span class="carousel-control-prev-icon" aria-hidden="true"></span>  <span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">  <span class="carousel-control-next-icon" aria-hidden="true"></span>  <span class="visually-hidden">Next</span>  </button></div>`;



function pulsar(){
    var total;
    total = total + 1;
    console.log(total);
    let anadir = document.getElementById("imagenes");
    let vacio = ' '

    if (total % 2 == 0){
        anadir.innerHTML = vacio ; 
    }else{
        anadir.innerHTML = galeria;
    }
    


};


