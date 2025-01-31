import {
  d as m,
  o as a,
  c,
  r as u,
  n as M,
  a as j,
  t as T,
  b as k,
  w as f,
  e as h,
  T as X,
  _ as g,
  u as De,
  i as Oe,
  f as Ze,
  g as fe,
  h as y,
  j as d,
  k as r,
  l as z,
  m as ue,
  p as S,
  q as F,
  s as x,
  v as O,
  x as he,
  y as me,
  z as Ue,
  A as Ge,
  B as W,
  F as N,
  C as B,
  D as Pe,
  E as ee,
  G as _,
  H as E,
  I as Se,
  J as te,
  K as G,
  L as ne,
  M as je,
  N as _e,
  O as ze,
  P as Me,
  Q as we,
  R as se,
  S as We,
  U as Ce,
  V as Te,
  W as qe,
  X as Re,
  Y as Ke,
  Z as Je,
  $ as Ye,
  a0 as Qe
} from './framework.FGXgO8Mc.js';
const Xe = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(),
        c(
          'span',
          { class: M(['VPBadge', e.type]) },
          [u(e.$slots, 'default', {}, () => [j(T(e.text), 1)])],
          2
        )
      );
    }
  }),
  xe = { key: 0, class: 'VPBackdrop' },
  et = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          X,
          { name: 'fade' },
          { default: f(() => [e.show ? (a(), c('div', xe)) : h('', !0)]), _: 1 }
        )
      );
    }
  }),
  tt = g(et, [['__scopeId', 'data-v-f0db8247']]),
  P = De;
