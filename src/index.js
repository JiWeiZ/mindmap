import YMNode from './lib/YM/YMNode'
import { rightCenter, rightBottom, rightTop } from './lib/Layout/ruleLayoutStrategy'
import { columnStrategy } from './lib/Layout/childLayoutStrategy'
import { rootRender } from './lib/Layout/ruleLayoutStrategy'

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
    root.calcRuleAreaWH()
    rootRender(root) // 临时
    root.container.style.left = `${root.selfArea.start.x}px`
    root.container.style.top = `${root.selfArea.start.y}px`
    for (var i = 1; i < nodes.length; i++) {
        var node = nodes[i]
        node.selfArea.start.x = node.parent.selfArea.start.x
            + node.parent.childrenArea.start.x
            + node.ruleArea.start.x
        node.selfArea.start.y = node.parent.selfArea.start.y
            + node.parent.childrenArea.start.y
            + node.ruleArea.start.y
        node.container.style.left = `${node.selfArea.start.x}px`
        node.container.style.top = `${node.selfArea.start.y}px`
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
