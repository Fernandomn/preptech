class LinkedList {
  constructor() {
    this.head = null;
  }

  insertBegin(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    // this.printList();
  }

  insertMiddleValue(data, dataLimitNode) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      if (current.data === dataLimitNode) {
        newNode.next = current;
        this.head = newNode;
      } else {
        while (current !== null && current.data !== dataLimitNode) {
          prev = current;
          current = current.next;
        }
        if (current) {
          newNode.next = current;
        }
        prev.next = newNode;
      }
    }
    // this.printList();
  }

  insertMiddlePosition(data, position) {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = this.head;
      let count = 0;
      while (current !== null && count < position) {
        prev = current;
        current = current.next;
        count++;
      }
      if (current) {
        newNode.next = current;
      }
      prev.next = newNode;
    }
    // this.printList();
  }

  insertEnd(data) {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next != null) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    // this.printList();
  }

  removeBegin() {
    const currentHead = this.head;
    if (this.head !== null) {
      this.head = this.head.next;
    }
    return currentHead;
  }

  removeMiddleValue(value) {
    if (this.head !== null) {
      let current = this.head;
      let prev = null;
      while (current.next !== null && current.data !== value) {
        prev = current;
        current = current.next;
      }
      if (current && current.data === value) {
        prev = current.next;
      }
    }
    // this.printList();
  }

  removeMiddlePosition(position) {
    if (this.head !== null) {
      let current = this.head;
      let prev = null;
      let counter = 0;
      while (current.next !== null && counter < position) {
        prev = current;
        current = current.next;
        counter++;
      }
      if (current) {
        prev.next = current.next;
      }
    }
    // this.printList();
  }

  removeEnd() {
    let result = this.head;
    if (this.head !== null) {
      let current = this.head;
      let prev = null;
      while (current.next !== null) {
        prev = current;
        current = current.next;
      }
      result = current;
      prev.next = null;
    }
    // this.printList();
    return result;
  }

  reverseList() {}

  middleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  length() {
    let counter = 0;
    let current = this.head;

    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  printList() {
    let pointer = this.head;
    let resultToPrint = '';

    while (pointer) {
      resultToPrint += `${pointer.data} -> `;
      pointer = pointer.next;
    }
    resultToPrint += 'null';
    console.log(resultToPrint);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const list = new LinkedList();
list.removeBegin();
list.removeEnd();
list.removeMiddlePosition(5);
list.removeMiddleValue('casa');
list.insertBegin(4);
list.insertEnd(8);
list.insertMiddleValue(7, 8);
list.insertBegin(`casa`);
list.removeMiddlePosition(2);
list.insertMiddleValue('amarela', 'casa');
list.insertMiddleValue(8, 9);
list.removeBegin();
list.insertMiddlePosition('pessoa', 7);
list.insertMiddlePosition(13, 1);
list.removeMiddleValue('amarela');
list.removeEnd();
list.insertMiddlePosition(49, 9);
// list.printList();

module.exports = LinkedList;
