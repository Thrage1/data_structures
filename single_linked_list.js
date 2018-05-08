class LinkedList{
  constructor(val = null){
    this.head = new ListNode(val);
  }
  append(val){
    let appended = new ListNode(val);
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = appended;
  }
  print(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}
class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
