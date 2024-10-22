class ListNode<T> {
    next: ListNode<T> | null = null;

    constructor(public value: T) {}
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    add(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }
        return current;
    }

    // Funkce pro výpis všech knih v seznamu
    getAll(): T[] {
        const allBooks: T[] = [];
        let current = this.head;
        while (current) {
            allBooks.push(current.value);
            current = current.next;
        }
        return allBooks;
    }
}

export default LinkedList;
