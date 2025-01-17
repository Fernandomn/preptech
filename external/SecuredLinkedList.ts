// Entrevista numero 02, dia 17/01/2025

/**
 * Consider the usual LinkedList:

class Node {
  String value;
  Node next;
}

In this problem, we’ll work with a different version, where each node contains a hash value:

class Node {
  String value;
  Node next;
  Integer hashValue;
}

hashValue = hash(own value + the hashValue of the next Node)

Goal: Implement SecuredLinkedList

// Adds node to the head of the chain
public void addValue(String value) {}

// Gets the nth node. Head = 0th
public Node getNode(int pos) {}

// Checks the compliance of the hash function
public boolean isValidChain() {}

// Inserts at arbitrary position
public void insert(String value, int pos) {}

------------------------------------------
 */

class SecureNode {
  value: string;
  next: SecureNode | null;
  hashValue: number;

  constructor(value?: string) {
    this.value = value || '';
    this.next = null;
    this.hashValue = 0;
  }
}

class SecuredLinkedList {
  head: SecureNode | null;

  constructor() {
    this.head = null;
  }

  //T: O(1) // S: O(1)
  private hash(values: string): number {
    // ...
    return 0; // placeholder
  }

  // T: O(1) // S: O(1)
  public addValue(value: string): void {
    const newNode = new SecureNode();
    newNode.value = value;

    if (!this.head) {
      this.head = newNode;
      newNode.hashValue = this.hash(newNode.value);
    } else {
      newNode.next = this.head;
      this.head = newNode;
      newNode.hashValue = this.hash(`${newNode.value}${newNode.next.value}`);
    }
  }

  // FOLLOW UP!
  // T: O(n) // S: O(n)
  public insert(value: string, pos: number): void {
    if (!this.head) {
      throw new Error('The list is empty.');
    }
    if (pos === 0) {
      this.addValue(value);
      return;
    }

    const newNode = new SecureNode();
    newNode.value = value;
    let current: SecureNode | null = this.head;
    let prev: SecureNode | null = null;
    let counter: number = 0;
    const stack: SecureNode[] = [];

    // O(n)
    while (current && counter < pos) {
      stack.push(current);
      prev = current;
      current = current.next;
      counter++;
    }

    if (prev && counter == pos) {
      newNode.next = current;
      prev.next = newNode;

      newNode.hashValue = this.hash(
        `${newNode.value}${newNode.next ? newNode.next.hashValue : ''}`
      );

      // O(n)
      while (stack.length) {
        let node = stack.pop();
        if (node) {
          node.hashValue = this.hash(
            `${node.value}${node.next ? node.next.hashValue : ''}`
          );
        }
      }

      return;
    }

    throw new Error('The list has not the desired position.');
  }

  //T: O(n) // S: O(1)
  public getNode(pos: number): SecureNode {
    let counter: number = 0;
    let current: SecureNode | null = this.head;

    while (current && counter < pos) {
      current = current.next;
      counter++;
    }

    if (current) {
      return current;
    }

    throw new Error('Unable to find the desired node.');
  }

  //T: O(n) // S: O(n) // Follow-up: detect loops!
  public isValidChain(): boolean {
    if (!this.head) {
      return true;
    }

    let current: SecureNode | null = this.head;
    let set = new Set();

    while (current) {
      if (
        set.has(current) ||
        current.hashValue !==
          this.hash(
            `${current.value}${current.next ? current.next.hashValue : ''}`
          )
      ) {
        return false;
      }

      set.add(current);
      current = current.next;
    }

    return true;
  }
}
