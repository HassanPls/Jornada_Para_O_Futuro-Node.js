const p1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const p2 = {
  nome: "Bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "reta";
      break;

    case random < 0.66:
      result = "curva";
      break;

    default:
      result = "confronto";
      break;
  }

  return result;
}

async function logRollResult(cName, block, diceResult1, attribute) {
  console.log(
    `${cName} 🎲 rolou um dado de ${block} ${diceResult1} + ${attribute} = ${diceResult1 + attribute}`,
  );
}

async function playRaceEngine(c1, c2) {
  for (let i = 1; i <= 5; i++) {
    console.log(`🏁 Rodada ${i}! 🏁`);

    // draw the type of the lane
    let block = await getRandomBlock();
    console.log(`Tipo de pista: ${block}`);

    // roll dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // test skills
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block == "reta") {
      totalTestSkill1 = diceResult1 + c1.velocidade;
      totalTestSkill2 = diceResult2 + c2.velocidade;

      logRollResult(c1.nome, "velocidade", diceResult1, c1.velocidade);
      logRollResult(c2.nome, "velocidade", diceResult2, c2.velocidade);
    } else if (block == "curva") {
      totalTestSkill1 = diceResult1 + c1.manobrabilidade;
      totalTestSkill2 = diceResult2 + c2.manobrabilidade;

      logRollResult(
        c1.nome,
        "manobrabilidade",
        diceResult1,
        c1.manobrabilidade,
      );
      logRollResult(
        c2.nome,
        "manobrabilidade",
        diceResult2,
        c2.manobrabilidade,
      );
    } else if (block == "confronto") {
      let powerResult1 = diceResult1 + c1.poder;
      let powerResult2 = diceResult2 + c2.poder;

      console.log(`${c1.nome} confrontou com ${c2.nome}! 🥊`);

      logRollResult(c1.nome, "poder", diceResult1, c1.poder);
      logRollResult(c2.nome, "poder", diceResult2, c2.poder);

      if (powerResult1 > powerResult2) {
        if (c2.pontos > 0) c2.pontos--;
        console.log(
          `${c1.nome} venceu o contronto! ${c2.nome} perdeu 1 ponto! 🐢`,
        );
      } else if (powerResult1 < powerResult2) {
        if (c1.pontos > 0) c1.pontos--;
        console.log(
          `${c2.nome} venceu o contronto! ${c1.nome} perdeu 1 ponto! 🐢`,
        );
      }
    }

    // verify the winner
    if (block != "confronto") {
      if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${c1.nome} marcou um ponto!`);
        c1.pontos++;
      } else if (totalTestSkill1 < totalTestSkill2) {
        console.log(`${c2.nome} marcou um ponto!`);
        c2.pontos++;
      } else {
        console.log("Resultou em um empate!");
      }
    }

    console.log("-----------------------------------------------");
  }
}

async function declareWinner(c1, c2) {
  console.log("🏁 Resultado final 🏁\n");
  console.log(`${c1.nome}: ${c1.pontos} pontos(s)\n`);
  console.log(`${c2.nome}: ${c2.pontos} pontos(s)\n`);

  if (c1.pontos > c2.pontos) {
    console.log(`${c1.nome} venceu a corrida! Parabéns! 🏆`);
  } else if (c1.pontos < c2.pontos)
    console.log(`${c2.nome} venceu a corrida! Parabéns! 🏆`);
  else {
    console.log("A corrida terminou em empate!");
  }
}

(async function main() {
  console.log(`🏁 Corrida entre ${p1.nome} e ${p2.nome} começando... 🏁\n`);

  await playRaceEngine(p1, p2);

  await declareWinner(p1, p2);
})();
