var nome = document.getElementById("nome");
var email = document.querySelector(".email");
var assunto = document.getElementById("assunto");
var nomeOk = false;
var emailOk = false;
var assuntoOk = false;

function ValidarNome(){
    let txtNome = document.getElementById("txtNome");
    if(nome.value.length < 3){
     txtNome.innerHTML = "Nome Inválido"
     txtNome.style.color = "red"
     nomeOk = false;
    }else{
        txtNome.innerText = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function ValidaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
       emailOk = false;
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true;
    }
 }

 function ValidaAssunto() {
    let txtAssunto = document.getElementById("txtAssunto");
 
    if (assunto.value.length < 1 || assunto.value.length > 20) {
       txtAssunto.innerHTML = 'Assunto inválido'
       txtAssunto.style.color = 'red'
       assuntoOk = false;
    } else {
       txtAssunto.innerHTML = 'Assunto válido'
       txtAssunto.style.color = 'green'
       assuntoOk = true;
    }
 }

 function enviar(){
    if(nomeOk && emailOk && assuntoOk){
        alert("Enviada com sucesso!")
    }else{
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }


