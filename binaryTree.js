class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const searchTree = (node, data) => {
    if (data < node['data']) {
        if (node.left === null) {
            node.left = new Node(data);
            return;
        }

        return searchTree(node.left, data);
    } else if (data >= node['data']) {
        if (node.right === null) {
            node.right = new Node(data);
            return;
        }

        return searchTree(node.right, data);
    }
};

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        }

        searchTree(node, data);
    }

    findMin() {
        let current = this.root;

        if(current === null) {
            return 'No values inserted yet';
        }


        while (current.left !== null) {
            current = current.left;
        }

        return current.data;
    }

    findMax() {
        let current = this.root;

        if(current === null) {
            return 'No values inserted yet';
        }

        while (current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    isPresent(data) {
        let current = this.root;

        while(current) {
            if(current.data === data) {
                return true;
            } else if(current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    print(node = this.root, indent=4) {
        if(node === null) {
            return;
        }

        if(node.left)  this.print(node.left, indent + 4);
        if(node.right) this.print(node.right, indent + 4);

        console.log(" ".repeat(indent) + node.data);
    }
}

const binaryTree = new BinaryTree();

console.log(binaryTree.findMax());
binaryTree.add(1);
binaryTree.add(5);
binaryTree.add(-7);
binaryTree.add(4);
console.log('here');
console.log(binaryTree.findMin());
console.log(binaryTree.isPresent(4));
console.log(binaryTree.isPresent(10));
console.log(binaryTree.findMax());

binaryTree.print();
