function alertaAgendamento(){
    console.log("Agendamento realizado com sucesso!")
}

var vetor_banner = ["../assets/images/img-banner-4.png", "../assets/images/img-banner-5.png", "../assets/images/img-banner-6.png"];
var posicao_vetor = 0;

function func_banner(){
    posicao_vetor = (posicao_vetor + 1) % 3;
    document.querySelector("#banner").src = vetor_banner[posicao_vetor]
}

setInterval(func_banner, 3000) 
