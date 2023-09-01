export default (function (o, c, dayjs) {
  const proto = c.prototype

  const parseDate = function parseDate(cfg) {
    const date = cfg.date
    const utc = cfg.utc

    if (Array.isArray(date)) {
      if (utc) {
        if (!date.length)
          return new Date()

        return new Date(Date.UTC.apply(null, date))
      }

      if (date.length === 1)
        return dayjs(String(date[0])).toDate()

      return new (Function.prototype.bind.apply(Date, [null].concat(date)))()
    }

    return date
  }

  const oldParse = proto.parse

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg)
    oldParse.bind(this)(cfg)
  }
})
