(function () {
    function g(a) {
        throw a;
    }
    var k = void 0,
        m = !0,
        n = null,
        q = !1,
        s, u = this,
        aa = function (a) {
            a = a.split(".");
            for (var b = u, c; c = a.shift();) if (b[c] != n) b = b[c];
                else return n;
            return b
        }, ba = function () {}, ca = function (a) {
            var b = typeof a;
            if ("object" == b) if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, v = function (a) {
            return "array" == ca(a)
        }, da = function (a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }, w = function (a) {
            return "string" == typeof a
        }, ea = function (a) {
            return "function" == ca(a)
        }, fa = function (a) {
            var b = typeof a;
            return "object" == b && a != n || "function" == b
        }, ia = function (a) {
            return a[ga] ||
                (a[ga] = ++ha)
        }, ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0,
        ja = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, ka = function (a, b, c) {
            a || g(Error());
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }, x = function (a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
            return x.apply(n,
                arguments)
        }, la = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = Array.prototype.slice.call(arguments);
                b.unshift.apply(b, c);
                return a.apply(this, b)
            }
        }, y = Date.now || function () {
            return +new Date
        }, z = function (a, b) {
            var c = a.split("."),
                d = u;
            !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());)!c.length && b !== k ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        }, A = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.p = b.prototype;
            a.prototype = new c
        };
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return x.apply(n, c)
        }
        return x(this, a)
    };
    var C = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, C) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    A(C, Error);
    C.prototype.name = "CustomError";
    var ma = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    }, sa = function (a) {
            if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(qa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ra, "&quot;"));
            return a
        }, oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /\"/g,
        na = /[&<>\"]/;
    var ta = function (a, b) {
        b.unshift(a);
        C.call(this, ma.apply(n, b));
        b.shift()
    };
    A(ta, C);
    ta.prototype.name = "AssertionError";
    var D = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (b) var e = e + (": " + b),
            f = d;
            g(new ta("" + e, f || []))
        }
    }, ua = function (a, b) {
            g(new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
        };
    var E = Array.prototype,
        va = E.indexOf ? function (a, b, c) {
            D(a.length != n);
            return E.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == n ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (w(a)) return !w(b) || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++) if (c in a && a[c] === b) return c;
            return -1
        }, wa = E.forEach ? function (a, b, c) {
            D(a.length != n);
            E.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, xa = E.filter ? function (a, b, c) {
            D(a.length != n);
            return E.filter.call(a, b, c)
        } : function (a,
            b, c) {
            for (var d = a.length, e = [], f = 0, h = w(a) ? a.split("") : a, l = 0; l < d; l++) if (l in h) {
                    var p = h[l];
                    b.call(c, p, l, a) && (e[f++] = p)
                }
            return e
        }, ya = E.some ? function (a, b, c) {
            D(a.length != n);
            return E.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = w(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return m;
            return q
        }, Aa = function (a, b) {
            var c = va(a, b),
                d;
            (d = 0 <= c) && za(a, c);
            return d
        }, za = function (a, b) {
            D(a.length != n);
            return 1 == E.splice.call(a, b, 1).length
        }, Ba = function (a) {
            return E.concat.apply(E, arguments)
        }, Ca = function (a) {
            var b =
                a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }, Da = function (a, b, c) {
            D(a.length != n);
            return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
        };
    var Ea, Fa, Ga, Ha, Ia = function () {
            return u.navigator ? u.navigator.userAgent : n
        };
    Ha = Ga = Fa = Ea = q;
    var Ja;
    if (Ja = Ia()) {
        var Ka = u.navigator;
        Ea = 0 == Ja.indexOf("Opera");
        Fa = !Ea && -1 != Ja.indexOf("MSIE");
        Ga = !Ea && -1 != Ja.indexOf("WebKit");
        Ha = !Ea && !Ga && "Gecko" == Ka.product
    }
    var La = Ea,
        F = Fa,
        Ma = Ha,
        G = Ga,
        Na = function () {
            var a = u.document;
            return a ? a.documentMode : k
        }, Oa;
    a: {
        var Pa = "",
            Qa;
        if (La && u.opera) var Ra = u.opera.version,
        Pa = "function" == typeof Ra ? Ra() : Ra;
        else if (Ma ? Qa = /rv\:([^\);]+)(\)|;)/ : F ? Qa = /MSIE\s+([^\);]+)(\)|;)/ : G && (Qa = /WebKit\/(\S+)/), Qa) var Sa = Qa.exec(Ia()),
        Pa = Sa ? Sa[1] : "";
        if (F) {
            var Ta = Na();
            if (Ta > parseFloat(Pa)) {
                Oa = String(Ta);
                break a
            }
        }
        Oa = Pa
    }
    var Ua = Oa,
        Va = {}, H = function (a) {
            var b;
            if (!(b = Va[a])) {
                b = 0;
                for (var c = String(Ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "",
                        l = d[f] || "",
                        p = RegExp("(\\d*)(\\D*)", "g"),
                        r = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var t = p.exec(h) || ["", "", ""],
                            B = r.exec(l) || ["", "", ""];
                        if (0 == t[0].length && 0 == B[0].length) break;
                        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == B[1].length ? 0 : parseInt(B[1], 10)) ? -1 : (0 == t[1].length ?
                            0 : parseInt(t[1], 10)) > (0 == B[1].length ? 0 : parseInt(B[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == B[2].length) ? -1 : (0 == t[2].length) > (0 == B[2].length) ? 1 : 0) || (t[2] < B[2] ? -1 : t[2] > B[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Va[a] = 0 <= b
            }
            return b
        }, Wa = u.document,
        Xa = !Wa || !F ? k : Na() || ("CSS1Compat" == Wa.compatMode ? parseInt(Ua, 10) : 5);
    var Ya = n,
        Za = n,
        $a = n;
    var ab = function () {};
    var bb = function (a, b, c) {
        this.o = a;
        this.Ua = c || 16;
        this.jc = Array(this.Ua);
        this.xb = Array(this.Ua);
        a = b;
        a.length > this.Ua && (this.o.update(a), a = this.o.ya());
        for (c = 0; c < this.Ua; c++) b = c < a.length ? a[c] : 0, this.jc[c] = b ^ 92, this.xb[c] = b ^ 54;
        this.o.update(this.xb)
    };
    A(bb, ab);
    bb.prototype.reset = function () {
        this.o.reset();
        this.o.update(this.xb)
    };
    bb.prototype.update = function (a, b) {
        this.o.update(a, b)
    };
    bb.prototype.ya = function () {
        var a = this.o.ya();
        this.o.reset();
        this.o.update(this.jc);
        this.o.update(a);
        return this.o.ya()
    };
    var cb = function () {
        this.j = [];
        this.tb = [];
        this.Pc = [];
        this.Ta = [];
        this.Ta[0] = 128;
        for (var a = 1; 64 > a; ++a) this.Ta[a] = 0;
        this.reset()
    };
    A(cb, ab);
    cb.prototype.reset = function () {
        this.j[0] = 1732584193;
        this.j[1] = 4023233417;
        this.j[2] = 2562383102;
        this.j[3] = 271733878;
        this.j[4] = 3285377520;
        this.ub = this.za = 0
    };
    var db = function (a, b, c) {
        c || (c = 0);
        var d = a.Pc;
        if (w(b)) for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.j[0];
        c = a.j[1];
        for (var h = a.j[2], l = a.j[3], p = a.j[4], r, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = l ^ c & (h ^ l), r = 1518500249) : (f = c ^ h ^ l, r = 1859775393) : 60 > e ? (f = c & h | l & (c | h), r = 2400959708) : (f = c ^ h ^ l, r = 3395469782),
        f = (b << 5 | b >>> 27) + f + p + r + d[e] & 4294967295, p = l, l = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.j[0] = a.j[0] + b & 4294967295;
        a.j[1] = a.j[1] + c & 4294967295;
        a.j[2] = a.j[2] + h & 4294967295;
        a.j[3] = a.j[3] + l & 4294967295;
        a.j[4] = a.j[4] + p & 4294967295
    };
    cb.prototype.update = function (a, b) {
        b === k && (b = a.length);
        for (var c = b - 64, d = 0, e = this.tb, f = this.za; d < b;) {
            if (0 == f) for (; d <= c;) db(this, a, d), d += 64;
            if (w(a)) for (; d < b;) {
                    if (e[f] = a.charCodeAt(d), ++f, ++d, 64 == f) {
                        db(this, e);
                        f = 0;
                        break
                    }
            } else for (; d < b;) if (e[f] = a[d], ++f, ++d, 64 == f) {
                        db(this, e);
                        f = 0;
                        break
                    }
        }
        this.za = f;
        this.ub += b
    };
    cb.prototype.ya = function () {
        var a = [],
            b = 8 * this.ub;
        56 > this.za ? this.update(this.Ta, 56 - this.za) : this.update(this.Ta, 64 - (this.za - 56));
        for (var c = 63; 56 <= c; c--) this.tb[c] = b & 255, b /= 256;
        db(this, this.tb);
        for (c = b = 0; 5 > c; c++) for (var d = 24; 0 <= d; d -= 8) a[b] = this.j[c] >> d & 255, ++b;
        return a
    };
    var eb = function (a, b) {
        for (var c in a) b.call(k, a[c], c, a)
    }, fb = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }, gb = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }, hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        ib = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < hb.length; f++) c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var jb, kb = !F || F && 9 <= Xa,
        lb = !Ma && !F || F && F && 9 <= Xa || Ma && H("1.9.1");
    F && H("9");
    var mb = function (a, b) {
        var c;
        c = a.className;
        c = w(c) && c.match(/\S+/g) || [];
        for (var d = Da(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++) 0 <= va(f, d[h]) || f.push(d[h]);
        a.className = c.join(" ");
        return c.length == e
    };
    var I = function (a) {
        return a ? new nb(9 == a.nodeType ? a : a.ownerDocument || a.document) : jb || (jb = new nb)
    }, pb = function (a, b) {
            eb(b, function (b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ob ? a.setAttribute(ob[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        }, ob = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, rb = function (a, b, c) {
            function d(c) {
                c && b.appendChild(w(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                da(f) && !(fa(f) && 0 < f.nodeType) ? wa(qb(f) ? Ca(f) : f, d) : d(f)
            }
        }, sb = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : n
        }, qb = function (a) {
            if (a && "number" == typeof a.length) {
                if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ea(a)) return "function" == typeof a.item
            }
            return q
        }, nb = function (a) {
            this.N = a || u.document || document
        },
        tb = function (a, b) {
            var c;
            c = a.N;
            var d = b && "*" != b ? b.toUpperCase() : "";
            c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
            return c
        };
    s = nb.prototype;
    s.fc = function (a, b, c) {
        var d = this.N,
            e = arguments,
            f = e[0],
            h = e[1];
        if (!kb && h && (h.name || h.type)) {
            f = ["<", f];
            h.name && f.push(' name="', sa(h.name), '"');
            if (h.type) {
                f.push(' type="', sa(h.type), '"');
                var l = {};
                ib(l, h);
                delete l.type;
                h = l
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        h && (w(h) ? f.className = h : v(h) ? mb.apply(n, [f].concat(h)) : pb(f, h));
        2 < e.length && rb(d, f, e);
        return f
    };
    s.createElement = function (a) {
        return this.N.createElement(a)
    };
    s.createTextNode = function (a) {
        return this.N.createTextNode(String(a))
    };
    s.e = function () {
        return this.N.parentWindow || this.N.defaultView
    };
    s.appendChild = function (a, b) {
        a.appendChild(b)
    };
    s.removeNode = sb;
    s.rc = function (a) {
        return lb && a.children != k ? a.children : xa(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    var ub = function () {};
    ub.prototype.aa = q;
    ub.prototype.Bb = function () {
        this.aa || (this.aa = m, this.g())
    };
    ub.prototype.g = function () {
        if (this.wc) for (; this.wc.length;) this.wc.shift()()
    };
    var vb = function (a) {
        a && "function" == typeof a.Bb && a.Bb()
    };
    var wb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    s = wb.prototype;
    s.g = function () {};
    s.Bb = function () {};
    s.$ = q;
    s.defaultPrevented = q;
    s.ic = m;
    s.preventDefault = function () {
        this.defaultPrevented = m;
        this.ic = q
    };
    var xb = function (a) {
        xb[" "](a);
        return a
    };
    xb[" "] = ba;
    var yb = function (a, b) {
        try {
            return xb(a[b]), m
        } catch (c) {}
        return q
    };
    var zb = !F || F && 9 <= Xa,
        Ab = F && !H("9");
    !G || H("528");
    Ma && H("1.9b") || F && H("8") || La && H("9.5") || G && H("528");
    Ma && !H("8") || F && H("9");
    var Bb = function (a, b) {
        a && this.sa(a, b)
    };
    A(Bb, wb);
    s = Bb.prototype;
    s.target = n;
    s.relatedTarget = n;
    s.offsetX = 0;
    s.offsetY = 0;
    s.clientX = 0;
    s.clientY = 0;
    s.screenX = 0;
    s.screenY = 0;
    s.button = 0;
    s.keyCode = 0;
    s.charCode = 0;
    s.ctrlKey = q;
    s.altKey = q;
    s.shiftKey = q;
    s.metaKey = q;
    s.Sa = n;
    s.sa = function (a, b) {
        var c = this.type = a.type;
        wb.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        d ? Ma && (yb(d, "nodeName") || (d = n)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = G || a.offsetX !== k ? a.offsetX : a.layerX;
        this.offsetY = G || a.offsetY !== k ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== k ? a.clientX : a.pageX;
        this.clientY = a.clientY !== k ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button =
            a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Sa = a;
        a.defaultPrevented && this.preventDefault();
        delete this.$
    };
    s.preventDefault = function () {
        Bb.p.preventDefault.call(this);
        var a = this.Sa;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = q, Ab) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    s.g = function () {};
    var Cb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Db = function (a) {
            return !(!a || !a[Cb])
        }, Eb = 0;
    var Fb = function () {};
    s = Fb.prototype;
    s.key = 0;
    s.q = q;
    s.Z = q;
    s.sa = function (a, b, c, d, e, f) {
        ea(a) ? this.gc = m : a && a.handleEvent && ea(a.handleEvent) ? this.gc = q : g(Error("Invalid listener argument"));
        this.G = a;
        this.Vb = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.qa = f;
        this.Z = q;
        this.key = ++Eb;
        this.q = q
    };
    s.handleEvent = function (a) {
        return this.gc ? this.G.call(this.qa || this.src, a) : this.G.handleEvent.call(this.G, a)
    };
    var Gb = {}, J = {}, Hb = {}, Ib = {}, Jb = function (a, b, c, d, e) {
            if (v(b)) {
                for (var f = 0; f < b.length; f++) Jb(a, b[f], c, d, e);
                return n
            }
            a = Db(a) ? a.ab(b, Kb(c), d, e) : Lb(a, b, c, q, d, e);
            b = a.key;
            Gb[b] = a;
            return b
        }, Lb = function (a, b, c, d, e, f) {
            b || g(Error("Invalid event type"));
            e = !! e;
            var h = J;
            b in h || (h[b] = {
                f: 0,
                R: 0
            });
            h = h[b];
            e in h || (h[e] = {
                f: 0,
                R: 0
            }, h.f++);
            var h = h[e],
                l = ia(a),
                p;
            h.R++;
            if (h[l]) {
                p = h[l];
                for (var r = 0; r < p.length; r++) if (h = p[r], h.G == c && h.qa == f) {
                        if (h.q) break;
                        d || (p[r].Z = q);
                        return p[r]
                    }
            } else p = h[l] = [], h.f++;
            r = Mb();
            h = new Fb;
            h.sa(c, r, a,
                b, e, f);
            h.Z = d;
            r.src = a;
            r.G = h;
            p.push(h);
            Hb[l] || (Hb[l] = []);
            Hb[l].push(h);
            a.addEventListener ? a == u || !a.customEvent_ ? a.addEventListener(b, r, e) : Nb(a) : a.attachEvent(b in Ib ? Ib[b] : Ib[b] = "on" + b, r);
            return h
        }, Mb = function () {
            var a = Ob,
                b = zb ? function (c) {
                    return a.call(b.src, b.G, c)
                } : function (c) {
                    c = a.call(b.src, b.G, c);
                    if (!c) return c
                };
            return b
        }, Pb = function (a, b, c, d, e) {
            if (v(b)) {
                for (var f = 0; f < b.length; f++) Pb(a, b[f], c, d, e);
                return n
            }
            a = Db(a) ? a.La(b, Kb(c), d, e) : Lb(a, b, c, m, d, e);
            b = a.key;
            Gb[b] = a;
            return b
        }, Qb = function (a, b, c, d, e) {
            if (v(b)) for (var f =
                    0; f < b.length; f++) Qb(a, b[f], c, d, e);
            else if (Db(a)) a.ib(b, Kb(c), d, e);
            else if (d = !! d, a = Rb(a, b, d)) for (f = 0; f < a.length; f++) if (a[f].G == c && a[f].capture == d && a[f].qa == e) {
                        Sb(a[f].key);
                        break
                    }
        }, Sb = function (a) {
            var b = a instanceof Fb ? a : Gb[a];
            if (!b || b.q) return q;
            var c = b.src;
            if (Db(c)) return Tb(c, b);
            var d = b.type,
                e = b.Vb,
                f = b.capture;
            c.removeEventListener ? (c == u || !c.customEvent_) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Ib ? Ib[d] : Ib[d] = "on" + d, e);
            c = ia(c);
            Hb[c] && (e = Hb[c], Aa(e, b), 0 == e.length && delete Hb[c]);
            b.q = m;
            if (b = J[d][f][c]) b.ec = m, Ub(d, f, c, b);
            delete Gb[a];
            return m
        }, Ub = function (a, b, c, d) {
            if (!d.Pa && d.ec) {
                for (var e = 0, f = 0; e < d.length; e++) d[e].q ? d[e].Vb.src = n : (e != f && (d[f] = d[e]), f++);
                d.length = f;
                d.ec = q;
                0 == f && (delete J[a][b][c], J[a][b].f--, 0 == J[a][b].f && (delete J[a][b], J[a].f--), 0 == J[a].f && delete J[a])
            }
        }, Rb = function (a, b, c) {
            var d = J;
            return b in d && (d = d[b], c in d && (d = d[c], a = ia(a), d[a])) ? d[a] : n
        }, Wb = function (a, b, c, d, e) {
            var f = 1;
            b = ia(b);
            if (a[b]) {
                var h = --a.R,
                    l = a[b];
                l.Pa ? l.Pa++ : l.Pa = 1;
                try {
                    for (var p = l.length, r = 0; r <
                        p; r++) {
                        var t = l[r];
                        t && !t.q && (f &= Vb(t, e) !== q)
                    }
                } finally {
                    a.R = Math.max(h, a.R), l.Pa--, Ub(c, d, b, l)
                }
            }
            return Boolean(f)
        }, Vb = function (a, b) {
            a.Z && Sb(a.key);
            return a.handleEvent(b)
        }, Ob = function (a, b) {
            if (a.q) return m;
            var c = a.type,
                d = J;
            if (!(c in d)) return m;
            var d = d[c],
                e, f;
            if (!zb) {
                e = b || aa("window.event");
                var h = m in d,
                    l = q in d;
                if (h) {
                    if (0 > e.keyCode || e.returnValue != k) return m;
                    a: {
                        var p = q;
                        if (0 == e.keyCode) try {
                                e.keyCode = -1;
                                break a
                        } catch (r) {
                            p = m
                        }
                        if (p || e.returnValue == k) e.returnValue = m
                    }
                }
                p = new Bb;
                p.sa(e, this);
                e = m;
                try {
                    if (h) {
                        for (var t = [], B = p.currentTarget; B; B = B.parentNode) t.push(B);
                        f = d[m];
                        f.R = f.f;
                        for (var Q = t.length - 1; !p.$ && 0 <= Q && f.R; Q--) p.currentTarget = t[Q], e &= Wb(f, t[Q], c, m, p);
                        if (l) {
                            f = d[q];
                            f.R = f.f;
                            for (Q = 0; !p.$ && Q < t.length && f.R; Q++) p.currentTarget = t[Q], e &= Wb(f, t[Q], c, q, p)
                        }
                    } else e = Vb(a, p)
                } finally {
                    t && (t.length = 0)
                }
                return e
            }
            c = new Bb(b, this);
            return e = Vb(a, c)
        }, Xb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Kb = function (a) {
            return ea(a) ? a : a[Xb] || (a[Xb] = function (b) {
                return a.handleEvent(b)
            })
        };
    var K = function () {
        this.r = {};
        this.Rc = this
    };
    A(K, ub);
    K.prototype[Cb] = m;
    K.prototype.customEvent_ = m;
    s = K.prototype;
    s.jb = n;
    s.addEventListener = function (a, b, c, d) {
        Jb(this, a, b, c, d)
    };
    s.removeEventListener = function (a, b, c, d) {
        Qb(this, a, b, c, d)
    };
    s.dispatchEvent = function (a) {
        Nb(this);
        var b, c = this.jb;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.jb) b.push(c), D(1E3 > ++d, "infinite loop")
        }
        c = this.Rc;
        d = a.type || a;
        if (w(a)) a = new wb(a, c);
        else if (a instanceof wb) a.target = a.target || c;
        else {
            var e = a;
            a = new wb(d, c);
            ib(a, e)
        }
        var e = m,
            f;
        if (b) for (var h = b.length - 1; !a.$ && 0 <= h; h--) f = a.currentTarget = b[h], e = Yb(f, d, m, a) && e;
        a.$ || (f = a.currentTarget = c, e = Yb(f, d, m, a) && e, a.$ || (e = Yb(f, d, q, a) && e));
        if (b) for (h = 0; !a.$ && h < b.length; h++) f = a.currentTarget = b[h], e = Yb(f, d, q, a) && e;
        return e
    };
    s.g = function () {
        K.p.g.call(this);
        var a = 0,
            b;
        for (b in this.r) {
            for (var c = this.r[b], d = 0; d < c.length; d++)++a, delete Gb[c[d].key], c[d].q = m;
            c.length = 0
        }
        this.jb = n
    };
    var Nb = function (a) {
        D(a.r, "Event target is not initialized. Did you call superclass (goog.events.EventTarget) constructor?")
    };
    K.prototype.ab = function (a, b, c, d) {
        return Zb(this, a, b, q, c, d)
    };
    K.prototype.La = function (a, b, c, d) {
        return Zb(this, a, b, m, c, d)
    };
    var Zb = function (a, b, c, d, e, f) {
        Nb(a);
        var h = a.r[b] || (a.r[b] = []),
            l;
        l = $b(h, c, e, f);
        if (-1 < l) return l = h[l], d || (l.Z = q), l;
        l = new Fb;
        l.sa(c, n, a, b, !! e, f);
        l.Z = d;
        h.push(l);
        return l
    };
    K.prototype.ib = function (a, b, c, d) {
        if (!(a in this.r)) return q;
        a = this.r[a];
        b = $b(a, b, c, d);
        return -1 < b ? (c = a[b], delete Gb[c.key], c.q = m, za(a, b)) : q
    };
    var Tb = function (a, b) {
        var c = b.type;
        if (!(c in a.r)) return q;
        if (c = Aa(a.r[c], b)) delete Gb[b.key], b.q = m;
        return c
    }, Yb = function (a, b, c, d) {
            if (!(b in a.r)) return m;
            var e = m;
            b = Ca(a.r[b]);
            for (var f = 0; f < b.length; ++f) {
                var h = b[f];
                h && (!h.q && h.capture == c) && (h.Z && Tb(a, h), e = h.handleEvent(d) !== q && e)
            }
            return e && d.ic != q
        }, $b = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (f.G == b && f.capture == !! c && f.qa == d) return e
            }
            return -1
        };
    var bc = function (a, b) {
        K.call(this);
        this.ka = a || 1;
        this.wa = b || ac;
        this.vb = x(this.Tc, this);
        this.wb = y()
    };
    A(bc, K);
    bc.prototype.enabled = q;
    var ac = u;
    s = bc.prototype;
    s.P = n;
    s.Tc = function () {
        if (this.enabled) {
            var a = y() - this.wb;
            0 < a && a < 0.8 * this.ka ? this.P = this.wa.setTimeout(this.vb, this.ka - a) : (this.dispatchEvent("tick"), this.enabled && (this.P = this.wa.setTimeout(this.vb, this.ka), this.wb = y()))
        }
    };
    s.start = function () {
        this.enabled = m;
        this.P || (this.P = this.wa.setTimeout(this.vb, this.ka), this.wb = y())
    };
    s.stop = function () {
        this.enabled = q;
        this.P && (this.wa.clearTimeout(this.P), this.P = n)
    };
    s.g = function () {
        bc.p.g.call(this);
        this.stop();
        delete this.wa
    };
    var cc = function (a, b) {
        ea(a) || (a && "function" == typeof a.handleEvent ? a = x(a.handleEvent, a) : g(Error("Invalid listener argument")));
        return 2147483647 < b ? -1 : ac.setTimeout(a, b || 0)
    };
    var dc = function (a, b, c) {
        this.nb = a;
        this.ka = b || 0;
        this.ea = c;
        this.Qc = x(this.Uc, this)
    };
    A(dc, ub);
    s = dc.prototype;
    s.la = 0;
    s.g = function () {
        dc.p.g.call(this);
        this.stop();
        delete this.nb;
        delete this.ea
    };
    s.start = function (a) {
        this.stop();
        this.la = cc(this.Qc, a !== k ? a : this.ka)
    };
    s.stop = function () {
        0 != this.la && ac.clearTimeout(this.la);
        this.la = 0
    };
    s.Uc = function () {
        this.la = 0;
        this.nb && this.nb.call(this.ea)
    };
    var ec = function (a) {
        this.ea = a;
        this.h = []
    };
    A(ec, ub);
    var fc = [];
    s = ec.prototype;
    s.ab = function (a, b, c, d, e) {
        v(b) || (fc[0] = b, b = fc);
        for (var f = 0; f < b.length; f++) {
            var h = Jb(a, b[f], c || this, d || q, e || this.ea || this);
            this.h.push(h)
        }
        return this
    };
    s.La = function (a, b, c, d, e) {
        if (v(b)) for (var f = 0; f < b.length; f++) this.La(a, b[f], c, d, e);
        else a = Pb(a, b, c || this, d, e || this.ea || this), this.h.push(a);
        return this
    };
    s.ib = function (a, b, c, d, e) {
        if (v(b)) for (var f = 0; f < b.length; f++) this.ib(a, b[f], c, d, e);
        else {
            a: if (c = c || this, e = e || this.ea || this, d = !! d, Db(a)) c = Kb(c), a = a.r[b], b = -1, a && (b = $b(a, c, d, e)), e = -1 < b ? a[b] : n;
            else {
                if (a = Rb(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].q && a[b].G == c && a[b].capture == d && a[b].qa == e) {
                            e = a[b];
                            break a
                        }
                e = n
            }
            e && (e = e.key, Sb(e), Aa(this.h, e))
        }
        return this
    };
    s.g = function () {
        ec.p.g.call(this);
        wa(this.h, Sb);
        this.h.length = 0
    };
    s.handleEvent = function () {
        g(Error("EventHandler.handleEvent not implemented"))
    };
    var gc = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
        } catch (b) {}
        g(Error("Invalid JSON string: " + a))
    }, jc = function (a) {
            var b = [];
            hc(new ic, a, b);
            return b.join("")
        }, ic = function () {
            this.Xa = k
        }, hc = function (a, b, c) {
            switch (typeof b) {
            case "string":
                kc(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == n) {
                    c.push("null");
                    break
                }
                if (v(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], hc(a, a.Xa ? a.Xa.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), kc(f, c), c.push(":"), hc(a, a.Xa ? a.Xa.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                g(Error("Unknown type: " +
                    typeof b))
            }
        }, lc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        }, mc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        kc = function (a, b) {
            b.push('"', a.replace(mc, function (a) {
                if (a in lc) return lc[a];
                var b = a.charCodeAt(0),
                    e = "\\u";
                16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
                return lc[a] = e + b.toString(16)
            }), '"')
        };
    var nc = "StopIteration" in u ? u.StopIteration : Error("StopIteration"),
        oc = function () {};
    oc.prototype.next = function () {
        g(nc)
    };
    oc.prototype.Xc = function () {
        return this
    };
    var pc = function (a) {
        if ("function" == typeof a.S) return a.S();
        if (w(a)) return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return fb(a)
    }, qc = function (a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (da(a) || w(a)) wa(a, b, c);
            else {
                var d;
                if ("function" == typeof a.ja) d = a.ja();
                else if ("function" != typeof a.S) if (da(a) || w(a)) {
                        d = [];
                        for (var e = a.length, f = 0; f < e; f++) d.push(f)
                    } else d = gb(a);
                    else d = k;
                for (var e = pc(a), f = e.length, h = 0; h < f; h++) b.call(c, e[h], d && d[h], a)
            }
        };
    var rc = function (a, b) {
        this.H = {};
        this.h = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && g(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof rc ? (c = a.ja(), d = a.S()) : (c = gb(a), d = fb(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    s = rc.prototype;
    s.f = 0;
    s.Oa = 0;
    s.S = function () {
        sc(this);
        for (var a = [], b = 0; b < this.h.length; b++) a.push(this.H[this.h[b]]);
        return a
    };
    s.ja = function () {
        sc(this);
        return this.h.concat()
    };
    s.va = function (a) {
        return tc(this.H, a)
    };
    s.remove = function (a) {
        return tc(this.H, a) ? (delete this.H[a], this.f--, this.Oa++, this.h.length > 2 * this.f && sc(this), m) : q
    };
    var sc = function (a) {
        if (a.f != a.h.length) {
            for (var b = 0, c = 0; b < a.h.length;) {
                var d = a.h[b];
                tc(a.H, d) && (a.h[c++] = d);
                b++
            }
            a.h.length = c
        }
        if (a.f != a.h.length) {
            for (var e = {}, c = b = 0; b < a.h.length;) d = a.h[b], tc(e, d) || (a.h[c++] = d, e[d] = 1), b++;
            a.h.length = c
        }
    };
    rc.prototype.get = function (a, b) {
        return tc(this.H, a) ? this.H[a] : b
    };
    rc.prototype.set = function (a, b) {
        tc(this.H, a) || (this.f++, this.h.push(a), this.Oa++);
        this.H[a] = b
    };
    rc.prototype.Ja = function () {
        return new rc(this)
    };
    rc.prototype.Xc = function (a) {
        sc(this);
        var b = 0,
            c = this.h,
            d = this.H,
            e = this.Oa,
            f = this,
            h = new oc;
        h.next = function () {
            for (;;) {
                e != f.Oa && g(Error("The map has changed since the iterator was created"));
                b >= c.length && g(nc);
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    var tc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var vc = function (a) {
        return uc(a || arguments.callee.caller, [])
    }, uc = function (a, b) {
            var c = [];
            if (0 <= va(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(wc(a) + "(");
                for (var d = a.arguments, e = 0; e < d.length; e++) {
                    0 < e && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = String(f);
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = wc(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                    }
                    40 < f.length && (f = f.substr(0, 40) + "...");
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(uc(a.caller, b))
                } catch (h) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        }, wc = function (a) {
            if (xc[a]) return xc[a];
            a = String(a);
            if (!xc[a]) {
                var b = /function ([^\(]+)/.exec(a);
                xc[a] = b ? b[1] : "[Anonymous]"
            }
            return xc[a]
        }, xc = {};
    var yc = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    yc.prototype.Ra = 0;
    yc.prototype.lc = n;
    yc.prototype.kc = n;
    var zc = 0;
    yc.prototype.reset = function (a, b, c, d, e) {
        this.Ra = "number" == typeof e ? e : zc++;
        d || y();
        this.Aa = a;
        this.Sc = b;
        delete this.lc;
        delete this.kc
    };
    yc.prototype.sc = function (a) {
        this.Aa = a
    };
    var L = function (a) {
        this.uc = a
    };
    L.prototype.w = n;
    L.prototype.Aa = n;
    L.prototype.Ab = n;
    L.prototype.vc = n;
    var Ac = function (a, b) {
        this.name = a;
        this.value = b
    };
    Ac.prototype.toString = function () {
        return this.name
    };
    var Bc = new Ac("SEVERE", 1E3),
        M = new Ac("WARNING", 900),
        Cc = new Ac("INFO", 800),
        Dc = new Ac("CONFIG", 700),
        Ec = new Ac("FINE", 500),
        Fc = new Ac("FINEST", 300);
    L.prototype.getName = function () {
        return this.uc
    };
    L.prototype.getParent = function () {
        return this.w
    };
    L.prototype.rc = function () {
        this.Ab || (this.Ab = {});
        return this.Ab
    };
    L.prototype.sc = function (a) {
        this.Aa = a
    };
    var Gc = function (a) {
        if (a.Aa) return a.Aa;
        if (a.w) return Gc(a.w);
        ua("Root logger has no level set.");
        return n
    };
    L.prototype.log = function (a, b, c) {
        if (a.value >= Gc(this).value) {
            a = this.Wc(a, b, c);
            b = "log:" + a.Sc;
            u.console && (u.console.timeStamp ? u.console.timeStamp(b) : u.console.markTimeline && u.console.markTimeline(b));
            u.msWriteProfilerMark && u.msWriteProfilerMark(b);
            for (b = this; b;) {
                c = b;
                var d = a;
                if (c.vc) for (var e = 0, f = k; f = c.vc[e]; e++) f(d);
                b = b.getParent()
            }
        }
    };
    L.prototype.Wc = function (a, b, c) {
        var d = new yc(a, String(b), this.uc);
        if (c) {
            d.lc = c;
            var e;
            var f = arguments.callee.caller;
            try {
                var h;
                var l = aa("window.location.href");
                if (w(c)) h = {
                        message: c,
                        name: "Unknown error",
                        lineNumber: "Not available",
                        fileName: l,
                        stack: "Not available"
                };
                else {
                    var p, r, t = q;
                    try {
                        p = c.lineNumber || c.ad || "Not available"
                    } catch (B) {
                        p = "Not available", t = m
                    }
                    try {
                        r = c.fileName || c.filename || c.sourceURL || u.$googDebugFname || l
                    } catch (Q) {
                        r = "Not available", t = m
                    }
                    h = t || !c.lineNumber || !c.fileName || !c.stack ? {
                        message: c.message,
                        name: c.name,
                        lineNumber: p,
                        fileName: r,
                        stack: c.stack || "Not available"
                    } : c
                }
                e = "Message: " + sa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(vc(f) + "-> ")
            } catch (Ud) {
                e = "Exception trying to expose exception! You win, we lose. " + Ud
            }
            d.kc = e
        }
        return d
    };
    var O = function (a, b) {
        N.log(Bc, a, b)
    };
    L.prototype.info = function (a, b) {
        this.log(Cc, a, b)
    };
    var P = function (a) {
        N.log(Ec, a, k)
    }, R = function (a) {
            N.log(Fc, a, k)
        }, Hc = {}, Ic = n,
        Jc = function (a) {
            Ic || (Ic = new L(""), Hc[""] = Ic, Ic.sc(Dc));
            var b;
            if (!(b = Hc[a])) {
                b = new L(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = Jc(a.substr(0, c));
                c.rc()[d] = b;
                b.w = c;
                Hc[a] = b
            }
            return b
        };
    var Kc = function () {
        this.Da = {}
    };
    A(Kc, ub);
    Kc.prototype.cb = Jc("goog.messaging.AbstractChannel");
    Kc.prototype.J = function (a) {
        a && a()
    };
    Kc.prototype.C = function () {
        return m
    };
    var Lc = function (a, b, c) {
        a.Da[b] = {
            B: c,
            Nb: q
        }
    };
    Kc.prototype.g = function () {
        Kc.p.g.call(this);
        delete this.cb;
        delete this.Da;
        delete this.Ib
    };
    var Mc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
        Oc = function (a) {
            if (Nc) {
                Nc = q;
                var b = u.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = Oc(c)[3] || n) && decodeURIComponent(c)) && c != b.hostname) Nc = m, g(Error())
                }
            }
            return a.match(Mc)
        }, Nc = G,
        Pc = function (a) {
            var b = Oc(a);
            a = b[1];
            var c = b[2],
                d = b[3],
                b = b[4],
                e = "";
            a && (e += a + ":");
            d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
            return e
        };
    var S = function (a, b) {
        var c;
        if (a instanceof S) this.t = b !== k ? b : a.t, Qc(this, a.A), c = a.Na, T(this), this.Na = c, Rc(this, a.ta), Sc(this, a.ia), Tc(this, a.kb), Uc(this, a.Q.Ja()), c = a.Ma, T(this), this.Ma = c;
        else if (a && (c = Oc(String(a)))) {
            this.t = !! b;
            Qc(this, c[1] || "", m);
            var d = c[2] || "";
            T(this);
            this.Na = d ? decodeURIComponent(d) : "";
            Rc(this, c[3] || "", m);
            Sc(this, c[4]);
            Tc(this, c[5] || "", m);
            Uc(this, c[6] || "", m);
            c = c[7] || "";
            T(this);
            this.Ma = c ? decodeURIComponent(c) : ""
        } else this.t = !! b, this.Q = new Vc(n, 0, this.t)
    };
    s = S.prototype;
    s.A = "";
    s.Na = "";
    s.ta = "";
    s.ia = n;
    s.kb = "";
    s.Ma = "";
    s.Zc = q;
    s.t = q;
    s.toString = function () {
        var a = [],
            b = this.A;
        b && a.push(Wc(b, Xc), ":");
        if (b = this.ta) {
            a.push("//");
            var c = this.Na;
            c && a.push(Wc(c, Xc), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.ia;
            b != n && a.push(":", String(b))
        }
        if (b = this.kb) this.ta && "/" != b.charAt(0) && a.push("/"), a.push(Wc(b, "/" == b.charAt(0) ? Yc : Zc));
        (b = this.Q.toString()) && a.push("?", b);
        (b = this.Ma) && a.push("#", Wc(b, $c));
        return a.join("")
    };
    s.Ja = function () {
        return new S(this)
    };
    var Qc = function (a, b, c) {
        T(a);
        a.A = c ? b ? decodeURIComponent(b) : "" : b;
        a.A && (a.A = a.A.replace(/:$/, ""))
    }, Rc = function (a, b, c) {
            T(a);
            a.ta = c ? b ? decodeURIComponent(b) : "" : b
        }, Sc = function (a, b) {
            T(a);
            b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.ia = b) : a.ia = n
        }, Tc = function (a, b, c) {
            T(a);
            a.kb = c ? b ? decodeURIComponent(b) : "" : b
        }, Uc = function (a, b, c) {
            T(a);
            b instanceof Vc ? (a.Q = b, a.Q.yb(a.t)) : (c || (b = Wc(b, ad)), a.Q = new Vc(b, 0, a.t))
        }, T = function (a) {
            a.Zc && g(Error("Tried to modify a read-only Uri"))
        };
    S.prototype.yb = function (a) {
        this.t = a;
        this.Q && this.Q.yb(a);
        return this
    };
    var Wc = function (a, b) {
        return w(a) ? encodeURI(a).replace(b, bd) : n
    }, bd = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }, Xc = /[#\/\?@]/g,
        Zc = /[\#\?:]/g,
        Yc = /[\#\?]/g,
        ad = /[\#\?@]/g,
        $c = /#/g,
        Vc = function (a, b, c) {
            this.u = a || n;
            this.t = !! c
        }, dd = function (a) {
            if (!a.i && (a.i = new rc, a.f = 0, a.u)) for (var b = a.u.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = n,
                        f = n;
                    0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                    e = decodeURIComponent(e.replace(/\+/g, " "));
                    e = cd(a, e);
                    a.add(e, f ?
                        decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
        };
    s = Vc.prototype;
    s.i = n;
    s.f = n;
    s.add = function (a, b) {
        dd(this);
        this.u = n;
        a = cd(this, a);
        var c = this.i.get(a);
        c || this.i.set(a, c = []);
        c.push(b);
        this.f++;
        return this
    };
    s.remove = function (a) {
        dd(this);
        a = cd(this, a);
        return this.i.va(a) ? (this.u = n, this.f -= this.i.get(a).length, this.i.remove(a)) : q
    };
    s.va = function (a) {
        dd(this);
        a = cd(this, a);
        return this.i.va(a)
    };
    s.ja = function () {
        dd(this);
        for (var a = this.i.S(), b = this.i.ja(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    s.S = function (a) {
        dd(this);
        var b = [];
        if (a) this.va(a) && (b = Ba(b, this.i.get(cd(this, a))));
        else {
            a = this.i.S();
            for (var c = 0; c < a.length; c++) b = Ba(b, a[c])
        }
        return b
    };
    s.set = function (a, b) {
        dd(this);
        this.u = n;
        a = cd(this, a);
        this.va(a) && (this.f -= this.i.get(a).length);
        this.i.set(a, [b]);
        this.f++;
        return this
    };
    s.get = function (a, b) {
        var c = a ? this.S(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    s.toString = function () {
        if (this.u) return this.u;
        if (!this.i) return "";
        for (var a = [], b = this.i.ja(), c = 0; c < b.length; c++) for (var d = b[c], e = encodeURIComponent(String(d)), d = this.S(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
        }
        return this.u = a.join("&")
    };
    s.Ja = function () {
        var a = new Vc;
        a.u = this.u;
        this.i && (a.i = this.i.Ja(), a.f = this.f);
        return a
    };
    var cd = function (a, b) {
        var c = String(b);
        a.t && (c = c.toLowerCase());
        return c
    };
    Vc.prototype.yb = function (a) {
        a && !this.t && (dd(this), this.u = n, qc(this.i, function (a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.u = n, this.i.set(cd(this, d), Ca(a)), this.f += a.length))
        }, this));
        this.t = a
    };
    var ed = function (a) {
        return function () {
            g(a)
        }
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var U = function (a, b) {
        this.O = [];
        this.cc = a;
        this.Ub = b || n
    };
    s = U.prototype;
    s.F = q;
    s.xa = q;
    s.mb = q;
    s.Zb = q;
    s.sb = q;
    s.Ka = 0;
    s.cancel = function (a) {
        if (this.F) this.ua instanceof U && this.ua.cancel();
        else {
            if (this.w) {
                var b = this.w;
                delete this.w;
                a ? b.cancel(a) : (b.Ka--, 0 >= b.Ka && b.cancel())
            }
            this.cc ? this.cc.call(this.Ub, this) : this.sb = m;
            this.F || this.bc(new fd)
        }
    };
    s.$b = function (a, b) {
        this.mb = q;
        gd(this, a, b)
    };
    var gd = function (a, b, c) {
        a.F = m;
        a.ua = c;
        a.xa = !b;
        hd(a)
    }, jd = function (a) {
            a.F && (a.sb || g(new id), a.sb = q)
        };
    U.prototype.B = function (a) {
        jd(this);
        kd(a);
        gd(this, m, a)
    };
    U.prototype.bc = function (a) {
        jd(this);
        kd(a);
        gd(this, q, a)
    };
    var kd = function (a) {
        D(!(a instanceof U), "An execution sequence may not be initiated with a blocking Deferred.")
    }, ld = function (a, b, c, d) {
            D(!a.Zb, "Blocking Deferreds can not be re-used");
            a.O.push([b, c, d]);
            a.F && hd(a)
        }, md = function (a, b) {
            var c = x(b.Yc, b);
            ld(a, c, n, k)
        };
    U.prototype.Yc = function (a) {
        var b = new U;
        ld(this, b.B, b.bc, b);
        a && (b.w = this, this.Ka++);
        return b
    };
    var nd = function (a) {
        return ya(a.O, function (a) {
            return ea(a[1])
        })
    }, hd = function (a) {
            a.ob && (a.F && nd(a)) && (u.clearTimeout(a.ob), delete a.ob);
            a.w && (a.w.Ka--, delete a.w);
            for (var b = a.ua, c = q, d = q; a.O.length && !a.mb;) {
                var e = a.O.shift(),
                    f = e[0],
                    h = e[1],
                    e = e[2];
                if (f = a.xa ? h : f) try {
                        var l = f.call(e || a.Ub, b);
                        l !== k && (a.xa = a.xa && (l == b || l instanceof Error), a.ua = b = l);
                        b instanceof U && (d = m, a.mb = m)
                } catch (p) {
                    b = p, a.xa = m, nd(a) || (c = m)
                }
            }
            a.ua = b;
            d && (ld(b, x(a.$b, a, m), x(a.$b, a, q)), b.Zb = m);
            c && (a.ob = u.setTimeout(ed(b), 0))
        }, id = function () {
            C.call(this)
        };
    A(id, C);
    id.prototype.message = "Deferred has already fired";
    id.prototype.name = "AlreadyCalledError";
    var fd = function () {
        C.call(this)
    };
    A(fd, C);
    fd.prototype.message = "Deferred was canceled";
    fd.prototype.name = "CanceledError";
    var od = {
        1: "NativeMessagingTransport",
        2: "FrameElementMethodTransport",
        3: "IframeRelayTransport",
        4: "IframePollingTransport",
        5: "FlashTransport",
        6: "NixTransport"
    }, pd = ["pu", "lru", "pru", "lpu", "ppu"],
        V = {}, rd = function (a) {
            for (var b = qd, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        }, qd = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        N = Jc("goog.net.xpc");
    var W = function (a) {
        this.l = a || I()
    };
    A(W, ub);
    W.prototype.na = 0;
    W.prototype.e = function () {
        return this.l.e()
    };
    W.prototype.getName = function () {
        return od[this.na] || ""
    };
    var sd = function (a, b) {
        this.l = b || I();
        this.a = a;
        this.ra = [];
        this.Bc = x(this.Kc, this)
    };
    A(sd, W);
    s = sd.prototype;
    s.na = 2;
    s.gb = q;
    s.P = 0;
    s.J = function () {
        0 == X(this.a) ? (this.M = this.a.ba, this.M.XPC_toOuter = x(this.Pb, this)) : this.Ob()
    };
    s.Ob = function () {
        var a = m;
        try {
            this.M || (this.M = this.e().frameElement), this.M && this.M.XPC_toOuter && (this.bb = this.M.XPC_toOuter, this.M.XPC_toOuter.XPC_toInner = x(this.Pb, this), a = q, this.send("tp", "SETUP_ACK"), this.a.L())
        } catch (b) {
            O("exception caught while attempting setup: " + b)
        }
        a && (this.Sb || (this.Sb = x(this.Ob, this)), this.e().setTimeout(this.Sb, 100))
    };
    s.fb = function (a) {
        0 == X(this.a) && !this.a.C() && "SETUP_ACK" == a ? (this.bb = this.M.XPC_toOuter.XPC_toInner, this.a.L()) : g(Error("Got unexpected transport message."))
    };
    s.Pb = function (a, b) {
        !this.gb && 0 == this.ra.length ? this.a.I(a, b) : (this.ra.push({
            Dc: a,
            eb: b
        }), 1 == this.ra.length && (this.P = this.e().setTimeout(this.Bc, 1)))
    };
    s.Kc = function () {
        for (; this.ra.length;) {
            var a = this.ra.shift();
            this.a.I(a.Dc, a.eb)
        }
    };
    s.send = function (a, b) {
        this.gb = m;
        this.bb(a, b);
        this.gb = q
    };
    s.g = function () {
        sd.p.g.call(this);
        this.M = this.bb = n
    };
    var Y = function (a, b) {
        this.l = b || I();
        this.a = a;
        this.pa = this.a.b.ppu;
        this.Ec = this.a.b.lpu;
        this.Ha = []
    }, td, ud;
    A(Y, W);
    s = Y.prototype;
    s.yc = 5;
    s.na = 4;
    s.O = 0;
    s.fa = q;
    s.Y = q;
    s.Kb = n;
    var vd = function (a) {
        return "googlexpc_" + a.a.name + "_msg"
    }, wd = function (a) {
            return "googlexpc_" + a.a.name + "_ack"
        }, yd = function (a) {
            try {
                if (!a.aa && xd(a.a)) return a.a.K.frames || {}
            } catch (b) {
                P("error retrieving peer frames")
            }
            return {}
        };
    Y.prototype.J = function () {
        if (!this.aa && xd(this.a)) {
            P("transport connect called");
            if (!this.Y) {
                P("initializing...");
                var a = vd(this);
                this.da = zd(this, a);
                this.$a = this.e().frames[a];
                a = wd(this);
                this.ca = zd(this, a);
                this.Za = this.e().frames[a];
                this.Y = m
            }
            if (!Ad(this, vd(this)) || !Ad(this, wd(this))) {
                R("foreign frames not (yet) present");
                if (1 == X(this.a)) this.Kb || 0 < this.yc-- || (R("Inner peer reconnect triggered."), this.a.name = rd(10), R("switching channels: " + this.a.name), Bd(this), this.Y = q, this.Kb = zd(this, "googlexpc_reconnect_" +
                        this.a.name));
                else if (0 == X(this.a)) {
                    R("outerPeerReconnect called");
                    for (var a = yd(this), b = a.length, c = 0; c < b; c++) {
                        var d;
                        try {
                            a[c] && a[c].name && (d = a[c].name)
                        } catch (e) {}
                        if (d) {
                            var f = d.split("_");
                            if (3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                                this.a.name = f[2];
                                Bd(this);
                                this.Y = q;
                                break
                            }
                        }
                    }
                }
                this.e().setTimeout(x(this.J, this), 100)
            } else P("foreign frames present"), this.Fb = new Cd(this, yd(this)[vd(this)], x(this.Ac, this)), this.Db = new Cd(this, yd(this)[wd(this)], x(this.zc, this)), this.Hb()
        }
    };
    var zd = function (a, b) {
        R("constructing sender frame: " + b);
        var c;
        c = document.createElement("iframe");
        var d = c.style;
        d.position = "absolute";
        d.top = "-10px";
        d.left = "10px";
        d.width = "1px";
        d.height = "1px";
        c.id = c.name = b;
        c.src = a.pa + "#INITIAL";
        a.e().document.body.appendChild(c);
        return c
    }, Bd = function (a) {
            R("deconstructSenderFrames called");
            a.da && (a.da.parentNode.removeChild(a.da), a.da = n, a.$a = n);
            a.ca && (a.ca.parentNode.removeChild(a.ca), a.ca = n, a.Za = n)
        }, Ad = function (a, b) {
            R("checking for receive frame: " + b);
            try {
                var c = yd(a)[b];
                if (!c || 0 != c.location.href.indexOf(a.Ec)) return q
            } catch (d) {
                return q
            }
            return m
        };
    Y.prototype.Hb = function () {
        var a = yd(this);
        !a[wd(this)] || !a[vd(this)] ? (this.ac || (this.ac = x(this.Hb, this)), this.e().setTimeout(this.ac, 100), P("local frames not (yet) present")) : (this.Wb = new Dd(this.pa, this.$a), this.Ia = new Dd(this.pa, this.Za), P("local frames ready"), this.e().setTimeout(x(function () {
            this.Wb.send("SETUP");
            this.fa = m;
            P("SETUP sent")
        }, this), 100))
    };
    var Ed = function (a) {
        if (a.hb && a.Qb) {
            if (a.a.L(), a.ha) {
                P("delivering queued messages (" + a.ha.length + ")");
                for (var b = 0, c; b < a.ha.length; b++) c = a.ha[b], a.a.I(c.Fc, c.eb);
                delete a.ha
            }
        } else R("checking if connected: ack sent:" + a.hb + ", ack rcvd: " + a.Qb)
    };
    Y.prototype.Ac = function (a) {
        R("msg received: " + a);
        if ("SETUP" == a) this.Ia && (this.Ia.send("SETUP_ACK"), R("SETUP_ACK sent"), this.hb = m, Ed(this));
        else if (this.a.C() || this.hb) {
            var b = a.indexOf("|"),
                c = a.substring(0, b);
            a = a.substring(b + 1);
            b = c.indexOf(",");
            if (-1 == b) {
                var d;
                this.Ia.send("ACK:" + c);
                Fd(this, a)
            } else d = c.substring(0, b), this.Ia.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.lb = []), this.lb.push(a), b == c && (Fd(this, this.lb.join("")), delete this.lb)
        } else N.log(M,
                "received msg, but channel is not connected", k)
    };
    Y.prototype.zc = function (a) {
        R("ack received: " + a);
        "SETUP_ACK" == a ? (this.fa = q, this.Qb = m, Ed(this)) : this.a.C() ? this.fa ? parseInt(a.split(":")[1], 10) == this.O ? (this.fa = q, Gd(this)) : N.log(M, "got ack with wrong sequence", k) : N.log(M, "got unexpected ack", k) : N.log(M, "received ack, but channel not connected", k)
    };
    var Gd = function (a) {
        if (!a.fa && a.Ha.length) {
            var b = a.Ha.shift();
            ++a.O;
            a.Wb.send(a.O + b);
            R("msg sent: " + a.O + b);
            a.fa = m
        }
    }, Fd = function (a, b) {
            var c = b.indexOf(":"),
                d = b.substr(0, c),
                c = b.substring(c + 1);
            a.a.C() ? a.a.I(d, c) : ((a.ha || (a.ha = [])).push({
                Fc: d,
                eb: c
            }), R("queued delivery"))
        };
    Y.prototype.Wa = 3800;
    Y.prototype.send = function (a, b) {
        var c = a + ":" + b;
        if (!F || b.length <= this.Wa) this.Ha.push("|" + c);
        else for (var d = b.length, e = Math.ceil(d / this.Wa), f = 0, h = 1; f < d;) this.Ha.push("," + h + "/" + e + "|" + c.substr(f, this.Wa)), h++, f += this.Wa;
        Gd(this)
    };
    Y.prototype.g = function () {
        Y.p.g.call(this);
        var a = Hd;
        Aa(a, this.Fb);
        Aa(a, this.Db);
        this.Fb = this.Db = n;
        sb(this.da);
        sb(this.ca);
        this.$a = this.Za = this.da = this.ca = n
    };
    var Hd = [],
        Id = x(function () {
            var a = Hd,
                b, c = q;
            try {
                for (var d = 0; b = a[d]; d++) {
                    var e;
                    if (!(e = c)) {
                        var f = b,
                            h = f.Yb.location.href;
                        if (h != f.Xb) {
                            f.Xb = h;
                            var l = h.split("#")[1];
                            l && (l = l.substr(1), f.Jc(decodeURIComponent(l)));
                            e = m
                        } else e = q
                    }
                    c = e
                }
            } catch (p) {
                if (N.info("receive_() failed: " + p), b = b.k.a, N.info("Transport Error"), b.close(), !a.length) return
            }
            a = y();
            c && (td = a);
            ud = window.setTimeout(Id, 1E3 > a - td ? 10 : 100)
        }, Y),
        Jd = function () {
            P("starting receive-timer");
            td = y();
            ud && window.clearTimeout(ud);
            ud = window.setTimeout(Id, 10)
        }, Dd = function (a,
            b) {
            this.pa = a;
            this.tc = b;
            this.zb = 0
        };
    Dd.prototype.send = function (a) {
        this.zb = ++this.zb % 2;
        a = this.pa + "#" + this.zb + encodeURIComponent(a);
        try {
            G ? this.tc.location.href = a : this.tc.location.replace(a)
        } catch (b) {
            O("sending failed", b)
        }
        Jd()
    };
    var Cd = function (a, b, c) {
        this.k = a;
        this.Yb = b;
        this.Jc = c;
        this.Xb = this.Yb.location.href.split("#")[0] + "#INITIAL";
        Hd.push(this);
        Jd()
    };
    var Ld = function (a, b) {
        this.l = b || I();
        this.a = a;
        this.Cc = this.a.b.pru;
        this.Mb = this.a.b.ifrid;
        G && Kd()
    };
    A(Ld, W);
    if (G) var Md = [],
    Nd = 0, Kd = function () {
        Nd || (Nd = window.setTimeout(function () {
            Od()
        }, 1E3))
    }, Od = function (a) {
        var b = y();
        for (a = a || 3E3; Md.length && b - Md[0].timestamp >= a;) {
            var c = Md.shift().Ic;
            sb(c);
            R("iframe removed")
        }
        Nd = window.setTimeout(Pd, 1E3)
    }, Pd = function () {
        Od()
    };
    var Qd = {};
    Ld.prototype.na = 3;
    Ld.prototype.J = function () {
        this.e().xpcRelay || (this.e().xpcRelay = Rd);
        this.send("tp", "SETUP")
    };
    var Rd = function (a, b) {
        var c = b.indexOf(":"),
            d = b.substr(0, c),
            e = b.substr(c + 1);
        if (!F || -1 == (c = d.indexOf("|"))) var f = d;
        else {
            var f = d.substr(0, c),
                d = d.substr(c + 1),
                c = d.indexOf("+"),
                h = d.substr(0, c),
                c = parseInt(d.substr(c + 1), 10),
                l = Qd[h];
            l || (l = Qd[h] = {
                oc: [],
                pc: 0,
                nc: 0
            }); - 1 != d.indexOf("++") && (l.nc = c + 1);
            l.oc[c] = e;
            l.pc++;
            if (l.pc != l.nc) return;
            e = l.oc.join("");
            delete Qd[h]
        }
        V[a].I(f, decodeURIComponent(e))
    };
    Ld.prototype.fb = function (a) {
        "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.a.L()) : "SETUP_ACK" == a && this.a.L()
    };
    Ld.prototype.send = function (a, b) {
        var c = encodeURIComponent(b),
            d = c.length;
        if (F && 1800 < d) for (var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36), f = 0, h = 0; f < d; h++) {
                var l = c.substr(f, 1800),
                    f = f + 1800;
                Sd(this, a, l, e + (f >= d ? "++" : "+") + h)
        } else Sd(this, a, c)
    };
    var Sd = function (a, b, c, d) {
        if (F) {
            var e = a.e().document.createElement("div");
            e.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
            e = e.childNodes[0];
            e.xpcOnload = Td
        } else e = a.e().document.createElement("iframe"), G ? Md.push({
                timestamp: y(),
                Ic: e
            }) : Jb(e, "load", Td);
        var f = e.style;
        f.visibility = "hidden";
        f.width = e.style.height = "0px";
        f.position = "absolute";
        f = a.Cc;
        f += "#" + a.a.name;
        a.Mb && (f += "," + a.Mb);
        f += "|" + b;
        d && (f += "|" + d);
        f += ":" + c;
        e.src = f;
        a.e().document.body.appendChild(e);
        R("msg sent: " + f)
    }, Td = function () {
            R("iframe-load");
            sb(this)
        };
    Ld.prototype.g = function () {
        Ld.p.g.call(this);
        G && Od(0)
    };
    var Z = function (a, b, c, d, e) {
        this.l = c || I();
        this.a = a;
        this.v = e || 2;
        D(1 <= this.v);
        D(2 >= this.v);
        this.Cb = b || "*";
        this.Ya = new ec(this);
        this.oa = new bc(100, this.e());
        this.Ca = !! d;
        this.U = new U;
        this.T = new U;
        this.V = new U;
        this.xc = rd(10);
        this.Ea = n;
        this.Ca ? 1 == X(this.a) ? md(this.V, this.U) : md(this.V, this.T) : (md(this.V, this.U), 2 == this.v && md(this.V, this.T));
        ld(this.V, this.Gb, n, this);
        this.V.B(m);
        this.Ya.ab(this.oa, "tick", this.Eb);
        N.info("NativeMessagingTransport created.  protocolVersion=" + this.v + ", oneSidedHandshake=" + this.Ca +
            ", role=" + X(this.a))
    };
    A(Z, W);
    Z.prototype.n = n;
    Z.prototype.Y = q;
    Z.prototype.na = 1;
    var Vd = {}, Xd = function (a) {
            var b = a.Sa.data;
            if (!w(b)) return q;
            var c = b.indexOf("|"),
                d = b.indexOf(":");
            if (-1 == c || -1 == d) return q;
            var e = b.substring(0, c),
                c = b.substring(c + 1, d),
                b = b.substring(d + 1);
            P("messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
            if (d = V[e]) return d.I(c, b, a.Sa.origin), m;
            a = Wd(b)[0];
            for (var f in V) if (d = V[f], 1 == X(d) && !d.C() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) return P("changing channel name to " + e), d.name = e, delete V[f], V[e] = d, d.I(c, b), m;
            N.info('channel name mismatch; message ignored"');
            return q
        };
    Z.prototype.fb = function (a) {
        var b = Wd(a);
        a = b[1];
        switch (b[0]) {
        case "SETUP_ACK":
            Yd(this, 1);
            this.U.F || this.U.B(m);
            break;
        case "SETUP_ACK_NTPV2":
            2 == this.v && (Yd(this, 2), this.U.F || this.U.B(m));
            break;
        case "SETUP":
            Yd(this, 1);
            Zd(this, 1);
            break;
        case "SETUP_NTPV2":
            if (2 == this.v) {
                b = this.n;
                Yd(this, 2);
                Zd(this, 2);
                if ((1 == b || this.Ea != n) && this.Ea != a) N.info("Sending SETUP and changing peer ID to: " + a), $d(this);
                this.Ea = a
            }
        }
    };
    var $d = function (a) {
        D(!(1 == a.v && 2 == a.n));
        if (2 == a.v && (a.n == n || 2 == a.n)) {
            var b;
            b = "SETUP_NTPV2," + a.xc;
            a.send("tp", b)
        }(a.n == n || 1 == a.n) && a.send("tp", "SETUP")
    }, Zd = function (a, b) {
            D(1 != a.v || 2 != b, "Shouldn't try to send a v2 setup ack in v1 mode.");
            if (2 == a.v && (a.n == n || 2 == a.n) && 2 == b) a.send("tp", "SETUP_ACK_NTPV2");
            else if ((a.n == n || 1 == a.n) && 1 == b) a.send("tp", "SETUP_ACK");
            else return;
            a.T.F || a.T.B(m)
        }, Yd = function (a, b) {
            b > a.n && (a.n = b);
            1 == a.n && (!a.T.F && !a.Ca && a.T.B(m), a.Ea = n)
        };
    s = Z.prototype;
    s.J = function () {
        var a = this.e(),
            b = ia(a),
            c = Vd[b];
        "number" == typeof c || (c = 0);
        0 == c && Jb(a.postMessage ? a : a.document, "message", Xd, q, Z);
        Vd[b] = c + 1;
        this.Y = m;
        this.Eb()
    };
    s.Eb = function () {
        var a = 0 == X(this.a);
        this.Ca && a || this.a.C() || this.aa ? this.oa.stop() : (this.oa.start(), $d(this))
    };
    s.send = function (a, b) {
        var c = this.a.K;
        c ? (this.send = function (a, b) {
            var f = this,
                h = this.a.name;
            this.Ga = cc(function () {
                f.Ga = 0;
                try {
                    var l = c.postMessage ? c : c.document;
                    l.postMessage ? (l.postMessage(h + "|" + a + ":" + b, f.Cb), P("send(): service=" + a + " payload=" + b + " to hostname=" + f.Cb)) : N.log(M, "Peer window had no postMessage function.", k)
                } catch (p) {
                    N.log(M, "Error performing postMessage, ignoring.", p)
                }
            }, 0)
        }, this.send(a, b)) : P("send(): window not ready")
    };
    s.Gb = function () {
        this.a.L(1 == this.v || 1 == this.n ? 200 : k)
    };
    s.g = function () {
        if (this.Y) {
            var a = this.e(),
                b = ia(a),
                c = Vd[b];
            Vd[b] = c - 1;
            1 == c && Qb(a.postMessage ? a : a.document, "message", Xd, q, Z)
        }
        this.Ga && (ac.clearTimeout(this.Ga), this.Ga = 0);
        vb(this.Ya);
        delete this.Ya;
        vb(this.oa);
        delete this.oa;
        this.U.cancel();
        delete this.U;
        this.T.cancel();
        delete this.T;
        this.V.cancel();
        delete this.V;
        delete this.send;
        Z.p.g.call(this)
    };
    var Wd = function (a) {
        a = a.split(",");
        a[1] = a[1] || n;
        return a
    };
    var ae = function (a, b) {
        this.l = b || I();
        this.a = a;
        this.Jb = a.at || "";
        this.Lb = a.rat || "";
        var c = this.e();
        if (!c.nix_setup_complete) try {
                c.execScript("Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function",
                    "vbscript"), c.nix_setup_complete = m
        } catch (d) {
            O("exception caught while attempting global setup: " + d)
        }
        this.GCXPC____NIXJS_handle_message = this.Hc;
        this.GCXPC____NIXJS_create_channel = this.Gc
    };
    A(ae, W);
    s = ae.prototype;
    s.na = 6;
    s.ga = q;
    s.W = n;
    s.J = function () {
        0 == X(this.a) ? this.Tb() : this.Rb()
    };
    s.Tb = function () {
        if (!this.ga) {
            var a = this.a.ba;
            try {
                a.contentWindow.opener = (0, this.e().GCXPC____NIXVBS_get_wrapper)(this, this.Jb), this.ga = m
            } catch (b) {
                O("exception caught while attempting setup: " + b)
            }
            this.ga || this.e().setTimeout(x(this.Tb, this), 100)
        }
    };
    s.Rb = function () {
        if (!this.ga) {
            try {
                var a = this.e().opener;
                if (a && "GCXPC____NIXVBS_container" in a) {
                    this.W = a;
                    if (this.W.GetAuthToken() != this.Lb) {
                        O("Invalid auth token from other party");
                        return
                    }
                    this.W.CreateChannel((0, this.e().GCXPC____NIXVBS_get_wrapper)(this, this.Jb));
                    this.ga = m;
                    this.a.L()
                }
            } catch (b) {
                O("exception caught while attempting setup: " + b);
                return
            }
            this.ga || this.e().setTimeout(x(this.Rb, this), 100)
        }
    };
    s.Gc = function (a) {
        ("unknown" != typeof a || !("GCXPC____NIXVBS_container" in a)) && O("Invalid NIX channel given to createChannel_");
        this.W = a;
        this.W.GetAuthToken() != this.Lb ? O("Invalid auth token from other party") : this.a.L()
    };
    s.Hc = function (a, b) {
        this.e().setTimeout(x(function () {
            this.a.I(a, b)
        }, this), 1)
    };
    s.send = function (a, b) {
        "unknown" !== typeof this.W && O("NIX channel not connected");
        this.W.SendMessage(a, b)
    };
    s.g = function () {
        ae.p.g.call(this);
        this.W = n
    };
    var ce = function (a, b) {
        this.Da = {};
        for (var c = 0, d; d = pd[c]; c++) d in a && !/^https?:\/\//.test(a[d]) && g(Error("URI " + a[d] + " is invalid for field " + d));
        this.b = a;
        this.name = this.b.cn || rd(10);
        this.l = b || I();
        this.Ba = [];
        this.Fa = new ec(this);
        a.lpu = a.lpu || Pc(this.l.e().location.href) + "/robots.txt";
        a.ppu = a.ppu || Pc(a.pu || "") + "/robots.txt";
        V[this.name] = this;
        Jb(window, "unload", be);
        N.info("CrossPageChannel created: " + this.name)
    };
    A(ce, Kc);
    var de = /^%*tp$/,
        ee = /^%+tp$/;
    s = ce.prototype;
    s.X = n;
    s.D = n;
    s.k = n;
    s.qb = 1;
    s.C = function () {
        return 2 == this.qb
    };
    s.K = n;
    s.ba = n;
    var xd = function (a) {
        try {
            return !!a.K && !Boolean(a.K.closed)
        } catch (b) {
            return q
        }
    }, he = function (a) {
            var b = document.body;
            N.info("createPeerIframe()");
            var c = a.b.ifrid;
            c || (c = a.b.ifrid = "xpcpeer" + rd(4));
            var d = I(b).createElement("IFRAME");
            d.id = d.name = c;
            d.style.width = d.style.height = "100%";
            fe(a);
            a.D = new U(k, a);
            var e = ge(a);
            a.Fa.La(d, "load", a.D.B, q, a.D);
            Ma || G ? window.setTimeout(x(function () {
                b.appendChild(d);
                d.src = e.toString();
                N.info("peer iframe created (" + c + ")")
            }, a), 1) : (d.src = e.toString(), b.appendChild(d), N.info("peer iframe created (" +
                c + ")"))
        }, fe = function (a) {
            a.D && (a.D.cancel(), a.D = n);
            a.Ba.length = 0;
            a = a.Fa;
            wa(a.h, Sb);
            a.h.length = 0
        }, ge = function (a) {
            var b = a.b.pu;
            w(b) && (b = a.b.pu = new S(b));
            var c = {};
            c.cn = a.name;
            c.tp = a.b.tp;
            c.osh = a.b.osh;
            a.b.lru && (c.pru = a.b.lru);
            a.b.lpu && (c.ppu = a.b.lpu);
            a.b.ppu && (c.lpu = a.b.ppu);
            (a = a.b.role) && (c.role = 1 == a ? 0 : 1);
            a = b;
            c = jc(c);
            T(a);
            a.Q.set("xpc", c);
            return b
        };
    s = ce.prototype;
    s.J = function (a) {
        this.pb = a || ba;
        this.D ? ld(this.D, this.qc, n, k) : this.qc()
    };
    s.qc = function () {
        N.info("continueConnection_()");
        this.D = n;
        this.b.ifrid && (this.ba = w(this.b.ifrid) ? this.l.N.getElementById(this.b.ifrid) : this.b.ifrid);
        if (this.ba) {
            var a = this.ba.contentWindow;
            a || (a = window.frames[this.b.ifrid]);
            this.K = a
        }
        this.K || (window == window.top && g(Error("CrossPageChannel: Can't connect, peer window-object not set.")), this.K = window.parent);
        if (!this.k) {
            if (!this.b.tp) {
                var a = this.b,
                    b;
                if (ea(document.postMessage) || ea(window.postMessage) || F && window.postMessage) b = 1;
                else if (Ma) b = 2;
                else if (F &&
                    this.b.pru) b = 3;
                else {
                    var c;
                    if (c = F) {
                        c = q;
                        try {
                            b = window.opener, window.opener = {}, c = yb(window, "opener"), window.opener = b
                        } catch (d) {}
                    }
                    b = c ? 6 : 4
                }
                a.tp = b
            }
            switch (this.b.tp) {
            case 1:
                this.k = new Z(this, this.b.ph, this.l, !! this.b.osh, this.b.nativeProtocolVersion || 2);
                break;
            case 6:
                this.k = new ae(this, this.l);
                break;
            case 2:
                this.k = new sd(this, this.l);
                break;
            case 3:
                this.k = new Ld(this, this.l);
                break;
            case 4:
                this.k = new Y(this, this.l)
            }
            this.k ? N.info("Transport created: " + this.k.getName()) : g(Error("CrossPageChannel: No suitable transport found!"))
        }
        for (this.k.J(); 0 <
            this.Ba.length;) this.Ba.shift()()
    };
    s.close = function () {
        fe(this);
        this.qb = 3;
        vb(this.k);
        this.pb = this.k = n;
        vb(this.X);
        this.X = n;
        N.info('Channel "' + this.name + '" closed')
    };
    s.L = function (a) {
        this.C() || this.X && 0 != this.X.la || (this.qb = 2, N.info('Channel "' + this.name + '" connected'), vb(this.X), a ? (this.X = new dc(this.pb, a), this.X.start()) : (this.X = n, this.pb()))
    };
    s.Gb = ce.prototype.L;
    s.send = function (a, b) {
        this.C() ? xd(this) ? (fa(b) && (b = jc(b)), this.k.send(ie(a), b)) : (O("Peer has disappeared."), this.close()) : O("Can't send. Channel not connected.")
    };
    s.I = function (a, b, c) {
        if (this.D) this.Ba.push(x(this.I, this, a, b, c));
        else {
            var d = this.b.ph;
            if (/^[\s\xa0]*$/.test(c == n ? "" : String(c)) || /^[\s\xa0]*$/.test(d == n ? "" : String(d)) || c == this.b.ph) if (this.aa) N.log(M, "CrossPageChannel::xpcDeliver(): Disposed.", k);
                else if (!a || "tp" == a) this.k.fb(b);
            else if (this.C()) {
                if (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = ee.test(a) ? a.substring(1) : a, c = this.Da[a], c || (this.Ib ? c = {
                    B: la(this.Ib, a),
                    Nb: fa(b)
                } : (this.cb.log(M, 'Unknown service name "' + a + '"', k), c = n)), c) {
                    var e;
                    a: {
                        if ((d =
                            c.Nb) && w(b)) try {
                                e = gc(b);
                                break a
                        } catch (f) {
                            this.cb.log(M, "Expected JSON payload for " + a + ', was "' + b + '"', k);
                            e = n;
                            break a
                        } else if (!d && !w(b)) {
                            e = jc(b);
                            break a
                        }
                        e = b
                    }
                    e != n && c.B(e)
                }
            } else N.info("CrossPageChannel::xpcDeliver(): Not connected.");
            else N.log(M, 'Message received from unapproved origin "' + c + '" - rejected.', k)
        }
    };
    var ie = function (a) {
        de.test(a) && (a = "%" + a);
        return a.replace(/[%:|]/g, encodeURIComponent)
    }, X = function (a) {
            var b = a.b.role;
            return b ? b : window.parent == a.K ? 1 : 0
        };
    ce.prototype.g = function () {
        this.close();
        this.ba = this.K = n;
        delete V[this.name];
        vb(this.Fa);
        delete this.Fa;
        ce.p.g.call(this)
    };
    var be = function () {
        for (var a in V) vb(V[a])
    };
    var je = function (a, b, c, d, e, f) {
        d = new S(d || window.location.href);
        var h = new S;
        e = e ? e : Math.floor(1E3 * Math.random()) + ".talkgadget.google.com";
        Rc(h, e);
        Tc(h, "/talkgadget/d");
        T(h);
        h.Q.set("token", a);
        f && Sc(h, f);
        a = c || "wcs-iframe";
        c = "#" + a + " { display: none; }";
        var l = I(k),
            p = n;
        if (F) l = p = l.N.createStyleSheet(), F ? l.cssText = c : l.innerHTML = c;
        else {
            var r = tb(l, "head")[0];
            r || (p = tb(l, "body")[0], r = l.fc("head"), p.parentNode.insertBefore(r, p));
            var t = p = l.fc("style");
            F ? t.cssText = c : t.innerHTML = c;
            l.appendChild(r, p)
        }
        c = {};
        l = new S;
        Rc(l, e);
        f && Sc(l, f);
        Tc(l, "/talkgadget/xpc_blank");
        "http" == d.A || "https" == d.A ? (Qc(h, d.A), Qc(l, d.A), f = new S, Qc(f, d.A), Rc(f, d.ta), 80 != d.ia && Sc(f, d.ia), Tc(f, b)) : (Qc(h, "http"), Qc(l, "http"), f = new S("http://www.google.com/xpc_blank"));
        c.lpu = f.toString();
        c.ppu = l.toString();
        c.ifrid = a;
        c.pu = h.toString();
        ce.call(this, c)
    };
    A(je, ce);
    z("chat.WcsCrossPageChannel", je);
    var $ = function (a, b, c, d, e) {
        this.readyState = 0;
        this.rb = [];
        this.onopen = b.onopen;
        this.onmessage = b.onmessage;
        this.onerror = b.onerror;
        this.onclose = b.onclose;
        this.ma = c || new je(a, "/_ah/channel/xpc_blank");
        this.Qa = c ? d : "wcs-iframe";
        this.dc = e || new ke(a);
        document.body || g("document.body is not defined -- do not create socket from script in <head>.");
        he(this.ma);
        Lc(this.ma, "onMessage", x(this.Nc, this));
        Lc(this.ma, "onError", x(this.Mc, this));
        Lc(this.ma, "onClosed", x(this.hc, this));
        this.ma.J(x(this.Lc, this))
    };
    $.prototype.send = function () {
        return q
    };
    $.prototype.close = function () {
        this.hc()
    };
    $.prototype.Vc = function () {
        for (var a = 0, b; b = this.rb[a]; a++) switch (b.type) {
            case 0:
                this.onopen(b.Va);
                break;
            case 1:
                this.onmessage(b.Va);
                break;
            case 2:
                this.onerror(b.Va);
                break;
            case 3:
                this.onclose(b.Va)
        }
        this.rb = []
    };
    var le = function (a, b, c) {
        a.rb.push({
            type: b,
            Va: c
        });
        window.setTimeout(x(a.Vc, a), 1)
    }, me = function (a) {
            return "string" == typeof a ? window.JSON && window.JSON.parse ? window.JSON.parse(a) : gc(a) : a
        };
    $.prototype.Nc = function (a) {
        var b = me(a);
        if (b) {
            a = b.m;
            for (var b = b.s, c = this.dc, d = [], e = 0, f = 0; f < a.length; f++) {
                for (var h = a.charCodeAt(f); 255 < h;) d[e++] = h & 255, h >>= 8;
                d[e++] = h
            }
            d.push(c.Ra);
            c = c.Oc;
            c.reset();
            c.update(d);
            a: if (d = c.ya(), !da(d) || !da(b) || d.length != b.length) b = q;
            else {
                c = d.length;
                for (e = 0; e < c; e++) if (d[e] !== b[e]) {
                        b = q;
                        break a
                    }
                b = m
            }
            b && (le(this, 1, {
                data: a
            }), this.dc.Ra++)
        }
    };
    $.prototype.Mc = function (a) {
        (a = me(a)) && le(this, 2, {
            description: a.d,
            code: a.c
        })
    };
    $.prototype.Lc = function () {
        this.readyState = 1;
        le(this, 0, {})
    };
    $.prototype.hc = function () {
        this.ma.close();
        this.readyState = 3;
        le(this, 3, {});
        if (this.Qa) {
            var a = new nb,
                b = w(this.Qa) ? a.N.getElementById(this.Qa) : this.Qa;
            b && a.removeNode(b)
        }
    };
    var ke = function (a) {
        for (; 0 != a.length % 4;) a += ".";
        this.Ra = 0;
        try {
            if (!Ya) {
                Ya = {};
                Za = {};
                $a = {};
                for (var b = 0; 65 > b; b++) Ya[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b), Za[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b), $a[Za[b]] = b
            }
            for (var b = $a, c = [], d = 0; d < a.length;) {
                var e = b[a.charAt(d++)],
                    f = d < a.length ? b[a.charAt(d)] : 0;
                ++d;
                var h = d < a.length ? b[a.charAt(d)] : 0;
                ++d;
                var l = d < a.length ? b[a.charAt(d)] : 0;
                ++d;
                (e == n || f == n || h == n || l == n) && g(Error());
                c.push(e <<
                    2 | f >> 4);
                64 != h && (c.push(f << 4 & 240 | h >> 2), 64 != l && c.push(h << 6 & 192 | l))
            }
            this.mc = c
        } catch (p) {
            p.message && g(Error("The provided token is invalid (" + p.name + ": " + p.message + ")")), g(Error("The provided token is invalid."))
        }
        this.o = new cb;
        this.Oc = new bb(this.o, this.mc, this.mc.length)
    };
    z("goog.appengine.Socket", $);
    z("goog.appengine.Socket.ReadyState", {
        CONNECTING: 0,
        OPEN: 1,
        bd: 2,
        CLOSED: 3
    });
    z("goog.appengine.Socket.ReadyState.CONNECTING", 0);
    z("goog.appengine.Socket.ReadyState.OPEN", 1);
    z("goog.appengine.Socket.ReadyState.CLOSING", 2);
    z("goog.appengine.Socket.ReadyState.CLOSED", 3);
    z("goog.appengine.Socket.prototype.send", $.prototype.send);
    z("goog.appengine.Socket.prototype.close", $.prototype.close);
    var ne = function (a) {
        this.$c = a
    }, oe = {
            onopen: function () {},
            onclose: function () {},
            onerror: function () {},
            onmessage: function () {}
        };
    ne.prototype.open = function (a) {
        a = a || oe;
        return new $(this.$c, a)
    };
    z("goog.appengine.Channel", ne);
    z("goog.appengine.Channel.prototype.open", ne.prototype.open);
})()