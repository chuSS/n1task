module.exports.command = function (selector, callback) {
    return this.elements('css selector', selector, results => {
        if (results.status !== 0) {
            // some error occurred, handle accordingly
        }
        callback(results.value.length > 0)
    })
}