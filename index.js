class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Notes: 
// why its happening 

// What's the repeated pattern?

function countUnivalSubtrees(root) {
    // helper
    let count = 0;

    function isUnivalTree(node) {
        // 2. Base: what that 
        if (!node) {
            return true;
        }

        // Check if the left and right subtrees are unival
        const isLeftUnival = isUnivalTree(node.left);
        const isRightUnival = isUnivalTree(node.right);

        // Check if the current node is part of a unival subtree
        if (
            isLeftUnival &&
            isRightUnival &&
            (node.left === null || node.left.val === node.val) &&
            (node.right === null || node.right.val === node.val)
        ) {
            count++;
            return true;
        }

        return false;
    }

    isUnivalTree(root);
    return count;
}

// Example usage:
const root = new TreeNode(
    5,
    new TreeNode(1, new TreeNode(5), new TreeNode(5)),
    new TreeNode(5, null, new TreeNode(5))
);
console.log(countUnivalSubtrees(root)); // Output: 4
