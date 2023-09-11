
/*
Breno Toledo

TODO: # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

// Array de objetos para armazenar heróis e seus scores
const herois = [
    { nome: "Heroi-1", vitorias: 50, derrotas: 40 },
    { nome: "Heroi-2", vitorias: 50, derrotas: 30 },
    { nome: "Heroi-3", vitorias: 50, derrotas: 32 },
  ];
  
  // Função para calcular o nível de um herói com base na XP
  function calcularNivel(xp) {
    if (xp <= 10) {
      return "Ferro";
    } else if (xp >= 11 && xp <= 20) {
      return "Bronze";
    } else if (xp >= 21 && xp <= 50) {
      return "Prata";
    } else if (xp >= 51 && xp <= 80) {
      return "Ouro";
    } else if (xp >= 81 && xp <= 90) {
      return "diamante";
    } else if (xp >= 91 && xp <= 100) {
      return "Lendário";
    } else if (xp >= 101) {
      return "Imortal";
    }
  }
  
  // Função para calcular as vitórias do jogador
  function saldoVitorias(vitorias,derrotas) {
    
    return vitorias-derrotas;

  } 

  // Itera sobre a lista de heróis e exibe o nível de cada um
  herois.forEach((heroi) => {
    console.log(`O Herói de nome ${heroi.nome} tem saldo de ${saldoVitorias(heroi.vitorias, heroi.derrotas)} e está no nível de ${calcularNivel(saldoVitorias(heroi.vitorias, heroi.derrotas))}!`);
  });