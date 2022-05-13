function validarFormulario(formulario){
  // console.log(formulario.form);
   event.preventDefault();
   var nombre      = formulario.form[1].value;
   var password    = formulario.form[2].value;
   var re_password = formulario.form[3].value;
   var terminos    = formulario.form[7].checked;
  
   console.log(terminos); 

   if(validarNombre(nombre) == false){
       document.getElementById('nombreUsuario').focus();
       alert('Debe ingresar un nombre')
   } else if(validarContrasena(password, re_password) == false){
       document.getElementById('passwordUsuario').focus(); 
       
       document.getElementById('passwordUsuario').value = '';
       document.getElementById('rePasswordUsuario').value = ''

       alert('Las contraseñas no coinciden')
   } else if(terminos == false){
       alert('Debe marcar los terminos y condiciones')
    }
    else {
       alert('Formulario OK')
   }
}


function validarContrasena(password, repassword){
    if((password != repassword) || (password == '')){
        return false;
    } else {
        return true;
    }
}

function validarNombre(nombre){
    if(nombre == ''){
        return false;
    } else {
        return true;
    }
}