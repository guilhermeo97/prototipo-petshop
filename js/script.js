function alertaAgendamento(){
    console.log("Agendamento realizado com sucesso!")
}

var vetor_banner = ["../prototipo-petshop/assets/images/img-banner-4.png", "../prototipo-petshop/assets/images/img-banner-5.png", "../prototipo-petshop/images/img-banner-6.png"];
var posicao_vetor = 0;

function func_banner(){
    posicao_vetor = (posicao_vetor + 1) % 3;
    document.querySelector("#banner").src = vetor_banner[posicao_vetor]
}

setInterval(func_banner, 3000) 
