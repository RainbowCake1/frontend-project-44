import play from '../index.js';
import randomInter from '../tools/randint.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function game() {
  const num = randomInter(2, 16);
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
}
export default play(task, game);
