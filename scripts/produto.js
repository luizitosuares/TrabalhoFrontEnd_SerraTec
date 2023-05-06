const livro = JSON.parse(localStorage.getItem('livro'));


let img  = document.createElement('img');
img.setAttribute('src', livro.imagem);

let div = document.createElement('div');

let h2 = document.createElement('h2');
h2.innerText = 'Especificação';

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
