let listaCarrinho = JSON.parse(localStorage.getItem("listaCarrinho"));

listaCarrinho.forEach((l) => {
  //div imagem info
  let divImagemInfo = document.createElement("div");
  divImagemInfo.setAttribute("class", "imagem-info");

  //imagem
  let divImg = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", l.imagem);

  divImg.appendChild(img);

  //info-livro
  let divInfo = document.createElement("div");
  divInfo.setAttribute("class", "info-livro");

  let nome = document.createElement("p");
  nome.innerHTML = `<strong>Nome: </strong>${l.titulo}`;

  let preco = document.createElement("p");
  preco.innerHTML = `<strong>Preco: </strong>${l.preco}`;

  let qtd = document.createElement("p");
  qtd.innerHTML = `<strong>Quantidade: </strong>${l.quantidade}`;

  divInfo.appendChild(nome);
  divInfo.appendChild(preco);
  divInfo.appendChild(qtd);

  //imagem- info
  divImagemInfo.appendChild(divImg);
  divImagemInfo.appendChild(divInfo);

  //div btn
  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "btn-carrinho");
  divBtn.setAttribute("id", l.titulo);
  divBtn.innerHTML = `<svg fill="red" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M22,5a1,1,0,0,1-1,1H3A1,1,0,0,1,3,4H8V3A1,1,0,0,1,9,2h6a1,1,0,0,1,1,1V4h5A1,1,0,0,1,22,5ZM4.934,21.071,4,8H20l-.934,13.071a1,1,0,0,1-1,.929H5.931A1,1,0,0,1,4.934,21.071ZM15,18a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0Zm-4,0a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0ZM7,18a1,1,0,0,0,2,0V12a1,1,0,0,0-2,0Z" />
      </g>
    </svg>`;

  //li
  let li = document.createElement("li");
  li.appendChild(divImagemInfo);
  li.appendChild(divBtn);

  //append child
  document.querySelector(".container_carrinho ul").appendChild(li);
});

const btnExcluir = document.querySelectorAll(".btn-carrinho");

btnExcluir.forEach((b) => {
  b.addEventListener("click", () => {
    lista = JSON.parse(localStorage.getItem("listaCarrinho"));
    const nomeLivro = b.getAttribute("id");
    lista.forEach((l) => {
      if (l.titulo === nomeLivro) {
        lista.splice(lista.indexOf(l), 1);
      }
    });
    localStorage.setItem("listaCarrinho", JSON.stringify(lista));
    location.href = "../carrinho/carrinho.html";
  });
});

document.querySelector(".btn-compra-mais").addEventListener("click", () => {
  location.href = "../home-page/home.html";
});

document
  .querySelector(".btn-finalizar-compra")
  .addEventListener("click", () => {
    location.href = "../finalizar-compra/finalizar-compra.html";
  });
