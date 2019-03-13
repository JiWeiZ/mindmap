let mockData = [
    {
        id: 'root',
        index: 0,
        isroot: true,
        parentid: null
    }, {
        id: 'n001',
        index: 1,
        isroot: false,
        parentid: 'root'
    }, {
        id: 'n0011',
        index: 2,
        isroot: false,
        parentid: 'n001'
    }, {
        id: 'n0012',
        index: 2,
        isroot: false,
        parentid: 'n001'
    }, {
        id: 'n002',
        index: 1,
        isroot: false,
        parentid: 'root'
    }, {
        id: 'n003',
        index: 1,
        isroot: false,
        parentid: 'root'
    }
]

export default mockData