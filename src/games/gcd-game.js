import play from '../tools/logic.js';
import randNum from '../tools/randomnumbers.js';

const task = 'Find the greatest common divisor of given numbers.';

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

function gameGcd() {
  const num1 = randNum(16);
  const num2 = randNum(16);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return [question, answer];
}

const result = () => play(task, gameGcd);
export default result;
