!(function (e, n) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = n() : typeof define == 'function' && define.amd ? define(n) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_minMax = n() }(this, () => {
  'use strict'; return function (e, n, t) {
    const i = function (e, n) {
      if (!n || !n.length || !n[0] || n.length === 1 && !n[0].length)
        return null; let t; n.length === 1 && n[0].length > 0 && (n = n[0]); t = n[0]; for (let i = 1; i < n.length; i += 1)n[i].isValid() && !n[i][e](t) || (t = n[i]); return t
    }; t.max = function () { const e = [].slice.call(arguments, 0); return i('isAfter', e) }, t.min = function () { const e = [].slice.call(arguments, 0); return i('isBefore', e) }
  }
}))
