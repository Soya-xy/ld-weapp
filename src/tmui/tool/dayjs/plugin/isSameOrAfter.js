!(function (e, t) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t() }(this, () => { 'use strict'; return function (e, t) { t.prototype.isSameOrAfter = function (e, t) { return this.isSame(e, t) || this.isAfter(e, t) } } }))
