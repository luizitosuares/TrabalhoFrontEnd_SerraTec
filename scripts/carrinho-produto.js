const btnMais = document.querySelector('#mais');
const btnMenos = document.querySelector('#menos');
const qtdTxt = document.querySelector('.quantidade p');
const precoTxt = document.querySelector('#preco');
const btnAddCarrinho = document.querySelector('.addcarrinho');

//pegando livro
const livro = JSON.parse(localStorage.getItem('livro'));

let qtd = 1;
let precoInicial = livro.preco;
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


//logica produto


let img  = document.createElement('img');
img.setAttribute('src', livro.imagem);

let div = document.createElement('div');

let h2 = document.createElement('h2');
h2.innerText = 'Especificações';

let nome = document.createElement('p');
nome.innerHTML = `<strong>Nome:</strong>${livro.titulo}`

let ano = document.createElement('p');
ano.innerHTML = `<strong>Ano:</strong>${livro.ano}`

let editora = document.createElement('p');
editora.innerHTML = `<strong>Editora:</strong>${livro.editora}`

let escritor = document.createElement('p');
escritor.innerHTML = `<strong>Escritor:</strong>${livro.escritor}`

div.appendChild(h2);
div.appendChild(nome);
div.appendChild(ano);
div.appendChild(editora);
div.appendChild(escritor);

document.querySelector('.informacoes').appendChild(img);
document.querySelector('.informacoes').appendChild(div);


//setando o preco

document.querySelector('#preco').innerText = `R$ ${livro.preco.toFixed(2)}` 
