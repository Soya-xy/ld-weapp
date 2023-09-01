!(function (e, _) { typeof exports == 'object' && typeof module != 'undefined' ? module.exports = _(require('dayjs')) : typeof define == 'function' && define.amd ? define(['dayjs'], _) : (e = typeof globalThis != 'undefined' ? globalThis : e || self).dayjs_locale_bg = _(e.dayjs) }(this, (e) => {
  'use strict'; function _(e) { return e && typeof e == 'object' && 'default' in e ? e : { default: e } } const t = _(e); const d = {
    name: 'bg',
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekStart: 1,
    ordinal(e) {
      const _ = e % 100; if (_ > 10 && _ < 20)
        return `${e}-ти`; const t = e % 10; return t === 1 ? `${e}-ви` : t === 2 ? `${e}-ри` : t === 7 || t === 8 ? `${e}-ми` : `${e}-ти`
    },
    formats: { LT: 'H:mm', LTS: 'H:mm:ss', L: 'D.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm' },
    relativeTime: { future: 'след %s', past: 'преди %s', s: 'няколко секунди', m: 'минута', mm: '%d минути', h: 'час', hh: '%d часа', d: 'ден', dd: '%d дена', M: 'месец', MM: '%d месеца', y: 'година', yy: '%d години' },
  }; return t.default.locale(d, null, !0), d
}))
