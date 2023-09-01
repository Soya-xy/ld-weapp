!(function (e, t) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_isoWeek = t() }(this, () => {
  'use strict'; const e = 'day'; return function (t, i, s) {
    const a = function (t) { return t.add(4 - t.isoWeekday(), e) }; const d = i.prototype; d.isoWeekYear = function () { return a(this).year() }, d.isoWeek = function (t) {
      if (!this.$utils().u(t))
        return this.add(7 * (t - this.isoWeek()), e); let i; let d; let n; let o; const r = a(this); const u = (i = this.isoWeekYear(), d = this.$u, n = (d ? s.utc : s)().year(i).startOf('year'), o = 4 - n.isoWeekday(), n.isoWeekday() > 4 && (o += 7), n.add(o, e)); return r.diff(u, 'week') + 1
    }, d.isoWeekday = function (e) { return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) }; const n = d.startOf; d.startOf = function (e, t) { const i = this.$utils(); const s = !!i.u(t) || t; return i.p(e) === 'isoweek' ? s ? this.date(this.date() - (this.isoWeekday() - 1)).startOf('day') : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf('day') : n.bind(this)(e, t) }
  }
}))
