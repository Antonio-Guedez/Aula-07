function somar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resultado.innerHTML = (`O resultado da soma entre ${num1} + ${num2} é: ${resu}`);
}
// nome em maisculo ou minusculo
var nome = window.prompt(`Qual seu nome`) //guarda o nome
    document.write(`Ola ${nome}, seu nome tem ${nome.length}letras <br>`);
    document.write(`Seu nome em maisculo é ${nome.toUpperCase()} <br>`);
    document.write(`Seu nome em minusculo é ${nome.toLowerCase()}`);


//organizar numeros
var n1 = 21.54578;
//n1.toFixed(2);
//n1.toFixed(2).replace('.',',')
window.alert(n1.toFixed(3).replace('.',','))


