/* var num =10;
var nome = "IFSP";
var msg = `Seja bem-vindo ${nome}. Voce tem ${num+2} mensagens`;
console.log(msg)


var idade = 20;
if(idade<13)
{
    console.log("Acesso negado");
}
else if(idade < 18 )
{
    console.log("Acesso limitado");
}
else
{
    console.log("Acesso ilimitado!");
}
*/

/*
var cidade = "SPO";
switch(cidade)
{
    case "CAM": 
        alert("Campinas");
        break;
    case "SPO": 
        alert("São Paulo");
        break;
    case "SCL": 
        alert("São Carlos");
        break;
    default:
        alert("Inválido");
        break;
}
 */


/* var i;
for(i=0;i<12;i++)
{
    console.log("Iteração numero: " + i);
} 

var cont = 0;
while(cont < 12)
{
    console.log("Iteração numero: " + cont);
    cont++;
}

var Cont = 0;
do{
    console.log("Iteração numero: " + Cont);
    Cont++;
}while(Cont<12); */

/* alert("Teste do algortimo");

var resp = confirm("Você está entendendo?");

if(resp === true)
{
    console.log("Entendi Sim");
}
else
{
    console.log("Não entendi. Help.");
}

var nome = prompt("Qual é seu nome?", "João");

if(nome!=null)
{
    alert("Olá " + nome);
} */


/* Exercícios de fixação
1 - Dada a fórmula de conversão de Fahrenheit para Celsius abaixo,
imprima no console todos as temperaturas F e C de -30ºC a 150ºC,
com incrementos de 10 em 10

2- ➢A sequência de Fibonacci é um exercício clássico de programação.
Nesse exercício, leia um número inteiro dado pelo usuário (N) e, caso
seja maior que zero, imprima no console os N primeiros números da
sequência de Fibonacci.
➢Lembrando que a sequência de Fibonacci é:
0 1 1 2 3 5 8 13 21 34 55.....

*/

/* var f = 0, c;
console.log("Graus em Farenheit de -30°C até 150°C");
for(c = -30; c <=150; c+=10)
{
    f = (c * 9/5) + 32;
    console.log(f +"°F");
}

console.log("Graus em Celsius de -30°F até 150°F");
for(f = -30; f<=150; f+=10)
{
    c = 5/9 * (f-32);
    console.log(c.toFixed(2) + "°C");
}
 */

let num = prompt("Digite um numero inteiro maior que zero: ");

while(num<=0)
{
    let num = prompt("Digite um numero inteiro maior que zero: ");
}

let termo1 = 0, termo2 = 1, proxTermo;

for(i=0; i<num; i++)
{   
    console.log(termo1); //0, 1, 1, 
    proxTermo = termo1 + termo2; //1, 2, 3
    termo1 = termo2; //1, 1, 2
    termo2 = proxTermo;//1, 2, 3
}