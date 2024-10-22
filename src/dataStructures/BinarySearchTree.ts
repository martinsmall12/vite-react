class TreeNode<T> {
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(public value: T) {}
}

class BinarySearchTree<T> {
    root: TreeNode<T> | null = null;

    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): boolean {
        if (!node) return false;
        if (value < node.value) return this.searchNode(node.left, value);
        if (value > node.value) return this.searchNode(node.right, value);
        return true;
    }
}

export default BinarySearchTree;
export { TreeNode };
