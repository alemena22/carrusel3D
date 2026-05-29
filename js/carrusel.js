var imagenes = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png"
];

var i = 0;

document.getElementById("siguiente").addEventListener("click", ()=>{
    if(i < 4){
        i++;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i])
})

document.getElementById("anterior").addEventListener("click", ()=>{
    if(i > 0){
        i--;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i])
})