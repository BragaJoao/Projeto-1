const prompt = require("prompt-sync")();
console.clear();

//Definindo as perguntas que serão feitas para o usuário, e colocamos em um array.
let pergunta1 = "O primeiro local que visitado, a primeira vista tem muito em comum com uma fantasia medieval, logo Xavier nota não é qualquer lugar e sim a terra média e conforme foi se aventurando ele descobre que a história tomou um rumo diferente, e o anel estava nas mãos de Gollum. Xavier deve enfrenta-lo e retomar o Um Anel?  ";
let pergunta2 = "Seguindo sua jornada, ele se depara no mundo de um de seus jogos favoritos, e acompanha Cloud em sua aventura por Gaia, e nos últimos momentos da aventura Cloud devido a seus traumas decide jogar tudo para trás. Nosso herói deve recitar um discurso de encorajamento para Cloud?  ";
let pergunta3 = "Agora nosso valente Xavier se encontra em um castelo encantado e não demora a perceber que estava em Hogwarts, só que Harry não estava lá para recuperar a pedra filosofal. Deve Xavier assumir o lugar do protagonista e ir em busca da pedra? ";
let pergunta4 = "Dessa vez ele é visto em uma galáxia muito, mas muito distante, tendo que acompanhar a jornada do jovem Luke Skywalker, que perdeu seu sabre jedi e não conseguiu concluir seu treinamento jedi. Ao fim da jornada, resta apenas a Xavier subir na nave e destruir a estrela da morte, ele deve aceitar essa missão?";
let pergunta5 = "Para sua ultima missão, estranhamente Xavier está de volta na Terra, próximo a uma casa que estava prestes a ser demolida, quando derrepende uma voz dos céus fala que a própria Terra seria demolida para a construção de uma rodovia intergalática. Ford Prefect amigo de Arthur Dent, lhe oferece uma toalha, Xavier deve aceitar aceitar?";
let perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
let respostas = [];

//Para deixar o projeto mais divertido, estou adicionando consequencias para cada um dos eventos, antes de sabermos o desfecho final.
let txtSim1 = "Xavier acaba tendo uma luta épica em frente a montanha que forjou o famoso Anel e com muita dificuldade consegue recupera-lo. Assim ele levou consigo o objeto para a Torre do Tempo, para que pudessem recuperar o rumo da história.";
let txtSim2 = "Sentindo-se encorajado pelas palavras de Xavier, Cloud e seus amigos avançam para o embate final com Sephirot. E no final Xavier resgata Masamune espada de sephirot e o item necessário para sua missão. ";
let txtSim3 = "Descobrindo que é capaz de usar as magias daquele universo, Xavier passa por todas as provações e no final vence Quirell, ficando em posse da pedra filosofal.";
let txtSim4 = "Xavier mostra sua maestria ao pilotar uma xwing, e consegue destruir com sucesso a estrela da morte, salvando a aliança rebelde,  parte dos destroços da estrela da nave caíram to planeta ao qual ele estava, coincidentemente neles haviam o item que ele devia recuperar, o sabre de luz de Luke. Agora Xavier se dirige para sua ultima missão";
let txtSim5 = "Sabendo exatamente em que história ele estava dessa vez, Xavier aceita prontamente, sabendo que a toalha era o item mais essencial do universo. Juntos ele conseguem chegar até o restaurante do fim do universo, onde se separam e Xavier leva sua toalha para a Máquina do Tempo e finalmente concluir sua jornada e restaurar, e tentar restaurar o multiverso junto com o espaço e o tempo.";
let txtSim = [txtSim1, txtSim2, txtSim3, txtSim4, txtSim5];

let txtNao1 = "Decidindo fazer uma retirada estratégica e fazer um plano para capturar Gollum, Xavier deixa de escapar sua única chance de captura-lo já que o mesmo começou adentrar nas fendas das montanhas em locais que nunca mais pudesse ser visto e separado de seu precioso anel.";
let txtNao2 = "Fugindo de sua responsabilidade, Cloud foge de sua equipe, e Sephirot absorve com sucesso todo o poder do planeta, selando assim o destino daquele universo.";
let txtNao3 = "Se vendo incapaz de fazer qualquer coisa, ele decide esperar por Harry para ajuda-lo a recuperar a Pedra, só que o mesmo nunca aparece e Voldemort consegue recuperar seu poder muito mais cedo do que esperado, trazendo um período de trevas para o mundo da magia. ";
let txtNao4 = "Ao permitir não aceitar a missão, e permitir que Luke ao qual não tinha recebido seu treinamento jedi subisse na X-Wing, um desatre aconteceu onde ele não conseguiu eliminar a Estrela da Morte e o Império Galático dezimou os rebeldes e qualquer oposição que ele teria no domínio da galáxia. ";
let txtNao5 = "Não aceitando a toalha, Xavier não embarca na aventura com ambos e forçado a se retirar dessa versão alternativa do mundo devido a destruição da forçada da Terra, assim volta de mãos atadas para a Torre do Tempo e tentar descobrir se mesmo com essa falha, sua missão foi de alguma maneira um sucesso.";
let txtNao = [txtNao1, txtNao2, txtNao3, txtNao4, txtNao5];
// variável responsavel pela contagem das respostas.
let final = 0;

