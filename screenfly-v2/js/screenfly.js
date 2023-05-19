


// path for jquery 
$(function() {
    $.fn.size = function() {
        return this.length;
    }
});


(window.Modernizr = (function (a, b, c) {
    function y(a) {
        j.cssText = a;
    }
    function z(a, b) {
        return y(m.join(a + ";") + (b || ""));
    }
    function A(a, b) {
        return typeof a === b;
    }
    function B(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function C(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : A(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function D() {
        e.input = (function (c) {
            for (var d = 0, e = c.length; d < e; d++) q[c[d]] = c[d] in k;
            return q.list && (q.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), q;
        })("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
    }
    var d = "2.6.1",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        n = { svg: "http://www.w3.org/2000/svg" },
        o = {},
        p = {},
        q = {},
        r = [],
        s = r.slice,
        t,
        u = function (a, c, d, e) {
            var f,
                i,
                j,
                k = b.createElement("div"),
                l = b.body,
                m = l ? l : b.createElement("body");
            if (parseInt(d, 10)) while (d--) (j = b.createElement("div")), (j.id = e ? e[d] : h + (d + 1)), k.appendChild(j);
            return (
                (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
                (k.id = h),
                ((l ? k : m).innerHTML += f),
                m.appendChild(k),
                l || ((m.style.background = ""), g.appendChild(m)),
                (i = c(k, a)),
                l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m),
                !!i
            );
        },
        v = function (b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return (
                u("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
                    d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute";
                }),
                d
            );
        },
        w = {}.hasOwnProperty,
        x;
    !A(w, "undefined") && !A(w.call, "undefined")
        ? (x = function (a, b) {
              return w.call(a, b);
          })
        : (x = function (a, b) {
              return b in a && A(a.constructor.prototype[b], "undefined");
          }),
        Function.prototype.bind ||
            (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError();
                var d = s.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a(),
                                g = c.apply(f, d.concat(s.call(arguments)));
                            return Object(g) === g ? g : f;
                        }
                        return c.apply(b, d.concat(s.call(arguments)));
                    };
                return e;
            }),
        (o.touch = function () {
            var c;
            return (
                "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
                    ? (c = !0)
                    : u(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
                          c = a.offsetTop === 9;
                      }),
                c
            );
        }),
        (o.localstorage = function () {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
            } catch (a) {
                return !1;
            }
        }),
        (o.svg = function () {
            return !!b.createElementNS && !!b.createElementNS(n.svg, "svg").createSVGRect;
        });
    for (var E in o) x(o, E) && ((t = E.toLowerCase()), (e[t] = o[E]()), r.push((e[t] ? "" : "no-") + t));
    return (
        e.input || D(),
        (e.addTest = function (a, b) {
            if (typeof a == "object") for (var d in a) x(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                (b = typeof b == "function" ? b() : b), f && (g.className += " " + (b ? "" : "no-") + a), (e[a] = b);
            }
            return e;
        }),
        y(""),
        (i = k = null),
        (function (a, b) {
            function k(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return (c.innerHTML = "x<style>" + b + "</style>"), d.insertBefore(c.lastChild, d.firstChild);
            }
            function l() {
                var a = r.elements;
                return typeof a == "string" ? a.split(" ") : a;
            }
            function m(a) {
                var b = i[a[g]];
                return b || ((b = {}), h++, (a[g] = h), (i[h] = b)), b;
            }
            function n(a, c, f) {
                c || (c = b);
                if (j) return c.createElement(a);
                f || (f = m(c));
                var g;
                return f.cache[a] ? (g = f.cache[a].cloneNode()) : e.test(a) ? (g = (f.cache[a] = f.createElem(a)).cloneNode()) : (g = f.createElem(a)), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
            }
            function o(a, c) {
                a || (a = b);
                if (j) return a.createDocumentFragment();
                c = c || m(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = l(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d;
            }
            function p(a, b) {
                b.cache || ((b.cache = {}), (b.createElem = a.createElement), (b.createFrag = a.createDocumentFragment), (b.frag = b.createFrag())),
                    (a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c);
                    }),
                    (a.createDocumentFragment = Function(
                        "h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                            l()
                                .join()
                                .replace(/\w+/g, function (a) {
                                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                                }) +
                            ");return n}"
                    )(r, b.frag));
            }
            function q(a) {
                a || (a = b);
                var c = m(a);
                return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a;
            }
            var c = a.html5 || {},
                d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
                f,
                g = "_html5shiv",
                h = 0,
                i = {},
                j;
            (function () {
                try {
                    var a = b.createElement("a");
                    (a.innerHTML = "<xyz></xyz>"),
                        (f = "hidden" in a),
                        (j =
                            a.childNodes.length == 1 ||
                            (function () {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
                            })());
                } catch (c) {
                    (f = !0), (j = !0);
                }
            })();
            var r = {
                elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: c.shivCSS !== !1,
                supportsUnknownElements: j,
                shivMethods: c.shivMethods !== !1,
                type: "default",
                shivDocument: q,
                createElement: n,
                createDocumentFragment: o,
            };
            (a.html5 = r), q(b);
        })(this, b),
        (e._version = d),
        (e._prefixes = m),
        (e.mq = v),
        (e.testStyles = u),
        (g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + r.join(" ") : "")),
        e
    );
})(this, this.document)),
    (function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a);
        }
        function e(a) {
            return "string" == typeof a;
        }
        function f() {}
        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
        }
        function h() {
            var a = p.shift();
            (q = 1),
                a
                    ? a.t
                        ? m(function () {
                              ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
                          }, 0)
                        : (a(), h())
                    : (q = 0);
        }
        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && ((u.r = o = 1), !q && h(), (l.onload = l.onreadystatechange = null), b)) {
                    "img" != a &&
                        m(function () {
                            t.removeChild(l);
                        }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && ((r = 1), (y[c] = [])),
                "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
                (l.width = l.height = "0"),
                (l.onerror = l.onload = l.onreadystatechange = function () {
                    k.call(this, r);
                }),
                p.splice(e, 0, u),
                "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
        }
        function j(a, b, c, d, f) {
            return (q = 0), (b = b || "j"), e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
        }
        function k() {
            var a = B;
            return (a.loader = { load: j, i: 0 }), a;
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w =
                Array.isArray ||
                function (a) {
                    return "[object Array]" == o.call(a);
                },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a;
                },
            },
            A,
            B;
        (B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e,
                    f,
                    g;
                for (f = 0; f < d; f++) (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }
            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(),
                    i.bypass ||
                        (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
                        i.instead
                            ? i.instead(a, e, f, g, h)
                            : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                              f.load(i.url, i.forceCSS || (!i.forceJS && "css" == i.url.split(".").pop().split("?").shift()) ? "c" : c, i.noexec, i.attrs, i.timeout),
                              (d(e) || d(j)) &&
                                  f.load(function () {
                                      k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), (y[i.url] = 2);
                                  })));
            }
            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a))
                            c ||
                                (j = function () {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l();
                                }),
                                g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in ((m = (function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b;
                            })()),
                            a))
                                a.hasOwnProperty(n) &&
                                    (!c &&
                                        !--m &&
                                        (d(j)
                                            ? (j = function () {
                                                  var a = [].slice.call(arguments);
                                                  k.apply(this, a), l();
                                              })
                                            : (j[n] = (function (a) {
                                                  return function () {
                                                      var b = [].slice.call(arguments);
                                                      a && a.apply(this, b), l();
                                                  };
                                              })(k[n]))),
                                    g(a[n], j, b, n, h));
                    } else !c && l();
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m,
                    n;
                c(h ? a.yep : a.nope, !!i), i && c(i);
            }
            var i,
                j,
                l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a)) for (i = 0; i < a.length; i++) (j = a[i]), e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l);
        }),
            (B.addPrefix = function (a, b) {
                z[a] = b;
            }),
            (B.addFilter = function (a) {
                x.push(a);
            }),
            (B.errorTimeout = 1e4),
            null == b.readyState &&
                b.addEventListener &&
                ((b.readyState = "loading"),
                b.addEventListener(
                    "DOMContentLoaded",
                    (A = function () {
                        b.removeEventListener("DOMContentLoaded", A, 0), (b.readyState = "complete");
                    }),
                    0
                )),
            (a.yepnope = k()),
            (a.yepnope.executeStack = h),
            (a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l,
                    o,
                    e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                (c = j ? h : c || f),
                    (k.onreadystatechange = k.onload = function () {
                        !l && g(k.readyState) && ((l = 1), c(), (k.onload = k.onreadystatechange = null));
                    }),
                    m(function () {
                        l || ((l = 1), c(1));
                    }, e),
                    i ? k.onload() : n.parentNode.insertBefore(k, n);
            }),
            (a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j,
                    c = i ? h : c || f;
                (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0));
            });
    })(this, document),
    (Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0));
    });


