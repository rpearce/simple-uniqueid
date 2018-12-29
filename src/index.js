'use strict'

function gen4() {
  return Math.random().toString(16).slice(-4)
}

function simpleUniqueId(prefix) {
  return (prefix || '').concat([
    gen4(),
    gen4(),
    gen4(),
    gen4(),
    gen4(),
    gen4(),
    gen4(),
    gen4()
  ].join(''))
}

module.exports = simpleUniqueId
