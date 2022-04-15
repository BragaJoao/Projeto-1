const prompt = require('prompt-sync')();
console.clear();
//Definindo as perguntas que serão feitas para o usuário, e colocamos em um array.
let pergunta1 = "txt1";
let pergunta2 = "txt2";
let pergunta3 = "txt3";
let pergunta4 = "txt4";
let pergunta5 = "txt5";
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
let respostas = [];
//Para deixar o projeto mais divertido, estou adicionando consequencias, para cada um dos eventos antes de sabermos o desfecho final.
let txtSim1 = "txtSim1";
let txtSim2 = "txtSim2";
let txtSim3 = "txtSim3";
let txtSim4 = "txtSim4";
let txtSim5 = "txtSim5";
let txtSim = [txtSim1, txtSim2, txtSim3, txtSim4, txtSim5];

let txtNao1 = "TxtNao1";
let txtNao2 = "TxtNao2";
let txtNao3 = "TxtNao3";
let txtNao4 = "TxtNao4";
let txtNao5 = "TxtNao5";
let txtNao = [txtNao1, txtNao2, txtNao3, txtNao4, txtNao5];

let final = 0;

console.log(`Olá, vamos jogar um jogo! Por favor, responda com SIM ou NAO
 `);

console.log(`Historinha
`);


//Agora, vamos colocar o array em um loop de "for" que vai percorrer o índice zero, até o quatro, fazendo as 5 perguntas sucessivamente
//e suas respectivas consequências, que serão decididas em um condicionamente de if e if else. Assim, para fazer o usuário digitar corretamente
// usamos else, fazendo que para tudo que não seja a resposta, voltar um indice em 1, que assim que ele terminar o loop ele retornará para a pergunta que estava digitando incorretamente.


for(let i = 0; i <= 4; i++){
    console.log(perguntas[i]);
     console.log();
      let respostas = prompt("Digite sua resposta: ").toUpperCase();
     console.log();
    // Aqui usamos o .toUpperCase para aceitar mais opções de escrita do usuário.
    if(respostas == "SIM"){
      final = final + 1
    console.log();
      console.log(txtSim[i],);
    console.log();
    } else if (respostas == "NAO"){
        final = final
        console.log()
        console.log(txtNao[i])
        console.log()

    } else {
        console.log("Resposta inválida, por favor digite novamente: ")
        console.log()
        i= i - 1
    }
    }

//E por fim, usamos condicionois para mostras a pontuação do nosso usuário, == para comparar equivalência. E usamos "||" para aceitar um ou outro.
    if(final == 5){
        console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
      } else if(final == 4 ){
        console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
      } else if ( final == 3) {
        console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
      } else if ( final == 2 || final == 1) {
        console.log("Você falha, mas ainda consegue fugir da situação.");
      } else {
        console.log("Você falha miseravelmente.")
      }