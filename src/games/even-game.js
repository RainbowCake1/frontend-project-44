import play from '../index.js';
import getRandNum from '../tools/randomnumbers.js';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = getRandNum(15);
  const answer = isEven(number);
  return [number, answer];
};

const st = () => play(task, game);
export default st;
