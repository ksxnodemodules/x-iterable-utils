'use strict'

const EmptyIterable = require('x-iterable-base/template')
	.fromGenerator(() => EMPTY_GENERATOR)

const {freeze, assign} = Object

const RETURN_EMPTY_ITERATOR = () => EMPTY_ITERATOR
const EMPTY_GENERATOR = freeze({
  next: RETURN_EMPTY_ITERATOR,
  return: RETURN_EMPTY_ITERATOR
})
const EMPTY_ITERATOR = freeze({
  done: true
})

const out = freeze({
  EmptyIterable,
  RETURN_EMPTY_ITERATOR,
  EMPTY_GENERATOR,
  EMPTY_ITERATOR,
  __proto__: new EmptyIterable()
})

module.exports = freeze(out)
