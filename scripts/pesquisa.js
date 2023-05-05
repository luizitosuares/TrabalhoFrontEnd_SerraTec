const input = document.querySelector('.pesquisa');
const btn = document.querySelector('#btn');

let listaPesquisa= [];

btn.addEventListener('click', () => {
  let listaPesquisa= [];
  const caixaLivros = document.querySelector(".container-livros")

  let livros = JSON.parse(localStorage.getItem('listaLivros'));

  livros.forEach(livro => {

    if (livro.titulo.toLowerCase().includes(input.value.toLowerCase())) {
      
      listaPesquisa.push(livro);
      caixaLivros.innerHTML = '';
    }
  })

  console.log(listaPesquisa);
  listaPesquisa.forEach(l => {
    
    const img = document.createElement("img")
    img.setAttribute("src", l.imagem)
  
    const div = document.createElement("div")
  
    const nome = document.createElement("p")
    nome.innerText = l.titulo
  
    const preco = document.createElement("p")
    preco.innerText = "R$" + l.preco.toFixed(2)
  
    div.appendChild(nome)
    div.appendChild(preco)
  
    const boxLivros = document.createElement("div")
  
    //colocando id com o nome do livro
    boxLivros.setAttribute('id', l.titulo);
  
    boxLivros.setAttribute("class", "box-livros")
    boxLivros.appendChild(img)
    boxLivros.appendChild(div)
    caixaLivros.appendChild(boxLivros)
  })
})



document.querySelector('#refresh').addEventListener('click', () => {
  location.href = '../home-page/home.html'
})