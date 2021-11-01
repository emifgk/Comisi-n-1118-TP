window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value == '') {
    alert('El campo nombre no puede estar vacío');
    return false;
  }
  return true;
}

function valida_telefono() {
  var elemento = document.getElementById('tel');
  if (isNaN(elemento.value)){
    alert('El campo debe ser numérico');
    return false;
  }
  return true;
}

function valida_check() {
  var campo_check = document.getElementById('mayor');
  if(!campo_check.checked){
    alert('Debe ser mayor de edad');
    return false;
  }
  return true;
}

function validate(e) {
  if (valida_nombre() && valida_telefono() && valida_check()&&confirm('Pulse aceptar si desea enviar el form')){
    return true;
  }
  return false;
}
