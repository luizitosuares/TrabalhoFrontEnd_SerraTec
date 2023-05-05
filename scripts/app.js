var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var btnLogin = document.querySelector('.login')

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

btnLogin.addEventListener('click', () => {
  let listaCarrinho = []; 
  localStorage.setItem('listaCarrinho', JSON.stringify(listaCarrinho));
  location.href = '../home-page/home.html';
})