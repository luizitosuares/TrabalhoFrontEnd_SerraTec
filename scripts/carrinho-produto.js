const btnMais = document.querySelector('#mais');
const btnMenos = document.querySelector('#menos');
const qtdTxt = document.querySelector('.quantidade p');
const precoTxt = document.querySelector('#preco');

let qtd = 1;
let precoInicial = parseFloat(precoTxt.textContent.replace(' R$', ''));
let precoAtual = precoInicial;

btnMais.addEventListener('click', () => {
  qtd++;
  precoAtual += precoInicial;

  precoTxt.innerText = `${precoAtual.toFixed(2)} R$`;
  qtdTxt.innerText = qtd;
})

btnMenos.addEventListener('click', () => {
  if (qtd > 1) {
    qtd--;
    precoAtual -= precoInicial;
  }

  precoTxt.innerText = `${precoAtual.toFixed(2)} R$`;
  qtdTxt.innerText = qtd;
})
