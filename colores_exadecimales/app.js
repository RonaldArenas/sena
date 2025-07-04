const boton = document.getElementById("boton-color");
const parrafo = document.getElementById("color");
const encabezado = document.querySelector(".encabezado");


console.log(boton.innerText);

function touchButton(){

    const letras = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let random = Math.random();
        let iAleatorio = Math.floor(random*16);
        color += letras[iAleatorio];
    }

    parrafo.innerText = color;
    
    console.log(encabezado)

    encabezado.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}

boton.addEventListener('click' , touchButton);