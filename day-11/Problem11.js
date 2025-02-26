// Bonus Problem: Implement a Stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty()); 