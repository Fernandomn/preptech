class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(item) {
    const newnode = new Node(item);
    if (this.isEmpty()) {
      this.front = newnode;
      this.rear = newnode;
    } else {
      this.rear.next = newnode;
      this.rear = this.rear.next;
    }
  }

  dequeue() {
    if (this.isEmpty()) return;

    this.front = this.front.next;
  }

  getFront() {
    return this.front;
  }

  printQueue() {
    let pointer = this.front;
    let resultToPrint = '';

    while (pointer) {
      resultToPrint += `${pointer.data} -> `;
      pointer = pointer.next;
    }
    resultToPrint += 'null';
    console.log(resultToPrint);
  }
}


const fila = new Queue()
fila.enqueue(1);
fila.printQueue();
fila.enqueue(2)
fila.printQueue();
fila.enqueue(3);
fila.printQueue();
fila.dequeue();
fila.printQueue();