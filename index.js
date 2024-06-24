/* Exercício lógico de programação: 

-- Verificador de nível do Herói --
Declarando variáveis, utilizando operadores, laço de repetição e 
concatenando no resultado */

let nameHero = "Neflim"; // Nome do Herói
let xpHero = 1500; // Pontos de Experiência.
let nvHero = ""; // Nível atingido.

  for (let i=0; i < 8; i++){ //Verificando o Nível após aumentar o XP.
    if(xpHero < 1000){
        nvHero = "Ferro";
      } else if (xpHero <= 2000){
        nvHero = "Bronze";
      } else if (xpHero <= 5000){
        nvHero = "Prata";
      } else if (xpHero <= 7000){
        nvHero = "Ouro";
      } else if (xpHero <= 8000){
        nvHero = "Platina";
      } else if (xpHero <= 9000){
        nvHero = "Ascendente";
      } else if (xpHero <= 10000){
        nvHero = "Imortal";
      } else {
        nvHero = "Radiante";
      }

    // Exibindo o nível atual e atualizando com +1000 pontos de XP:
    console.log ("O nível do Herói " +nameHero+ " é " +nvHero+ "!");
    xpHero = xpHero + 1000
    console.log("+1000XP")
    }
  