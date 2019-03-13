import cs from '../Layout/childLayoutStrategy'
import rs from '../Layout/ruleLayoutStrategy'

function logic_right (nodesArray) {
    for(var node of nodesArray) {
        if (node.hasChild()) {
            node.ruleArea.strategy = rs.bottomCenter
            node.childrenArea.strategy = cs.row
        }
    }
}

function logic_left (nodesArray) {

}

function logic_left_right (nodesArray) {

}

function logic_bottom (nodesArray) {

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
}

export default ls