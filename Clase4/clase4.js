window.addEventListener('DOMContentLoaded', function(event){
    var form_register = document.querySelector('#form-register');
    form_register.addEventListener('submit', function(event){
        var canSubmit = true;
        var input_name = document.querySelector('#input-name');
        if (input_name.value==''){
            document.querySelector('#name_container .input-error').innerHTML = "El nombre es obligatorio";
            canSubmit = false;
        } else{
            if(input_name.value.length < 3){
                document.querySelector('#name_container .input-error').innerHTML = "El nombre debe tener al menos 3 caracteres";
                canSubmit = false;
            }else{
                document.querySelector('#name_container .input-error').innerHTML = '';
            }    
        }

        var input_last_name = document.querySelector('#input-last-name');
        if (input_last_name.value==''){
            document.querySelector('#last_name_container .input-error').innerHTML = "El apellido es obligatorio";
            canSubmit = false;
        } else{
            if(input_last_name.value.length < 3){
                document.querySelector('#last_name_container .input-error').innerHTML = "El apellido debe tener al menos 3 caracteres";
                canSubmit = false;
            }else{
                document.querySelector('#last_name_container .input-error').innerHTML = '';
            }    
        }

        var input_ci = document.querySelector('#input-ci');
        if (input_ci.value==''){
            document.querySelector('#ci_container .input-error').innerHTML = "La cédula es obligatorio";
            canSubmit = false;
        } else{
            if((input_ci.value.length < 10)||(input_ci.value.length >=11)||(input_ci.value.length >0)){
                document.querySelector('#ci_container .input-error').innerHTML = "La cédula debe tener 10 caracteres";
                canSubmit = false;
            }else{
                document.querySelector('#ci_container .input-error').innerHTML = '';
            }    
        }

        var input_email = document.querySelector('#input-email');
        if (input_email.value==''){
            document.querySelector('#email_container .input-error').innerHTML = "El email es obligatorio";
            canSubmit = false;
        } else{
            var index1 = input_email.value.indexOf("@");
            var index2 = input_email.value.indexOf(".");
            if((index1 < 0 || index2 < 0)){
                document.querySelector('#email_container .input-error').innerHTML = "El mail no cumple con el formato";
                canSubmit = false;
            }else{
                document.querySelector('#email_container .input-error').innerHTML = '';
            }    
        }

        if (!canSubmit){
            event.preventDefault();
        }
    })
})
