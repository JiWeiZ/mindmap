import YMNode from './lib/YM/YMNode'
import {rightCenter} from './lib/Layout/ruleLayoutStrategy'
import {columnStrategy} from './lib/Layout/childLayoutStrategy'

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


function test () {
    root.calcRuleAreaWH()
}

let button = document.getElementById('submit')
button.onclick = test

window.root = root