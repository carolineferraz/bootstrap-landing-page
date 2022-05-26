let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Esse nome não parece válido..."
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Ok!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}


function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(regexEmail)) {
        txtEmail.innerHTML = "Ok!"
        txtEmail.style.color = "green"
        emailOk = true
    } else {
        txtEmail.innerHTML = "Esse e-mail não parece válido..."
        txtEmail.style.color = "red"
    }
}


function validaMensagem() {

    let txtMensagem = document.querySelector("#txtMensagem")

    if (assunto.value.length > 300) {
        txtMensagem.innerHTML = "Por favor, digite até 300 caracteres."
        txtAssunto.style.color = "red"
    } else {
        txtMensagem.innerHTML = "Ok!"
        txtMensagem.style.color = "green"
        mensagemOk = true
    }

}


function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}