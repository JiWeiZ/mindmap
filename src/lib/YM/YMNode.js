import {Area, RuleArea, ChildrenArea} from '../Area'

class YMNode {
    constructor(containerId, parent = undefined, children = []) {
        this.container = document.getElementById(containerId)
        this.parent = parent
        this.children = children
        this.selfArea = new Area({
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        })
        this.ruleArea = new RuleArea()
        this.childrenArea = new ChildrenArea()
        this.relativePosition = {
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 }
        }
        this.style = { left: 0, top: 0 }
    }
}

export default YMNode