import { FORMAT_DEFAULT } from '../../constant'
import { englishFormats, u } from './utils'

export default (function (o, c, d) {
  const proto = c.prototype
  const oldFormat = proto.format
  d.en.formats = englishFormats

  proto.format = function (formatStr) {
    if (formatStr === void 0)
      formatStr = FORMAT_DEFAULT

    const _this$$locale = this.$locale()
    const _this$$locale$formats = _this$$locale.formats
    const formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats

    const result = u(formatStr, formats)
    return oldFormat.call(this, result)
  }
})
