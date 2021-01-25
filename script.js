"use strict";

class DOM {
  static addEventListener(element, nameEvento, handler) {
    element.addEventListener(nameEvento, handler);
  }
}

class Formulario {
  constructor(inputs) {
    this.inputs = inputs;
  }
  detectarEntrada(nodo) {
    let expresionesRegulares = {
      validarNombre: () => {
        let regexNombre = /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/;
        if (regexNombre.test(nodo.target.value)) {
          console.log("hola closure");
        }
        else{console.log('noooooooooooowey')}
      },
    };
    switch (nodo.target.placeholder) {
      case "nombre":
        expresionesRegulares.validarNombre();
        break;
      case "segundo nombre":
        expresionesRegulares.validarNombre();
        break;
      case "apellido paterno":
        expresionesRegulares.validarNombre();
        break;
      case "apellido materno":
        expresionesRegulares.validarNombre();
        break;
    }
  }
  iniciar() {
    this.inputs.forEach((input) => {
      DOM.addEventListener(input,'blur',this.detectarEntrada)
      // input.addEventListener("blur", this.detectarEntrada);
    });
  }
}

let formularioUno = new Formulario(document.querySelectorAll("input"));
formularioUno.iniciar();
