
let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")
let botao = document.querySelector(".saiba-mais")
let nomedoSite = document.querySelector(".span")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(corTrocada){
    circulo.style.background = corTrocada
    botao.style.background = corTrocada
    nomedoSite.style.color = corTrocada
}
