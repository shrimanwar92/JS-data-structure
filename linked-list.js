// linked list implementation

class LinkedListNode {
	
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(data) {
		// check if head is null
		// always for 1st node
		if(this.head == null) {
			this.head = new LinkedListNode(data);
			return this.head;
		}

		// this will be for 2nd node
		// set ref to head's next to 2nd node
		if(this.tail == null) {
			this.tail = new LinkedListNode(data);
			this.head.next = this.tail;
			return this.tail;
		}

		// this will be for 3rd node and so on
		// 1st set previous tail's ref to current node
		// 2nd set current tail
		this.tail.next = new LinkedListNode(data);
		this.tail = this.tail.next;
		this.tail.next = null;
		return this.tail;

	}
}

var l = new LinkedList();
l.add("1");
l.add("2");
l.add("3");