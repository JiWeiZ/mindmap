import { hs, vs } from '../constraint'
// childrenArea的布局策略
// 即计算子节点ruleArea的起点

function column(node) {
    // 纵向排列
    const children = node.children
    if (!children.length) return
    let baseX = 0, baseY = 0
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        // 计算每个孩子ruleArea的宽高
        child.doLayout()
        // 计算每个孩子ruleArea的起点
        child.ruleArea.start.x = 0
        child.ruleArea.start.y = baseY

        baseY += (child.ruleArea.height + vs)
    }
}

function row(node) {
    // 横向排列
    const children = node.children
    if (!children.length) return
    let baseX = 0, baseY = 0
    for(let i = 0; i < children.length; i++) {
        let child = children[i]
        // 计算每个孩子ruleArea的宽高
        child.doLayout()
        // 计算每个孩子ruleArea的起点
        child.ruleArea.start.x = baseX
        child.ruleArea.start.y = 0

        baseX += (child.ruleArea.width + hs)
    }
}

function rootRender(node) {
    // 针对root的特殊方法，node只能是root
    // 计算root的ruleArea的起点
    node.ruleArea.start.x = (window.innerWidth - node.ruleArea.width) / 2
    node.ruleArea.start.y = (window.innerHeight - node.ruleArea.height) / 2
}

const cs = {
    column,
    row,
    rootRender
}

export default cs