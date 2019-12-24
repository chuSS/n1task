'use strict'

const chromedriver = require('chromedriver')

module.exports = {
    before: function(done) {
        chromedriver.start()
        done()
    },

    after: function(done) {
        chromedriver.stop()
        done()
    },

    // beforeEach: function (browser, done) {
    //     browser.resizeWindow(1280, 1024, done);
    // }
}
