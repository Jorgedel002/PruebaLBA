//logos carrusel

let logos = ["ray ban.jpg", "logo-vulk (1).jpg","gucci-1 (1).jpg","Dior-logo (1).jpg"];

let sliderLogos = document.getElementById("slider-logos-js");

let sliderContainerLogos = document.getElementById("slider-logo");

sliderLogos.style.width = logos.length *100 + "%";

let activeLogo = true;

for(let logoImg in logos){

    sliderLogos.innerHTML += `<img src="${logos[logoImg]}" class="slider__logos" style="width: ${40/logos.length}%">`;
}

let contador = 0;

const startIntervalLogo = ()=> setIntervalLogo(counterLogo, 4000);

startIntervalLogo();

function counterLogo(){
    if(activeLogo){
        contador++;
        if(contador>=logos.length) contador=0;
        setIntervalLogo(slideImageLogo(contador), 2000);
        setIntervalLogo(setActiveLogo(contador), 2000);
    }
} 

function slideImageLogo(idLogos){
    if(!activeLogo && isNaN(idLogos)){
        contador = idLogos;
        setActiveLogo(idLogos);
    }
    sliderLogos.style.left = "-" + idLogos + "00%";
  }