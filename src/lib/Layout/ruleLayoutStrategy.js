import {hs, vs} from '../constraint'

function rightTop (node) {
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0
}

function rightCenter (node) { //
    node.childrenArea.start.x = node.selfArea.width + hs
    node.childrenArea.start.y = 0 - (node.childrenArea.height - node.selfArea.height) / 2
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
    // 计算root的selfArea的起点
    node.selfArea.start.x = node.ruleArea.start.x
    node.selfArea.start.y = node.ruleArea.start.y + node.ruleArea.height/2 - node.selfArea.height/2
}

export {
    rightTop,
    rightCenter,
    rightBottom,
    rootRender
}