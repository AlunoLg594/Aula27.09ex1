document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var n1 = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    var n2 = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    document.getElementById("n1").innerText = n1;
    document.getElementById("n2").innerText = n2;
    var botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);

  

}

function verifica() {
    var conta = parseInt(document.getElementById("n1").innerHTML) + parseInt(document.getElementById("n2").innerHTML);

    var res = parseInt(document.getElementById("campo").value);

    console.log(conta, res);
    if(res === conta)
    navigator.notification.alert("Você acertou", acertou(), "parabéns!");

}

function acertou(){
    var n1 = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    var n2 = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    document.getElementById("n1").innerText = n1;
    document.getElementById("n2").innerText = n2;

    document.getElementById("campo").value = "";
}
