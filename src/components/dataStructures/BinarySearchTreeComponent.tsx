import BinarySearchTree, {TreeNode} from "../../dataStructures/BinarySearchTree.ts";
import {useState} from "react";

interface TreeNodeComponentProps<T> {
    node: TreeNode<T> | null;
}

const TreeNodeComponent = <T extends string | number>({ node }: TreeNodeComponentProps<T>) => {
    if (!node) return null;

    const hasLeftChild = !!node.left;
    const hasRightChild = !!node.right;

    return (
        <details style={{ marginLeft: '20px' }}>
            <summary>Hodnota: {node.value}</summary>
            <div style={{ marginLeft: '10px' }}>
                {hasLeftChild && (
                    <div>
                        <strong>Levý potomek:</strong>
                        <TreeNodeComponent node={node.left} />
                    </div>
                )}
                {hasRightChild && (
                    <div>
                        <strong>Pravý potomek:</strong>
                        <TreeNodeComponent node={node.right} />
                    </div>
                )}
            </div>
        </details>
    );
};

// Hlavní komponenta pro správu a vykreslení stromu
const BinarySearchTreeComponent: React.FC = () => {
    const [bst] = useState(() => {
        const tree = new BinarySearchTree<number>();
        tree.insert(50);
        tree.insert(30);
        tree.insert(70);
        tree.insert(20);
        tree.insert(40);
        tree.insert(60);
        tree.insert(80);
        return tree;
    });

    bst.search(30); // Výstup: true

    return (
        <div>
            <h1>Vizualizace binárního vyhledávacího stromu</h1>
            <TreeNodeComponent node={bst.root} />
        </div>
    );
};

export default BinarySearchTreeComponent;
