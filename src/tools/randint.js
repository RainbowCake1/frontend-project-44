function randomInter(min, max){
    const rand = Math.random()*(max-min) + min
    return Math.floor(rand)
}
export default randomInter