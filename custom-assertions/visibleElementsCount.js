visibleElementsCount = function (selector, count, message = null) {
  this.message = message || `Asserting that there are "${count}" visible elements that match "${selector}"`
  this.expected = count
 
  this.pass = value => value === this.expected
  this.value = result => result.value
 
  this.command = callback => {
    const self = this
    return this.api.execute(
      selector => {
        let count = 0
 
        document.querySelectorAll(selector).forEach(node => {
          if (node.offsetHeight !== 0) {
            count++
          }
        })
 
        return count
      },
      [selector],
      result => { callback.call(self, result) }
    )
  }
}
 
module.exports.assertion = visibleElementsCount
