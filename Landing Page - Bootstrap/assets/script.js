let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');

let nomeOk = false;
let emailOk = false;

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}