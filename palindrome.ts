function isPalindrome(x: number): boolean {
  const stringNum = x.toString();
  const checkPal = stringNum.split("");
  for (let i = 0; i <= checkPal.length; i++) {
    let j = checkPal.length - 1 - i;
    if (checkPal[i] !== checkPal[j]) return false;
  }
  return true;
}

console.log(isPalindrome(102));
