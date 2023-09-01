import { FORMAT_DEFAULT } from '../../constant'

export default (function (o, c) {
  // locale needed later
  const proto = c.prototype
  const oldFormat = proto.format // extend en locale here

  proto.format = function (formatStr) {
    const _this = this

    const yearBias = 543
    const str = formatStr || FORMAT_DEFAULT
    const result = str.replace(/(\[[^\]]+])|BBBB|BB/g, (match, a) => {
      let _this$$utils

      const year = String(_this.$y + yearBias)
      const args = match === 'BB' ? [year.slice(-2), 2] : [year, 4]
      return a || (_this$$utils = _this.$utils()).s.apply(_this$$utils, args.concat(['0']))
    })
    return oldFormat.bind(this)(result)
  }
})
