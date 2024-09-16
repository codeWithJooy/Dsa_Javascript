class Stack {
  private items: number[];
  private size: number;
  constructor(n: number) {
    this.items = [];
    this.size = n;
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  isFull(): boolean {
    return this.items.length === this.size;
  }
  push(val: number): void | string {
    if (!this.isFull()) {
      this.items.push(val);
      return;
    }
    return "Stack Is Full";
  }
  pop(): number | string {
    if (!this.isEmpty()) {
      return this.items.pop() as number;
    }
    return "Stack is Empty";
  }
  peek(): number | string {
    if (!this.isEmpty()) return this.items[this.items.length - 1];
    return "Stack is Empty";
  }
  len(): number {
    return this.items.length;
  }
  clear():void{
    this.items=[]
  }
}

const stack=new Stack(3)
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());  // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.len());  // Output: 2
console.log(stack.isEmpty());// Output: false
stack.clear();
console.log(stack.isEmpty())

