"use strict";
 
class DOM {
  static addEventListener(element, nameEvento, handler) {
    element.addEventListener(nameEvento, handler);
    
  }
  static validStyle(element) {
    element.classList.add('valid')
  }
}
 
let _validaciones = {
  letras: /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/,
  diaMes: /(0[1-9])|([10-31])/,
  mes: /(0[1-9])|(1[0-2])/,
  anio: /\d{4}/
}
 
class Formulario {
  constructor(inputs) {
    this.inputs = inputs;
  }
  validar = (VALOR, nodo) => {
    return (validacion) => {  
      if (validacion.test(VALOR)) {
        DOM.validStyle(nodo)
      } else {
        console.log('no valido')
      }
    }
  }
  detectarEntrada(nodo) {
    console.log(this)
    const VALOR = nodo.target.value
    const NODO = nodo.target
    const {diaMes, mes, anio, letras} = _validaciones;
    switch (nodo.target.placeholder) {
      case "nombre":
        console.log('El nombre es', this);
        this.validar(VALOR, NODO)(letras);
        break;
      case "segundo nombre":
        this.validar(VALOR, NODO)(letras);
        break;
      case "apellido paterno":
        this.validar(VALOR, NODO)(letras);
        break;
      case "apellido materno":
        this.validar(VALOR, NODO)(letras);
        break;
      case "dia de nacimiento":
        this.validar(VALOR, NODO)(diaMes);
        break;
      case "mes de nacimiento":
        this.validar(VALOR, NODO)(mes);
        break;
      case "año de nacimiento":
        this.validar(VALOR, NODO)(anio);
        break;
    }
  }
  iniciar() {
    this.inputs.forEach(function(input) {
      console.log(this);
      console.log(input);
      DOM.addEventListener(input, 'blur', this.detectarEntrada.bind(this))
    }.bind(this));
  }
}
 
let formularioUno = new Formulario(document.querySelectorAll("input"));
formularioUno.iniciar();
