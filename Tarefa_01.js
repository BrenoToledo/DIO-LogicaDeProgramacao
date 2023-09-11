
/*
Breno Toledo

TODO: O Que deve ser utilizado

OK - Variáveis - const herois
OK - Operadores - Operadores Lógicos && > < 
OK - Laços de repetição - ForEach
OK - Estruturas de decisões - If ElsE

Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro 
Se XP for entre 1.001 e 2.000 = Bronze 
Se XP for entre 2.001 e 5.000 = Prata 
Se XP for entre 6.001 e 7.000 = Ouro 
Se XP for entre 7.001 e 8.000 = Platina 
Se XP for entre 8.001 e 9.000 = Ascendente 
Se XP for entre 9.001 e 10.000= Imortal 
Se XP for maior ou igual a 10.001 = Radiante

Saída
Ao final deve se exibir uma mensagem: "O Herói de nome {nome} está no nível de {nivel}"
*/

// Array de objetos para armazenar heróis e seus scores
const herois = [
    { nome: "Super-Herói 1", xp: 7500 },
    { nome: "Super-Herói 2", xp: 1500 },
    { nome: "Super-Herói 3", xp: 3000 },
  ];
  
  // Função para calcular o nível de um herói com base na XP
  function calcularNivel(xp) {
    if (xp < 1000) {
      return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
    } else {
      return "Radiante";
    }
  }
  
  // Itera sobre a lista de heróis e exibe o nível de cada um
  herois.forEach((heroi) => {
    const nivelDoHeroi = calcularNivel(heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelDoHeroi}`);
  });