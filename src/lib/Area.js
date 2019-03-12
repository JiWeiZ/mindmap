class Area {
    constructor({
        width = undefined,
        height = undefined,
        start = { x: 0, y: 0 }
    } = {}) {
        this.start = start
        this.width = width
        this.height = height
        Object.defineProperty(this, 'end', {
            get() {
                return {
                    x: this.start.x + this.width,
                    y: this.start.y + this.height,
                }
            }
        })
    }
}

class LayoutArea extends Area {
    constructor({
        direction = undefined,
        strategy = undefined,
        width = undefined,
        height = undefined,
        start = { x: 0, y: 0 }
    } = {}) {
        super(width, height, start)
        this.direction = direction
        this.strategy = strategy
    }
    doLayout () {
        // 子类实现
    }
}

class RuleArea extends LayoutArea {
    constructor () {
        super()
    }
    doLayout () {
        this.strategy(this)
    }
}

class ChildrenArea extends LayoutArea {
    constructor () {
        super()
    }
    doLayout () {
        this.strategy(this.children)
    }
}

export {
    Area, 
    LayoutArea,
    RuleArea,
    ChildrenArea
}