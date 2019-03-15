class YMView {
  constructor(ym, options) {
    this.ym = ym
    this.opts = options
  }

  init() {
    console.log('YMView init')
  }

  show() {
    const { nodesArray, root } = this.ym.manager
    root.style.left = root.ruleArea.start.x + root.selfArea.start.x
    root.style.top = root.ruleArea.start.y + root.selfArea.start.y
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
    }
  }

  render() {
    const { nodesArray } = this.ym.manager
    nodesArray.forEach(node => {
      node.container.style.left = `${node.style.left}px`
      node.container.style.top = `${node.style.top}px`
    })
  }

  /*

  TODO: 画线逻辑

   */
}

export default YMView