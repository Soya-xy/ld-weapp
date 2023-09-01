export default (function (o, c, d) {
  const sortBy = function sortBy(method, dates) {
    if (!dates || !dates.length || !dates[0] || dates.length === 1 && !dates[0].length)
      return null

    if (dates.length === 1 && dates[0].length > 0) {
      const _dates = dates
      dates = _dates[0]
    }

    let result
    const _dates2 = dates
    result = _dates2[0]

    for (let i = 1; i < dates.length; i += 1) {
      if (!dates[i].isValid() || dates[i][method](result))
        result = dates[i]
    }

    return result
  }

  d.max = function () {
    const args = [].slice.call(arguments, 0) // eslint-disable-line prefer-rest-params

    return sortBy('isAfter', args)
  }

  d.min = function () {
    const args = [].slice.call(arguments, 0) // eslint-disable-line prefer-rest-params

    return sortBy('isBefore', args)
  }
})
