'use strict'

const createClassFromSuper = require('simple-class-utils').createClass.super
const {XIterable, Root} = require('x-iterable-base')

const _key_iterator = Symbol.iterator

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
