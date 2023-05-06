const form = document.querySelector("main form");

form.addEventListener('submit', e => {
  e.preventDefault();
})

document.querySelector("#btn-finalizar").addEventListener("click", () => {
  let endereco = {
    endereco1: form[0].value,
    endereco2: form[1].value,
    cidade: form[2].value,
    estado: form[3].value,
    cep: form[4].value,
  };
  localStorage.setItem("endereco", JSON.stringify(endereco));
  location.href = '../finalizar-compra/nota.html';
});

document.querySelector("#btn-cancelar").addEventListener("click", () => {
  location.href = "../home-page/home.html";
});
