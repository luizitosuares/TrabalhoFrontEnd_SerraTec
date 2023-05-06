const btnMais = document.querySelector('#mais');
const btnMenos = document.querySelector('#menos');
const qtdTxt = document.querySelector('.quantidade p');
const precoTxt = document.querySelector('#preco');
const btnAddCarrinho = document.querySelector('.addcarrinho');

let qtd = 1;
let precoInicial = parseFloat(precoTxt.textContent.replace('R$ ', ''));
let precoAtual = precoInicial;


btnMais.addEventListener('click', () => {
  qtd++;
  precoAtual += precoInicial;

  precoTxt.innerText = `R$ ${precoAtual.toFixed(2)}`;
  qtdTxt.innerText = qtd;
})

btnMenos.addEventListener('click', () => {
  if (qtd > 1) {
    qtd--;
    precoAtual -= precoInicial;
  }

  precoTxt.innerText = `R$ ${precoAtual.toFixed(2)}`;
  qtdTxt.innerText = qtd;
})

//adicionando ao carrinho

btnAddCarrinho.addEventListener('click', () => {
  //pegando livro
  const livro = JSON.parse(localStorage.getItem('livro'));

  //pegando lista de carrinho
  listaCarrinho = JSON.parse(localStorage.getItem('listaCarrinho'));
  
  //se lista não estiver criada deixar vazia para criar depois
  if(listaCarrinho === null) {
    listaCarrinho = []
  }

  let livroCarrinho = {
    titulo: livro.titulo,
    imagem: livro.imagem,
    quantidade: qtdTxt.innerText,
    preco: precoTxt.innerText
  }

  listaCarrinho.push(livroCarrinho);
  localStorage.setItem('listaCarrinho', JSON.stringify(listaCarrinho))

  location.href = '../carrinho/carrinho.html';
})
