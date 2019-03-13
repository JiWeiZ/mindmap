import { YMArea, LayoutArea } from './YMArea'

class YMNode {
    constructor(containerId, parent = null, children = []) {
        this.container = document.getElementById(containerId)
        this.parent = parent
        this.children = children
        this.selfArea = new YMArea({
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
        })
        this.ruleArea = new LayoutArea()
        this.childrenArea = new LayoutArea()
        this.style = { left: 0, top: 0 }
    }
    
    doLayout() {
        if (!this.children.length) {
            this.ruleArea.width = this.selfArea.width
            this.ruleArea.height = this.selfArea.height
        } else {
            // 布局childrenArea，即计算child的ruleArea的起点
            this.doStrategy(this.childrenArea)

            // 计算childrenArea宽高
            this.getChildrenAreaWH()

            // 布局ruleArea，即计算childrenArea的起点
            this.doStrategy(this.ruleArea)

            // 计算ruleArea宽高
            this.getRuleAreaWH()

            // 计算selfArea的起点 
            this.getSelfAreaStart()
        }
    }

    isRoot() {
        return this instanceof YMNode && this.parent === null
    }

    hasChild() {
        return this.children.length > 0
    }

    doStrategy(area) {
        area.strategy(this)
    }

    getRuleAreaWH() {
        this.ruleArea.width = Math.max(
            this.childrenArea.end.x - this.childrenArea.start.x,
            this.childrenArea.end.x - 0,
            this.selfArea.width - this.childrenArea.start.x,
            this.selfArea.width - 0,
        )
        this.ruleArea.height = Math.max(
            this.childrenArea.end.y - this.childrenArea.start.y,
            this.childrenArea.end.y - 0,
            this.selfArea.height - this.childrenArea.start.y,
            this.selfArea.height - 0,
        )
    }

    getChildrenAreaWH() {
        let { children } = this
        let minx = 0,
            maxx = 0,
            miny = 0,
            maxy = 0
        for (let i = 0; i < children.length; i++) {
            let child = children[i]
            minx = minx < child.ruleArea.start.x ? minx : child.ruleArea.start.x
            maxx = maxx > child.ruleArea.end.x ? maxx : child.ruleArea.end.x
            miny = miny < child.ruleArea.start.y ? miny : child.ruleArea.start.y
            maxy = maxy > child.ruleArea.end.y ? maxy : child.ruleArea.end.y
        }

        this.childrenArea.width = maxx - minx
        this.childrenArea.height = maxy - miny
    }

    getSelfAreaStart() {
        let { x, y } = this.childrenArea.start
        this.selfArea.start.x = 0 - Math.min(0, x)
        this.selfArea.start.y = 0 - Math.min(0, y)
    }
}

export default YMNode   