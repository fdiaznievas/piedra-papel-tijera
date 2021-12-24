let options = ["piedra", "papel", "tijera"];
var user;
var ronda;

/*class Usuario {
    constructor (nombre){
        this.nombre = nombre;
        this.nombre = document.getElementById(nombre);
        this.nombre.addEventListener("click", userCh);

    }
    
}*/

                        /*GENERAR UNA OPCION ALEATORIA BOT*/
function random(op) {
    var randOp = Math.floor(Math.random()*op.length);
    return options[randOp] ;
}

function piedraFun() {   
    ronda = "piedra";
    return console.log(opBot + " vs " + ronda);

}
function papelFun() { 
    ronda = "papel";
    return console.log(opBot + " vs " + ronda);

}
function tijeraFun() {   
    ronda = "tijera"; 
    return console.log(opBot + " vs " + ronda);

}

function ganar() {
    alert(`Elegiste: ${ronda} 
    La máquina eligió: ${opBot}`);
    alert("GANASTE!")
    console.log(opBot + " vs " + ronda);
    return location.reload(true);
}

function empate() {
    alert(`Elegiste: ${ronda} 
    La máquina eligió: ${opBot}`);
    alert("EMPATE!")
    console.log(opBot + " vs " + ronda);
    return location.reload(true);
}

function perder() {
    alert(`Elegiste: ${ronda} 
    La máquina eligió: ${opBot}`);
    alert("PERDISTE!");
    console.log(opBot + " vs " + ronda);
    return location.reload(true);
}

                         /*INICIO JUEGO*/

var opBot = random(options);

function jugar(){
    alert("Let's go!");
    switch (ronda){
        case "piedra" : 
                        switch (opBot){
                            case "piedra": empate(); break;
                            case "papel": perder(); break;
                            case "tijera": ganar(); break;
                            default : "Uups ha ocurrido un error. Recarga la página";
                        }; break;
        case "papel" :
                        switch (opBot){
                            case "piedra": ganar(); break;
                            case "papel": empate(); break;
                            case "tijera": perder(); break;
                            default : "Uups ha ocurrido un error. Recarga la página";
                        }; break;
        case "tijera" :
                        switch (opBot){
                            case "piedra": perder(); break;
                            case "papel": ganar(); break;
                            case "tijera": empate(); break;
                            default : "Uups ha ocurrido un error. Recarga la página";
                        }; break;
        default : console.log("UPS"); 
    }
}



                        /*Extraer botones opciones HTML*/
//var button = document.getElementsByClassName("opt");
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
var lagarto = document.getElementById("lagarto");
var cuisi = document.getElementById("cuisi");
var init = document.getElementById("primary");


         /*Instanciando cada uno de los elementos del array button y asignandole el evento addEventListener*/
/* for(let but of button) {
    but.addEventListener("click", userCh);
  } */

piedra.addEventListener ("click", piedraFun) 
papel.addEventListener("click", papelFun);
tijera.addEventListener("click", tijeraFun);
init.addEventListener("click", jugar);



console.log(user);

//console.log(jugar)

/*Pruebas de optimizar con clases*/
//const Piedra = new Usuario (piedra);