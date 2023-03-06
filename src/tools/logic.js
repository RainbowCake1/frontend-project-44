import readlineSync from 'readline-sync';

function play(task, game) {
  const round = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < round; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
export default play;
