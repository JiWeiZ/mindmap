import {hs, vs} from '../constraint'

function columnStrategy(node) {
    const children = node.children
    if (!children.length) return
    let baseX = 0, baseY = 0
    for (let i = 0; i < children.length;i++) {
        let child = children[i]
        // 计算每个孩子ruleArea的宽高
        child.calcRuleAreaWH()
        // 计算每个孩子ruleArea的起点
        child.ruleArea.start.x = 0
        child.ruleArea.start.y = baseY

        baseY += (child.ruleArea.height + vs)
    }
    node.childrenArea.width = Math.max(...children.map(e => e.ruleArea.width))
    node.childrenArea.height = baseY - vs
}

export {
    columnStrategy
}