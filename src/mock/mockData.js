let mockData = [
    {
        id: 'root',
        index: 0,
        isroot: true,
        parentid: null
    }, {
        id: 'n1',
        index: 1,
        isroot: false,
        parentid: 'root'
    }, {
        id: 'n11',
        index: 2,
        isroot: false,
        parentid: 'n1'
    }, {
        id: 'n12',
        index: 2,
        isroot: false,
        parentid: 'n1'
    }, {
        id: 'n2',
        index: 1,
        isroot: false,
        parentid: 'root'
    }, {
        id: 'n21',
        index: 2,
        isroot: false,
        parentid: 'n2'
    },{
        id: 'n22',
        index: 2,
        isroot: false,
        parentid: 'n2'
    },{
        id: 'n221',
        index: 3,
        isroot: false,
        parentid: 'n22'
    },{
        id: 'n222',
        index: 3,
        isroot: false,
        parentid: 'n22'
    },{
        id: 'n3',
        index: 1,
        isroot: false,
        parentid: 'root'
    },{
        id: 'n4',
        index: 1,
        isroot: false,
        parentid: 'root'
    },{
        id: 'n41',
        index: 2,
        isroot: false,
        parentid: 'n4'
    },{
        id: 'n42',
        index: 2,
        isroot: false,
        parentid: 'n4'
    },
]

export default mockData
