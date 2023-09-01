!(function (e, t) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_plugin_advancedFormat = t() }(this, () => {
  'use strict'; return function (e, t, r) {
    const n = t.prototype; const s = n.format; r.en.ordinal = function (e) { const t = ['th', 'st', 'nd', 'rd']; const r = e % 100; return `[${e}${t[(r - 20) % 10] || t[r] || t[0]}]` }, n.format = function (e) {
      const t = this; const r = this.$locale(); if (!this.isValid())
        return s.bind(this)(e); const n = this.$utils(); const a = (e || 'YYYY-MM-DDTHH:mm:ssZ').replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (e) => { switch (e) { case 'Q':return Math.ceil((t.$M + 1) / 3); case 'Do':return r.ordinal(t.$D); case 'gggg':return t.weekYear(); case 'GGGG':return t.isoWeekYear(); case 'wo':return r.ordinal(t.week(), 'W'); case 'w':case 'ww':return n.s(t.week(), e === 'w' ? 1 : 2, '0'); case 'W':case 'WW':return n.s(t.isoWeek(), e === 'W' ? 1 : 2, '0'); case 'k':case 'kk':return n.s(String(t.$H === 0 ? 24 : t.$H), e === 'k' ? 1 : 2, '0'); case 'X':return Math.floor(t.$d.getTime() / 1e3); case 'x':return t.$d.getTime(); case 'z':return `[${t.offsetName()}]`; case 'zzz':return `[${t.offsetName('long')}]`; default:return e } }); return s.bind(this)(a)
    }
  }
}))
