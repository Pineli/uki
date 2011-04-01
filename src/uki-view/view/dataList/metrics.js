var fun = require('../../../uki-core/function'),
    utils = require('../../../uki-core/utils'),
    
    Observable = require('../../../uki-core/observable').Observable;


var Metrics = fun.newClass(Observable, {
    
    view: fun.newProp('view'),
    
    _rowHeight: 0,
    
    update: function() {
        this._rowHeight = this.view().deduceRowHeight();
        this.triggerChanges('totalHeight');
    },
    
    rowsForRange: function(fromPx, toPx) {
        return [
            fromPx / this._rowHeight << 0,
            toPx   / this._rowHeight + 0.5 << 0
        ];
    },
    
    rowForPosition: function(px) {
        return px / this._rowHeight << 0;
    },
    
    rowDimensions: function(index) {
        return {
            top: this._rowHeight*index,
            height: this._rowHeight
        };
    },
    
    totalHeight: function() {
        return this._rowHeight * this.view().data().length;
    }
    
});


exports.Metrics = Metrics;