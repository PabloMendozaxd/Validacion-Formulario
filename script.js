"use strict";

const inputs = document.querySelectorAll('input');

const expresionesRegulares={
  nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const validarEntrada=(nodo)=>{
  console.log()
  switch (nodo.target.placeholder) {
    case 'nombre':
      if (expresionesRegulares.nombres.test(nodo.target.value)) {
        console.log('siiiiii')
      }else{
        console.log('noporoloooooo')
      }
      break;
    case 'segundo nombre':
      
      break;
    case 'apellido paterno':
      
      break;
    case 'apellido materno':
      
      break;
    case 'dia de nacimiento':
      
      break;
    case 'mes de nacimiento':
      
      break;
    case 'año de nacimiento':
      
      break;
    case 'destino':
      
      break;

  }
}

inputs.forEach(input => {
  input.addEventListener('blur',validarEntrada)
});