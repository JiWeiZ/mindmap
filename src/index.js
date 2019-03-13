import YM from './lib/YM'
import mockData from './mock/mockData'

let mocker = {
    renderHTML: function (nodes) {
        let main = document.getElementById('main')
        let htmls = nodes.map(e => {
            var shape = this.getShape()
            return `<div id="${e.id}" class="node" style="width:${shape.width}px;height:${shape.height}px">${e.id}</div>`
        })
        let res = htmls.reduce((p, v) => p + v, '')
        main.innerHTML += res
    },
    getShape: function() {
        var shape = {}
        shape.height = Math.floor(Math.random() * 10 + 40)
        shape.width = Math.floor(shape.height * (Math.random() * 1.4 + 1.5))
        return shape
    }
}

function wrapMindMapData(nodes) {
    return {
        data: nodes,
        format: 'node_array',
        meta: { name: 'ynote', version: '0.0.0' },
    };
}

function start(strategy) {
    let MIND_OPTIONS = {
        strategy,
    }
    window._ydmind = new YM(MIND_OPTIONS)
    _ydmind.show(wrapMindMapData(mockData))

    let rootRuleArea = document.getElementById('rootRuleArea')
    console.log(_ydmind)
    const root = _ydmind.manager.root
    rootRuleArea.style.outline = `1px solid red`
    rootRuleArea.style.width = `${root.ruleArea.width}px`
    rootRuleArea.style.height = `${root.ruleArea.height}px`
    rootRuleArea.style.left = `${root.ruleArea.start.x}px`
    rootRuleArea.style.top = `${root.ruleArea.start.y}px`
}

mocker.renderHTML(mockData)
let buttons = [].slice.call(document.querySelector('.buttons').children)
buttons.forEach(b => {
    b.onclick = start.bind(null, b.id)
})
