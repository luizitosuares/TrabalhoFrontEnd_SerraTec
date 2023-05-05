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


    {
        titulo: "Crime e Castigo",
        ano: 2021,
        editora: "Garnier",
        escritor: "Fiódor Dostoiévski",
        imagem: "../../assets/img/livros/shopping.jpg",
        preco: 89.90

    },

    {
        titulo: "Cem Anos de Solidão",
        ano: 1977,
        editora: "Record",
        escritor: "Gabriel García Márquez",
        imagem: "../../assets/img/livros/cem_anos_de_solidao.jpg",
        preco: 44.99

    },


    {
        titulo: "A marca da vitória: A autobiografia do criador da Nike",
        ano: 2016,
        editora: "Editora Sextante",
        escritor: "Phil Knight",
        imagem: "../../assets/img/livros/nike.jpg",
        preco: 59.90

    },



    {
        titulo: "O andar do bêbado: Como o acaso determina nossas vidas",
        ano: 2018,
        editora: "Zahar",
        escritor: "Leonard Mlodinow",
        imagem: "../../assets/img/livros/andar_do_bebado.jpg",
        preco: 29.90

    },



    {
        titulo: "As veias abertas da América Latina",
        ano: 2010,
        editora: "L&PM",
        escritor: "Eduardo Galeano",
        imagem: "../../assets/img/livros/veias.jpg",
        preco: 50.17

    },
 

    {
        titulo: "Em Busca De Sentido: Um psicólogo no campo de concentração",
        ano: 1991,
        editora: "Editora Vozes",
        escritor: "Viktor E. Frankl",
        imagem: "../../assets/img/livros/sentido.jpg",
        preco: 42.00

    },

    {
        titulo: "12 regras para a vida: um antídoto para o caos ",
        ano: 2018,
        editora: "Alta Books",
        escritor: "Jordan B. Peterson",
        imagem: "../../assets/img/livros/12regras.jpg",
        preco: 46.20

    },



    {
        titulo: "LIMA BARRETO - OBRA REUNIDA BOX",
        ano: 2021,
        editora: "Nova Fronteira",
        escritor: "Lima Barreto",
        imagem: "../../assets/img/livros/lima.jpg",
        preco: 178.70

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