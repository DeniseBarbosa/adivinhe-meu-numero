'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //Quando não ha entrada..
  if (!guess) {
    document.querySelector('.message').textContent = 'Espaço esta vazio!';
    //Quando o jogador vence..
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Vc acertou';
    document.querySelector('.number').textContent = secretNumber;

    // A cor muda quando o jogador ganha e caixa que fica o numero aumenta too
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Quando a estimativa é muito alta..
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '(muito quente) MUITO ALTO';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Fim de jogo para você!!!';
      document.querySelector('.score').textContent = 0;
    }

    //Quando a estimativa é muito baixa
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '(muito frio) MUITO BAIXO';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Fim de jogo para você!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Comece a adivinhar...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  ducument.querySelector('.number').style.width = '15rem';
});
