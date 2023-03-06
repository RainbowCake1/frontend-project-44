function randOperation() {
  const rnd = Math.round(Math.random() * 2 + 1);
  if (rnd === 1) {
    return '-';
  } if (rnd === 2) {
    return '+';
  }
  return '*';
}
export default randOperation;
