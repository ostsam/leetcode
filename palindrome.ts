function isPalindrome(x: number): boolean {
  const stringNum = x.toString();
  const checkPal = stringNum.split("");
  for (let i = 0; i <= checkPal.length; i++) {
    let j = checkPal.length - 1 - i;
    for (let j = checkPal.length - 1 - i; j >= 0; j--) {
      if (checkPal[i] !== checkPal[j]) return false;
      break;
    }
  }
  return true;
}

console.log(isPalindrome(102));
