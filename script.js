"use strict";

class Formulario {
  constructor(inputs) {
    this.inputs = inputs;
  }
  validarEntrada(nodo) {

    let expresionesRegulares = {
      nombres: /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/,
    };
    switch (nodo.target.placeholder) {
      case "nombre":
        if (expresionesRegulares.nombres.test(nodo.target.value)) {
          //ESto se va a estar repitiendo, hay que sacarlo
          console.log("siiiiii");
        } else {
          console.log("noporoloooooo");
          nodo.target.style.border = "8px solid pink";
        }
    }
  }
  iniciar(){
    this.inputs.forEach((input) => {
      input.addEventListener("blur", this.validarEntrada);
    });
  }
}

// const inputs = document.querySelectorAll("input");


let formularioUno= new Formulario(document.querySelectorAll("input"))
formularioUno.iniciar()