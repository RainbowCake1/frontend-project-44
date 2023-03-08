import play from '../index.js';
import getRandNum from '../tools/randomnumbers.js';

const task = 'Find the greatest common divisor of given numbers.';

function findGcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
}

function gameGcd() {
  const num1 = getRandNum(16);
  const num2 = getRandNum(16);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2);
  return [question, answer];
}

const result = () => play(task, gameGcd);
export default result;
