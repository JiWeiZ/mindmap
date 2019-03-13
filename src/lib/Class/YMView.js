class YMView {
    constructor (ym, options) {
        this.ym = ym
        this.opts = options
    }

    init() {
        console.log('YMView init')
    }

    show() {
        const {nodesArray, root} = this.ym.manager
        root.style.left = root.ruleArea.start.x + root.selfArea.start.x
        root.style.top = root.ruleArea.start.y + root.selfArea.start.y
        root.container.style.left = `${root.style.left}px`
        root.container.style.top = `${root.style.top}px`
        for (var i = 1; i < nodesArray.length; i++) {
            var node = nodesArray[i]
            
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
    }
}

export default YMView