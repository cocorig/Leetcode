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
var middleNode = function(head) {
    let count = 0; 
    let node = head;
   
     while (node) {
        count++;
        node = node.next
    }
    let mid = (Math.ceil(count/2))
    if(count % 2 === 0 ){
        mid  += 1;
    }
    node = head;
    console.log(node)
     for (let i = 0; i < mid - 1; i++) {
        node = node.next;
        console.log(node)
    }
    return node;
};