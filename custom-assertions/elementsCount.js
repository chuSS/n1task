exports.assertion = function(selector, minCount) {
    this.message = `Asserting elements that match "${selector}"`;
    this.expected = '>= ' + minCount;

    this.pass = function(value) {
        return value >= minCount;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback) {
        const self = this;
        return this.api.execute(
            function(selector) {
                return document.querySelectorAll(selector).length;
            },
            [selector],
            function(result) {
                callback.call(self, result)
            }
        );
    };
};
