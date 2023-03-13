import play from '../index.js';
import getRandNum from '../tools/randomnumbers.js';

const task = 'What number is missing in the progression?';

const makeProgression = (startNum, maxLength, step) => {
  const numArr = [];
  for (let minNum = 0; minNum <= 10; minNum += 1) {
    numArr.push(startNum + minNum * step);
  }
  return numArr;
};

function game() {
  const startNum = getRandNum(5);
  const step = 2;
  const maxLength = 10;
  const temp = startNum;

  const result = makeProgression(startNum, maxLength, step);
  const take = getRandNum(makeProgression().length - 1);
  result[take] = '..';
  const question = result.join(' ');
  const answer = (temp + (step * take));
  return [question, answer];
}
const res = () => play(task, game);
export default res;