Modernizr.load({ test: Modernizr.input.placeholder, nope: "/screenfly-v2/js/placeholders.js" });
$(document).ready(function () {
    $(window).resize(function () {
        qtFixed();
    });
    qtFixed();
    $("a.confirm").click(function (c) {
        return qtConfirm("Are you sure?");
    });
    if (!Modernizr.svg) {
        $('img[src*=".svg"]').each(function () {
            var c = $(this).attr("src");
            c = c.replace(/\.svg/gi, ".png");
            $(this).attr("src", c);
        });
    }
    if (navigator.platform.indexOf("iPhone") != -1 || navigator.platform.indexOf("iPod") != -1 || navigator.platform.indexOf("iPad") != -1) {
        $("a").click(function (c) {
            if ($._data(this, "events").click.length == 1 && $(this).attr("href").indexOf("quirktools.com") != -1) {
                c.preventDefault();
                location.href = $(this).attr("href");
            }
        });
    }
    var a = false;
    var b = false;
    $("fieldset.validate input,fieldset.validate textarea").change(function () {
        var f = true;
        var h = [];
        if ($(this).is("[required]") && $(this).val().trim().length == 0) {
            f = false;
            h.push("This is a required field");
        }
        if ($(this).is("[maxlength]") && $(this).val().trim().length > parseInt($(this).attr("maxlength"))) {
            f = false;
            h.push("Too many characters");
        }
        if ($(this).attr("type") == "number" && !isInt(paresInt($(this).val()))) {
            f = false;
            h.push("Please enter a number");
        }
        if ($(this).is("[min]") && parseInt($(this).val()) < parseInt($(this).attr.min)) {
            f = false;
            h.push("This number is too low");
        }
        if ($(this).is("[max]") && parseInt($(this).val()) > parseInt($(this).attr.max)) {
            f = false;
            h.push("This number is too high");
        }
        if ($(this).attr("type") == "email") {
            var c = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!c.test($(this).val())) {
                f = false;
                h.push("Not a valid email address");
            }
        }
        if ($(this).attr("name") == "projecturl" && $(this).val().trim().length > 0) {
            var e = $(this);
            var g = $(this).val().trim();
            if (g != a) {
                $.ajax({
                    url: "/projects/slug/",
                    data: { url: g },
                    success: function (i) {
                        if (i.available === false) {
                            $(e).next(".field-status").remove();
                            $(e).after('<span class="field-status bad" data-icon="&#xe01d;"><span class="tooltip">This web address is not available</span></span>');
                        }
                        a = g;
                    },
                });
            }
        }
        if ($(this).attr("name") == "projectname" && $(this).val().trim().length > 0 && $('input[name="projecturl"]').size() > 0) {
            var d = $(this).val().trim();
            if (d != b) {
                $.ajax({
                    url: "/projects/slug/",
                    data: { string: d },
                    success: function (i) {
                        if (i.slugged) {
                            $('input[name="projecturl"]').val(i.slugged).change();
                        }
                        b = d;
                    },
                });
            }
        }
        if ($(this).attr("name") == "newpassword2" && $(this).val().length > 0) {
            if ($(this).val() != $('input[name="newpassword1"]').val()) {
                f = false;
                h.push("Passwords do not match");
            }
        }
        $(this).next(".field-status").remove();
        if (f) {
            $(this).after('<span class="field-status good" data-icon="&#xe030;" />');
        } else {
            $(this).after('<span class="field-status bad" data-icon="&#xe01d;"><span class="tooltip">' + h.join(" / ") + "</span></span>");
        }
    });
    $("fieldset.horizontal input,fieldset.horizontal textarea").blur(function () {
        $(this).change();
    });
});
function qtFixed() {
    if ($(window).width() > 480) {
        $("body").addClass("fixed");
        if ($(".toolbar").size() > 0) {
            $("body").addClass("fixed-toolbar");
        }
    } else {
        $("body").removeClass("fixed").removeClass("fixed-toolbar");
    }
    $("#header .collapse").css("max-height", (window.innerHeight ? window.innerHeight : $(window).height()) - 50 + "px");
    if ($(window).width() > 767) {
        if ($("#toggle").size() > 0) {
            $("#toggle").remove();
            $("#header .collapse").show();
            $("#header").removeClass("collapsed");
        }
    } else {
        if ($("#toggle").size() == 0) {
            $("#header .wrapper").append('<a id="toggle" href="#"><span class="line" /><span class="line" /><span class="line" /></a>');
            $("#header .collapse").hide();
            $("#toggle").click(function (a) {
                a.preventDefault();
                $(this).siblings(".collapse").slideToggle(150);
            });
            $("#header").addClass("collapsed");
        }
    }
    qtLightboxSize();
}
function qtConfirm(a, b) {
    if (confirm(a)) {
        if (b != null) {
            b();
        } else {
            return true;
        }
    } else {
        return false;
    }
}
function qtUnclick(a, b) {
    $(document).on("click", function (d) {
        var c = $(d.target);
        if (!c.is(a)) {
            b();
        }
    });
}
function qtLightbox(a) {
    qtCloseLightbox();
    $("body").append('<div id="lightbox-shadow"/><div id="lightbox"><div class="one-up wrapper" /></div><a id="lightbox-close" href="#close" data-icon="&#xe01d;"></a>');
    qtLightboxSize();
    $("#lightbox .wrapper").append(a);
    qtShortcut("esc", function () {
        $("#lightbox-close").click();
    });
    $("#lightbox-shadow,#lightbox-close").click(function (b) {
        b.preventDefault();
        qtCloseLightbox();
    });
}
function qtLightboxSize() {
    var a = 200;
    if ($(window).width() < 768) {
        a = 50;
    }
    $("#lightbox").width($(window).width() - a);
    $("#lightbox").height((window.innerHeight ? window.innerHeight : $(window).height()) - a);
}
function qtCloseLightbox() {
    $("#lightbox,#lightbox-shadow,#lightbox-close").remove();
    qtUnShortcut("esc");
}
(function (a) {
    a.fn.qtUrlMenu = function () {
        this.each(function (b) {
            var c = a(this).attr("data");
            a(this).removeAttr("data");
            a(this).wrap('<span class="url-combo" />');
            var d = a('<a class="url-menu-arrow" href="#pick-url"><span class="arrow-down">Pick URL</span></a>');
            a(d).click(function (g) {
                g.preventDefault();
                if (a(".url-menu").size() == 0) {
                    var f = a(this);
                    a.ajax({
                        type: "GET",
                        url: c,
                        success: function (e) {
                            a(f).before('<ul class="url-menu" />');
                            a.each(e.pages, function (j, k) {
                                var h = a('<li><a href="' + k.url + '">' + k.title + "</a></li>");
                                a(h)
                                    .find("a")
                                    .click(function (l) {
                                        l.preventDefault();
                                        var i = a(this).attr("href");
                                        a(this).closest(".url-combo").find("input").val(i).change();
                                        a(".url-menu").remove();
                                    });
                                a(".url-menu").append(h);
                            });
                        },
                        error: function () {
                            alert("Error getting URL list! Try that again in a few moments.");
                        },
                    });
                } else {
                    a(".url-menu").remove();
                }
            });
            a(this).after(d);
            a(this).on("blur focus change", function (f) {
                a(".url-menu").remove();
            });
        });
    };
})(jQuery);
qtUnclick(".url-combo *", function () {
    $(".url-menu").remove();
});
(function (a) {
    a.fn.disableSelection = function () {
        return this.each(function () {
            a(this)
                .attr("unselectable", "on")
                .css({ "-moz-user-select": "none", "-webkit-user-select": "none", "user-select": "none" })
                .each(function () {
                    this.onselectstart = function () {
                        return false;
                    };
                });
        });
    };
})(jQuery);
(function (a) {
    a.fn.enableSelection = function () {
        return this.each(function () {
            a(this)
                .removeAttr("unselectable")
                .css({ "-moz-user-select": "inherit", "-webkit-user-select": "inherit", "user-select": "inherit" })
                .each(function () {
                    this.onselectstart = function () {};
                });
        });
    };
})(jQuery);



