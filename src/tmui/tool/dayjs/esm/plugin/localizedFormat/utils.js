export var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => {
    return a || b.slice(1)
  })
}
export var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A',
}
export var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
    const B = b && b.toUpperCase()
    return a || formats[b] || englishFormats[b] || t(formats[B])
  })
}
