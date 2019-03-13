import YM from './lib/YM'
import mockData from './mock/mockData'

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

document.getElementById('logic_right').onclick = start.bind(null, 'logic_right')
document.getElementById('logic_bottom').onclick = start.bind(null, 'logic_bottom')
document.getElementById('logic_bottom_catalog').onclick = start.bind(null, 'logic_bottom_catalog')
