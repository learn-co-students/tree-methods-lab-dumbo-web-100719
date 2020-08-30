function inOrder (currentNode) {
if(currentNode.left){
    inOrder(currentNode.left);
}
console.log(currentNode.data);
if (currentNode.right){
    inOrder(currentNode.right);
}  
}

function findOrAdd (currentNode, newNode) {
        if(currentNode.data === newNode.data){
        return true
        }
        else if(newNode.data < currentNode.data){
            if (!currentNode.left){
                currentNode.left = newNode;
                return;
            }
            else{
                findOrAdd(currentNode.left, newNode);
                return true;
            }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            }
            else {
                 findOrAdd(currentNode.right, newNode);
                 return true;
             }
         }
    return false;
 }

function max (currentNodeData) {
    while(currentNodeData.right){
        currentNodeData = currentNodeData.right 
    }
    let theMax = currentNodeData;
    return theMax;
}

function min (currentNodeData) {
    while(currentNodeData.left){
        currentNodeData = currentNodeData.left
        }
    let theMin = currentNodeData;
    return theMin;
}
