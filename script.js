let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMsg('⛔ No Number');
  } else if (guess === number) {
    displayMsg('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMsg(guess > number ? '👆🏼 too high!' : '👇🏼 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMsg('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = score;
  document.querySelector('.guess').value = '';
});
