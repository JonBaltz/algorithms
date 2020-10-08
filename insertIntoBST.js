// https://leetcode.com/problems/insert-into-a-binary-search-tree/

const insertIntoBST = function(root, val) {
    if (!root) {
        root = new TreeNode(val);
        return root;
    }
    if (val > root.val) {
        if (root.right === null) {
            root.right = new TreeNode(val);
        } else {
            insertIntoBST(root.right, val);
        }
    } else {
        if (root.left === null) {
            root.left = new TreeNode(val);
        } else {
            insertIntoBST(root.left, val);
        }
    }
    return root;
};
