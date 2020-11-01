const nav = document.querySelector("#hamburger button");
        nav.addEventListener("click" , e => {
            nav.classList.toggle("open");
         });

//Imágenes
let images = ["1.jpg", "2.jpg"];

//Elemento para cargar el slide
let slider = document.getElementById("slider-js");

//Elemento general del slider
let sliderContainer = document.getElementById("slider-container");

//Ancho del contenedor en función de las imágenes
slider.style.width = images.length * 100 + "%";

//Elemento para cargar la navegación
let sliderNav = document.getElementById("slider-navigation");

//Variable para saber si el slide está activo
let active = true;

//al clickear que se mueva el slider

sliderNav.addEventListener("click", e => slideImage(e.target.id.slice(-1)));
function xd(){
    if(slideImage){
        sliderNav.addEventListener("click", e => slideImage(e.target.id.slice(-1)));
    }

}

//Dibujar slide y navegación
for(let img in images){
    
    //Cargar imágenes
    slider.innerHTML += `<img src="${images[img]}" class="slider__img" style="width: ${100/images.length}%">`;
    
    //Cargar navegación
    sliderNav.innerHTML += `<span class="${img==0 ? 'slider-nav slider-nav--active' : 'slider-nav'}" id="slider-nav-${img}">`;
}

//variable contador 

let cont = 0;

//intervalos de tiempos para el contador

const startInterval = ()=> setInterval(counter, 4000);

startInterval();

function counter(){
    if(active){
        cont++;
        if(cont>=images.length) cont=0;
        setInterval(slideImage(cont), 2000);
        setInterval(setActive(cont), 2000);
    }
} 

function slideImage(id){
    if(!active && isNaN(id)){
        cont = id;
        setActive(id);
    }
    slider.style.left = "-" + id + "00%";
  }

let navIcons = [...document.getElementsByClassName("slider-nav")];

function setActive(id) {

    navIcons.map(idValue => idValue.attributes.id.nodeValue.slice(-1) == id ?
                            idValue.classList.add("slider-nav--active") :
                            idValue.classList.remove("slider-nav--active")                             
)

}

