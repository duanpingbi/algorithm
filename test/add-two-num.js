/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */

const ListNode = function(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const addNumber = (l1, l2, c) => {
    if(!l1 && !l2) {
        return;
    }
    if(!l1) {
        l2 = l2.next;
    }
}

const addTwoNumber = (l1, l2) => {
    return addNumber(l1, l2, 0);
}