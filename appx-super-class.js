'use strict'
const {XIterable} = require('x-iterable-base')

module.exports = (build, iterate) => {
  const Base = XIterable.fromGenerator(iterate)

  class AppxSuper extends Base {
    constructor (...args) {
      super()
      return build(this, ...args)
    }
  }

  return XIterable(AppxSuper)
}
