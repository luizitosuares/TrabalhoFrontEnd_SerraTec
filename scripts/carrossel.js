const img = document.querySelector(".banner")

img.style.backgroundSize = "cover"
img.style.backgroundPosition = "center center"
img.style.backgroundAttachment = "fixed"

var numeroImagem = 1

setInterval(() => {
   img.style.backgroundImage = `url(../../assets/img/bg${numeroImagem}.jpg)`  
   numeroImagem ++
   if (numeroImagem == 4){
    numeroImagem = 1

   }
}, 3000);
