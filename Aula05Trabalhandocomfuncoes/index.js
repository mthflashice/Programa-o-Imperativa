const nome = "José"
const sobrenome =" da Silva"
const idade = 27
const peso = 83.5
const altura = 1.7
const temPplano = true
const IMC = peso/(altura*altura) 
// Template strings
const msg = '${nome} ${sobrenome} tem ${idade} anos e indice corporal  é de' + IMC.toFixed
// const msg= nome+ ' ' + sobrenome + ' tem ' + idade + ' anos e seu indice de massa corporal' + IMC
console.log(msg)


/*Declaração
palaavras reservas a função
palavra reservada  function
nome de regras ->
return -> palavra reservada a retornar/ devolver 

Obs: caso não coloque  return, automaticamente  será para nós um valor unidefined
Obs2: Após  o return, nada será  exutado pois  encerra a função
Obs3: As funcoes tem visibilidade Global
parecedida com o Var*/
 

function minhaPrimeiraFuncao()
    console.log( "Exeutando a minha primeira função")



// Chamar/ Exeucção/ Invocação de função
// chamar a função pelo nome que foi dado seguido das ()

const retornoDaPrimeiraFuncao = minhaPrimeiraFuncao()
console.log(retornoDaPrimeiraFuncao)

/*
Os passametros -> São variaves recebidos na hora de chamar a função
*/
function soma(num1 = 0 , num2 = 0){
    //num1 = 5
    // num2 = 3
    console.log(num1+' ' +num2)
    return num1 + num2;
}

soma();

function IMC( nome, sobrenome, idade, peso , altura )
const IMC  =peso/(altura*altura)
return   '${nome} ${sobrenome} tem ${idade} anos e indice corporal  é de' + IMC.toFixed


//declaração de função
function minhaFuncao(param1,param2, param3){
    let resultado = (param1 + param2 )/param3;

}
//chamada de funcao
const retorno =minhaFuncao(5,6,7)

/*
Função expressa
-> armanagemento de uma função em uma variavel

 */


/*
 */