function nt(o, e) {
  let t,
    s = !1;
  return () => {
    t && clearTimeout(t),
      s ? (t = setTimeout(o, e)) : (o(), (s = !0) && setTimeout(() => (s = !1), e));
  };
}
function de(o) {
  return o.startsWith('/') ? o : `/${o}`;
}
function ke(o) {
  const { pathname: e, search: t, hash: s, protocol: n } = new URL(o, 'http://a.com');
  if (Oe(o) || o.startsWith('#') || !n.startsWith('http') || !Ze(e)) return o;
  const { site: l } = P(),
    i =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(/(\.md)?$/, l.value.cleanUrls ? '' : '.html')}${t}${s}`
          );
  return fe(i);
}
function R({ correspondingLink: o = !1 } = {}) {
  const { site: e, localeIndex: t, page: s, theme: n, hash: l } = P(),
    i = y(() => {
      var p, b;
      return {
        label: (p = e.value.locales[t.value]) == null ? void 0 : p.label,
        link:
          ((b = e.value.locales[t.value]) == null ? void 0 : b.link) ||
          (t.value === 'root' ? '/' : `/${t.value}/`)
      };
    });
  return {
    localeLinks: y(() =>
      Object.entries(e.value.locales).flatMap(([p, b]) =>
        i.value.label === b.label
          ? []
          : {
              text: b.label,
              link:
                st(
                  b.link || (p === 'root' ? '/' : `/${p}/`),
                  n.value.i18nRouting !== !1 && o,
                  s.value.relativePath.slice(i.value.link.length - 1),
                  !e.value.cleanUrls
                ) + l.value
            }
      )
    ),
    currentLang: i
  };
}
function st(o, e, t, s) {
  return e
    ? o.replace(/\/$/, '') +
        de(t.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, s ? '.html' : ''))
    : o;
}
const ot = { class: 'NotFound' },
  at = { class: 'code' },
  rt = { class: 'title' },
  lt = { class: 'quote' },
  it = { class: 'action' },
  ct = ['href', 'aria-label'],
  ut = m({
    __name: 'NotFound',
    setup(o) {
      const { theme: e } = P(),
        { currentLang: t } = R();
      return (s, n) => {
        var l, i, v, p, b;
        return (
          a(),
          c('div', ot, [
            d('p', at, T(((l = r(e).notFound) == null ? void 0 : l.code) ?? '404'), 1),
            d('h1', rt, T(((i = r(e).notFound) == null ? void 0 : i.title) ?? 'PAGE NOT FOUND'), 1),
            n[0] || (n[0] = d('div', { class: 'divider' }, null, -1)),
            d(
              'blockquote',
              lt,
              T(
                ((v = r(e).notFound) == null ? void 0 : v.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
              ),
              1
            ),
            d('div', it, [
              d(
                'a',
                {
                  class: 'link',
                  href: r(fe)(r(t).link),
                  'aria-label': ((p = r(e).notFound) == null ? void 0 : p.linkLabel) ?? 'go to home'
                },
                T(((b = r(e).notFound) == null ? void 0 : b.linkText) ?? 'Take me home'),
                9,
                ct
              )
            ])
          ])
        );
      };
    }
  }),
  dt = g(ut, [['__scopeId', 'data-v-5e47da90']]);
function Ne(o, e) {
  if (Array.isArray(o)) return Y(o);
  if (o == null) return [];
  e = de(e);
  const t = Object.keys(o)
      .sort((n, l) => l.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(de(n))),
    s = t ? o[t] : [];
  return Array.isArray(s) ? Y(s) : Y(s.items, s.base);
}
function pt(o) {
  const e = [];
  let t = 0;
  for (const s in o) {
    const n = o[s];
    if (n.items) {
      t = e.push(n);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n);
  }
  return e;
}
function vt(o) {
  const e = [];
  function t(s) {
    for (const n of s)
      n.text && n.link && e.push({ text: n.text, link: n.link, docFooterText: n.docFooterText }),
        n.items && t(n.items);
  }
  return t(o), e;
}
function pe(o, e) {
  return Array.isArray(e)
    ? e.some((t) => pe(o, t))
    : z(o, e.link)
      ? !0
      : e.items
        ? pe(o, e.items)
        : !1;
}
function Y(o, e) {
  return [...o].map((t) => {
    const s = { ...t },
      n = s.base || e;
    return n && s.link && (s.link = n + s.link), s.items && (s.items = Y(s.items, n)), s;
  });
}
function Z() {
  const { frontmatter: o, page: e, theme: t } = P(),
    s = ue('(min-width: 960px)'),
    n = S(!1),
    l = y(() => {
      const I = t.value.sidebar,
        C = e.value.relativePath;
      return I ? Ne(I, C) : [];
    }),
    i = S(l.value);
  F(l, (I, C) => {
    JSON.stringify(I) !== JSON.stringify(C) && (i.value = l.value);
  });
  const v = y(() => o.value.sidebar !== !1 && i.value.length > 0 && o.value.layout !== 'home'),
    p = y(() =>
      b ? (o.value.aside == null ? t.value.aside === 'left' : o.value.aside === 'left') : !1
    ),
    b = y(() =>
      o.value.layout === 'home'
        ? !1
        : o.value.aside != null
          ? !!o.value.aside
          : t.value.aside !== !1
    ),
    V = y(() => v.value && s.value),
    $ = y(() => (v.value ? pt(i.value) : []));
  function L() {
    n.value = !0;
  }
  function w() {
    n.value = !1;
  }
  function H() {
    n.value ? w() : L();
  }
  return {
    isOpen: n,
    sidebar: i,
    sidebarGroups: $,
    hasSidebar: v,
    hasAside: b,
    leftAside: p,
    isSidebarEnabled: V,
    open: L,
    close: w,
    toggle: H
  };
}
function ft(o, e) {
  let t;
  x(() => {
    t = o.value ? document.activeElement : void 0;
  }),
    O(() => {
      window.addEventListener('keyup', s);
    }),
    he(() => {
      window.removeEventListener('keyup', s);
    });
  function s(n) {
    n.key === 'Escape' && o.value && (e(), t == null || t.focus());
  }
}
function ht(o) {
  const { page: e, hash: t } = P(),
    s = S(!1),
    n = y(() => o.value.collapsed != null),
    l = y(() => !!o.value.link),
    i = S(!1),
    v = () => {
      i.value = z(e.value.relativePath, o.value.link);
    };
  F([e, o, t], v), O(v);
  const p = y(() => (i.value ? !0 : o.value.items ? pe(e.value.relativePath, o.value.items) : !1)),
    b = y(() => !!(o.value.items && o.value.items.length));
  x(() => {
    s.value = !!(n.value && o.value.collapsed);
  }),
    me(() => {
      (i.value || p.value) && (s.value = !1);
    });
  function V() {
    n.value && (s.value = !s.value);
  }
  return {
    collapsed: s,
    collapsible: n,
    isLink: l,
    isActiveLink: i,
    hasActiveLink: p,
    hasChildren: b,
    toggle: V
  };
}
function mt() {
  const { hasSidebar: o } = Z(),
    e = ue('(min-width: 960px)'),
    t = ue('(min-width: 1280px)');
  return { isAsideEnabled: y(() => (!t.value && !e.value ? !1 : o.value ? t.value : e.value)) };
}
const _t = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,
  ve = [];
function He(o) {
  return (
    (typeof o.outline == 'object' && !Array.isArray(o.outline) && o.outline.label) ||
    o.outlineTitle ||
    'On this page'
  );
}
function be(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const s = Number(t.tagName[1]);
      return { element: t, title: kt(t), link: '#' + t.id, level: s };
    });
  return bt(e, o);
}
function kt(o) {
  let e = '';
  for (const t of o.childNodes)
    if (t.nodeType === 1) {
      if (_t.test(t.className)) continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function bt(o, e) {
  if (e === !1) return [];
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [s, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t;
  return yt(o, s, n);
}
function gt(o, e) {
  const { isAsideEnabled: t } = mt(),
    s = nt(l, 100);
  let n = null;
  O(() => {
    requestAnimationFrame(l), window.addEventListener('scroll', s);
  }),
    Ue(() => {
      i(location.hash);
    }),
    he(() => {
      window.removeEventListener('scroll', s);
    });
  function l() {
    if (!t.value) return;
    const v = window.scrollY,
      p = window.innerHeight,
      b = document.body.offsetHeight,
      V = Math.abs(v + p - b) < 1,
      $ = ve
        .map(({ element: w, link: H }) => ({ link: H, top: $t(w) }))
        .filter(({ top: w }) => !Number.isNaN(w))
        .sort((w, H) => w.top - H.top);
    if (!$.length) {
      i(null);
      return;
    }
    if (v < 1) {
      i(null);
      return;
    }
    if (V) {
      i($[$.length - 1].link);
      return;
    }
    let L = null;
    for (const { link: w, top: H } of $) {
      if (H > v + Ge() + 4) break;
      L = w;
    }
    i(L);
  }
  function i(v) {
    n && n.classList.remove('active'),
      v == null ? (n = null) : (n = o.value.querySelector(`a[href="${decodeURIComponent(v)}"]`));
    const p = n;
    p
      ? (p.classList.add('active'),
        (e.value.style.top = p.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'));
  }
}
function $t(o) {
  let e = 0;
  for (; o !== document.body; ) {
    if (o === null) return NaN;
    (e += o.offsetTop), (o = o.offsetParent);
  }
  return e;
}
function yt(o, e, t) {
  ve.length = 0;
  const s = [],
    n = [];
  return (
    o.forEach((l) => {
      const i = { ...l, children: [] };
      let v = n[n.length - 1];
      for (; v && v.level >= i.level; ) n.pop(), (v = n[n.length - 1]);
      if (i.element.classList.contains('ignore-header') || (v && 'shouldIgnore' in v)) {
        n.push({ level: i.level, shouldIgnore: !0 });
        return;
      }
      i.level > t ||
        i.level < e ||
        (ve.push({ element: i.element, link: i.link }),
        v ? v.children.push(i) : s.push(i),
        n.push(i));
    }),
    s
  );
}
const Lt = ['href', 'title'],
  Vt = m({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const s = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(s));
        n == null || n.focus({ preventScroll: !0 });
      }
      return (t, s) => {
        const n = W('VPDocOutlineItem', !0);
        return (
          a(),
          c(
            'ul',
            { class: M(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              c(
                N,
                null,
                B(
                  t.headers,
                  ({ children: l, link: i, title: v }) => (
                    a(),
                    c('li', null, [
                      d('a', { class: 'outline-link', href: i, onClick: e, title: v }, T(v), 9, Lt),
                      l != null && l.length
                        ? (a(), k(n, { key: 0, headers: l }, null, 8, ['headers']))
                        : h('', !0)
                    ])
                  )
                ),
                256
              ))
            ],
            2
          )
        );
      };
    }
  }),
  Ie = g(Vt, [['__scopeId', 'data-v-acb74d33']]),
  Pt = { class: 'content' },
  St = { 'aria-level': '2', class: 'outline-title', id: 'doc-outline-aria-label', role: 'heading' },
  Mt = m({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = P(),
        s = Pe([]);
      ee(() => {
        s.value = be(e.value.outline ?? t.value.outline);
      });
      const n = S(),
        l = S();
      return (
        gt(n, l),
        (i, v) => (
          a(),
          c(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: M(['VPDocAsideOutline', { 'has-outline': s.value.length > 0 }]),
              ref_key: 'container',
              ref: n
            },
            [
              d('div', Pt, [
                d('div', { class: 'outline-marker', ref_key: 'marker', ref: l }, null, 512),
                d('div', St, T(r(He)(r(t))), 1),
                _(Ie, { headers: s.value, root: !0 }, null, 8, ['headers'])
              ])
            ],
            2
          )
        )
      );
    }
  }),
  wt = g(Mt, [['__scopeId', 'data-v-5dc6e920']]),
  Ct = { class: 'VPDocAsideCarbonAds' },
  Tt = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null;
      return (t, s) => (
        a(), c('div', Ct, [_(r(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])])
      );
    }
  }),
  Nt = { class: 'VPDocAside' },
  Ht = m({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = P();
      return (t, s) => (
        a(),
        c('div', Nt, [
          u(t.$slots, 'aside-top', {}, void 0, !0),
          u(t.$slots, 'aside-outline-before', {}, void 0, !0),
          _(wt),
          u(t.$slots, 'aside-outline-after', {}, void 0, !0),
          s[0] || (s[0] = d('div', { class: 'spacer' }, null, -1)),
          u(t.$slots, 'aside-ads-before', {}, void 0, !0),
          r(e).carbonAds
            ? (a(), k(Tt, { key: 0, 'carbon-ads': r(e).carbonAds }, null, 8, ['carbon-ads']))
            : h('', !0),
          u(t.$slots, 'aside-ads-after', {}, void 0, !0),
          u(t.$slots, 'aside-bottom', {}, void 0, !0)
        ])
      );
    }
  }),
  It = g(Ht, [['__scopeId', 'data-v-12065ad3']]);
function Bt() {
  const { theme: o, page: e } = P();
  return y(() => {
    const { text: t = 'Edit this page', pattern: s = '' } = o.value.editLink || {};
    let n;
    return (
      typeof s == 'function' ? (n = s(e.value)) : (n = s.replace(/:path/g, e.value.filePath)),
      { url: n, text: t }
    );
  });
}
function At() {
  const { page: o, theme: e, frontmatter: t } = P();
  return y(() => {
    var b, V, $, L, w, H, I, C;
    const s = Ne(e.value.sidebar, o.value.relativePath),
      n = vt(s),
      l = Ft(n, (A) => A.link.replace(/[?#].*$/, '')),
      i = l.findIndex((A) => z(o.value.relativePath, A.link)),
      v =
        (((b = e.value.docFooter) == null ? void 0 : b.prev) === !1 && !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((V = e.value.docFooter) == null ? void 0 : V.next) === !1 && !t.value.next) ||
        t.value.next === !1;
    return {
      prev: v
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                  ? t.value.prev.text
                  : void 0) ??
              (($ = l[i - 1]) == null ? void 0 : $.docFooterText) ??
              ((L = l[i - 1]) == null ? void 0 : L.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((w = l[i - 1]) == null ? void 0 : w.link)
          },
      next: p
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                  ? t.value.next.text
                  : void 0) ??
              ((H = l[i + 1]) == null ? void 0 : H.docFooterText) ??
              ((I = l[i + 1]) == null ? void 0 : I.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((C = l[i + 1]) == null ? void 0 : C.link)
          }
    };
  });
}
function Ft(o, e) {
  const t = new Set();
  return o.filter((s) => {
    const n = e(s);
    return t.has(n) ? !1 : t.add(n);
  });
}
const D = m({
    __name: 'VPLink',
    props: { tag: {}, href: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
    setup(o) {
      const e = o,
        t = y(() => e.tag ?? (e.href ? 'a' : 'span')),
        s = y(() => (e.href && Se.test(e.href)) || e.target === '_blank');
      return (n, l) => (
        a(),
        k(
          E(t.value),
          {
            class: M([
              'VPLink',
              { link: n.href, 'vp-external-link-icon': s.value, 'no-icon': n.noIcon }
            ]),
            href: n.href ? r(ke)(n.href) : void 0,
            target: n.target ?? (s.value ? '_blank' : void 0),
            rel: n.rel ?? (s.value ? 'noreferrer' : void 0)
          },
          { default: f(() => [u(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    }
  }),
  Et = { class: 'VPLastUpdated' },
  Dt = ['datetime'],
  Ot = m({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, lang: s } = P(),
        n = y(() => new Date(t.value.lastUpdated)),
        l = y(() => n.value.toISOString()),
        i = S('');
      return (
        O(() => {
          x(() => {
            var v, p, b;
            i.value = new Intl.DateTimeFormat(
              (p = (v = e.value.lastUpdated) == null ? void 0 : v.formatOptions) != null &&
              p.forceLocale
                ? s.value
                : void 0,
              ((b = e.value.lastUpdated) == null ? void 0 : b.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short'
              }
            ).format(n.value);
          });
        }),
        (v, p) => {
          var b;
          return (
            a(),
            c('p', Et, [
              j(
                T(
                  ((b = r(e).lastUpdated) == null ? void 0 : b.text) ||
                    r(e).lastUpdatedText ||
                    'Last updated'
                ) + ': ',
                1
              ),
              d('time', { datetime: l.value }, T(i.value), 9, Dt)
            ])
          );
        }
      );
    }
  }),
  Zt = g(Ot, [['__scopeId', 'data-v-ef933c67']]),
  Ut = { key: 0, class: 'VPDocFooter' },
  Gt = { key: 0, class: 'edit-info' },
  jt = { key: 0, class: 'edit-link' },
  zt = { key: 1, class: 'last-updated' },
  Wt = { key: 1, class: 'prev-next', 'aria-labelledby': 'doc-footer-aria-label' },
  qt = { class: 'pager' },
  Rt = ['innerHTML'],
  Kt = ['innerHTML'],
  Jt = { class: 'pager' },
  Yt = ['innerHTML'],
  Qt = ['innerHTML'],
  Xt = m({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: s } = P(),
        n = Bt(),
        l = At(),
        i = y(() => e.value.editLink && s.value.editLink !== !1),
        v = y(() => t.value.lastUpdated),
        p = y(() => i.value || v.value || l.value.prev || l.value.next);
      return (b, V) => {
        var $, L, w, H;
        return p.value
          ? (a(),
            c('footer', Ut, [
              u(b.$slots, 'doc-footer-before', {}, void 0, !0),
              i.value || v.value
                ? (a(),
                  c('div', Gt, [
                    i.value
                      ? (a(),
                        c('div', jt, [
                          _(
                            D,
                            { class: 'edit-link-button', href: r(n).url, 'no-icon': !0 },
                            {
                              default: f(() => [
                                V[0] ||
                                  (V[0] = d(
                                    'span',
                                    { class: 'vpi-square-pen edit-link-icon' },
                                    null,
                                    -1
                                  )),
                                j(' ' + T(r(n).text), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]))
                      : h('', !0),
                    v.value ? (a(), c('div', zt, [_(Zt)])) : h('', !0)
                  ]))
                : h('', !0),
              (($ = r(l).prev) != null && $.link) || ((L = r(l).next) != null && L.link)
                ? (a(),
                  c('nav', Wt, [
                    V[1] ||
                      (V[1] = d(
                        'span',
                        { class: 'visually-hidden', id: 'doc-footer-aria-label' },
                        'Pager',
                        -1
                      )),
                    d('div', qt, [
                      (w = r(l).prev) != null && w.link
                        ? (a(),
                          k(
                            D,
                            { key: 0, class: 'pager-link prev', href: r(l).prev.link },
                            {
                              default: f(() => {
                                var I;
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((I = r(e).docFooter) == null ? void 0 : I.prev) ||
                                        'Previous page'
                                    },
                                    null,
                                    8,
                                    Rt
                                  ),
                                  d(
                                    'span',
                                    { class: 'title', innerHTML: r(l).prev.text },
                                    null,
                                    8,
                                    Kt
                                  )
                                ];
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0)
                    ]),
                    d('div', Jt, [
                      (H = r(l).next) != null && H.link
                        ? (a(),
                          k(
                            D,
                            { key: 0, class: 'pager-link next', href: r(l).next.link },
                            {
                              default: f(() => {
                                var I;
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((I = r(e).docFooter) == null ? void 0 : I.next) ||
                                        'Next page'
                                    },
                                    null,
                                    8,
                                    Yt
                                  ),
                                  d(
                                    'span',
                                    { class: 'title', innerHTML: r(l).next.text },
                                    null,
                                    8,
                                    Qt
                                  )
                                ];
                              }),
                              _: 1
                            },
                            8,
                            ['href']
                          ))
                        : h('', !0)
                    ])
                  ]))
                : h('', !0)
            ]))
          : h('', !0);
      };
    }
  }),
  xt = g(Xt, [['__scopeId', 'data-v-14bf2899']]),
  en = { class: 'container' },
  tn = { class: 'aside-container' },
  nn = { class: 'aside-content' },
  sn = { class: 'content' },
  on = { class: 'content-container' },
  an = { class: 'main' },
  rn = m({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = P(),
        t = te(),
        { hasSidebar: s, hasAside: n, leftAside: l } = Z(),
        i = y(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''));
      return (v, p) => {
        const b = W('Content');
        return (
          a(),
          c(
            'div',
            { class: M(['VPDoc', { 'has-sidebar': r(s), 'has-aside': r(n) }]) },
            [
              u(v.$slots, 'doc-top', {}, void 0, !0),
              d('div', en, [
                r(n)
                  ? (a(),
                    c(
                      'div',
                      { key: 0, class: M(['aside', { 'left-aside': r(l) }]) },
                      [
                        p[0] || (p[0] = d('div', { class: 'aside-curtain' }, null, -1)),
                        d('div', tn, [
                          d('div', nn, [
                            _(It, null, {
                              'aside-top': f(() => [u(v.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': f(() => [
                                u(v.$slots, 'aside-bottom', {}, void 0, !0)
                              ]),
                              'aside-outline-before': f(() => [
                                u(v.$slots, 'aside-outline-before', {}, void 0, !0)
                              ]),
                              'aside-outline-after': f(() => [
                                u(v.$slots, 'aside-outline-after', {}, void 0, !0)
                              ]),
                              'aside-ads-before': f(() => [
                                u(v.$slots, 'aside-ads-before', {}, void 0, !0)
                              ]),
                              'aside-ads-after': f(() => [
                                u(v.$slots, 'aside-ads-after', {}, void 0, !0)
                              ]),
                              _: 3
                            })
                          ])
                        ])
                      ],
                      2
                    ))
                  : h('', !0),
                d('div', sn, [
                  d('div', on, [
                    u(v.$slots, 'doc-before', {}, void 0, !0),
                    d('main', an, [
                      _(
                        b,
                        {
                          class: M([
                            'vp-doc',
                            [i.value, r(e).externalLinkIcon && 'external-link-icon-enabled']
                          ])
                        },
                        null,
                        8,
                        ['class']
                      )
                    ]),
                    _(xt, null, {
                      'doc-footer-before': f(() => [
                        u(v.$slots, 'doc-footer-before', {}, void 0, !0)
                      ]),
                      _: 3
                    }),
                    u(v.$slots, 'doc-after', {}, void 0, !0)
                  ])
                ])
              ]),
              u(v.$slots, 'doc-bottom', {}, void 0, !0)
            ],
            2
          )
        );
      };
    }
  }),
  ln = g(rn, [['__scopeId', 'data-v-461cdebc']]),
  cn = m({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {}
    },
    setup(o) {
      const e = o,
        t = y(() => e.href && Se.test(e.href)),
        s = y(() => e.tag || (e.href ? 'a' : 'button'));
      return (n, l) => (
        a(),
        k(
          E(s.value),
          {
            class: M(['VPButton', [n.size, n.theme]]),
            href: n.href ? r(ke)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0)
          },
          { default: f(() => [j(T(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    }
  }),
  un = g(cn, [['__scopeId', 'data-v-f3d6b5a5']]),
  dn = ['src', 'alt'],
  pn = m({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const s = W('VPImage', !0);
        return e.image
          ? (a(),
            c(
              N,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    c(
                      'img',
                      G(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? e.$attrs : { ...e.image, ...e.$attrs },
                        {
                          src: r(fe)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || '')
                        }
                      ),
                      null,
                      16,
                      dn
                    ))
                  : (a(),
                    c(
                      N,
                      { key: 1 },
                      [
                        _(
                          s,
                          G({ class: 'dark', image: e.image.dark, alt: e.image.alt }, e.$attrs),
                          null,
                          16,
                          ['image', 'alt']
                        ),
                        _(
                          s,
                          G({ class: 'light', image: e.image.light, alt: e.image.alt }, e.$attrs),
                          null,
                          16,
                          ['image', 'alt']
                        )
                      ],
                      64
                    ))
              ],
              64
            ))
          : h('', !0);
      };
    }
  }),
  Q = g(pn, [['__scopeId', 'data-v-aa184d78']]),
  vn = { class: 'container' },
  fn = { class: 'main' },
  hn = { class: 'heading' },
  mn = ['innerHTML'],
  _n = ['innerHTML'],
  kn = ['innerHTML'],
  bn = { key: 0, class: 'actions' },
  gn = { key: 0, class: 'image' },
  $n = { class: 'image-container' },
  yn = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = ne('hero-image-slot-exists');
      return (t, s) => (
        a(),
        c(
          'div',
          { class: M(['VPHero', { 'has-image': t.image || r(e) }]) },
          [
            d('div', vn, [
              d('div', fn, [
                u(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                u(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    d('h1', hn, [
                      t.name
                        ? (a(),
                          c('span', { key: 0, innerHTML: t.name, class: 'name clip' }, null, 8, mn))
                        : h('', !0),
                      t.text
                        ? (a(),
                          c('span', { key: 1, innerHTML: t.text, class: 'text' }, null, 8, _n))
                        : h('', !0)
                    ]),
                    t.tagline
                      ? (a(),
                        c('p', { key: 0, innerHTML: t.tagline, class: 'tagline' }, null, 8, kn))
                      : h('', !0)
                  ],
                  !0
                ),
                u(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    c('div', bn, [
                      (a(!0),
                      c(
                        N,
                        null,
                        B(
                          t.actions,
                          (n) => (
                            a(),
                            c('div', { key: n.link, class: 'action' }, [
                              _(
                                un,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: n.theme,
                                  text: n.text,
                                  href: n.link,
                                  target: n.target,
                                  rel: n.rel
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel']
                              )
                            ])
                          )
                        ),
                        128
                      ))
                    ]))
                  : h('', !0),
                u(t.$slots, 'home-hero-actions-after', {}, void 0, !0)
              ]),
              t.image || r(e)
                ? (a(),
                  c('div', gn, [
                    d('div', $n, [
                      s[0] || (s[0] = d('div', { class: 'image-bg' }, null, -1)),
                      u(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              k(Q, { key: 0, class: 'image-src', image: t.image }, null, 8, [
                                'image'
                              ]))
                            : h('', !0)
                        ],
                        !0
                      )
                    ])
                  ]))
                : h('', !0)
            ])
          ],
          2
        )
      );
    }
  }),
  Ln = g(yn, [['__scopeId', 'data-v-58c6afef']]),
  Vn = m({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = P();
      return (t, s) =>
        r(e).hero
          ? (a(),
            k(
              Ln,
              {
                key: 0,
                class: 'VPHomeHero',
                name: r(e).hero.name,
                text: r(e).hero.text,
                tagline: r(e).hero.tagline,
                image: r(e).hero.image,
                actions: r(e).hero.actions
              },
              {
                'home-hero-info-before': f(() => [u(t.$slots, 'home-hero-info-before')]),
                'home-hero-info': f(() => [u(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': f(() => [u(t.$slots, 'home-hero-info-after')]),
                'home-hero-actions-after': f(() => [u(t.$slots, 'home-hero-actions-after')]),
                'home-hero-image': f(() => [u(t.$slots, 'home-hero-image')]),
                _: 3
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : h('', !0);
    }
  }),
  Pn = { class: 'box' },
  Sn = { key: 0, class: 'icon' },
  Mn = ['innerHTML'],
  wn = ['innerHTML'],
  Cn = ['innerHTML'],
  Tn = { key: 4, class: 'link-text' },
  Nn = { class: 'link-text-value' },
  Hn = m({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {}, rel: {}, target: {} },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          D,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div'
          },
          {
            default: f(() => [
              d('article', Pn, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    c('div', Sn, [
                      _(
                        Q,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      )
                    ]))
                  : typeof e.icon == 'object'
                    ? (a(),
                      k(
                        Q,
                        {
                          key: 1,
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width']
                      ))
                    : e.icon
                      ? (a(), c('div', { key: 2, class: 'icon', innerHTML: e.icon }, null, 8, Mn))
                      : h('', !0),
                d('h2', { class: 'title', innerHTML: e.title }, null, 8, wn),
                e.details
                  ? (a(), c('p', { key: 3, class: 'details', innerHTML: e.details }, null, 8, Cn))
                  : h('', !0),
                e.linkText
                  ? (a(),
                    c('div', Tn, [
                      d('p', Nn, [
                        j(T(e.linkText) + ' ', 1),
                        t[0] ||
                          (t[0] = d('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1))
                      ])
                    ]))
                  : h('', !0)
              ])
            ]),
            _: 1
          },
          8,
          ['href', 'rel', 'target', 'tag']
        )
      );
    }
  }),
  In = g(Hn, [['__scopeId', 'data-v-41260c4b']]),
  Bn = { key: 0, class: 'VPFeatures' },
  An = { class: 'container' },
  Fn = { class: 'items' },
  En = m({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(o) {
      const e = o,
        t = y(() => {
          const s = e.features.length;
          if (s) {
            if (s === 2) return 'grid-2';
            if (s === 3) return 'grid-3';
            if (s % 3 === 0) return 'grid-6';
            if (s > 3) return 'grid-4';
          } else return;
        });
      return (s, n) =>
        s.features
          ? (a(),
            c('div', Bn, [
              d('div', An, [
                d('div', Fn, [
                  (a(!0),
                  c(
                    N,
                    null,
                    B(
                      s.features,
                      (l) => (
                        a(),
                        c(
                          'div',
                          { key: l.title, class: M(['item', [t.value]]) },
                          [
                            _(
                              In,
                              {
                                icon: l.icon,
                                title: l.title,
                                details: l.details,
                                link: l.link,
                                'link-text': l.linkText,
                                rel: l.rel,
                                target: l.target
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text', 'rel', 'target']
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]))
          : h('', !0);
    }
  }),
  Dn = g(En, [['__scopeId', 'data-v-b05c0f50']]),
  On = m({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = P();
      return (t, s) =>
        r(e).features
          ? (a(),
            k(Dn, { key: 0, class: 'VPHomeFeatures', features: r(e).features }, null, 8, [
              'features'
            ]))
          : h('', !0);
    }
  }),
  Zn = m({
    __name: 'VPHomeContent',
    setup(o) {
      const { width: e } = je({ initialWidth: 0, includeScrollbar: !1 });
      return (t, s) => (
        a(),
        c(
          'div',
          {
            class: 'vp-doc container',
            style: _e(r(e) ? { '--vp-offset': `calc(50% - ${r(e) / 2}px)` } : {})
          },
          [u(t.$slots, 'default', {}, void 0, !0)],
          4
        )
      );
    }
  }),
  Un = g(Zn, [['__scopeId', 'data-v-6d00bebc']]),
  Gn = m({
    __name: 'VPHome',
    setup(o) {
      const { frontmatter: e, theme: t } = P();
      return (s, n) => {
        const l = W('Content');
        return (
          a(),
          c(
            'div',
            { class: M(['VPHome', { 'external-link-icon-enabled': r(t).externalLinkIcon }]) },
            [
              u(s.$slots, 'home-hero-before', {}, void 0, !0),
              _(Vn, null, {
                'home-hero-info-before': f(() => [
                  u(s.$slots, 'home-hero-info-before', {}, void 0, !0)
                ]),
                'home-hero-info': f(() => [u(s.$slots, 'home-hero-info', {}, void 0, !0)]),
                'home-hero-info-after': f(() => [
                  u(s.$slots, 'home-hero-info-after', {}, void 0, !0)
                ]),
                'home-hero-actions-after': f(() => [
                  u(s.$slots, 'home-hero-actions-after', {}, void 0, !0)
                ]),
                'home-hero-image': f(() => [u(s.$slots, 'home-hero-image', {}, void 0, !0)]),
                _: 3
              }),
              u(s.$slots, 'home-hero-after', {}, void 0, !0),
              u(s.$slots, 'home-features-before', {}, void 0, !0),
              _(On),
              u(s.$slots, 'home-features-after', {}, void 0, !0),
              r(e).markdownStyles !== !1
                ? (a(), k(Un, { key: 0 }, { default: f(() => [_(l)]), _: 1 }))
                : (a(), k(l, { key: 1 }))
            ],
            2
          )
        );
      };
    }
  }),
  jn = g(Gn, [['__scopeId', 'data-v-2e47ec67']]),
  zn = {},
  Wn = { class: 'VPPage' };
function qn(o, e) {
  const t = W('Content');
  return a(), c('div', Wn, [u(o.$slots, 'page-top'), _(t), u(o.$slots, 'page-bottom')]);
}
const Rn = g(zn, [['render', qn]]),
  Kn = m({
    __name: 'VPContent',
    setup(o) {
      const { page: e, frontmatter: t } = P(),
        { hasSidebar: s } = Z();
      return (n, l) => (
        a(),
        c(
          'div',
          {
            class: M(['VPContent', { 'has-sidebar': r(s), 'is-home': r(t).layout === 'home' }]),
            id: 'VPContent'
          },
          [
            r(e).isNotFound
              ? u(n.$slots, 'not-found', { key: 0 }, () => [_(dt)], !0)
              : r(t).layout === 'page'
                ? (a(),
                  k(
                    Rn,
                    { key: 1 },
                    {
                      'page-top': f(() => [u(n.$slots, 'page-top', {}, void 0, !0)]),
                      'page-bottom': f(() => [u(n.$slots, 'page-bottom', {}, void 0, !0)]),
                      _: 3
                    }
                  ))
                : r(t).layout === 'home'
                  ? (a(),
                    k(
                      jn,
                      { key: 2 },
                      {
                        'home-hero-before': f(() => [
                          u(n.$slots, 'home-hero-before', {}, void 0, !0)
                        ]),
                        'home-hero-info-before': f(() => [
                          u(n.$slots, 'home-hero-info-before', {}, void 0, !0)
                        ]),
                        'home-hero-info': f(() => [u(n.$slots, 'home-hero-info', {}, void 0, !0)]),
                        'home-hero-info-after': f(() => [
                          u(n.$slots, 'home-hero-info-after', {}, void 0, !0)
                        ]),
                        'home-hero-actions-after': f(() => [
                          u(n.$slots, 'home-hero-actions-after', {}, void 0, !0)
                        ]),
                        'home-hero-image': f(() => [
                          u(n.$slots, 'home-hero-image', {}, void 0, !0)
                        ]),
                        'home-hero-after': f(() => [
                          u(n.$slots, 'home-hero-after', {}, void 0, !0)
                        ]),
                        'home-features-before': f(() => [
                          u(n.$slots, 'home-features-before', {}, void 0, !0)
                        ]),
                        'home-features-after': f(() => [
                          u(n.$slots, 'home-features-after', {}, void 0, !0)
                        ]),
                        _: 3
                      }
                    ))
                  : r(t).layout && r(t).layout !== 'doc'
                    ? (a(), k(E(r(t).layout), { key: 3 }))
                    : (a(),
                      k(
                        ln,
                        { key: 4 },
                        {
                          'doc-top': f(() => [u(n.$slots, 'doc-top', {}, void 0, !0)]),
                          'doc-bottom': f(() => [u(n.$slots, 'doc-bottom', {}, void 0, !0)]),
                          'doc-footer-before': f(() => [
                            u(n.$slots, 'doc-footer-before', {}, void 0, !0)
                          ]),
                          'doc-before': f(() => [u(n.$slots, 'doc-before', {}, void 0, !0)]),
                          'doc-after': f(() => [u(n.$slots, 'doc-after', {}, void 0, !0)]),
                          'aside-top': f(() => [u(n.$slots, 'aside-top', {}, void 0, !0)]),
                          'aside-outline-before': f(() => [
                            u(n.$slots, 'aside-outline-before', {}, void 0, !0)
                          ]),
                          'aside-outline-after': f(() => [
                            u(n.$slots, 'aside-outline-after', {}, void 0, !0)
                          ]),
                          'aside-ads-before': f(() => [
                            u(n.$slots, 'aside-ads-before', {}, void 0, !0)
                          ]),
                          'aside-ads-after': f(() => [
                            u(n.$slots, 'aside-ads-after', {}, void 0, !0)
                          ]),
                          'aside-bottom': f(() => [u(n.$slots, 'aside-bottom', {}, void 0, !0)]),
                          _: 3
                        }
                      ))
          ],
          2
        )
      );
    }
  }),
  Jn = g(Kn, [['__scopeId', 'data-v-74f09991']]),
  Yn = { class: 'container' },
  Qn = ['innerHTML'],
  Xn = ['innerHTML'],
  xn = m({
    __name: 'VPFooter',
    setup(o) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: s } = Z();
      return (n, l) =>
        r(e).footer && r(t).footer !== !1
          ? (a(),
            c(
              'footer',
              { key: 0, class: M(['VPFooter', { 'has-sidebar': r(s) }]) },
              [
                d('div', Yn, [
                  r(e).footer.message
                    ? (a(),
                      c(
                        'p',
                        { key: 0, class: 'message', innerHTML: r(e).footer.message },
                        null,
                        8,
                        Qn
                      ))
                    : h('', !0),
                  r(e).footer.copyright
                    ? (a(),
                      c(
                        'p',
                        { key: 1, class: 'copyright', innerHTML: r(e).footer.copyright },
                        null,
                        8,
                        Xn
                      ))
                    : h('', !0)
                ])
              ],
              2
            ))
          : h('', !0);
    }
  }),
  es = g(xn, [['__scopeId', 'data-v-112a9ba4']]);
function ts() {
  const { theme: o, frontmatter: e } = P(),
    t = Pe([]),
    s = y(() => t.value.length > 0);
  return (
    ee(() => {
      t.value = be(e.value.outline ?? o.value.outline);
    }),
    { headers: t, hasLocalNav: s }
  );
}
const ns = { class: 'menu-text' },
  ss = { class: 'header' },
  os = { class: 'outline' },
  as = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = P(),
        s = S(!1),
        n = S(0),
        l = S(),
        i = S();
      function v($) {
        var L;
        ((L = l.value) != null && L.contains($.target)) || (s.value = !1);
      }
      F(s, ($) => {
        if ($) {
          document.addEventListener('click', v);
          return;
        }
        document.removeEventListener('click', v);
      }),
        ze('Escape', () => {
          s.value = !1;
        }),
        ee(() => {
          s.value = !1;
        });
      function p() {
        (s.value = !s.value),
          (n.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function b($) {
        $.target.classList.contains('outline-link') &&
          (i.value && (i.value.style.transition = 'none'),
          Me(() => {
            s.value = !1;
          }));
      }
      function V() {
        (s.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return ($, L) => (
        a(),
        c(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: _e({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: l
          },
          [
            $.headers.length > 0
              ? (a(),
                c(
                  'button',
                  { key: 0, onClick: p, class: M({ open: s.value }) },
                  [
                    d('span', ns, T(r(He)(r(t))), 1),
                    L[0] || (L[0] = d('span', { class: 'vpi-chevron-right icon' }, null, -1))
                  ],
                  2
                ))
              : (a(),
                c(
                  'button',
                  { key: 1, onClick: V },
                  T(r(t).returnToTopLabel || 'Return to top'),
                  1
                )),
            _(
              X,
              { name: 'flyout' },
              {
                default: f(() => [
                  s.value
                    ? (a(),
                      c(
                        'div',
                        { key: 0, ref_key: 'items', ref: i, class: 'items', onClick: b },
                        [
                          d('div', ss, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: V },
                              T(r(t).returnToTopLabel || 'Return to top'),
                              1
                            )
                          ]),
                          d('div', os, [_(Ie, { headers: $.headers }, null, 8, ['headers'])])
                        ],
                        512
                      ))
                    : h('', !0)
                ]),
                _: 1
              }
            )
          ],
          4
        )
      );
    }
  }),
  rs = g(as, [['__scopeId', 'data-v-4ace4b2e']]),
  ls = { class: 'container' },
  is = ['aria-expanded'],
  cs = { class: 'menu-text' },
  us = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: s } = Z(),
        { headers: n } = ts(),
        { y: l } = we(),
        i = S(0);
      O(() => {
        i.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')
        );
      }),
        ee(() => {
          n.value = be(t.value.outline ?? e.value.outline);
        });
      const v = y(() => n.value.length === 0),
        p = y(() => v.value && !s.value),
        b = y(() => ({ VPLocalNav: !0, 'has-sidebar': s.value, empty: v.value, fixed: p.value }));
      return (V, $) =>
        r(t).layout !== 'home' && (!p.value || r(l) >= i.value)
          ? (a(),
            c(
              'div',
              { key: 0, class: M(b.value) },
              [
                d('div', ls, [
                  r(s)
                    ? (a(),
                      c(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': V.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: $[0] || ($[0] = (L) => V.$emit('open-menu'))
                        },
                        [
                          $[1] ||
                            ($[1] = d('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
                          d('span', cs, T(r(e).sidebarMenuLabel || 'Menu'), 1)
                        ],
                        8,
                        is
                      ))
                    : h('', !0),
                  _(rs, { headers: r(n), navHeight: i.value }, null, 8, ['headers', 'navHeight'])
                ])
              ],
              2
            ))
          : h('', !0);
    }
  }),
  ds = g(us, [['__scopeId', 'data-v-332adcf8']]);
function ps() {
  const o = S(!1);
  function e() {
    (o.value = !0), window.addEventListener('resize', n);
  }
  function t() {
    (o.value = !1), window.removeEventListener('resize', n);
  }
  function s() {
    o.value ? t() : e();
  }
  function n() {
    window.outerWidth >= 768 && t();
  }
  const l = te();
  return F(() => l.path, t), { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: s };
}
const vs = {},
  fs = { class: 'VPSwitch', type: 'button', role: 'switch' },
  hs = { class: 'check' },
  ms = { key: 0, class: 'icon' };
function _s(o, e) {
  return (
    a(),
    c('button', fs, [
      d('span', hs, [
        o.$slots.default
          ? (a(), c('span', ms, [u(o.$slots, 'default', {}, void 0, !0)]))
          : h('', !0)
      ])
    ])
  );
}
const ks = g(vs, [
    ['render', _s],
    ['__scopeId', 'data-v-b03f3ead']
  ]),
  bs = m({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = P(),
        s = ne('toggle-appearance', () => {
          e.value = !e.value;
        }),
        n = S('');
      return (
        me(() => {
          n.value = e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme';
        }),
        (l, i) => (
          a(),
          k(
            ks,
            { title: n.value, class: 'VPSwitchAppearance', 'aria-checked': r(e), onClick: r(s) },
            {
              default: f(
                () =>
                  i[0] ||
                  (i[0] = [
                    d('span', { class: 'vpi-sun sun' }, null, -1),
                    d('span', { class: 'vpi-moon moon' }, null, -1)
                  ])
              ),
              _: 1
            },
            8,
            ['title', 'aria-checked', 'onClick']
          )
        )
      );
    }
  }),
  ge = g(bs, [['__scopeId', 'data-v-38dfffb5']]),
  gs = { key: 0, class: 'VPNavBarAppearance' },
  $s = m({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = P();
      return (t, s) =>
        r(e).appearance && r(e).appearance !== 'force-dark' && r(e).appearance !== 'force-auto'
          ? (a(), c('div', gs, [_(ge)]))
          : h('', !0);
    }
  }),
  ys = g($s, [['__scopeId', 'data-v-94d24a99']]),
  $e = S();
let Be = !1,
  ie = 0;
function Ls(o) {
  const e = S(!1);
  if (se) {
    !Be && Vs(), ie++;
    const t = F($e, (s) => {
      var n, l, i;
      s === o.el.value || ((n = o.el.value) != null && n.contains(s))
        ? ((e.value = !0), (l = o.onFocus) == null || l.call(o))
        : ((e.value = !1), (i = o.onBlur) == null || i.call(o));
    });
    he(() => {
      t(), ie--, ie || Ps();
    });
  }
  return We(e);
}
function Vs() {
  document.addEventListener('focusin', Ae), (Be = !0), ($e.value = document.activeElement);
}
function Ps() {
  document.removeEventListener('focusin', Ae);
}
function Ae() {
  $e.value = document.activeElement;
}
const Ss = { class: 'VPMenuLink' },
  Ms = ['innerHTML'],
  ws = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = P();
      return (t, s) => (
        a(),
        c('div', Ss, [
          _(
            D,
            {
              class: M({
                active: r(z)(
                  r(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch
                )
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
              'no-icon': t.item.noIcon
            },
            { default: f(() => [d('span', { innerHTML: t.item.text }, null, 8, Ms)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel', 'no-icon']
          )
        ])
      );
    }
  }),
  oe = g(ws, [['__scopeId', 'data-v-c2c3ee40']]),
  Cs = { class: 'VPMenuGroup' },
  Ts = { key: 0, class: 'title' },
  Ns = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Cs, [
          e.text ? (a(), c('p', Ts, T(e.text), 1)) : h('', !0),
          (a(!0),
          c(
            N,
            null,
            B(
              e.items,
              (s) => (
                a(),
                c(
                  N,
                  null,
                  ['link' in s ? (a(), k(oe, { key: 0, item: s }, null, 8, ['item'])) : h('', !0)],
                  64
                )
              )
            ),
            256
          ))
        ])
      );
    }
  }),
  Hs = g(Ns, [['__scopeId', 'data-v-53e5f09b']]),
  Is = { class: 'VPMenu' },
  Bs = { key: 0, class: 'items' },
  As = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Is, [
          e.items
            ? (a(),
              c('div', Bs, [
                (a(!0),
                c(
                  N,
                  null,
                  B(
                    e.items,
                    (s) => (
                      a(),
                      c(
                        N,
                        { key: JSON.stringify(s) },
                        [
                          'link' in s
                            ? (a(), k(oe, { key: 0, item: s }, null, 8, ['item']))
                            : 'component' in s
                              ? (a(),
                                k(E(s.component), G({ key: 1, ref_for: !0 }, s.props), null, 16))
                              : (a(),
                                k(Hs, { key: 2, text: s.text, items: s.items }, null, 8, [
                                  'text',
                                  'items'
                                ]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ]))
            : h('', !0),
          u(e.$slots, 'default', {}, void 0, !0)
        ])
      );
    }
  }),
  Fs = g(As, [['__scopeId', 'data-v-cbc258c6']]),
  Es = ['aria-expanded', 'aria-label'],
  Ds = { key: 0, class: 'text' },
  Os = ['innerHTML'],
  Zs = { key: 1, class: 'vpi-more-horizontal icon' },
  Us = { class: 'menu' },
  Gs = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = S(!1),
        t = S();
      Ls({ el: t, onBlur: s });
      function s() {
        e.value = !1;
      }
      return (n, l) => (
        a(),
        c(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: l[1] || (l[1] = (i) => (e.value = !0)),
            onMouseleave: l[2] || (l[2] = (i) => (e.value = !1))
          },
          [
            d(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': n.label,
                onClick: l[0] || (l[0] = (i) => (e.value = !e.value))
              },
              [
                n.button || n.icon
                  ? (a(),
                    c('span', Ds, [
                      n.icon
                        ? (a(), c('span', { key: 0, class: M([n.icon, 'option-icon']) }, null, 2))
                        : h('', !0),
                      n.button
                        ? (a(), c('span', { key: 1, innerHTML: n.button }, null, 8, Os))
                        : h('', !0),
                      l[3] || (l[3] = d('span', { class: 'vpi-chevron-down text-icon' }, null, -1))
                    ]))
                  : (a(), c('span', Zs))
              ],
              8,
              Es
            ),
            d('div', Us, [
              _(
                Fs,
                { items: n.items },
                { default: f(() => [u(n.$slots, 'default', {}, void 0, !0)]), _: 3 },
                8,
                ['items']
              )
            ])
          ],
          544
        )
      );
    }
  }),
  ye = g(Gs, [['__scopeId', 'data-v-fafb294e']]),
  js = ['href', 'aria-label', 'innerHTML'],
  zs = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = S();
      O(async () => {
        var l;
        await Me();
        const n = (l = t.value) == null ? void 0 : l.children[0];
        n instanceof HTMLElement &&
          n.className.startsWith('vpi-social-') &&
          (getComputedStyle(n).maskImage || getComputedStyle(n).webkitMaskImage) === 'none' &&
          n.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${e.icon}.svg')`
          );
      });
      const s = y(() =>
        typeof e.icon == 'object' ? e.icon.svg : `<span class="vpi-social-${e.icon}"></span>`
      );
      return (n, l) => (
        a(),
        c(
          'a',
          {
            ref_key: 'el',
            ref: t,
            class: 'VPSocialLink no-icon',
            href: n.link,
            'aria-label': n.ariaLabel ?? (typeof n.icon == 'string' ? n.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: s.value
          },
          null,
          8,
          js
        )
      );
    }
  }),
  Ws = g(zs, [['__scopeId', 'data-v-a46af5e9']]),
  qs = { class: 'VPSocialLinks' },
  Rs = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', qs, [
          (a(!0),
          c(
            N,
            null,
            B(
              e.links,
              ({ link: s, icon: n, ariaLabel: l }) => (
                a(),
                k(Ws, { key: s, icon: n, link: s, ariaLabel: l }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel'
                ])
              )
            ),
            128
          ))
        ])
      );
    }
  }),
  Le = g(Rs, [['__scopeId', 'data-v-8877f21f']]),
  Ks = { key: 0, class: 'group translations' },
  Js = { class: 'trans-title' },
  Ys = { key: 1, class: 'group' },
  Qs = { class: 'item appearance' },
  Xs = { class: 'label' },
  xs = { class: 'appearance-action' },
  eo = { key: 2, class: 'group' },
  to = { class: 'item social-links' },
  no = m({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = P(),
        { localeLinks: s, currentLang: n } = R({ correspondingLink: !0 }),
        l = y(() => (s.value.length && n.value.label) || e.value.appearance || t.value.socialLinks);
      return (i, v) =>
        l.value
          ? (a(),
            k(
              ye,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: f(() => [
                  r(s).length && r(n).label
                    ? (a(),
                      c('div', Ks, [
                        d('p', Js, T(r(n).label), 1),
                        (a(!0),
                        c(
                          N,
                          null,
                          B(r(s), (p) => (a(), k(oe, { key: p.link, item: p }, null, 8, ['item']))),
                          128
                        ))
                      ]))
                    : h('', !0),
                  r(e).appearance &&
                  r(e).appearance !== 'force-dark' &&
                  r(e).appearance !== 'force-auto'
                    ? (a(),
                      c('div', Ys, [
                        d('div', Qs, [
                          d('p', Xs, T(r(t).darkModeSwitchLabel || 'Appearance'), 1),
                          d('div', xs, [_(ge)])
                        ])
                      ]))
                    : h('', !0),
                  r(t).socialLinks
                    ? (a(),
                      c('div', eo, [
                        d('div', to, [
                          _(Le, { class: 'social-links-list', links: r(t).socialLinks }, null, 8, [
                            'links'
                          ])
                        ])
                      ]))
                    : h('', !0)
                ]),
                _: 1
              }
            ))
          : h('', !0);
    }
  }),
  so = g(no, [['__scopeId', 'data-v-49b95cf9']]),
  oo = ['aria-expanded'],
  ao = m({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(o) {
      return (e, t) => (
        a(),
        c(
          'button',
          {
            type: 'button',
            class: M(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (s) => e.$emit('click'))
          },
          t[1] ||
            (t[1] = [
              d(
                'span',
                { class: 'container' },
                [
                  d('span', { class: 'top' }),
                  d('span', { class: 'middle' }),
                  d('span', { class: 'bottom' })
                ],
                -1
              )
            ]),
          10,
          oo
        )
      );
    }
  }),
  ro = g(ao, [['__scopeId', 'data-v-ce2c38d1']]),
  lo = ['innerHTML'],
  io = m({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = P();
      return (t, s) => (
        a(),
        k(
          D,
          {
            class: M({
              VPNavBarMenuLink: !0,
              active: r(z)(
                r(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch
              )
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            tabindex: '0'
          },
          { default: f(() => [d('span', { innerHTML: t.item.text }, null, 8, lo)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon']
        )
      );
    }
  }),
  co = g(io, [['__scopeId', 'data-v-5ede3fcf']]),
  uo = m({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(o) {
      const e = o,
        { page: t } = P(),
        s = (l) =>
          'component' in l
            ? !1
            : 'link' in l
              ? z(t.value.relativePath, l.link, !!e.item.activeMatch)
              : l.items.some(s),
        n = y(() => s(e.item));
      return (l, i) => (
        a(),
        k(
          ye,
          {
            class: M({
              VPNavBarMenuGroup: !0,
              active: r(z)(r(t).relativePath, l.item.activeMatch, !!l.item.activeMatch) || n.value
            }),
            button: l.item.text,
            items: l.item.items
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      );
    }
  }),
  po = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  vo = m({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).nav
          ? (a(),
            c('nav', po, [
              s[0] ||
                (s[0] = d(
                  'span',
                  { id: 'main-nav-aria-label', class: 'visually-hidden' },
                  ' Main Navigation ',
                  -1
                )),
              (a(!0),
              c(
                N,
                null,
                B(
                  r(e).nav,
                  (n) => (
                    a(),
                    c(
                      N,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(), k(co, { key: 0, item: n }, null, 8, ['item']))
                          : 'component' in n
                            ? (a(),
                              k(E(n.component), G({ key: 1, ref_for: !0 }, n.props), null, 16))
                            : (a(), k(uo, { key: 2, item: n }, null, 8, ['item']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : h('', !0);
    }
  }),
  fo = g(vo, [['__scopeId', 'data-v-a5a04224']]);
function ho(o) {
  const { localeIndex: e, theme: t } = P();
  function s(n) {
    var H, I, C;
    const l = n.split('.'),
      i = (H = t.value.search) == null ? void 0 : H.options,
      v = i && typeof i == 'object',
      p =
        (v &&
          ((C = (I = i.locales) == null ? void 0 : I[e.value]) == null
            ? void 0
            : C.translations)) ||
        null,
      b = (v && i.translations) || null;
    let V = p,
      $ = b,
      L = o;
    const w = l.pop();
    for (const A of l) {
      let U = null;
      const q = L == null ? void 0 : L[A];
      q && (U = L = q);
      const re = $ == null ? void 0 : $[A];
      re && (U = $ = re);
      const le = V == null ? void 0 : V[A];
      le && (U = V = le), q || (L = U), re || ($ = U), le || (V = U);
    }
    return (
      (V == null ? void 0 : V[w]) ??
      ($ == null ? void 0 : $[w]) ??
      (L == null ? void 0 : L[w]) ??
      ''
    );
  }
  return s;
}
const mo = ['aria-label'],
  _o = { class: 'DocSearch-Button-Container' },
  ko = { class: 'DocSearch-Button-Placeholder' },
  Ve = m({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = ho({ button: { buttonText: 'Search', buttonAriaLabel: 'Search' } });
      return (s, n) => (
        a(),
        c(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': r(t)('button.buttonAriaLabel')
          },
          [
            d('span', _o, [
              n[0] || (n[0] = d('span', { class: 'vp-icon DocSearch-Search-Icon' }, null, -1)),
              d('span', ko, T(r(t)('button.buttonText')), 1)
            ]),
            n[1] ||
              (n[1] = d(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  d('kbd', { class: 'DocSearch-Button-Key' }),
                  d('kbd', { class: 'DocSearch-Button-Key' }, 'K')
                ],
                -1
              ))
          ],
          8,
          mo
        )
      );
    }
  }),
  bo = { class: 'VPNavBarSearch' },
  go = { id: 'local-search' },
  $o = { key: 1, id: 'docsearch' },
  yo = m({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: s } = P(),
        n = S(!1),
        l = S(!1);
      O(() => {});
      function i() {
        n.value || ((n.value = !0), setTimeout(v, 16));
      }
      function v() {
        const V = new Event('keydown');
        (V.key = 'k'),
          (V.metaKey = !0),
          window.dispatchEvent(V),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || v();
          }, 16);
      }
      const p = S(!1),
        b = '';
      return (V, $) => {
        var L;
        return (
          a(),
          c('div', bo, [
            r(b) === 'local'
              ? (a(),
                c(
                  N,
                  { key: 0 },
                  [
                    p.value
                      ? (a(), k(r(e), { key: 0, onClose: $[0] || ($[0] = (w) => (p.value = !1)) }))
                      : h('', !0),
                    d('div', go, [_(Ve, { onClick: $[1] || ($[1] = (w) => (p.value = !0)) })])
                  ],
                  64
                ))
              : r(b) === 'algolia'
                ? (a(),
                  c(
                    N,
                    { key: 1 },
                    [
                      n.value
                        ? (a(),
                          k(
                            r(t),
                            {
                              key: 0,
                              algolia:
                                ((L = r(s).search) == null ? void 0 : L.options) ?? r(s).algolia,
                              onVnodeBeforeMount: $[2] || ($[2] = (w) => (l.value = !0))
                            },
                            null,
                            8,
                            ['algolia']
                          ))
                        : h('', !0),
                      l.value ? h('', !0) : (a(), c('div', $o, [_(Ve, { onClick: i })]))
                    ],
                    64
                  ))
                : h('', !0)
          ])
        );
      };
    }
  }),
  Lo = m({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).socialLinks
          ? (a(),
            k(Le, { key: 0, class: 'VPNavBarSocialLinks', links: r(e).socialLinks }, null, 8, [
              'links'
            ]))
          : h('', !0);
    }
  }),
  Vo = g(Lo, [['__scopeId', 'data-v-0237ca2e']]),
  Po = ['href', 'rel', 'target'],
  So = ['innerHTML'],
  Mo = { key: 2 },
  wo = m({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = P(),
        { hasSidebar: s } = Z(),
        { currentLang: n } = R(),
        l = y(() => {
          var p;
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (p = t.value.logoLink) == null
              ? void 0
              : p.link;
        }),
        i = y(() => {
          var p;
          return typeof t.value.logoLink == 'string' || (p = t.value.logoLink) == null
            ? void 0
            : p.rel;
        }),
        v = y(() => {
          var p;
          return typeof t.value.logoLink == 'string' || (p = t.value.logoLink) == null
            ? void 0
            : p.target;
        });
      return (p, b) => (
        a(),
        c(
          'div',
          { class: M(['VPNavBarTitle', { 'has-sidebar': r(s) }]) },
          [
            d(
              'a',
              { class: 'title', href: l.value ?? r(ke)(r(n).link), rel: i.value, target: v.value },
              [
                u(p.$slots, 'nav-bar-title-before', {}, void 0, !0),
                r(t).logo
                  ? (a(), k(Q, { key: 0, class: 'logo', image: r(t).logo }, null, 8, ['image']))
                  : h('', !0),
                r(t).siteTitle
                  ? (a(), c('span', { key: 1, innerHTML: r(t).siteTitle }, null, 8, So))
                  : r(t).siteTitle === void 0
                    ? (a(), c('span', Mo, T(r(e).title), 1))
                    : h('', !0),
                u(p.$slots, 'nav-bar-title-after', {}, void 0, !0)
              ],
              8,
              Po
            )
          ],
          2
        )
      );
    }
  }),
  Co = g(wo, [['__scopeId', 'data-v-c7e9c615']]),
  To = { class: 'items' },
  No = { class: 'title' },
  Ho = m({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: s } = R({ correspondingLink: !0 });
      return (n, l) =>
        r(t).length && r(s).label
          ? (a(),
            k(
              ye,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: r(e).langMenuLabel || 'Change language'
              },
              {
                default: f(() => [
                  d('div', To, [
                    d('p', No, T(r(s).label), 1),
                    (a(!0),
                    c(
                      N,
                      null,
                      B(r(t), (i) => (a(), k(oe, { key: i.link, item: i }, null, 8, ['item']))),
                      128
                    ))
                  ])
                ]),
                _: 1
              },
              8,
              ['label']
            ))
          : h('', !0);
    }
  }),
  Io = g(Ho, [['__scopeId', 'data-v-a77c7f69']]),
  Bo = { class: 'wrapper' },
  Ao = { class: 'container' },
  Fo = { class: 'title' },
  Eo = { class: 'content' },
  Do = { class: 'content-body' },
  Oo = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const e = o,
        { y: t } = we(),
        { hasSidebar: s } = Z(),
        { frontmatter: n } = P(),
        l = S({});
      return (
        me(() => {
          l.value = {
            'has-sidebar': s.value,
            home: n.value.layout === 'home',
            top: t.value === 0,
            'screen-open': e.isScreenOpen
          };
        }),
        (i, v) => (
          a(),
          c(
            'div',
            { class: M(['VPNavBar', l.value]) },
            [
              d('div', Bo, [
                d('div', Ao, [
                  d('div', Fo, [
                    _(Co, null, {
                      'nav-bar-title-before': f(() => [
                        u(i.$slots, 'nav-bar-title-before', {}, void 0, !0)
                      ]),
                      'nav-bar-title-after': f(() => [
                        u(i.$slots, 'nav-bar-title-after', {}, void 0, !0)
                      ]),
                      _: 3
                    })
                  ]),
                  d('div', Eo, [
                    d('div', Do, [
                      u(i.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      _(yo, { class: 'search' }),
                      _(fo, { class: 'menu' }),
                      _(Io, { class: 'translations' }),
                      _(ys, { class: 'appearance' }),
                      _(Vo, { class: 'social-links' }),
                      _(so, { class: 'extra' }),
                      u(i.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      _(
                        ro,
                        {
                          class: 'hamburger',
                          active: i.isScreenOpen,
                          onClick: v[0] || (v[0] = (p) => i.$emit('toggle-screen'))
                        },
                        null,
                        8,
                        ['active']
                      )
                    ])
                  ])
                ])
              ]),
              v[1] ||
                (v[1] = d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1))
            ],
            2
          )
        )
      );
    }
  }),
  Zo = g(Oo, [['__scopeId', 'data-v-ce2bb7d3']]),
  Uo = { key: 0, class: 'VPNavScreenAppearance' },
  Go = { class: 'text' },
  jo = m({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = P();
      return (s, n) =>
        r(e).appearance && r(e).appearance !== 'force-dark' && r(e).appearance !== 'force-auto'
          ? (a(), c('div', Uo, [d('p', Go, T(r(t).darkModeSwitchLabel || 'Appearance'), 1), _(ge)]))
          : h('', !0);
    }
  }),
  zo = g(jo, [['__scopeId', 'data-v-41b00b66']]),
  Wo = ['innerHTML'],
  qo = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = ne('close-screen');
      return (t, s) => (
        a(),
        k(
          D,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e)
          },
          { default: f(() => [d('span', { innerHTML: t.item.text }, null, 8, Wo)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      );
    }
  }),
  Ro = g(qo, [['__scopeId', 'data-v-1ae6fc9e']]),
  Ko = ['innerHTML'],
  Jo = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = ne('close-screen');
      return (t, s) => (
        a(),
        k(
          D,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            'no-icon': t.item.noIcon,
            onClick: r(e)
          },
          { default: f(() => [d('span', { innerHTML: t.item.text }, null, 8, Ko)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick']
        )
      );
    }
  }),
  Fe = g(Jo, [['__scopeId', 'data-v-c3e2daaf']]),
  Yo = { class: 'VPNavScreenMenuGroupSection' },
  Qo = { key: 0, class: 'title' },
  Xo = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        c('div', Yo, [
          e.text ? (a(), c('p', Qo, T(e.text), 1)) : h('', !0),
          (a(!0),
          c(
            N,
            null,
            B(e.items, (s) => (a(), k(Fe, { key: s.text, item: s }, null, 8, ['item']))),
            128
          ))
        ])
      );
    }
  }),
  xo = g(Xo, [['__scopeId', 'data-v-4ac28b49']]),
  ea = ['aria-controls', 'aria-expanded'],
  ta = ['innerHTML'],
  na = ['id'],
  sa = { key: 0, class: 'item' },
  oa = { key: 1, class: 'item' },
  aa = { key: 2, class: 'group' },
  ra = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = S(!1),
        s = y(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`);
      function n() {
        t.value = !t.value;
      }
      return (l, i) => (
        a(),
        c(
          'div',
          { class: M(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            d(
              'button',
              { class: 'button', 'aria-controls': s.value, 'aria-expanded': t.value, onClick: n },
              [
                d('span', { class: 'button-text', innerHTML: l.text }, null, 8, ta),
                i[0] || (i[0] = d('span', { class: 'vpi-plus button-icon' }, null, -1))
              ],
              8,
              ea
            ),
            d(
              'div',
              { id: s.value, class: 'items' },
              [
                (a(!0),
                c(
                  N,
                  null,
                  B(
                    l.items,
                    (v) => (
                      a(),
                      c(
                        N,
                        { key: JSON.stringify(v) },
                        [
                          'link' in v
                            ? (a(), c('div', sa, [_(Fe, { item: v }, null, 8, ['item'])]))
                            : 'component' in v
                              ? (a(),
                                c('div', oa, [
                                  (a(),
                                  k(
                                    E(v.component),
                                    G({ ref_for: !0 }, v.props, { 'screen-menu': '' }),
                                    null,
                                    16
                                  ))
                                ]))
                              : (a(),
                                c('div', aa, [
                                  _(xo, { text: v.text, items: v.items }, null, 8, [
                                    'text',
                                    'items'
                                  ])
                                ]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ],
              8,
              na
            )
          ],
          2
        )
      );
    }
  }),
  la = g(ra, [['__scopeId', 'data-v-95c0c014']]),
  ia = { key: 0, class: 'VPNavScreenMenu' },
  ca = m({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).nav
          ? (a(),
            c('nav', ia, [
              (a(!0),
              c(
                N,
                null,
                B(
                  r(e).nav,
                  (n) => (
                    a(),
                    c(
                      N,
                      { key: JSON.stringify(n) },
                      [
                        'link' in n
                          ? (a(), k(Ro, { key: 0, item: n }, null, 8, ['item']))
                          : 'component' in n
                            ? (a(),
                              k(
                                E(n.component),
                                G({ key: 1, ref_for: !0 }, n.props, { 'screen-menu': '' }),
                                null,
                                16
                              ))
                            : (a(),
                              k(la, { key: 2, text: n.text || '', items: n.items }, null, 8, [
                                'text',
                                'items'
                              ]))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : h('', !0);
    }
  }),
  ua = m({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = P();
      return (t, s) =>
        r(e).socialLinks
          ? (a(),
            k(Le, { key: 0, class: 'VPNavScreenSocialLinks', links: r(e).socialLinks }, null, 8, [
              'links'
            ]))
          : h('', !0);
    }
  }),
  da = { class: 'list' },
  pa = m({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = R({ correspondingLink: !0 }),
        s = S(!1);
      function n() {
        s.value = !s.value;
      }
      return (l, i) =>
        r(e).length && r(t).label
          ? (a(),
            c(
              'div',
              { key: 0, class: M(['VPNavScreenTranslations', { open: s.value }]) },
              [
                d('button', { class: 'title', onClick: n }, [
                  i[0] || (i[0] = d('span', { class: 'vpi-languages icon lang' }, null, -1)),
                  j(' ' + T(r(t).label) + ' ', 1),
                  i[1] || (i[1] = d('span', { class: 'vpi-chevron-down icon chevron' }, null, -1))
                ]),
                d('ul', da, [
                  (a(!0),
                  c(
                    N,
                    null,
                    B(
                      r(e),
                      (v) => (
                        a(),
                        c('li', { key: v.link, class: 'item' }, [
                          _(
                            D,
                            { class: 'link', href: v.link },
                            { default: f(() => [j(T(v.text), 1)]), _: 2 },
                            1032,
                            ['href']
                          )
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ],
              2
            ))
          : h('', !0);
    }
  }),
  va = g(pa, [['__scopeId', 'data-v-4d1b23d5']]),
  fa = { class: 'container' },
  ha = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = S(null),
        t = Ce(se ? document.body : null);
      return (s, n) => (
        a(),
        k(
          X,
          {
            name: 'fade',
            onEnter: n[0] || (n[0] = (l) => (t.value = !0)),
            onAfterLeave: n[1] || (n[1] = (l) => (t.value = !1))
          },
          {
            default: f(() => [
              s.open
                ? (a(),
                  c(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: e, id: 'VPNavScreen' },
                    [
                      d('div', fa, [
                        u(s.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        _(ca, { class: 'menu' }),
                        _(va, { class: 'translations' }),
                        _(zo, { class: 'appearance' }),
                        _(ua, { class: 'social-links' }),
                        u(s.$slots, 'nav-screen-content-after', {}, void 0, !0)
                      ])
                    ],
                    512
                  ))
                : h('', !0)
            ]),
            _: 3
          }
        )
      );
    }
  }),
  ma = g(ha, [['__scopeId', 'data-v-b6d5372d']]),
  _a = { key: 0, class: 'VPNav' },
  ka = m({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = ps(),
        { frontmatter: n } = P(),
        l = y(() => n.value.navbar !== !1);
      return (
        Te('close-screen', t),
        x(() => {
          se && document.documentElement.classList.toggle('hide-nav', !l.value);
        }),
        (i, v) =>
          l.value
            ? (a(),
              c('header', _a, [
                _(
                  Zo,
                  { 'is-screen-open': r(e), onToggleScreen: r(s) },
                  {
                    'nav-bar-title-before': f(() => [
                      u(i.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': f(() => [
                      u(i.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': f(() => [
                      u(i.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': f(() => [
                      u(i.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen']
                ),
                _(
                  ma,
                  { open: r(e) },
                  {
                    'nav-screen-content-before': f(() => [
                      u(i.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': f(() => [
                      u(i.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  },
                  8,
                  ['open']
                )
              ]))
            : h('', !0)
      );
    }
  }),
  ba = g(ka, [['__scopeId', 'data-v-8fcce817']]),
  ga = ['role', 'tabindex'],
  $a = { key: 1, class: 'items' },
  ya = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: s,
          isLink: n,
          isActiveLink: l,
          hasActiveLink: i,
          hasChildren: v,
          toggle: p
        } = ht(y(() => e.item)),
        b = y(() => (v.value ? 'section' : 'div')),
        V = y(() => (n.value ? 'a' : 'div')),
        $ = y(() => (v.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p')),
        L = y(() => (n.value ? void 0 : 'button')),
        w = y(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': l.value },
          { 'has-active': i.value }
        ]);
      function H(C) {
        ('key' in C && C.key !== 'Enter') || (!e.item.link && p());
      }
      function I() {
        e.item.link && p();
      }
      return (C, A) => {
        const U = W('VPSidebarItem', !0);
        return (
          a(),
          k(
            E(b.value),
            { class: M(['VPSidebarItem', w.value]) },
            {
              default: f(() => [
                C.item.text
                  ? (a(),
                    c(
                      'div',
                      G(
                        { key: 0, class: 'item', role: L.value },
                        qe(C.item.items ? { click: H, keydown: H } : {}, !0),
                        { tabindex: C.item.items && 0 }
                      ),
                      [
                        A[1] || (A[1] = d('div', { class: 'indicator' }, null, -1)),
                        C.item.link
                          ? (a(),
                            k(
                              D,
                              {
                                key: 0,
                                tag: V.value,
                                class: 'link',
                                href: C.item.link,
                                rel: C.item.rel,
                                target: C.item.target
                              },
                              {
                                default: f(() => [
                                  (a(),
                                  k(
                                    E($.value),
                                    { class: 'text', innerHTML: C.item.text },
                                    null,
                                    8,
                                    ['innerHTML']
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ['tag', 'href', 'rel', 'target']
                            ))
                          : (a(),
                            k(
                              E($.value),
                              { key: 1, class: 'text', innerHTML: C.item.text },
                              null,
                              8,
                              ['innerHTML']
                            )),
                        C.item.collapsed != null && C.item.items && C.item.items.length
                          ? (a(),
                            c(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: I,
                                onKeydown: Re(I, ['enter']),
                                tabindex: '0'
                              },
                              A[0] ||
                                (A[0] = [
                                  d('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)
                                ]),
                              32
                            ))
                          : h('', !0)
                      ],
                      16,
                      ga
                    ))
                  : h('', !0),
                C.item.items && C.item.items.length
                  ? (a(),
                    c('div', $a, [
                      C.depth < 5
                        ? (a(!0),
                          c(
                            N,
                            { key: 0 },
                            B(
                              C.item.items,
                              (q) => (
                                a(),
                                k(U, { key: q.text, item: q, depth: C.depth + 1 }, null, 8, [
                                  'item',
                                  'depth'
                                ])
                              )
                            ),
                            128
                          ))
                        : h('', !0)
                    ]))
                  : h('', !0)
              ]),
              _: 1
            },
            8,
            ['class']
          )
        );
      };
    }
  }),
  La = g(ya, [['__scopeId', 'data-v-e9f73228']]),
  Va = m({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(o) {
      const e = S(!0);
      let t = null;
      return (
        O(() => {
          t = setTimeout(() => {
            (t = null), (e.value = !1);
          }, 300);
        }),
        Ke(() => {
          t != null && (clearTimeout(t), (t = null));
        }),
        (s, n) => (
          a(!0),
          c(
            N,
            null,
            B(
              s.items,
              (l) => (
                a(),
                c(
                  'div',
                  { key: l.text, class: M(['group', { 'no-transition': e.value }]) },
                  [_(La, { item: l, depth: 0 }, null, 8, ['item'])],
                  2
                )
              )
            ),
            128
          )
        )
      );
    }
  }),
  Pa = g(Va, [['__scopeId', 'data-v-8f4a6e87']]),
  Sa = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1'
  },
  Ma = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = Z(),
        s = o,
        n = S(null),
        l = Ce(se ? document.body : null);
      F(
        [s, n],
        () => {
          var v;
          s.open ? ((l.value = !0), (v = n.value) == null || v.focus()) : (l.value = !1);
        },
        { immediate: !0, flush: 'post' }
      );
      const i = S(0);
      return (
        F(
          e,
          () => {
            i.value += 1;
          },
          { deep: !0 }
        ),
        (v, p) =>
          r(t)
            ? (a(),
              c(
                'aside',
                {
                  key: 0,
                  class: M(['VPSidebar', { open: v.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: p[0] || (p[0] = Je(() => {}, ['stop']))
                },
                [
                  p[2] || (p[2] = d('div', { class: 'curtain' }, null, -1)),
                  d('nav', Sa, [
                    p[1] ||
                      (p[1] = d(
                        'span',
                        { class: 'visually-hidden', id: 'sidebar-aria-label' },
                        ' Sidebar Navigation ',
                        -1
                      )),
                    u(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(), k(Pa, { items: r(e), key: i.value }, null, 8, ['items'])),
                    u(v.$slots, 'sidebar-nav-after', {}, void 0, !0)
                  ])
                ],
                2
              ))
            : h('', !0)
      );
    }
  }),
  wa = g(Ma, [['__scopeId', 'data-v-9730eb02']]),
  Ca = m({
    __name: 'VPSkipLink',
    setup(o) {
      const { theme: e } = P(),
        t = te(),
        s = S();
      F(
        () => t.path,
        () => s.value.focus()
      );
      function n({ target: l }) {
        const i = document.getElementById(decodeURIComponent(l.hash).slice(1));
        if (i) {
          const v = () => {
            i.removeAttribute('tabindex'), i.removeEventListener('blur', v);
          };
          i.setAttribute('tabindex', '-1'),
            i.addEventListener('blur', v),
            i.focus(),
            window.scrollTo(0, 0);
        }
      }
      return (l, i) => (
        a(),
        c(
          N,
          null,
          [
            d('span', { ref_key: 'backToTop', ref: s, tabindex: '-1' }, null, 512),
            d(
              'a',
              { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: n },
              T(r(e).skipToContentLabel || 'Skip to content'),
              1
            )
          ],
          64
        )
      );
    }
  }),
  Ta = g(Ca, [['__scopeId', 'data-v-256599a4']]),
  Na = m({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: s } = Z(),
        n = te();
      F(() => n.path, s), ft(e, s);
      const { frontmatter: l } = P(),
        i = Ye(),
        v = y(() => !!i['home-hero-image']);
      return (
        Te('hero-image-slot-exists', v),
        (p, b) => {
          const V = W('Content');
          return r(l).layout !== !1
            ? (a(),
              c(
                'div',
                { key: 0, class: M(['Layout', r(l).pageClass]) },
                [
                  u(p.$slots, 'layout-top', {}, void 0, !0),
                  _(Ta),
                  _(tt, { class: 'backdrop', show: r(e), onClick: r(s) }, null, 8, [
                    'show',
                    'onClick'
                  ]),
                  _(ba, null, {
                    'nav-bar-title-before': f(() => [
                      u(p.$slots, 'nav-bar-title-before', {}, void 0, !0)
                    ]),
                    'nav-bar-title-after': f(() => [
                      u(p.$slots, 'nav-bar-title-after', {}, void 0, !0)
                    ]),
                    'nav-bar-content-before': f(() => [
                      u(p.$slots, 'nav-bar-content-before', {}, void 0, !0)
                    ]),
                    'nav-bar-content-after': f(() => [
                      u(p.$slots, 'nav-bar-content-after', {}, void 0, !0)
                    ]),
                    'nav-screen-content-before': f(() => [
                      u(p.$slots, 'nav-screen-content-before', {}, void 0, !0)
                    ]),
                    'nav-screen-content-after': f(() => [
                      u(p.$slots, 'nav-screen-content-after', {}, void 0, !0)
                    ]),
                    _: 3
                  }),
                  _(ds, { open: r(e), onOpenMenu: r(t) }, null, 8, ['open', 'onOpenMenu']),
                  _(
                    wa,
                    { open: r(e) },
                    {
                      'sidebar-nav-before': f(() => [
                        u(p.$slots, 'sidebar-nav-before', {}, void 0, !0)
                      ]),
                      'sidebar-nav-after': f(() => [
                        u(p.$slots, 'sidebar-nav-after', {}, void 0, !0)
                      ]),
                      _: 3
                    },
                    8,
                    ['open']
                  ),
                  _(Jn, null, {
                    'page-top': f(() => [u(p.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': f(() => [u(p.$slots, 'page-bottom', {}, void 0, !0)]),
                    'not-found': f(() => [u(p.$slots, 'not-found', {}, void 0, !0)]),
                    'home-hero-before': f(() => [u(p.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info-before': f(() => [
                      u(p.$slots, 'home-hero-info-before', {}, void 0, !0)
                    ]),
                    'home-hero-info': f(() => [u(p.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-info-after': f(() => [
                      u(p.$slots, 'home-hero-info-after', {}, void 0, !0)
                    ]),
                    'home-hero-actions-after': f(() => [
                      u(p.$slots, 'home-hero-actions-after', {}, void 0, !0)
                    ]),
                    'home-hero-image': f(() => [u(p.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': f(() => [u(p.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': f(() => [
                      u(p.$slots, 'home-features-before', {}, void 0, !0)
                    ]),
                    'home-features-after': f(() => [
                      u(p.$slots, 'home-features-after', {}, void 0, !0)
                    ]),
                    'doc-footer-before': f(() => [
                      u(p.$slots, 'doc-footer-before', {}, void 0, !0)
                    ]),
                    'doc-before': f(() => [u(p.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': f(() => [u(p.$slots, 'doc-after', {}, void 0, !0)]),
                    'doc-top': f(() => [u(p.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': f(() => [u(p.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'aside-top': f(() => [u(p.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-bottom': f(() => [u(p.$slots, 'aside-bottom', {}, void 0, !0)]),
                    'aside-outline-before': f(() => [
                      u(p.$slots, 'aside-outline-before', {}, void 0, !0)
                    ]),
                    'aside-outline-after': f(() => [
                      u(p.$slots, 'aside-outline-after', {}, void 0, !0)
                    ]),
                    'aside-ads-before': f(() => [u(p.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': f(() => [u(p.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    _: 3
                  }),
                  _(es),
                  u(p.$slots, 'layout-bottom', {}, void 0, !0)
                ],
                2
              ))
            : (a(), k(V, { key: 1 }));
        }
      );
    }
  }),
  Ha = g(Na, [['__scopeId', 'data-v-119cec43']]),
  Ia = {
    Layout: Ha,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', Xe);
    }
  },
  ae = (o, e) => {
    const t = o.__vccOpts || o;
    for (const [s, n] of e) t[s] = n;
    return t;
  },
  Ba = {},
  Aa = {
    t: '1661231422733',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3259',
    width: '20',
    height: '20'
  },
  Fa = d(
    'path',
    {
      d: 'M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z',
      'p-id': '3260'
    },
    null,
    -1
  ),
  Ea = [Fa];
function Da(o, e) {
  return a(), c('svg', Aa, Ea);
}
const Oa = ae(Ba, [['render', Da]]),
  Za = {},
  Ua = {
    t: '1661231449868',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3541',
    width: '20',
    height: '20'
  },
  Ga = d(
    'path',
    {
      d: 'M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z',
      'p-id': '3542'
    },
    null,
    -1
  ),
  ja = [Ga];
function za(o, e) {
  return a(), c('svg', Ua, ja);
}
const Wa = ae(Za, [['render', za]]),
  qa = {},
  Ra = { viewBox: '0 0 544 560', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
  Ka = d(
    'path',
    {
      d: 'M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  Ja = [Ka];
function Ya(o, e) {
  return a(), c('svg', Ra, Ja);
}
const Qa = ae(qa, [['render', Ya]]),
  K = 'vitepress-demo-preview',
  J = (o, e, t, s) => {
    let n = e === '' ? `${o}` : `${o}-${e}`;
    return t && (n += `__${t}`), s && (n += `--${s}`), n;
  },
  Ee = (o = '') => ({
    b: () => J(K, o),
    e: (e = '') => J(K, o, e),
    m: (e = '') => J(K, o, '', e),
    bem: (e, t, s) => J(K, e, t, s)
  }),
  Xa = () => {
    const o = S(!0);
    return {
      isCodeFold: o,
      setCodeFold: (e) => {
        o.value = e;
      }
    };
  },
  xa = () => ({
    copyContent: S(''),
    clickCopy: async (o) => {
      await navigator.clipboard.writeText(o);
    }
  }),
  er = {},
  tr = {
    width: '20',
    height: '20',
    viewBox: '0 0 48 48',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg'
  },
  nr = d(
    'path',
    {
      d: 'M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    },
    null,
    -1
  ),
  sr = d(
    'path',
    {
      d: 'M17 24L22 29L32 19',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    },
    null,
    -1
  ),
  or = [nr, sr];
function ar(o, e) {
  return a(), c('svg', tr, or);
}
const rr = ae(er, [['render', ar]]),
  lr = m({
    __name: 'message-notice',
    props: { content: { default: '复制成功！' }, close: null },
    setup(o, { expose: e }) {
      const t = o,
        s = Ee(),
        n = S(!1),
        l = (b) => {
          n.value = b;
        },
        i = S(-999),
        v = (b) => {
          i.value = b;
        };
      F(n, (b) => {
        b === !0 &&
          setTimeout(() => {
            n.value = !1;
          }, 3e3);
      });
      const p = () => {
        t.close();
      };
      return (
        e({ setVisible: l, setTopHeight: v }),
        (b, V) => (
          a(),
          k(
            X,
            { name: 'slide-fade', onAfterLeave: p },
            {
              default: f(() => [
                n.value
                  ? (a(),
                    c(
                      'div',
                      {
                        key: 0,
                        class: M([r(s).bem('message-notice', 'container')]),
                        style: _e({ top: i.value + 'px' })
                      },
                      [_(rr), d('span', null, T(o.content), 1)],
                      6
                    ))
                  : h('', !0)
              ]),
              _: 1
            }
          )
        )
      );
    }
  }),
  ce = [],
  ir = {
    open: () => {
      const o = document.createElement('div'),
        e = Qe(lr, {
          content: '复制成功！',
          close: () => {
            document.body.removeChild(o), ce.pop(), e.unmount();
          }
        }),
        t = e.mount(o);
      document.body.appendChild(o);
      const s = ce.length,
        n = s === 0 ? 10 : (s + 1) * 10 + s * 42;
      t.setTopHeight(n), t.setVisible(!0), ce.push(t);
    }
  },
  cr = ['innerHTML'],
  ur = m({
    __name: 'ElementPlus',
    props: {
      code: null,
      showCode: null,
      title: { default: '默认标题' },
      description: { default: '描述内容' }
    },
    setup(o) {
      const e = o,
        t = Ee(),
        { isCodeFold: s, setCodeFold: n } = Xa(),
        { clickCopy: l } = xa(),
        i = S(decodeURIComponent(e.code)),
        v = S(decodeURIComponent(e.showCode)),
        p = S(null),
        b = () => {
          l(i.value), ir.open();
        },
        V = y(() => {
          var L;
          return p.value ? ((L = p.value) == null ? void 0 : L.clientHeight) : 0;
        }),
        $ = (L) => {
          s.value ? (p.value.style.height = '0px') : (p.value.style.height = `${L}px`);
        };
      return (
        O(() => {
          const L = V.value;
          $(L);
        }),
        F(s, () => {
          const L = V.value;
          $(L);
        }),
        (L, w) => (
          a(),
          c(
            'div',
            { class: M([r(t).e('element-plus__container')]) },
            [
              d('section', { class: M([r(t).bem('preview')]) }, [u(L.$slots, 'default')], 2),
              d(
                'section',
                { class: M([r(t).bem('description')]) },
                [
                  d('div', { class: M([r(t).bem('description', 'split-line')]) }, null, 2),
                  d(
                    'div',
                    { class: M([r(t).bem('description', 'handle-btn')]) },
                    [
                      r(s)
                        ? (a(), k(Oa, { key: 1, onClick: w[1] || (w[1] = (H) => r(n)(!1)) }))
                        : (a(), k(Wa, { key: 0, onClick: w[0] || (w[0] = (H) => r(n)(!0)) })),
                      _(Qa, { onClick: b })
                    ],
                    2
                  )
                ],
                2
              ),
              d(
                'section',
                { class: M([r(t).bem('source')]), ref_key: 'sourceCodeArea', ref: p },
                [d('div', { innerHTML: v.value, class: 'language-vue' }, null, 8, cr)],
                2
              )
            ],
            2
          )
        )
      );
    }
  }),
  pr = {
    ...Ia,
    enhanceApp({ app: o }) {
      o.component('demo-preview', ur);
    }
  };
export { pr as R };
