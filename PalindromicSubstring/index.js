function PalindromicSubstring(str) { 
  const n = str.length;
  const table = Array.from(Array(n), () => new Array(n).fill(false));
  let maxLength = 1;
  let start = 0;

  for (let i = 0; i < n; i ++) {
    table[i][i] = true;

    if (i < n - 1) {
      if (str[i] === str[i + 1]) {
        table[i][i + 1] = true;
        start = i;
        maxLength = 2;
      }
    }
  }

  for (let k = 3; k <= n; k ++) {
    for (let i = 0; i < n - k + 1; i ++) {
      let j = i + k - 1;

      if (table[i + 1][j - 1] && str[i] === str[j]) {
        table[i][j] = true;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  if (maxLength > 2) {
    return str.substring(start, start + maxLength);
  }

  return "none";
}
   
// keep this function call here 
console.log(PalindromicSubstring(readline()));