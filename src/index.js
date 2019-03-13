import YMNode from './lib/YM/YMNode'
import { rightCenter } from './lib/Layout/ruleLayoutStrategy'
import { columnStrategy } from './lib/Layout/childLayoutStrategy'
import { rootRender } from './lib/Layout/childLayoutStrategy'

// YMNodeManager 的功能：data2manager
const root = new YMNode('root');
const n1 = new YMNode('n001')
const n2 = new YMNode('n002')
const n3 = new YMNode('n003')
const n11 = new YMNode('n0011')
const n12 = new YMNode('n0012')

root.children = [n1, n2, n3]
n1.parent = root
n2.parent = root
n3.parent = root
n1.children = [n11, n12]
n11.parent = n1
n12.parent = n1
const nodes = [root, n1, n11, n12, n2, n3]

// 注入绘制策略
root.ruleArea.strategy = rightCenter
root.childrenArea.strategy = columnStrategy

n1.ruleArea.strategy = rightCenter
n1.childrenArea.strategy = columnStrategy

function test() {
    root.doLayout()
    rootRender(root) // 临时
    root.style.left = root.ruleArea.start.x + root.selfArea.start.x
    root.style.top = root.ruleArea.start.y + root.selfArea.start.y
    root.container.style.left = `${root.style.left}px`
    root.container.style.top = `${root.style.top}px`
    for (var i = 1; i < nodes.length; i++) {
        var node = nodes[i]
        node.style.left = node.parent.style.left
            + node.parent.childrenArea.start.x
            + node.ruleArea.start.x
            + node.selfArea.start.x

        node.style.top = node.parent.style.top
            + node.parent.childrenArea.start.y
            + node.ruleArea.start.y
            + node.selfArea.start.y

        node.container.style.left = `${node.style.left}px`
        node.container.style.top = `${node.style.top}px`
    }
    console.log(root)
        rootRuleArea.style.outline = `1px solid red`
        rootRuleArea.style.width = `${root.ruleArea.width}px`
        rootRuleArea.style.height = `${root.ruleArea.height}px`
        rootRuleArea.style.left = `${root.ruleArea.start.x}px`
        rootRuleArea.style.top = `${root.ruleArea.start.y}px`
}

window.root = root
let rootRuleArea = document.getElementById('rootRuleArea')


let button = document.getElementById('submit')
button.onclick = test
