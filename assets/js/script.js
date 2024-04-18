console.log("hola mundo")

import {sumar , restar} from "./operaciones.js" 

let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");

let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")

let resultado = document.getElementById("resultado")

let btnSumar = document.getElementById("btnSumar");
let btnrestar = document.getElementById("btnRestar");

let n1v = 0;
let n2v = 0;

let res = 0;

btnSumar.addEventListener("click", function(){

    error1.innerHTML = "";
    error2.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "Error, debe ingresar un numero"
        error1.style.color = "red";
        return;
    }

    if(n2.value === ""){
        error2.innerHTML = "Error, debe ingresar un numero"
        error2.style.color = "red";
        return;
    }


    res = sumar(n1.value, n2.value);

    resultado.innerHTML = res;
    resultado.style.color = "green";
    resultado.style.fontSize = "2rem";
})

btnrestar.addEventListener("click", ()=>{

    let resFinal = 0;
    error1.innerHTML = "";
    error2.innerHTML = ""; 

    if(n1.value === ""){
        error1.innerHTML = "debe ingresar el primer numero para restar"
        error1.style.color = "red";
        return;
    }

    if(n2.value === ""){
        error2.innerHTML = "debe ingresar el primer numero para restar"
        error2.style.color = "red";
        return;
    }

    res = restar(n1.value,n2.value);


    resFinal = `El resultado es: ${res}`;
    resultado.innerHTML = resFinal;
    resultado.style.color = "red";
    resultado.style.fontSize = "2rem";
})