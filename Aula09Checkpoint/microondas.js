function Microondas(comida, tempo)
    {
   if (comida == 'Pipoca') {
       TempoMicroondas(10, tempo);
   } else if (comida == 'Macarrao') {
      TempoMicroondas(8, tempo);
   } else if (comida == 'Carne') {
      TempoMicroondas(15, tempo);
   } else if (comida == 'Feijao') {
      TempoMicroondas(12, tempo);
   } else if (comida == 'Brigadeiro') {
      TempoMicroondas(8, tempo);
   } else {
       console.log('Comida inexistente');
   }
}
 function TempoMicroondas(tempoPadrao, tempoEscolhido){
   if (tempoEscolhido > tempoPadrao *3){
   console.log("Kabumm");
    } else if(tempoEscolhido > tempoPadrao  *2 ){
   console.log("Comida Queimou");
     } else if(tempoEscolhido < tempoPadrao ){
   console.log("Tempo Insuficiente");
     }else (
      console.log("Prato pronto, bom apetite!!!")
   )
   
 }
Microondas("Brigadeiro",10);

/* Grupo 4:
Douglas Golarte
Daniela Fuenmayor
Adam Conservani
Darlan Oliveira
Matheus Quirino Leite Lino
 */
    

