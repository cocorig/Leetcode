/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   let prev = null;
  let current = head;
  let stack = [];
  let reversedStack = [];
  while (current) {
    let next = current.next;
    current.next = prev;
    stack.push(current.val);
    prev = current;
    current = next;
  }

  while (prev) {
    reversedStack.push(prev.val);
    prev = prev.next;
  }

  return JSON.stringify(stack) === JSON.stringify(reversedStack); 
};