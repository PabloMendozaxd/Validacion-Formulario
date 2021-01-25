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
    const VALOR=nodo.target.value
    let expresionesRegulares = {
      validarNombre: () => {
        let regexNombre = /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/;
        if (regexNombre.test(VALOR)) {
          console.log("hola closure");
        }
        else{console.log('noooooooooooowey')}
      },
      validarDia:()=>{
        let regexDia=/(0[1-9])|([10-31])/
        if (regexDia.test(VALOR)) {
          console.log('Día valido')
        }else{console.log('NEEEEEEEL')}
      },
      validarMes:()=>{
        let regexMes= /(0[1-9])|(1[0-2])/
        if (regexMes.test(VALOR)) {
          console.log("hola closure");
        }
        else{console.log('noooooooooooowey')}
      },
      validarAnio:()=>{
        let regexAnio=/\d{4}/
        if (regexAnio.test(VALOR)) {
          console.log('El año es '+VALOR)
        }else{console.log('Nel prro')}
      }
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
      case "dia de nacimiento":
        expresionesRegulares.validarDia();
        break;
      case "mes de nacimiento":
        expresionesRegulares.validarMes();
        break;
      case "año de nacimiento":
        expresionesRegulares.validarAnio();
        break;
    }
  }
  iniciar() {
    this.inputs.forEach((input) => {
      DOM.addEventListener(input,'blur',this.detectarEntrada)
    });
  }
}

let formularioUno = new Formulario(document.querySelectorAll("input"));
formularioUno.iniciar();
