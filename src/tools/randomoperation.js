function randOperation() {
    const rnd = Math.round(Math.random() * 2 + 1);
    if (rnd === 1) {
     return '-'
    } else if ( rnd === 2) {
     return '+'
    } else {
     return '*'
    }
   }
   export default randOperation