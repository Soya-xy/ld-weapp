!(function (e, t) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_customParseFormat = t() }(this, () => {
  'use strict'; const e = { LTS: 'h:mm:ss A', LT: 'h:mm A', L: 'MM/DD/YYYY', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY h:mm A', LLLL: 'dddd, MMMM D, YYYY h:mm A' }; const t = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g; const n = /\d\d/; const r = /\d\d?/; const i = /\d*[^\s\d-_:/()]+/; let o = {}; let s = function (e) { return (e = +e) + (e > 68 ? 1900 : 2e3) }; const a = function (e) { return function (t) { this[e] = +t } }; const f = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
    (this.zone || (this.zone = {})).offset = (function (e) {
      if (!e)
        return 0; if (e === 'Z')
        return 0; const t = e.match(/([+-]|\d\d)/g); const n = 60 * t[1] + (+t[2] || 0); return n === 0 ? 0 : t[0] === '+' ? -n : n
    }(e))
  }]; const h = function (e) { const t = o[e]; return t && (t.indexOf ? t : t.s.concat(t.f)) }; const u = function (e, t) {
    let n; const r = o.meridiem; if (r) { for (let i = 1; i <= 24; i += 1) if (e.includes(r(i, 0, t))) { n = i > 12; break } }
    else { n = e === (t ? 'pm' : 'PM') } return n
  }; const d = {
    A: [i, function (e) { this.afternoon = u(e, !1) }],
    a: [i, function (e) { this.afternoon = u(e, !0) }],
    S: [/\d/, function (e) { this.milliseconds = 100 * +e }],
    SS: [n, function (e) { this.milliseconds = 10 * +e }],
    SSS: [/\d{3}/, function (e) { this.milliseconds = +e }],
    s: [r, a('seconds')],
    ss: [r, a('seconds')],
    m: [r, a('minutes')],
    mm: [r, a('minutes')],
    H: [r, a('hours')],
    h: [r, a('hours')],
    HH: [r, a('hours')],
    hh: [r, a('hours')],
    D: [r, a('day')],
    DD: [n, a('day')],
    Do: [i, function (e) {
      const t = o.ordinal; const n = e.match(/\d+/); if (this.day = n[0], t)
        for (let r = 1; r <= 31; r += 1)t(r).replace(/\[|\]/g, '') === e && (this.day = r)
    }],
    M: [r, a('month')],
    MM: [n, a('month')],
    MMM: [i, function (e) {
      const t = h('months'); const n = (h('monthsShort') || t.map(((e) => { return e.slice(0, 3) }))).indexOf(e) + 1; if (n < 1)
        throw new Error(); this.month = n % 12 || n
    }],
    MMMM: [i, function (e) {
      const t = h('months').indexOf(e) + 1; if (t < 1)
        throw new Error(); this.month = t % 12 || t
    }],
    Y: [/[+-]?\d+/, a('year')],
    YY: [n, function (e) { this.year = s(e) }],
    YYYY: [/\d{4}/, a('year')],
    Z: f,
    ZZ: f,
  }; function c(n) {
    let r, i; r = n, i = o && o.formats; for (var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (t, n, r) => { const o = r && r.toUpperCase(); return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (e, t, n) => { return t || n.slice(1) }) })).match(t), a = s.length, f = 0; f < a; f += 1) { const h = s[f]; const u = d[h]; const c = u && u[0]; const l = u && u[1]; s[f] = l ? { regex: c, parser: l } : h.replace(/^\[|\]$/g, '') } return function (e) {
      for (var t = {}, n = 0, r = 0; n < a; n += 1) {
        const i = s[n]; if (typeof i == 'string') { r += i.length }
        else { const o = i.regex; const f = i.parser; const h = e.slice(r); const u = o.exec(h)[0]; f.call(t, u), e = e.replace(u, '') }
      } return (function (e) { const t = e.afternoon; if (void 0 !== t) { const n = e.hours; t ? n < 12 && (e.hours += 12) : n === 12 && (e.hours = 0), delete e.afternoon } }(t)), t
    }
  } return function (e, t, n) {
    n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear); const r = t.prototype; const i = r.parse; r.parse = function (e) {
      const t = e.date; const r = e.utc; const s = e.args; this.$u = r; const a = s[1]; if (typeof a == 'string') {
        const f = !0 === s[2]; const h = !0 === s[3]; const u = f || h; let d = s[2]; h && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = (function (e, t, n) {
          try {
            if (['x', 'X'].includes(t))
              return new Date((t === 'X' ? 1e3 : 1) * e); const r = c(t)(e); const i = r.year; const o = r.month; const s = r.day; const a = r.hours; const f = r.minutes; const h = r.seconds; const u = r.milliseconds; const d = r.zone; const l = new Date(); const m = s || (i || o ? 1 : l.getDate()); const M = i || l.getFullYear(); let Y = 0; i && !o || (Y = o > 0 ? o - 1 : l.getMonth()); const p = a || 0; const v = f || 0; const D = h || 0; const g = u || 0; return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g)
          }
          catch (e) { return new Date('') }
        }(t, a, r)), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date('')), o = {}
      }
      else if (Array.isArray(a)) { for (let l = a.length, m = 1; m <= l; m += 1) { s[1] = a[m - 1]; const M = n.apply(this, s); if (M.isValid()) { this.$d = M.$d, this.$L = M.$L, this.init(); break }m === l && (this.$d = new Date('')) } }
      else { i.call(this, e) }
    }
  }
}))
