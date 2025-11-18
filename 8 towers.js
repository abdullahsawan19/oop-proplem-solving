function towerCombination(n) {
  let result = 1n;
  
  while (n > 0) {
    result *= BigInt(n);
    n--;
  }
  
  return result;
}