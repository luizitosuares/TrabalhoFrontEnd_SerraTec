const input = document.querySelector('.pesquisa');
const btn = document.querySelector('#btn');

let listaPesquisa= [];

btn.addEventListener('click', () => {
  let listaPesquisa= [];
  const caixaLivros = document.querySelector(".container-livros")

  let livros = JSON.parse(localStorage.getItem('livrosLista'));

  livros.forEach(livro => {

    if (livro.titulo.toLowerCase().includes(input.value.toLowerCase())) {
      
      listaPesquisa.push(livro);
      caixaLivros.innerHTML = '';
    }
  })

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
  
    const box = document.createElement("div")
  
    //colocando id com o nome do livro
    box.setAttribute('id', l.titulo);
  
    box.setAttribute("class", "box-livros")
    box.appendChild(img)
    box.appendChild(div)
    caixaLivros.appendChild(box)
  })

})

setInterval(() => {
  document.querySelectorAll(".box-livros").forEach(l => {
    l.addEventListener("click",()=>{
        //pegando o livro na lista de livros do localStorage
        let lista = JSON.parse(localStorage.getItem('livrosLista'));
        let nomeLivro = l.getAttribute('id');
        lista.forEach(livro => {
          if(livro.titulo === nomeLivro)
            localStorage.setItem('livro', JSON.stringify(livro));
        }) 
        location.href="../produtos/produtos.html"
    })
  })
}, 500)


document.querySelector('#refresh').addEventListener('click', () => {
  location.href = '../home-page/home.html'
})