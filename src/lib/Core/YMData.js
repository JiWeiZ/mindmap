import YMNodeManager from './YMNodeManager'
import YMNode from './YMNode';

class YMData {
    constructor (ym) {
        this.ym = ym
        this.example = {
            meta: {
              name: 'ydmind',
              version: '1.0.0',
            },
            format: 'node_array',
            data: [{ id: 'root', topic: 'ydMind Example', isroot: true }],
          }
    }
    init() {
        console.log('YMData init')
    }

    reset() {
        console.log('YMData reset') 
    }

    data2manager(source_data) {
        let manager = new YMNodeManager(this.ym)
        manager.autoResize = source_data.autoResize
        this._parse(manager, source_data.data)
        return manager
    }
    _parse(manager, nodesArray) {
        let nodes = nodesArray.concat(),
            YMNodes = {}, YMNodeArray = []
        // MOCK
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i]
            let ymnode = new YMNode(node.id)
            ymnode.index = node.index
            YMNodes[node.id] = ymnode
            YMNodeArray.push(ymnode)
            if (node.parentid) {
                ymnode.parent = YMNodes[node.parentid]
                ymnode.parent.children.push(ymnode)
            }
        }
        manager.root = YMNodes['root']
        manager.nodes = YMNodes
        manager.nodesArray = YMNodeArray
    }
}

export default YMData
