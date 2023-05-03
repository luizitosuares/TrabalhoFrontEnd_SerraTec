const img = document.querySelector(".main img")

img.style.backgroundSize = "cover"
img.style.backgroundPosition = "center center"

var numeroImagem = 1

setInterval(() => {
   img.style.backgroundImage = `url(../imagens/bg${numeroImagem}.jpg)`  
   numeroImagem ++
   if (numeroImagem == 4){
    numeroImagem = 1

   }
}, 3000);
