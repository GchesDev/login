const meubotaao = document.getElementById("meuBotao");
const body = document.body;

let estadoAtual = 1;

meuBotao.addEventListener('click', function(){
    if (estadoAtual===1) {
        body.style.backgroundImage = "url('/assets/fundos.jpg')";
        estadoAtual = 2;
    }
    else if (estadoAtual=== 2) {
        body.style.backgroundImage = "url('/assets/animal.jpg')";
        estadoAtual = 1;
    }
});

