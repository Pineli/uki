include('base.js');

(function() {

var Base = uki.component.Base.prototype,
    self = uki.component.Label = function() {
        this.init.apply(this, arguments);
    };
    
self.prototype = uki.extend({}, Base, {
    typeName: function() {
        return 'uki.component.Label';
    },
    
    _domCreate: function() {
        this._selectable = true;
        this._dom = uki.createElement('div');
        this._dom.style.cssText = Base.defaultCss + 
            "font-family:Helvetica-Neue,Helvetica,Arial,sans-serif;text-shadow:0 1px 0px rgba(255,255,255,0.8);font-size:12px;line-height:15px;";
    },
    
    text: function(text) {
        return arguments.length == 0 ? this.html() : this.html(uki.escapeHTML(text));
    },
    
    html: function(html) {
        if (arguments.length == 0) {
            return this._dom.innerHTML;
        } else {
            this._dom.innerHTML = html;
        }
    },
    
    align: function(align) {
        if (arguments.length == 0) {
            return this.dom().style.textAlign;
        } else {
            this.dom().style.textAlign = align;
        }
    },
    
    selectable: function(state) {
        if (arguments.length == 0) {
            return this._selectable;
        } else {
            this._dom.style.MozUserSelect = state ? '' : 'none';
            this._dom.style.WebkitUserSelect = state ? '' : 'none';
            this._dom.style.userSelect = state ? '' : 'none';
            this._dom.style.cursor = state ? 'text' : 'default';
        }
    }
});
    
})();