/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  if (head.val === head.next.val) {
    while (head.next !== null && head.val === head.next.val) {
      head = head.next;
    }
    return deleteDuplicates(head.next);
  } else {
    head.next = deleteDuplicates(head.next);
    return head;
  }
};

