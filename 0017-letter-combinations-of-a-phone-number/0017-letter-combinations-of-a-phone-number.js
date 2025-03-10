/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == null || digits.length === 0) return [];

  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const results = [];

  function backtracking(index, letter) {
    if (index === digits.length) {
      results.push(letter);
      return;
    }
    const num = digits[index];
    const chars = letterMap[num];
    for (const char of chars) {
      backtracking(index + 1, letter + char);
    }
  }
  backtracking(0, "");

  return results;
};
