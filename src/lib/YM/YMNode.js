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
    calcRuleAreaWH() {
        if (!this.children.length) {
            this.ruleArea.width = this.selfArea.width
            this.ruleArea.height = this.selfArea.height
        } else {
            // 先让childrenArea完成布局
            this.doLayout(this.childrenArea)
            // 再让ruleArea完成布局
            this.doLayout(this.ruleArea)
            // 最后得到ruleArea的宽高
            this.ruleArea.width = this._getRuleAreaWidth()
            this.ruleArea.height = this._getRuleAreaHeight()
        }
    }

    doLayout(area) {
        area.strategy(this)
    }

    _getRuleAreaWidth() {
        return Math.max(
            this.childrenArea.end.x - this.childrenArea.start.x,
            this.childrenArea.end.x - 0,
            this.selfArea.width - this.childrenArea.start.x,
            this.selfArea.width - 0,
        )
    }

    _getRuleAreaHeight() {
        return Math.max(
            this.childrenArea.end.y - this.childrenArea.start.y,
            this.childrenArea.end.y - 0,
            this.selfArea.height - this.childrenArea.start.y,
            this.selfArea.height - 0,
        )
    }
}

export default YMNode