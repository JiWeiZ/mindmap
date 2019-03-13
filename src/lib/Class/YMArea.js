class YMArea {
    constructor({
        width = undefined,
        height = undefined,
        start = { x: 0, y: 0 },
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

class LayoutArea extends YMArea {
    constructor({
        width = undefined,
        height = undefined,
        start = { x: 0, y: 0 },
        strategy = undefined,
    } = {}) {
        super(width, height, start)
        this.strategy = strategy
    }
}

export {
    YMArea,
    LayoutArea,
}
