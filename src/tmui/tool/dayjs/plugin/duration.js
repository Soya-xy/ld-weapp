!(function (t, s) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = s() : typeof define == 'function' && define.amd ? define(s) : (t = typeof globalThis != 'undefined' ? globalThis : t || self).dayjs_plugin_duration = s() }(this, () => {
  'use strict'; let t; let s; const n = 1e3; const i = 6e4; const e = 36e5; const r = 864e5; const o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g; const u = 31536e6; const h = 2592e6; const a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; const d = { years: u, months: h, days: r, hours: e, minutes: i, seconds: n, milliseconds: 1, weeks: 6048e5 }; const c = function (t) { return t instanceof p }; const f = function (t, s, n) { return new p(t, n, s.$l) }; const m = function (t) { return `${s.p(t)}s` }; const l = function (t) { return t < 0 }; const $ = function (t) { return l(t) ? Math.ceil(t) : Math.floor(t) }; const y = function (t) { return Math.abs(t) }; const g = function (t, s) { return t ? l(t) ? { negative: !0, format: `${y(t)}${s}` } : { negative: !1, format: `${t}${s}` } : { negative: !1, format: '' } }; var p = (function () {
    function l(t, s, n) {
      const i = this; if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), s)
        return f(t * d[m(s)], this); if (typeof t == 'number')
        return this.$ms = t, this.parseFromMilliseconds(), this; if (typeof t == 'object')
        return Object.keys(t).forEach(((s) => { i.$d[m(s)] = t[s] })), this.calMilliseconds(), this; if (typeof t == 'string') { const e = t.match(a); if (e) { const r = e.slice(2).map(((t) => { return t != null ? Number(t) : 0 })); return this.$d.years = r[0], this.$d.months = r[1], this.$d.weeks = r[2], this.$d.days = r[3], this.$d.hours = r[4], this.$d.minutes = r[5], this.$d.seconds = r[6], this.calMilliseconds(), this } } return this
    } const y = l.prototype; return y.calMilliseconds = function () { const t = this; this.$ms = Object.keys(this.$d).reduce((s, n) => { return s + (t.$d[n] || 0) * d[n] }, 0) }, y.parseFromMilliseconds = function () { let t = this.$ms; this.$d.years = $(t / u), t %= u, this.$d.months = $(t / h), t %= h, this.$d.days = $(t / r), t %= r, this.$d.hours = $(t / e), t %= e, this.$d.minutes = $(t / i), t %= i, this.$d.seconds = $(t / n), t %= n, this.$d.milliseconds = t }, y.toISOString = function () { const t = g(this.$d.years, 'Y'); const s = g(this.$d.months, 'M'); let n = +this.$d.days || 0; this.$d.weeks && (n += 7 * this.$d.weeks); const i = g(n, 'D'); const e = g(this.$d.hours, 'H'); const r = g(this.$d.minutes, 'M'); let o = this.$d.seconds || 0; this.$d.milliseconds && (o += this.$d.milliseconds / 1e3); const u = g(o, 'S'); const h = t.negative || s.negative || i.negative || e.negative || r.negative || u.negative; const a = e.format || r.format || u.format ? 'T' : ''; const d = `${h ? '-' : ''}P${t.format}${s.format}${i.format}${a}${e.format}${r.format}${u.format}`; return d === 'P' || d === '-P' ? 'P0D' : d }, y.toJSON = function () { return this.toISOString() }, y.format = function (t) { const n = t || 'YYYY-MM-DDTHH:mm:ss'; const i = { Y: this.$d.years, YY: s.s(this.$d.years, 2, '0'), YYYY: s.s(this.$d.years, 4, '0'), M: this.$d.months, MM: s.s(this.$d.months, 2, '0'), D: this.$d.days, DD: s.s(this.$d.days, 2, '0'), H: this.$d.hours, HH: s.s(this.$d.hours, 2, '0'), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, '0'), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, '0'), SSS: s.s(this.$d.milliseconds, 3, '0') }; return n.replace(o, (t, s) => { return s || String(i[t]) }) }, y.as = function (t) { return this.$ms / d[m(t)] }, y.get = function (t) { let s = this.$ms; const n = m(t); return n === 'milliseconds' ? s %= 1e3 : s = n === 'weeks' ? $(s / d[n]) : this.$d[n], s === 0 ? 0 : s }, y.add = function (t, s, n) { let i; return i = s ? t * d[m(s)] : c(t) ? t.$ms : f(t, this).$ms, f(this.$ms + i * (n ? -1 : 1), this) }, y.subtract = function (t, s) { return this.add(t, s, !0) }, y.locale = function (t) { const s = this.clone(); return s.$l = t, s }, y.clone = function () { return f(this.$ms, this) }, y.humanize = function (s) { return t().add(this.$ms, 'ms').locale(this.$l).fromNow(!s) }, y.milliseconds = function () { return this.get('milliseconds') }, y.asMilliseconds = function () { return this.as('milliseconds') }, y.seconds = function () { return this.get('seconds') }, y.asSeconds = function () { return this.as('seconds') }, y.minutes = function () { return this.get('minutes') }, y.asMinutes = function () { return this.as('minutes') }, y.hours = function () { return this.get('hours') }, y.asHours = function () { return this.as('hours') }, y.days = function () { return this.get('days') }, y.asDays = function () { return this.as('days') }, y.weeks = function () { return this.get('weeks') }, y.asWeeks = function () { return this.as('weeks') }, y.months = function () { return this.get('months') }, y.asMonths = function () { return this.as('months') }, y.years = function () { return this.get('years') }, y.asYears = function () { return this.as('years') }, l
  }()); return function (n, i, e) { t = e, s = e().$utils(), e.duration = function (t, s) { const n = e.locale(); return f(t, { $l: n }, s) }, e.isDuration = c; const r = i.prototype.add; const o = i.prototype.subtract; i.prototype.add = function (t, s) { return c(t) && (t = t.asMilliseconds()), r.bind(this)(t, s) }, i.prototype.subtract = function (t, s) { return c(t) && (t = t.asMilliseconds()), o.bind(this)(t, s) } }
}))