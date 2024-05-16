alert("Boas-vindas ao jogo do número secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); //uso de template string
    if(chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o número secreto "${numeroSecreto}". Qtd de tentativas: ${tentativas} `);
    }
    else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        else {
            alert(`O número secreto é MENOR que ${chute}`);
        }
        tentativas++;
        console.log(tentativas);
    }
}