console.log(`Olá, vamos começar o jogo da jornadado herói!

Vamos acompanhar Xavier, que certo dia que se depara com uma situação inusitada e o destino de todo o multiverso em suas mãos!
Por favor, responda as perguntas com SIM ou NAO

 `);

console.log(` Certo dia Xavier, um rapaz franzino e de estatura média estava estava segurando em suas mãos seu currículo e indo fazer sua primeira entrevista de emprego. Mal sabia ele que que sua vida estava prestes a mudar, 
conforme Xavier andava pelas ruas de São Paulo, já a algumas quadras de seu destino uma ventania começou a soprar em rajadas que de começo eram suaves como brisa, refrescantes para um dia de verão, mas a cada nova rajada o 
vento se intensifica a ponto de nosso herói, não conseguir se mover, quando derrepente.   Seu currículo que estava em sua mão, sai voando em direção a uma viela escura e nebulosa, então preocupado em estragar tudo logo em 
sua primeira tentativa, sem exitar ele avança em direção aquele breu.

.
..
...

  Ao passar pela viela, Xavier percebe que o ar ficou mais pesado, e a cada respiração um vento seco rasgava garganta, assustado ele percebe que não está mais em São Paulo e sim em uma cidade que ao mesmo tempo em que parecia 
estar no auge da inovação, demonstra isolação, com seu céu vermelho sangue mostrando que a terra que residia abaixo dele, já há muito não via prosperidade suas cidades inospitas onde o silêncio deixa qualquer um louco. 
Ele seguiu em direção ao local que mais se chamava atenção de tudo que ele estava presenciando, uma torre monumental como se estivesse ligando a terra ao céu, uma construção impossível  até se imaginal que era possivel ser concluida.

  Adentrando aquele monumento, Xavier encontra um grupo de senhores, com trajes desgastados e que pareciam que a muito não se alimentavam. Eles lhe contaram que os universos estavam entrando em colapso se fundindo e desorientando a máquina
do tempo que controlava como o multiverso devia fluir, também disseram a ele que o destino o escolheu a ser aquele que salvaria todos o mundos e permitira que as águas do tempo voltassem a fluir da maneira correta.
  Assim ele recebeu a missão, de resgatar os 5 objetos da eternida e os colocar novamente em seus lugares de direito na Torre do Tempo. Xavier com medo e ainda confuso, acreditando que aquilo que se passava diante de seus olhos era um sonho 
de tão irreal o que estava sendo observado, acaba aceitando o seu destino e seguem em direção a sua nova aventura.
`);

//Agora, vamos colocar o array em um loop de "for" que vai percorrer o índice zero, até o quatro, fazendo as 5 perguntas sucessivamente
//e suas respectivas consequências, que serão decididas em um condicionamente de if e if else. Assim, para fazer o usuário digitar corretamente
// usamos else, fazendo que para tudo que não seja a resposta, voltar um indice em 1, que assim que ele terminar o loop ele retornará para a pergunta que estava digitando incorretamente.

for (let i = 0; i <= 4; i++) {
  console.log(perguntas[i]);
  console.log();
  let respostas = prompt("Digite sua resposta: ").toUpperCase();
  console.log();
  // Aqui usamos o .toUpperCase para aceitar mais opções de escrita do usuário.
  if (respostas == "SIM") {
    final = final + 1;
    console.log();
    console.log(txtSim[i]);
    console.log();
  } else if (respostas == "NAO") {
    final = final;
    console.log();
    console.log(txtNao[i]);
    console.log();
  } else {
    console.log("Resposta inválida, por favor digite novamente: ");
    console.log();
    i = i - 1;
  }
}

//E por fim, usamos condicionois para mostras a pontuação do nosso usuário, == para comparar equivalência. E usamos "||" para aceitar um ou outro.
if (final == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
} else if (final == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else if (final == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
} else if (final == 2 || final == 1) {
  console.log("Você falha, mas ainda consegue fugir da situação.");
} else {
  console.log("Você falha miseravelmente.");
}
