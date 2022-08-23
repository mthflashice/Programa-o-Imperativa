//Strings
// Posssuem comportamento parecido com um objecto

// Propriedade = carastristicas das string

//let texto =01234567...8 ultimo
let texto = 'Meu Texto'
TextDecoder // 9 caract com o espaço
texto.includes('&') // true ou false
texto.substring(0,5) //Meu t //não Conto o 5

console.log(texto[texto.length -1]);
//m =0
//e=1
//u=2 ...



/*Arrays
coleção de dados indexadas  e sequencias  que podem unidimensionais ou bimensionais
biodimensionais --> Matrizes
 no Javacripy podem ser diferentes*/

 //                           0             1           2       3
let listaVeiculos =['BMW', 'Fusca,','Uno','Carroca']
let frutas=['limao', 'laranja']
let notas=[5, 10, 20, 50, 100]
let usuarios=[]
matriz


console.log(texto.substring(0,5));


let email = '1@1';

if(email.includes('@') && email.length >= 3){
  console.log('Email valido');
}else  {
  console.log('Email Inválido')
}


let numeros=[];
console.log(numeros.length);

//push adiiona  elementos finais do array
numeros.push(1,2,3,5,7)
console.table(numeros)

//ushift --> Adicona elementos no inicio do array
numeros.unshift(1000, 998);
console.table(numeros);

//pop --> remove o ultimo elemento
//shift --> remover o primeiro elemento

numeros.pop(); // função sem parametro // 5 vai ser removido
numeros.shift(); // 1000 vai ser removido
console.table(numeros)