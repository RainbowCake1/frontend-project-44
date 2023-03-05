import play from "../tools/logic.js";
import randomInter from "../tools/randint.js";

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function prime(num) {
    for(let i = 2; i < num; i++) {
       if(num % i === 0) return 'no';
    }
    return 'yes';
   }

function game(){
    const num = randomInter(2,16);
    const question = `${num}`;
    const answer = prime(num);
    return [question,answer]
}
export default play(task,game)