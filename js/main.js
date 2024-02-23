function circulo(){
    let figura=document.getElementById("figura")
    figura.classList.toggle("circulo")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Circulo"
}

function rectangulo(){
    let figura=document.querySelector("#figura")
    figura.classList.toggle("rectangulo")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Rectangulo"
}

function moveright(){
    let figura=document.getElementById("figura")
    figura.classList.toggle("right")
    alert ("Se esta moviendo la figura hacia la derecha")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Right"
}

function degradado(){
    let figura=document.querySelector("#figura")
    figura.classList.toggle("degradado")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Degradado"
}

function luna(){
    let figura= document.querySelector("#figura")
    figura.classList.toggle("luna") 
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Luna"
}

function estrella(){
    let figura=document.querySelector('#figura')
    figura.classList.toggle('estrella')
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Estrella"
}

function triangulo(){
    let figura=document.getElementById('figura')
    figura.classList.toggle('triangulo')
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Triangulo"
}

function movetop(){
    let figura=document.getElementById('figura')
    figura.classList.toggle('movetop')
    alert ("La figura se mueve hacia arriba")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Se mueve hacia arriba"
}

function bottom(){
    let figura=document.getElementById('figura')
    figura.classList.toggle('bottom')
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Se mueve hacia abajo"
}

function moveleft(){
    let figura=document.getElementById("figura")
    figura.classList.toggle("moveleft")
    alert ("Se esta moviendo la figura hacia la izquierda")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Izquierda"
}

function movediagonal(){
    let figura=document.getElementById("figura")
    figura.classList.toggle("diagonal")
    alert ("La figura se esta moviendo en diagonal")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Se mueve en diagonal"
}

function panelLateral(){
    let panel=document.querySelector("#panel-lateral")
    panel.classList.toggle("active")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "panel Lateral"
    
}

function panelSuperior(){
    let panel=document.querySelector("#panelSuperior")
    panel.classList.toggle("active")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Panel Superior"
}
function gif(){
    let figura=document.querySelector("#figura")
    figura.classList.toggle("gif")
    let titulo=document.getElementById('titulo')
    titulo.innerHTML= "Gif"
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
function cambiarColor() {
    let colorPicker = document.getElementById("colorPicker");
    let figura = document.getElementById("figura");
    let colorSeleccionado = colorPicker.value;

    figura.style.backgroundColor = colorSeleccionado;
}

function resetColor() {
    let figura = document.getElementById("figura");
    figura.style.backgroundColor = "pink"; 
}












