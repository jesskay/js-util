var Classes = (function () {
    exports = {};

    exports.BaseClass = function() {
    };

    exports.BaseClass.extend = function(props) {
        var newClass = function() {
            if (this.init) {
                this.init.apply(this, arguments);
            }
        };

        newClass.prototype = new this();
        newClass.prototype.constructor = newClass;
        newClass.extend = arguments.callee;

        for (prop in props) {
            if (props.hasOwnProperty(prop)) {
                newClass.prototype[prop] = props[prop];
            }
        }

        return newClass;
    };

    return exports;
})();
