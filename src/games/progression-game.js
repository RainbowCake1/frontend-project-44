import play from '../tools/logic.js';
import randNum from '../tools/randomnumbers.js'; 

const task = 'What number is missing in the progression?'

function game(){
  let startNum = randNum(5);
  const step = 2;
  const maxLength = 6 + randNum(4);
  const temp = startNum

  const array = () =>{
    const numArr = [];
    for(let minNum = 0; minNum <= maxLength;minNum += 1){
      numArr.push(startNum);
      startNum += step
    }
    return numArr
  }


const result = array();
const take = randNum(array().length - 1);

    const question = () => {
        result[take] = '..';
        return result.join(' ');
    };

    const answer = () => (temp + (step * take));

    return [question(), answer()];
}
  const finn = play(task,game)
export default finn

