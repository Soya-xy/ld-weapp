!(function (e, n) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = n() : typeof define == 'function' && define.amd ? define(n) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_isMoment = n() }(this, () => { 'use strict'; return function (e, n, t) { t.isMoment = function (e) { return t.isDayjs(e) } } }))
