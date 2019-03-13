import YM from './lib/YM'
import mockData from './mock/mockData'

function wrapMindMapData(nodes) {
    return {
        data: nodes,
        format: 'node_array',
        meta: { name: 'ynote', version: '0.0.0' },
    };
}

let MIND_OPTIONS = {}

function start() {
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

document.getElementById('submit').onclick = start
