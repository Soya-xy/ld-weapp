// Plugin template from https://day.js.org/docs/en/plugin/plugin
export default (function (option, dayjsClass) {
  const oldParse = dayjsClass.prototype.parse

  dayjsClass.prototype.parse = function (cfg) {
    if (typeof cfg.date === 'string') {
      const locale = this.$locale()
      cfg.date = locale && locale.preparse ? locale.preparse(cfg.date) : cfg.date
    } // original parse result

    return oldParse.bind(this)(cfg)
  } // // overriding existing API
  // // e.g. extend dayjs().format()

  const oldFormat = dayjsClass.prototype.format

  dayjsClass.prototype.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key]

    // original format result
    const result = oldFormat.call.apply(oldFormat, [this].concat(args)) // return modified result

    const locale = this.$locale()
    return locale && locale.postformat ? locale.postformat(result) : result
  }

  const oldFromTo = dayjsClass.prototype.fromToBase

  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function (input, withoutSuffix, instance, isFrom) {
      const locale = this.$locale() || instance.$locale() // original format result

      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale && locale.postformat)
    }
  }
})
