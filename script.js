"use strict";

const inputs = document.querySelectorAll('input');

const expresionesRegulares={
  nombres: /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/
}

const validarEntrada=(nodo)=>{
  console.log()
  switch (nodo.target.placeholder) {
    case 'nombre':
      if (expresionesRegulares.nombres.test(nodo.target.value)) { //ESto se va a estar repitiendo, hay que sacarlo
        console.log('siiiiii')
      }else{
        console.log('noporoloooooo')
        nodo.target.style.border="8px solid pink"
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



// class Formulario {
//   nombreFormulario;
//   nombre;
//   segundoNombre;
//   primerApellido;
//   segundoApellido;
//   genero;
//   lugarDeNacimiento;
//   diaNacimiento;
//   mesNacimiento;
//   anioNacimiento;
//   rfc;

//   constructor(nombreFormulario) {
//     this.nombreFormulario = nombreFormulario;
//     this.setTitle();
//   }

//   setTitle() {
//     const h1 = document.querySelector("#formName");
//     h1.textContent = this.nombreFormulario;
//   }

//   validaNumero(input, numero, variableAGuardar) {
//     switch (variableAGuardar) {
//       case "anio":
//         this.anioNacimiento = input.value;
//         break;
//       default:
//         break;
//     }
//     const regex = new RegExp(`${numero}`);
//     console.log(regex.test(input.value));
//     console.log("Ya se salió");
//     if (regex.test()) {
//       input.value = 0 + input.value;
//     }
//     console.log(input);
//   }

//   get curp() {
//     if (!this.segundoApellido) {
//       return "datos faltantes: " + "te falta el segundo apellido";
//     }
//     const curpGenerado = this.primerApellido.substring(0, 2);
//     return curpGenerado.toUpperCase();
//   }
// }
// //Objeto que contiene las expresiones 
// const expresiones = {
// 	nombres: /^[A-ZÁÉÍÓÚ][a-záéíóú]{1,20}$/, // Letras y espacios, pueden llevar acentos.
// 	numero: /^\d{0,2}$/ // 7 a 14 numeros.
// }

// const formulario = new Formulario("SEDENA");
// console.log(formulario);