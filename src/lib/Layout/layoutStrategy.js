import cs from '../Layout/childLayoutStrategy'
import rs from '../Layout/ruleLayoutStrategy'

function logic_right (nodesArray) {
    for(var node of nodesArray) {
        if (node.hasChild()) {
            node.ruleArea.strategy = rs.rightCenter
            node.childrenArea.strategy = cs.columnLeft
        }
    }
}

function logic_left (nodesArray) {

}

function logic_left_right (nodesArray) {
    for(var node of nodesArray) {
        if (node.hasChild()) {
            if (node.isRoot()) {
                node.ruleArea.strategy = rs.center
                node.childrenArea.strategy = cs.both_sides_h    
            } else if (node.index === 1){
                if (node.parent.children.indexOf(node) % 2 === 0) {
                    node.ruleArea.strategy = rs.rightCenter
                    node.childrenArea.strategy = cs.columnLeft    
                } else {
                    node.ruleArea.strategy = rs.leftCenter
                    node.childrenArea.strategy = cs.columnRight
                }
            } else {
                node.ruleArea.strategy = node.parent.ruleArea.strategy
                node.childrenArea.strategy = node.parent.childrenArea.strategy    
            }
        }
    }
}

function logic_bottom (nodesArray) {
    for(var node of nodesArray) {
        if (node.hasChild()) {
            node.ruleArea.strategy = rs.bottomCenter
            node.childrenArea.strategy = cs.rowTop
        }
    }
}

function logic_bottom_catalog (nodesArray) {
    for(var node of nodesArray) {
        if (node.hasChild()) {
            if (node.isRoot()) {
                node.ruleArea.strategy = rs.bottomCenter
                node.childrenArea.strategy = cs.rowTop    
            } else {
                node.ruleArea.strategy = rs.bottomLeft
                node.childrenArea.strategy = cs.columnLeft    
            }
        }
    }
}

function logic_top (nodesArray) {

}

function logic_bottom_top(nodesArray) {

}

function logic_surround(nodesArray) {

}

function fish_bone_right(nodesArray) {

}

const ls = {
    logic_right,
    logic_bottom,
    logic_bottom_catalog,
    logic_left_right,
}

export default ls