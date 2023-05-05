const form = document.querySelector("main form");
console.log(form[3]);
document.querySelector("#btn-finalizar").addEventListener("click", () => {
  let endereco = {
    endereco1: form[0].value,
    endereco2: form[1].value,
    cidade: form[2].value,
    estado: form[3].value,
    cep: form[4].value,
  };
  localStorage.setItem("endereco", JSON.stringify(endereco));
});
document.querySelector("#btn-cancelar").addEventListener("click", () => {
  location.href = "../home-page/home.html";
});
