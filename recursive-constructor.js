'use strict'
const {iterator} = Symbol

module.exports = (object, Type, last, iterable, ...rest) => {
  if (!rest.length) {
    return new LastItem(iterable, last)
  }

  object.first = iterable
  object.second = new Type(...rest)

  return object
}

function LastItem (iterable, make) {
  this[iterator] = function * () {
    for (let element of iterable) {
      yield make(element)
    }
  }
}
