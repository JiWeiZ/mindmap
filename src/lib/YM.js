import YMData from './Class/YMData'
import YMLayout from './Class/YMLayout'
import YMView from './Class/YMView'

let DEFAULT_OPTIONS = {}

class YM {
    constructor (options) {
        this.inited = false
        this.manager = null
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        this._init()
    }
    _init () {
        const ym = this
        if (ym.inited) return
        ym.inited = true
        
        var opts = ym.options;

        var opts_layout = {
          mode: opts.mode,
          strategy: opts.strategy
          // hspace: opts.layout.hspace,
          // vspace: opts.layout.vspace,
          // pspace: opts.layout.pspace,
          // espace: opts.layout.espace,
          // right_padding: opts.layout.right_padding,
        };
        var opts_view = {
          container: opts.container,
          // support_html: opts.support_html,
          // hmargin: opts.view.hmargin,
          // vmargin: opts.view.vmargin,
          // line_width: opts.view.line_width,
          // line_color: opts.view.line_color,
        };

        ym.data = new YMData(ym)
        ym.layout = new YMLayout(ym, opts_layout)
        ym.view = new YMView(ym, opts_view)

        ym.data.init()
        ym.layout.init()
        ym.view.init()

    }
    show (wrappedData) {
        this.manager = this.data.data2manager(wrappedData)

        this.layout.injectStrategy()
        this.layout.layout()

        this.view.show()
    }
}

export default YM