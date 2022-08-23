const readlineSync = require('readline-sync');
console.log(`
  Bem-vindo ao X-podrão 
  Escolhe uma dentre as opções
  01 - X-Bancon
  02 - X-Salada
  03 - X-Egg
`);

const opcao = readlineSync.question('Escolha a sua opção: ');
console.log('\n\n');




switch(opcao){
    

    case '01':
        console.log('X-Bacon selecionado')
        break; //encerra o caso
        case'02':
    console.log('X-Salada selecionado')
    break;
    case'03':
    console.log('X-egg selecionado')
    break;
    //caso contrario das opçoes acima cases
    default:
        console.log('Opção-Inválida')

}

if(opcao === '01' || opcao === 1){
    console.log("X-bancon selecionado");
  } else if (opcao === '02' || opcao === 2){
    console.log("X-salada selecionado");
  } else if (opcao === '03' || opcao === 3){
    console.log("X-egg selecionado"); 
  } else {
    console.log('Opção inválida');
  }

//let media

let media = 7;
 let resultado = '';
 if(media > 7){
   resultado = 'Aprovado';
} else if(media > 5 && media <= 7) {
  resultado = 'Recuperação';
 } else {
   resultado = 'Reprovado';
 } 

let resultado2 = media >= 7 ? 'Aprovado' : 
media > 5 && media < 7 ? 'Recuperação' :
media == 8 ? 'Reprovado' : '';