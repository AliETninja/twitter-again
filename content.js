// Crie um novo elemento de imagem
const novaImagem = document.createElement("img");

// Defina o atributo "src" da imagem com o URL da nova imagem
novaImagem.src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png";

// Selecione o elemento SVG a ser substituído
const elementoSVG = document.querySelector("svg.r-13v1u17.r-4qtqp9.r-yyyyoo.r-16y2uox.r-lwhw9o.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr");

// Substitua o elemento SVG pela nova imagem, mantendo seus atributos
if (elementoSVG && novaImagem) {
  elementoSVG.parentNode.replaceChild(novaImagem, elementoSVG);
}
