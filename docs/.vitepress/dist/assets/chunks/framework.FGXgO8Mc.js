/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ms(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const ne = {},
  Ct = [],
  We = () => {},
  Io = () => !1,
  Qt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Is = (e) => e.startsWith('onUpdate:'),
  ae = Object.assign,
  Ps = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Po = Object.prototype.hasOwnProperty,
  Q = (e, t) => Po.call(e, t),
  B = Array.isArray,
  At = (e) => Rn(e) === '[object Map]',
  Ur = (e) => Rn(e) === '[object Set]',
  G = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  Ye = (e) => typeof e == 'symbol',
  se = (e) => e !== null && typeof e == 'object',
  Br = (e) => (se(e) || G(e)) && G(e.then) && G(e.catch),
  Kr = Object.prototype.toString,
  Rn = (e) => Kr.call(e),
  Lo = (e) => Rn(e).slice(8, -1),
  qr = (e) => Rn(e) === '[object Object]',
  Ls = (e) => oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Rt = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  On = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  No = /-(\w)/g,
  Ne = On((e) => e.replace(No, (t, n) => (n ? n.toUpperCase() : ''))),
  Fo = /\B([A-Z])/g,
  rt = On((e) => e.replace(Fo, '-$1').toLowerCase()),
  Mn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  mn = On((e) => (e ? `on${Mn(e)}` : '')),
  nt = (e, t) => !Object.is(e, t),
  Xn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Gr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n });
  },
  Ho = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Do = (e) => {
    const t = oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Qs;
const In = () =>
  Qs ||
  (Qs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function Pn(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? ko(s) : Pn(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (oe(e) || se(e)) return e;
}
const $o = /;(?![^(]*\))/g,
  jo = /:([^]+)/,
  Vo = /\/\*[^]*?\*\//g;
function ko(e) {
  const t = {};
  return (
    e
      .replace(Vo, '')
      .split($o)
      .forEach((n) => {
        if (n) {
          const s = n.split(jo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ln(e) {
  let t = '';
  if (oe(e)) t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ln(e[n]);
      s && (t += s + ' ');
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function du(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !oe(t) && (e.class = Ln(t)), n && (e.style = Pn(n)), e;
}
const Wo = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Uo = Ms(Wo);
function Xr(e) {
  return !!e || e === '';
}
const Yr = (e) => !!(e && e.__v_isRef === !0),
  Bo = (e) =>
    oe(e)
      ? e
      : e == null
        ? ''
        : B(e) || (se(e) && (e.toString === Kr || !G(e.toString)))
          ? Yr(e)
            ? Bo(e.value)
            : JSON.stringify(e, zr, 2)
          : String(e),
  zr = (e, t) =>
    Yr(t)
      ? zr(e, t.value)
      : At(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], i) => ((n[Yn(s, i) + ' =>'] = r), n),
              {}
            )
          }
        : Ur(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Yn(n)) }
          : Ye(t)
            ? Yn(t)
            : se(t) && !B(t) && !qr(t)
              ? String(t)
              : t,
  Yn = (e, t = '') => {
    var n;
    return Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let we;
class Ko {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return (we = this), t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Jr() {
  return we;
}
function qo(e, t = !1) {
  we && we.cleanups.push(e);
}
let te;
const zn = new WeakSet();
class Qr {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      we && we.active && we.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), zn.has(this) && (zn.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ei(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Zs(this), ti(this);
    const t = te,
      n = He;
    (te = this), (He = !0);
    try {
      return this.fn();
    } finally {
      ni(this), (te = t), (He = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Hs(t);
      (this.deps = this.depsTail = void 0),
        Zs(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ms(this) && this.run();
  }
  get dirty() {
    return ms(this);
  }
}
let Zr = 0,
  Dt,
  $t;
function ei(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = $t), ($t = e);
    return;
  }
  (e.next = Dt), (Dt = e);
}
function Ns() {
  Zr++;
}
function Fs() {
  if (--Zr > 0) return;
  if ($t) {
    let t = $t;
    for ($t = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Dt; ) {
    let t = Dt;
    for (Dt = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ti(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function ni(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Hs(s), Go(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r);
  }
  (e.deps = t), (e.depsTail = n);
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (si(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function si(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Ut)) return;
  e.globalVersion = Ut;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !ms(e))) {
    e.flags &= -3;
    return;
  }
  const n = te,
    s = He;
  (te = e), (He = !0);
  try {
    ti(e);
    const r = e.fn(e._value);
    (t.version === 0 || nt(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (te = n), (He = s), ni(e), (e.flags &= -3);
  }
}
function Hs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Hs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Go(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let He = !0;
const ri = [];
function it() {
  ri.push(He), (He = !1);
}
function ot() {
  const e = ri.pop();
  He = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let Ut = 0;
class Xo {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class Nn {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!te || !He || te === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      (n = this.activeLink = new Xo(te, this)),
        te.deps
          ? ((n.prevDep = te.depsTail), (te.depsTail.nextDep = n), (te.depsTail = n))
          : (te.deps = te.depsTail = n),
        ii(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = te.depsTail),
        (n.nextDep = void 0),
        (te.depsTail.nextDep = n),
        (te.depsTail = n),
        te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ut++, this.notify(t);
  }
  notify(t) {
    Ns();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fs();
    }
  }
}
function ii(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) ii(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const wn = new WeakMap(),
  ht = Symbol(''),
  ys = Symbol(''),
  Bt = Symbol('');
function ye(e, t, n) {
  if (He && te) {
    let s = wn.get(e);
    s || wn.set(e, (s = new Map()));
    let r = s.get(n);
    r || (s.set(n, (r = new Nn())), (r.map = s), (r.key = n)), r.track();
  }
}
function qe(e, t, n, s, r, i) {
  const o = wn.get(e);
  if (!o) {
    Ut++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((Ns(), t === 'clear')) o.forEach(l);
  else {
    const c = B(e),
      u = c && Ls(n);
    if (c && n === 'length') {
      const f = Number(s);
      o.forEach((h, y) => {
        (y === 'length' || y === Bt || (!Ye(y) && y >= f)) && l(h);
      });
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Bt)), t)) {
        case 'add':
          c ? u && l(o.get('length')) : (l(o.get(ht)), At(e) && l(o.get(ys)));
          break;
        case 'delete':
          c || (l(o.get(ht)), At(e) && l(o.get(ys)));
          break;
        case 'set':
          At(e) && l(o.get(ht));
          break;
      }
  }
  Fs();
}
function Yo(e, t) {
  const n = wn.get(e);
  return n && n.get(t);
}
function xt(e) {
  const t = J(e);
  return t === e ? t : (ye(t, 'iterate', Bt), Pe(e) ? t : t.map(be));
}
function Fn(e) {
  return ye((e = J(e)), 'iterate', Bt), e;
}
const zo = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jn(this, Symbol.iterator, be);
  },
  concat(...e) {
    return xt(this).concat(...e.map((t) => (B(t) ? xt(t) : t)));
  },
  entries() {
    return Jn(this, 'entries', (e) => ((e[1] = be(e[1])), e));
  },
  every(e, t) {
    return Ue(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(this, 'filter', e, t, (n) => n.map(be), arguments);
  },
  find(e, t) {
    return Ue(this, 'find', e, t, be, arguments);
  },
  findIndex(e, t) {
    return Ue(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(this, 'findLast', e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return Ue(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ue(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Qn(this, 'includes', e);
  },
  indexOf(...e) {
    return Qn(this, 'indexOf', e);
  },
  join(e) {
    return xt(this).join(e);
  },
  lastIndexOf(...e) {
    return Qn(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return Ue(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Nt(this, 'pop');
  },
  push(...e) {
    return Nt(this, 'push', e);
  },
  reduce(e, ...t) {
    return er(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return er(this, 'reduceRight', e, t);
  },
  shift() {
    return Nt(this, 'shift');
  },
  some(e, t) {
    return Ue(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Nt(this, 'splice', e);
  },
  toReversed() {
    return xt(this).toReversed();
  },
  toSorted(e) {
    return xt(this).toSorted(e);
  },
  toSpliced(...e) {
    return xt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nt(this, 'unshift', e);
  },
  values() {
    return Jn(this, 'values', be);
  }
};
function Jn(e, t, n) {
  const s = Fn(e),
    r = s[t]();
  return (
    s !== e &&
      !Pe(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    r
  );
}
const Jo = Array.prototype;
function Ue(e, t, n, s, r, i) {
  const o = Fn(e),
    l = o !== e && !Pe(e),
    c = o[t];
  if (c !== Jo[t]) {
    const h = c.apply(e, i);
    return l ? be(h) : h;
  }
  let u = n;
  o !== e &&
    (l
      ? (u = function (h, y) {
          return n.call(this, be(h), y, e);
        })
      : n.length > 2 &&
        (u = function (h, y) {
          return n.call(this, h, y, e);
        }));
  const f = c.call(o, u, s);
  return l && r ? r(f) : f;
}
function er(e, t, n, s) {
  const r = Fn(e);
  let i = n;
  return (
    r !== e &&
      (Pe(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e);
          })
        : (i = function (o, l, c) {
            return n.call(this, o, be(l), c, e);
          })),
    r[t](i, ...s)
  );
}
function Qn(e, t, n) {
  const s = J(e);
  ye(s, 'iterate', Bt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && js(n[0]) ? ((n[0] = J(n[0])), s[t](...n)) : r;
}
function Nt(e, t, n = []) {
  it(), Ns();
  const s = J(e)[t].apply(e, n);
  return Fs(), ot(), s;
}
const Qo = Ms('__proto__,__v_isRef,__isVue'),
  oi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ye)
  );
function Zo(e) {
  Ye(e) || (e = String(e));
  const t = J(this);
  return ye(t, 'has', e), t.hasOwnProperty(e);
}
class li {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip;
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === '__v_isReactive') return !r;
    if (n === '__v_isReadonly') return r;
    if (n === '__v_isShallow') return i;
    if (n === '__v_raw')
      return s === (r ? (i ? fl : ai) : i ? ui : fi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = B(t);
    if (!r) {
      let c;
      if (o && (c = zo[n])) return c;
      if (n === 'hasOwnProperty') return Zo;
    }
    const l = Reflect.get(t, n, fe(t) ? t : s);
    return (Ye(n) ? oi.has(n) : Qo(n)) || (r || ye(t, 'get', n), i)
      ? l
      : fe(l)
        ? o && Ls(n)
          ? l
          : l.value
        : se(l)
          ? r
            ? Hn(l)
            : Mt(l)
          : l;
  }
}
class ci extends li {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const c = vt(i);
      if ((!Pe(s) && !vt(s) && ((i = J(i)), (s = J(s))), !B(t) && fe(i) && !fe(s)))
        return c ? !1 : ((i.value = s), !0);
    }
    const o = B(t) && Ls(n) ? Number(n) < t.length : Q(t, n),
      l = Reflect.set(t, n, s, fe(t) ? t : r);
    return t === J(r) && (o ? nt(s, i) && qe(t, 'set', n, s) : qe(t, 'add', n, s)), l;
  }
  deleteProperty(t, n) {
    const s = Q(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, 'delete', n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ye(n) || !oi.has(n)) && ye(t, 'has', n), s;
  }
  ownKeys(t) {
    return ye(t, 'iterate', B(t) ? 'length' : ht), Reflect.ownKeys(t);
  }
}
class el extends li {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const tl = new ci(),
  nl = new el(),
  sl = new ci(!0);
const bs = (e) => e,
  rn = (e) => Reflect.getPrototypeOf(e);
function rl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = J(r),
      o = At(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      f = n ? bs : t ? _s : be;
    return (
      !t && ye(i, 'iterate', c ? ys : ht),
      {
        next() {
          const { value: h, done: y } = u.next();
          return y ? { value: h, done: y } : { value: l ? [f(h[0]), f(h[1])] : f(h), done: y };
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    );
  };
}
function on(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function il(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r);
      e || (nt(r, l) && ye(o, 'get', r), ye(o, 'get', l));
      const { has: c } = rn(o),
        u = t ? bs : e ? _s : be;
      if (c.call(o, r)) return u(i.get(r));
      if (c.call(o, l)) return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ye(J(r), 'iterate', ht), Reflect.get(r, 'size', r);
    },
    has(r) {
      const i = this.__v_raw,
        o = J(i),
        l = J(r);
      return (
        e || (nt(r, l) && ye(o, 'has', r), ye(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = J(l),
        u = t ? bs : e ? _s : be;
      return !e && ye(c, 'iterate', ht), l.forEach((f, h) => r.call(i, u(f), u(h), o));
    }
  };
  return (
    ae(
      n,
      e
        ? { add: on('add'), set: on('set'), delete: on('delete'), clear: on('clear') }
        : {
            add(r) {
              !t && !Pe(r) && !vt(r) && (r = J(r));
              const i = J(this);
              return rn(i).has.call(i, r) || (i.add(r), qe(i, 'add', r, r)), this;
            },
            set(r, i) {
              !t && !Pe(i) && !vt(i) && (i = J(i));
              const o = J(this),
                { has: l, get: c } = rn(o);
              let u = l.call(o, r);
              u || ((r = J(r)), (u = l.call(o, r)));
              const f = c.call(o, r);
              return o.set(r, i), u ? nt(i, f) && qe(o, 'set', r, i) : qe(o, 'add', r, i), this;
            },
            delete(r) {
              const i = J(this),
                { has: o, get: l } = rn(i);
              let c = o.call(i, r);
              c || ((r = J(r)), (c = o.call(i, r))), l && l.call(i, r);
              const u = i.delete(r);
              return c && qe(i, 'delete', r, void 0), u;
            },
            clear() {
              const r = J(this),
                i = r.size !== 0,
                o = r.clear();
              return i && qe(r, 'clear', void 0, void 0), o;
            }
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = rl(r, e, t);
    }),
    n
  );
}
function Ds(e, t) {
  const n = il(e, t);
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Q(n, r) && r in s ? n : s, r, i);
}
const ol = { get: Ds(!1, !1) },
  ll = { get: Ds(!1, !0) },
  cl = { get: Ds(!0, !1) };
const fi = new WeakMap(),
  ui = new WeakMap(),
  ai = new WeakMap(),
  fl = new WeakMap();
function ul(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function al(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ul(Lo(e));
}
function Mt(e) {
  return vt(e) ? e : $s(e, !1, tl, ol, fi);
}
function dl(e) {
  return $s(e, !1, sl, ll, ui);
}
function Hn(e) {
  return $s(e, !0, nl, cl, ai);
}
function $s(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = al(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function pt(e) {
  return vt(e) ? pt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
function js(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function yn(e) {
  return !Q(e, '__v_skip') && Object.isExtensible(e) && Gr(e, '__v_skip', !0), e;
}
const be = (e) => (se(e) ? Mt(e) : e),
  _s = (e) => (se(e) ? Hn(e) : e);
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function pe(e) {
  return di(e, !1);
}
function Vs(e) {
  return di(e, !0);
}
function di(e, t) {
  return fe(e) ? e : new hl(e, t);
}
class hl {
  constructor(t, n) {
    (this.dep = new Nn()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : be(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Pe(t) || vt(t);
    (t = s ? t : J(t)),
      nt(t, n) && ((this._rawValue = t), (this._value = s ? t : be(t)), this.dep.trigger());
  }
}
function ks(e) {
  return fe(e) ? e.value : e;
}
function le(e) {
  return G(e) ? e() : ks(e);
}
const pl = {
  get: (e, t, n) => (t === '__v_raw' ? e : ks(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  }
};
function hi(e) {
  return pt(e) ? e : new Proxy(e, pl);
}
class gl {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Nn()),
      { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = s), (this._set = r);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function ml(e) {
  return new gl(e);
}
class yl {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Yo(J(this._object), this._key);
  }
}
class bl {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function _l(e, t, n) {
  return fe(e) ? e : G(e) ? new bl(e) : se(e) && arguments.length > 1 ? vl(e, t, n) : pe(e);
}
function vl(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new yl(e, t, n);
}
class wl {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Nn(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ut - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && te !== this)) return ei(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return si(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Sl(e, t, n = !1) {
  let s, r;
  return G(e) ? (s = e) : ((s = e.get), (r = e.set)), new wl(s, r, n);
}
const ln = {},
  Sn = new WeakMap();
let at;
function xl(e, t = !1, n = at) {
  if (n) {
    let s = Sn.get(n);
    s || Sn.set(n, (s = [])), s.push(e);
  }
}
function Tl(e, t, n = ne) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n,
    u = (g) => (r ? g : Pe(g) || r === !1 || r === 0 ? tt(g, 1) : tt(g));
  let f,
    h,
    y,
    b,
    A = !1,
    P = !1;
  if (
    (fe(e)
      ? ((h = () => e.value), (A = Pe(e)))
      : pt(e)
        ? ((h = () => u(e)), (A = !0))
        : B(e)
          ? ((P = !0),
            (A = e.some((g) => pt(g) || Pe(g))),
            (h = () =>
              e.map((g) => {
                if (fe(g)) return g.value;
                if (pt(g)) return u(g);
                if (G(g)) return c ? c(g, 2) : g();
              })))
          : G(e)
            ? t
              ? (h = c ? () => c(e, 2) : e)
              : (h = () => {
                  if (y) {
                    it();
                    try {
                      y();
                    } finally {
                      ot();
                    }
                  }
                  const g = at;
                  at = f;
                  try {
                    return c ? c(e, 3, [b]) : e(b);
                  } finally {
                    at = g;
                  }
                })
            : (h = We),
    t && r)
  ) {
    const g = h,
      M = r === !0 ? 1 / 0 : r;
    h = () => tt(g(), M);
  }
  const K = Jr(),
    H = () => {
      f.stop(), K && K.active && Ps(K.effects, f);
    };
  if (i && t) {
    const g = t;
    t = (...M) => {
      g(...M), H();
    };
  }
  let k = P ? new Array(e.length).fill(ln) : ln;
  const p = (g) => {
    if (!(!(f.flags & 1) || (!f.dirty && !g)))
      if (t) {
        const M = f.run();
        if (r || A || (P ? M.some((V, R) => nt(V, k[R])) : nt(M, k))) {
          y && y();
          const V = at;
          at = f;
          try {
            const R = [M, k === ln ? void 0 : P && k[0] === ln ? [] : k, b];
            c ? c(t, 3, R) : t(...R), (k = M);
          } finally {
            at = V;
          }
        }
      } else f.run();
  };
  return (
    l && l(p),
    (f = new Qr(h)),
    (f.scheduler = o ? () => o(p, !1) : p),
    (b = (g) => xl(g, !1, f)),
    (y = f.onStop =
      () => {
        const g = Sn.get(f);
        if (g) {
          if (c) c(g, 4);
          else for (const M of g) M();
          Sn.delete(f);
        }
      }),
    t ? (s ? p(!0) : (k = f.run())) : o ? o(p.bind(null, !0), !0) : f.run(),
    (H.pause = f.pause.bind(f)),
    (H.resume = f.resume.bind(f)),
    (H.stop = H),
    H
  );
}
function tt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, fe(e))) tt(e.value, t, n);
  else if (B(e)) for (let s = 0; s < e.length; s++) tt(e[s], t, n);
  else if (Ur(e) || At(e))
    e.forEach((s) => {
      tt(s, t, n);
    });
  else if (qr(e)) {
    for (const s in e) tt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && tt(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Zt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Dn(r, t, n);
  }
}
function De(e, t, n, s) {
  if (G(e)) {
    const r = Zt(e, t, n, s);
    return (
      r &&
        Br(r) &&
        r.catch((i) => {
          Dn(i, t, n);
        }),
      r
    );
  }
  if (B(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(De(e[i], t, n, s));
    return r;
  }
}
function Dn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || ne;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, c, u) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      it(), Zt(i, null, 10, [e, c, u]), ot();
      return;
    }
  }
  El(e, n, r, s, o);
}
function El(e, t, n, s = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const Se = [];
let Ve = -1;
const Ot = [];
let Qe = null,
  Et = 0;
const pi = Promise.resolve();
let xn = null;
function $n(e) {
  const t = xn || pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cl(e) {
  let t = Ve + 1,
    n = Se.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = Se[s],
      i = Kt(r);
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e),
      n = Se[Se.length - 1];
    !n || (!(e.flags & 2) && t >= Kt(n)) ? Se.push(e) : Se.splice(Cl(t), 0, e),
      (e.flags |= 1),
      gi();
  }
}
function gi() {
  xn || (xn = pi.then(mi));
}
function Al(e) {
  B(e)
    ? Ot.push(...e)
    : Qe && e.id === -1
      ? Qe.splice(Et + 1, 0, e)
      : e.flags & 1 || (Ot.push(e), (e.flags |= 1)),
    gi();
}
function tr(e, t, n = Ve + 1) {
  for (; n < Se.length; n++) {
    const s = Se[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Se.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Tn(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort((n, s) => Kt(n) - Kt(s));
    if (((Ot.length = 0), Qe)) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, Et = 0; Et < Qe.length; Et++) {
      const n = Qe[Et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Qe = null), (Et = 0);
  }
}
const Kt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function mi(e) {
  try {
    for (Ve = 0; Ve < Se.length; Ve++) {
      const t = Se[Ve];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), Zt(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ve < Se.length; Ve++) {
      const t = Se[Ve];
      t && (t.flags &= -2);
    }
    (Ve = -1), (Se.length = 0), Tn(), (xn = null), (Se.length || Ot.length) && mi();
  }
}
let de = null,
  yi = null;
function En(e) {
  const t = de;
  return (de = e), (yi = (e && e.type.__scopeId) || null), t;
}
function Rl(e, t = de, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && hr(-1);
    const i = En(t);
    let o;
    try {
      o = e(...r);
    } finally {
      En(i), s._d && hr(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function ke(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (it(), De(c, n, 8, [e.el, l, e, t]), ot());
  }
}
const Ol = Symbol('_vte'),
  bi = (e) => e.__isTeleport,
  Ze = Symbol('_leaveCb'),
  cn = Symbol('_enterCb');
function Ml() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    It(() => {
      e.isMounted = !0;
    }),
    Ai(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Oe = [Function, Array],
  _i = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Oe,
    onEnter: Oe,
    onAfterEnter: Oe,
    onEnterCancelled: Oe,
    onBeforeLeave: Oe,
    onLeave: Oe,
    onAfterLeave: Oe,
    onLeaveCancelled: Oe,
    onBeforeAppear: Oe,
    onAppear: Oe,
    onAfterAppear: Oe,
    onAppearCancelled: Oe
  },
  vi = (e) => {
    const t = e.subTree;
    return t.component ? vi(t.component) : t;
  },
  Il = {
    name: 'BaseTransition',
    props: _i,
    setup(e, { slots: t }) {
      const n = en(),
        s = Ml();
      return () => {
        const r = t.default && xi(t.default(), !0);
        if (!r || !r.length) return;
        const i = wi(r),
          o = J(e),
          { mode: l } = o;
        if (s.isLeaving) return Zn(i);
        const c = nr(i);
        if (!c) return Zn(i);
        let u = vs(c, o, s, n, (h) => (u = h));
        c.type !== _e && qt(c, u);
        let f = n.subTree && nr(n.subTree);
        if (f && f.type !== _e && !dt(c, f) && vi(n).type !== _e) {
          let h = vs(f, o, s, n);
          if ((qt(f, h), l === 'out-in' && c.type !== _e))
            return (
              (s.isLeaving = !0),
              (h.afterLeave = () => {
                (s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete h.afterLeave,
                  (f = void 0);
              }),
              Zn(i)
            );
          l === 'in-out' && c.type !== _e
            ? (h.delayLeave = (y, b, A) => {
                const P = Si(s, f);
                (P[String(f.key)] = f),
                  (y[Ze] = () => {
                    b(), (y[Ze] = void 0), delete u.delayedLeave, (f = void 0);
                  }),
                  (u.delayedLeave = () => {
                    A(), delete u.delayedLeave, (f = void 0);
                  });
              })
            : (f = void 0);
        } else f && (f = void 0);
        return i;
      };
    }
  };
function wi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== _e) {
        t = n;
        break;
      }
  }
  return t;
}
const Pl = Il;
function Si(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function vs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: y,
      onLeave: b,
      onAfterLeave: A,
      onLeaveCancelled: P,
      onBeforeAppear: K,
      onAppear: H,
      onAfterAppear: k,
      onAppearCancelled: p
    } = t,
    g = String(e.key),
    M = Si(n, e),
    V = (T, I) => {
      T && De(T, s, 9, I);
    },
    R = (T, I) => {
      const E = I[1];
      V(T, I), B(T) ? T.every((_) => _.length <= 1) && E() : T.length <= 1 && E();
    },
    W = {
      mode: o,
      persisted: l,
      beforeEnter(T) {
        let I = c;
        if (!n.isMounted)
          if (i) I = K || c;
          else return;
        T[Ze] && T[Ze](!0);
        const E = M[g];
        E && dt(e, E) && E.el[Ze] && E.el[Ze](), V(I, [T]);
      },
      enter(T) {
        let I = u,
          E = f,
          _ = h;
        if (!n.isMounted)
          if (i) (I = H || u), (E = k || f), (_ = p || h);
          else return;
        let N = !1;
        const Y = (T[cn] = (re) => {
          N ||
            ((N = !0),
            re ? V(_, [T]) : V(E, [T]),
            W.delayedLeave && W.delayedLeave(),
            (T[cn] = void 0));
        });
        I ? R(I, [T, Y]) : Y();
      },
      leave(T, I) {
        const E = String(e.key);
        if ((T[cn] && T[cn](!0), n.isUnmounting)) return I();
        V(y, [T]);
        let _ = !1;
        const N = (T[Ze] = (Y) => {
          _ ||
            ((_ = !0), I(), Y ? V(P, [T]) : V(A, [T]), (T[Ze] = void 0), M[E] === e && delete M[E]);
        });
        (M[E] = e), b ? R(b, [T, N]) : N();
      },
      clone(T) {
        const I = vs(T, t, n, s, r);
        return r && r(I), I;
      }
    };
  return W;
}
function Zn(e) {
  if (jn(e)) return (e = st(e)), (e.children = null), e;
}
function nr(e) {
  if (!jn(e)) return bi(e.type) && e.children ? wi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && G(n.default)) return n.default();
  }
}
function qt(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), qt(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function xi(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === xe
      ? (o.patchFlag & 128 && r++, (s = s.concat(xi(o.children, t, l))))
      : (t || o.type !== _e) && s.push(l != null ? st(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */ function Ti(e, t) {
  return G(e) ? ae({ name: e.name }, t, { setup: e }) : e;
}
function Ei(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Gt(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((A, P) => Gt(A, t && (B(t) ? t[P] : t), n, s, r));
    return;
  }
  if (gt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Gt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Ks(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    f = l.refs === ne ? (l.refs = {}) : l.refs,
    h = l.setupState,
    y = J(h),
    b = h === ne ? () => !1 : (A) => Q(y, A);
  if (
    (u != null &&
      u !== c &&
      (oe(u) ? ((f[u] = null), b(u) && (h[u] = null)) : fe(u) && (u.value = null)),
    G(c))
  )
    Zt(c, l, 12, [o, f]);
  else {
    const A = oe(c),
      P = fe(c);
    if (A || P) {
      const K = () => {
        if (e.f) {
          const H = A ? (b(c) ? h[c] : f[c]) : c.value;
          r
            ? B(H) && Ps(H, i)
            : B(H)
              ? H.includes(i) || H.push(i)
              : A
                ? ((f[c] = [i]), b(c) && (h[c] = f[c]))
                : ((c.value = [i]), e.k && (f[e.k] = c.value));
        } else A ? ((f[c] = o), b(c) && (h[c] = o)) : P && ((c.value = o), e.k && (f[e.k] = o));
      };
      o ? ((K.id = -1), Ae(K, n)) : K();
    }
  }
}
let sr = !1;
const Tt = () => {
    sr || (console.error('Hydration completed but contains mismatches.'), (sr = !0));
  },
  Ll = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Nl = (e) => e.namespaceURI.includes('MathML'),
  fn = (e) => {
    if (e.nodeType === 1) {
      if (Ll(e)) return 'svg';
      if (Nl(e)) return 'mathml';
    }
  },
  un = (e) => e.nodeType === 8;
function Fl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u
      }
    } = e,
    f = (p, g) => {
      if (!g.hasChildNodes()) {
        n(null, p, g), Tn(), (g._vnode = p);
        return;
      }
      h(g.firstChild, p, null, null, null), Tn(), (g._vnode = p);
    },
    h = (p, g, M, V, R, W = !1) => {
      W = W || !!g.dynamicChildren;
      const T = un(p) && p.data === '[',
        I = () => P(p, g, M, V, R, T),
        { type: E, ref: _, shapeFlag: N, patchFlag: Y } = g;
      let re = p.nodeType;
      (g.el = p), Y === -2 && ((W = !1), (g.dynamicChildren = null));
      let $ = null;
      switch (E) {
        case bt:
          re !== 3
            ? g.children === ''
              ? (c((g.el = r('')), o(p), p), ($ = p))
              : ($ = I())
            : (p.data !== g.children && (Tt(), (p.data = g.children)), ($ = i(p)));
          break;
        case _e:
          k(p)
            ? (($ = i(p)), H((g.el = p.content.firstChild), p, M))
            : re !== 8 || T
              ? ($ = I())
              : ($ = i(p));
          break;
        case Vt:
          if ((T && ((p = i(p)), (re = p.nodeType)), re === 1 || re === 3)) {
            $ = p;
            const X = !g.children.length;
            for (let D = 0; D < g.staticCount; D++)
              X && (g.children += $.nodeType === 1 ? $.outerHTML : $.data),
                D === g.staticCount - 1 && (g.anchor = $),
                ($ = i($));
            return T ? i($) : $;
          } else I();
          break;
        case xe:
          T ? ($ = A(p, g, M, V, R, W)) : ($ = I());
          break;
        default:
          if (N & 1)
            (re !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !k(p)
              ? ($ = I())
              : ($ = y(p, g, M, V, R, W));
          else if (N & 6) {
            g.slotScopeIds = R;
            const X = o(p);
            if (
              (T
                ? ($ = K(p))
                : un(p) && p.data === 'teleport start'
                  ? ($ = K(p, p.data, 'teleport end'))
                  : ($ = i(p)),
              t(g, X, null, M, V, fn(X), W),
              gt(g) && !g.type.__asyncResolved)
            ) {
              let D;
              T
                ? ((D = he(xe)), (D.anchor = $ ? $.previousSibling : X.lastChild))
                : (D = p.nodeType === 3 ? ro('') : he('div')),
                (D.el = p),
                (g.component.subTree = D);
            }
          } else
            N & 64
              ? re !== 8
                ? ($ = I())
                : ($ = g.type.hydrate(p, g, M, V, R, W, e, b))
              : N & 128 && ($ = g.type.hydrate(p, g, M, V, fn(o(p)), R, W, e, h));
      }
      return _ != null && Gt(_, null, V, g), $;
    },
    y = (p, g, M, V, R, W) => {
      W = W || !!g.dynamicChildren;
      const { type: T, props: I, patchFlag: E, shapeFlag: _, dirs: N, transition: Y } = g,
        re = T === 'input' || T === 'option';
      if (re || E !== -1) {
        N && ke(g, null, M, 'created');
        let $ = !1;
        if (k(p)) {
          $ = qi(null, Y) && M && M.vnode.props && M.vnode.props.appear;
          const D = p.content.firstChild;
          $ && Y.beforeEnter(D), H(D, p, M), (g.el = p = D);
        }
        if (_ & 16 && !(I && (I.innerHTML || I.textContent))) {
          let D = b(p.firstChild, g, p, M, V, R, W);
          for (; D; ) {
            an(p, 1) || Tt();
            const ce = D;
            (D = D.nextSibling), l(ce);
          }
        } else if (_ & 8) {
          let D = g.children;
          D[0] ===
            `
` &&
            (p.tagName === 'PRE' || p.tagName === 'TEXTAREA') &&
            (D = D.slice(1)),
            p.textContent !== D && (an(p, 0) || Tt(), (p.textContent = g.children));
        }
        if (I) {
          if (re || !W || E & 48) {
            const D = p.tagName.includes('-');
            for (const ce in I)
              ((re && (ce.endsWith('value') || ce === 'indeterminate')) ||
                (Qt(ce) && !Rt(ce)) ||
                ce[0] === '.' ||
                D) &&
                s(p, ce, null, I[ce], void 0, M);
          } else if (I.onClick) s(p, 'onClick', null, I.onClick, void 0, M);
          else if (E & 4 && pt(I.style)) for (const D in I.style) I.style[D];
        }
        let X;
        (X = I && I.onVnodeBeforeMount) && Me(X, M, g),
          N && ke(g, null, M, 'beforeMount'),
          ((X = I && I.onVnodeMounted) || N || $) &&
            eo(() => {
              X && Me(X, M, g), $ && Y.enter(p), N && ke(g, null, M, 'mounted');
            }, V);
      }
      return p.nextSibling;
    },
    b = (p, g, M, V, R, W, T) => {
      T = T || !!g.dynamicChildren;
      const I = g.children,
        E = I.length;
      for (let _ = 0; _ < E; _++) {
        const N = T ? I[_] : (I[_] = Ie(I[_])),
          Y = N.type === bt;
        p
          ? (Y &&
              !T &&
              _ + 1 < E &&
              Ie(I[_ + 1]).type === bt &&
              (c(r(p.data.slice(N.children.length)), M, i(p)), (p.data = N.children)),
            (p = h(p, N, V, R, W, T)))
          : Y && !N.children
            ? c((N.el = r('')), M)
            : (an(M, 1) || Tt(), n(null, N, M, null, V, R, fn(M), W));
      }
      return p;
    },
    A = (p, g, M, V, R, W) => {
      const { slotScopeIds: T } = g;
      T && (R = R ? R.concat(T) : T);
      const I = o(p),
        E = b(i(p), g, I, M, V, R, W);
      return E && un(E) && E.data === ']'
        ? i((g.anchor = E))
        : (Tt(), c((g.anchor = u(']')), I, E), E);
    },
    P = (p, g, M, V, R, W) => {
      if ((an(p.parentElement, 1) || Tt(), (g.el = null), W)) {
        const E = K(p);
        for (;;) {
          const _ = i(p);
          if (_ && _ !== E) l(_);
          else break;
        }
      }
      const T = i(p),
        I = o(p);
      return l(p), n(null, g, I, T, M, V, fn(I), R), M && ((M.vnode.el = g.el), Qi(M, g.el)), T;
    },
    K = (p, g = '[', M = ']') => {
      let V = 0;
      for (; p; )
        if (((p = i(p)), p && un(p) && (p.data === g && V++, p.data === M))) {
          if (V === 0) return i(p);
          V--;
        }
      return p;
    },
    H = (p, g, M) => {
      const V = g.parentNode;
      V && V.replaceChild(p, g);
      let R = M;
      for (; R; ) R.vnode.el === g && (R.vnode.el = R.subTree.el = p), (R = R.parent);
    },
    k = (p) => p.nodeType === 1 && p.tagName === 'TEMPLATE';
  return [f, h];
}
const rr = 'data-allow-mismatch',
  Hl = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' };
function an(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(rr); ) e = e.parentElement;
  const n = e && e.getAttribute(rr);
  if (n == null) return !1;
  if (n === '') return !0;
  {
    const s = n.split(',');
    return t === 0 && s.includes('children') ? !0 : n.split(',').includes(Hl[t]);
  }
}
In().requestIdleCallback;
In().cancelIdleCallback;
const gt = (e) => !!e.type.__asyncLoader,
  jn = (e) => e.type.__isKeepAlive;
function Dl(e, t) {
  Ci(e, 'a', t);
}
function $l(e, t) {
  Ci(e, 'da', t);
}
function Ci(e, t, n = ue) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Vn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; ) jn(r.parent.vnode) && jl(s, t, n, r), (r = r.parent);
  }
}
function jl(e, t, n, s) {
  const r = Vn(t, e, s, !0);
  kn(() => {
    Ps(s[t], r);
  }, n);
}
function Vn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          it();
          const l = tn(n),
            c = De(t, n, e, o);
          return l(), ot(), c;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ze =
    (e) =>
    (t, n = ue) => {
      (!zt || e === 'sp') && Vn(e, (...s) => t(...s), n);
    },
  Vl = ze('bm'),
  It = ze('m'),
  kl = ze('bu'),
  Wl = ze('u'),
  Ai = ze('bum'),
  kn = ze('um'),
  Ul = ze('sp'),
  Bl = ze('rtg'),
  Kl = ze('rtc');
function ql(e, t = ue) {
  Vn('ec', e, t);
}
const Ri = 'components';
function hu(e, t) {
  return Mi(Ri, e, !0, t) || e;
}
const Oi = Symbol.for('v-ndc');
function pu(e) {
  return oe(e) ? Mi(Ri, e, !1) || e : e || Oi;
}
function Mi(e, t, n = !0, s = !1) {
  const r = de || ue;
  if (r) {
    const i = r.type;
    {
      const l = Mc(i, !1);
      if (l && (l === t || l === Ne(t) || l === Mn(Ne(t)))) return i;
    }
    const o = ir(r[e] || i[e], t) || ir(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function ir(e, t) {
  return e && (e[t] || e[Ne(t)] || e[Mn(Ne(t))]);
}
function gu(e, t, n, s) {
  let r;
  const i = n,
    o = B(e);
  if (o || oe(e)) {
    const l = o && pt(e);
    let c = !1;
    l && ((c = !Pe(e)), (e = Fn(e))), (r = new Array(e.length));
    for (let u = 0, f = e.length; u < f; u++) r[u] = t(c ? be(e[u]) : e[u], u, void 0, i);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (se(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, u = l.length; c < u; c++) {
        const f = l[c];
        r[c] = t(e[f], f, c, i);
      }
    }
  else r = [];
  return r;
}
function mu(e, t, n = {}, s, r) {
  if (de.ce || (de.parent && gt(de.parent) && de.parent.ce))
    return t !== 'default' && (n.name = t), Es(), Cs(xe, null, [he('slot', n, s && s())], 64);
  let i = e[t];
  i && i._c && (i._d = !1), Es();
  const o = i && Ii(i(n)),
    l = n.key || (o && o.key),
    c = Cs(
      xe,
      { key: (l && !Ye(l) ? l : `_${t}`) + (!o && s ? '_fb' : '') },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2
    );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + '-s']), i && i._c && (i._d = !0), c;
}
function Ii(e) {
  return e.some((t) => (Yt(t) ? !(t.type === _e || (t.type === xe && !Ii(t.children))) : !0))
    ? e
    : null;
}
function yu(e, t) {
  const n = {};
  for (const s in e) n[/[A-Z]/.test(s) ? `on:${s}` : mn(s)] = e[s];
  return n;
}
const ws = (e) => (e ? (io(e) ? Ks(e) : ws(e.parent)) : null),
  jt = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Li(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ws(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = $n.bind(e.proxy)),
    $watch: (e) => pc.bind(e)
  }),
  es = (e, t) => e !== ne && !e.__isScriptSetup && Q(e, t),
  Gl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c
      } = e;
      let u;
      if (t[0] !== '$') {
        const b = o[t];
        if (b !== void 0)
          switch (b) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (es(s, t)) return (o[t] = 1), s[t];
          if (r !== ne && Q(r, t)) return (o[t] = 2), r[t];
          if ((u = e.propsOptions[0]) && Q(u, t)) return (o[t] = 3), i[t];
          if (n !== ne && Q(n, t)) return (o[t] = 4), n[t];
          Ss && (o[t] = 0);
        }
      }
      const f = jt[t];
      let h, y;
      if (f) return t === '$attrs' && ye(e.attrs, 'get', ''), f(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== ne && Q(n, t)) return (o[t] = 4), n[t];
      if (((y = c.config.globalProperties), Q(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return es(r, t)
        ? ((r[t] = n), !0)
        : s !== ne && Q(s, t)
          ? ((s[t] = n), !0)
          : Q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== ne && Q(e, o)) ||
        es(t, o) ||
        ((l = i[0]) && Q(l, o)) ||
        Q(s, o) ||
        Q(jt, o) ||
        Q(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
function bu() {
  return Xl().slots;
}
function Xl() {
  const e = en();
  return e.setupContext || (e.setupContext = lo(e));
}
function or(e) {
  return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Ss = !0;
function Yl(e) {
  const t = Li(e),
    n = e.proxy,
    s = e.ctx;
  (Ss = !1), t.beforeCreate && lr(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: f,
    beforeMount: h,
    mounted: y,
    beforeUpdate: b,
    updated: A,
    activated: P,
    deactivated: K,
    beforeDestroy: H,
    beforeUnmount: k,
    destroyed: p,
    unmounted: g,
    render: M,
    renderTracked: V,
    renderTriggered: R,
    errorCaptured: W,
    serverPrefetch: T,
    expose: I,
    inheritAttrs: E,
    components: _,
    directives: N,
    filters: Y
  } = t;
  if ((u && zl(u, s, null), o))
    for (const X in o) {
      const D = o[X];
      G(D) && (s[X] = D.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    se(X) && (e.data = Mt(X));
  }
  if (((Ss = !0), i))
    for (const X in i) {
      const D = i[X],
        ce = G(D) ? D.bind(n, n) : G(D.get) ? D.get.bind(n, n) : We,
        nn = !G(D) && G(D.set) ? D.set.bind(n) : We,
        lt = ie({ get: ce, set: nn });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: ($e) => (lt.value = $e)
      });
    }
  if (l) for (const X in l) Pi(l[X], s, n, X);
  if (c) {
    const X = G(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((D) => {
      nc(D, X[D]);
    });
  }
  f && lr(f, e, 'c');
  function $(X, D) {
    B(D) ? D.forEach((ce) => X(ce.bind(n))) : D && X(D.bind(n));
  }
  if (
    ($(Vl, h),
    $(It, y),
    $(kl, b),
    $(Wl, A),
    $(Dl, P),
    $($l, K),
    $(ql, W),
    $(Kl, V),
    $(Bl, R),
    $(Ai, k),
    $(kn, g),
    $(Ul, T),
    B(I))
  )
    if (I.length) {
      const X = e.exposed || (e.exposed = {});
      I.forEach((D) => {
        Object.defineProperty(X, D, { get: () => n[D], set: (ce) => (n[D] = ce) });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === We && (e.render = M),
    E != null && (e.inheritAttrs = E),
    _ && (e.components = _),
    N && (e.directives = N),
    T && Ei(e);
}
function zl(e, t, n = We) {
  B(e) && (e = xs(e));
  for (const s in e) {
    const r = e[s];
    let i;
    se(r)
      ? 'default' in r
        ? (i = yt(r.from || s, r.default, !0))
        : (i = yt(r.from || s))
      : (i = yt(r)),
      fe(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o)
          })
        : (t[s] = i);
  }
}
function lr(e, t, n) {
  De(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pi(e, t, n, s) {
  let r = s.includes('.') ? zi(n, s) : () => n[s];
  if (oe(e)) {
    const i = t[e];
    G(i) && Le(r, i);
  } else if (G(e)) Le(r, e.bind(n));
  else if (se(e))
    if (B(e)) e.forEach((i) => Pi(i, t, n, s));
    else {
      const i = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(i) && Le(r, i, e);
    }
}
function Li(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((u) => Cn(c, u, o, !0)), Cn(c, t, o)),
    se(t) && i.set(t, c),
    c
  );
}
function Cn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Cn(e, i, n, !0), r && r.forEach((o) => Cn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Jl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Jl = {
  data: cr,
  props: fr,
  emits: fr,
  methods: Ht,
  computed: Ht,
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  components: Ht,
  directives: Ht,
  watch: Zl,
  provide: cr,
  inject: Ql
};
function cr(e, t) {
  return t
    ? e
      ? function () {
          return ae(G(e) ? e.call(this, this) : e, G(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function Ql(e, t) {
  return Ht(xs(e), xs(t));
}
function xs(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? ae(Object.create(null), e, t) : t;
}
function fr(e, t) {
  return e
    ? B(e) && B(t)
      ? [...new Set([...e, ...t])]
      : ae(Object.create(null), or(e), or(t ?? {}))
    : t;
}
function Zl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(Object.create(null), e);
  for (const s in t) n[s] = ve(e[s], t[s]);
  return n;
}
function Ni() {
  return {
    app: null,
    config: {
      isNativeTag: Io,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let ec = 0;
function tc(e, t) {
  return function (s, r = null) {
    G(s) || (s = ae({}, s)), r != null && !se(r) && (r = null);
    const i = Ni(),
      o = new WeakSet(),
      l = [];
    let c = !1;
    const u = (i.app = {
      _uid: ec++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Pc,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          o.has(f) ||
            (f && G(f.install) ? (o.add(f), f.install(u, ...h)) : G(f) && (o.add(f), f(u, ...h))),
          u
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), u;
      },
      component(f, h) {
        return h ? ((i.components[f] = h), u) : i.components[f];
      },
      directive(f, h) {
        return h ? ((i.directives[f] = h), u) : i.directives[f];
      },
      mount(f, h, y) {
        if (!c) {
          const b = u._ceVNode || he(s, r);
          return (
            (b.appContext = i),
            y === !0 ? (y = 'svg') : y === !1 && (y = void 0),
            h && t ? t(b, f) : e(b, f, y),
            (c = !0),
            (u._container = f),
            (f.__vue_app__ = u),
            Ks(b.component)
          );
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (De(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, h) {
        return (i.provides[f] = h), u;
      },
      runWithContext(f) {
        const h = mt;
        mt = u;
        try {
          return f();
        } finally {
          mt = h;
        }
      }
    });
    return u;
  };
}
let mt = null;
function nc(e, t) {
  if (ue) {
    let n = ue.provides;
    const s = ue.parent && ue.parent.provides;
    s === n && (n = ue.provides = Object.create(s)), (n[e] = t);
  }
}
function yt(e, t, n = !1) {
  const s = ue || de;
  if (s || mt) {
    const r = mt
      ? mt._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && G(t) ? t.call(s && s.proxy) : t;
  }
}
function Fi() {
  return !!(ue || de || mt);
}
const Hi = {},
  Di = () => Object.create(Hi),
  $i = (e) => Object.getPrototypeOf(e) === Hi;
function sc(e, t, n, s = !1) {
  const r = {},
    i = Di();
  (e.propsDefaults = Object.create(null)), ji(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : dl(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i);
}
function rc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    l = J(r),
    [c] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let y = f[h];
        if (Un(e.emitsOptions, y)) continue;
        const b = t[y];
        if (c)
          if (Q(i, y)) b !== i[y] && ((i[y] = b), (u = !0));
          else {
            const A = Ne(y);
            r[A] = Ts(c, l, A, b, e, !1);
          }
        else b !== i[y] && ((i[y] = b), (u = !0));
      }
    }
  } else {
    ji(e, t, r, i) && (u = !0);
    let f;
    for (const h in l)
      (!t || (!Q(t, h) && ((f = rt(h)) === h || !Q(t, f)))) &&
        (c
          ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = Ts(c, l, h, void 0, e, !0))
          : delete r[h]);
    if (i !== l) for (const h in i) (!t || !Q(t, h)) && (delete i[h], (u = !0));
  }
  u && qe(e.attrs, 'set', '');
}
function ji(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let c in t) {
      if (Rt(c)) continue;
      const u = t[c];
      let f;
      r && Q(r, (f = Ne(c)))
        ? !i || !i.includes(f)
          ? (n[f] = u)
          : ((l || (l = {}))[f] = u)
        : Un(e.emitsOptions, c) || ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)));
    }
  if (i) {
    const c = J(n),
      u = l || ne;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = Ts(r, c, h, u[h], e, !Q(u, h));
    }
  }
  return o;
}
function Ts(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = Q(o, 'default');
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && G(c)) {
        const { propsDefaults: u } = r;
        if (n in u) s = u[n];
        else {
          const f = tn(r);
          (s = u[n] = c.call(null, t)), f();
        }
      } else s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === rt(n)) && (s = !0));
  }
  return s;
}
const ic = new WeakMap();
function Vi(e, t, n = !1) {
  const s = n ? ic : t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let c = !1;
  if (!G(e)) {
    const f = (h) => {
      c = !0;
      const [y, b] = Vi(h, t, !0);
      ae(o, y), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c) return se(e) && s.set(e, Ct), Ct;
  if (B(i))
    for (let f = 0; f < i.length; f++) {
      const h = Ne(i[f]);
      ur(h) && (o[h] = ne);
    }
  else if (i)
    for (const f in i) {
      const h = Ne(f);
      if (ur(h)) {
        const y = i[f],
          b = (o[h] = B(y) || G(y) ? { type: y } : ae({}, y)),
          A = b.type;
        let P = !1,
          K = !0;
        if (B(A))
          for (let H = 0; H < A.length; ++H) {
            const k = A[H],
              p = G(k) && k.name;
            if (p === 'Boolean') {
              P = !0;
              break;
            } else p === 'String' && (K = !1);
          }
        else P = G(A) && A.name === 'Boolean';
        (b[0] = P), (b[1] = K), (P || Q(b, 'default')) && l.push(h);
      }
    }
  const u = [o, l];
  return se(e) && s.set(e, u), u;
}
function ur(e) {
  return e[0] !== '$' && !Rt(e);
}
const ki = (e) => e[0] === '_' || e === '$stable',
  Us = (e) => (B(e) ? e.map(Ie) : [Ie(e)]),
  oc = (e, t, n) => {
    if (t._n) return t;
    const s = Rl((...r) => Us(t(...r)), n);
    return (s._c = !1), s;
  },
  Wi = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ki(r)) continue;
      const i = e[r];
      if (G(i)) t[r] = oc(r, i, s);
      else if (i != null) {
        const o = Us(i);
        t[r] = () => o;
      }
    }
  },
  Ui = (e, t) => {
    const n = Us(t);
    e.slots.default = () => n;
  },
  Bi = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s]);
  },
  lc = (e, t, n) => {
    const s = (e.slots = Di());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Bi(s, t, n), n && Gr(s, '_', r, !0)) : Wi(t, s);
    } else t && Ui(e, t);
  },
  cc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = ne;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? (n && l === 1 ? (i = !1) : Bi(r, t, n)) : ((i = !t.$stable), Wi(t, r)), (o = t);
    } else t && (Ui(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !ki(l) && o[l] == null && delete r[l];
  },
  Ae = eo;
function fc(e) {
  return Ki(e);
}
function uc(e) {
  return Ki(e, Fl);
}
function Ki(e, t) {
  const n = In();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: h,
      nextSibling: y,
      setScopeId: b = We,
      insertStaticContent: A
    } = e,
    P = (a, d, m, S = null, v = null, w = null, L = void 0, O = null, C = !!d.dynamicChildren) => {
      if (a === d) return;
      a && !dt(a, d) && ((S = sn(a)), $e(a, v, w, !0), (a = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null));
      const { type: x, ref: U, shapeFlag: F } = d;
      switch (x) {
        case bt:
          K(a, d, m, S);
          break;
        case _e:
          H(a, d, m, S);
          break;
        case Vt:
          a == null && k(d, m, S, L);
          break;
        case xe:
          _(a, d, m, S, v, w, L, O, C);
          break;
        default:
          F & 1
            ? M(a, d, m, S, v, w, L, O, C)
            : F & 6
              ? N(a, d, m, S, v, w, L, O, C)
              : (F & 64 || F & 128) && x.process(a, d, m, S, v, w, L, O, C, St);
      }
      U != null && v && Gt(U, a && a.ref, w, d || a, !d);
    },
    K = (a, d, m, S) => {
      if (a == null) s((d.el = l(d.children)), m, S);
      else {
        const v = (d.el = a.el);
        d.children !== a.children && u(v, d.children);
      }
    },
    H = (a, d, m, S) => {
      a == null ? s((d.el = c(d.children || '')), m, S) : (d.el = a.el);
    },
    k = (a, d, m, S) => {
      [a.el, a.anchor] = A(a.children, d, m, S, a.el, a.anchor);
    },
    p = ({ el: a, anchor: d }, m, S) => {
      let v;
      for (; a && a !== d; ) (v = y(a)), s(a, m, S), (a = v);
      s(d, m, S);
    },
    g = ({ el: a, anchor: d }) => {
      let m;
      for (; a && a !== d; ) (m = y(a)), r(a), (a = m);
      r(d);
    },
    M = (a, d, m, S, v, w, L, O, C) => {
      d.type === 'svg' ? (L = 'svg') : d.type === 'math' && (L = 'mathml'),
        a == null ? V(d, m, S, v, w, L, O, C) : T(a, d, v, w, L, O, C);
    },
    V = (a, d, m, S, v, w, L, O) => {
      let C, x;
      const { props: U, shapeFlag: F, transition: j, dirs: q } = a;
      if (
        ((C = a.el = o(a.type, w, U && U.is, U)),
        F & 8 ? f(C, a.children) : F & 16 && W(a.children, C, null, S, v, ts(a, w), L, O),
        q && ke(a, null, S, 'created'),
        R(C, a, a.scopeId, L, S),
        U)
      ) {
        for (const ee in U) ee !== 'value' && !Rt(ee) && i(C, ee, null, U[ee], w, S);
        'value' in U && i(C, 'value', null, U.value, w), (x = U.onVnodeBeforeMount) && Me(x, S, a);
      }
      q && ke(a, null, S, 'beforeMount');
      const z = qi(v, j);
      z && j.beforeEnter(C),
        s(C, d, m),
        ((x = U && U.onVnodeMounted) || z || q) &&
          Ae(() => {
            x && Me(x, S, a), z && j.enter(C), q && ke(a, null, S, 'mounted');
          }, v);
    },
    R = (a, d, m, S, v) => {
      if ((m && b(a, m), S)) for (let w = 0; w < S.length; w++) b(a, S[w]);
      if (v) {
        let w = v.subTree;
        if (d === w || (Zi(w.type) && (w.ssContent === d || w.ssFallback === d))) {
          const L = v.vnode;
          R(a, L, L.scopeId, L.slotScopeIds, v.parent);
        }
      }
    },
    W = (a, d, m, S, v, w, L, O, C = 0) => {
      for (let x = C; x < a.length; x++) {
        const U = (a[x] = O ? et(a[x]) : Ie(a[x]));
        P(null, U, d, m, S, v, w, L, O);
      }
    },
    T = (a, d, m, S, v, w, L) => {
      const O = (d.el = a.el);
      let { patchFlag: C, dynamicChildren: x, dirs: U } = d;
      C |= a.patchFlag & 16;
      const F = a.props || ne,
        j = d.props || ne;
      let q;
      if (
        (m && ct(m, !1),
        (q = j.onVnodeBeforeUpdate) && Me(q, m, d, a),
        U && ke(d, a, m, 'beforeUpdate'),
        m && ct(m, !0),
        ((F.innerHTML && j.innerHTML == null) || (F.textContent && j.textContent == null)) &&
          f(O, ''),
        x
          ? I(a.dynamicChildren, x, O, m, S, ts(d, v), w)
          : L || D(a, d, O, null, m, S, ts(d, v), w, !1),
        C > 0)
      ) {
        if (C & 16) E(O, F, j, m, v);
        else if (
          (C & 2 && F.class !== j.class && i(O, 'class', null, j.class, v),
          C & 4 && i(O, 'style', F.style, j.style, v),
          C & 8)
        ) {
          const z = d.dynamicProps;
          for (let ee = 0; ee < z.length; ee++) {
            const Z = z[ee],
              Te = F[Z],
              ge = j[Z];
            (ge !== Te || Z === 'value') && i(O, Z, Te, ge, v, m);
          }
        }
        C & 1 && a.children !== d.children && f(O, d.children);
      } else !L && x == null && E(O, F, j, m, v);
      ((q = j.onVnodeUpdated) || U) &&
        Ae(() => {
          q && Me(q, m, d, a), U && ke(d, a, m, 'updated');
        }, S);
    },
    I = (a, d, m, S, v, w, L) => {
      for (let O = 0; O < d.length; O++) {
        const C = a[O],
          x = d[O],
          U = C.el && (C.type === xe || !dt(C, x) || C.shapeFlag & 70) ? h(C.el) : m;
        P(C, x, U, null, S, v, w, L, !0);
      }
    },
    E = (a, d, m, S, v) => {
      if (d !== m) {
        if (d !== ne) for (const w in d) !Rt(w) && !(w in m) && i(a, w, d[w], null, v, S);
        for (const w in m) {
          if (Rt(w)) continue;
          const L = m[w],
            O = d[w];
          L !== O && w !== 'value' && i(a, w, O, L, v, S);
        }
        'value' in m && i(a, 'value', d.value, m.value, v);
      }
    },
    _ = (a, d, m, S, v, w, L, O, C) => {
      const x = (d.el = a ? a.el : l('')),
        U = (d.anchor = a ? a.anchor : l(''));
      let { patchFlag: F, dynamicChildren: j, slotScopeIds: q } = d;
      q && (O = O ? O.concat(q) : q),
        a == null
          ? (s(x, m, S), s(U, m, S), W(d.children || [], m, U, v, w, L, O, C))
          : F > 0 && F & 64 && j && a.dynamicChildren
            ? (I(a.dynamicChildren, j, m, v, w, L, O),
              (d.key != null || (v && d === v.subTree)) && Gi(a, d, !0))
            : D(a, d, m, U, v, w, L, O, C);
    },
    N = (a, d, m, S, v, w, L, O, C) => {
      (d.slotScopeIds = O),
        a == null
          ? d.shapeFlag & 512
            ? v.ctx.activate(d, m, S, L, C)
            : Y(d, m, S, v, w, L, C)
          : re(a, d, C);
    },
    Y = (a, d, m, S, v, w, L) => {
      const O = (a.component = Cc(a, S, v));
      if ((jn(a) && (O.ctx.renderer = St), Ac(O, !1, L), O.asyncDep)) {
        if ((v && v.registerDep(O, $, L), !a.el)) {
          const C = (O.subTree = he(_e));
          H(null, C, d, m);
        }
      } else $(O, a, d, m, v, w, L);
    },
    re = (a, d, m) => {
      const S = (d.component = a.component);
      if (_c(a, d, m))
        if (S.asyncDep && !S.asyncResolved) {
          X(S, d, m);
          return;
        } else (S.next = d), S.update();
      else (d.el = a.el), (S.vnode = d);
    },
    $ = (a, d, m, S, v, w, L) => {
      const O = () => {
        if (a.isMounted) {
          let { next: F, bu: j, u: q, parent: z, vnode: ee } = a;
          {
            const Ee = Xi(a);
            if (Ee) {
              F && ((F.el = ee.el), X(a, F, L)),
                Ee.asyncDep.then(() => {
                  a.isUnmounted || O();
                });
              return;
            }
          }
          let Z = F,
            Te;
          ct(a, !1),
            F ? ((F.el = ee.el), X(a, F, L)) : (F = ee),
            j && Xn(j),
            (Te = F.props && F.props.onVnodeBeforeUpdate) && Me(Te, z, F, ee),
            ct(a, !0);
          const ge = ns(a),
            Fe = a.subTree;
          (a.subTree = ge),
            P(Fe, ge, h(Fe.el), sn(Fe), a, v, w),
            (F.el = ge.el),
            Z === null && Qi(a, ge.el),
            q && Ae(q, v),
            (Te = F.props && F.props.onVnodeUpdated) && Ae(() => Me(Te, z, F, ee), v);
        } else {
          let F;
          const { el: j, props: q } = d,
            { bm: z, m: ee, parent: Z, root: Te, type: ge } = a,
            Fe = gt(d);
          if (
            (ct(a, !1),
            z && Xn(z),
            !Fe && (F = q && q.onVnodeBeforeMount) && Me(F, Z, d),
            ct(a, !0),
            j && Gn)
          ) {
            const Ee = () => {
              (a.subTree = ns(a)), Gn(j, a.subTree, a, v, null);
            };
            Fe && ge.__asyncHydrate ? ge.__asyncHydrate(j, a, Ee) : Ee();
          } else {
            Te.ce && Te.ce._injectChildStyle(ge);
            const Ee = (a.subTree = ns(a));
            P(null, Ee, m, S, a, v, w), (d.el = Ee.el);
          }
          if ((ee && Ae(ee, v), !Fe && (F = q && q.onVnodeMounted))) {
            const Ee = d;
            Ae(() => Me(F, Z, Ee), v);
          }
          (d.shapeFlag & 256 || (Z && gt(Z.vnode) && Z.vnode.shapeFlag & 256)) && a.a && Ae(a.a, v),
            (a.isMounted = !0),
            (d = m = S = null);
        }
      };
      a.scope.on();
      const C = (a.effect = new Qr(O));
      a.scope.off();
      const x = (a.update = C.run.bind(C)),
        U = (a.job = C.runIfDirty.bind(C));
      (U.i = a), (U.id = a.uid), (C.scheduler = () => Ws(U)), ct(a, !0), x();
    },
    X = (a, d, m) => {
      d.component = a;
      const S = a.vnode.props;
      (a.vnode = d), (a.next = null), rc(a, d.props, S, m), cc(a, d.children, m), it(), tr(a), ot();
    },
    D = (a, d, m, S, v, w, L, O, C = !1) => {
      const x = a && a.children,
        U = a ? a.shapeFlag : 0,
        F = d.children,
        { patchFlag: j, shapeFlag: q } = d;
      if (j > 0) {
        if (j & 128) {
          nn(x, F, m, S, v, w, L, O, C);
          return;
        } else if (j & 256) {
          ce(x, F, m, S, v, w, L, O, C);
          return;
        }
      }
      q & 8
        ? (U & 16 && Pt(x, v, w), F !== x && f(m, F))
        : U & 16
          ? q & 16
            ? nn(x, F, m, S, v, w, L, O, C)
            : Pt(x, v, w, !0)
          : (U & 8 && f(m, ''), q & 16 && W(F, m, S, v, w, L, O, C));
    },
    ce = (a, d, m, S, v, w, L, O, C) => {
      (a = a || Ct), (d = d || Ct);
      const x = a.length,
        U = d.length,
        F = Math.min(x, U);
      let j;
      for (j = 0; j < F; j++) {
        const q = (d[j] = C ? et(d[j]) : Ie(d[j]));
        P(a[j], q, m, null, v, w, L, O, C);
      }
      x > U ? Pt(a, v, w, !0, !1, F) : W(d, m, S, v, w, L, O, C, F);
    },
    nn = (a, d, m, S, v, w, L, O, C) => {
      let x = 0;
      const U = d.length;
      let F = a.length - 1,
        j = U - 1;
      for (; x <= F && x <= j; ) {
        const q = a[x],
          z = (d[x] = C ? et(d[x]) : Ie(d[x]));
        if (dt(q, z)) P(q, z, m, null, v, w, L, O, C);
        else break;
        x++;
      }
      for (; x <= F && x <= j; ) {
        const q = a[F],
          z = (d[j] = C ? et(d[j]) : Ie(d[j]));
        if (dt(q, z)) P(q, z, m, null, v, w, L, O, C);
        else break;
        F--, j--;
      }
      if (x > F) {
        if (x <= j) {
          const q = j + 1,
            z = q < U ? d[q].el : S;
          for (; x <= j; ) P(null, (d[x] = C ? et(d[x]) : Ie(d[x])), m, z, v, w, L, O, C), x++;
        }
      } else if (x > j) for (; x <= F; ) $e(a[x], v, w, !0), x++;
      else {
        const q = x,
          z = x,
          ee = new Map();
        for (x = z; x <= j; x++) {
          const Ce = (d[x] = C ? et(d[x]) : Ie(d[x]));
          Ce.key != null && ee.set(Ce.key, x);
        }
        let Z,
          Te = 0;
        const ge = j - z + 1;
        let Fe = !1,
          Ee = 0;
        const Lt = new Array(ge);
        for (x = 0; x < ge; x++) Lt[x] = 0;
        for (x = q; x <= F; x++) {
          const Ce = a[x];
          if (Te >= ge) {
            $e(Ce, v, w, !0);
            continue;
          }
          let je;
          if (Ce.key != null) je = ee.get(Ce.key);
          else
            for (Z = z; Z <= j; Z++)
              if (Lt[Z - z] === 0 && dt(Ce, d[Z])) {
                je = Z;
                break;
              }
          je === void 0
            ? $e(Ce, v, w, !0)
            : ((Lt[je - z] = x + 1),
              je >= Ee ? (Ee = je) : (Fe = !0),
              P(Ce, d[je], m, null, v, w, L, O, C),
              Te++);
        }
        const zs = Fe ? ac(Lt) : Ct;
        for (Z = zs.length - 1, x = ge - 1; x >= 0; x--) {
          const Ce = z + x,
            je = d[Ce],
            Js = Ce + 1 < U ? d[Ce + 1].el : S;
          Lt[x] === 0
            ? P(null, je, m, Js, v, w, L, O, C)
            : Fe && (Z < 0 || x !== zs[Z] ? lt(je, m, Js, 2) : Z--);
        }
      }
    },
    lt = (a, d, m, S, v = null) => {
      const { el: w, type: L, transition: O, children: C, shapeFlag: x } = a;
      if (x & 6) {
        lt(a.component.subTree, d, m, S);
        return;
      }
      if (x & 128) {
        a.suspense.move(d, m, S);
        return;
      }
      if (x & 64) {
        L.move(a, d, m, St);
        return;
      }
      if (L === xe) {
        s(w, d, m);
        for (let F = 0; F < C.length; F++) lt(C[F], d, m, S);
        s(a.anchor, d, m);
        return;
      }
      if (L === Vt) {
        p(a, d, m);
        return;
      }
      if (S !== 2 && x & 1 && O)
        if (S === 0) O.beforeEnter(w), s(w, d, m), Ae(() => O.enter(w), v);
        else {
          const { leave: F, delayLeave: j, afterLeave: q } = O,
            z = () => s(w, d, m),
            ee = () => {
              F(w, () => {
                z(), q && q();
              });
            };
          j ? j(w, z, ee) : ee();
        }
      else s(w, d, m);
    },
    $e = (a, d, m, S = !1, v = !1) => {
      const {
        type: w,
        props: L,
        ref: O,
        children: C,
        dynamicChildren: x,
        shapeFlag: U,
        patchFlag: F,
        dirs: j,
        cacheIndex: q
      } = a;
      if (
        (F === -2 && (v = !1),
        O != null && Gt(O, null, m, a, !0),
        q != null && (d.renderCache[q] = void 0),
        U & 256)
      ) {
        d.ctx.deactivate(a);
        return;
      }
      const z = U & 1 && j,
        ee = !gt(a);
      let Z;
      if ((ee && (Z = L && L.onVnodeBeforeUnmount) && Me(Z, d, a), U & 6)) Mo(a.component, m, S);
      else {
        if (U & 128) {
          a.suspense.unmount(m, S);
          return;
        }
        z && ke(a, null, d, 'beforeUnmount'),
          U & 64
            ? a.type.remove(a, d, m, St, S)
            : x && !x.hasOnce && (w !== xe || (F > 0 && F & 64))
              ? Pt(x, d, m, !1, !0)
              : ((w === xe && F & 384) || (!v && U & 16)) && Pt(C, d, m),
          S && Xs(a);
      }
      ((ee && (Z = L && L.onVnodeUnmounted)) || z) &&
        Ae(() => {
          Z && Me(Z, d, a), z && ke(a, null, d, 'unmounted');
        }, m);
    },
    Xs = (a) => {
      const { type: d, el: m, anchor: S, transition: v } = a;
      if (d === xe) {
        Oo(m, S);
        return;
      }
      if (d === Vt) {
        g(a);
        return;
      }
      const w = () => {
        r(m), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (a.shapeFlag & 1 && v && !v.persisted) {
        const { leave: L, delayLeave: O } = v,
          C = () => L(m, w);
        O ? O(a.el, w, C) : C();
      } else w();
    },
    Oo = (a, d) => {
      let m;
      for (; a !== d; ) (m = y(a)), r(a), (a = m);
      r(d);
    },
    Mo = (a, d, m) => {
      const { bum: S, scope: v, job: w, subTree: L, um: O, m: C, a: x } = a;
      ar(C),
        ar(x),
        S && Xn(S),
        v.stop(),
        w && ((w.flags |= 8), $e(L, a, d, m)),
        O && Ae(O, d),
        Ae(() => {
          a.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    Pt = (a, d, m, S = !1, v = !1, w = 0) => {
      for (let L = w; L < a.length; L++) $e(a[L], d, m, S, v);
    },
    sn = (a) => {
      if (a.shapeFlag & 6) return sn(a.component.subTree);
      if (a.shapeFlag & 128) return a.suspense.next();
      const d = y(a.anchor || a.el),
        m = d && d[Ol];
      return m ? y(m) : d;
    };
  let Kn = !1;
  const Ys = (a, d, m) => {
      a == null
        ? d._vnode && $e(d._vnode, null, null, !0)
        : P(d._vnode || null, a, d, null, null, null, m),
        (d._vnode = a),
        Kn || ((Kn = !0), tr(), Tn(), (Kn = !1));
    },
    St = { p: P, um: $e, m: lt, r: Xs, mt: Y, mc: W, pc: D, pbc: I, n: sn, o: e };
  let qn, Gn;
  return t && ([qn, Gn] = t(St)), { render: Ys, hydrate: qn, createApp: tc(Ys, qn) };
}
function ts({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function ct({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function qi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Gi(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (B(s) && B(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = et(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && Gi(o, l)),
        l.type === bt && (l.el = o.el);
    }
}
function ac(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l);
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
function Xi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function ar(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const dc = Symbol.for('v-scx'),
  hc = () => yt(dc);
function Yi(e, t) {
  return Wn(e, null, t);
}
function _u(e, t) {
  return Wn(e, null, { flush: 'post' });
}
function Le(e, t, n) {
  return Wn(e, t, n);
}
function Wn(e, t, n = ne) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ae({}, n),
    c = (t && s) || (!t && i !== 'post');
  let u;
  if (zt) {
    if (i === 'sync') {
      const b = hc();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {};
      return (b.stop = We), (b.resume = We), (b.pause = We), b;
    }
  }
  const f = ue;
  l.call = (b, A, P) => De(b, f, A, P);
  let h = !1;
  i === 'post'
    ? (l.scheduler = (b) => {
        Ae(b, f && f.suspense);
      })
    : i !== 'sync' &&
      ((h = !0),
      (l.scheduler = (b, A) => {
        A ? b() : Ws(b);
      })),
    (l.augmentJob = (b) => {
      t && (b.flags |= 4), h && ((b.flags |= 2), f && ((b.id = f.uid), (b.i = f)));
    });
  const y = Tl(e, t, l);
  return zt && (u ? u.push(y) : c && y()), y;
}
function pc(e, t, n) {
  const s = this.proxy,
    r = oe(e) ? (e.includes('.') ? zi(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  G(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = tn(this),
    l = Wn(r, i.bind(s), n);
  return o(), l;
}
function zi(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
const gc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${rt(t)}Modifiers`];
function mc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ne;
  let r = n;
  const i = t.startsWith('update:'),
    o = i && gc(s, t.slice(7));
  o && (o.trim && (r = n.map((f) => (oe(f) ? f.trim() : f))), o.number && (r = n.map(Ho)));
  let l,
    c = s[(l = mn(t))] || s[(l = mn(Ne(t)))];
  !c && i && (c = s[(l = mn(rt(t)))]), c && De(c, e, 6, r);
  const u = s[l + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), De(u, e, 6, r);
  }
}
function Ji(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!G(e)) {
    const c = (u) => {
      const f = Ji(u, t, !0);
      f && ((l = !0), ae(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (se(e) && s.set(e, null), null)
    : (B(i) ? i.forEach((c) => (o[c] = null)) : ae(o, i), se(e) && s.set(e, o), o);
}
function Un(e, t) {
  return !e || !Qt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, rt(t)) || Q(e, t));
}
function ns(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: u,
      renderCache: f,
      props: h,
      data: y,
      setupState: b,
      ctx: A,
      inheritAttrs: P
    } = e,
    K = En(e);
  let H, k;
  try {
    if (n.shapeFlag & 4) {
      const g = r || s,
        M = g;
      (H = Ie(u.call(M, g, f, h, b, y, A))), (k = l);
    } else {
      const g = t;
      (H = Ie(g.length > 1 ? g(h, { attrs: l, slots: o, emit: c }) : g(h, null))),
        (k = t.props ? l : yc(l));
    }
  } catch (g) {
    (kt.length = 0), Dn(g, e, 1), (H = he(_e));
  }
  let p = H;
  if (k && P !== !1) {
    const g = Object.keys(k),
      { shapeFlag: M } = p;
    g.length && M & 7 && (i && g.some(Is) && (k = bc(k, i)), (p = st(p, k, !1, !0)));
  }
  return (
    n.dirs && ((p = st(p, null, !1, !0)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && qt(p, n.transition),
    (H = p),
    En(K),
    H
  );
}
const yc = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || Qt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  bc = (e, t) => {
    const n = {};
    for (const s in e) (!Is(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function _c(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? dr(s, o, u) : !!o;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const y = f[h];
        if (o[y] !== s[y] && !Un(u, y)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? dr(s, o, u) : !0) : !!o;
  return !1;
}
function dr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !Un(n, i)) return !0;
  }
  return !1;
}
function Qi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Zi = (e) => e.__isSuspense;
function eo(e, t) {
  t && t.pendingBranch ? (B(e) ? t.effects.push(...e) : t.effects.push(e)) : Al(e);
}
const xe = Symbol.for('v-fgt'),
  bt = Symbol.for('v-txt'),
  _e = Symbol.for('v-cmt'),
  Vt = Symbol.for('v-stc'),
  kt = [];
let Re = null;
function Es(e = !1) {
  kt.push((Re = e ? null : []));
}
function vc() {
  kt.pop(), (Re = kt[kt.length - 1] || null);
}
let Xt = 1;
function hr(e, t = !1) {
  (Xt += e), e < 0 && Re && t && (Re.hasOnce = !0);
}
function to(e) {
  return (e.dynamicChildren = Xt > 0 ? Re || Ct : null), vc(), Xt > 0 && Re && Re.push(e), e;
}
function vu(e, t, n, s, r, i) {
  return to(so(e, t, n, s, r, i, !0));
}
function Cs(e, t, n, s, r) {
  return to(he(e, t, n, s, r, !0));
}
function Yt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const no = ({ key: e }) => e ?? null,
  bn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (oe(e) || fe(e) || G(e) ? { i: de, r: e, k: t, f: !!n } : e) : null
  );
function so(e, t = null, n = null, s = 0, r = null, i = e === xe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && no(t),
    ref: t && bn(t),
    scopeId: yi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return (
    l ? (Bs(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16),
    Xt > 0 && !o && Re && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Re.push(c),
    c
  );
}
const he = wc;
function wc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Oi) && (e = _e), Yt(e))) {
    const l = st(e, t, !0);
    return (
      n && Bs(l, n),
      Xt > 0 && !i && Re && (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Ic(e) && (e = e.__vccOpts), t)) {
    t = Sc(t);
    let { class: l, style: c } = t;
    l && !oe(l) && (t.class = Ln(l)),
      se(c) && (js(c) && !B(c) && (c = ae({}, c)), (t.style = Pn(c)));
  }
  const o = oe(e) ? 1 : Zi(e) ? 128 : bi(e) ? 64 : se(e) ? 4 : G(e) ? 2 : 0;
  return so(e, t, n, s, r, o, i, !0);
}
function Sc(e) {
  return e ? (js(e) || $i(e) ? ae({}, e) : e) : null;
}
function st(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    u = t ? xc(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && no(u),
      ref: t && t.ref ? (n && i ? (B(i) ? i.concat(bn(t)) : [i, bn(t)]) : bn(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== xe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && st(e.ssContent),
      ssFallback: e.ssFallback && st(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
  return c && s && qt(f, c.clone(f)), f;
}
function ro(e = ' ', t = 0) {
  return he(bt, null, e, t);
}
function wu(e, t) {
  const n = he(Vt, null, e);
  return (n.staticCount = t), n;
}
function Su(e = '', t = !1) {
  return t ? (Es(), Cs(_e, null, e)) : he(_e, null, e);
}
function Ie(e) {
  return e == null || typeof e == 'boolean'
    ? he(_e)
    : B(e)
      ? he(xe, null, e.slice())
      : Yt(e)
        ? et(e)
        : he(bt, null, String(e));
}
function et(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e);
}
function Bs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (B(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Bs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !$i(t)
        ? (t._ctx = de)
        : r === 3 && de && (de.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    G(t)
      ? ((t = { default: t, _ctx: de }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ro(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function xc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = Ln([t.class, s.class]));
      else if (r === 'style') t.style = Pn([t.style, s.style]);
      else if (Qt(r)) {
        const i = t[r],
          o = s[r];
        o && i !== o && !(B(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  De(e, t, 7, [n, s]);
}
const Tc = Ni();
let Ec = 0;
function Cc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Tc,
    i = {
      uid: Ec++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ko(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Vi(s, r),
      emitsOptions: Ji(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: s.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return (
    (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = mc.bind(null, i)), e.ce && e.ce(i), i
  );
}
let ue = null;
const en = () => ue || de;
let An, As;
{
  const e = In(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (An = t('__VUE_INSTANCE_SETTERS__', (n) => (ue = n))),
    (As = t('__VUE_SSR_SETTERS__', (n) => (zt = n)));
}
const tn = (e) => {
    const t = ue;
    return (
      An(e),
      e.scope.on(),
      () => {
        e.scope.off(), An(t);
      }
    );
  },
  pr = () => {
    ue && ue.scope.off(), An(null);
  };
function io(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function Ac(e, t = !1, n = !1) {
  t && As(t);
  const { props: s, children: r } = e.vnode,
    i = io(e);
  sc(e, s, i, t), lc(e, r, n);
  const o = i ? Rc(e, t) : void 0;
  return t && As(!1), o;
}
function Rc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Gl));
  const { setup: s } = n;
  if (s) {
    it();
    const r = (e.setupContext = s.length > 1 ? lo(e) : null),
      i = tn(e),
      o = Zt(s, e, 0, [e.props, r]),
      l = Br(o);
    if ((ot(), i(), (l || e.sp) && !gt(e) && Ei(e), l)) {
      if ((o.then(pr, pr), t))
        return o
          .then((c) => {
            gr(e, c);
          })
          .catch((c) => {
            Dn(c, e, 0);
          });
      e.asyncDep = o;
    } else gr(e, o);
  } else oo(e);
}
function gr(e, t, n) {
  G(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = hi(t)),
    oo(e);
}
function oo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || We);
  {
    const r = tn(e);
    it();
    try {
      Yl(e);
    } finally {
      ot(), r();
    }
  }
}
const Oc = {
  get(e, t) {
    return ye(e, 'get', ''), e[t];
  }
};
function lo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Oc), slots: e.slots, emit: e.emit, expose: t };
}
function Ks(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(hi(yn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in jt) return jt[n](e);
          },
          has(t, n) {
            return n in t || n in jt;
          }
        }))
    : e.proxy;
}
function Mc(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ic(e) {
  return G(e) && '__vccOpts' in e;
}
const ie = (e, t) => Sl(e, t, zt);
function Rs(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? se(t) && !B(t)
      ? Yt(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && Yt(n) && (n = [n]),
      he(e, t, n));
}
const Pc = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Os;
const mr = typeof window < 'u' && window.trustedTypes;
if (mr)
  try {
    Os = mr.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const co = Os ? (e) => Os.createHTML(e) : (e) => e,
  Lc = 'http://www.w3.org/2000/svg',
  Nc = 'http://www.w3.org/1998/Math/MathML',
  Ke = typeof document < 'u' ? document : null,
  yr = Ke && Ke.createElement('template'),
  Fc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Ke.createElementNS(Lc, e)
          : t === 'mathml'
            ? Ke.createElementNS(Nc, e)
            : n
              ? Ke.createElement(e, { is: n })
              : Ke.createElement(e);
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r;
    },
    createText: (e) => Ke.createTextNode(e),
    createComment: (e) => Ke.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ke.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        yr.innerHTML = co(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        );
        const l = yr.content;
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    }
  },
  Je = 'transition',
  Ft = 'animation',
  Jt = Symbol('_vtc'),
  fo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Hc = ae({}, _i, fo),
  Dc = (e) => ((e.displayName = 'Transition'), (e.props = Hc), e),
  xu = Dc((e, { slots: t }) => Rs(Pl, $c(e), t)),
  ft = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  br = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function $c(e) {
  const t = {};
  for (const _ in e) _ in fo || (t[_] = e[_]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: f = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: b = `${n}-leave-to`
    } = e,
    A = jc(r),
    P = A && A[0],
    K = A && A[1],
    {
      onBeforeEnter: H,
      onEnter: k,
      onEnterCancelled: p,
      onLeave: g,
      onLeaveCancelled: M,
      onBeforeAppear: V = H,
      onAppear: R = k,
      onAppearCancelled: W = p
    } = t,
    T = (_, N, Y, re) => {
      (_._enterCancelled = re), ut(_, N ? f : l), ut(_, N ? u : o), Y && Y();
    },
    I = (_, N) => {
      (_._isLeaving = !1), ut(_, h), ut(_, b), ut(_, y), N && N();
    },
    E = (_) => (N, Y) => {
      const re = _ ? R : k,
        $ = () => T(N, _, Y);
      ft(re, [N, $]),
        _r(() => {
          ut(N, _ ? c : i), Be(N, _ ? f : l), br(re) || vr(N, s, P, $);
        });
    };
  return ae(t, {
    onBeforeEnter(_) {
      ft(H, [_]), Be(_, i), Be(_, o);
    },
    onBeforeAppear(_) {
      ft(V, [_]), Be(_, c), Be(_, u);
    },
    onEnter: E(!1),
    onAppear: E(!0),
    onLeave(_, N) {
      _._isLeaving = !0;
      const Y = () => I(_, N);
      Be(_, h),
        _._enterCancelled ? (Be(_, y), xr()) : (xr(), Be(_, y)),
        _r(() => {
          _._isLeaving && (ut(_, h), Be(_, b), br(g) || vr(_, s, K, Y));
        }),
        ft(g, [_, Y]);
    },
    onEnterCancelled(_) {
      T(_, !1, void 0, !0), ft(p, [_]);
    },
    onAppearCancelled(_) {
      T(_, !0, void 0, !0), ft(W, [_]);
    },
    onLeaveCancelled(_) {
      I(_), ft(M, [_]);
    }
  });
}
function jc(e) {
  if (e == null) return null;
  if (se(e)) return [ss(e.enter), ss(e.leave)];
  {
    const t = ss(e);
    return [t, t];
  }
}
function ss(e) {
  return Do(e);
}
function Be(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jt] || (e[Jt] = new Set())).add(t);
}
function ut(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Jt];
  n && (n.delete(t), n.size || (e[Jt] = void 0));
}
function _r(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vc = 0;
function vr(e, t, n, s) {
  const r = (e._endId = ++Vc),
    i = () => {
      r === e._endId && s();
    };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = kc(e, t);
  if (!o) return s();
  const u = o + 'end';
  let f = 0;
  const h = () => {
      e.removeEventListener(u, y), i();
    },
    y = (b) => {
      b.target === e && ++f >= c && h();
    };
  setTimeout(() => {
    f < c && h();
  }, l + 1),
    e.addEventListener(u, y);
}
function kc(e, t) {
  const n = window.getComputedStyle(e),
    s = (A) => (n[A] || '').split(', '),
    r = s(`${Je}Delay`),
    i = s(`${Je}Duration`),
    o = wr(r, i),
    l = s(`${Ft}Delay`),
    c = s(`${Ft}Duration`),
    u = wr(l, c);
  let f = null,
    h = 0,
    y = 0;
  t === Je
    ? o > 0 && ((f = Je), (h = o), (y = i.length))
    : t === Ft
      ? u > 0 && ((f = Ft), (h = u), (y = c.length))
      : ((h = Math.max(o, u)),
        (f = h > 0 ? (o > u ? Je : Ft) : null),
        (y = f ? (f === Je ? i.length : c.length) : 0));
  const b = f === Je && /\b(transform|all)(,|$)/.test(s(`${Je}Property`).toString());
  return { type: f, timeout: h, propCount: y, hasTransform: b };
}
function wr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Sr(n) + Sr(e[s])));
}
function Sr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function xr() {
  return document.body.offsetHeight;
}
function Wc(e, t, n) {
  const s = e[Jt];
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const Tr = Symbol('_vod'),
  Uc = Symbol('_vsh'),
  Bc = Symbol(''),
  Kc = /(^|;)\s*display\s*:/;
function qc(e, t, n) {
  const s = e.style,
    r = oe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim();
          n[l] == null && _n(s, l, '');
        }
      else for (const o in t) n[o] == null && _n(s, o, '');
    for (const o in n) o === 'display' && (i = !0), _n(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Bc];
      o && (n += ';' + o), (s.cssText = n), (i = Kc.test(n));
    }
  } else t && e.removeAttribute('style');
  Tr in e && ((e[Tr] = i ? s.display : ''), e[Uc] && (s.display = 'none'));
}
const Er = /\s*!important$/;
function _n(e, t, n) {
  if (B(n)) n.forEach((s) => _n(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = Gc(e, t);
    Er.test(n) ? e.setProperty(rt(s), n.replace(Er, ''), 'important') : (e[s] = n);
  }
}
const Cr = ['Webkit', 'Moz', 'ms'],
  rs = {};
function Gc(e, t) {
  const n = rs[t];
  if (n) return n;
  let s = Ne(t);
  if (s !== 'filter' && s in e) return (rs[t] = s);
  s = Mn(s);
  for (let r = 0; r < Cr.length; r++) {
    const i = Cr[r] + s;
    if (i in e) return (rs[t] = i);
  }
  return t;
}
const Ar = 'http://www.w3.org/1999/xlink';
function Rr(e, t, n, s, r, i = Uo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Ar, t.slice(6, t.length))
      : e.setAttributeNS(Ar, t, n)
    : n == null || (i && !Xr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : Ye(n) ? String(n) : n);
}
function Or(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? co(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === '' || n == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (n = Xr(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(r || t);
}
function Xc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Mr = Symbol('_vei');
function zc(e, t, n, s, r = null) {
  const i = e[Mr] || (e[Mr] = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, c] = Jc(t);
    if (s) {
      const u = (i[t] = ef(s, r));
      Xc(e, l, u, c);
    } else o && (Yc(e, l, o, c), (i[t] = void 0));
  }
}
const Ir = /(?:Once|Passive|Capture)$/;
function Jc(e) {
  let t;
  if (Ir.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ir)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : rt(e.slice(2)), t];
}
let is = 0;
const Qc = Promise.resolve(),
  Zc = () => is || (Qc.then(() => (is = 0)), (is = Date.now()));
function ef(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    De(tf(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Zc()), n;
}
function tf(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Pr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  nf = (e, t, n, s, r, i) => {
    const o = r === 'svg';
    t === 'class'
      ? Wc(e, s, o)
      : t === 'style'
        ? qc(e, n, s)
        : Qt(t)
          ? Is(t) || zc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : sf(e, t, s, o)
              )
            ? (Or(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Rr(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !oe(s))
              ? Or(e, Ne(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Rr(e, t, s, o));
  };
function sf(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Pr(t) && G(n)));
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const r = e.tagName;
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1;
  }
  return Pr(t) && oe(n) ? !1 : t in e;
}
const rf = ['ctrl', 'shift', 'alt', 'meta'],
  of = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => rf.some((n) => e[`${n}Key`] && !t.includes(n))
  },
  Tu = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.');
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = of[t[o]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  lf = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Eu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.');
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return;
        const i = rt(r.key);
        if (t.some((o) => o === i || lf[o] === i)) return e(r);
      })
    );
  },
  uo = ae({ patchProp: nf }, Fc);
let Wt,
  Lr = !1;
function cf() {
  return Wt || (Wt = fc(uo));
}
function ff() {
  return (Wt = Lr ? Wt : uc(uo)), (Lr = !0), Wt;
}
const Cu = (...e) => {
    const t = cf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const r = ho(s);
        if (!r) return;
        const i = t._component;
        !G(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = '');
        const o = n(r, !1, ao(r));
        return (
          r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          o
        );
      }),
      t
    );
  },
  Au = (...e) => {
    const t = ff().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (s) => {
        const r = ho(s);
        if (r) return n(r, !0, ao(r));
      }),
      t
    );
  };
function ao(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function ho(e) {
  return oe(e) ? document.querySelector(e) : e;
}
const uf = window.__VP_SITE_DATA__;
function po(e) {
  return Jr() ? (qo(e), !0) : !1;
}
const os = new WeakMap(),
  af = (...e) => {
    var t;
    const n = e[0],
      s = (t = en()) == null ? void 0 : t.proxy;
    if (s == null && !Fi()) throw new Error('injectLocal must be called in setup');
    return s && os.has(s) && n in os.get(s) ? os.get(s)[n] : yt(...e);
  },
  go = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const df = Object.prototype.toString,
  hf = (e) => df.call(e) === '[object Object]',
  wt = () => {},
  Nr = pf();
function pf() {
  var e, t;
  return (
    go &&
    ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
  );
}
function qs(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }))
        .then(r)
        .catch(i);
    });
  }
  return n;
}
const mo = (e) => e();
function gf(e, t = {}) {
  let n,
    s,
    r = wt;
  const i = (c) => {
    clearTimeout(c), r(), (r = wt);
  };
  let o;
  return (c) => {
    const u = le(e),
      f = le(t.maxWait);
    return (
      n && i(n),
      u <= 0 || (f !== void 0 && f <= 0)
        ? (s && (i(s), (s = null)), Promise.resolve(c()))
        : new Promise((h, y) => {
            (r = t.rejectOnCancel ? y : h),
              (o = c),
              f &&
                !s &&
                (s = setTimeout(() => {
                  n && i(n), (s = null), h(o());
                }, f)),
              (n = setTimeout(() => {
                s && i(s), (s = null), h(c());
              }, u));
          })
    );
  };
}
function mf(...e) {
  let t = 0,
    n,
    s = !0,
    r = wt,
    i,
    o,
    l,
    c,
    u;
  !fe(e[0]) && typeof e[0] == 'object'
    ? ({ delay: o, trailing: l = !0, leading: c = !0, rejectOnCancel: u = !1 } = e[0])
    : ([o, l = !0, c = !0, u = !1] = e);
  const f = () => {
    n && (clearTimeout(n), (n = void 0), r(), (r = wt));
  };
  return (y) => {
    const b = le(o),
      A = Date.now() - t,
      P = () => (i = y());
    return (
      f(),
      b <= 0
        ? ((t = Date.now()), P())
        : (A > b && (c || !s)
            ? ((t = Date.now()), P())
            : l &&
              (i = new Promise((K, H) => {
                (r = u ? H : K),
                  (n = setTimeout(
                    () => {
                      (t = Date.now()), (s = !0), K(P()), f();
                    },
                    Math.max(0, b - A)
                  ));
              })),
          !c && !n && (n = setTimeout(() => (s = !0), b)),
          (s = !1),
          i)
    );
  };
}
function yf(e = mo) {
  const t = pe(!0);
  function n() {
    t.value = !1;
  }
  function s() {
    t.value = !0;
  }
  const r = (...i) => {
    t.value && e(...i);
  };
  return { isActive: Hn(t), pause: n, resume: s, eventFilter: r };
}
function Fr(e) {
  return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function bf(e) {
  return en();
}
function ls(e) {
  return Array.isArray(e) ? e : [e];
}
function yo(...e) {
  if (e.length !== 1) return _l(...e);
  const t = e[0];
  return typeof t == 'function' ? Hn(ml(() => ({ get: t, set: wt }))) : pe(t);
}
function _f(e, t = 200, n = {}) {
  return qs(gf(t, n), e);
}
function vf(e, t = 200, n = !1, s = !0, r = !1) {
  return qs(mf(t, n, s, r), e);
}
function wf(e, t, n = {}) {
  const { eventFilter: s = mo, ...r } = n;
  return Le(e, qs(s, t), r);
}
function Sf(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = yf(s);
  return { stop: wf(e, t, { ...r, eventFilter: i }), pause: o, resume: l, isActive: c };
}
function Bn(e, t = !0, n) {
  bf() ? It(e, n) : t ? e() : $n(e);
}
function xf(e, t, n) {
  return Le(e, t, { ...n, immediate: !0 });
}
const Ge = go ? window : void 0;
function Gs(e) {
  var t;
  const n = le(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Xe(...e) {
  const t = [],
    n = () => {
      t.forEach((l) => l()), (t.length = 0);
    },
    s = (l, c, u, f) => (l.addEventListener(c, u, f), () => l.removeEventListener(c, u, f)),
    r = ie(() => {
      const l = ls(le(e[0])).filter((c) => c != null);
      return l.every((c) => typeof c != 'string') ? l : void 0;
    }),
    i = xf(
      () => {
        var l, c;
        return [
          (c = (l = r.value) == null ? void 0 : l.map((u) => Gs(u))) != null
            ? c
            : [Ge].filter((u) => u != null),
          ls(le(r.value ? e[1] : e[0])),
          ls(ks(r.value ? e[2] : e[1])),
          le(r.value ? e[3] : e[2])
        ];
      },
      ([l, c, u, f]) => {
        if ((n(), !(l != null && l.length) || !(c != null && c.length) || !(u != null && u.length)))
          return;
        const h = hf(f) ? { ...f } : f;
        t.push(...l.flatMap((y) => c.flatMap((b) => u.map((A) => s(y, b, A, h)))));
      },
      { flush: 'post' }
    ),
    o = () => {
      i(), n();
    };
  return po(n), o;
}
function Tf() {
  const e = pe(!1),
    t = en();
  return (
    t &&
      It(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Ef(e) {
  const t = Tf();
  return ie(() => (t.value, !!e()));
}
function Cf(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0;
}
function Ru(...e) {
  let t,
    n,
    s = {};
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]));
  const { target: r = Ge, eventName: i = 'keydown', passive: o = !1, dedupe: l = !1 } = s,
    c = Cf(t);
  return Xe(
    r,
    i,
    (f) => {
      (f.repeat && le(l)) || (c(f) && n(f));
    },
    o
  );
}
const Af = Symbol('vueuse-ssr-width');
function Rf() {
  const e = Fi() ? af(Af, null) : null;
  return typeof e == 'number' ? e : void 0;
}
function bo(e, t = {}) {
  const { window: n = Ge, ssrWidth: s = Rf() } = t,
    r = Ef(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function'),
    i = pe(typeof s == 'number'),
    o = Vs(),
    l = pe(!1),
    c = (u) => {
      l.value = u.matches;
    };
  return (
    Yi(() => {
      if (i.value) {
        i.value = !r.value;
        const u = le(e).split(',');
        l.value = u.some((f) => {
          const h = f.includes('not all'),
            y = f.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            b = f.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let A = !!(y || b);
          return y && A && (A = s >= Fr(y[1])), b && A && (A = s <= Fr(b[1])), h ? !A : A;
        });
        return;
      }
      r.value && ((o.value = n.matchMedia(le(e))), (l.value = o.value.matches));
    }),
    Xe(o, 'change', c, { passive: !0 }),
    ie(() => l.value)
  );
}
const dn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  hn = '__vueuse_ssr_handlers__',
  Of = Mf();
function Mf() {
  return hn in dn || (dn[hn] = dn[hn] || {}), dn[hn];
}
function _o(e, t) {
  return Of[e] || t;
}
function vo(e) {
  return bo('(prefers-color-scheme: dark)', e);
}
function If(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number';
}
const Pf = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries()))
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() }
  },
  Hr = 'vueuse-storage';
function Lf(e, t, n, s = {}) {
  var r;
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: f,
      window: h = Ge,
      eventFilter: y,
      onError: b = (E) => {
        console.error(E);
      },
      initOnMounted: A
    } = s,
    P = (f ? Vs : pe)(typeof t == 'function' ? t() : t),
    K = ie(() => le(e));
  if (!n)
    try {
      n = _o('getDefaultStorage', () => {
        var E;
        return (E = Ge) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      b(E);
    }
  if (!n) return P;
  const H = le(t),
    k = If(H),
    p = (r = s.serializer) != null ? r : Pf[k],
    { pause: g, resume: M } = Sf(P, () => R(P.value), { flush: i, deep: o, eventFilter: y });
  Le(K, () => T(), { flush: i }),
    h &&
      l &&
      Bn(() => {
        n instanceof Storage ? Xe(h, 'storage', T, { passive: !0 }) : Xe(h, Hr, I), A && T();
      }),
    A || T();
  function V(E, _) {
    if (h) {
      const N = { key: K.value, oldValue: E, newValue: _, storageArea: n };
      h.dispatchEvent(
        n instanceof Storage ? new StorageEvent('storage', N) : new CustomEvent(Hr, { detail: N })
      );
    }
  }
  function R(E) {
    try {
      const _ = n.getItem(K.value);
      if (E == null) V(_, null), n.removeItem(K.value);
      else {
        const N = p.write(E);
        _ !== N && (n.setItem(K.value, N), V(_, N));
      }
    } catch (_) {
      b(_);
    }
  }
  function W(E) {
    const _ = E ? E.newValue : n.getItem(K.value);
    if (_ == null) return c && H != null && n.setItem(K.value, p.write(H)), H;
    if (!E && u) {
      const N = p.read(_);
      return typeof u == 'function'
        ? u(N, H)
        : k === 'object' && !Array.isArray(N)
          ? { ...H, ...N }
          : N;
    } else return typeof _ != 'string' ? _ : p.read(_);
  }
  function T(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key == null) {
        P.value = H;
        return;
      }
      if (!(E && E.key !== K.value)) {
        g();
        try {
          (E == null ? void 0 : E.newValue) !== p.write(P.value) && (P.value = W(E));
        } catch (_) {
          b(_);
        } finally {
          E ? $n(M) : M();
        }
      }
    }
  }
  function I(E) {
    T(E.detail);
  }
  return P;
}
const Nf =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function Ff(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Ge,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: f = !0
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    y = vo({ window: r }),
    b = ie(() => (y.value ? 'dark' : 'light')),
    A = c || (o == null ? yo(s) : Lf(o, s, i, { window: r, listenToStorageChanges: l })),
    P = ie(() => (A.value === 'auto' ? b.value : A.value)),
    K = _o('updateHTMLAttrs', (g, M, V) => {
      const R = typeof g == 'string' ? (r == null ? void 0 : r.document.querySelector(g)) : Gs(g);
      if (!R) return;
      const W = new Set(),
        T = new Set();
      let I = null;
      if (M === 'class') {
        const _ = V.split(/\s/g);
        Object.values(h)
          .flatMap((N) => (N || '').split(/\s/g))
          .filter(Boolean)
          .forEach((N) => {
            _.includes(N) ? W.add(N) : T.add(N);
          });
      } else I = { key: M, value: V };
      if (W.size === 0 && T.size === 0 && I === null) return;
      let E;
      f &&
        ((E = r.document.createElement('style')),
        E.appendChild(document.createTextNode(Nf)),
        r.document.head.appendChild(E));
      for (const _ of W) R.classList.add(_);
      for (const _ of T) R.classList.remove(_);
      I && R.setAttribute(I.key, I.value),
        f && (r.getComputedStyle(E).opacity, document.head.removeChild(E));
    });
  function H(g) {
    var M;
    K(t, n, (M = h[g]) != null ? M : g);
  }
  function k(g) {
    e.onChanged ? e.onChanged(g, H) : H(g);
  }
  Le(P, k, { flush: 'post', immediate: !0 }), Bn(() => k(P.value));
  const p = ie({
    get() {
      return u ? A.value : P.value;
    },
    set(g) {
      A.value = g;
    }
  });
  return Object.assign(p, { store: A, system: b, state: P });
}
function Hf(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    s = Ff({
      ...e,
      onChanged: (o, l) => {
        var c;
        e.onChanged ? (c = e.onChanged) == null || c.call(e, o === 'dark', l, o) : l(o);
      },
      modes: { dark: t, light: n }
    }),
    r = ie(() => s.system.value);
  return ie({
    get() {
      return s.value === 'dark';
    },
    set(o) {
      const l = o ? 'dark' : 'light';
      r.value === l ? (s.value = 'auto') : (s.value = l);
    }
  });
}
function cs(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e;
}
const Dr = 1;
function Df(e, t = {}) {
  const {
      throttle: n = 0,
      idle: s = 200,
      onStop: r = wt,
      onScroll: i = wt,
      offset: o = { left: 0, right: 0, top: 0, bottom: 0 },
      eventListenerOptions: l = { capture: !1, passive: !0 },
      behavior: c = 'auto',
      window: u = Ge,
      onError: f = (R) => {
        console.error(R);
      }
    } = t,
    h = pe(0),
    y = pe(0),
    b = ie({
      get() {
        return h.value;
      },
      set(R) {
        P(R, void 0);
      }
    }),
    A = ie({
      get() {
        return y.value;
      },
      set(R) {
        P(void 0, R);
      }
    });
  function P(R, W) {
    var T, I, E, _;
    if (!u) return;
    const N = le(e);
    if (!N) return;
    (E = N instanceof Document ? u.document.body : N) == null ||
      E.scrollTo({
        top: (T = le(W)) != null ? T : A.value,
        left: (I = le(R)) != null ? I : b.value,
        behavior: le(c)
      });
    const Y =
      ((_ = N == null ? void 0 : N.document) == null ? void 0 : _.documentElement) ||
      (N == null ? void 0 : N.documentElement) ||
      N;
    b != null && (h.value = Y.scrollLeft), A != null && (y.value = Y.scrollTop);
  }
  const K = pe(!1),
    H = Mt({ left: !0, right: !1, top: !0, bottom: !1 }),
    k = Mt({ left: !1, right: !1, top: !1, bottom: !1 }),
    p = (R) => {
      K.value &&
        ((K.value = !1), (k.left = !1), (k.right = !1), (k.top = !1), (k.bottom = !1), r(R));
    },
    g = _f(p, n + s),
    M = (R) => {
      var W;
      if (!u) return;
      const T =
          ((W = R == null ? void 0 : R.document) == null ? void 0 : W.documentElement) ||
          (R == null ? void 0 : R.documentElement) ||
          Gs(R),
        { display: I, flexDirection: E, direction: _ } = getComputedStyle(T),
        N = _ === 'rtl' ? -1 : 1,
        Y = T.scrollLeft;
      (k.left = Y < h.value), (k.right = Y > h.value);
      const re = Y * N <= (o.left || 0),
        $ = Y * N + T.clientWidth >= T.scrollWidth - (o.right || 0) - Dr;
      I === 'flex' && E === 'row-reverse'
        ? ((H.left = $), (H.right = re))
        : ((H.left = re), (H.right = $)),
        (h.value = Y);
      let X = T.scrollTop;
      R === u.document && !X && (X = u.document.body.scrollTop),
        (k.top = X < y.value),
        (k.bottom = X > y.value);
      const D = X <= (o.top || 0),
        ce = X + T.clientHeight >= T.scrollHeight - (o.bottom || 0) - Dr;
      I === 'flex' && E === 'column-reverse'
        ? ((H.top = ce), (H.bottom = D))
        : ((H.top = D), (H.bottom = ce)),
        (y.value = X);
    },
    V = (R) => {
      var W;
      if (!u) return;
      const T = (W = R.target.documentElement) != null ? W : R.target;
      M(T), (K.value = !0), g(R), i(R);
    };
  return (
    Xe(e, 'scroll', n ? vf(V, n, !0, !1) : V, l),
    Bn(() => {
      try {
        const R = le(e);
        if (!R) return;
        M(R);
      } catch (R) {
        f(R);
      }
    }),
    Xe(e, 'scrollend', p, l),
    {
      x: b,
      y: A,
      isScrolling: K,
      arrivedState: H,
      directions: k,
      measure() {
        const R = le(e);
        u && R && M(R);
      }
    }
  );
}
function wo(e) {
  const t = window.getComputedStyle(e);
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === 'BODY' ? !1 : wo(n);
  }
}
function $f(e) {
  const t = e || window.event,
    n = t.target;
  return wo(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const fs = new WeakMap();
function Ou(e, t = !1) {
  const n = pe(t);
  let s = null,
    r = '';
  Le(
    yo(e),
    (l) => {
      const c = cs(le(l));
      if (c) {
        const u = c;
        if (
          (fs.get(u) || fs.set(u, u.style.overflow),
          u.style.overflow !== 'hidden' && (r = u.style.overflow),
          u.style.overflow === 'hidden')
        )
          return (n.value = !0);
        if (n.value) return (u.style.overflow = 'hidden');
      }
    },
    { immediate: !0 }
  );
  const i = () => {
      const l = cs(le(e));
      !l ||
        n.value ||
        (Nr &&
          (s = Xe(
            l,
            'touchmove',
            (c) => {
              $f(c);
            },
            { passive: !1 }
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0));
    },
    o = () => {
      const l = cs(le(e));
      !l ||
        !n.value ||
        (Nr && (s == null || s()), (l.style.overflow = r), fs.delete(l), (n.value = !1));
    };
  return (
    po(o),
    ie({
      get() {
        return n.value;
      },
      set(l) {
        l ? i() : o();
      }
    })
  );
}
function Mu(e = {}) {
  const { window: t = Ge, ...n } = e;
  return Df(t, n);
}
function Iu(e = {}) {
  const {
      window: t = Ge,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: i = !0,
      type: o = 'inner'
    } = e,
    l = pe(n),
    c = pe(s),
    u = () => {
      if (t)
        if (o === 'outer') (l.value = t.outerWidth), (c.value = t.outerHeight);
        else if (o === 'visual' && t.visualViewport) {
          const { width: h, height: y, scale: b } = t.visualViewport;
          (l.value = Math.round(h * b)), (c.value = Math.round(y * b));
        } else
          i
            ? ((l.value = t.innerWidth), (c.value = t.innerHeight))
            : ((l.value = t.document.documentElement.clientWidth),
              (c.value = t.document.documentElement.clientHeight));
    };
  u(), Bn(u);
  const f = { passive: !0 };
  if (
    (Xe('resize', u, f),
    t && o === 'visual' && t.visualViewport && Xe(t.visualViewport, 'resize', u, f),
    r)
  ) {
    const h = bo('(orientation: portrait)');
    Le(h, () => u());
  }
  return { width: l, height: c };
}
const us = { BASE_URL: '/', DEV: !1, MODE: 'production', PROD: !0, SSR: !1 };
var as = {};
const So = /^(?:[a-z]+:|\/\/)/i,
  jf = 'vitepress-theme-appearance',
  Vf = /#.*$/,
  kf = /[?#].*$/,
  Wf = /(?:(^|\/)index)?\.(?:md|html)$/,
  me = typeof document < 'u',
  xo = {
    relativePath: '404.md',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0
  };
function Uf(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = $r(`/${e}`)), n)) return new RegExp(t).test(e);
  if ($r(t) !== e) return !1;
  const s = t.match(Vf);
  return s ? (me ? location.hash : '') === s[0] : !0;
}
function $r(e) {
  return decodeURI(e).replace(kf, '').replace(Wf, '$1');
}
function Bf(e) {
  return So.test(e);
}
function Kf(e, t) {
  return (
    Object.keys((e == null ? void 0 : e.locales) || {}).find(
      (n) => n !== 'root' && !Bf(n) && Uf(t, `/${n}/`, !0)
    ) || 'root'
  );
}
function qf(e, t) {
  var s, r, i, o, l, c, u;
  const n = Kf(e, t);
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate: ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ?? e.titleTemplate,
    description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: Eo(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: { ...e.themeConfig, ...((u = e.locales[n]) == null ? void 0 : u.themeConfig) }
  });
}
function To(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == 'string' && s.includes(':title')) return s.replace(/:title/g, n);
  const r = Gf(e.title, s);
  return n === r.slice(3) ? n : `${n}${r}`;
}
function Gf(e, t) {
  return t === !1 ? '' : t === !0 || t === void 0 ? ` | ${e}` : e === t ? '' : ` | ${t}`;
}
function Xf(e, t) {
  const [n, s] = t;
  if (n !== 'meta') return !1;
  const r = Object.entries(s)[0];
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1]);
}
function Eo(e, t) {
  return [...e.filter((n) => !Xf(t, n)), ...t];
}
const Yf = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  zf = /^[a-z]:/i;
function jr(e) {
  const t = zf.exec(e),
    n = t ? t[0] : '';
  return (
    n +
    e
      .slice(n.length)
      .replace(Yf, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
const ds = new Set();
function Jf(e) {
  if (ds.size === 0) {
    const n =
      (typeof process == 'object' && (as == null ? void 0 : as.VITE_EXTRA_EXTENSIONS)) ||
      (us == null ? void 0 : us.VITE_EXTRA_EXTENSIONS) ||
      '';
    (
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => ds.add(s));
  }
  const t = e.split('.').pop();
  return t == null || !ds.has(t.toLowerCase());
}
const Qf = Symbol(),
  _t = Vs(uf);
function Pu(e) {
  const t = ie(() => qf(_t.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? pe(!0)
        : n === 'force-auto'
          ? vo()
          : n
            ? Hf({
                storageKey: jf,
                initialValue: () => (n === 'dark' ? 'dark' : 'auto'),
                ...(typeof n == 'object' ? n : {})
              })
            : pe(!1),
    r = pe(me ? location.hash : '');
  return (
    me &&
      window.addEventListener('hashchange', () => {
        r.value = location.hash;
      }),
    Le(
      () => e.data,
      () => {
        r.value = me ? location.hash : '';
      }
    ),
    {
      site: t,
      theme: ie(() => t.value.themeConfig),
      page: ie(() => e.data),
      frontmatter: ie(() => e.data.frontmatter),
      params: ie(() => e.data.params),
      lang: ie(() => t.value.lang),
      dir: ie(() => e.data.frontmatter.dir || t.value.dir),
      localeIndex: ie(() => t.value.localeIndex || 'root'),
      title: ie(() => To(t.value, e.data)),
      description: ie(() => e.data.description || t.value.description),
      isDark: s,
      hash: ie(() => r.value)
    }
  );
}
function Zf() {
  const e = yt(Qf);
  if (!e) throw new Error('vitepress data not properly injected in app');
  return e;
}
function eu(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/');
}
function Vr(e) {
  return So.test(e) || !e.startsWith('/') ? e : eu(_t.value.base, e);
}
function tu(e) {
  let t = e.replace(/\.html$/, '');
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), me)) {
    const n = '/';
    t = jr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md';
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    if (
      (s ||
        ((t = t.endsWith('_index.md') ? t.slice(0, -9) + '.md' : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null;
    t = `${n}assets/${t}.${s}.js`;
  } else t = `./${jr(t.slice(1).replace(/\//g, '_'))}.md.js`;
  return t;
}
let vn = [];
function Lu(e) {
  vn.push(e),
    kn(() => {
      vn = vn.filter((t) => t !== e);
    });
}
function nu() {
  let e = _t.value.scrollOffset,
    t = 0,
    n = 24;
  if (
    (typeof e == 'object' && 'padding' in e && ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e;
  else if (typeof e == 'string') t = kr(e, n);
  else if (Array.isArray(e))
    for (const s of e) {
      const r = kr(s, n);
      if (r) {
        t = r;
        break;
      }
    }
  return t;
}
function kr(e, t) {
  const n = document.querySelector(e);
  if (!n) return 0;
  const s = n.getBoundingClientRect().bottom;
  return s < 0 ? 0 : s + t;
}
const su = Symbol(),
  Co = 'http://a.com',
  ru = () => ({ path: '/', component: null, data: xo });
function Nu(e, t) {
  const n = Mt(ru()),
    s = { route: n, go: r };
  async function r(l = me ? location.href : '/') {
    var c, u;
    (l = hs(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !== !1 &&
        (me &&
          l !== hs(location.href) &&
          (history.replaceState({ scrollPosition: window.scrollY }, ''),
          history.pushState({}, '', l)),
        await o(l),
        await ((u = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null ? void 0 : u(l)));
  }
  let i = null;
  async function o(l, c = 0, u = !1) {
    var y, b;
    if ((await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l))) === !1) return;
    const f = new URL(l, Co),
      h = (i = f.pathname);
    try {
      let A = await e(h);
      if (!A) throw new Error(`Page not found: ${h}`);
      if (i === h) {
        i = null;
        const { default: P, __pageData: K } = A;
        if (!P) throw new Error(`Invalid route component: ${P}`);
        await ((b = s.onAfterPageLoad) == null ? void 0 : b.call(s, l)),
          (n.path = me ? h : Vr(h)),
          (n.component = yn(P)),
          (n.data = yn(K)),
          me &&
            $n(() => {
              let H = _t.value.base + K.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1');
              if (
                (!_t.value.cleanUrls && !H.endsWith('/') && (H += '.html'),
                H !== f.pathname &&
                  ((f.pathname = H), (l = H + f.search + f.hash), history.replaceState({}, '', l)),
                f.hash && !c)
              ) {
                let k = null;
                try {
                  k = document.getElementById(decodeURIComponent(f.hash).slice(1));
                } catch (p) {
                  console.warn(p);
                }
                if (k) {
                  Wr(k, f.hash);
                  return;
                }
              }
              window.scrollTo(0, c);
            });
      }
    } catch (A) {
      if (
        (!/fetch|Page not found/.test(A.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(A),
        !u)
      )
        try {
          const P = await fetch(_t.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await P.json()), await o(l, c, !0);
          return;
        } catch {}
      if (i === h) {
        (i = null), (n.path = me ? h : Vr(h)), (n.component = t ? yn(t) : null);
        const P = me
          ? h
              .replace(/(^|\/)$/, '$1index')
              .replace(/(\.html)?$/, '.md')
              .replace(/^\//, '')
          : '404.md';
        n.data = { ...xo, relativePath: P };
      }
    }
  }
  return (
    me &&
      (history.state === null && history.replaceState({}, ''),
      window.addEventListener(
        'click',
        (l) => {
          if (
            l.defaultPrevented ||
            !(l.target instanceof Element) ||
            l.target.closest('button') ||
            l.button !== 0 ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            l.metaKey
          )
            return;
          const c = l.target.closest('a');
          if (!c || c.closest('.vp-raw') || c.hasAttribute('download') || c.hasAttribute('target'))
            return;
          const u =
            c.getAttribute('href') ??
            (c instanceof SVGAElement ? c.getAttribute('xlink:href') : null);
          if (u == null) return;
          const { href: f, origin: h, pathname: y, hash: b, search: A } = new URL(u, c.baseURI),
            P = new URL(location.href);
          h === P.origin &&
            Jf(y) &&
            (l.preventDefault(),
            y === P.pathname && A === P.search
              ? (b !== P.hash &&
                  (history.pushState({}, '', f),
                  window.dispatchEvent(
                    new HashChangeEvent('hashchange', { oldURL: P.href, newURL: f })
                  )),
                b ? Wr(c, b, c.classList.contains('header-anchor')) : window.scrollTo(0, 0))
              : r(f));
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', async (l) => {
        var u;
        if (l.state === null) return;
        const c = hs(location.href);
        await o(c, (l.state && l.state.scrollPosition) || 0),
          await ((u = s.onAfterRouteChange ?? s.onAfterRouteChanged) == null ? void 0 : u(c));
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault();
      })),
    s
  );
}
function iu() {
  const e = yt(su);
  if (!e) throw new Error('useRouter() is called without provider.');
  return e;
}
function Ao() {
  return iu().route;
}
function Wr(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1));
  } catch (r) {
    console.warn(r);
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' });
    };
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - nu() + i;
    requestAnimationFrame(r);
  }
}
function hs(e) {
  const t = new URL(e, Co);
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    _t.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') && !t.pathname.endsWith('.html') && (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  );
}
const pn = () => vn.forEach((e) => e()),
  Fu = Ti({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Ao(),
        { frontmatter: n, site: s } = Zf();
      return (
        Le(n, pn, { deep: !0, flush: 'post' }),
        () =>
          Rs(e.as, s.value.contentProps ?? { style: { position: 'relative' } }, [
            t.component
              ? Rs(t.component, { onVnodeMounted: pn, onVnodeUpdated: pn, onVnodeUnmounted: pn })
              : '404 Page Not Found'
          ])
      );
    }
  }),
  Hu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  Du = Ti({
    setup(e, { slots: t }) {
      const n = pe(!1);
      return (
        It(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    }
  });
function $u() {
  me &&
    window.addEventListener('click', (e) => {
      var n;
      const t = e.target;
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement;
        if (!s) return;
        const r = Array.from(s.querySelectorAll('input')).indexOf(t);
        if (r < 0) return;
        const i = s.querySelector('.blocks');
        if (!i) return;
        const o = Array.from(i.children).find((u) => u.classList.contains('active'));
        if (!o) return;
        const l = i.children[r];
        if (!l || o === l) return;
        o.classList.remove('active'), l.classList.add('active');
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`);
        c == null || c.scrollIntoView({ block: 'nearest' });
      }
    });
}
function ju() {
  if (me) {
    const e = new WeakMap();
    window.addEventListener('click', (t) => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!r || !i) return;
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0);
        c.querySelectorAll(l.join(',')).forEach((f) => f.remove());
        let u = c.textContent || '';
        o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          ou(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n));
            const f = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, f);
          });
      }
    });
  }
}
async function ou(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt');
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus();
  }
}
function Vu(e, t) {
  let n = !0,
    s = [];
  const r = (i) => {
    if (n) {
      (n = !1),
        i.forEach((l) => {
          const c = ps(l);
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u);
              return;
            }
        });
      return;
    }
    const o = i.map(ps);
    s.forEach((l, c) => {
      const u = o.findIndex((f) => (f == null ? void 0 : f.isEqualNode(l ?? null)));
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c]);
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean));
  };
  Yi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = To(o, i);
    u !== document.title && (document.title = u);
    const f = l || o.description;
    let h = document.querySelector('meta[name=description]');
    h
      ? h.getAttribute('content') !== f && h.setAttribute('content', f)
      : ps(['meta', { name: 'description', content: f }]),
      r(Eo(o.head, cu(c)));
  });
}
function ps([e, t, n]) {
  const s = document.createElement(e);
  for (const r in t) s.setAttribute(r, t[r]);
  return n && (s.innerHTML = n), e === 'script' && t.async == null && (s.async = !1), s;
}
function lu(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description';
}
function cu(e) {
  return e.filter((t) => !lu(t));
}
const gs = new Set(),
  Ro = () => document.createElement('link'),
  fu = (e) => {
    const t = Ro();
    (t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t);
  },
  uu = (e) => {
    const t = new XMLHttpRequest();
    t.open('GET', e, (t.withCredentials = !0)), t.send();
  };
let gn;
const au =
  me && (gn = Ro()) && gn.relList && gn.relList.supports && gn.relList.supports('prefetch')
    ? fu
    : uu;
function ku() {
  if (!me || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType))) return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target;
            n.unobserve(l);
            const { pathname: c } = l;
            if (!gs.has(c)) {
              gs.add(c);
              const u = tu(c);
              u && au(u);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI
            ),
            c = l.match(/\.\w+$/);
          (c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : gs.add(l)));
        });
      });
  };
  It(s);
  const r = Ao();
  Le(() => r.path, s),
    kn(() => {
      n && n.disconnect();
    });
}
export {
  bu as $,
  nu as A,
  hu as B,
  gu as C,
  Vs as D,
  Lu as E,
  xe as F,
  he as G,
  pu as H,
  So as I,
  Ao as J,
  xc as K,
  yt as L,
  Iu as M,
  Pn as N,
  Ru as O,
  $n as P,
  Mu as Q,
  me as R,
  Hn as S,
  xu as T,
  Ou as U,
  nc as V,
  yu as W,
  Eu as X,
  Ai as Y,
  Tu as Z,
  Hu as _,
  ro as a,
  Cu as a0,
  Vu as a1,
  su as a2,
  Pu as a3,
  Qf as a4,
  Fu as a5,
  Du as a6,
  _t as a7,
  Au as a8,
  Nu as a9,
  tu as aa,
  ku as ab,
  ju as ac,
  $u as ad,
  Rs as ae,
  wu as af,
  du as ag,
  Sc as ah,
  dl as ai,
  Cs as b,
  vu as c,
  Ti as d,
  Su as e,
  Jf as f,
  Vr as g,
  ie as h,
  Bf as i,
  so as j,
  ks as k,
  Uf as l,
  bo as m,
  Ln as n,
  Es as o,
  pe as p,
  Le as q,
  mu as r,
  Yi as s,
  Bo as t,
  Zf as u,
  It as v,
  Rl as w,
  kn as x,
  _u as y,
  Wl as z
};
