import {hs, vs} from '../constraint'

// ruleArea的布局策略
// 即计算childrenArea的起点

function rightTop (node) {
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0
}

function rightCenter (node) {
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0 - (node.childrenArea.height - node.selfArea.height) / 2

}

function rightBottom (node) {
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0 - node.childrenArea.height + node.selfArea.height
}

function leftTop (node) {
    node.childrenArea.start.x = -1 * (node.childrenArea.width + hs)
    node.childrenArea.start.y = 0
}

function leftCenter (node) {
    node.childrenArea.start.x = -1 * (node.childrenArea.width + hs)
    node.childrenArea.start.y = 0 - (node.childrenArea.height - node.selfArea.height) / 2
}

function leftBottom (node) {
    node.childrenArea.start.x = -1 * (node.childrenArea.width + hs)
    node.childrenArea.start.y = 0 - node.childrenArea.height + node.selfArea.height
}

function bottomLeft (node) {
    node.childrenArea.start.x = 0
    node.childrenArea.start.y = node.selfArea.height + vs
}

function bottomCenter (node) {
    node.childrenArea.start.x = 0 - (node.childrenArea.width - node.selfArea.width) / 2
    node.childrenArea.start.y = node.selfArea.height + vs
}

function bottomRight (node) {
    node.childrenArea.start.x = 0 - node.childrenArea.width + node.selfArea.width
    node.childrenArea.start.y = node.selfArea.height + vs
}

function topLeft (node) {
    node.childrenArea.start.x = 0
    node.childrenArea.start.y = 0 - node.childrenArea.height - vs
}

function topCenter (node) {
    node.childrenArea.start.x = 0 - (node.childrenArea.width - node.selfArea.width) / 2
    node.childrenArea.start.y = 0 - node.childrenArea.height - vs
}

function topRight (node) {
    node.childrenArea.start.x = 0 - node.childrenArea.width + node.selfArea.width
    node.childrenArea.start.y = 0 - node.childrenArea.height - vs
}

const rs = {
    rightTop,
    rightCenter,
    rightBottom,

    leftTop,
    leftCenter,
    leftBottom,
    
    bottomLeft,
    bottomCenter,
    bottomRight,
    
    topLeft,
    topCenter,
    topRight,
}

export default rs