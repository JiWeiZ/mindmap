import {hs, vs} from '../constraint'

function rightTop (node) {
    // 计算childArea的起点
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0
}

function rightCenter (node) {
    // 计算childArea的起点
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0 - (node.childrenArea.height - node.selfArea.height) / 2
    // 计算selfArea的起点
    let minx = Math.min(0, node.childrenArea.start.x)
    let miny = Math.min(0, node.childrenArea.start.y)
    node.selfArea.start.x = 0 - minx
    node.selfArea.start.y = 0 - miny
}

function rightBottom (node) {
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = node.childrenArea.height - node.selfArea.height
}

function rootRender (node) {
    // 针对root的特殊方法，node只能是root
    // 计算root的ruleArea的起点
    node.ruleArea.start.x = (window.innerWidth - node.ruleArea.width) / 2
    node.ruleArea.start.y = (window.innerHeight - node.ruleArea.height) / 2
}

export {
    rightTop,
    rightCenter,
    rightBottom,
    rootRender
}