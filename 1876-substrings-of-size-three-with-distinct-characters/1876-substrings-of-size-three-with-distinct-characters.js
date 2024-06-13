/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  const num = 3;
  const seen = {};
  let start = 0;
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in seen) {
      start = Math.max(start, seen[char] + 1);
    }
    seen[char] = i;
    const size = i - start + 1;

    if (size >= num) {
      cnt++;
    }
  }
  return cnt;
};