/*
Aula 7
>
>/
<
</
==
=/=



 */

// Verdadeiro ou falso -> boolean
//true e false
let resultado  = 6>4 //true
//igualdade dupla ou igualdade simples
console.log(5=='5') //não compara o tipo do dado

//igualdade tripla ou estratamente igual
//compara o tipo e valor
//mais segura
.console.log ('5'===5); //falso

//diferença simples !==
console.log('4'!=4) //true

//diferença tripla
console.log('4'!==4)//true

console.log(!(5>4)); //falso

//se algo for verdadeira faça alguma coisa
if(true){
    //fazer alguma coisa
    console.log( '')
}
//caso contrario seja falso faça alguma coisa
else{
    //false
}
    // !! true -> true
    //volta para o verdadeiro
    //!!! true -> !true

let a = 'Hoje vai chover'  // quando chover
let b = 'Hoje vou ao cinema'

a && b // false //se ocorre apenas um

//dentro do && quando encontra um falso, automaticamente tudo é Falso

 a = ' Ou Hoje vai chover'  //  OU um pelo menos em Veradede
 b = ' Ou Hoje vou ao cinema'
/*a b  a || b
V   V       V
F   V       V
V   F       V
F   F       F
 
 */

let minhaVariavel  = true;// true ou false
let meuNumero =  0 // falso
let meuNumero2 = 7.4 //  verdadeira, qualquer número que não é zero
let meuTexto = ' ' // falso
let meuTexto2 = 'alguma coisa ' // true verdadeiro
// se a variavel não estiver  vazia meutexto faça alguma coisa

/* 
if/else
 - Servir para controlar o fluxo da aplicação  e para tomada de deciçoes
 if -> true

*/

if (false){
    console.log() // nao funciona
}

let media = 6.9 || (media >=6.8 && 'frequencia' >=90);
//a media do aluno 7 aprovado igual ou maior
// caso contrario aluno reprovado

let media = 6.9999999999999;
let frequencia = 90;

// Se a media do aluno for maior ou igual do que 7 então aluno aprovado 
// Caso contrário a média seja menor então aluno reprovado
if(media >= 7 || (media >= 6.8 && frequencia >= 90)){
  console.log('Aluno aprovado');
} else if(media >= 5 && media < 7) {
  console.log('Aluno de recuperação');
} else if(media >= 3 && media < 5) {
  console.log('Aluno reprovado');
}
