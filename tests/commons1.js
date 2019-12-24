'use strict'

const path = require('path')
const config = require(path.resolve(__dirname, '../config'))

module.exports = {
    openSite: function (browser) {
        browser
            .resizeWindow(1280, 1024)
            .url(config.baseUrl)
            .waitForElementVisible('body', 1000)
            .waitForElementVisible(config.sInput, 1000, function () {
                // browser.moveToElement(config.sInput, 10, 10, function() {
                    browser.pause(500).click(config.sInput)
                    browser.pause(500).setValue(config.sInput, config.sWord)
                // })
                // browser.moveToElement(config.sButton, 10, 10, function() {
                    browser.pause(500).click(config.sButton);
                // })
            }, 'Click Search')
        browser
            .waitForElementVisible('body', 2000)
            .waitForElementVisible('#resultStats')
            .waitForElementVisible(config.sInput, 1000, function () {
                browser.getValue(config.sInput, function(result) {
                    this.assert.equal(result.value, config.sWord)
                    console.log('Шукали: ', result.value)
                })
            })
            .getText('css selector', '#resultStats', function(result) {
                console.log('Знайшли: ', result.value)
            })
    },
    endTest: function(browser) {
        browser.end()
    }
}
