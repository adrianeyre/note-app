(function(exports) {

    var befores = {};

    var beforeEach = function(beforeEachFunction) {
        befores = beforeEachFunction;
    }

    var beforeEachCaller = function() {
        if(typeof(befores) === "function") {
            return befores();
        }
    }

    var clearBefores = function() {
        befores = {};
    }

    exports.beforeEach = beforeEach
    exports.beforeEachCaller = beforeEachCaller
    exports.clearBefores = clearBefores

})(this)
