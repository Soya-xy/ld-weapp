export default (function (o, c, dayjs) {
  const proto = c.prototype

  const isObject = function isObject(obj) {
    return !(obj instanceof Date) && !(Array.isArray(obj)) && obj instanceof Object
  }

  const prettyUnit = function prettyUnit(u) {
    const unit = proto.$utils().p(u)
    return unit === 'date' ? 'day' : unit
  }

  const parseDate = function parseDate(cfg) {
    const date = cfg.date
    const utc = cfg.utc
    const $d = {}

    if (isObject(date)) {
      if (!Object.keys(date).length)
        return new Date()

      const now = utc ? dayjs.utc() : dayjs()
      Object.keys(date).forEach((k) => {
        $d[prettyUnit(k)] = date[k]
      })
      const d = $d.day || (!$d.year && !($d.month >= 0) ? now.date() : 1)
      const y = $d.year || now.year()
      const M = $d.month >= 0 ? $d.month : !$d.year && !$d.day ? now.month() : 0

      const h = $d.hour || 0
      const m = $d.minute || 0
      const s = $d.second || 0
      const ms = $d.millisecond || 0

      if (utc)
        return new Date(Date.UTC(y, M, d, h, m, s, ms))

      return new Date(y, M, d, h, m, s, ms)
    }

    return date
  }

  const oldParse = proto.parse

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }

  const oldSet = proto.set
  const oldAdd = proto.add

  const callObject = function callObject(call, argument, string, offset) {
    if (offset === void 0)
      offset = 1

    if (argument instanceof Object) {
      const keys = Object.keys(argument)
      let chain = this
      keys.forEach((key) => {
        chain = call.bind(chain)(argument[key] * offset, key)
      })
      return chain
    }

    return call.bind(this)(argument * offset, string)
  }

  proto.set = function (string, _int) {
    _int = _int === undefined ? string : _int
    return callObject.bind(this)(function (i, s) {
      return oldSet.bind(this)(s, i)
    }, _int, string)
  }

  proto.add = function (number, string) {
    return callObject.bind(this)(oldAdd, number, string)
  }

  proto.subtract = function (number, string) {
    return callObject.bind(this)(oldAdd, number, string, -1)
  }
})