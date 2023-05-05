let livros=[
    {
        titulo: "O Milagre da Manhã",
        ano: 2012,
        editora: "best-seller",
        escritor: "Hal Elrod",
        imagem: "../../assets/img/livros/milagre_da_manha.jpg",
        preco: 39.90

    },

    {
        titulo: "Os Segredos da Mente Milionária ",
        ano: 2020,
        editora: "GMT Editores LTDA ",
        escritor: "T.Harv Eker",
        imagem: "../../assets/img/livros/todos_os_segredos_da_mente_milionaria.png",
        preco: 29.90

    },

    {
        titulo: "Divergente",
        ano: 2021,
        editora: "Rocco Jovens leitores - 1ª edição",
        escritor: "Veronica Roth",
        imagem: "../../assets/img/livros/divergente.jpg",
        preco: 39.90

    },
]

const caixaLivros=document.querySelector(".container-livros")

livros.forEach(l=> {
    const img=document.createElement("img")
    img.setAttribute("src", l.imagem)

    const div=document.createElement("div")

    const nome=document.createElement("p")
    nome.innerText=l.titulo
    
    const preco=document.createElement("p")
    preco.innerText="R$"+l.preco.toFixed(2)

    div.appendChild(nome)
    div.appendChild(preco)

    const boxLivros=document.createElement("div")
    boxLivros.setAttribute("class","box-livros")
    boxLivros.appendChild(img)
    boxLivros.appendChild(div)
    caixaLivros.appendChild(boxLivros)
})

const boxLivros=document.querySelectorAll(".box-livros")
boxLivros.forEach(l=>{
    l.addEventListener("click",()=>{
        localStorage.setItem("livro", "teste")
        location.href="../produtos/produtos.html"
    })
})