function qtShortcut(e, c, d) {
    var a = true;
    if (d != null && d == false) {
        a = false;
    }
    e = e.split(",");
    for (var b = 0; b < e.length; b++) {
        shortcut.add(
            e[b],
            function (f) {
                if (f.preventDefault) {
                    f.preventDefault();
                }
                c();
            },
            { disable_in_input: a }
        );
    }
}
function qtUnShortcut(b) {
    b = b.split(",");
    for (var a = 0; a < b.length; a++) {
        shortcut.remove(b[a]);
    }
}
var qtStatusTimer = 0;
function qtStatus(b, a, c) {
    clearTimeout(qtStatusTimer);
    $("#status").stop(true, true);
    $("#status").html(b);
    if (a != null && c != null) {
        $("#status")
            .css("bottom", "auto")
            .css("right", "auto")
            .css("top", c - $(window).scrollTop() + "px")
            .css("left", a - $(window).scrollLeft() + "px");
    } else {
        if ($("#sidebar-toggle").size() > 0) {
            $("#status")
                .css("top", "auto")
                .css("left", "auto")
                .css("bottom", "20px")
                .css("right", parseInt($("#sidebar-toggle").css("right")) + 50 + "px");
        } else {
            $("#status").css("top", "auto").css("left", "auto").css("bottom", "20px").css("right", "20px");
        }
    }
    $("#status").show();
    qtStatusTimer = setTimeout("$('#status').fadeOut(200);", 1500);
}
function htmlEncode(a) {
    return $("<pre/>").text(a).html();
}
function htmlDecode(a) {
    return $("<pre/>").html(a).text();
}
function createCookie(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + e * 24 * 60 * 60 * 1000);
        var a = "; expires=" + b.toGMTString();
    } else {
        var a = "";
    }
    document.cookie = c + "=" + d + a + "; path=/";
}
function readCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length);
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length);
        }
    }
    return null;
}
function eraseCookie(a) {
    createCookie(a, "", -1);
}
if (typeof String.prototype.trim !== "function") {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    };
}
shortcut = {
    all_shortcuts: {},
    add: function (shortcut_combination, callback, opt) {
        var default_options = { type: "keydown", propagate: false, disable_in_input: false, target: document, keycode: false };
        if (!opt) {
            opt = default_options;
        } else {
            for (var dfo in default_options) {
                if (typeof opt[dfo] == "undefined") {
                    opt[dfo] = default_options[dfo];
                }
            }
        }
        var ele = opt.target;
        if (typeof opt.target == "string") {
            ele = document.getElementById(opt.target);
        }
        var ths = this;
        shortcut_combination = shortcut_combination.toLowerCase();
        var func = function (e) {
            e = e || window.event;
            if (opt.disable_in_input) {
                var element;
                if (e.target) {
                    element = e.target;
                } else {
                    if (e.srcElement) {
                        element = e.srcElement;
                    }
                }
                if (element.nodeType == 3) {
                    element = element.parentNode;
                }
                if (element.tagName == "INPUT" || element.tagName == "TEXTAREA" || element.getAttribute("contenteditable") != null) {
                    return;
                }
            }
            if (e.keyCode) {
                code = e.keyCode;
            } else {
                if (e.which) {
                    code = e.which;
                }
            }
            var character = String.fromCharCode(code).toLowerCase();
            if (code == 188) {
                character = ",";
            }
            if (code == 190) {
                character = ".";
            }
            var keys = shortcut_combination.split("+");
            var kp = 0;
            var shift_nums = { "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ":", "'": '"', ",": "<", ".": ">", "/": "?", "\\": "|" };
            var special_keys = {
                esc: 27,
                escape: 27,
                tab: 9,
                space: 32,
                return: 13,
                enter: 13,
                backspace: 8,
                scrolllock: 145,
                scroll_lock: 145,
                scroll: 145,
                capslock: 20,
                caps_lock: 20,
                caps: 20,
                numlock: 144,
                num_lock: 144,
                num: 144,
                pause: 19,
                break: 19,
                insert: 45,
                home: 36,
                delete: 46,
                end: 35,
                pageup: 33,
                page_up: 33,
                pu: 33,
                pagedown: 34,
                page_down: 34,
                pd: 34,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123,
            };
            var modifiers = { shift: { wanted: false, pressed: false }, ctrl: { wanted: false, pressed: false }, alt: { wanted: false, pressed: false }, meta: { wanted: false, pressed: false } };
            if (e.ctrlKey) {
                modifiers.ctrl.pressed = true;
            }
            if (e.shiftKey) {
                modifiers.shift.pressed = true;
            }
            if (e.altKey) {
                modifiers.alt.pressed = true;
            }
            if (e.metaKey) {
                modifiers.meta.pressed = true;
            }
            for (var i = 0; (k = keys[i]), i < keys.length; i++) {
                if (k == "ctrl" || k == "control") {
                    kp++;
                    modifiers.ctrl.wanted = true;
                } else {
                    if (k == "shift") {
                        kp++;
                        modifiers.shift.wanted = true;
                    } else {
                        if (k == "alt") {
                            kp++;
                            modifiers.alt.wanted = true;
                        } else {
                            if (k == "meta") {
                                kp++;
                                modifiers.meta.wanted = true;
                            } else {
                                if (k.length > 1) {
                                    if (special_keys[k] == code) {
                                        kp++;
                                    }
                                } else {
                                    if (opt.keycode) {
                                        if (opt.keycode == code) {
                                            kp++;
                                        }
                                    } else {
                                        if (character == k) {
                                            kp++;
                                        } else {
                                            if (shift_nums[character] && e.shiftKey) {
                                                character = shift_nums[character];
                                                if (character == k) {
                                                    kp++;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (kp == keys.length && modifiers.ctrl.pressed == modifiers.ctrl.wanted && modifiers.shift.pressed == modifiers.shift.wanted && modifiers.alt.pressed == modifiers.alt.wanted && modifiers.meta.pressed == modifiers.meta.wanted) {
                callback(e);
                if (!opt.propagate) {
                    e.cancelBubble = true;
                    e.returnValue = false;
                    if (e.stopPropagation) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    return false;
                }
            }
        };
        this.all_shortcuts[shortcut_combination] = { callback: func, target: ele, event: opt.type };
        if (ele.addEventListener) {
            ele.addEventListener(opt.type, func, false);
        } else {
            if (ele.attachEvent) {
                ele.attachEvent("on" + opt.type, func);
            } else {
                ele["on" + opt.type] = func;
            }
        }
    },
    remove: function (shortcut_combination) {
        shortcut_combination = shortcut_combination.toLowerCase();
        var binding = this.all_shortcuts[shortcut_combination];
        delete this.all_shortcuts[shortcut_combination];
        if (!binding) {
            return;
        }
        var type = binding.event;
        var ele = binding.target;
        var callback = binding.callback;
        if (ele.detachEvent) {
            ele.detachEvent("on" + type, callback);
        } else {
            if (ele.removeEventListener) {
                ele.removeEventListener(type, callback, false);
            } else {
                ele["on" + type] = false;
            }
        }
    },
};
$(document).ready(function () {
    qtToolbars();
    qtSidebar();
    $(window).resize(function () {
        qtToolbarSize();
    });
    qtToolbarSize();
});
function qtToolbars() {
    $(".toolbar-group > li > a").click(function (b) {
        b.preventDefault();
        if (!$(this).hasClass("disabled")) {
            $(".toolbar-group > li > a").removeClass("menu-open");
            if ($(this).siblings("ul:hidden").size() > 0) {
                $(this).addClass("menu-open");
                $(".toolbar-group > li > ul").hide();
                var a = $(this).siblings("ul:hidden");
                $(a).show();
            } else {
                if ($(this).siblings("ul:visible").size() > 0) {
                    $(this).removeClass("menu-open");
                    $(".toolbar-group > li > ul").hide();
                }
            }
        }
    });
    qtUnclick(".toolbar *", function () {
        qtHideToolbarMenus();
    });
    $(".document-list > a").click(function (a) {
        a.preventDefault();
        if ($(this).next(":hidden").size() > 0) {
            $(".document-list > ul,.document-list > div").hide();
            $(this).next(":hidden").show();
        } else {
            $(".document-list > ul,.document-list > div").hide();
        }
    });
    qtUnclick(".document-list *", function () {
        $(".document-list > ul,.document-list > div").hide();
    });
}
function qtHideToolbarMenus() {
    $(".toolbar-group > li ul").hide();
    $(".toolbar-group > li > a").removeClass("menu-open");
}
function qtSidebar() {
    $("#sidebar-toggle").click(function (a) {
        a.preventDefault();
        $("#sidebar,#sidebar-toggle,#workspace").stop(true, true);
        if (parseInt($("#sidebar").css("right")) < 0) {
            createCookie("sidebar_open", "1", 365);
            $("#sidebar").show();
            $("#sidebar,#sidebar-toggle").animate({ right: "+=300" }, 150);
            $("#workspace").animate({ paddingRight: "+=300" }, 150);
        } else {
            createCookie("sidebar_open", "0", 365);
            $("#sidebar,#sidebar-toggle").animate({ right: "-=300" }, 150, function () {
                $("#sidebar").hide();
            });
            $("#workspace").animate({ paddingRight: "-=300" }, 150);
        }
    });
    if ((readCookie("sidebar_open") != null && readCookie("sidebar_open") == "0") || $(window).width() <= 600) {
        createCookie("sidebar_open", "0", 365);
        $("#sidebar").css("right", "-300px").hide();
        $("#sidebar-toggle").css("right", "0px");
        $("#workspace").css("padding-right", "30px");
    }
}
function qtToolbarSize() {
    $(".toolbar-group > li > ul, .document-list ul").css("max-height", (window.innerHeight ? window.innerHeight : $(window).height()) - 100 + "px");
    var a = 0;
    if ($("#bsap_1288477").size() > 0 && $("#bsap_1288477").is(":visible")) {
        a = 145;
    }
    if ($("body").hasClass("fixed-toolbar")) {
        $("#sidebar-container").css("height", (window.innerHeight ? window.innerHeight : $(window).height()) - 100 - a + "px");
        $("#sidebar-container > div").css("height", (window.innerHeight ? window.innerHeight : $(window).height()) - 146 - a + "px");
    } else {
        $("#sidebar-container").css("height", (window.innerHeight ? window.innerHeight : $(window).height()) - 50 - a + "px");
        $("#sidebar-container > div").css("height", (window.innerHeight ? window.innerHeight : $(window).height()) - 96 - a + "px");
    }
}
var qtLoadingFromHash = true;
$(document).ready(function () {
    $("#viewport").hide();
    $("#screen-sizes > li ul a").click(function (i) {
        i.preventDefault();
        var f = $(this).attr("href").replace("#", "");
        var c = parseInt(f.split("x")[0]);
        var d = parseInt(f.split("x")[1]);
        var g = f.split("x")[2];
        $("#screen-sizes li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(this).parent().parent().parent().addClass("selected");
        $("#screen-sizes > li ul").hide();
        if ($("#use-proxy").parent().hasClass("selected")) {
            qtScreenFrame({ reload: true, ua: g });
        }
        qtAnimateFrame({ width: c, height: d });
    });
    $("#size-custom").click(function (c) {
        if (!$(this).hasClass("disabled")) {
            if (!$(this).find("ul").is(":visible")) {
                $("#custom-width").val($("#frame").width());
                $("#custom-height").val($("#frame").height());
                $("#custom-width").focus();
            }
        }
    });
    $("#custom-width,#custom-height").keyup(function (c) {
        if (c.keyCode == 13) {
            $("#size-custom-save").click();
        } else {
            if (c.keyCode == 27) {
                $("#size-custom").click();
            }
        }
    });
    $("#size-custom-save").click(function (f) {
        f.preventDefault();
        var c = parseInt($("#custom-width").val());
        if (c < 150 || isNaN(c)) {
            c = 150;
        }
        if (c > 20000) {
            c = 20000;
        }
        var d = parseInt($("#custom-height").val());
        if (d < 150 || isNaN(d)) {
            d = 150;
        }
        if (d > 20000) {
            d = 20000;
        }
        qtAnimateFrame({ width: c, height: d });
        $("#screen-sizes li").removeClass("selected");
        $("#screen-sizes li.custom").addClass("selected");
    });
    $("#refresh").click(function (c) {
        c.preventDefault();
        qtScreenFrame({ reload: true });
    });
    $("#rotate").click(function (f) {
        f.preventDefault();
        $("#frame,#viewport,#viewport-body").stop(true, true);
        var c = $("#frame").width();
        var d = $("#frame").height();
        qtAnimateFrame({ width: d, height: c });
    });
    $("#allow-scrolling").click(function (c) {
        c.preventDefault();
        if (!$(this).parent().hasClass("selected")) {
            createCookie("screenfly-scrolling", "1", 365);
            $(this).parent().addClass("selected");
            if ($("#viewport").is(":visible")) {
                qtScreenFrame({ reload: true });
            }
        } else {
            createCookie("screenfly-scrolling", "0", 365);
            $(this).parent().removeClass("selected");
            if ($("#viewport").is(":visible")) {
                qtScreenFrame({ reload: true });
            }
        }
    });
    if (readCookie("screenfly-scrolling") != null && readCookie("screenfly-scrolling") == "1") {
        $("#frame-tools li.scrolling").addClass("selected");
    }
    $("#use-proxy").click(function (c) {
        c.preventDefault();
        if (!$(this).parent().hasClass("selected")) {
            createCookie("screenfly-proxy", "1", 365);
            $(this).parent().addClass("selected");
            if ($("#viewport").is(":visible")) {
                qtScreenFrame({ reload: true });
            }
        } else {
            createCookie("screenfly-proxy", "0", 365);
            $(this).parent().removeClass("selected");
            if ($("#viewport").is(":visible")) {
                qtScreenFrame({ reload: true });
            }
        }
    });
    if (readCookie("screenfly-proxy") != null && readCookie("screenfly-proxy") == "1") {
        $("#frame-tools li.proxy").addClass("selected");
    }
    $("#share").click(function () {
        $("#share-url").click();
    });
    $("#share-url").click(function () {
        $(this).select();
    });
    $("#siteurl").keyup(function (c) {
        if (c.keyCode == 13 && $(this).val() != "") {
            $("#go").click();
        }
    });
    $("#go").click(function (d) {
        d.preventDefault();
        if ($("#siteurl").val().trim() != "") {
            createCookie("screenfly-auth", "1");
            $("#screenfly-form").hide();
            $("#viewport").show();
            $("body").addClass("screenfly-frame");
            $(".requires-visible-frame").removeClass("disabled");
            if ($("#use-proxy").parent().hasClass("selected") && $("#screen-sizes li.selected:not(li.custom)").size() > 0) {
                var c = $("#screen-sizes li.selected:not(li.custom) a").attr("href").replace("#", "").split("x")[2];
                qtScreenFrame({ width: 1024, height: 600, ua: c });
            } else {
                qtScreenFrame({ width: 1024, height: 600 });
            }
            if (!qtLoadingFromHash) {
                $("#screen-sizes li").removeClass("selected");
                $("#screen-sizes li:first,#screen-sizes li:first ul li:first").addClass("selected");
            }
        }
    });
    $("#change-url").click(function (c) {
        c.preventDefault();
        $("#viewport").hide();
        $("body").removeClass("screenfly-frame");
        $(".requires-visible-frame").addClass("disabled");
        $("#screenfly-form").show();
        $("#siteurl").focus();
    });
    qtShortcut("d", function () {
        $("#size-desktop").click();
    });
    qtShortcut("t", function () {
        $("#size-tablet").click();
    });
    qtShortcut("m", function () {
        $("#size-mobile").click();
    });
    qtShortcut("v", function () {
        $("#size-television").click();
    });
    qtShortcut("c", function () {
        $("#size-custom").click();
    });
    qtShortcut("f", function () {
        $("#refresh").click();
    });
    qtShortcut("r", function () {
        $("#rotate").click();
    });
    qtShortcut("s", function () {
        $("#allow-scrolling").click();
    });
    qtShortcut("p", function () {
        $("#use-proxy").click();
    });
    qtScreenflyFixed();
    screenRulers();
    if (window.location.hash) {
        var b = window.location.hash.replace("#", "");
        var a = {};
        b.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function (d, c, f, e) {
            a[c] = e;
        });
        if (a.u != null && a.w != null && parseInt(a.w) != null && a.h != null && parseInt(a.h) != null) {
            if (a.s != null && a.s == "1") {
                if (!$("#frame-tools li.scrolling").hasClass("selected")) {
                    $("#frame-tools li.scrolling a").click();
                }
            }
            if (a.p != null && a.p == "1") {
                if (!$("#frame-tools li.proxy").hasClass("selected")) {
                    $("#frame-tools li.proxy a").click();
                }
            }
            if (a.a != null && $('#screen-sizes a[href="#' + a.w + "x" + a.h + "x" + a.a + '"]').size() > 0) {
                $("#screen-sizes li").removeClass("selected");
                $('#screen-sizes a[href="#' + a.w + "x" + a.h + "x" + a.a + '"]')
                    .parent()
                    .addClass("selected");
                $('#screen-sizes a[href="#' + a.w + "x" + a.h + "x" + a.a + '"]')
                    .parent()
                    .parent()
                    .parent()
                    .addClass("selected");
            } else {
                if (a.a != null && $('#screen-sizes a[href="#' + a.h + "x" + a.w + "x" + a.a + '"]').size() > 0) {
                    $("#screen-sizes li").removeClass("selected");
                    $('#screen-sizes a[href="#' + a.h + "x" + a.w + "x" + a.a + '"]')
                        .parent()
                        .addClass("selected");
                    $('#screen-sizes a[href="#' + a.h + "x" + a.w + "x" + a.a + '"]')
                        .parent()
                        .parent()
                        .parent()
                        .addClass("selected");
                } else {
                    $("#screen-sizes li").removeClass("selected");
                    $("#screen-sizes li.custom").addClass("selected");
                }
            }
            $("#siteurl").val(unescape(a.u));
            $("#go").click();
            $("#frame").width(parseInt(a.w)).height(parseInt(a.h));
            $("#viewport").width(parseInt(a.w));
            $("#viewport-body").height(parseInt(a.h));
            $("#viewport-size").text(a.w + " x " + a.h);
            qtLoadingFromHash = false;
            qtUpdateShareUrl();
        }
    } else {
        qtLoadingFromHash = false;
    }
});
function qtScreenFrame(b) {
    if (b.reload) {
        b.width = $("#frame").width();
        b.height = $("#frame").height();
    }
    var a = $("#siteurl").val().trim();
    $("#frame").remove();
    if (a.substring(0, 7) != "http://" && a.substring(0, 8) != "https://" && a.substring(0, 7) != "file://") {
        a = "http://" + a;
    }
    $("#viewport-url a").text(a).attr("title", a);
    $("#viewport-size").text(b.width + " x " + b.height);
    var c = $('<iframe id="frame" />');
    if (!$("#allow-scrolling").parent().hasClass("selected")) {
        $(c).attr("scrolling", "no");
    }
    if ($("#use-proxy").parent().hasClass("selected")) {
        if (a.substring(0, 8) == "https://") {
            $(".info-pop").remove();
            $("#page").prepend('<div class="info-pop" style="display: none;">Sorry! The proxy cannot be used with HTTPS. Switching to no-proxy mode&hellip;</div>');
            $(".info-pop").click(function () {
                $(this).slideUp(250, function () {
                    $(this).remove();
                });
            });
            $(".info-pop").slideDown(250);
            $("#use-proxy").parent().removeClass("selected");
            createCookie("screenfly-proxy", "0", 365);
        } else {
            a = "/tools/multi-screen-test/get/?url=" + escape(a);
        }
    }
    if ($("#use-proxy").parent().hasClass("selected") && b.ua != null) {
        a = a + "&ua=" + b.ua;
    } else {
        if ($("#use-proxy").parent().hasClass("selected") && $("#screen-sizes > li.selected > ul > li.selected > a").size() > 0) {
            a = a + "&ua=" + $("#screen-sizes > li.selected > ul > li.selected > a").attr("href").replace("#", "").split("x")[2];
        }
    }
    $(c).attr("src", a).width(b.width).height(b.height);
    $(c).on('load', function() {
        $(this).css("background-image", "none");
    });
    $("#viewport-body").append(c);
    $("#viewport").width(b.width);
    $("#viewport-body").height(b.height);
    if (!qtLoadingFromHash) {
        qtUpdateShareUrl();
    }
}
function qtAnimateFrame(a) {
    if (a.speed == null) {
        a.speed = 500;
    }
    if (a.width != null && a.height != null) {
        $("#frame,#viewport,#viewport-body").stop(true, true);
        $("#frame").animate({ width: a.width, height: a.height }, a.speed, function () {
            qtUpdateShareUrl();
        });
        $("#viewport").animate({ width: a.width }, a.speed);
        $("#viewport-body").animate({ height: a.height }, a.speed);
        $("#viewport-size").text(a.width + " x " + a.height);
    }
}
function qtUpdateShareUrl() {
    if ($("#change-url").size() > 0) {
       
        var a = window.location.origin+"/tools/multi-screen-test/#u=" + escape($("#change-url").text()) + "&w=" + $("#frame").width() + "&h=" + $("#frame").height();
        if ($("#screen-sizes > li.selected > ul > li.selected > a").size() > 0) {
            a += "&a=" + $("#screen-sizes > li.selected > ul > li.selected > a").attr("href").replace("#", "").split("x")[2];
        }
        if ($("#allow-scrolling").parent().hasClass("selected")) {
            a += "&s=1";
        }
        if ($("#use-proxy").parent().hasClass("selected")) {
            a += "&p=1";
        }
        $("#share").attr("href", a);
        $("#share-url").val(a);
        location.replace(a);
    }
}
$(window).resize(function () {
    qtScreenflyFixed();
    screenRulers();
});
function qtScreenflyFixed() {
    /*var a = ($(window).height() / 2).toFixed(0) - 200;
    if (a < 125) {
        a = 125;
    }*/
    var a = 40;//TNI
    $("#screenfly-form").css("padding-top", a + "px");
}
function screenRulers() {
    $("#ruler .label").text($(window).width() + " x " + $(window).height());
}
