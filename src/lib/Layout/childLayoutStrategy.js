import { hs, vs } from '../constant'
// childrenArea的布局策略
// 即计算子节点ruleArea的起点

function columnLeft(node) {
    // 纵向排列左对齐
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

function columnRight(node) {
    // 纵向排列右对齐
    const children = node.children
    if (!children.length) return
    let baseX = 0, baseY = 0

    let wChildrenArea = 0
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        child.doLayout()
        wChildrenArea = child.ruleArea.width > wChildrenArea ? child.ruleArea.width : wChildrenArea
    }

    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        child.ruleArea.start.x = wChildrenArea - child.ruleArea.width
        child.ruleArea.start.y = baseY
        baseY += (child.ruleArea.height + vs)
    }
}


function rowTop(node) {
    // 横向排列上对齐
    const children = node.children
    if (!children.length) return
    let baseX = 0, baseY = 0
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        // 计算每个孩子ruleArea的宽高
        child.doLayout()
        // 计算每个孩子ruleArea的起点
        child.ruleArea.start.x = baseX
        child.ruleArea.start.y = 0

        baseX += (child.ruleArea.width + hs)
    }
}

function both_sides_h(node) {
    // 横向两侧排列
    const children = node.children
    if (!children.length) return
    let leftNodes = [], rightNodes = []
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        child.doLayout()
        if (i % 2 === 0) {
            rightNodes.push(child)
        } else {
            leftNodes.push(child)
        }
    }
    // 计算左右两侧宽高及childrenArea宽高
    let wl = Math.max(...leftNodes.map(node => node.ruleArea.width)),
        wr = Math.max(...rightNodes.map(node => node.ruleArea.width))
    
    node.childrenArea.extraInfo.leftAreaWidth = wl

    let hl = 0
    for (let i = 0; i < leftNodes.length; i++) {
        hl += leftNodes[i].ruleArea.height
    }

    let hr = 0
    for (let i = 0; i < rightNodes.length; i++) {
        hr += rightNodes[i].ruleArea.height
    }

    let wChildrenArea = wl + wr + 2 * vs + node.selfArea.width,
        hChildrenArea = Math.max(hl, hr),
        baseYl = 0,
        baseYr = 0
    for (let i = 0; i < leftNodes.length; i++) {
        let child = leftNodes[i]
        child.ruleArea.start.x = wl - child.ruleArea.width
        child.ruleArea.start.y = (hChildrenArea - hl) / 2 + baseYl
        baseYl += (child.ruleArea.height + hs)
    }
    for (let i = 0; i < rightNodes.length; i++) {
        let child = rightNodes[i]
        child.ruleArea.start.x = wl + 2 * vs + node.selfArea.width
        child.ruleArea.start.y = (hChildrenArea - hr) / 2 + baseYr
        baseYr += (child.ruleArea.height + hs)
    }
}

function rootRender(node) {
    // 针对root的特殊方法，node只能是root
    // 计算root的ruleArea的起点
    node.ruleArea.start.x = (window.innerWidth - node.ruleArea.width) / 2
    node.ruleArea.start.y = (window.innerHeight - node.ruleArea.height) / 2
}

const cs = {
    columnLeft,
    columnRight,
    rowTop,
    both_sides_h,
    rootRender
}

export default cs