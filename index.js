function isUndefined(value) {
  return value === undefined
}

function evaluateGuards(router, guards, to, from, next) {
  const guardsLeft = guards.slice(0) // clone the array so we do not accidentally modify it
  const nextGuard = guardsLeft.shift()

  if (isUndefined(nextGuard)) {
    next()
    return
  }

  nextGuard(router, to, from, (nextArg) => {
    if (isUndefined(nextArg)) {
      evaluateGuards(router, guardsLeft, to, from, next)
      return
    }

    next(nextArg)
  })
}

module.exports = function (router, guards) {
  if (!Array.isArray(guards)) {
    throw new Error('You must specify an array of guards')
  }

  return (router, to, from, next) => {
    return evaluateGuards(router, guards, to, from, next)
  }
}
