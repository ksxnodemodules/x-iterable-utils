
((module) => {
  'use strict'

  var createClassFromSuper = require('simple-class-utils').createClass.super
  var {XIterable, Root} = require('x-iterable-base')

  var _key_iterator = Symbol.iterator

  module.exports = (build, iterate) => {
    var Base = XIterable.fromGenerator(iterate)

    class AppxSuper extends Base {
      constructor (...args) {
        super()
        return build(this, ...args)
      }
		}

    return XIterable(AppxSuper)
  }
})(module)
