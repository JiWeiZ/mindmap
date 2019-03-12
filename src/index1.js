import {hs, vs} from './constraint'
import YMNode from './lib/YM/YMNode'

const root = new YMNode('root');
const n1 = new YMNode('n001')
const n2 = new YMNode('n002')
const n3 = new YMNode('n003')
root.children = [n1, n2, n3]
root.childrenArea.direction = 'DIR-Y'
n1.parent = root
n2.parent = root
n3.parent = root

const nodes = [root, n1, n2, n3]

function getChildrenArea(node) {
    const { children } = node
    if (!children.length) return node.ruleArea
    if (node.childrenArea.direction === 'DIR-Y') {
        var baseX = 0, baseY = 0
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            child.relativePosition.start.y = baseY
            child.relativePosition.end.x = baseX + child.selfArea.width // TODO: child又有child？
            child.relativePosition.end.y = baseY + child.selfArea.height
            baseY += (child.selfArea.height + vs)
        }
    }
    node.childrenArea.width = (function () {
        var max = 0
        for (var i = 0; i < children.length; i++) {
            var endx = children[i].relativePosition.end.x
            max = endx > max ? endx : max
        }
        return max
    })()
    node.childrenArea.height = baseY - vs
}

function putChildrenArea(node, position = 'right') {
    if (position === 'right') {
        node.childrenArea.start.x = node.selfArea.start.x + node.selfArea.width + hs
        node.childrenArea.start.y = node.selfArea.start.y - (node.childrenArea.height - node.selfArea.height) / 2
    }
}

function getArea(node) {
    node.ruleArea.width = Math.max(
        node.childrenArea.end.x - node.childrenArea.start.x,
        node.childrenArea.end.x - node.selfArea.start.x,
        node.selfArea.end.x - node.childrenArea.start.x,
        node.selfArea.end.x - node.selfArea.start.x,
    )
    node.ruleArea.height = Math.max(
        node.childrenArea.end.y - node.childrenArea.start.y,
        node.childrenArea.end.y - node.selfArea.start.y,
        node.selfArea.end.y - node.childrenArea.start.y,
        node.selfArea.end.y - node.selfArea.start.y,
    )
    node.ruleArea.start.x = (window.innerWidth - node.ruleArea.width) / 2
    node.ruleArea.start.y = (window.innerHeight - node.ruleArea.height) / 2
}

function calculateStyle(node) {
    node.style.left = node.ruleArea.start.x
    node.style.top = node.ruleArea.start.y + node.ruleArea.height / 2 - node.selfArea.height / 2
    node.childrenArea.start.x = node.ruleArea.start.x + node.selfArea.width + vs
    node.childrenArea.start.y = node.ruleArea.start.y
}

function calculateChildrenStyle(node) {
    for (var c of node.children) {
        c.style.left = c.relativePosition.start.x + root.childrenArea.start.x
        c.style.top = c.relativePosition.start.y + root.childrenArea.start.y
    }
}

function setStyle(node) {
    node.container.style.left = `${node.style.left}px`
    node.container.style.top = `${node.style.top}px`
}

function render() {
    nodes.forEach(e => setStyle(e))
}

function test() {
    getChildrenArea(root)
    putChildrenArea(root)
    getArea(root)
    calculateStyle(root)
    calculateChildrenStyle(root)
    render()
}

let button = document.getElementById('submit')
button.onclick = test

window.root = root