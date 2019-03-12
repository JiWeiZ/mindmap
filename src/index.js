import YMNode from './lib/YM/YMNode'
import { rightCenter } from './lib/Layout/ruleLayoutStrategy'
import { columnStrategy } from './lib/Layout/childLayoutStrategy'
import { rootRender } from './lib/Layout/ruleLayoutStrategy'

// YMNodeManager 的功能：data2manager
const root = new YMNode('root');
const n1 = new YMNode('n001')
const n2 = new YMNode('n002')
const n3 = new YMNode('n003')
root.children = [n1, n2, n3]
n1.parent = root
n2.parent = root
n3.parent = root
const nodes = [root, n1, n2, n3]

// 注入绘制策略
root.ruleArea.strategy = rightCenter
root.childrenArea.strategy = columnStrategy


function test() {
    root.calcRuleAreaWH()
    rootRender(root) // 临时
    for (var i = 1; i < nodes.length; i++) {
        var node = nodes[i]
        node.selfArea.start.x = node.parent.selfArea.start.x
            + node.parent.childrenArea.start.x
            + node.ruleArea.start.x
        node.selfArea.start.y = node.parent.selfArea.start.y
            + node.parent.childrenArea.start.y
            + node.ruleArea.start.y
    }

    for (var i = 0; i < nodes.length;i++) {
        var node = nodes[i]
        node.container.style.left = `${node.selfArea.start.x}px`
        node.container.style.top = `${node.selfArea.start.y}px`
    }

    console.log(root)
}

let button = document.getElementById('submit')
button.onclick = test

window.root = root