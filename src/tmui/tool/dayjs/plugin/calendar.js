!(function (e, t) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_calendar = t() }(this, () => { 'use strict'; return function (e, t, a) { const n = 'h:mm A'; const d = { lastDay: `[Yesterday at] ${n}`, sameDay: `[Today at] ${n}`, nextDay: `[Tomorrow at] ${n}`, nextWeek: `dddd [at] ${n}`, lastWeek: `[Last] dddd [at] ${n}`, sameElse: 'MM/DD/YYYY' }; t.prototype.calendar = function (e, t) { const n = t || this.$locale().calendar || d; const o = a(e || void 0).startOf('d'); const s = this.diff(o, 'd', !0); const i = 'sameElse'; const f = s < -6 ? i : s < -1 ? 'lastWeek' : s < 0 ? 'lastDay' : s < 1 ? 'sameDay' : s < 2 ? 'nextDay' : s < 7 ? 'nextWeek' : i; const l = n[f] || d[f]; return typeof l == 'function' ? l.call(this, a()) : this.format(l) } } }))
