/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    return univalTree(root, root.val);
};

function univalTree(node, testValue){
    if(nodeTest(node.val, testValue) == false){
        return false;
    }
    if(node.left != null){
        if(univalTree(node.left, testValue) == false){
            return false;
        }
    }
    if(node.right != null){
        if(univalTree(node.right, testValue) == false){
            return false;
        }
    }
    return true;
}

function nodeTest(value, testValue){
    if(value != testValue){
        return false;
    }
    return true;
    
}
