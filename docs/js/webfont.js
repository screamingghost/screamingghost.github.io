/* Web Font Loader v1.6.24 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function() {
    function aa(a, b, d) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, d) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, c);
                return a.apply(b, d)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function p(a, b, d) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments)
    }
    var q = Date.now || function() {
        return +new Date
    }
    ;
    function ca(a, b) {
        this.a = a;
        this.m = b || a;
        this.c = this.m.document
    }
    var da = !!window.FontFace;
    function t(a, b, d, c) {
        b = a.c.createElement(b);
        if (d)
            for (var e in d)
                d.hasOwnProperty(e) && ("style" == e ? b.style.cssText = d[e] : b.setAttribute(e, d[e]));
        c && b.appendChild(a.c.createTextNode(c));
        return b
    }
    function u(a, b, d) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(d, a.lastChild)
    }
    function v(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }
    function w(a, b, d) {
        b = b || [];
        d = d || [];
        for (var c = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < c.length; g += 1)
                if (b[e] === c[g]) {
                    f = !0;
                    break
                }
            f || c.push(b[e])
        }
        b = [];
        for (e = 0; e < c.length; e += 1) {
            f = !1;
            for (g = 0; g < d.length; g += 1)
                if (c[e] === d[g]) {
                    f = !0;
                    break
                }
            f || b.push(c[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function y(a, b) {
        for (var d = a.className.split(/\s+/), c = 0, e = d.length; c < e; c++)
            if (d[c] == b)
                return !0;
        return !1
    }
    function z(a) {
        if ("string" === typeof a.f)
            return a.f;
        var b = a.m.location.protocol;
        "about:" == b && (b = a.a.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }
    function ea(a) {
        return a.m.location.hostname || a.a.location.hostname
    }
    function A(a, b, d) {
        function c() {
            k && e && f && (k(g),
            k = null)
        }
        b = t(a, "link", {
            rel: "stylesheet",
            href: b,
            media: "all"
        });
        var e = !1
          , f = !0
          , g = null
          , k = d || null;
        da ? (b.onload = function() {
            e = !0;
            c()
        }
        ,
        b.onerror = function() {
            e = !0;
            g = Error("Stylesheet failed to load");
            c()
        }
        ) : setTimeout(function() {
            e = !0;
            c()
        }, 0);
        u(a, "head", b)
    }
    function B(a, b, d, c) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
            var f = t(a, "script", {
                src: b
            })
              , g = !1;
            f.onload = f.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0,
                d && d(null),
                f.onload = f.onreadystatechange = null,
                "HEAD" == f.parentNode.tagName && e.removeChild(f))
            }
            ;
            e.appendChild(f);
            setTimeout(function() {
                g || (g = !0,
                d && d(Error("Script load timeout")))
            }, c || 5E3);
            return f
        }
        return null
    }
    ;function C() {
        this.a = 0;
        this.c = null
    }
    function D(a) {
        a.a++;
        return function() {
            a.a--;
            E(a)
        }
    }
    function F(a, b) {
        a.c = b;
        E(a)
    }
    function E(a) {
        0 == a.a && a.c && (a.c(),
        a.c = null)
    }
    ;function G(a) {
        this.a = a || "-"
    }
    G.prototype.c = function(a) {
        for (var b = [], d = 0; d < arguments.length; d++)
            b.push(arguments[d].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a)
    }
    ;
    function H(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var d = (b || "n4").match(/^([nio])([1-9])$/i);
        d && (this.a = d[1],
        this.f = parseInt(d[2], 10))
    }
    function fa(a) {
        return I(a) + " " + (a.f + "00") + " 300px " + J(a.c)
    }
    function J(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var d = 0; d < a.length; d++) {
            var c = a[d].replace(/['"]/g, "");
            -1 != c.indexOf(" ") || /^\d/.test(c) ? b.push("'" + c + "'") : b.push(c)
        }
        return b.join(",")
    }
    function K(a) {
        return a.a + a.f
    }
    function I(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b
    }
    function ga(a) {
        var b = 4
          , d = "n"
          , c = null;
        a && ((c = a.match(/(normal|oblique|italic)/i)) && c[1] && (d = c[1].substr(0, 1).toLowerCase()),
        (c = a.match(/([1-9]00|normal|bold)/i)) && c[1] && (/bold/i.test(c[1]) ? b = 7 : /[1-9]00/.test(c[1]) && (b = parseInt(c[1].substr(0, 1), 10))));
        return d + b
    }
    ;function ha(a, b) {
        this.c = a;
        this.f = a.m.document.documentElement;
        this.h = b;
        this.a = new G("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes
    }
    function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        L(a, "loading")
    }
    function M(a) {
        if (a.g) {
            var b = y(a.f, a.a.c("wf", "active"))
              , d = []
              , c = [a.a.c("wf", "loading")];
            b || d.push(a.a.c("wf", "inactive"));
            w(a.f, d, c)
        }
        L(a, "inactive")
    }
    function L(a, b, d) {
        if (a.j && a.h[b])
            if (d)
                a.h[b](d.c, K(d));
            else
                a.h[b]()
    }
    ;function ja() {
        this.c = {}
    }
    function ka(a, b, d) {
        var c = [], e;
        for (e in b)
            if (b.hasOwnProperty(e)) {
                var f = a.c[e];
                f && c.push(f(b[e], d))
            }
        return c
    }
    ;function N(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }
    function O(a) {
        u(a.c, "body", a.a)
    }
    function P(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";")
    }
    ;function Q(a, b, d, c, e, f) {
        this.g = a;
        this.j = b;
        this.a = c;
        this.c = d;
        this.f = e || 3E3;
        this.h = f || void 0
    }
    Q.prototype.start = function() {
        var a = this.c.m.document
          , b = this
          , d = q()
          , c = new Promise(function(c, e) {
            function k() {
                q() - d >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function(a) {
                    1 <= a.length ? c() : setTimeout(k, 25)
                }, function() {
                    e()
                })
            }
            k()
        }
        )
          , e = new Promise(function(a, c) {
            setTimeout(c, b.f)
        }
        );
        Promise.race([e, c]).then(function() {
            b.g(b.a)
        }, function() {
            b.j(b.a)
        })
    }
    ;
    function R(a, b, d, c, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = d;
        this.a = c;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3E3;
        this.u = f || null;
        this.o = this.j = this.h = this.g = null;
        this.g = new N(this.c,this.s);
        this.h = new N(this.c,this.s);
        this.j = new N(this.c,this.s);
        this.o = new N(this.c,this.s);
        a = new H(this.a.c + ",serif",K(this.a));
        a = P(a);
        this.g.a.style.cssText = a;
        a = new H(this.a.c + ",sans-serif",K(this.a));
        a = P(a);
        this.h.a.style.cssText = a;
        a = new H("serif",K(this.a));
        a = P(a);
        this.j.a.style.cssText = a;
        a = new H("sans-serif",K(this.a));
        a = P(a);
        this.o.a.style.cssText = a;
        O(this.g);
        O(this.h);
        O(this.j);
        O(this.o)
    }
    var S = {
        D: "serif",
        C: "sans-serif"
    }
      , T = null;
    function U() {
        if (null === T) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return T
    }
    R.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.o.a.offsetWidth;
        this.A = q();
        la(this)
    }
    ;
    function ma(a, b, d) {
        for (var c in S)
            if (S.hasOwnProperty(c) && b === a.f[S[c]] && d === a.f[S[c]])
                return !0;
        return !1
    }
    function la(a) {
        var b = a.g.a.offsetWidth, d = a.h.a.offsetWidth, c;
        (c = b === a.f.serif && d === a.f["sans-serif"]) || (c = U() && ma(a, b, d));
        c ? q() - a.A >= a.w ? U() && ma(a, b, d) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v)
    }
    function na(a) {
        setTimeout(p(function() {
            la(this)
        }, a), 50)
    }
    function V(a, b) {
        setTimeout(p(function() {
            v(this.g.a);
            v(this.h.a);
            v(this.j.a);
            v(this.o.a);
            b(this.a)
        }, a), 0)
    }
    ;function W(a, b, d) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.o = this.j = !1;
        this.s = d
    }
    var X = null;
    W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);
        L(b, "fontactive", a);
        this.o = !0;
        oa(this)
    }
    ;
    W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
            var d = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active"))
              , c = []
              , e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
            d || c.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));
            w(b.f, c, e)
        }
        L(b, "fontinactive", a);
        oa(this)
    }
    ;
    function oa(a) {
        0 == --a.f && a.j && (a.o ? (a = a.a,
        a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]),
        L(a, "active")) : M(a.a))
    }
    ;function pa(a) {
        this.j = a;
        this.a = new ja;
        this.h = 0;
        this.f = this.g = !0
    }
    pa.prototype.load = function(a) {
        this.c = new ca(this.j,a.context || this.j);
        this.g = !1 !== a.events;
        this.f = !1 !== a.classes;
        qa(this, new ha(this.c,a), a)
    }
    ;
    function ra(a, b, d, c, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
            var a = e || null
              , k = c || null || {};
            if (0 === d.length && f)
                M(b.a);
            else {
                b.f += d.length;
                f && (b.j = f);
                var h, m = [];
                for (h = 0; h < d.length; h++) {
                    var l = d[h]
                      , n = k[l.c]
                      , r = b.a
                      , x = l;
                    r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);
                    L(r, "fontloading", x);
                    r = null;
                    null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);
                    X ? r = new Q(p(b.g, b),p(b.h, b),b.c,l,b.s,n) : r = new R(p(b.g, b),p(b.h, b),b.c,l,b.s,a,n);
                    m.push(r)
                }
                for (h = 0; h < m.length; h++)
                    m[h].start()
            }
        }, 0)
    }
    function qa(a, b, d) {
        var c = []
          , e = d.timeout;
        ia(b);
        var c = ka(a.a, d, a.c)
          , f = new W(a.c,b,e);
        a.h = c.length;
        b = 0;
        for (d = c.length; b < d; b++)
            c[b].load(function(b, c, d) {
                ra(a, f, b, c, d)
            })
    }
    ;function sa(a, b) {
        this.c = a;
        this.a = b
    }
    function ta(a, b, d) {
        var c = z(a.c);
        a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + a + "/" + b + ".js" + (d ? "?v=" + d : "")
    }
    sa.prototype.load = function(a) {
        function b() {
            if (e["__mti_fntLst" + d]) {
                var c = e["__mti_fntLst" + d](), g = [], k;
                if (c)
                    for (var h = 0; h < c.length; h++) {
                        var m = c[h].fontfamily;
                        void 0 != c[h].fontStyle && void 0 != c[h].fontWeight ? (k = c[h].fontStyle + c[h].fontWeight,
                        g.push(new H(m,k))) : g.push(new H(m))
                    }
                a(g)
            } else
                setTimeout(function() {
                    b()
                }, 50)
        }
        var d = this.a.projectId
          , c = this.a.version;
        if (d) {
            var e = this.c.m;
            B(this.c, ta(this, d, c), function(c) {
                c ? a([]) : b()
            }).id = "__MonotypeAPIScript__" + d
        } else
            a([])
    }
    ;
    function ua(a, b) {
        this.c = a;
        this.a = b
    }
    ua.prototype.load = function(a) {
        var b, d, c = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new C;
        b = 0;
        for (d = c.length; b < d; b++)
            A(this.c, c[b], D(g));
        var k = [];
        b = 0;
        for (d = e.length; b < d; b++)
            if (c = e[b].split(":"),
            c[1])
                for (var h = c[1].split(","), m = 0; m < h.length; m += 1)
                    k.push(new H(c[0],h[m]));
            else
                k.push(new H(c[0]));
        F(g, function() {
            a(k, f)
        })
    }
    ;
    function va(a, b, d) {
        a ? this.c = a : this.c = b + wa;
        this.a = [];
        this.f = [];
        this.g = d || ""
    }
    var wa = "https://fonts.googleapis.com/css";
    function xa(a, b) {
        for (var d = b.length, c = 0; c < d; c++) {
            var e = b[c].split(":");
            3 == e.length && a.f.push(e.pop());
            var f = "";
            2 == e.length && "" != e[1] && (f = ":");
            a.a.push(e.join(f))
        }
    }
    function ya(a) {
        if (0 == a.a.length)
            throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit="))
            return a.c;
        for (var b = a.a.length, d = [], c = 0; c < b; c++)
            d.push(a.a[c].replace(/ /g, "+"));
        b = a.c + "?family=" + d.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b
    }
    ;function za(a) {
        this.f = a;
        this.a = [];
        this.c = {}
    }
    var Aa = {
        latin: "BESbswy",
        cyrillic: "\u0439\u044f\u0416",
        greek: "\u03b1\u03b2\u03a3",
        khmer: "\u1780\u1781\u1782",
        Hanuman: "\u1780\u1781\u1782"
    }
      , Ba = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }
      , Ca = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }
      , Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Ea(a) {
        for (var b = a.f.length, d = 0; d < b; d++) {
            var c = a.f[d].split(":")
              , e = c[0].replace(/\+/g, " ")
              , f = ["n4"];
            if (2 <= c.length) {
                var g;
                var k = c[1];
                g = [];
                if (k)
                    for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
                        var l;
                        l = k[m];
                        if (l.match(/^[\w-]+$/)) {
                            var n = Da.exec(l.toLowerCase());
                            if (null == n)
                                l = "";
                            else {
                                l = n[2];
                                l = null == l || "" == l ? "n" : Ca[l];
                                n = n[1];
                                if (null == n || "" == n)
                                    n = "4";
                                else
                                    var r = Ba[n]
                                      , n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                                l = [l, n].join("")
                            }
                        } else
                            l = "";
                        l && g.push(l)
                    }
                0 < g.length && (f = g);
                3 == c.length && (c = c[2],
                g = [],
                c = c ? c.split(",") : g,
                0 < c.length && (c = Aa[c[0]]) && (a.c[e] = c))
            }
            a.c[e] || (c = Aa[e]) && (a.c[e] = c);
            for (c = 0; c < f.length; c += 1)
                a.a.push(new H(e,f[c]))
        }
    }
    ;function Fa(a, b) {
        this.c = a;
        this.a = b
    }
    var Ga = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    Fa.prototype.load = function(a) {
        var b = new C
          , d = this.c
          , c = new va(this.a.api,z(d),this.a.text)
          , e = this.a.families;
        xa(c, e);
        var f = new za(e);
        Ea(f);
        A(d, ya(c), D(b));
        F(b, function() {
            a(f.a, f.c, Ga)
        })
    }
    ;
    function Ha(a, b) {
        this.c = a;
        this.a = b
    }
    Ha.prototype.load = function(a) {
        var b = this.a.id
          , d = this.c.m;
        b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b) {
            if (b)
                a([]);
            else if (d.Typekit && d.Typekit.config && d.Typekit.config.fn) {
                b = d.Typekit.config.fn;
                for (var e = [], f = 0; f < b.length; f += 2)
                    for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++)
                        e.push(new H(g,k[h]));
                try {
                    d.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (m) {}
                a(e)
            }
        }, 2E3) : a([])
    }
    ;
    function Ia(a, b) {
        this.c = a;
        this.f = b;
        this.a = []
    }
    Ia.prototype.load = function(a) {
        var b = this.f.id
          , d = this.c.m
          , c = this;
        b ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}),
        d.__webfontfontdeckmodule__[b] = function(b, d) {
            for (var g = 0, k = d.fonts.length; g < k; ++g) {
                var h = d.fonts[g];
                c.a.push(new H(h.name,ga("font-weight:" + h.weight + ";font-style:" + h.style)))
            }
            a(c.a)
        }
        ,
        B(this.c, z(this.c) + (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b) {
            b && a([])
        })) : a([])
    }
    ;
    var Y = new pa(window);
    Y.a.c.custom = function(a, b) {
        return new ua(b,a)
    }
    ;
    Y.a.c.fontdeck = function(a, b) {
        return new Ia(b,a)
    }
    ;
    Y.a.c.monotype = function(a, b) {
        return new sa(b,a)
    }
    ;
    Y.a.c.typekit = function(a, b) {
        return new Ha(b,a)
    }
    ;
    Y.a.c.google = function(a, b) {
        return new Fa(b,a)
    }
    ;
    var Z = {
        load: p(Y.load, Y)
    };
    "function" === typeof define && define.amd ? define(function() {
        return Z
    }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z,
    window.WebFontConfig && Y.load(window.WebFontConfig));
}());