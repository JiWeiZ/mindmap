import ls from '../Layout/layoutStrategy'
import cs from '../Layout/childLayoutStrategy'

class YMLayout {
    constructor(ym, options) {
        this.ym = ym
        this.opts = options
    }

    init() {
        console.log('YMLayout init')
    }

    injectStrategy() {
        const nodes = this.ym.manager.nodesArray,
        strategy = this.opts.strategy || 'logic_right'
        ls[strategy](nodes)
    }

    layout() {
        const root = this.ym.manager.root
        root.doLayout()
        cs.rootRender(root)
    }
}

export default YMLayout
