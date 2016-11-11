/* eslint-disable */
    function makeEv(target) {
       var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(
            "click",
            true /* bubble */, true /* cancelable */,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, target
        );
        return ev;
    }
angular.module('kr.font', [])
    .directive('krCallPhantom', ['$timeout', function($timeout) {
        var upload = false;
        return {
            link: function postLink(scope, ele) {
               if($('#file input')[0] === ele[0]) {
                   $timeout(function(){
                   window.callPhantom('upload');
                   }, 10)
               }
            }
        }
    }]) ;
function RGBColor(a) {
    this.ok = !1,
    "#" == a.charAt(0) && (a = a.substr(1, 6)),
    a = a.replace(/ /g, ""),
    a = a.toLowerCase();
    var b = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    };
    for (var c in b)
        a == c && (a = b[c]);
    for (var d = [{
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(a) {
            return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])]
        }
    }, {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ["#00ff00", "336699"],
        process: function(a) {
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
        }
    }, {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ["#fb0", "f0f"],
        process: function(a) {
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
        }
    }], e = 0; e < d.length; e++) {
        var f = d[e].re
          , g = d[e].process
          , h = f.exec(a);
        h && (channels = g(h),
        this.r = channels[0],
        this.g = channels[1],
        this.b = channels[2],
        this.ok = !0)
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r,
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g,
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b,
    this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
    }
    ,
    this.toHex = function() {
        var a = this.r.toString(16)
          , b = this.g.toString(16)
          , c = this.b.toString(16);
        return 1 == a.length && (a = "0" + a),
        1 == b.length && (b = "0" + b),
        1 == c.length && (c = "0" + c),
        "#" + a + b + c
    }
    ,
    this.getHelpXML = function() {
        for (var a = new Array, c = 0; c < d.length; c++)
            for (var e = d[c].example, f = 0; f < e.length; f++)
                a[a.length] = e[f];
        for (var g in b)
            a[a.length] = g;
        var h = document.createElement("ul");
        h.setAttribute("id", "rgbcolor-examples");
        for (var c = 0; c < a.length; c++)
            try {
                var i = document.createElement("li")
                  , j = new RGBColor(a[c])
                  , k = document.createElement("div");
                k.style.cssText = "margin: 3px; border: 1px solid black; background:" + j.toHex() + "; " + "color:" + j.toHex(),
                k.appendChild(document.createTextNode("test"));
                var l = document.createTextNode(" " + a[c] + " -> " + j.toRGB() + " -> " + j.toHex());
                i.appendChild(k),
                i.appendChild(l),
                h.appendChild(i)
            } catch (m) {}
        return h
    }
}
!function() {
    "use strict";
    function a() {}
    function b() {
        var a = window.navigator.userAgent
          , b = a.indexOf("MSIE ");
        if (b > 0)
            return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
        var c = a.indexOf("Trident/");
        if (c > 0) {
            var d = a.indexOf("rv:");
            return parseInt(a.substring(d + 3, a.indexOf(".", d)), 10)
        }
        var e = a.indexOf("Edge/");
        return e > 0 ? parseInt(a.substring(e + 5, a.indexOf(".", e)), 10) : !1
    }
    String.prototype.hashCode = function() {
        var a, b, c = 0, d = this.length;
        for (b = 0; d > b; b += 1)
            a = this.charCodeAt(b),
            c = 31 * c + a,
            c |= 0;
        return 0 > c && (c = -c + 1),
        c
    }
    ,
    String.fromCodePoint = String.fromCodePoint || function() {
        for (var a, b = arguments.length, c = []; b--; ) {
            if (a = arguments[b],
            0 > a || a > 1114111)
                throw new RangeError;
            65536 > a ? c.unshift(a) : (a -= 65536,
            c.unshift(55296 | a >> 10, 56320 | 1023 & a))
        }
        return String.fromCharCode.apply(String, c)
    }
    ,
    String.prototype.codePointAt = String.prototype.codePointAt || function(a) {
        var b = this.toString()
          , c = b.length
          , d = b.charCodeAt(a)
          , e = b.charCodeAt(a + 1);
        return 0 > a || a >= c ? 0 / 0 : 55296 > d || d > 56319 || a + 1 === c ? d : 56320 > e || d > 57343 ? d : 65536 + 1024 * (d - 55296) + e - 56320
    }
    ,
    String.prototype.charLength = String.prototype.charLength || function() {
        var a, b, c, d = 0, e = this;
        for (b = 0; b < e.length; b += 1)
            a = e.charCodeAt(b),
            c = e.charCodeAt(b + 1),
            a >= 55296 && 57343 >= a && !isNaN(c) && c >= 56320 && (b += 1),
            d += 1;
        return d
    }
    ,
    ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(a, b) {
        var c, d, e, f = new Uint8Array(this);
        for ("undefined" == typeof b && (b = f.length),
        e = new Uint8Array(b - a),
        d = e.length,
        c = 0; d > c; c += 1)
            e[c] = f[c + a];
        return e.buffer
    }
    ),
    ArrayBuffer.prototype.toString = function(a) {
        if (a) {
            var b, c = new Uint8Array(this), d = this.byteLength, e = "";
            for (b = 0; d > b; b += 1)
                e += String.fromCharCode(c[b]);
            return btoa(e)
        }
        return "[object ArrayBuffer]"
    }
    ;
    var c = window.indexedDB;
    if (c) {
        var d, e;
        try {
            d = "idbtest-icomoon.io/app",
            e = c.open(d),
            e.onerror = function() {
                e.error && "InvalidStateError" === e.error.name ? window.supportsIndexedDB = !1 : (window.supportsIndexedDB = !0,
                a(c, d))
            }
            ,
            e.onsuccess = function() {
                window.supportsIndexedDB = !0,
                a(c, d)
            }
        } catch (f) {
            window.supportsIndexedDB = !1
        }
    } else
        window.supportsIndexedDB = !1;
    b() && (document.body.className += " msie")
}(),
angular.module("scriptLoader", []).factory("scriptLoader", ["$q", function(a) {
    var b = []
      , c = function(c, d) {
        function e() {
            h.resolve(),
            d && d()
        }
        var f, g, h = a.defer();
        return b.indexOf(c) < 0 ? (b.push(c),
        f = document.getElementsByTagName("script")[0],
        g = document.createElement("script"),
        g.src = c,
        g.addEventListener ? g.addEventListener("load", function() {
            e()
        }, !1) : g.onreadystatechange = function() {
            g.readyState in {
                loaded: 1,
                complete: 1
            } && (g.onreadystatechange = null ,
            e())
        }
        ,
        f.parentNode.insertBefore(g, f)) : e(),
        h.promise
    };
    return {
        load: c
    }
}
]),
function() {
    function a() {
        var a = {};
        return a.FRAMERATE = 30,
        a.MAX_VIRTUAL_PIXELS = 3e4,
        a.init = function(b) {
            var c = 0;
            a.UniqueId = function() {
                return c++,
                "canvg" + c
            }
            ,
            a.Definitions = {},
            a.Styles = {},
            a.Animations = [],
            a.Images = [],
            a.ctx = b,
            a.ViewPort = new function() {
                this.viewPorts = [],
                this.Clear = function() {
                    this.viewPorts = []
                }
                ,
                this.SetCurrent = function(a, b) {
                    this.viewPorts.push({
                        width: a,
                        height: b
                    })
                }
                ,
                this.RemoveCurrent = function() {
                    this.viewPorts.pop()
                }
                ,
                this.Current = function() {
                    return this.viewPorts[this.viewPorts.length - 1]
                }
                ,
                this.width = function() {
                    return this.Current().width
                }
                ,
                this.height = function() {
                    return this.Current().height
                }
                ,
                this.ComputeSize = function(a) {
                    return null != a && "number" == typeof a ? a : "x" == a ? this.width() : "y" == a ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
                }
            }
        }
        ,
        a.init(),
        a.ImagesLoaded = function() {
            for (var b = 0; b < a.Images.length; b++)
                if (!a.Images[b].loaded)
                    return !1;
            return !0
        }
        ,
        a.trim = function(a) {
            return a.replace(/^\s+|\s+$/g, "")
        }
        ,
        a.compressSpaces = function(a) {
            return a.replace(/[\s\r\t\n]+/gm, " ")
        }
        ,
        a.ajax = function(a) {
            var b;
            return b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
            b ? (b.open("GET", a, !1),
            b.send(null ),
            b.responseText) : null
        }
        ,
        a.parseXml = function(a) {
            if (window.DOMParser) {
                var b = new DOMParser;
                return b.parseFromString(a, "text/xml")
            }
            a = a.replace(/<!DOCTYPE svg[^>]*>/, "");
            var c = new ActiveXObject("Microsoft.XMLDOM");
            return c.async = "false",
            c.loadXML(a),
            c
        }
        ,
        a.Property = function(a, b) {
            this.name = a,
            this.value = b
        }
        ,
        a.Property.prototype.getValue = function() {
            return this.value
        }
        ,
        a.Property.prototype.hasValue = function() {
            return null != this.value && "" !== this.value
        }
        ,
        a.Property.prototype.numValue = function() {
            if (!this.hasValue())
                return 0;
            var a = parseFloat(this.value);
            return (this.value + "").match(/%$/) && (a /= 100),
            a
        }
        ,
        a.Property.prototype.valueOrDefault = function(a) {
            return this.hasValue() ? this.value : a
        }
        ,
        a.Property.prototype.numValueOrDefault = function(a) {
            return this.hasValue() ? this.numValue() : a
        }
        ,
        a.Property.prototype.addOpacity = function(b) {
            var c = this.value;
            if (null != b && "" != b && "string" == typeof this.value) {
                var d = new RGBColor(this.value);
                d.ok && (c = "rgba(" + d.r + ", " + d.g + ", " + d.b + ", " + b + ")")
            }
            return new a.Property(this.name,c)
        }
        ,
        a.Property.prototype.getDefinition = function() {
            var b = this.value.match(/#([^\)'"]+)/);
            return b && (b = b[1]),
            b || (b = this.value),
            a.Definitions[b]
        }
        ,
        a.Property.prototype.isUrlDefinition = function() {
            return 0 == this.value.indexOf("url(")
        }
        ,
        a.Property.prototype.getFillStyleDefinition = function(b, c) {
            var d = this.getDefinition();
            if (null != d && d.createGradient)
                return d.createGradient(a.ctx, b, c);
            if (null != d && d.createPattern) {
                if (d.getHrefAttribute().hasValue()) {
                    var e = d.attribute("patternTransform");
                    d = d.getHrefAttribute().getDefinition(),
                    e.hasValue() && (d.attribute("patternTransform", !0).value = e.value)
                }
                return d.createPattern(a.ctx, b)
            }
            return null
        }
        ,
        a.Property.prototype.getDPI = function() {
            return 96
        }
        ,
        a.Property.prototype.getEM = function(b) {
            var c = 12
              , d = new a.Property("fontSize",a.Font.Parse(a.ctx.font).fontSize);
            return d.hasValue() && (c = d.toPixels(b)),
            c
        }
        ,
        a.Property.prototype.getUnits = function() {
            var a = this.value + "";
            return a.replace(/[0-9\.\-]/g, "")
        }
        ,
        a.Property.prototype.toPixels = function(b, c) {
            if (!this.hasValue())
                return 0;
            var d = this.value + "";
            if (d.match(/em$/))
                return this.numValue() * this.getEM(b);
            if (d.match(/ex$/))
                return this.numValue() * this.getEM(b) / 2;
            if (d.match(/px$/))
                return this.numValue();
            if (d.match(/pt$/))
                return this.numValue() * this.getDPI(b) * (1 / 72);
            if (d.match(/pc$/))
                return 15 * this.numValue();
            if (d.match(/cm$/))
                return this.numValue() * this.getDPI(b) / 2.54;
            if (d.match(/mm$/))
                return this.numValue() * this.getDPI(b) / 25.4;
            if (d.match(/in$/))
                return this.numValue() * this.getDPI(b);
            if (d.match(/%$/))
                return this.numValue() * a.ViewPort.ComputeSize(b);
            var e = this.numValue();
            return c && 1 > e ? e * a.ViewPort.ComputeSize(b) : e
        }
        ,
        a.Property.prototype.toMilliseconds = function() {
            if (!this.hasValue())
                return 0;
            var a = this.value + "";
            return a.match(/s$/) ? 1e3 * this.numValue() : a.match(/ms$/) ? this.numValue() : this.numValue()
        }
        ,
        a.Property.prototype.toRadians = function() {
            if (!this.hasValue())
                return 0;
            var a = this.value + "";
            return a.match(/deg$/) ? this.numValue() * (Math.PI / 180) : a.match(/grad$/) ? this.numValue() * (Math.PI / 200) : a.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
        }
        ,
        a.Font = new function() {
            this.Styles = "normal|italic|oblique|inherit",
            this.Variants = "normal|small-caps|inherit",
            this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",
            this.CreateFont = function(b, c, d, e, f, g) {
                var h = null != g ? this.Parse(g) : this.CreateFont("", "", "", "", "", a.ctx.font);
                return {
                    fontFamily: f || h.fontFamily,
                    fontSize: e || h.fontSize,
                    fontStyle: b || h.fontStyle,
                    fontWeight: d || h.fontWeight,
                    fontVariant: c || h.fontVariant,
                    toString: function() {
                        return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
                    }
                }
            }
            ;
            var b = this;
            this.Parse = function(c) {
                for (var d = {}, e = a.trim(a.compressSpaces(c || "")).split(" "), f = {
                    fontSize: !1,
                    fontStyle: !1,
                    fontWeight: !1,
                    fontVariant: !1
                }, g = "", h = 0; h < e.length; h++)
                    f.fontStyle || -1 == b.Styles.indexOf(e[h]) ? f.fontVariant || -1 == b.Variants.indexOf(e[h]) ? f.fontWeight || -1 == b.Weights.indexOf(e[h]) ? f.fontSize ? "inherit" != e[h] && (g += e[h]) : ("inherit" != e[h] && (d.fontSize = e[h].split("/")[0]),
                    f.fontStyle = f.fontVariant = f.fontWeight = f.fontSize = !0) : ("inherit" != e[h] && (d.fontWeight = e[h]),
                    f.fontStyle = f.fontVariant = f.fontWeight = !0) : ("inherit" != e[h] && (d.fontVariant = e[h]),
                    f.fontStyle = f.fontVariant = !0) : ("inherit" != e[h] && (d.fontStyle = e[h]),
                    f.fontStyle = !0);
                return "" != g && (d.fontFamily = g),
                d
            }
        }
        ,
        a.ToNumberArray = function(b) {
            for (var c = a.trim(a.compressSpaces((b || "").replace(/,/g, " "))).split(" "), d = 0; d < c.length; d++)
                c[d] = parseFloat(c[d]);
            return c
        }
        ,
        a.Point = function(a, b) {
            this.x = a,
            this.y = b
        }
        ,
        a.Point.prototype.angleTo = function(a) {
            return Math.atan2(a.y - this.y, a.x - this.x)
        }
        ,
        a.Point.prototype.applyTransform = function(a) {
            var b = this.x * a[0] + this.y * a[2] + a[4]
              , c = this.x * a[1] + this.y * a[3] + a[5];
            this.x = b,
            this.y = c
        }
        ,
        a.CreatePoint = function(b) {
            var c = a.ToNumberArray(b);
            return new a.Point(c[0],c[1])
        }
        ,
        a.CreatePath = function(b) {
            for (var c = a.ToNumberArray(b), d = [], e = 0; e < c.length; e += 2)
                d.push(new a.Point(c[e],c[e + 1]));
            return d
        }
        ,
        a.BoundingBox = function(a, b, c, d) {
            this.x1 = Number.NaN,
            this.y1 = Number.NaN,
            this.x2 = Number.NaN,
            this.y2 = Number.NaN,
            this.x = function() {
                return this.x1
            }
            ,
            this.y = function() {
                return this.y1
            }
            ,
            this.width = function() {
                return this.x2 - this.x1
            }
            ,
            this.height = function() {
                return this.y2 - this.y1
            }
            ,
            this.addPoint = function(a, b) {
                null != a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a,
                this.x2 = a),
                a < this.x1 && (this.x1 = a),
                a > this.x2 && (this.x2 = a)),
                null != b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b,
                this.y2 = b),
                b < this.y1 && (this.y1 = b),
                b > this.y2 && (this.y2 = b))
            }
            ,
            this.addX = function(a) {
                this.addPoint(a, null )
            }
            ,
            this.addY = function(a) {
                this.addPoint(null , a)
            }
            ,
            this.addBoundingBox = function(a) {
                this.addPoint(a.x1, a.y1),
                this.addPoint(a.x2, a.y2)
            }
            ,
            this.addQuadraticCurve = function(a, b, c, d, e, f) {
                var g = a + 2 / 3 * (c - a)
                  , h = b + 2 / 3 * (d - b)
                  , i = g + 1 / 3 * (e - a)
                  , j = h + 1 / 3 * (f - b);
                this.addBezierCurve(a, b, g, i, h, j, e, f)
            }
            ,
            this.addBezierCurve = function(a, b, c, d, e, f, g, h) {
                var j = [a, b]
                  , k = [c, d]
                  , l = [e, f]
                  , m = [g, h];
                for (this.addPoint(j[0], j[1]),
                this.addPoint(m[0], m[1]),
                i = 0; 1 >= i; i++) {
                    var n = function(a) {
                        return Math.pow(1 - a, 3) * j[i] + 3 * Math.pow(1 - a, 2) * a * k[i] + 3 * (1 - a) * Math.pow(a, 2) * l[i] + Math.pow(a, 3) * m[i]
                    }
                      , o = 6 * j[i] - 12 * k[i] + 6 * l[i]
                      , p = -3 * j[i] + 9 * k[i] - 9 * l[i] + 3 * m[i]
                      , q = 3 * k[i] - 3 * j[i];
                    if (0 != p) {
                        var r = Math.pow(o, 2) - 4 * q * p;
                        if (!(0 > r)) {
                            var s = (-o + Math.sqrt(r)) / (2 * p);
                            s > 0 && 1 > s && (0 == i && this.addX(n(s)),
                            1 == i && this.addY(n(s)));
                            var t = (-o - Math.sqrt(r)) / (2 * p);
                            t > 0 && 1 > t && (0 == i && this.addX(n(t)),
                            1 == i && this.addY(n(t)))
                        }
                    } else {
                        if (0 == o)
                            continue;
                        var u = -q / o;
                        u > 0 && 1 > u && (0 == i && this.addX(n(u)),
                        1 == i && this.addY(n(u)))
                    }
                }
            }
            ,
            this.isPointInBox = function(a, b) {
                return this.x1 <= a && a <= this.x2 && this.y1 <= b && b <= this.y2
            }
            ,
            this.addPoint(a, b),
            this.addPoint(c, d)
        }
        ,
        a.Transform = function(b) {
            var c = this;
            this.Type = {},
            this.Type.translate = function(b) {
                this.p = a.CreatePoint(b),
                this.apply = function(a) {
                    a.translate(this.p.x || 0, this.p.y || 0)
                }
                ,
                this.unapply = function(a) {
                    a.translate(-1 * this.p.x || 0, -1 * this.p.y || 0)
                }
                ,
                this.applyToPoint = function(a) {
                    a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
                }
            }
            ,
            this.Type.rotate = function(b) {
                var c = a.ToNumberArray(b);
                this.angle = new a.Property("angle",c[0]),
                this.cx = c[1] || 0,
                this.cy = c[2] || 0,
                this.apply = function(a) {
                    a.translate(this.cx, this.cy),
                    a.rotate(this.angle.toRadians()),
                    a.translate(-this.cx, -this.cy)
                }
                ,
                this.unapply = function(a) {
                    a.translate(this.cx, this.cy),
                    a.rotate(-1 * this.angle.toRadians()),
                    a.translate(-this.cx, -this.cy)
                }
                ,
                this.applyToPoint = function(a) {
                    var b = this.angle.toRadians();
                    a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]),
                    a.applyTransform([Math.cos(b), Math.sin(b), -Math.sin(b), Math.cos(b), 0, 0]),
                    a.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
                }
            }
            ,
            this.Type.scale = function(b) {
                this.p = a.CreatePoint(b),
                this.apply = function(a) {
                    a.scale(this.p.x || 1, this.p.y || this.p.x || 1)
                }
                ,
                this.unapply = function(a) {
                    a.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1)
                }
                ,
                this.applyToPoint = function(a) {
                    a.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
                }
            }
            ,
            this.Type.matrix = function(b) {
                this.m = a.ToNumberArray(b),
                this.apply = function(a) {
                    a.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
                }
                ,
                this.applyToPoint = function(a) {
                    a.applyTransform(this.m)
                }
            }
            ,
            this.Type.SkewBase = function(b) {
                this.base = c.Type.matrix,
                this.base(b),
                this.angle = new a.Property("angle",b)
            }
            ,
            this.Type.SkewBase.prototype = new this.Type.matrix,
            this.Type.skewX = function(a) {
                this.base = c.Type.SkewBase,
                this.base(a),
                this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
            }
            ,
            this.Type.skewX.prototype = new this.Type.SkewBase,
            this.Type.skewY = function(a) {
                this.base = c.Type.SkewBase,
                this.base(a),
                this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
            }
            ,
            this.Type.skewY.prototype = new this.Type.SkewBase,
            this.transforms = [],
            this.apply = function(a) {
                for (var b = 0; b < this.transforms.length; b++)
                    this.transforms[b].apply(a)
            }
            ,
            this.unapply = function(a) {
                for (var b = this.transforms.length - 1; b >= 0; b--)
                    this.transforms[b].unapply(a)
            }
            ,
            this.applyToPoint = function(a) {
                for (var b = 0; b < this.transforms.length; b++)
                    this.transforms[b].applyToPoint(a)
            }
            ;
            for (var d = a.trim(a.compressSpaces(b)).replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), e = 0; e < d.length; e++) {
                var f = a.trim(d[e].split("(")[0])
                  , g = d[e].split("(")[1].replace(")", "")
                  , h = new this.Type[f](g);
                h.type = f,
                this.transforms.push(h)
            }
        }
        ,
        a.AspectRatio = function(b, c, d, e, f, g, h, i, j, k) {
            c = a.compressSpaces(c),
            c = c.replace(/^defer\s/, "");
            var l = c.split(" ")[0] || "xMidYMid"
              , m = c.split(" ")[1] || "meet"
              , n = d / e
              , o = f / g
              , p = Math.min(n, o)
              , q = Math.max(n, o);
            "meet" == m && (e *= p,
            g *= p),
            "slice" == m && (e *= q,
            g *= q),
            j = new a.Property("refX",j),
            k = new a.Property("refY",k),
            j.hasValue() && k.hasValue() ? b.translate(-p * j.toPixels("x"), -p * k.toPixels("y")) : (l.match(/^xMid/) && ("meet" == m && p == o || "slice" == m && q == o) && b.translate(d / 2 - e / 2, 0),
            l.match(/YMid$/) && ("meet" == m && p == n || "slice" == m && q == n) && b.translate(0, f / 2 - g / 2),
            l.match(/^xMax/) && ("meet" == m && p == o || "slice" == m && q == o) && b.translate(d - e, 0),
            l.match(/YMax$/) && ("meet" == m && p == n || "slice" == m && q == n) && b.translate(0, f - g)),
            "none" == l ? b.scale(n, o) : "meet" == m ? b.scale(p, p) : "slice" == m && b.scale(q, q),
            b.translate(null == h ? 0 : -h, null == i ? 0 : -i)
        }
        ,
        a.Element = {},
        a.EmptyProperty = new a.Property("EMPTY",""),
        a.Element.ElementBase = function(b) {
            if (this.attributes = {},
            this.styles = {},
            this.children = [],
            this.attribute = function(b, c) {
                var d = this.attributes[b];
                return null != d ? d : (1 == c && (d = new a.Property(b,""),
                this.attributes[b] = d),
                d || a.EmptyProperty)
            }
            ,
            this.getHrefAttribute = function() {
                for (var b in this.attributes)
                    if (b.match(/:href$/))
                        return this.attributes[b];
                return a.EmptyProperty
            }
            ,
            this.style = function(b, c) {
                var d = this.styles[b];
                if (null != d)
                    return d;
                var e = this.attribute(b);
                if (null != e && e.hasValue())
                    return this.styles[b] = e,
                    e;
                var f = this.parent;
                if (null != f) {
                    var g = f.style(b);
                    if (null != g && g.hasValue())
                        return g
                }
                return 1 == c && (d = new a.Property(b,""),
                this.styles[b] = d),
                d || a.EmptyProperty
            }
            ,
            this.render = function(a) {
                if ("none" != this.style("display").value && "hidden" != this.attribute("visibility").value) {
                    if (a.save(),
                    this.attribute("mask").hasValue()) {
                        var b = this.attribute("mask").getDefinition();
                        null != b && b.apply(a, this)
                    } else if (this.style("filter").hasValue()) {
                        var c = this.style("filter").getDefinition();
                        null != c && c.apply(a, this)
                    } else
                        this.setContext(a),
                        this.renderChildren(a),
                        this.clearContext(a);
                    a.restore()
                }
            }
            ,
            this.setContext = function() {}
            ,
            this.clearContext = function() {}
            ,
            this.renderChildren = function(a) {
                for (var b = 0; b < this.children.length; b++)
                    this.children[b].render(a)
            }
            ,
            this.addChild = function(b, c) {
                var d = b;
                c && (d = a.CreateElement(b)),
                d.parent = this,
                this.children.push(d)
            }
            ,
            null != b && 1 == b.nodeType) {
                for (var c = 0; c < b.childNodes.length; c++) {
                    var d = b.childNodes[c];
                    if (1 == d.nodeType && this.addChild(d, !0),
                    this.captureTextNodes && 3 == d.nodeType) {
                        var e = d.nodeValue || d.text || "";
                        "" != a.trim(a.compressSpaces(e)) && this.addChild(new a.Element.tspan(d), !1)
                    }
                }
                for (var c = 0; c < b.attributes.length; c++) {
                    var f = b.attributes[c];
                    this.attributes[f.nodeName] = new a.Property(f.nodeName,f.nodeValue)
                }
                var g = a.Styles[b.nodeName];
                if (null != g)
                    for (var h in g)
                        this.styles[h] = g[h];
                if (this.attribute("class").hasValue())
                    for (var i = a.compressSpaces(this.attribute("class").value).split(" "), j = 0; j < i.length; j++) {
                        if (g = a.Styles["." + i[j]],
                        null != g)
                            for (var h in g)
                                this.styles[h] = g[h];
                        if (g = a.Styles[b.nodeName + "." + i[j]],
                        null != g)
                            for (var h in g)
                                this.styles[h] = g[h]
                    }
                if (this.attribute("id").hasValue()) {
                    var g = a.Styles["#" + this.attribute("id").value];
                    if (null != g)
                        for (var h in g)
                            this.styles[h] = g[h]
                }
                if (this.attribute("style").hasValue())
                    for (var g = this.attribute("style").value.split(";"), c = 0; c < g.length; c++)
                        if ("" != a.trim(g[c])) {
                            var k = g[c].split(":")
                              , h = a.trim(k[0])
                              , l = a.trim(k[1]);
                            this.styles[h] = new a.Property(h,l)
                        }
                this.attribute("id").hasValue() && null == a.Definitions[this.attribute("id").value] && (a.Definitions[this.attribute("id").value] = this)
            }
        }
        ,
        a.Element.RenderedElementBase = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.setContext = function(b) {
                if (this.style("fill").isUrlDefinition()) {
                    var c = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
                    null != c && (b.fillStyle = c)
                } else if (this.style("fill").hasValue()) {
                    var d = this.style("fill");
                    "currentColor" == d.value && (d.value = this.style("color").value),
                    b.fillStyle = "none" == d.value ? "rgba(0,0,0,0)" : d.value
                }
                if (this.style("fill-opacity").hasValue()) {
                    var d = new a.Property("fill",b.fillStyle);
                    d = d.addOpacity(this.style("fill-opacity").value),
                    b.fillStyle = d.value
                }
                if (this.style("stroke").isUrlDefinition()) {
                    var c = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
                    null != c && (b.strokeStyle = c)
                } else if (this.style("stroke").hasValue()) {
                    var e = this.style("stroke");
                    "currentColor" == e.value && (e.value = this.style("color").value),
                    b.strokeStyle = "none" == e.value ? "rgba(0,0,0,0)" : e.value
                }
                if (this.style("stroke-opacity").hasValue()) {
                    var e = new a.Property("stroke",b.strokeStyle);
                    e = e.addOpacity(this.style("stroke-opacity").value),
                    b.strokeStyle = e.value
                }
                if (this.style("stroke-width").hasValue()) {
                    var f = this.style("stroke-width").toPixels();
                    b.lineWidth = 0 == f ? .001 : f
                }
                if (this.style("stroke-linecap").hasValue() && (b.lineCap = this.style("stroke-linecap").value),
                this.style("stroke-linejoin").hasValue() && (b.lineJoin = this.style("stroke-linejoin").value),
                this.style("stroke-miterlimit").hasValue() && (b.miterLimit = this.style("stroke-miterlimit").value),
                this.style("stroke-dasharray").hasValue()) {
                    var g = a.ToNumberArray(this.style("stroke-dasharray").value);
                    "undefined" != typeof b.setLineDash ? b.setLineDash(g) : "undefined" != typeof b.webkitLineDash ? b.webkitLineDash = g : "undefined" != typeof b.mozDash && (b.mozDash = g);
                    var h = this.style("stroke-dashoffset").numValueOrDefault(1);
                    "undefined" != typeof b.lineDashOffset ? b.lineDashOffset = h : "undefined" != typeof b.webkitLineDashOffset ? b.webkitLineDashOffset = h : "undefined" != typeof b.mozDashOffset && (b.mozDashOffset = h)
                }
                if ("undefined" != typeof b.font && (b.font = a.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()),
                this.attribute("transform").hasValue()) {
                    var i = new a.Transform(this.attribute("transform").value);
                    i.apply(b)
                }
                if (this.style("clip-path").hasValue()) {
                    var j = this.style("clip-path").getDefinition();
                    null != j && j.apply(b)
                }
                this.style("opacity").hasValue() && (b.globalAlpha = this.style("opacity").numValue())
            }
        }
        ,
        a.Element.RenderedElementBase.prototype = new a.Element.ElementBase,
        a.Element.PathElementBase = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.path = function(b) {
                return null != b && b.beginPath(),
                new a.BoundingBox
            }
            ,
            this.renderChildren = function(b) {
                this.path(b),
                a.Mouse.checkPath(this, b),
                "" != b.fillStyle && (this.attribute("fill-rule").hasValue() ? b.fill(this.attribute("fill-rule").value) : b.fill()),
                "" != b.strokeStyle && b.stroke();
                var c = this.getMarkers();
                if (null != c) {
                    if (this.style("marker-start").isUrlDefinition()) {
                        var d = this.style("marker-start").getDefinition();
                        d.render(b, c[0][0], c[0][1])
                    }
                    if (this.style("marker-mid").isUrlDefinition())
                        for (var d = this.style("marker-mid").getDefinition(), e = 1; e < c.length - 1; e++)
                            d.render(b, c[e][0], c[e][1]);
                    if (this.style("marker-end").isUrlDefinition()) {
                        var d = this.style("marker-end").getDefinition();
                        d.render(b, c[c.length - 1][0], c[c.length - 1][1])
                    }
                }
            }
            ,
            this.getBoundingBox = function() {
                return this.path()
            }
            ,
            this.getMarkers = function() {
                return null
            }
        }
        ,
        a.Element.PathElementBase.prototype = new a.Element.RenderedElementBase,
        a.Element.svg = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.baseClearContext = this.clearContext,
            this.clearContext = function(b) {
                this.baseClearContext(b),
                a.ViewPort.RemoveCurrent()
            }
            ,
            this.baseSetContext = this.setContext,
            this.setContext = function(b) {
                b.strokeStyle = "rgba(0,0,0,0)",
                b.lineCap = "butt",
                b.lineJoin = "miter",
                b.miterLimit = 4,
                this.baseSetContext(b),
                this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0),
                this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0),
                b.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
                var c = a.ViewPort.width()
                  , d = a.ViewPort.height();
                if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"),
                this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"),
                "undefined" == typeof this.root) {
                    c = this.attribute("width").toPixels("x"),
                    d = this.attribute("height").toPixels("y");
                    var e = 0
                      , f = 0;
                    this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (e = -this.attribute("refX").toPixels("x"),
                    f = -this.attribute("refY").toPixels("y")),
                    b.beginPath(),
                    b.moveTo(e, f),
                    b.lineTo(c, f),
                    b.lineTo(c, d),
                    b.lineTo(e, d),
                    b.closePath(),
                    b.clip()
                }
                if (a.ViewPort.SetCurrent(c, d),
                this.attribute("viewBox").hasValue()) {
                    var g = a.ToNumberArray(this.attribute("viewBox").value)
                      , h = g[0]
                      , i = g[1];
                    c = g[2],
                    d = g[3],
                    a.AspectRatio(b, this.attribute("preserveAspectRatio").value, a.ViewPort.width(), c, a.ViewPort.height(), d, h, i, this.attribute("refX").value, this.attribute("refY").value),
                    a.ViewPort.RemoveCurrent(),
                    a.ViewPort.SetCurrent(g[2], g[3])
                }
            }
        }
        ,
        a.Element.svg.prototype = new a.Element.RenderedElementBase,
        a.Element.rect = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b),
            this.path = function(b) {
                var c = this.attribute("x").toPixels("x")
                  , d = this.attribute("y").toPixels("y")
                  , e = this.attribute("width").toPixels("x")
                  , f = this.attribute("height").toPixels("y")
                  , g = this.attribute("rx").toPixels("x")
                  , h = this.attribute("ry").toPixels("y");
                return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (h = g),
                this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (g = h),
                g = Math.min(g, e / 2),
                h = Math.min(h, f / 2),
                null != b && (b.beginPath(),
                b.moveTo(c + g, d),
                b.lineTo(c + e - g, d),
                b.quadraticCurveTo(c + e, d, c + e, d + h),
                b.lineTo(c + e, d + f - h),
                b.quadraticCurveTo(c + e, d + f, c + e - g, d + f),
                b.lineTo(c + g, d + f),
                b.quadraticCurveTo(c, d + f, c, d + f - h),
                b.lineTo(c, d + h),
                b.quadraticCurveTo(c, d, c + g, d),
                b.closePath()),
                new a.BoundingBox(c,d,c + e,d + f)
            }
        }
        ,
        a.Element.rect.prototype = new a.Element.PathElementBase,
        a.Element.circle = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b),
            this.path = function(b) {
                var c = this.attribute("cx").toPixels("x")
                  , d = this.attribute("cy").toPixels("y")
                  , e = this.attribute("r").toPixels();
                return null != b && (b.beginPath(),
                b.arc(c, d, e, 0, 2 * Math.PI, !0),
                b.closePath()),
                new a.BoundingBox(c - e,d - e,c + e,d + e)
            }
        }
        ,
        a.Element.circle.prototype = new a.Element.PathElementBase,
        a.Element.ellipse = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b),
            this.path = function(b) {
                var c = 4 * ((Math.sqrt(2) - 1) / 3)
                  , d = this.attribute("rx").toPixels("x")
                  , e = this.attribute("ry").toPixels("y")
                  , f = this.attribute("cx").toPixels("x")
                  , g = this.attribute("cy").toPixels("y");
                return null != b && (b.beginPath(),
                b.moveTo(f, g - e),
                b.bezierCurveTo(f + c * d, g - e, f + d, g - c * e, f + d, g),
                b.bezierCurveTo(f + d, g + c * e, f + c * d, g + e, f, g + e),
                b.bezierCurveTo(f - c * d, g + e, f - d, g + c * e, f - d, g),
                b.bezierCurveTo(f - d, g - c * e, f - c * d, g - e, f, g - e),
                b.closePath()),
                new a.BoundingBox(f - d,g - e,f + d,g + e)
            }
        }
        ,
        a.Element.ellipse.prototype = new a.Element.PathElementBase,
        a.Element.line = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b),
            this.getPoints = function() {
                return [new a.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")), new a.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]
            }
            ,
            this.path = function(b) {
                var c = this.getPoints();
                return null != b && (b.beginPath(),
                b.moveTo(c[0].x, c[0].y),
                b.lineTo(c[1].x, c[1].y)),
                new a.BoundingBox(c[0].x,c[0].y,c[1].x,c[1].y)
            }
            ,
            this.getMarkers = function() {
                var a = this.getPoints()
                  , b = a[0].angleTo(a[1]);
                return [[a[0], b], [a[1], b]]
            }
        }
        ,
        a.Element.line.prototype = new a.Element.PathElementBase,
        a.Element.polyline = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b),
            this.points = a.CreatePath(this.attribute("points").value),
            this.path = function(b) {
                var c = new a.BoundingBox(this.points[0].x,this.points[0].y);
                null != b && (b.beginPath(),
                b.moveTo(this.points[0].x, this.points[0].y));
                for (var d = 1; d < this.points.length; d++)
                    c.addPoint(this.points[d].x, this.points[d].y),
                    null != b && b.lineTo(this.points[d].x, this.points[d].y);
                return c
            }
            ,
            this.getMarkers = function() {
                for (var a = [], b = 0; b < this.points.length - 1; b++)
                    a.push([this.points[b], this.points[b].angleTo(this.points[b + 1])]);
                return a.push([this.points[this.points.length - 1], a[a.length - 1][1]]),
                a
            }
        }
        ,
        a.Element.polyline.prototype = new a.Element.PathElementBase,
        a.Element.polygon = function(b) {
            this.base = a.Element.polyline,
            this.base(b),
            this.basePath = this.path,
            this.path = function(a) {
                var b = this.basePath(a);
                return null != a && (a.lineTo(this.points[0].x, this.points[0].y),
                a.closePath()),
                b
            }
        }
        ,
        a.Element.polygon.prototype = new a.Element.polyline,
        a.Element.path = function(b) {
            this.base = a.Element.PathElementBase,
            this.base(b);
            var c = this.attribute("d").value;
            c = c.replace(/,/gm, " "),
            c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"),
            c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"),
            c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2"),
            c = c.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"),
            c = c.replace(/([0-9])([+\-])/gm, "$1 $2"),
            c = c.replace(/(\.[0-9]*)(\.)/gm, "$1 $2"),
            c = c.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "),
            c = a.compressSpaces(c),
            c = a.trim(c),
            this.PathParser = new function(b) {
                this.tokens = b.split(" "),
                this.reset = function() {
                    this.i = -1,
                    this.command = "",
                    this.previousCommand = "",
                    this.start = new a.Point(0,0),
                    this.control = new a.Point(0,0),
                    this.current = new a.Point(0,0),
                    this.points = [],
                    this.angles = []
                }
                ,
                this.isEnd = function() {
                    return this.i >= this.tokens.length - 1
                }
                ,
                this.isCommandOrEnd = function() {
                    return this.isEnd() ? !0 : null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                }
                ,
                this.isRelativeCommand = function() {
                    switch (this.command) {
                    case "m":
                    case "l":
                    case "h":
                    case "v":
                    case "c":
                    case "s":
                    case "q":
                    case "t":
                    case "a":
                    case "z":
                        return !0
                    }
                    return !1
                }
                ,
                this.getToken = function() {
                    return this.i++,
                    this.tokens[this.i]
                }
                ,
                this.getScalar = function() {
                    return parseFloat(this.getToken())
                }
                ,
                this.nextCommand = function() {
                    this.previousCommand = this.command,
                    this.command = this.getToken()
                }
                ,
                this.getPoint = function() {
                    var b = new a.Point(this.getScalar(),this.getScalar());
                    return this.makeAbsolute(b)
                }
                ,
                this.getAsControlPoint = function() {
                    var a = this.getPoint();
                    return this.control = a,
                    a
                }
                ,
                this.getAsCurrentPoint = function() {
                    var a = this.getPoint();
                    return this.current = a,
                    a
                }
                ,
                this.getReflectedControlPoint = function() {
                    if ("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase())
                        return this.current;
                    var b = new a.Point(2 * this.current.x - this.control.x,2 * this.current.y - this.control.y);
                    return b
                }
                ,
                this.makeAbsolute = function(a) {
                    return this.isRelativeCommand() && (a.x += this.current.x,
                    a.y += this.current.y),
                    a
                }
                ,
                this.addMarker = function(a, b, c) {
                    null != c && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(c)),
                    this.addMarkerAngle(a, null == b ? null : b.angleTo(a))
                }
                ,
                this.addMarkerAngle = function(a, b) {
                    this.points.push(a),
                    this.angles.push(b)
                }
                ,
                this.getMarkerPoints = function() {
                    return this.points
                }
                ,
                this.getMarkerAngles = function() {
                    for (var a = 0; a < this.angles.length; a++)
                        if (null == this.angles[a])
                            for (var b = a + 1; b < this.angles.length; b++)
                                if (null != this.angles[b]) {
                                    this.angles[a] = this.angles[b];
                                    break
                                }
                    return this.angles
                }
            }
            (c),
            this.path = function(b) {
                var c = this.PathParser;
                c.reset();
                var d = new a.BoundingBox;
                for (null != b && b.beginPath(); !c.isEnd(); )
                    switch (c.nextCommand(),
                    c.command) {
                    case "M":
                    case "m":
                        var e = c.getAsCurrentPoint();
                        for (c.addMarker(e),
                        d.addPoint(e.x, e.y),
                        null != b && b.moveTo(e.x, e.y),
                        c.start = c.current; !c.isCommandOrEnd(); ) {
                            var e = c.getAsCurrentPoint();
                            c.addMarker(e, c.start),
                            d.addPoint(e.x, e.y),
                            null != b && b.lineTo(e.x, e.y)
                        }
                        break;
                    case "L":
                    case "l":
                        for (; !c.isCommandOrEnd(); ) {
                            var f = c.current
                              , e = c.getAsCurrentPoint();
                            c.addMarker(e, f),
                            d.addPoint(e.x, e.y),
                            null != b && b.lineTo(e.x, e.y)
                        }
                        break;
                    case "H":
                    case "h":
                        for (; !c.isCommandOrEnd(); ) {
                            var g = new a.Point((c.isRelativeCommand() ? c.current.x : 0) + c.getScalar(),c.current.y);
                            c.addMarker(g, c.current),
                            c.current = g,
                            d.addPoint(c.current.x, c.current.y),
                            null != b && b.lineTo(c.current.x, c.current.y)
                        }
                        break;
                    case "V":
                    case "v":
                        for (; !c.isCommandOrEnd(); ) {
                            var g = new a.Point(c.current.x,(c.isRelativeCommand() ? c.current.y : 0) + c.getScalar());
                            c.addMarker(g, c.current),
                            c.current = g,
                            d.addPoint(c.current.x, c.current.y),
                            null != b && b.lineTo(c.current.x, c.current.y)
                        }
                        break;
                    case "C":
                    case "c":
                        for (; !c.isCommandOrEnd(); ) {
                            var h = c.current
                              , i = c.getPoint()
                              , j = c.getAsControlPoint()
                              , k = c.getAsCurrentPoint();
                            c.addMarker(k, j, i),
                            d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y),
                            null != b && b.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
                        }
                        break;
                    case "S":
                    case "s":
                        for (; !c.isCommandOrEnd(); ) {
                            var h = c.current
                              , i = c.getReflectedControlPoint()
                              , j = c.getAsControlPoint()
                              , k = c.getAsCurrentPoint();
                            c.addMarker(k, j, i),
                            d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y),
                            null != b && b.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
                        }
                        break;
                    case "Q":
                    case "q":
                        for (; !c.isCommandOrEnd(); ) {
                            var h = c.current
                              , j = c.getAsControlPoint()
                              , k = c.getAsCurrentPoint();
                            c.addMarker(k, j, j),
                            d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y),
                            null != b && b.quadraticCurveTo(j.x, j.y, k.x, k.y)
                        }
                        break;
                    case "T":
                    case "t":
                        for (; !c.isCommandOrEnd(); ) {
                            var h = c.current
                              , j = c.getReflectedControlPoint();
                            c.control = j;
                            var k = c.getAsCurrentPoint();
                            c.addMarker(k, j, j),
                            d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y),
                            null != b && b.quadraticCurveTo(j.x, j.y, k.x, k.y)
                        }
                        break;
                    case "A":
                    case "a":
                        for (; !c.isCommandOrEnd(); ) {
                            var h = c.current
                              , l = c.getScalar()
                              , m = c.getScalar()
                              , n = c.getScalar() * (Math.PI / 180)
                              , o = c.getScalar()
                              , p = c.getScalar()
                              , k = c.getAsCurrentPoint()
                              , q = new a.Point(Math.cos(n) * (h.x - k.x) / 2 + Math.sin(n) * (h.y - k.y) / 2,-Math.sin(n) * (h.x - k.x) / 2 + Math.cos(n) * (h.y - k.y) / 2)
                              , r = Math.pow(q.x, 2) / Math.pow(l, 2) + Math.pow(q.y, 2) / Math.pow(m, 2);
                            r > 1 && (l *= Math.sqrt(r),
                            m *= Math.sqrt(r));
                            var s = (o == p ? -1 : 1) * Math.sqrt((Math.pow(l, 2) * Math.pow(m, 2) - Math.pow(l, 2) * Math.pow(q.y, 2) - Math.pow(m, 2) * Math.pow(q.x, 2)) / (Math.pow(l, 2) * Math.pow(q.y, 2) + Math.pow(m, 2) * Math.pow(q.x, 2)));
                            isNaN(s) && (s = 0);
                            var t = new a.Point(s * l * q.y / m,s * -m * q.x / l)
                              , u = new a.Point((h.x + k.x) / 2 + Math.cos(n) * t.x - Math.sin(n) * t.y,(h.y + k.y) / 2 + Math.sin(n) * t.x + Math.cos(n) * t.y)
                              , v = function(a) {
                                return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
                            }
                              , w = function(a, b) {
                                return (a[0] * b[0] + a[1] * b[1]) / (v(a) * v(b))
                            }
                              , x = function(a, b) {
                                return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(w(a, b))
                            }
                              , y = x([1, 0], [(q.x - t.x) / l, (q.y - t.y) / m])
                              , z = [(q.x - t.x) / l, (q.y - t.y) / m]
                              , A = [(-q.x - t.x) / l, (-q.y - t.y) / m]
                              , B = x(z, A);
                            w(z, A) <= -1 && (B = Math.PI),
                            w(z, A) >= 1 && (B = 0);
                            var C = 1 - p ? 1 : -1
                              , D = y + C * (B / 2)
                              , E = new a.Point(u.x + l * Math.cos(D),u.y + m * Math.sin(D));
                            if (c.addMarkerAngle(E, D - C * Math.PI / 2),
                            c.addMarkerAngle(k, D - C * Math.PI),
                            d.addPoint(k.x, k.y),
                            null != b) {
                                var w = l > m ? l : m
                                  , F = l > m ? 1 : l / m
                                  , G = l > m ? m / l : 1;
                                b.translate(u.x, u.y),
                                b.rotate(n),
                                b.scale(F, G),
                                b.arc(0, 0, w, y, y + B, 1 - p),
                                b.scale(1 / F, 1 / G),
                                b.rotate(-n),
                                b.translate(-u.x, -u.y)
                            }
                        }
                        break;
                    case "Z":
                    case "z":
                        null != b && b.closePath(),
                        c.current = c.start
                    }
                return d
            }
            ,
            this.getMarkers = function() {
                for (var a = this.PathParser.getMarkerPoints(), b = this.PathParser.getMarkerAngles(), c = [], d = 0; d < a.length; d++)
                    c.push([a[d], b[d]]);
                return c
            }
        }
        ,
        a.Element.path.prototype = new a.Element.PathElementBase,
        a.Element.pattern = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.createPattern = function(b) {
                var c = this.attribute("width").toPixels("x", !0)
                  , d = this.attribute("height").toPixels("y", !0)
                  , e = new a.Element.svg;
                e.attributes.viewBox = new a.Property("viewBox",this.attribute("viewBox").value),
                e.attributes.width = new a.Property("width",c + "px"),
                e.attributes.height = new a.Property("height",d + "px"),
                e.attributes.transform = new a.Property("transform",this.attribute("patternTransform").value),
                e.children = this.children;
                var f = document.createElement("canvas");
                f.width = c,
                f.height = d;
                var g = f.getContext("2d");
                this.attribute("x").hasValue() && this.attribute("y").hasValue() && g.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0));
                for (var h = -1; 1 >= h; h++)
                    for (var i = -1; 1 >= i; i++)
                        g.save(),
                        g.translate(h * f.width, i * f.height),
                        e.render(g),
                        g.restore();
                var j = b.createPattern(f, "repeat");
                return j
            }
        }
        ,
        a.Element.pattern.prototype = new a.Element.ElementBase,
        a.Element.marker = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.baseRender = this.render,
            this.render = function(b, c, d) {
                b.translate(c.x, c.y),
                "auto" == this.attribute("orient").valueOrDefault("auto") && b.rotate(d),
                "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && b.scale(b.lineWidth, b.lineWidth),
                b.save();
                var e = new a.Element.svg;
                e.attributes.viewBox = new a.Property("viewBox",this.attribute("viewBox").value),
                e.attributes.refX = new a.Property("refX",this.attribute("refX").value),
                e.attributes.refY = new a.Property("refY",this.attribute("refY").value),
                e.attributes.width = new a.Property("width",this.attribute("markerWidth").value),
                e.attributes.height = new a.Property("height",this.attribute("markerHeight").value),
                e.attributes.fill = new a.Property("fill",this.attribute("fill").valueOrDefault("black")),
                e.attributes.stroke = new a.Property("stroke",this.attribute("stroke").valueOrDefault("none")),
                e.children = this.children,
                e.render(b),
                b.restore(),
                "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && b.scale(1 / b.lineWidth, 1 / b.lineWidth),
                "auto" == this.attribute("orient").valueOrDefault("auto") && b.rotate(-d),
                b.translate(-c.x, -c.y)
            }
        }
        ,
        a.Element.marker.prototype = new a.Element.ElementBase,
        a.Element.defs = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.render = function() {}
        }
        ,
        a.Element.defs.prototype = new a.Element.ElementBase,
        a.Element.GradientBase = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.gradientUnits = this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"),
            this.stops = [];
            for (var c = 0; c < this.children.length; c++) {
                var d = this.children[c];
                "stop" == d.type && this.stops.push(d)
            }
            this.getGradient = function() {}
            ,
            this.createGradient = function(b, c, d) {
                var e = this;
                this.getHrefAttribute().hasValue() && (e = this.getHrefAttribute().getDefinition());
                var f = function(b) {
                    if (d.hasValue()) {
                        var c = new a.Property("color",b);
                        return c.addOpacity(d.value).value
                    }
                    return b
                }
                  , g = this.getGradient(b, c);
                if (null == g)
                    return f(e.stops[e.stops.length - 1].color);
                for (var h = 0; h < e.stops.length; h++)
                    g.addColorStop(e.stops[h].offset, f(e.stops[h].color));
                if (this.attribute("gradientTransform").hasValue()) {
                    var i = a.ViewPort.viewPorts[0]
                      , j = new a.Element.rect;
                    j.attributes.x = new a.Property("x",-a.MAX_VIRTUAL_PIXELS / 3),
                    j.attributes.y = new a.Property("y",-a.MAX_VIRTUAL_PIXELS / 3),
                    j.attributes.width = new a.Property("width",a.MAX_VIRTUAL_PIXELS),
                    j.attributes.height = new a.Property("height",a.MAX_VIRTUAL_PIXELS);
                    var k = new a.Element.g;
                    k.attributes.transform = new a.Property("transform",this.attribute("gradientTransform").value),
                    k.children = [j];
                    var l = new a.Element.svg;
                    l.attributes.x = new a.Property("x",0),
                    l.attributes.y = new a.Property("y",0),
                    l.attributes.width = new a.Property("width",i.width),
                    l.attributes.height = new a.Property("height",i.height),
                    l.children = [k];
                    var m = document.createElement("canvas");
                    m.width = i.width,
                    m.height = i.height;
                    var n = m.getContext("2d");
                    return n.fillStyle = g,
                    l.render(n),
                    n.createPattern(m, "no-repeat")
                }
                return g
            }
        }
        ,
        a.Element.GradientBase.prototype = new a.Element.ElementBase,
        a.Element.linearGradient = function(b) {
            this.base = a.Element.GradientBase,
            this.base(b),
            this.getGradient = function(a, b) {
                var c = b.getBoundingBox();
                this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0,
                this.attribute("y1", !0).value = 0,
                this.attribute("x2", !0).value = 1,
                this.attribute("y2", !0).value = 0);
                var d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x")
                  , e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y")
                  , f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x")
                  , g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
                return d == f && e == g ? null : a.createLinearGradient(d, e, f, g)
            }
        }
        ,
        a.Element.linearGradient.prototype = new a.Element.GradientBase,
        a.Element.radialGradient = function(b) {
            this.base = a.Element.GradientBase,
            this.base(b),
            this.getGradient = function(a, b) {
                var c = b.getBoundingBox();
                this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"),
                this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"),
                this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
                var d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x")
                  , e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y")
                  , f = d
                  , g = e;
                this.attribute("fx").hasValue() && (f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")),
                this.attribute("fy").hasValue() && (g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
                var h = "objectBoundingBox" == this.gradientUnits ? (c.width() + c.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
                return a.createRadialGradient(f, g, 0, d, e, h)
            }
        }
        ,
        a.Element.radialGradient.prototype = new a.Element.GradientBase,
        a.Element.stop = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.offset = this.attribute("offset").numValue(),
            this.offset < 0 && (this.offset = 0),
            this.offset > 1 && (this.offset = 1);
            var c = this.style("stop-color");
            this.style("stop-opacity").hasValue() && (c = c.addOpacity(this.style("stop-opacity").value)),
            this.color = c.value
        }
        ,
        a.Element.stop.prototype = new a.Element.ElementBase,
        a.Element.AnimateBase = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            a.Animations.push(this),
            this.duration = 0,
            this.begin = this.attribute("begin").toMilliseconds(),
            this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(),
            this.getProperty = function() {
                var a = this.attribute("attributeType").value
                  , b = this.attribute("attributeName").value;
                return "CSS" == a ? this.parent.style(b, !0) : this.parent.attribute(b, !0)
            }
            ,
            this.initialValue = null ,
            this.initialUnits = "",
            this.removed = !1,
            this.calcValue = function() {
                return ""
            }
            ,
            this.update = function(a) {
                if (null == this.initialValue && (this.initialValue = this.getProperty().value,
                this.initialUnits = this.getProperty().getUnits()),
                this.duration > this.maxDuration) {
                    if ("indefinite" != this.attribute("repeatCount").value && "indefinite" != this.attribute("repeatDur").value)
                        return "remove" != this.attribute("fill").valueOrDefault("remove") || this.removed ? !1 : (this.removed = !0,
                        this.getProperty().value = this.initialValue,
                        !0);
                    this.duration = 0
                }
                this.duration = this.duration + a;
                var b = !1;
                if (this.begin < this.duration) {
                    var c = this.calcValue();
                    if (this.attribute("type").hasValue()) {
                        var d = this.attribute("type").value;
                        c = d + "(" + c + ")"
                    }
                    this.getProperty().value = c,
                    b = !0
                }
                return b
            }
            ,
            this.from = this.attribute("from"),
            this.to = this.attribute("to"),
            this.values = this.attribute("values"),
            this.values.hasValue() && (this.values.value = this.values.value.split(";")),
            this.progress = function() {
                var b = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (this.values.hasValue()) {
                    var c = b.progress * (this.values.value.length - 1)
                      , d = Math.floor(c)
                      , e = Math.ceil(c);
                    b.from = new a.Property("from",parseFloat(this.values.value[d])),
                    b.to = new a.Property("to",parseFloat(this.values.value[e])),
                    b.progress = (c - d) / (e - d)
                } else
                    b.from = this.from,
                    b.to = this.to;
                return b
            }
        }
        ,
        a.Element.AnimateBase.prototype = new a.Element.ElementBase,
        a.Element.animate = function(b) {
            this.base = a.Element.AnimateBase,
            this.base(b),
            this.calcValue = function() {
                var a = this.progress()
                  , b = a.from.numValue() + (a.to.numValue() - a.from.numValue()) * a.progress;
                return b + this.initialUnits
            }
        }
        ,
        a.Element.animate.prototype = new a.Element.AnimateBase,
        a.Element.animateColor = function(b) {
            this.base = a.Element.AnimateBase,
            this.base(b),
            this.calcValue = function() {
                var a = this.progress()
                  , b = new RGBColor(a.from.value)
                  , c = new RGBColor(a.to.value);
                if (b.ok && c.ok) {
                    var d = b.r + (c.r - b.r) * a.progress
                      , e = b.g + (c.g - b.g) * a.progress
                      , f = b.b + (c.b - b.b) * a.progress;
                    return "rgb(" + parseInt(d, 10) + "," + parseInt(e, 10) + "," + parseInt(f, 10) + ")"
                }
                return this.attribute("from").value
            }
        }
        ,
        a.Element.animateColor.prototype = new a.Element.AnimateBase,
        a.Element.animateTransform = function(b) {
            this.base = a.Element.AnimateBase,
            this.base(b),
            this.calcValue = function() {
                for (var b = this.progress(), c = a.ToNumberArray(b.from.value), d = a.ToNumberArray(b.to.value), e = "", f = 0; f < c.length; f++)
                    e += c[f] + (d[f] - c[f]) * b.progress + " ";
                return e
            }
        }
        ,
        a.Element.animateTransform.prototype = new a.Element.animate,
        a.Element.font = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.horizAdvX = this.attribute("horiz-adv-x").numValue(),
            this.isRTL = !1,
            this.isArabic = !1,
            this.fontFace = null ,
            this.missingGlyph = null ,
            this.glyphs = [];
            for (var c = 0; c < this.children.length; c++) {
                var d = this.children[c];
                "font-face" == d.type ? (this.fontFace = d,
                d.style("font-family").hasValue() && (a.Definitions[d.style("font-family").value] = this)) : "missing-glyph" == d.type ? this.missingGlyph = d : "glyph" == d.type && ("" != d.arabicForm ? (this.isRTL = !0,
                this.isArabic = !0,
                "undefined" == typeof this.glyphs[d.unicode] && (this.glyphs[d.unicode] = []),
                this.glyphs[d.unicode][d.arabicForm] = d) : this.glyphs[d.unicode] = d)
            }
        }
        ,
        a.Element.font.prototype = new a.Element.ElementBase,
        a.Element.fontface = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.ascent = this.attribute("ascent").value,
            this.descent = this.attribute("descent").value,
            this.unitsPerEm = this.attribute("units-per-em").numValue()
        }
        ,
        a.Element.fontface.prototype = new a.Element.ElementBase,
        a.Element.missingglyph = function(b) {
            this.base = a.Element.path,
            this.base(b),
            this.horizAdvX = 0
        }
        ,
        a.Element.missingglyph.prototype = new a.Element.path,
        a.Element.glyph = function(b) {
            this.base = a.Element.path,
            this.base(b),
            this.horizAdvX = this.attribute("horiz-adv-x").numValue(),
            this.unicode = this.attribute("unicode").value,
            this.arabicForm = this.attribute("arabic-form").value
        }
        ,
        a.Element.glyph.prototype = new a.Element.path,
        a.Element.text = function(b) {
            this.captureTextNodes = !0,
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.baseSetContext = this.setContext,
            this.setContext = function(a) {
                this.baseSetContext(a),
                this.style("dominant-baseline").hasValue() && (a.textBaseline = this.style("dominant-baseline").value),
                this.style("alignment-baseline").hasValue() && (a.textBaseline = this.style("alignment-baseline").value)
            }
            ,
            this.getBoundingBox = function() {
                return new a.BoundingBox(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"),0,0)
            }
            ,
            this.renderChildren = function(a) {
                this.x = this.attribute("x").toPixels("x"),
                this.y = this.attribute("y").toPixels("y"),
                this.x += this.getAnchorDelta(a, this, 0);
                for (var b = 0; b < this.children.length; b++)
                    this.renderChild(a, this, b)
            }
            ,
            this.getAnchorDelta = function(a, b, c) {
                var d = this.style("text-anchor").valueOrDefault("start");
                if ("start" != d) {
                    for (var e = 0, f = c; f < b.children.length; f++) {
                        var g = b.children[f];
                        if (f > c && g.attribute("x").hasValue())
                            break;
                        e += g.measureTextRecursive(a)
                    }
                    return -1 * ("end" == d ? e : e / 2)
                }
                return 0
            }
            ,
            this.renderChild = function(a, b, c) {
                var d = b.children[c];
                d.attribute("x").hasValue() ? d.x = d.attribute("x").toPixels("x") + this.getAnchorDelta(a, b, c) : (this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")),
                d.attribute("dx").hasValue() && (this.x += d.attribute("dx").toPixels("x")),
                d.x = this.x),
                this.x = d.x + d.measureText(a),
                d.attribute("y").hasValue() ? d.y = d.attribute("y").toPixels("y") : (this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")),
                d.attribute("dy").hasValue() && (this.y += d.attribute("dy").toPixels("y")),
                d.y = this.y),
                this.y = d.y,
                d.render(a);
                for (var c = 0; c < d.children.length; c++)
                    this.renderChild(a, d, c)
            }
        }
        ,
        a.Element.text.prototype = new a.Element.RenderedElementBase,
        a.Element.TextElementBase = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.getGlyph = function(a, b, c) {
                var d = b[c]
                  , e = null ;
                if (a.isArabic) {
                    var f = "isolated";
                    (0 == c || " " == b[c - 1]) && c < b.length - 2 && " " != b[c + 1] && (f = "terminal"),
                    c > 0 && " " != b[c - 1] && c < b.length - 2 && " " != b[c + 1] && (f = "medial"),
                    c > 0 && " " != b[c - 1] && (c == b.length - 1 || " " == b[c + 1]) && (f = "initial"),
                    "undefined" != typeof a.glyphs[d] && (e = a.glyphs[d][f],
                    null == e && "glyph" == a.glyphs[d].type && (e = a.glyphs[d]))
                } else
                    e = a.glyphs[d];
                return null == e && (e = a.missingGlyph),
                e
            }
            ,
            this.renderChildren = function(b) {
                var c = this.parent.style("font-family").getDefinition();
                if (null == c)
                    "" != b.fillStyle && b.fillText(a.compressSpaces(this.getText()), this.x, this.y),
                    "" != b.strokeStyle && b.strokeText(a.compressSpaces(this.getText()), this.x, this.y);
                else {
                    var d = this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize)
                      , e = this.parent.style("font-style").valueOrDefault(a.Font.Parse(a.ctx.font).fontStyle)
                      , f = this.getText();
                    c.isRTL && (f = f.split("").reverse().join(""));
                    for (var g = a.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
                        var i = this.getGlyph(c, f, h)
                          , j = d / c.fontFace.unitsPerEm;
                        b.translate(this.x, this.y),
                        b.scale(j, -j);
                        var k = b.lineWidth;
                        b.lineWidth = b.lineWidth * c.fontFace.unitsPerEm / d,
                        "italic" == e && b.transform(1, 0, .4, 1, 0, 0),
                        i.render(b),
                        "italic" == e && b.transform(1, 0, -.4, 1, 0, 0),
                        b.lineWidth = k,
                        b.scale(1 / j, -1 / j),
                        b.translate(-this.x, -this.y),
                        this.x += d * (i.horizAdvX || c.horizAdvX) / c.fontFace.unitsPerEm,
                        "undefined" == typeof g[h] || isNaN(g[h]) || (this.x += g[h])
                    }
                }
            }
            ,
            this.getText = function() {}
            ,
            this.measureTextRecursive = function(a) {
                for (var b = this.measureText(a), c = 0; c < this.children.length; c++)
                    b += this.children[c].measureTextRecursive(a);
                return b
            }
            ,
            this.measureText = function(b) {
                var c = this.parent.style("font-family").getDefinition();
                if (null != c) {
                    var d = this.parent.style("font-size").numValueOrDefault(a.Font.Parse(a.ctx.font).fontSize)
                      , e = 0
                      , f = this.getText();
                    c.isRTL && (f = f.split("").reverse().join(""));
                    for (var g = a.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
                        var i = this.getGlyph(c, f, h);
                        e += (i.horizAdvX || c.horizAdvX) * d / c.fontFace.unitsPerEm,
                        "undefined" == typeof g[h] || isNaN(g[h]) || (e += g[h])
                    }
                    return e
                }
                var j = a.compressSpaces(this.getText());
                if (!b.measureText)
                    return 10 * j.length;
                b.save(),
                this.setContext(b);
                var k = b.measureText(j).width;
                return b.restore(),
                k
            }
        }
        ,
        a.Element.TextElementBase.prototype = new a.Element.RenderedElementBase,
        a.Element.tspan = function(b) {
            this.captureTextNodes = !0,
            this.base = a.Element.TextElementBase,
            this.base(b),
            this.text = b.nodeValue || b.text || "",
            this.getText = function() {
                return this.text
            }
        }
        ,
        a.Element.tspan.prototype = new a.Element.TextElementBase,
        a.Element.tref = function(b) {
            this.base = a.Element.TextElementBase,
            this.base(b),
            this.getText = function() {
                var a = this.getHrefAttribute().getDefinition();
                return null != a ? a.children[0].getText() : void 0
            }
        }
        ,
        a.Element.tref.prototype = new a.Element.TextElementBase,
        a.Element.a = function(b) {
            this.base = a.Element.TextElementBase,
            this.base(b),
            this.hasText = !0;
            for (var c = 0; c < b.childNodes.length; c++)
                3 != b.childNodes[c].nodeType && (this.hasText = !1);
            this.text = this.hasText ? b.childNodes[0].nodeValue : "",
            this.getText = function() {
                return this.text
            }
            ,
            this.baseRenderChildren = this.renderChildren,
            this.renderChildren = function(b) {
                if (this.hasText) {
                    this.baseRenderChildren(b);
                    var c = new a.Property("fontSize",a.Font.Parse(a.ctx.font).fontSize);
                    a.Mouse.checkBoundingBox(this, new a.BoundingBox(this.x,this.y - c.toPixels("y"),this.x + this.measureText(b),this.y))
                } else {
                    var d = new a.Element.g;
                    d.children = this.children,
                    d.parent = this,
                    d.render(b)
                }
            }
            ,
            this.onclick = function() {
                window.open(this.getHrefAttribute().value)
            }
            ,
            this.onmousemove = function() {
                a.ctx.canvas.style.cursor = "pointer"
            }
        }
        ,
        a.Element.a.prototype = new a.Element.TextElementBase,
        a.Element.image = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b);
            var c = this.getHrefAttribute().value
              , d = c.match(/\.svg$/);
            if (a.Images.push(this),
            this.loaded = !1,
            d)
                this.img = a.ajax(c),
                this.loaded = !0;
            else {
                this.img = document.createElement("img");
                var e = this;
                this.img.onload = function() {
                    e.loaded = !0
                }
                ,
                this.img.onerror = function() {
                    "undefined" != typeof console && (console.log('ERROR: image "' + c + '" not found'),
                    e.loaded = !0)
                }
                ,
                this.img.src = c
            }
            this.renderChildren = function(b) {
                var c = this.attribute("x").toPixels("x")
                  , e = this.attribute("y").toPixels("y")
                  , f = this.attribute("width").toPixels("x")
                  , g = this.attribute("height").toPixels("y");
                0 != f && 0 != g && (b.save(),
                d ? b.drawSvg(this.img, c, e, f, g) : (b.translate(c, e),
                a.AspectRatio(b, this.attribute("preserveAspectRatio").value, f, this.img.width, g, this.img.height, 0, 0),
                b.drawImage(this.img, 0, 0)),
                b.restore())
            }
            ,
            this.getBoundingBox = function() {
                var b = this.attribute("x").toPixels("x")
                  , c = this.attribute("y").toPixels("y")
                  , d = this.attribute("width").toPixels("x")
                  , e = this.attribute("height").toPixels("y");
                return new a.BoundingBox(b,c,b + d,c + e)
            }
        }
        ,
        a.Element.image.prototype = new a.Element.RenderedElementBase,
        a.Element.g = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.getBoundingBox = function() {
                for (var b = new a.BoundingBox, c = 0; c < this.children.length; c++)
                    b.addBoundingBox(this.children[c].getBoundingBox());
                return b
            }
        }
        ,
        a.Element.g.prototype = new a.Element.RenderedElementBase,
        a.Element.symbol = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.baseSetContext = this.setContext,
            this.setContext = function(b) {
                if (this.baseSetContext(b),
                this.attribute("viewBox").hasValue()) {
                    var c = a.ToNumberArray(this.attribute("viewBox").value)
                      , d = c[0]
                      , e = c[1];
                    width = c[2],
                    height = c[3],
                    a.AspectRatio(b, this.attribute("preserveAspectRatio").value, this.attribute("width").toPixels("x"), width, this.attribute("height").toPixels("y"), height, d, e),
                    a.ViewPort.SetCurrent(c[2], c[3])
                }
            }
        }
        ,
        a.Element.symbol.prototype = new a.Element.RenderedElementBase,
        a.Element.style = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b);
            for (var c = "", d = 0; d < b.childNodes.length; d++)
                c += b.childNodes[d].nodeValue;
            c = c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""),
            c = a.compressSpaces(c);
            for (var e = c.split("}"), d = 0; d < e.length; d++)
                if ("" != a.trim(e[d]))
                    for (var f = e[d].split("{"), g = f[0].split(","), h = f[1].split(";"), i = 0; i < g.length; i++) {
                        var j = a.trim(g[i]);
                        if ("" != j) {
                            for (var k = {}, l = 0; l < h.length; l++) {
                                var m = h[l].indexOf(":")
                                  , n = h[l].substr(0, m)
                                  , o = h[l].substr(m + 1, h[l].length - m);
                                null != n && null != o && (k[a.trim(n)] = new a.Property(a.trim(n),a.trim(o)))
                            }
                            if (a.Styles[j] = k,
                            "@font-face" == j)
                                for (var p = k["font-family"].value.replace(/"/g, ""), q = k.src.value.split(","), r = 0; r < q.length; r++)
                                    if (q[r].indexOf('format("svg")') > 0)
                                        for (var s = q[r].indexOf("url"), t = q[r].indexOf(")", s), u = q[r].substr(s + 5, t - s - 6), v = a.parseXml(a.ajax(u)), w = v.getElementsByTagName("font"), x = 0; x < w.length; x++) {
                                            var y = a.CreateElement(w[x]);
                                            a.Definitions[p] = y
                                        }
                        }
                    }
        }
        ,
        a.Element.style.prototype = new a.Element.ElementBase,
        a.Element.use = function(b) {
            this.base = a.Element.RenderedElementBase,
            this.base(b),
            this.baseSetContext = this.setContext,
            this.setContext = function(a) {
                this.baseSetContext(a),
                this.attribute("x").hasValue() && a.translate(this.attribute("x").toPixels("x"), 0),
                this.attribute("y").hasValue() && a.translate(0, this.attribute("y").toPixels("y"))
            }
            ,
            this.getDefinition = function() {
                var a = this.getHrefAttribute().getDefinition();
                return this.attribute("width").hasValue() && (a.attribute("width", !0).value = this.attribute("width").value),
                this.attribute("height").hasValue() && (a.attribute("height", !0).value = this.attribute("height").value),
                a
            }
            ,
            this.path = function(a) {
                var b = this.getDefinition();
                null != b && b.path(a)
            }
            ,
            this.getBoundingBox = function() {
                var a = this.getDefinition();
                return null != a ? a.getBoundingBox() : void 0
            }
            ,
            this.renderChildren = function(a) {
                var b = this.getDefinition();
                if (null != b) {
                    var c = b.parent;
                    b.parent = null ,
                    b.render(a),
                    b.parent = c
                }
            }
        }
        ,
        a.Element.use.prototype = new a.Element.RenderedElementBase,
        a.Element.mask = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.apply = function(b, c) {
                var d = this.attribute("x").toPixels("x")
                  , e = this.attribute("y").toPixels("y")
                  , f = this.attribute("width").toPixels("x")
                  , g = this.attribute("height").toPixels("y");
                if (0 == f && 0 == g) {
                    for (var h = new a.BoundingBox, i = 0; i < this.children.length; i++)
                        h.addBoundingBox(this.children[i].getBoundingBox());
                    var d = Math.floor(h.x1)
                      , e = Math.floor(h.y1)
                      , f = Math.floor(h.width())
                      , g = Math.floor(h.height())
                }
                var j = c.attribute("mask").value;
                c.attribute("mask").value = "";
                var k = document.createElement("canvas");
                k.width = d + f,
                k.height = e + g;
                var l = k.getContext("2d");
                this.renderChildren(l);
                var m = document.createElement("canvas");
                m.width = d + f,
                m.height = e + g;
                var n = m.getContext("2d");
                c.render(n),
                n.globalCompositeOperation = "destination-in",
                n.fillStyle = l.createPattern(k, "no-repeat"),
                n.fillRect(0, 0, d + f, e + g),
                b.fillStyle = n.createPattern(m, "no-repeat"),
                b.fillRect(0, 0, d + f, e + g),
                c.attribute("mask").value = j
            }
            ,
            this.render = function() {}
        }
        ,
        a.Element.mask.prototype = new a.Element.ElementBase,
        a.Element.clipPath = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.apply = function(b) {
                for (var c = 0; c < this.children.length; c++) {
                    var d = this.children[c];
                    if ("undefined" != typeof d.path) {
                        var e = null ;
                        d.attribute("transform").hasValue() && (e = new a.Transform(d.attribute("transform").value),
                        e.apply(b)),
                        d.path(b),
                        b.clip(),
                        e && e.unapply(b)
                    }
                }
            }
            ,
            this.render = function() {}
        }
        ,
        a.Element.clipPath.prototype = new a.Element.ElementBase,
        a.Element.filter = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.apply = function(a, b) {
                var c = b.getBoundingBox()
                  , d = Math.floor(c.x1)
                  , e = Math.floor(c.y1)
                  , f = Math.floor(c.width())
                  , g = Math.floor(c.height())
                  , h = b.style("filter").value;
                b.style("filter").value = "";
                for (var i = 0, j = 0, k = 0; k < this.children.length; k++) {
                    var l = this.children[k].extraFilterDistance || 0;
                    i = Math.max(i, l),
                    j = Math.max(j, l)
                }
                var m = document.createElement("canvas");
                m.width = f + 2 * i,
                m.height = g + 2 * j;
                var n = m.getContext("2d");
                n.translate(-d + i, -e + j),
                b.render(n);
                for (var k = 0; k < this.children.length; k++)
                    this.children[k].apply(n, 0, 0, f + 2 * i, g + 2 * j);
                a.drawImage(m, 0, 0, f + 2 * i, g + 2 * j, d - i, e - j, f + 2 * i, g + 2 * j),
                b.style("filter", !0).value = h
            }
            ,
            this.render = function() {}
        }
        ,
        a.Element.filter.prototype = new a.Element.ElementBase,
        a.Element.feMorphology = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.apply = function() {}
        }
        ,
        a.Element.feMorphology.prototype = new a.Element.ElementBase,
        a.Element.feColorMatrix = function(b) {
            function c(a, b, c, d, e, f) {
                return a[4 * c * d + 4 * b + f]
            }
            function d(a, b, c, d, e, f, g) {
                a[4 * c * d + 4 * b + f] = g
            }
            this.base = a.Element.ElementBase,
            this.base(b),
            this.apply = function(a, b, e, f, g) {
                for (var h = a.getImageData(0, 0, f, g), e = 0; g > e; e++)
                    for (var b = 0; f > b; b++) {
                        var i = c(h.data, b, e, f, g, 0)
                          , j = c(h.data, b, e, f, g, 1)
                          , k = c(h.data, b, e, f, g, 2)
                          , l = (i + j + k) / 3;
                        d(h.data, b, e, f, g, 0, l),
                        d(h.data, b, e, f, g, 1, l),
                        d(h.data, b, e, f, g, 2, l)
                    }
                a.clearRect(0, 0, f, g),
                a.putImageData(h, 0, 0)
            }
        }
        ,
        a.Element.feColorMatrix.prototype = new a.Element.ElementBase,
        a.Element.feGaussianBlur = function(b) {
            this.base = a.Element.ElementBase,
            this.base(b),
            this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()),
            this.extraFilterDistance = this.blurRadius,
            this.apply = function(b, c, d, e, f) {
                return "undefined" == typeof stackBlurCanvasRGBA ? ("undefined" != typeof console && console.log("ERROR: StackBlur.js must be included for blur to work"),
                void 0) : (b.canvas.id = a.UniqueId(),
                b.canvas.style.display = "none",
                document.body.appendChild(b.canvas),
                stackBlurCanvasRGBA(b.canvas.id, c, d, e, f, this.blurRadius),
                document.body.removeChild(b.canvas),
                void 0)
            }
        }
        ,
        a.Element.feGaussianBlur.prototype = new a.Element.ElementBase,
        a.Element.title = function() {}
        ,
        a.Element.title.prototype = new a.Element.ElementBase,
        a.Element.desc = function() {}
        ,
        a.Element.desc.prototype = new a.Element.ElementBase,
        a.Element.MISSING = function(a) {
            "undefined" != typeof console && console.log("ERROR: Element '" + a.nodeName + "' not yet implemented.")
        }
        ,
        a.Element.MISSING.prototype = new a.Element.ElementBase,
        a.CreateElement = function(b) {
            var c = b.nodeName.replace(/^[^:]+:/, "");
            c = c.replace(/\-/g, "");
            var d = null ;
            return d = "undefined" != typeof a.Element[c] ? new a.Element[c](b) : new a.Element.MISSING(b),
            d.type = b.nodeName,
            d
        }
        ,
        a.load = function(b, c) {
            a.loadXml(b, a.ajax(c))
        }
        ,
        a.loadXml = function(b, c) {
            a.loadXmlDoc(b, a.parseXml(c))
        }
        ,
        a.loadXmlDoc = function(b, c) {
            a.init(b);
            var d = function(a) {
                for (var c = b.canvas; c; )
                    a.x -= c.offsetLeft,
                    a.y -= c.offsetTop,
                    c = c.offsetParent;
                return window.scrollX && (a.x += window.scrollX),
                window.scrollY && (a.y += window.scrollY),
                a
            };
            1 != a.opts.ignoreMouse && (b.canvas.onclick = function(b) {
                var c = d(new a.Point(null != b ? b.clientX : event.clientX,null != b ? b.clientY : event.clientY));
                a.Mouse.onclick(c.x, c.y)
            }
            ,
            b.canvas.onmousemove = function(b) {
                var c = d(new a.Point(null != b ? b.clientX : event.clientX,null != b ? b.clientY : event.clientY));
                a.Mouse.onmousemove(c.x, c.y)
            }
            );
            var e = a.CreateElement(c.documentElement);
            e.root = !0;
            var f = !0
              , g = function() {
                a.ViewPort.Clear(),
                b.canvas.parentNode && a.ViewPort.SetCurrent(b.canvas.parentNode.clientWidth, b.canvas.parentNode.clientHeight),
                1 != a.opts.ignoreDimensions && (e.style("width").hasValue() && (b.canvas.width = e.style("width").toPixels("x"),
                b.canvas.style.width = b.canvas.width + "px"),
                e.style("height").hasValue() && (b.canvas.height = e.style("height").toPixels("y"),
                b.canvas.style.height = b.canvas.height + "px"));
                var d = b.canvas.clientWidth || b.canvas.width
                  , g = b.canvas.clientHeight || b.canvas.height;
                if (1 == a.opts.ignoreDimensions && e.style("width").hasValue() && e.style("height").hasValue() && (d = e.style("width").toPixels("x"),
                g = e.style("height").toPixels("y")),
                a.ViewPort.SetCurrent(d, g),
                null != a.opts.offsetX && (e.attribute("x", !0).value = a.opts.offsetX),
                null != a.opts.offsetY && (e.attribute("y", !0).value = a.opts.offsetY),
                null != a.opts.scaleWidth && null != a.opts.scaleHeight) {
                    var h = 1
                      , i = 1
                      , j = a.ToNumberArray(e.attribute("viewBox").value);
                    e.attribute("width").hasValue() ? h = e.attribute("width").toPixels("x") / a.opts.scaleWidth : isNaN(j[2]) || (h = j[2] / a.opts.scaleWidth),
                    e.attribute("height").hasValue() ? i = e.attribute("height").toPixels("y") / a.opts.scaleHeight : isNaN(j[3]) || (i = j[3] / a.opts.scaleHeight),
                    e.attribute("width", !0).value = a.opts.scaleWidth,
                    e.attribute("height", !0).value = a.opts.scaleHeight,
                    e.attribute("viewBox", !0).value = "0 0 " + d * h + " " + g * i,
                    e.attribute("preserveAspectRatio", !0).value = "none"
                }
                1 != a.opts.ignoreClear && b.clearRect(0, 0, d, g),
                e.render(b),
                f && (f = !1,
                "function" == typeof a.opts.renderCallback && a.opts.renderCallback(c))
            }
              , h = !0;
            a.ImagesLoaded() && (h = !1,
            g()),
            a.intervalID = setInterval(function() {
                var b = !1;
                if (h && a.ImagesLoaded() && (h = !1,
                b = !0),
                1 != a.opts.ignoreMouse && (b |= a.Mouse.hasEvents()),
                1 != a.opts.ignoreAnimation)
                    for (var c = 0; c < a.Animations.length; c++)
                        b |= a.Animations[c].update(1e3 / a.FRAMERATE);
                "function" == typeof a.opts.forceRedraw && 1 == a.opts.forceRedraw() && (b = !0),
                b && (g(),
                a.Mouse.runEvents())
            }, 1e3 / a.FRAMERATE)
        }
        ,
        a.stop = function() {
            a.intervalID && clearInterval(a.intervalID)
        }
        ,
        a.Mouse = new function() {
            this.events = [],
            this.hasEvents = function() {
                return 0 != this.events.length
            }
            ,
            this.onclick = function(a, b) {
                this.events.push({
                    type: "onclick",
                    x: a,
                    y: b,
                    run: function(a) {
                        a.onclick && a.onclick()
                    }
                })
            }
            ,
            this.onmousemove = function(a, b) {
                this.events.push({
                    type: "onmousemove",
                    x: a,
                    y: b,
                    run: function(a) {
                        a.onmousemove && a.onmousemove()
                    }
                })
            }
            ,
            this.eventElements = [],
            this.checkPath = function(a, b) {
                for (var c = 0; c < this.events.length; c++) {
                    var d = this.events[c];
                    b.isPointInPath && b.isPointInPath(d.x, d.y) && (this.eventElements[c] = a)
                }
            }
            ,
            this.checkBoundingBox = function(a, b) {
                for (var c = 0; c < this.events.length; c++) {
                    var d = this.events[c];
                    b.isPointInBox(d.x, d.y) && (this.eventElements[c] = a)
                }
            }
            ,
            this.runEvents = function() {
                a.ctx.canvas.style.cursor = "";
                for (var b = 0; b < this.events.length; b++)
                    for (var c = this.events[b], d = this.eventElements[b]; d; )
                        c.run(d),
                        d = d.parent;
                this.events = [],
                this.eventElements = []
            }
        }
        ,
        a
    }
    this.canvg = function(b, c, d) {
        if (null != b || null != c || null != d) {
            d = d || {},
            "string" == typeof b && (b = document.getElementById(b)),
            null != b.svg && b.svg.stop();
            var e = a();
            (1 != b.childNodes.length || "OBJECT" != b.childNodes[0].nodeName) && (b.svg = e),
            e.opts = d;
            var f = b.getContext("2d");
            "undefined" != typeof c.documentElement ? e.loadXmlDoc(f, c) : "<" == c.substr(0, 1) ? e.loadXml(f, c) : e.load(f, c)
        } else
            for (var g = document.getElementsByTagName("svg"), h = 0; h < g.length; h++) {
                var i = g[h]
                  , j = document.createElement("canvas");
                j.width = i.clientWidth,
                j.height = i.clientHeight,
                i.parentNode.insertBefore(j, i),
                i.parentNode.removeChild(i);
                var k = document.createElement("div");
                k.appendChild(i),
                canvg(j, k.innerHTML)
            }
    }
}(),
"undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function(a, b, c, d, e) {
    canvg(this.canvas, a, {
        ignoreMouse: !0,
        ignoreAnimation: !0,
        ignoreDimensions: !0,
        ignoreClear: !0,
        offsetX: b,
        offsetY: c,
        scaleWidth: d,
        scaleHeight: e
    })
}
),
angular.module("storage", []).factory("storage", [function() {
    "use strict";
    var a = {}
      , b = !1
      , c = function() {}
      , d = {}
      , e = !1
      , f = []
      , g = "storage"
      , h = "storeKey"
      , i = !1
      , j = function() {
        if (!e) {
            e = !0;
            try {
                d = new IDBStore({
                    dbVersion: 1,
                    storeName: g || "storage",
                    keyPath: h,
                    onStoreReady: function() {
                        i = !0;
                        var a;
                        for (a = 0; a < f.length; a += 1)
                            f[a]()
                    }
                })
            } catch (a) {
                window.supportsIndexedDB = !1
            }
        }
    };
    return a.save = function(e, g, h, k) {
        if (void 0 === window.supportsIndexedDB)
            return setTimeout(function() {
                a.save(e, g, h, k)
            }, 300),
            void 0;
        if (window.supportsIndexedDB) {
            j();
            var l = function() {
                d.put({
                    storeKey: e,
                    obj: g
                }, h || c, k || c)
            };
            i ? l() : f.push(l)
        } else
            setTimeout(function() {
                try {
                    localStorage.setItem(e, JSON.stringify(g))
                } catch (a) {
                    b = b || {},
                    b[e] = JSON.stringify(g)
                }
                h && h()
            }, 0)
    }
    ,
    a.load = function(e, g, h) {
        var k;
        if (void 0 === window.supportsIndexedDB)
            return setTimeout(function() {
                a.load(e, g, h)
            }, 300),
            void 0;
        if (window.supportsIndexedDB) {
            if (j(),
            !e && isNaN(e) || "function" != typeof g)
                return;
            var l = function() {
                d.get(e, function(a) {
                    g(a && a.obj)
                }, h || c)
            };
            i ? l() : f.push(l)
        } else {
            if (!e && isNaN(e) || "function" != typeof g)
                return;
            setTimeout(function() {
                if (b)
                    try {
                        k = JSON.parse(b[e])
                    } catch (a) {}
                else
                    try {
                        k = JSON.parse(localStorage.getItem(e))
                    } catch (a) {}
                g(k)
            }, 0)
        }
    }
    ,
    a.remove = function(e, g, h) {
        if (void 0 === window.supportsIndexedDB)
            return setTimeout(function() {
                a.remove(e, g, h)
            }, 300),
            void 0;
        if (window.supportsIndexedDB) {
            j();
            var k = function() {
                d.remove(e, g || c, h || c)
            };
            i ? k() : f.push(k)
        } else
            b ? delete localStorage[e] : delete b[e],
            g && g()
    }
    ,
    a.clear = function(e, f) {
        return void 0 === window.supportsIndexedDB ? (setTimeout(function() {
            a.clear(e, f)
        }, 300),
        void 0) : (window.supportsIndexedDB ? (j(),
        d.clear(e, f || c)) : setTimeout(function() {
            b ? b = {} : localStorage.clear(),
            e && e()
        }, 0),
        void 0)
    }
    ,
    a
}
]),
function() {
    "use strict";
    var a = {};
    angular.module("tmpl", []).factory("template", ["$http", "$q", function(b, c) {
        var d = function(a, b, c) {
            var d, e, f, g, h, i, j, k, l = [], m = b.length, n = c.length, o = {};
            for (i = new Array(m + 1).join(" "),
            d = new Array(n + 1).join(" "); a.length; ) {
                e = a.indexOf(b),
                k = e + m,
                j = a.slice(k),
                f = 0;
                do
                    f = j.indexOf(c),
                    g = j.indexOf(b),
                    -1 !== g && (j = j.slice(0, g) + i + j.slice(g + m)),
                    j = j.slice(0, f) + d + j.slice(f + n);
                while (-1 !== g && f > g);if (f += k,
                !(f > e && -1 !== e)) {
                    l.push(a);
                    break
                }
                k = a.slice(0, e),
                k && l.push(k),
                k = a.slice(e + m, f),
                k && (l.push(""),
                o[k] || (o[k] = []),
                o[k].push(l.length - 1)),
                a = a.slice(f + n)
            }
            for (h in o)
                k = h.indexOf(b),
                o.hasOwnProperty(h) && -1 !== k && (e = h.search(/\s/),
                -1 !== e && (k = Math.min(k, e)),
                k = h.slice(0, k),
                o[k] = {
                    str: h.slice(k.length).replace(/^\n/, ""),
                    opening: b,
                    closing: c,
                    idxArray: o[h]
                },
                delete o[h]);
            return {
                stringArray: l,
                map: o
            }
        };
        return function e(f) {
            var g, h = "}}", i = "{{", j = "tmpl/", k = {};
            return k.config = function(a) {
                return "string" == typeof a.opening && a.opening.length > 0 && (i = a.opening),
                "string" == typeof a.closing && a.closing.length > 0 && (h = a.closing),
                "string" == typeof a.tmplDir && (j = a.tmplDir),
                this
            }
            ,
            k.set = function(a) {
                return g = d(a, i, h),
                this
            }
            ,
            k.get = function(d) {
                var e = c.defer()
                  , f = d.replace(/\.tmpl$/, "");
                return a.hasOwnProperty(f) ? e.resolve(a[f]) : b.get(j + f + ".tmpl", {
                    transformResponse: !1
                }).then(function(b) {
                    a[f] = k.set(b.data),
                    e.resolve(a[f])
                }),
                e.promise
            }
            ,
            k.fillup = function(a) {
                var b, c, d, f, h, i, j, k = g.map, l = g.stringArray;
                for (f in a)
                    if (k.hasOwnProperty(f)) {
                        if (k[f].fillup || k[f].str) {
                            if (k[f].str && (b = k[f].idxArray,
                            k[f] = e(k[f].str, k[f].opening, k[f].closing),
                            k[f].idxArray = b),
                            i = a[f].length,
                            j = "",
                            a[f]) {
                                for (d = 0; i > d; d += 1)
                                    j += k[f].fillup(a[f][d]);
                                i || (j = k[f].fillup(a[f]))
                            }
                            b = k[f].idxArray
                        } else
                            j = a[f],
                            b = k[f];
                        for (c = 0,
                        h = b.length; h > c; c += 1)
                            l[b[c]] = j
                    }
                return l.join("")
            }
            ,
            f && k.set(f),
            k
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("color", []).factory("color", [function() {
        function a(a) {
            var b = 1 - a.k;
            return {
                r: Math.round(255 * (1 - a.c) * b),
                g: Math.round(255 * (1 - a.m) * b),
                b: Math.round(255 * (1 - a.y) * b)
            }
        }
        function b(a) {
            var b, c, d, e, f, g, h, i = a.h, j = a.s / 100, k = a.l / 100;
            return b = (1 - Math.abs(2 * k - 1)) * j,
            i %= 360,
            f = i / 60,
            h = b * (1 - Math.abs(f % 2 - 1)),
            f >= 0 && 1 > f ? (c = b,
            d = h,
            e = 0) : f >= 1 && 2 > f ? (c = h,
            d = b,
            e = 0) : f >= 2 && 3 > f ? (c = 0,
            d = b,
            e = h) : f >= 3 && 4 > f ? (c = 0,
            d = h,
            e = b) : f >= 4 && 5 > f ? (c = h,
            d = 0,
            e = b) : f >= 5 && 6 > f && (c = b,
            d = 0,
            e = h),
            g = k - b / 2,
            {
                r: Math.round(255 * (c + g)),
                g: Math.round(255 * (d + g)),
                b: Math.round(255 * (e + g))
            }
        }
        function c(a) {
            var b, c = a.r / 255, d = a.g / 255, e = a.b / 255, f = {}, g = Math.max(c, d, e), h = Math.min(c, d, e), i = g - h;
            return 0 === i ? b = 0 : g === c ? b = (d - e) / i % 6 : g === d ? b = (e - c) / i + 2 : g === e && (b = (c - d) / i + 4),
            f.h = 60 * b,
            f.h < 0 && (f.h += 360),
            f.l = (g + h) / 2,
            f.s = 0 === f.l || 1 === f.l ? 0 : i / (1 - Math.abs(2 * f.l - 1)),
            f.h = Math.round(f.h),
            f.s = Math.round(100 * f.s),
            f.l = Math.round(100 * f.l),
            f
        }
        function d(a) {
            var b, c = [], d = a.r / 255, e = a.g / 255, f = a.b / 255, g = [d, e, f];
            for (b = 0; 3 > b; b += 1)
                c[b] = g[b] <= .04045 ? g[b] / 12.92 : Math.pow((g[b] + .055) / 1.055, 2.4);
            return {
                x: .4124 * c[0] + .3576 * c[1] + .1805 * c[2],
                y: .2126 * c[0] + .7152 * c[1] + .0722 * c[2],
                z: .0193 * c[0] + .1192 * c[1] + .9505 * c[2]
            }
        }
        function e(a) {
            function b(a) {
                var b = 6 / 29;
                return a > b * b * b ? Math.pow(a, 1 / 3) : 7.787037037037035 * a + 4 / 29
            }
            var c, e, f;
            return a = d(a),
            c = b(a.x / h.x),
            e = b(a.y / h.y),
            f = b(a.z / h.z),
            {
                l: 116 * e - 16,
                a: 500 * (c - e),
                b: 200 * (e - f)
            }
        }
        function f(a) {
            var b = a.r + ", " + a.g + ", " + a.b;
            return b = 1 !== a.a ? "rgba(" + b + ", " + a.a : "rgb(" + b,
            b += ")"
        }
        function g(c) {
            var d, e, f, g, h, i;
            if (Array.isArray(c) && c.length >= 3)
                return h = Number(c[0]) || 0,
                g = Number(c[1]) || 0,
                f = Number(c[2]) || 0,
                d = Number(c[3]) || 1,
                {
                    r: h,
                    g: g,
                    b: f,
                    a: d
                };
            if (c && void 0 !== c.r && void 0 !== c.g && void 0 !== c.b) {
                var j = !1;
                return c.r <= 1 && c.g <= 1 && c.b <= 1 && (j = !0),
                (0 !== c.r % 1 && c.r < 1 || j) && (c.r = Math.round(255 * c.r)),
                (0 !== c.g % 1 && c.g < 1 || j) && (c.g = Math.round(255 * c.g)),
                (0 !== c.b % 1 && c.b < 1 || j) && (c.b = Math.round(255 * c.b)),
                {
                    r: Number(c.r),
                    g: Number(c.g),
                    b: Number(c.b),
                    a: Number(c.a) || 1
                }
            }
            if (c && void 0 !== c.c && void 0 !== c.m && void 0 !== c.y && void 0 !== c.k)
                return i = a(c),
                i.a = c.a || 1,
                i;
            if (c && void 0 !== c.h && void 0 !== c.s && void 0 !== c.l)
                return c.h = Number(c.h),
                c.s = Number(c.s),
                c.l = Number(c.l),
                i = b(c),
                i.a = Number(c.a) || 1,
                i;
            if ("number" == typeof c) {
                for (c = Math.round(c).toString(16); c.length < 6; )
                    c = "0" + c;
                c = "#" + c
            }
            if ("string" == typeof c) {
                if (c = c.replace(/\s+/g, ""),
                e = c.match(/#([\da-f])([\da-f])([\da-f])$/i))
                    return h = parseInt(e[1] + e[1], 16),
                    g = parseInt(e[2] + e[2], 16),
                    f = parseInt(e[3] + e[3], 16),
                    {
                        r: h,
                        g: g,
                        b: f,
                        a: 1
                    };
                if (e = c.match(/#([\da-f]{2})([\da-f]{2})([\da-f]{2})/i))
                    return h = parseInt(e[1], 16),
                    g = parseInt(e[2], 16),
                    f = parseInt(e[3], 16),
                    {
                        r: h,
                        g: g,
                        b: f,
                        a: 1
                    };
                if (e = c.match(/rgb\((\d+),(\d+),(\d+)\)/i))
                    return h = parseInt(e[1], 10),
                    g = parseInt(e[2], 10),
                    f = parseInt(e[3], 10),
                    {
                        r: h,
                        g: g,
                        b: f,
                        a: 1
                    };
                if (e = c.match(/rgba\((\d+),(\d+),(\d+),(.*)\)/i))
                    return h = parseInt(e[1], 10),
                    g = parseInt(e[2], 10),
                    f = parseInt(e[3], 10),
                    d = Number(e[4]),
                    isNaN(d) && (d = 1),
                    {
                        r: h,
                        g: g,
                        b: f,
                        a: d
                    }
            }
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            }
        }
        var h = {
            x: .9505,
            y: 1,
            z: 1.089
        };
        return function(a) {
            var b = g(a);
            return b.toString = function(a) {
                var c, d = ["", ""];
                if (a && a.hex && (isNaN(b.a) || 1 === b.a || a.argb)) {
                    for (c = b.toNumber().toString(16); c.length < 6; )
                        c = "0" + c;
                    return a.argb && (d = Math.round(255 * b.a).toString(16)),
                    c = d[0] === d[1] && c[0] === c[1] && c[2] === c[3] && c[4] === c[5] ? d[0] + c[0] + c[2] + c[4] : d[0] + d[1] + c,
                    a.forCSS && (c = "#" + c),
                    c
                }
                return f(b)
            }
            ,
            b.toArray = function() {
                return [b.r, b.g, b.b, b.a]
            }
            ,
            b.toHSL = function() {
                return c(b)
            }
            ,
            b.toLAB = function() {
                return e(b)
            }
            ,
            b.toNumber = function() {
                return 65536 * b.r + 256 * b.g + b.b
            }
            ,
            b.equals = function(a) {
                return b.r === a.r && b.g === a.g && b.b === a.b
            }
            ,
            b.distance = function(a, c) {
                var d, f;
                return d = e(b),
                "number" == typeof b.a && b.a < 1 && b.a > 0 && (d.l *= b.a,
                d.a *= b.a,
                d.b *= b.a),
                f = e(a),
                "number" == typeof a.a && a.a < 1 && a.a > 0 && (f.l *= a.a,
                f.a *= a.a,
                f.b *= a.a),
                c = c || {},
                isNaN(c.l) && (c.l = 1),
                isNaN(c.a) && (c.a = 1),
                isNaN(c.b) && (c.b = 1),
                Math.sqrt(c.l * Math.pow(d.l - f.l, 2) + c.a * Math.pow(d.a - f.a, 2) + c.b * Math.pow(d.b - f.b, 2) + Math.pow(100 * ((b.a || 1) - (a.a || 1)), 2))
            }
            ,
            b
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("swatch", ["color", "svg", "tmpl"]).factory("swatch", ["color", "svgPath", "template", function(a, b, c) {
        function d(b) {
            var c = [];
            return Array.isArray(b.colors) && b.colors.forEach(function(b) {
                var d = Number(b.red)
                  , e = Number(b.green)
                  , f = Number(b.blue)
                  , g = Number(b.alpha);
                d = isNaN(d) ? Number(b.r) : d,
                e = isNaN(e) ? Number(b.g) : e,
                f = isNaN(f) ? Number(b.b) : f,
                g = isNaN(g) ? Number(b.a) : g,
                c.push(a({
                    r: d || 0,
                    g: e || 0,
                    b: f || 0,
                    a: g || 1
                }))
            }),
            c
        }
        function e(c) {
            var d, e = b(c), f = [], g = [];
            return d = e.getAttrs(),
            d.forEach(function(b) {
                var c, d;
                b.fill && (c = a(b.fill),
                d = c.toNumber(),
                -1 === g.indexOf(d) && (g.push(d),
                f.push(c)))
            }),
            f
        }
        function f(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o = new DataView(a), p = [];
            if (1095976262 !== o.getUint32(0) || 65536 !== o.getUint32(4))
                return p;
            for (k = o.getUint32(8),
            l = 12,
            g = 0; k > g && l + 6 < a.byteLength; g += 1)
                try {
                    if (b = o.getUint16(l),
                    c = o.getUint32(l + 2),
                    m = o.getUint16(l + 6),
                    49153 === b)
                        f = [],
                        p.push(f);
                    else if (1 === b) {
                        for (f || (f = [],
                        p.push(f)),
                        j = l + 8 + 2 * m,
                        d = String.fromCharCode.apply(null , new Uint8Array(a,j,4)),
                        j += 4,
                        e = [o.getFloat32(j)],
                        j += 4,
                        i = /^(RGB|LAB)/.test(d) ? 2 : 3,
                        h = 0; i > h; h += 1)
                            e.push(o.getFloat32(j)),
                            j += 4;
                        d = d.slice(0, i + 1),
                        "CMYK" === d ? f.push({
                            c: e[0],
                            m: e[1],
                            y: e[2],
                            k: e[3]
                        }) : "RGB" === d ? f.push({
                            r: Math.round(255 * e[0]),
                            g: Math.round(255 * e[1]),
                            b: Math.round(255 * e[2])
                        }) : "LAB" === d ? f.push({
                            l: e[0],
                            a: e[1],
                            b: e[2]
                        }) : "Gray" === d && (n = Math.round(255 * e[0]),
                        f.push({
                            r: n,
                            g: n,
                            b: n
                        }))
                    } else
                        49154 === b && (f = !1);
                    l += c + 6
                } catch (q) {
                    break
                }
            return p
        }
        function g(b) {
            function c(a) {
                for (var b = a.toString(16); b.length < 6; )
                    b = "0" + b;
                return b
            }
            var d, e, f, g, h = [], i = [];
            for (b && b.colors && (h = b.colors),
            h.length < 6 ? (f = h.length,
            g = 1) : (f = Math.ceil(Math.sqrt(h.length)),
            g = Math.ceil(h.length / f)),
            d = 0; g > d; d += 1)
                for (e = 0; f > e && d * f + e < h.length; e += 1)
                    i.push({
                        y: 64 * d,
                        x: 64 * e,
                        fill: "#" + c(a(h[d * f + e]).toNumber())
                    });
            return j.fillup({
                width: 64 * f,
                height: 64 * g,
                rects: i
            })
        }
        function h(a, b, c) {
            var d, e, f, g, h = a.length;
            for (1 === b ? f = "setUint8" : (f = "setUint16",
            b = 2),
            d = new ArrayBuffer(h * b),
            e = new DataView(d),
            g = 0; h > g; g += 1)
                e[f](g * b, a.charCodeAt(g), c);
            return d
        }
        function i(b) {
            var c, d, e, f, g, i, j = b.colors.length + 2, k = 0;
            for (i = 20 + (2 + 2 * b.name.length) + 28 * b.colors.length + 6,
            c = new ArrayBuffer(i),
            d = new Uint8Array(c),
            f = new DataView(c),
            f.setUint32(k, 1095976262),
            k += 4,
            f.setUint32(k, 65536),
            k += 4,
            f.setUint32(k, j),
            k += 4,
            f.setUint16(k, 49153),
            k += 2,
            f.setUint32(k, 4 + 2 * b.name.length),
            k += 4,
            f.setUint16(k, b.name.length + 1),
            k += 2,
            d.set(new Uint8Array(h(b.name, 2)), k),
            k += 2 * b.name.length + 2,
            g = 0; g < b.colors.length; g += 1)
                f.setUint16(k, 1),
                k += 2,
                f.setUint32(k, 22),
                k += 4,
                f.setUint16(k, 1),
                k += 2,
                f.setUint16(k, 0),
                k += 2,
                f.setUint32(k, 1380401696),
                k += 4,
                e = a(b.colors[g]),
                f.setFloat32(k, e.r / 255),
                k += 4,
                f.setFloat32(k, e.g / 255),
                k += 4,
                f.setFloat32(k, e.b / 255),
                k += 4,
                f.setUint16(k, 2),
                k += 2;
            return f.setUint16(k, 49154),
            c
        }
        var j = c(['<?xml version="1.0" encoding="utf-8"?>', "<!-- A Color Theme Generated by IcoMoon.io -->", '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{{width}}" height="{{height}}" viewBox="0 0 {{width}} {{height}}">', "{{rects", '<rect x="{{x}}" y="{{y}}" fill="{{fill}}" width="64" height="64"></rect>', "}}</svg>", ""].join("\n"));
        return function(a) {
            var b = {};
            return b.getASE = function(a) {
                return b.colors ? i({
                    colors: b.colors,
                    name: a && a.name || ""
                }) : !1
            }
            ,
            b.getSVG = function() {
                return b.colors ? g({
                    colors: b.colors
                }) : !1
            }
            ,
            b.setColors = function(a) {
                Array.isArray(a) ? b.colors = a : a.ase ? b.colors = f(a.ase)[0] : a.svg ? b.colors = e(a.svg) : a.json && (b.colors = d(a.json))
            }
            ,
            b.setColors(a),
            b
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("csh", ["svg"]).factory("csh", [function() {
        function a(a, b) {
            var c, d, e = a.length, f = 0, g = 0, h = 0;
            for (c = 0; e > c; c += 1)
                f += a[c].byteLength;
            if (!isNaN(b) && b > 0)
                for (; f > g; )
                    g += b;
            for (d = new Uint8Array(g || f),
            c = 0; e > c; c += 1)
                d.set(new Uint8Array(a[c]), h),
                h += a[c].byteLength;
            return d.buffer
        }
        function b(a, b, c) {
            var d, e, f, g, h = a.length;
            for (1 === b ? f = "setUint8" : (f = "setUint16",
            b = 2),
            d = new ArrayBuffer(h * b),
            e = new DataView(d),
            g = 0; h > g; g += 1)
                e[f](g * b, a.charCodeAt(g), c);
            return d
        }
        function c(a) {
            var b, c = new Date, d = 0;
            return c = c.getTime() + f,
            f += 1,
            c = c.toString(16),
            b = c + a.hashCode() + a,
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var c = b[d];
                return d += 1,
                "y" === a && (c = c.charCodeAt(0) % 16,
                c = 8 | 3 & c,
                c = c.toString(16)),
                c
            })
        }
        function d(d) {
            function e(a, b) {
                var c, e, f, g = d.viewBox.width, h = d.viewBox.height;
                a.setUint16(0, 2),
                b[1] = b[1] || b[0],
                b[2] = b[2] || b[1] || b[0],
                c = b[0],
                e = b[1],
                f = b[2],
                a.setInt32(2, 16777216 * (c.y / h)),
                a.setInt32(6, 16777216 * (c.x / g)),
                a.setInt32(10, 16777216 * (e.y / h)),
                a.setInt32(14, 16777216 * (e.x / g)),
                a.setInt32(18, 16777216 * (f.y / h)),
                a.setInt32(22, 16777216 * (f.x / g))
            }
            var f, g, h, i, j, k, l, m, n, o, p, q = [], r = [];
            return d.name = d.name || "",
            m = new ArrayBuffer(4),
            g = new DataView(m),
            g.setUint32(0, d.name.length + 1),
            m = a([m, b(d.name), new ArrayBuffer(2)]),
            q.push(m),
            0 !== m.byteLength % 4 && q.push(new ArrayBuffer(2)),
            o = new ArrayBuffer(4),
            g = new DataView(o),
            g.setUint32(0, 1),
            q.push(o),
            l = new ArrayBuffer(4),
            q.push(l),
            k = d.getPSPaths(),
            p = c(JSON.stringify(k).match(/\d/g).join("")),
            r.push(new Uint8Array([p.length]).buffer),
            r.push(b(p, 1)),
            f = new ArrayBuffer(16),
            g = new DataView(f),
            g.setInt32(8, d.viewBox.height),
            g.setInt32(12, d.viewBox.width),
            r.push(f),
            j = new ArrayBuffer(26),
            g = new DataView(j),
            g.setUint16(0, 6),
            r.push(j),
            j = new ArrayBuffer(26),
            g = new DataView(j),
            g.setUint16(0, 8),
            r.push(j),
            k.forEach(function(a) {
                h = new ArrayBuffer(26),
                g = new DataView(h),
                g.setUint16(2, a.length),
                r.push(h),
                a.forEach(function(a) {
                    j = new ArrayBuffer(26),
                    g = new DataView(j),
                    e(g, a),
                    r.push(j)
                })
            }),
            n = a(r),
            g = new DataView(l),
            i = 4 - n.byteLength % 4,
            g.setUint32(0, n.byteLength + i),
            q.push(n),
            q.push(new ArrayBuffer(i)),
            a(q)
        }
        function e(c) {
            var e, f, g = [];
            return g.push(b("cush", 1)),
            f = new ArrayBuffer(8),
            e = new DataView(f),
            e.setUint32(0, 2),
            e.setUint32(4, c.length),
            g.push(f),
            c.forEach(function(a) {
                g.push(d(a))
            }),
            g.push(b("\nGenerated by IcoMoon.io", 1)),
            a(g)
        }
        var f = 0;
        return function(a) {
            var b = Object.create(null );
            return b.generateCSH = function() {
                return e(a)
            }
            ,
            b
        }
    }
    ])
}(),
angular.element.prototype.is || (angular.element.prototype.is = function(a) {
    var b, c, d = a.split(/[,\s]+/);
    try {
        c = this[0].tagName.toUpperCase()
    } catch (e) {
        return !1
    }
    for (b = 0; b < d.length; b += 1)
        if (d[b].toUpperCase() === this[0].tagName.toUpperCase())
            return !0;
    return !1
}
),
angular.element2 || (angular.element2 = function(a) {
    "string" == typeof a && (a = a.trim()),
    a = angular.element(a);
    var b;
    for (b = 0; b < a.length; b += 1)
        if (1 === a[b].nodeType)
            return angular.element(a[b]);
    return a
}
),
angular.module("svg", ["tmpl", "color"]).factory("svgPath", ["template", "color", function(a, b) {
    function c(a, b, c) {
        return {
            x: a.x + (b.x - a.x) * c,
            y: a.y + (b.y - a.y) * c
        }
    }
    function d(a, b) {
        var c = function(a, b, c) {
            var d = a[0][b]
              , e = a[1][b]
              , f = a[2][b]
              , g = 1 - c;
            return g * g * d + 2 * g * c * e + c * c * f
        };
        return {
            x: c(a, "x", b),
            y: c(a, "y", b)
        }
    }
    function e(a, b) {
        var c = function(a, b, c) {
            var d = a[0][b]
              , e = a[1][b]
              , f = a[2][b]
              , g = a[3][b]
              , h = 1 - c;
            return h * h * h * d + 3 * h * h * c * e + 3 * c * c * h * f + c * c * c * g
        };
        return {
            x: c(a, "x", b),
            y: c(a, "y", b)
        }
    }
    function f(a, b) {
        return {
            x: 2 * b.x - a.x,
            y: 2 * b.y - a.y
        }
    }
    function g(a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (b && a) {
            if (c = isNaN(b.a) ? 1 : b.a,
            d = isNaN(b.b) ? 0 : b.b,
            e = isNaN(b.c) ? 0 : b.c,
            f = isNaN(b.d) ? 1 : b.d,
            g = isNaN(b.e) ? 0 : b.e,
            h = isNaN(b.f) ? 0 : b.f,
            j = a.length,
            !j)
                return {
                    x: c * a.x + e * a.y + g,
                    y: d * a.x + f * a.y + h
                };
            if (a[0] && !isNaN(a[0].x) && !isNaN(a[0].y)) {
                for (k = [],
                i = 0; j > i; i += 1)
                    k[i] = {},
                    k[i].x = c * a[i].x + e * a[i].y + g,
                    k[i].y = d * a[i].x + f * a[i].y + h;
                return k
            }
            if ("number" == typeof a[0] && 0 === j % 2)
                for (i = 0; j > i; i += 2)
                    k = {
                        x: a[i],
                        y: a[i + 1]
                    },
                    a[i] = c * k.x + e * k.y + g,
                    a[i + 1] = d * k.x + f * k.y + h
        }
    }
    function h(a) {
        return Math.sqrt(a.x * a.x + a.y * a.y)
    }
    function i(a, b) {
        return h({
            x: b.x - a.x,
            y: b.y - a.y
        })
    }
    function j(a, b, c) {
        var d, e = a.x * b.y - a.y * b.x < 0 ? 1 : -1;
        return c = c >= 1 ? 10 * Math.round(c) : 1e4,
        d = (a.x * b.x + a.y * b.y) / (h(a) * h(b)),
        d > 1 ? d = 1 : -1 > d && (d = -1),
        Math.round(180 * c * e * Math.acos(d) / Math.PI) / c
    }
    function k(a, b) {
        return (isNaN(b) || 0 > b) && (b = 3),
        a.toFixed(b).replace(/\.0+$/, "").replace(/(\.[^0]+)0+$/, "$1")
    }
    function l(a) {
        return a = a.toLowerCase(),
        /[vh]/.test(a) ? 1 : /[mlt]/.test(a) ? 2 : /[sq]/.test(a) ? 4 : /[c]/.test(a) ? 6 : /[a]/.test(a) ? 7 : 0
    }
    function m(a) {
        var b, c, d, e, f, g, h, i = [];
        if (!a)
            return i;
        for (a = a.replace(/,/g, " ").replace(/-/g, " -").replace(/-\s+/g, "-").replace(/e\s*/gi, "e").replace(/\.(\d+)\./g, ".$1 .").replace(/\.(\d+)\./g, ".$1 .").replace(/\s+/g, " "),
        i = a.replace(/([mzlhvcsqta])\s?/gi, "|$1").split("|"),
        i.splice(0, 1),
        f = i.length,
        d = 0; f > d; d += 1) {
            if (h = i[d],
            c = h[0],
            b = h.substr(1).trim())
                for (b = b.split(/\s/),
                g = b.length,
                e = 0; g > e; e += 1)
                    b[e] = Number(b[e]);
            else
                b = [];
            i[d] = {
                cmd: c,
                args: b
            }
        }
        return i
    }
    function n(a) {
        var b = []
          , c = 0
          , d = a.length;
        for (c; d > c; c += 1)
            b.push(a[c].x),
            b.push(a[c].y);
        return b
    }
    function o(a) {
        var b, c, d = [];
        if ("string" == typeof a) {
            for (d = a.trim().split(/[\s,]+/),
            c = d.length,
            b = 0; c > b; b += 1)
                d[b] = Number(d[b]);
            return d
        }
        return a
    }
    function p(a) {
        var b, c = [];
        return a = o(a),
        b = a.length,
        b -= b % 2,
        b > 1 && (c.push({
            cmd: "M",
            args: [a[0], a[1]]
        }),
        c.push({
            cmd: "L",
            args: a.slice(2)
        })),
        c
    }
    function q(a) {
        var b = p(a);
        return b.push({
            cmd: "Z"
        }),
        b
    }
    function r(a, b, c, d, e, f) {
        function h(a) {
            u.push({
                cmd: "L",
                args: a
            })
        }
        function i(a) {
            var b = [{
                x: p,
                y: r
            }, {
                x: o,
                y: r
            }, {
                x: o,
                y: q
            }, {
                x: p,
                y: q
            }];
            t[a] && (t[a].points = g(t[a].points, {
                e: b[a].x,
                f: b[a].y
            }),
            u.push({
                cmd: "C",
                args: n(t[a].points.slice(1))
            }))
        }
        var j, k, l, m, o, p, q, r, s, t = [], u = [];
        return a = Number(a),
        b = Number(b),
        e = Math.abs(Number(e)),
        f = Math.abs(Number(f)),
        c = Math.abs(Number(c)),
        d = Math.abs(Number(d)),
        0 !== c && 0 !== d ? (!f && e ? f = e : !e && f ? e = f : e || f || (e = f = 0),
        s = c / 2,
        e / 2 > s && (e = s),
        s = d / 2,
        f / 2 > s && (f = s),
        l = c - 2 * e,
        m = d - 2 * f,
        e && (j = a + c / 2,
        k = b + d / 2,
        t = w({
            cx: 0,
            cy: 0,
            rx: e,
            ry: f
        })),
        o = a + e,
        p = o + l,
        q = b + f,
        r = q + m,
        u.push({
            cmd: "M",
            args: [o, b]
        }),
        l && h([p, b]),
        i(3),
        m && h([p + e, r]),
        i(0),
        l && h([o, r + f]),
        i(1),
        m && h([o - e, q]),
        i(2),
        u.push({
            cmd: "Z"
        }),
        u) : void 0
    }
    function s(a, b, c, d) {
        var e, f, g, h = [];
        if (a = Number(a),
        b = Number(b),
        c = Number(c),
        d = Number(d),
        0 !== c || 0 !== d) {
            for (e = w({
                cx: a,
                cy: b,
                rx: c,
                ry: d
            }),
            h.push({
                cmd: "M",
                args: [a + c, b]
            }),
            g = e.length,
            f = 0; g > f; f += 1)
                h.push({
                    cmd: "C",
                    args: n(e[f].points.slice(1))
                });
            return h.push({
                cmd: "Z"
            }),
            h
        }
    }
    function t(a) {
        var b, c, d = !1, e = a.tagName.toUpperCase();
        return a.getAttribute || (d = !0,
        a.getAttribute = function(b) {
            return a[b]
        }
        ),
        "PATH" === e ? (b = m(a.getAttribute("d")),
        "evenodd" === (a.style["fill-rule"] || a.getAttribute("fill-rule")) && (b.evenOdd = !0)) : "POLYGON" === e ? b = q(a.getAttribute("points")) : "POLYLINE" === e ? b = p(a.getAttribute("points")) : "LINE" === e ? b = p(a.getAttribute("x1") + "," + a.getAttribute("y1") + "," + a.getAttribute("x2") + "," + a.getAttribute("y2")) : "RECT" === e ? b = r(a.getAttribute("x"), a.getAttribute("y"), a.getAttribute("width"), a.getAttribute("height"), a.getAttribute("rx"), a.getAttribute("ry")) : "ELLIPSE" === e ? b = s(a.getAttribute("cx"), a.getAttribute("cy"), a.getAttribute("rx"), a.getAttribute("ry")) : "CIRCLE" === e && (c = a.getAttribute("r"),
        b = s(a.getAttribute("cx"), a.getAttribute("cy"), c, c)),
        d && delete a.getAttribute,
        b
    }
    function u(a, b) {
        var c;
        return c = /em$/.test(a) ? Number(a.slice(0, -2)) / (b.fontSize || 16) : /rem$/.test(a) ? Number(a.slice(0, -3)) / (b.fontSize || 16) : /%$/.test(a) ? b && "number" == typeof b.width && "number" == typeof b.height ? Number(a.slice(0, -1)) * (Math.sqrt(Math.pow(b.width, 2) + Math.pow(b.height, 2)) / Math.sqrt(2)) / 100 : Number(a.slice(0, -1)) : /px$/.test(a) ? Number(a.slice(0, -2)) : /pt$/.test(a) ? 4 * Number(a.slice(0, -2)) / 3 : /cm$/.test(a) ? 96 * Number(a.slice(0, -2)) / 2.54 : /mm$/.test(a) ? 96 * Number(a.slice(0, -2)) / 2.54 / 100 : /in/.test(a) ? 96 * Number(a.slice(0, -2)) : /pc/.test(a) ? 16 * Number(a.slice(0, -2)) : /q/.test(a) ? 96 * Number(a.slice(0, -2)) / 2.54 / 40 : Number(a),
        c || 0
    }
    function v(a) {
        var b, c, d, e, f, g, h, i = [], j = !0;
        for ("string" == typeof a ? f = m(a) : (f = t(a),
        j = a.style.stroke,
        j = j && "none" !== j && 0 !== u(a.style.strokeWidth)),
        h = f ? f.length : 0,
        e = 0; h > e; e += 1)
            if (c = f[e].args,
            d = f[e].cmd,
            /m/.test(d) && 2 === c.length && f[e + 1] && /m/.test(f[e + 1]))
                ;
            else if (b = l(d),
            c = c || [],
            c.length > b) {
                g = 0;
                do
                    i.push({
                        cmd: d,
                        args: c.slice(g, g + b)
                    }),
                    g += b,
                    "m" === d ? d = "l" : "M" === d && (d = "L");
                while (g < c.length)
            } else
                i.push({
                    cmd: d,
                    args: c
                });
        return y(i, {
            evenOdd: f && f.evenOdd,
            hasStroke: j
        })
    }
    function w(a) {
        function b(a, b) {
            var c = (b - 90 * a) / 90;
            return q ? c : 1 - c
        }
        var c, d, e, f, g, h, i, j, k, l, m = a.cx, n = a.cy, o = a.rx, p = a.ry, q = a.angleDiff && a.angleDiff > 0, r = a.startAngle ? a.startAngle % 360 : 0, s = a.angleDiff ? (a.angleDiff + r) % 360 : 360, t = 4 * (Math.sqrt(2) - 1) / 3, u = t * o, v = t * p, w = [], x = [], y = {
            x: m,
            y: n - p
        }, z = {
            x: m + o,
            y: n
        }, A = {
            x: m,
            y: n + p
        }, B = {
            x: m - o,
            y: n
        };
        if (0 > r && (r += 360),
        0 > s && (s += 360),
        e = y.x - u,
        f = y.x + u,
        g = B.y - v,
        h = B.y + v,
        w.push([{
            x: y.x,
            y: y.y
        }, {
            x: f,
            y: y.y
        }, {
            x: z.x,
            y: g
        }, {
            x: z.x,
            y: z.y
        }]),
        w.push([{
            x: B.x,
            y: B.y
        }, {
            x: B.x,
            y: g
        }, {
            x: e,
            y: y.y
        }, {
            x: y.x,
            y: y.y
        }]),
        w.push([{
            x: A.x,
            y: A.y
        }, {
            x: e,
            y: A.y
        }, {
            x: B.x,
            y: h
        }, {
            x: B.x,
            y: B.y
        }]),
        w.push([{
            x: z.x,
            y: z.y
        }, {
            x: z.x,
            y: h
        }, {
            x: f,
            y: A.y
        }, {
            x: A.x,
            y: A.y
        }]),
        q) {
            for (c = Math.floor(r / 90),
            c > 3 && (c = 0),
            d = Math.ceil(s / 90) - 1,
            0 > d && (d = 3),
            l = w.length,
            k = 0; l > k; k += 1)
                w[k].reverse();
            for (k = c,
            c === d && Math.abs(a.angleDiff) > 90 && (x.push(w[k]),
            k += 1,
            k > 3 && (k = 0)); k !== d; )
                x.push(w[k]),
                k += 1,
                k > 3 && (k = 0);
            x.push(w[k])
        } else {
            for (c = Math.ceil(r / 90) - 1,
            0 > c && (c = 3),
            d = Math.floor(s / 90),
            d > 3 && (d = 0),
            k = c,
            c === d && Math.abs(a.angleDiff) > 90 && (x.push(w[k]),
            k -= 1,
            0 > k && (k = 3)); k !== d; )
                x.push(w[k]),
                k -= 1,
                0 > k && (k = 3);
            x.push(w[k])
        }
        for (j = 1,
        0 !== s % 90 && (k = x.length - 1,
        i = R(x[k]),
        j = b(d, s),
        x[k] = i.splitAt(j)[0].points),
        0 !== r % 90 && (i = R(x[0]),
        j = 0 === k ? b(c, r) / j : b(c, r),
        x[0] = i.splitAt(j)[1].points),
        l = x.length,
        k = 0; l > k; k += 1)
            x[k] = R(x[k]);
        return x
    }
    function x(a, b) {
        function c(a) {
            return g(a, {
                a: F,
                b: G,
                c: -G,
                d: F
            })
        }
        var d, e, f, h, i, k, l, m, n, o, p, q, r, s = a.x, t = a.y, u = b[5], v = b[6], x = b[3], y = b[4], z = Math.abs(b[0]), A = Math.abs(b[1]), B = z * z, C = A * A, D = b[2] % 360 * Math.PI / 180, E = {}, F = Math.cos(D), G = Math.sin(D);
        if (s !== u || t !== v) {
            if (!z || !A)
                return E.cmd = "L",
                E.args = [u, v],
                E;
            for (x = x ? 1 : 0,
            y = y ? 1 : 0,
            f = g({
                x: (s - u) / 2,
                y: (t - v) / 2
            }, {
                a: F,
                b: -G,
                c: G,
                d: F
            }),
            k = f.x * f.x,
            l = f.y * f.y,
            e = k / B + l / C,
            e > 1 && (e = Math.sqrt(e),
            z *= e,
            A *= e,
            B = z * z,
            C = A * A),
            i = (x === y ? -1 : 1) * Math.sqrt(Math.abs((B * C - B * l - C * k) / (B * l + C * k))),
            i = {
                x: i * (z * f.y / A),
                y: i * (-A * f.x / z)
            },
            h = c(i),
            h.x += (s + u) / 2,
            h.y += (t + v) / 2,
            e = {
                x: (f.x - i.x) / z,
                y: (f.y - i.y) / A
            },
            m = j({
                x: 1,
                y: 0
            }, e),
            n = j(e, {
                x: -(f.x + i.x) / z,
                y: -(f.y + i.y) / A
            }) % 360,
            1 === y && n > 0 ? n -= 360 : 0 === y && 0 > n && (n += 360),
            d = w({
                cx: h.x,
                cy: h.y,
                rx: z,
                ry: A,
                startAngle: m,
                angleDiff: n
            }),
            b = [],
            q = d.length,
            o = 0; q > o; o += 1)
                for (e = d[o],
                r = e.points.length,
                b[o] = [],
                p = 0; r > p; p += 1)
                    D && (e.points[p] = g(e.points[p], {
                        e: -h.x,
                        f: -h.y
                    }),
                    e.points[p] = c(e.points[p]),
                    e.points[p] = g(e.points[p], {
                        e: h.x,
                        f: h.y
                    })),
                    p > 0 && (b[o].push(e.points[p].x),
                    b[o].push(e.points[p].y));
            return b
        }
    }
    function y(a, b) {
        function c(a, b) {
            var c, d, e, f, g, h, j, k, l = [], m = 0 / 0;
            if (b = b || .001,
            g = a.length,
            2 > g)
                return !1;
            for (e = 0; g > e; e += 1)
                f = a[e],
                c = f.cmd,
                "Z" === c ? (h = !1,
                j = !1) : "M" === c ? (h = {
                    x: f.args[0],
                    y: f.args[1]
                },
                j = !1) : "C" === c ? (h = {
                    x: f.args[4],
                    y: f.args[5]
                },
                j = !1) : "S" === c || "Q" === c ? (h = {
                    x: f.args[2],
                    y: f.args[3]
                },
                j = !1) : "T" === c ? (h = {
                    x: f.args[0],
                    y: f.args[1]
                },
                j = !1) : "L" === c && (d = {
                    x: f.args[0],
                    y: f.args[1]
                },
                h ? (k = (d.y - h.y) / (d.x - h.x),
                !isNaN(m) && (k === m || Math.abs(k - m) < b || i(h, d) < b) ? l.pop() : j ? (h = j,
                m = (d.y - j.y) / (d.x - j.x)) : isNaN(k) || (m = k)) : h = d,
                j = d),
                "L" !== c && (m = 0 / 0),
                l.push(f);
            return l[0].cmd = "M",
            l
        }
        var d, e, f, g, h, j, k, l, m, n = {
            x: 0,
            y: 0
        }, o = [], p = 0;
        for (k = a.length,
        g = 0; k > g; g += 1) {
            if (e = a[g].cmd,
            h = /[a-z]/.test(e),
            e = e.toUpperCase(),
            d = a[g].args,
            "Z" === e)
                n = f,
                f = !1;
            else if (f || "M" === e || (f = n),
            "A" === e)
                h && (d[5] += n.x,
                d[6] += n.y),
                m = {
                    x: d[5],
                    y: d[6]
                },
                d = x(n, d),
                n = m,
                e = "C";
            else if ("H" === e)
                h && (d[0] += n.x),
                n = {
                    x: d[0],
                    y: n.y
                },
                d[1] = n.y,
                e = "L";
            else if ("V" === e)
                h && (d[0] += n.y),
                n = {
                    x: n.x,
                    y: d[0]
                },
                d[0] = n.x,
                d[1] = n.y,
                e = "L";
            else {
                if ("M" === e)
                    try {
                        m = a[g + 1].cmd.toUpperCase(),
                        "Z" === m ? (h ? (n.x += d[0],
                        n.y += d[1]) : (n.x = d[0],
                        n.y = d[1]),
                        d = !1,
                        g += 1) : p += 1
                    } catch (q) {}
                for (l = d.length,
                j = 0; l > j; j += 2)
                    h && (d[j] += n.x,
                    d[j + 1] += n.y),
                    0 === (j + 2) % l && (n = {
                        x: d[j],
                        y: d[j + 1]
                    })
            }
            if ("M" === e && f && "Z" !== a[g - 1].cmd.toUpperCase() && !b.hasStroke && o.push({
                cmd: "Z",
                args: []
            }),
            d && ("M" !== e || !a[g + 1] || "M" !== a[g + 1].cmd.toUpperCase()))
                if ("M" === e && (f = n),
                d[0] && d[0].length)
                    for (l = d.length,
                    j = 0; l > j; j += 1)
                        o.push({
                            cmd: e,
                            args: d[j]
                        });
                else
                    o.push({
                        cmd: e,
                        args: d
                    })
        }
        return "Z" === e || b.hasStroke || o.push({
            cmd: "Z",
            args: []
        }),
        o = c(o),
        b.evenOdd && p > 1 ? J(o) : o
    }
    function z(a) {
        var b, c, d, e, f = {
            xMin: 0 / 0,
            xMax: 0 / 0,
            yMin: 0 / 0,
            yMax: 0 / 0
        };
        for (d = 0,
        e = a.length; e > d; d += 1)
            b = a[d].args,
            c = {
                x: b[b.length - 2],
                y: b[b.length - 1]
            },
            isNaN(c.x) || isNaN(c.y) || (f.xMin = f.xMin < c.x ? f.xMin : c.x,
            f.xMax = f.xMax > c.x ? f.xMax : c.x,
            f.yMin = f.yMin < c.y ? f.yMin : c.y,
            f.yMax = f.yMax > c.y ? f.yMax : c.y);
        return f
    }
    function A(a, b, f, g) {
        var h, j, k, l, m, n, o, p, q, r, s, t, u, v = function(a, b) {
            return {
                x: (a.x + b.x) / 2,
                y: (a.y + b.y) / 2
            }
        }, w = v(a, b), x = v(f, g), y = c(a, b, .75), z = c(g, f, .75), A = (g.x - a.x) / 16, B = (g.y - a.y) / 16;
        return m = v(y, z),
        y.offCurve = !0,
        z.offCurve = !0,
        n = [a, y, m],
        o = [m, z, g],
        p = [a, w, y, m],
        q = [m, z, x, g],
        h = c(a, b, 3 / 8),
        j = c(y, z, 3 / 8),
        j.x -= A,
        j.y -= B,
        k = c(z, y, 3 / 8),
        k.x += A,
        k.y += B,
        l = c(g, f, 3 / 8),
        h.offCurve = !0,
        j.offCurve = !0,
        k.offCurve = !0,
        l.offCurve = !0,
        r = i(e(p, .5), d(n, .5)) < 10 ? [y, m] : [h, j, m],
        s = i(e(q, .5), d(o, .5)) < 10 ? [z, g] : [k, l, g],
        t = r.length - 1,
        u = s.length - 1,
        i(v(r[t - 1], s[0]), r[t]) < 1 && r.splice(t),
        r.concat(s)
    }
    function B(a, b) {
        var c = []
          , d = {
            x: b[0],
            y: b[1]
        }
          , e = {
            x: b[2],
            y: b[3]
        };
        return c[4] = b[2],
        c[5] = b[3],
        c[0] = a.x + 2 / 3 * (d.x - a.x),
        c[1] = a.y + 2 / 3 * (d.y - a.y),
        c[2] = e.x + 2 / 3 * (d.x - e.x),
        c[3] = e.y + 2 / 3 * (d.y - e.y),
        c
    }
    function C(a) {
        var b, c, d, e, g, h, i, j, k = {
            x: 0,
            y: 0
        };
        for (a = a.slice(0),
        g = a.length,
        d = 0; g > d; d += 1)
            c = a[d].cmd,
            b = a[d].args,
            "M" === c || "L" === c ? k = {
                x: b[0],
                y: b[1]
            } : "Z" === c && (k = {
                x: 0,
                y: 0
            }),
            "C" === c ? (h = {
                x: b[2],
                y: b[3]
            },
            k = {
                x: b[4],
                y: b[5]
            }) : "S" === c ? (j = k,
            h && (j = f(h, j)),
            h = {
                x: b[0],
                y: b[1]
            },
            a[d].args = [j.x, j.y, b[0], b[1], b[2], b[3]],
            a[d].cmd = "C",
            k = {
                x: b[2],
                y: b[3]
            }) : h = !1,
            "Q" === c ? (i = {
                x: b[0],
                y: b[1]
            },
            a[d].args = B(k, b),
            a[d].cmd = "C",
            k = {
                x: b[2],
                y: b[3]
            }) : "T" === c ? (j = k,
            i && (j = f(i, j)),
            i = j,
            a[d].args = B(k, [j.x, j.y, b[0], b[1]]),
            a[d].cmd = "C",
            k = {
                x: b[0],
                y: b[1]
            }) : i = !1;
        for (k = {
            x: 0,
            y: 0
        },
        d = 0; g > d; d += 1)
            for (b = a[d].args,
            e = 0; e < b.length; e += 2)
                b[e] -= k.x,
                b[e + 1] -= k.y,
                k.x += Math.round(b[e]),
                k.y += Math.round(b[e + 1]);
        return a
    }
    function D(a) {
        function b() {
            p.length > 2 && (JSON.stringify(p[0]) === JSON.stringify(p[p.length - 1]) && (p = p.slice(0, -1)),
            o.push(p)),
            p = []
        }
        var c, d, e, g, h, i, j, k, l, m, n = {
            x: 0,
            y: 0
        }, o = [], p = [], q = a.length;
        for (e = 0; q > e; e += 1)
            d = a[e].cmd,
            c = a[e].args,
            g = "M" === d,
            g || "L" === d ? (g && b(),
            p.push({
                x: c[0],
                y: c[1]
            }),
            n = {
                x: c[0],
                y: c[1]
            }) : "Z" === d ? (n = {
                x: 0,
                y: 0
            },
            b()) : h = n,
            "C" === d ? (i = {
                x: c[0],
                y: c[1]
            },
            j = {
                x: c[2],
                y: c[3]
            },
            n = {
                x: c[4],
                y: c[5]
            },
            k = n,
            p = p.concat(A(h, i, j, k)),
            l = j) : "S" === d ? (i = l ? f(l, h) : h,
            j = {
                x: c[0],
                y: c[1]
            },
            n = {
                x: c[2],
                y: c[3]
            },
            k = n,
            p = p.concat(A(h, i, j, k)),
            l = j) : l = !1,
            "Q" === d ? (i = {
                x: c[0],
                y: c[1],
                offCurve: !0
            },
            n = {
                x: c[2],
                y: c[3]
            },
            j = n,
            p.push(i),
            p.push(j),
            m = i) : "T" === d ? (m ? (i = f(m, h),
            i.offCurve = !0) : i = h,
            n = {
                x: c[0],
                y: c[1]
            },
            j = n,
            p.push(i),
            p.push(j),
            m = i) : m = !1;
        return p.length > 2 && o.push(p),
        o
    }
    function E(a) {
        function b(a, b) {
            var c;
            for (a = a.slice(0),
            c = 0; c < a.length; c += 2)
                a[c] -= b.x,
                a[c + 1] -= b.y;
            p.push(a)
        }
        var c, d, e, g, h, i, j, k, l, m, n = {
            x: 0,
            y: 0
        }, o = {
            x: 0,
            y: 0
        }, p = [], q = a.length, r = [];
        for (e = 0; q > e; e += 1)
            d = a[e].cmd,
            c = a[e].args,
            g = "M" === d,
            g || "L" === d ? (g ? (p.push([c[0], c[1]]),
            o = {
                x: c[0],
                y: c[1]
            }) : b(c, n),
            n = {
                x: c[0],
                y: c[1]
            }) : "Z" === d ? (n = o,
            p.length > 0 && (p.isClosed = !0,
            r.push(p)),
            p = []) : h = n,
            "C" === d ? (b(c, n),
            l = {
                x: c[2],
                y: c[3]
            },
            n = {
                x: c[4],
                y: c[5]
            }) : "S" === d ? (i = l ? f(l, h) : h,
            j = {
                x: c[0],
                y: c[1]
            },
            k = {
                x: c[2],
                y: c[3]
            },
            b([i.x, i.y, j.x, j.y, k.x, k.y], n),
            l = j,
            n = k) : l = !1,
            "Q" === d ? (i = {
                x: c[0],
                y: c[1],
                offCurve: !0
            },
            j = {
                x: c[2],
                y: c[3]
            },
            b(B(n, c), n),
            m = i,
            n = j) : "T" === d ? (m ? (i = f(m, h),
            i.offCurve = !0) : i = h,
            j = {
                x: c[0],
                y: c[1]
            },
            b(B(n, [i.x, i.y, j.x, j.y]), n),
            n = j,
            m = i) : m = !1;
        return p.length && (r.push(p),
        p = []),
        r
    }
    function F(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n = {
            x: 0,
            y: 0
        }, o = {
            x: 0,
            y: 0
        }, p = a.length, q = [], r = [];
        for (d = 0; p > d; d += 1)
            c = a[d].cmd,
            b = a[d].args,
            e = "M" === c,
            e || "L" === c ? (n = {
                x: b[0],
                y: b[1]
            },
            l = [n, n, n],
            r.push(l),
            e && (o = n)) : "Z" === c ? (n = o,
            r.length && q.push(r),
            r = []) : g = n,
            "C" === c ? (l[2] = {
                x: b[0],
                y: b[1]
            },
            l = [{
                x: b[2],
                y: b[3]
            }, {
                x: b[4],
                y: b[5]
            }],
            r.push(l),
            k = {
                x: b[2],
                y: b[3]
            },
            n = {
                x: b[4],
                y: b[5]
            }) : "S" === c ? (h = k ? f(k, g) : g,
            i = {
                x: b[0],
                y: b[1]
            },
            j = {
                x: b[2],
                y: b[3]
            },
            l[2] = h,
            l = [i, j],
            r.push(l),
            k = i,
            n = j) : k = !1,
            "Q" === c ? (h = {
                x: b[0],
                y: b[1]
            },
            i = {
                x: b[2],
                y: b[3]
            },
            b = B(n, b),
            l[2] = {
                x: b[0],
                y: b[1]
            },
            l = [{
                x: b[2],
                y: b[3]
            }, {
                x: b[4],
                y: b[5]
            }],
            r.push(l),
            n = i,
            m = h) : "T" === c ? (h = m ? f(m, g) : g,
            i = {
                x: b[0],
                y: b[1]
            },
            b = B(n, [h.x, h.y, i.x, i.y]),
            l[2] = h,
            l = [{
                x: b[2],
                y: b[3]
            }, {
                x: b[4],
                y: b[5]
            }],
            r.push(l),
            n = i,
            m = h) : m = !1;
        return r.length && q.push(r),
        q
    }
    function G(a) {
        var b, c, d, e, g, h, i, j, l, m, n, o, p = [], q = {
            x: 0,
            y: 0
        }, r = {}, s = .001, t = [];
        for (j = a.length,
        g = 0; j > g; g += 1) {
            i = a[g];
            try {
                c = i.args.slice(0)
            } catch (u) {
                c = []
            }
            if (e = i.cmd.toLowerCase(),
            l = c ? c.length : 0,
            l > 1) {
                if (r.x = c[l - 2],
                r.y = c[l - 1],
                "c" === e ? (m && (o = f(m, q),
                Math.abs(o.x - c[0]) < s && Math.abs(o.y - c[1]) < s ? (e = "s",
                c = c.slice(2),
                m = o) : m = !1),
                m || (m = {
                    x: c[2],
                    y: c[3]
                }),
                n = !1) : "q" === e ? (n && (o = f(n, q),
                Math.abs(o.x - c[0]) < s && Math.abs(o.y - c[1]) < s ? (e = "t",
                c = c.slice(2),
                n = o) : n = !1),
                n || (n = {
                    x: c[0],
                    y: c[1]
                }),
                m = !1) : "s" === e ? (m = m ? f(m, q) : !1,
                n = !1) : "t" === e ? (n = n ? f(n, q) : !1,
                m = !1) : (m = !1,
                n = !1),
                "m" === e)
                    e = "M";
                else
                    for (l = c.length,
                    h = 0; l > h; h += 2)
                        c[h] -= q.x,
                        c[h + 1] -= q.y;
                "l" === e && (0 === c[0] ? (e = "v",
                c = [c[1]]) : 0 === c[1] && (e = "h",
                c = [c[0]])),
                q.x = r.x,
                q.y = r.y
            }
            p.push({
                cmd: e,
                args: c
            })
        }
        for (d = [],
        g = 0; j > g; g += 1) {
            for (i = p[g],
            d.push(i),
            e = i.cmd,
            h = g + 1; j > h && p[h].cmd === e; )
                i.args = i.args.concat(p[h].args),
                h += 1;
            g = h - 1
        }
        for (j = d.length,
        g = 0; j > g; g += 1)
            for (i = d[g],
            t.push(i.cmd),
            l = i.args ? i.args.length : 0,
            h = 0; l > h; h += 1)
                b = i.args[h],
                b = b >= 0 && 0 !== h ? " " + k(b) : k(b),
                t.push(b);
        return t.join("")
    }
    function H(a) {
        var b, c = a.length, d = [];
        for (b = 0; c > b; b += 1)
            d.push(a[b].cmd),
            d.push(a[b].args.join(" "));
        return d.join("")
    }
    function I(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = {
            x: 0,
            y: 0
        }, q = a.length, r = [], s = [], t = [];
        for (a = JSON.parse(JSON.stringify(a)),
        d = 0; q > d; d += 1)
            c = a[d].cmd,
            b = a[d].args,
            "C" === c ? (i = {
                x: b[2],
                y: b[3]
            },
            p = {
                x: b[4],
                y: b[5]
            }) : "S" === c ? (m = p,
            i && (m = f(i, m)),
            i = {
                x: b[0],
                y: b[1]
            },
            a[d].args = [m.x, m.y, b[0], b[1], b[2], b[3]],
            a[d].cmd = "C",
            p = {
                x: b[2],
                y: b[3]
            }) : i = !1,
            "Q" === c ? (j = {
                x: b[0],
                y: b[1]
            },
            a[d].args = B(p, b),
            a[d].cmd = "C",
            p = {
                x: b[2],
                y: b[3]
            }) : "T" === c ? (m = p,
            j && (m = f(j, m)),
            j = m,
            a[d].args = [m.x, m.y, b[0], b[1]],
            a[d].cmd = "C",
            p = {
                x: b[0],
                y: b[1]
            }) : j = !1,
            t.push(a[d].cmd),
            t = t.concat(a[d].args);
        for (e = new RegExp("[MLCQZ]",""),
        d = 0; d < t.length; d += 1) {
            if (l = t[d],
            !e.test(l))
                return a;
            if ("C" === l)
                h = 3,
                k = 2;
            else if ("Q" === l)
                h = 2,
                k = 1;
            else if ("L" === l)
                h = 1,
                k = 1;
            else {
                if ("M" !== l) {
                    s.push("M");
                    continue
                }
                h = 1,
                k = 0
            }
            for (h === k && s.push(l),
            g = 0; h > g; g += 1)
                g === k && s.push(l),
                n = t[++d],
                o = t[++d],
                s.push(o),
                s.push(n)
        }
        for (d = s.length - 1; d > -1; d -= 1)
            "string" == typeof s[d] ? r.push({
                cmd: s[d],
                args: []
            }) : r[r.length - 1].args.push(s[d]);
        return r[r.length - 1].cmd = "Z",
        r
    }
    function J(b) {
        function c(a) {
            var b, c = [];
            for (b = 0; b < a.length; b += 1)
                c = c.concat(a[b]);
            return c
        }
        function d(a, b) {
            var c, d, e, f, g = 0;
            for (c = a.getContext("2d").getImageData(0, 0, a.width, a.height).data,
            d = b.getContext("2d").getImageData(0, 0, b.width, b.height).data,
            e = 0,
            f = c.length; f > e; e += 1)
                c[e] !== d[e] && (g += 1);
            return g
        }
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w = 0, x = b.length, y = [], z = [];
        for (h = 0; x > h; h += 1) {
            for (e = b[h].args,
            i = 0; i < e.length; i += 2)
                k = "number" == typeof k ? Math.max(k, e[i]) : e[i],
                m = "number" == typeof m ? Math.min(m, e[i]) : e[i],
                l = "number" == typeof l ? Math.max(l, e[i + 1]) : e[i + 1],
                n = "number" == typeof n ? Math.min(n, e[i + 1]) : e[i + 1];
            f = b[h].cmd,
            ("Z" === f || "z" === f) && (y.push(b.slice(w, h + 1)),
            w = h + 1)
        }
        if (v = k - m,
        j = l - n,
        s = a(['<svg width="{{width}}" height="{{height}}" viewBox="0 0 {{width}} {{height}}">', '<g transform="scale({{scale}}) translate(' + -m + " " + -n + ')"><path d="{{paths}}" {{attrs}}/></g>', "</svg>"].join("")),
        q = document.createElement("canvas"),
        t = document.createElement("canvas"),
        r = 50 / j,
        v *= r,
        j *= r,
        q.width = t.width = v,
        q.height = t.height = j,
        0 === q.width || 0 === q.height)
            return b;
        for (canvg(q, s.fillup({
            paths: H(b),
            width: v,
            height: j,
            scale: r,
            attrs: 'fill-rule="evenodd"'
        })),
        h = 0; h < y.length; h += 1)
            z.push(I(y[h]));
        for (o = y.slice(0),
        canvg(t, s.fillup({
            paths: H(c(o)),
            attrs: ""
        })),
        g = d(q, t),
        p = g + 1; g && p > g; )
            for (p = g,
            h = 0; h < y.length; h += 1) {
                if (o[h] = z[h],
                canvg(t, s.fillup({
                    paths: H(c(o))
                })),
                u = d(q, t),
                0 === u)
                    return c(o);
                g >= u ? g = u : o[h] = y[h]
            }
        return c(o)
    }
    function K(a) {
        var b, c, d, e, f = {}, g = {};
        d = a[0].getAttribute("viewBox"),
        d && (d = d.trim().split(/\s*[\,\s]\s*/),
        f.x = Number(d[0]),
        f.y = Number(d[1]),
        f.w = Number(d[2]),
        f.h = Number(d[3]));
        try {
            e = 2 === a[0].width.baseVal.unitType ? f.w * a[0].width.baseVal.valueInSpecifiedUnits / 100 : a[0].width.baseVal.valueInSpecifiedUnits || a[0].width.baseVal.value,
            c = 2 === a[0].height.baseVal.unitType ? f.h * a[0].width.baseVal.valueInSpecifiedUnits / 100 : a[0].height.baseVal.valueInSpecifiedUnits || a[0].height.baseVal.value
        } catch (h) {
            try {
                b = a[0].getBBox(),
                e = b.width,
                c = b.height
            } catch (i) {
                e = f.w,
                c = f.h
            }
        }
        if (!d)
            return {
                viewBox: {
                    x: 0,
                    y: 0,
                    width: e,
                    height: c
                },
                transform: !1
            };
        if (e = e || f.w,
        c = c || f.h,
        f.w < 0 || f.h < 0)
            throw new Error("Invalid viewBox.");
        return e >= c && f.w >= f.h || c >= e && f.w >= f.h ? (g.a = g.d = e / f.w,
        g.e = 0) : (c >= e && f.w <= f.h || e >= c && f.w <= f.h) && (g.d = g.a = c / f.h),
        g.a && (g.f = (c - g.d * f.h) / 2,
        g.e = (e - g.a * f.w) / 2,
        g.e -= f.x * g.a,
        g.f -= f.y * g.d),
        !isNaN(g.a) && 1 !== g.a || g.e || g.f || (g = !1),
        {
            viewBox: {
                x: 0,
                y: 0,
                width: e,
                height: c
            },
            transform: g
        }
    }
    function L(a) {
        return "matrix(" + [a.a || 0, a.b || 0, a.c || 0, a.d || 0, a.e || 0, a.f || 0].join(" ") + ")"
    }
    function M(a) {
        function b(a) {
            var b, c, d = a.attr("transform"), e = /(\w+)\s*\(([e\d\s\.\,\-]+)\)/gm, f = [], g = [];
            return d ? (d.replace(e, function(a, d, e) {
                var h, i;
                g = e.replace(/-/g, " -").replace(/e\s*/g, "e").replace(/,/g, " ").replace(/\s+/g, " ").trim().split(/\s/),
                g.forEach(function(a, b) {
                    g[b] = Number(a)
                }),
                "matrix" === d && 6 === g.length ? f.push({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    d: g[3],
                    e: g[4],
                    f: g[5]
                }) : "scale" === d ? (h = g[0] || 1,
                i = g[1] || h,
                f.push({
                    a: h,
                    b: 0,
                    c: 0,
                    d: i
                })) : "translate" === d ? (h = g[0] || 0,
                i = g[1] || 0,
                f.push({
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: h,
                    f: i
                })) : "rotate" === d && (h = g[0] / 180 * Math.PI,
                b = Math.cos(h),
                c = Math.sin(h),
                f.push({
                    a: b,
                    b: c,
                    c: -c,
                    d: b
                }))
            }),
            f.reverse()) : []
        }
        function c(a, b) {
            var c, d;
            for (c = 0,
            d = b.length; d > c; c += 1)
                a.transform(b[c])
        }
        function d(a) {
            var b = window.getComputedStyle(a)
              , c = ["fill", "stroke", "display", "opacity", "visibility", "fill-rule", "stroke-width", "stroke-opacity", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit"]
              , d = [];
            return c.forEach(function(a) {
                d.push(a + ":" + b[a])
            }),
            d.join(";")
        }
        function e(a, f, g) {
            var h, i, j, l, n, p, q, r, s, t, v, w, x, y, z, A, B, C, D, E, F;
            m && a.attr("style", d(a[0]));
            try {
                if ("0" === a.css("opacity") || 0 === a.attr("opacity"))
                    return
            } catch (G) {
                return
            }
            if (l = a.attr("display"),
            n = a.css("display"),
            p = a.attr("fill"),
            q = a.css("fill"),
            D = a.attr("visibility"),
            E = a.css("visibility"),
            w = a.attr("opacity"),
            v = a.css("opacity"),
            C = u(a.css("stroke-width") || a.attr("stroke-width"), f && f.viewBox),
            x = a.css("stroke") || a.attr("stroke"),
            y = a.css("stroke-opacity") || a.attr("stroke-opacity"),
            z = a.css("stroke-linecap") || a.attr("stroke-linecap"),
            A = a.css("stroke-miterlimit") || a.attr("stroke-miterlimit"),
            B = a.css("stroke-linejoin") || a.attr("stroke-linejoin"),
            g = g || {},
            g = JSON.parse(JSON.stringify(g)),
            (p || q) && (q = q || p,
            g.fill = "none" === q || "transparent" === q || /rgba\(\d+,\s*\d+,\s*\d+,\s*0\)/.test(q),
            g.fill !== !0 ? (g.fill = q || p,
            g.fill = g.fill.replace(/\s+/g, ""),
            (/#000|#000000|rgb\(0,0,0\)|rgba\(0,0,0,1\)/.test(g.fill) || !g.fill) && (g.fill = "#000")) : g.fill = "none"),
            g.opacity !== !0 && (w || v) && (v = Number(v || w) * (Number(a.css("fill-opacity") || a.attr("fill-opacity")) || 1),
            "number" != typeof g.opacity && (g.opacity = 1),
            g.opacity *= v,
            0 === g.opacity && (g.opacity = !0)),
            "none" !== l && "none" !== n) {
                if ((D || E) && (E = E || D,
                "hidden" === E && (g.visibility = !0)),
                a.is("use") && (F = a.attr("xlink:href").trim(),
                "#" === F[0] && (F = k.querySelector(F),
                F && !function() {
                    var b;
                    F = P(F),
                    b = K(F),
                    F = P("<g>").append(F),
                    b && b.transform && a.attr("transform", L(b.transform) + " " + a.attr("transform")),
                    a.append(F),
                    a.attr("transform", ["translate(", a.attr("x") || 0, ",", a.attr("y") || 0, ") ", a.attr("transform")].join(""))
                }())),
                C > 0 && "none" !== x && "transparent" !== x && "0" !== y && f.viewBox && C * C / (f.viewBox.width * f.viewBox.height) > 1e-4 && (o = Math.max(o, C),
                g.stroke = x,
                g.strokeLinejoin = B,
                g.strokeLinecap = z,
                g.strokeMiterlimit = A,
                g.strokeWidth = C),
                void 0 !== g.fill && "none" !== g.fill || g.strokeWidth || (g.fill = !0),
                a.is("g, use") || a.is("switch"))
                    for (i = a.children(),
                    r = a[0].style["fill-rule"] || a.attr("fill-rule"),
                    F = N(),
                    F.viewBox = f.viewBox,
                    s = 0,
                    t = i.length; t > s; s += 1)
                        j = P(i[s]),
                        !r || j[0].style["fill-rule"] || j.attr("fill-rule") || j.attr("fill-rule", r),
                        e(j, F, g);
                else {
                    if (!(a.is("polygon, polyline, path, circle, rect, ellipse") || a.is("line") && g.strokeWidth > 0))
                        return;
                    h = {};
                    for (F in g)
                        if (g.hasOwnProperty(F)) {
                            if (g[F] === !0)
                                return;
                            h[F] = g[F]
                        }
                    F = N(a[0]),
                    F.setAttrs(h)
                }
                c(F, b(a)),
                f.append(F)
            }
        }
        var f, g, h, i, j, k, l, m = !1, n = N(), o = 0;
        "string" == typeof a && (a = P(a));
        try {
            for (a.find("style") && (m = !0,
            document.body.appendChild(a[0])),
            f = a.children(),
            h = a[0].style["fill-rule"] || a.attr("fill-rule"),
            k = a[0],
            l = K(a),
            i = 0,
            j = f.length; j > i; i += 1)
                g = P(f[i]),
                m && g.attr("style", d(g[0])),
                !h || g[0].style["fill-rule"] || g.attr("fill-rule") || g.attr("fill-rule", h),
                l.viewBox && (n.viewBox = Object.create(l.viewBox)),
                e(g, n)
        } catch (p) {
            m && a.remove()
        }
        return m && a.remove(),
        n.transform(l.transform),
        l.viewBox && (n.viewBox = l.viewBox,
        o * o / (n.viewBox.width * n.viewBox.height) > 1e-4 && (n.strokeWarning = !0)),
        n
    }
    function N(a) {
        var c = []
          , d = {};
        return d.append = function(a, b) {
            var e, f, g, h, i, j, k = !1, l = [];
            if (c.forEach(function(a) {
                l.push(JSON.stringify(a))
            }),
            !a)
                return this;
            if (Q(a)) {
                for (h = a.length,
                f = 0; h > f; f += 1)
                    d.append(a[f], !0);
                return this
            }
            if ("string" != typeof a && a.length && (a = a[0]),
            "string" == typeof a && /<\/svg>/i.test(a) || a.tagName && "svg" === a.tagName.toLowerCase()) {
                for (a = M(P(a)),
                a.viewBox && (d.viewBox = a.viewBox),
                a.strokeWarning && (d.strokeWarning = !0),
                a = a.getPathArray(),
                j = d.viewBox,
                j = {
                    xMin: j.x,
                    xMax: j.x + j.width,
                    yMin: j.y,
                    yMax: j.y + j.height
                },
                i = [],
                g = 0; g < a.length; g += 1)
                    e = z(a[g]),
                    e.xMin < j.xMax && e.xMax > j.xMin && e.yMin < j.yMax && e.yMax > j.yMin && i.push(a[g]);
                a = i,
                k = !0
            } else
                a.tagName || "string" == typeof a ? a = v(a) : a.getPathArray ? (a = a.getPathArray(),
                k = !0) : a = !1;
            return a && (b || -1 === l.indexOf(JSON.stringify(a))) && (k ? c = c.concat(a) : c.push(a)),
            function() {
                var a, d = [], e = [];
                !b && c.length > 1 && c.length < O && (c.forEach(function(b) {
                    var c = JSON.stringify(b) + JSON.stringify(b.attrs);
                    a = d.indexOf(c),
                    -1 !== a ? e.splice(a, 1) : d.push(c),
                    e.push(b)
                }),
                c = e)
            }(),
            this
        }
        ,
        d.setPath = function(a) {
            return c = [],
            d.append(a)
        }
        ,
        d.setAttrs = function(a, b) {
            b = b || 0,
            c[b] && (c[b].attrs = a)
        }
        ,
        d.getAttrs = function(a) {
            var d, e, f, g = !0, h = b([0, 0, 0]), i = c.length, j = [], k = !1;
            for (f = 0; i > f; f += 1)
                j.push(c[f].attrs || {}),
                a && (j[f].fill && "none" !== j[f].fill && (d = b(j[f].fill),
                e = j[f].fill = d.toString(),
                g = g && b(j[f].fill).distance(h) < 14,
                f && !k && b(j[f].fill).distance(b(j[f - 1].fill)) > 10 && !g && (k = !0)),
                j[f].stroke && "none" !== j[f].stroke && (d = b(j[f].stroke),
                j[f].stroke = d.toString()),
                1 === j[f].opacity && delete j[f].opacity);
            if (a)
                if (k)
                    for (f = 0; i > f; f += 1)
                        j[f] = j[f] || {},
                        j[f].fill || (j[f].fill = "#000"),
                        j[f].strokeWidth > 0 && !j[f].stroke && (j[f].stroke = "#000");
                else
                    j = j.map(function(a) {
                        return "none" !== a.fill && (j.fill = e),
                        a
                    });
            return j
        }
        ,
        d.getPathData = function(a) {
            var b, d, e = [];
            for (b = 0; b < c.length; b += 1)
                d = G(c[b]),
                e.push(d);
            return a ? c.length > O ? [e.join("")] : e : e.join("")
        }
        ,
        d.transform = function(a, b) {
            var e, f, h = 0, i = c.length;
            for (!isNaN(b) && b >= 0 && i > b && (h = b,
            i = b + 1),
            h; i > h; h += 1)
                for (e = c[h],
                f = 0; f < e.length; f += 1)
                    g(e[f].args, a);
            return d.viewBox && (a.a && (d.viewBox.width = Math.abs(Math.round(a.a * d.viewBox.width))),
            a.d && (d.viewBox.height = Math.abs(Math.round(a.d * d.viewBox.height)))),
            this
        }
        ,
        d.scale = function(a, b, c) {
            return a = Number(a),
            b = Number(b),
            a && 1 / 0 !== a ? (d.transform({
                a: a,
                d: b || a
            }, c),
            this) : this
        }
        ,
        d.translate = function(a, b, c) {
            return a = Number(a),
            b = Number(b),
            isNaN(a) ? this : (isNaN(b) && (b = a),
            d.transform({
                e: a,
                f: b
            }, c),
            this)
        }
        ,
        d.rotate = function(a, b) {
            var c, e;
            return a = Number(a) / 180 * Math.PI,
            isNaN(a) ? this : (c = Math.cos(a),
            e = Math.sin(a),
            d.transform({
                a: c,
                b: e,
                c: -e,
                d: c
            }, b),
            this)
        }
        ,
        d.deleteSubPath = function(a) {
            return a >= 0 && a < c.length && c.splice(a, 1),
            this
        }
        ,
        d.moveLayer = function(a, b) {
            var d;
            a >= 0 && a < c.length && (b += b > 0 ? 1 : -1,
            d = c.map(function(a, b) {
                return {
                    el: a,
                    order: b
                }
            }),
            d[a].order += b,
            d.sort(function(a, b) {
                return a.order - b.order
            }),
            c = d.map(function(a) {
                return a.el
            }))
        }
        ,
        d.getTTFContours = function() {
            var a, b = [];
            for (a = 0; a < c.length; a += 1)
                b = b.concat(D(c[a]));
            return b.length || (b = [[{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }]]),
            b
        }
        ,
        d.getCFFPath = function() {
            var a, b = [];
            for (a = 0; a < c.length; a += 1)
                b = b.concat(c[a]);
            return b = C(b),
            b.length || (b = [{
                cmd: "Z",
                args: []
            }]),
            b
        }
        ,
        d.getPDFSegments = function() {
            var a, b = [];
            for (a = 0; a < c.length; a += 1)
                b.push(E(c[a]));
            return b
        }
        ,
        d.getPSPaths = function() {
            var a, b = [];
            for (a = 0; a < c.length; a += 1)
                b = b.concat(F(c[a]));
            return b
        }
        ,
        d.getPathArray = function() {
            return c.slice(0)
        }
        ,
        d.setPath(a),
        d
    }
    var O = 200
      , P = angular.element2
      , Q = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
      , R = function(a, b, d, e) {
        var f = {}
          , g = function(a, b) {
            var d, e, g, h, i, j, k = f.points[0], l = f.points[1], m = f.points[2], n = f.points[3];
            return d = c(k, l, a),
            e = c(l, m, a),
            g = c(m, n, a),
            h = c(d, e, a),
            i = c(e, g, a),
            j = c(h, i, a),
            b && b.point ? j : [R(k, d, h, j), R(j, i, g, n)]
        };
        return a.length ? f.points = a.slice(0) : (f.points = [],
        f.points[0] = a,
        f.points[1] = b,
        f.points[2] = d,
        f.points[3] = e),
        f.getPointAt = function(a) {
            return g(a, {
                point: !0
            })
        }
        ,
        f.splitAt = g,
        f
    };
    return N
}
]).factory("glyphs", ["svgPath", "template", function(a, b) {
    var c = angular.element2;
    return function(d) {
        function e(a) {
            return a = a.replace(/,[,\s]+/g, ",").replace(/,$/, "").replace(/^,/, "").trim(),
            a.split(",")
        }
        function f(b, d, f) {
            var g, h, i, j, k = parseInt(b.attr("horiz-adv-x"), 10);
            if (d = d || 0,
            f || u.fillup({
                width: k || s.defaultAdvX
            }),
            g = b.attr("d"),
            !g || g.length < 10 || b.hasClass("hidden"))
                return !1;
            if (i = a(g),
            i.transform({
                a: 1,
                d: -1,
                f: s.ascent - d
            }),
            f) {
                if (i.viewBox = {
                    x: 0,
                    y: 0,
                    width: k,
                    height: s.unitsPerEm
                },
                j = b.attr("data-tags") || b.attr("glyph-name"),
                j && (i.tags = e(j)),
                h = b.attr("unicode")) {
                    if (h.charLength() > 1)
                        return {
                            d: g,
                            path: i,
                            liga: h
                        };
                    i.defaultCode = h.codePointAt(0)
                }
                return i
            }
            return c(u.fillup({
                d: i.getPathData()
            }))
        }
        var g, h, i, j, k, l, m, n, o, p, q, r = [], s = {}, t = Object.create(null ), u = b(['<svg viewBox="0 0 {{width}} {{height}}" width="{{width}}" height="{{height}}">', '<path d="{{d}}"></path>', "</svg>"].join(""));
        if ("string" == typeof d && (d = c(d)),
        j = d.find("glyph"),
        m = j.length)
            for (i = d.children(),
            l = 0; l < i.length; l += 1)
                i.eq(l).is("g, polygon, polyline, path, circle, rect, ellipse, use") && (o = !0);
        if (!m || o)
            q = d.attr("data-tags"),
            d = a(d),
            q && (d.tags = e(q)),
            r.push(d);
        else {
            if (s.defaultAdvX = parseInt(d.find("font").attr("horiz-adv-x"), 10),
            q = d.find("font-face"),
            s.ascent = parseInt(q.attr("ascent"), 10),
            s.descent = parseInt(q.attr("descent"), 10),
            s.baseline = 100 * (s.descent / (s.descent - s.ascent)),
            s.unitsPerEm = s.ascent - s.descent,
            u.fillup({
                height: s.unitsPerEm
            }),
            n = d.find("metadata"),
            n.length && (n = n.find("json"),
            n.length))
                try {
                    n = JSON.parse(n.text()),
                    r.metadata = {
                        name: n.name || n.fontFamily,
                        url: n.url || n.fontURL,
                        designer: n.designer,
                        designerURL: n.designerURL,
                        license: n.license,
                        licenseURL: n.licenseURL,
                        description: n.description,
                        copyright: n.copyright,
                        majorVersion: n.majorVersion,
                        minorVersion: n.minorVersion,
                        includeMetadata: !0
                    },
                    n.grid && (r.metadata.grid = n.grid)
                } catch (v) {}
            for (h = angular.element(document.body),
            l = 0; 20 > l; l += 1)
                if (q = f(c(j[l]))) {
                    h.append(q);
                    try {
                        g = q[0].getBBox(),
                        q.remove()
                    } catch (v) {
                        q.remove()
                    }
                    if (g.height === s.unitsPerEm) {
                        if (p === g.y)
                            break;
                        p = g.y
                    }
                }
            for (l = 0; m > l; l += 1)
                if (k = c(j[l]),
                q = f(k, p, !0))
                    q.liga ? (t[q.d] = t[q.d] || {
                        liga: []
                    },
                    t[q.d].liga.push(q.liga),
                    t[q.d].path = q.path) : (r.push(q),
                    t[k.attr("d")] = t[k.attr("d")] || {
                        liga: []
                    },
                    t[k.attr("d")].idx = r.length - 1);
                else
                    try {
                        32 === k.attr("unicode").codePointAt(0) && (s.whitespace = 100 * (parseInt(k.attr("horiz-adv-x"), 10) / s.unitsPerEm))
                    } catch (v) {}
            for (q in t)
                try {
                    "number" == typeof t[q].idx ? r[t[q].idx].liga = t[q].liga : (t[q].path.liga = t[q].liga,
                    r.push(t[q].path))
                } catch (v) {}
        }
        return r.fontMetrics = {
            emSize: s.unitsPerEm,
            baseline: 0, //s.baseline,
            whitespace: 0,// && s.whitespace
        },
        r
    }
}
]),
function() {
    var a = "http://www.w3.org/1999/xlink"
      , b = angular.module("svg")
      , c = {};
    angular.forEach([{
        miAttrName: "miXlinkHref",
        attrName: "xlink:href"
    }, {
        miAttrName: "miStrokeWidth",
        attrName: "stroke-width"
    }, {
        miAttrName: "miStrokeLinejoin",
        attrName: "stroke-linejoin"
    }, {
        miAttrName: "miStrokeLinecap",
        attrName: "stroke-linecap"
    }, {
        miAttrName: "miStrokeMiterlimit",
        attrName: "stroke-miterlimit"
    }, {
        miAttrName: "miFontSize",
        attrName: "font-size"
    }, "d", "fill", "stroke", "opacity", "width", "height", "viewBox", "x1", "x2", "y1", "y2"], function(b) {
        var d;
        "string" == typeof b ? d = "mi" + b.substr(0, 1).toUpperCase() + b.substr(1) : (d = b.miAttrName,
        b = b.attrName),
        c[d] = function() {
            return {
                priority: 99,
                link: function(c, e, f) {
                    f.$observe(d, function(c) {
                        c && (/:/.test(b) ? e[0].setAttributeNS(a, b, c) : e.attr(b, c))
                    })
                }
            }
        }
    }),
    b.directive(c)
}(),
angular.module("font", ["svg", "tmpl"]).factory("font", ["svgPath", "template", function(a, b) {
    function c(b) {
        var c, m, n, p, r, t, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb = "truetype" === b.outlines || "truetype" === b.woff, db = i, eb = {}, fb = [], gb = [], hb = 0, ib = [0], jb = [{
            aw: i,
            lsb: 0
        }], kb = 0, lb = !0, mb = {}, nb = {}, ob = 0, pb = 0, qb = {
            advXSum: 0,
            advXCount: 0
        }, rb = 0, sb = {}, tb = ["CFF ", "OS/2", "cmap", "gasp", "glyf", "head", "hhea", "hmtx", "loca", "maxp", "name", "post"];
        for (V = d.length,
        t = 0; V > t; t += 1)
            for (_ = d[t].code,
            isNaN(_) && (_ = t + 59648,
            d[t].code = _),
            fb.push(_),
            _ = d[t].ligatures,
            P = P || {},
            R = _ ? _.length || 0 : 0,
            !Q && _ && (Q = !0),
            N = 0; R > N; N += 1)
                "string" == typeof _[N] && _[N].length > 1 && (P[_[N]] = d[t].code);
        for (Z in P)
            if (P.hasOwnProperty(Z))
                for (t = 0; t < Z.length; t += 1)
                    _ = Z.charCodeAt(t),
                    fb.indexOf(_) < 0 && (d.push({
                        code: _,
                        advX: 0
                    }),
                    fb.push(_));
        d.sort(function(a, b) {
            return a.code - b.code
        }),
        fb.sort(function(a, b) {
            return a - b
        });
        for (Z in P)
            if (P.hasOwnProperty(Z))
                for (P[Z] = fb.indexOf(P[Z]) + 1,
                t = 0; t < Z.length; t += 1)
                    nb[Z.charAt(t)] = fb.indexOf(Z.charCodeAt(t)) + 1;
        for (e && e.length && (e = e.map(function(a) {
            var b = fb.indexOf(a.left)
              , c = fb.indexOf(a.right);
            return -1 === b || -1 === c ? !1 : {
                left: b + 1,
                right: c + 1,
                value: a.value
            }
        }).filter(function(a) {
            return a !== !1
        })),
        V = d.length,
        t = 0; V > t; t += 1)
            d[t].contours || (Y = d[t].svgPath,
            Y ? (Y.viewBox && Y.viewBox.height !== h && (_ = h / Y.viewBox.height,
            Y.scale(_)),
            d[t].d = Y.transform({
                a: 1,
                d: -1,
                f: f
            }).getPathData(),
            d[t].contours = Y.getTTFContours()) : (d[t].contours = [[{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }]],
            d[t].svgPath = a())),
            _ = v(d[t].contours),
            ob = l(ob, _.pointsCount),
            pb = l(pb, _.contourCount),
            gb.push(_.buffer),
            ib.push(hb / 2),
            hb += _.buffer.byteLength,
            _ = _.bbox,
            120 === d[t].code && (qb.sxHeight = _.yMax),
            72 === d[t].code && (qb.sCapHeight = _.yMax),
            eb.xMin = k(eb.xMin, _.xMin),
            eb.yMin = k(eb.yMin, _.yMin),
            eb.xMax = l(eb.xMax, _.xMax),
            eb.yMax = l(eb.yMax, _.yMax),
            S = _.xMin,
            T = k(S, T),
            c = d[t].advX,
            isNaN(c) && d[t].svgPath && (c = d[t].svgPath.viewBox,
            c && (c = c.width,
            d[t].advX = c)),
            isNaN(c) || c === i ? c = i : (lb && V > 1 && (lb = !1),
            db = l(c, db)),
            c && (qb.advXSum += c,
            qb.advXCount += 1),
            bb = l(bb, S + _.xMax - _.xMin),
            _ = c - _.xMax,
            U = k(U, _),
            jb.push({
                aw: c,
                lsb: S
            });
        if (V += 1,
        ib.push(hb / 2),
        b.woff && !cb && (sb["CFF "] = M({
            psName: j.psName,
            fontFamily: j.fontFamily,
            fullName: j.fullName,
            ascent: f,
            descent: g,
            bbox: {
                xMin: eb.xMin < 0 ? eb.xMin : 0,
                yMin: k(g, eb.yMin),
                xMax: l(db, eb.xMax),
                yMax: l(f, eb.yMax)
            },
            defaultAdvX: i,
            emSize: h,
            glyphs: d
        }),
        sb.maxp2 = x({
            numGlyphs: V,
            maxPoints: ob,
            maxContours: pb,
            cff: !0
        })),
        ib[ib.length - 1] > 65535 && (kb = 1),
        (b.ttf || b.eot || cb) && (sb.glyf = o(gb),
        sb.loca = E(ib, kb),
        sb.maxp = x({
            numGlyphs: V,
            maxPoints: ob,
            maxContours: pb
        })),
        sb.cmap = w(fb),
        sb.gasp = G([65535, 15]),
        sb.head = z({
            xMin: eb.xMin,
            yMin: eb.yMin,
            xMax: eb.xMax,
            yMax: eb.yMax,
            unitsPerEm: h,
            indexToLocFormat: kb,
            majorVersion: j.majorVersion,
            minorVersion: j.minorVersion
        }),
        sb.hhea = B({
            ascent: f,
            descent: g,
            advanceWidthMax: db,
            numOfLongHorMetrics: jb.length,
            minRightSideBearing: U,
            minLeftSideBearing: T,
            xMaxExtent: bb
        }),
        sb.hmtx = C(jb),
        sb.name = A(j),
        Q && (tb.splice(1, 0, "GSUB"),
        sb.GSUB = H(P, nb)),
        e && e.length && (tb.splice(1, 0, "GPOS"),
        sb.GPOS = I(e)),
        n = fb[0],
        n = n > 65535 ? 65535 : n,
        O = fb[fb.length - 1],
        qb = {
            italicAngle: 0,
            emSize: h,
            usFirstCharIndex: n,
            usLastCharIndex: O > 65535 ? 65535 : O,
            ascent: f,
            descent: g,
            codes: fb,
            xAvgCharWidth: Math.round(qb.advXSum / qb.advXCount),
            sxHeight: qb.sxHeight || 0,
            sCapHeight: qb.sCapHeight || 0
        },
        sb["OS/2"] = F(qb),
        sb.post = y({
            isFixedPitch: lb
        }),
        R = tb.length,
        b.ttf || b.eot || cb) {
            for (W = R - 1,
            p = [u(W)],
            $ = [],
            X = [],
            rb = p[0].byteLength + 16 * W,
            t = 0; R > t; t += 1)
                "CFF " !== tb[t] && ("head" === tb[t] && (N = X.length),
                _ = sb[tb[t]],
                _ = {
                    buffer: _,
                    origLength: _.byteLength
                },
                _.buffer = o([_.buffer], 4),
                X.push(_.buffer),
                $.push(D({
                    tag: q(tb[t]),
                    checksum: s(_.buffer),
                    offset: rb,
                    length: _.origLength
                }).buffer),
                rb += _.buffer.byteLength);
            p = p.concat($),
            _ = s(o(p.concat(X))),
            _ = 2981146554 - _,
            new DataView(X[N]).setUint32(8, _),
            p = o(p.concat(X))
        }
        if (b.woff && !cb) {
            for (W = R - 2,
            r = [u(W, !0)],
            $ = [],
            X = [],
            rb = r[0].byteLength + 16 * W,
            t = 0; R > t; t += 1)
                _ = tb[t],
                "glyf" !== _ && "loca" !== _ && ("maxp" === _ ? _ = "maxp2" : "head" === _ && (N = X.length),
                _ = sb[_],
                _ = {
                    buffer: _,
                    origLength: _.byteLength
                },
                _.buffer = o([_.buffer], 4),
                X.push(_.buffer),
                $.push(D({
                    tag: q(tb[t]),
                    checksum: s(_.buffer),
                    offset: rb,
                    length: _.origLength
                }).buffer),
                rb += _.buffer.byteLength);
            r = r.concat($),
            _ = s(o(r.concat(X))),
            _ = 2981146554 - _,
            new DataView(X[N]).setUint32(8, _),
            r = o(r.concat(X))
        }
        return b.ttf && (mb.ttf = p),
        b.eot && (m = K({
            ttf: p,
            checkSumAdjustment: _,
            name: j,
            os2: qb
        }),
        mb.eot = m),
        b.woff && (ab = J({
            tableDirectory: $,
            subTables: X,
            sfntSize: cb ? p.byteLength : r.byteLength,
            majorVersion: j.majorVersion,
            minorVersion: j.minorVersion,
            truetype: cb
        }),
        mb.woff = ab),
        b.svg && (mb.svg = L()),
        mb
    }
    var d, e, f, g, h, i, j, k = function(a, b) {
        return isNaN(a) ? b : isNaN(b) ? a : b > a ? a : b
    }, l = function(a, b) {
        return isNaN(a) ? b : isNaN(b) ? a : a > b ? a : b
    }, m = function(a) {
        return a > 32767 && (a = 32767),
        -32768 > a && (a = -32768),
        a
    }, n = function(a, b) {
        var c, d, e, f = a.length;
        for (f = f > b.length ? f : b.length,
        e = 0; f > e; e += 1)
            if (c = a.charCodeAt(e),
            d = b.charCodeAt(e),
            c !== d)
                return isNaN(c) ? -1 : isNaN(d) ? 1 : c - d;
        return 0
    }, o = function(a, b) {
        var c, d, e = a.length, f = 0, g = 0, h = 0;
        for (c = 0; e > c; c += 1)
            f += a[c].byteLength;
        if (!isNaN(b) && b > 0)
            for (; f > g; )
                g += b;
        for (d = new Uint8Array(g || f),
        c = 0; e > c; c += 1)
            d.set(new Uint8Array(a[c]), h),
            h += a[c].byteLength;
        return d.buffer
    }, p = function(a, b, c) {
        var d, e, f, g, h = a.length;
        for (1 === b ? f = "setUint8" : (f = "setUint16",
        b = 2),
        d = new ArrayBuffer(h * b),
        e = new DataView(d),
        g = 0; h > g; g += 1)
            e[f](g * b, a.charCodeAt(g), c);
        return d
    }, q = function(a) {
        var b, c = a.length, d = "";
        for (b = 0; c > b; b += 1)
            d += a[b].charCodeAt(0).toString(16);
        return parseInt(d, 16)
    }, r = function(a) {
        for (var b = 0; a >= 2; )
            a /= 2,
            b += 1;
        return b
    }, s = function(a) {
        var b, c = new DataView(a), d = a.byteLength, e = 0;
        for (b = 0; d > b; b += 4)
            e += c.getUint32(b),
            e > 4294967295 && (e = parseInt(e.toString(16).match(/.{8}$/)[0], 16));
        return e
    }, t = function(a) {
        var b, c, d = [{
            bit: 0,
            range: [0, 127]
        }, {
            bit: 1,
            range: [128, 255]
        }, {
            bit: 2,
            range: [256, 383]
        }, {
            bit: 3,
            range: [384, 591]
        }, {
            bit: 4,
            range: [592, 687]
        }, {
            bit: 4,
            range: [7424, 7551]
        }, {
            bit: 4,
            range: [7552, 7615]
        }, {
            bit: 5,
            range: [688, 767]
        }, {
            bit: 5,
            range: [42752, 42783]
        }, {
            bit: 6,
            range: [768, 879]
        }, {
            bit: 6,
            range: [7616, 7679]
        }, {
            bit: 7,
            range: [880, 1023]
        }, {
            bit: 8,
            range: [11392, 11519]
        }, {
            bit: 9,
            range: [1024, 1279]
        }, {
            bit: 9,
            range: [1280, 1327]
        }, {
            bit: 9,
            range: [11744, 11775]
        }, {
            bit: 9,
            range: [42560, 42655]
        }, {
            bit: 10,
            range: [1328, 1423]
        }, {
            bit: 11,
            range: [1424, 1535]
        }, {
            bit: 12,
            range: [42240, 42559]
        }, {
            bit: 13,
            range: [1536, 1791]
        }, {
            bit: 13,
            range: [1872, 1919]
        }, {
            bit: 14,
            range: [1984, 2047]
        }, {
            bit: 15,
            range: [2304, 2431]
        }, {
            bit: 16,
            range: [2432, 2559]
        }, {
            bit: 17,
            range: [2560, 2687]
        }, {
            bit: 18,
            range: [2688, 2815]
        }, {
            bit: 19,
            range: [2816, 2943]
        }, {
            bit: 20,
            range: [2944, 3071]
        }, {
            bit: 21,
            range: [3072, 3199]
        }, {
            bit: 22,
            range: [3200, 3327]
        }, {
            bit: 23,
            range: [3328, 3455]
        }, {
            bit: 24,
            range: [3584, 3711]
        }, {
            bit: 25,
            range: [3712, 3839]
        }, {
            bit: 26,
            range: [4256, 4351]
        }, {
            bit: 26,
            range: [11520, 11567]
        }, {
            bit: 27,
            range: [6912, 7039]
        }, {
            bit: 28,
            range: [4352, 4607]
        }, {
            bit: 29,
            range: [7680, 7935]
        }, {
            bit: 29,
            range: [11360, 11391]
        }, {
            bit: 29,
            range: [42784, 43007]
        }, {
            bit: 30,
            range: [7936, 8191]
        }, {
            bit: 31,
            range: [8192, 8303]
        }, {
            bit: 31,
            range: [11776, 11903]
        }, {
            bit: 32,
            range: [8304, 8351]
        }, {
            bit: 33,
            range: [8352, 8399]
        }, {
            bit: 34,
            range: [8400, 8447]
        }, {
            bit: 35,
            range: [8448, 8527]
        }, {
            bit: 36,
            range: [8528, 8591]
        }, {
            bit: 37,
            range: [8592, 8703]
        }, {
            bit: 37,
            range: [10224, 10239]
        }, {
            bit: 37,
            range: [10496, 10623]
        }, {
            bit: 37,
            range: [11008, 11263]
        }, {
            bit: 38,
            range: [8704, 8959]
        }, {
            bit: 38,
            range: [10752, 11007]
        }, {
            bit: 38,
            range: [10176, 10223]
        }, {
            bit: 38,
            range: [10624, 10751]
        }, {
            bit: 39,
            range: [8960, 9215]
        }, {
            bit: 40,
            range: [9216, 9279]
        }, {
            bit: 41,
            range: [9280, 9311]
        }, {
            bit: 42,
            range: [9312, 9471]
        }, {
            bit: 43,
            range: [9472, 9599]
        }, {
            bit: 44,
            range: [9600, 9631]
        }, {
            bit: 45,
            range: [9632, 9727]
        }, {
            bit: 46,
            range: [9728, 9983]
        }, {
            bit: 47,
            range: [9984, 10175]
        }, {
            bit: 48,
            range: [12288, 12351]
        }, {
            bit: 49,
            range: [12352, 12447]
        }, {
            bit: 50,
            range: [12448, 12543]
        }, {
            bit: 50,
            range: [12784, 12799]
        }, {
            bit: 51,
            range: [12544, 12591]
        }, {
            bit: 51,
            range: [12704, 12735]
        }, {
            bit: 52,
            range: [12592, 12687]
        }, {
            bit: 53,
            range: [43072, 43135]
        }, {
            bit: 54,
            range: [12800, 13055]
        }, {
            bit: 55,
            range: [13056, 13311]
        }, {
            bit: 56,
            range: [44032, 55215]
        }, {
            bit: 57,
            range: [55296, 57343]
        }, {
            bit: 58,
            range: [67840, 67871]
        }, {
            bit: 59,
            range: [19968, 40959]
        }, {
            bit: 59,
            range: [11904, 12031]
        }, {
            bit: 59,
            range: [12032, 12255]
        }, {
            bit: 59,
            range: [12272, 12287]
        }, {
            bit: 59,
            range: [13312, 19903]
        }, {
            bit: 59,
            range: [131072, 173791]
        }, {
            bit: 59,
            range: [12688, 12703]
        }, {
            bit: 60,
            range: [57344, 63743]
        }, {
            bit: 61,
            range: [12736, 12783]
        }, {
            bit: 61,
            range: [63744, 64255]
        }, {
            bit: 61,
            range: [194560, 195103]
        }, {
            bit: 62,
            range: [64256, 64335]
        }, {
            bit: 63,
            range: [64336, 65023]
        }, {
            bit: 64,
            range: [65056, 65071]
        }, {
            bit: 65,
            range: [65040, 65055]
        }, {
            bit: 65,
            range: [65072, 65103]
        }, {
            bit: 66,
            range: [65104, 65135]
        }, {
            bit: 67,
            range: [65136, 65279]
        }, {
            bit: 68,
            range: [65280, 65519]
        }, {
            bit: 69,
            range: [65520, 65535]
        }, {
            bit: 70,
            range: [3840, 4095]
        }, {
            bit: 71,
            range: [1792, 1871]
        }, {
            bit: 72,
            range: [1920, 1983]
        }, {
            bit: 73,
            range: [3456, 3583]
        }, {
            bit: 74,
            range: [4096, 4255]
        }, {
            bit: 75,
            range: [4608, 4991]
        }, {
            bit: 75,
            range: [4992, 5023]
        }, {
            bit: 75,
            range: [11648, 11743]
        }, {
            bit: 76,
            range: [5024, 5119]
        }, {
            bit: 77,
            range: [5120, 5759]
        }, {
            bit: 78,
            range: [5760, 5791]
        }, {
            bit: 79,
            range: [5792, 5887]
        }, {
            bit: 80,
            range: [6016, 6143]
        }, {
            bit: 80,
            range: [6624, 6655]
        }, {
            bit: 81,
            range: [6144, 6319]
        }, {
            bit: 82,
            range: [10240, 10495]
        }, {
            bit: 83,
            range: [40960, 42127]
        }, {
            bit: 83,
            range: [42128, 42191]
        }, {
            bit: 84,
            range: [5888, 5919]
        }, {
            bit: 84,
            range: [5920, 5951]
        }, {
            bit: 84,
            range: [5952, 5983]
        }, {
            bit: 84,
            range: [5984, 6015]
        }, {
            bit: 85,
            range: [66304, 66351]
        }, {
            bit: 86,
            range: [66352, 66383]
        }, {
            bit: 87,
            range: [66560, 66639]
        }, {
            bit: 88,
            range: [118784, 119039]
        }, {
            bit: 88,
            range: [119040, 119295]
        }, {
            bit: 88,
            range: [119296, 119375]
        }, {
            bit: 89,
            range: [119808, 120831]
        }, {
            bit: 90,
            range: [1044480, 1048573]
        }, {
            bit: 90,
            range: [1048576, 1114109]
        }, {
            bit: 91,
            range: [65024, 65039]
        }, {
            bit: 91,
            range: [917760, 917999]
        }, {
            bit: 92,
            range: [917504, 917631]
        }, {
            bit: 93,
            range: [6400, 6479]
        }, {
            bit: 94,
            range: [6480, 6527]
        }, {
            bit: 95,
            range: [6528, 6623]
        }, {
            bit: 96,
            range: [6656, 6687]
        }, {
            bit: 97,
            range: [11264, 11359]
        }, {
            bit: 98,
            range: [11568, 11647]
        }, {
            bit: 99,
            range: [19904, 19967]
        }, {
            bit: 100,
            range: [43008, 43055]
        }, {
            bit: 101,
            range: [65536, 65663]
        }, {
            bit: 101,
            range: [65664, 65791]
        }, {
            bit: 101,
            range: [65792, 65855]
        }, {
            bit: 102,
            range: [65856, 65935]
        }, {
            bit: 103,
            range: [66432, 66463]
        }, {
            bit: 104,
            range: [66464, 66527]
        }, {
            bit: 105,
            range: [66640, 66687]
        }, {
            bit: 106,
            range: [66688, 66735]
        }, {
            bit: 107,
            range: [67584, 67647]
        }, {
            bit: 108,
            range: [68096, 68191]
        }, {
            bit: 109,
            range: [119552, 119647]
        }, {
            bit: 110,
            range: [73728, 74751]
        }, {
            bit: 110,
            range: [74752, 74879]
        }, {
            bit: 111,
            range: [119648, 119679]
        }, {
            bit: 112,
            range: [7040, 7103]
        }, {
            bit: 113,
            range: [7168, 7247]
        }, {
            bit: 114,
            range: [7248, 7295]
        }, {
            bit: 115,
            range: [43136, 43231]
        }, {
            bit: 116,
            range: [43264, 43311]
        }, {
            bit: 117,
            range: [43312, 43359]
        }, {
            bit: 118,
            range: [43520, 43615]
        }, {
            bit: 119,
            range: [65936, 65999]
        }, {
            bit: 120,
            range: [66e3, 66047]
        }, {
            bit: 121,
            range: [66208, 66271]
        }, {
            bit: 121,
            range: [66176, 66207]
        }, {
            bit: 121,
            range: [67872, 67903]
        }, {
            bit: 122,
            range: [127024, 127135]
        }, {
            bit: 122,
            range: [126976, 127023]
        }];
        for (b = 0,
        c = d.length; c > b; b += 1)
            if (a >= d[b].range[0] && a <= d[b].range[1])
                return d[b].bit;
        return 0
    }, u = function(a, b) {
        for (var c, d = new ArrayBuffer(12), e = 1, f = 0, g = new DataView(d); a > e; )
            f += 1,
            e *= 2;
        return e /= 2,
        f -= 1,
        c = 16 * e,
        g.setUint32(0, b ? q("OTTO") : 65536),
        g.setUint16(4, a),
        g.setUint16(6, c),
        g.setUint16(8, f),
        g.setUint16(10, 16 * a - c),
        d
    }, v = function(a) {
        var b, c, d, e, f, g, h, i, j, n, p = [], q = [], r = [], s = [], t = {}, u = 0, v = function(a, b, c, d) {
            var e, f, g, h = 1, i = 4;
            "y" === a && (h += 1,
            i += 1),
            d ? (e = d.roundedVal,
            isNaN(e) && (e = d.val)) : e = 0,
            c.relVal = c.val - e,
            g = Math.round(c.relVal),
            c.relVal = c.relVal > 0 && .5 === c.relVal % 1 ? g - 1 : g,
            c.roundedVal = Math.round(e + c.relVal),
            f = d && 0 === c.relVal,
            !f && c.relVal < 256 && c.relVal > -256 ? (b[h] = 1,
            c.relVal < 0 ? (b[i] = 0,
            c.relVal = -c.relVal) : b[i] = 1,
            c.byteLength = 1) : (b[h] = 0,
            f ? (b[i] = 1,
            c.byteLength = 0) : (b[i] = 0,
            c.byteLength = 2))
        }, w = function(a, b) {
            var c, d, e, f, g = b.length, h = new ArrayBuffer(2 * g), i = new DataView(h), j = 0;
            for (c = 0; g > c; c += 1)
                d = b[c],
                e = d[a].byteLength,
                e && (f = d[a].relVal,
                1 === e ? i.setUint8(j, f) : 2 === e && i.setUint16(j, f),
                j += e);
            return h.slice(0, j)
        };
        for (a = Object.create(a),
        f = a.length,
        e = 0; f > e; e += 1) {
            for (b = a[e],
            i = [],
            g = b.length,
            u += g,
            d = 0; g > d; d += 1)
                i[d] = [],
                i[d][3] = 0,
                h = b[d],
                h.offCurve ? i[d][0] = 0 : (i[d][0] = 1,
                b.xMin = k(b.xMin, h.x),
                b.yMin = k(b.yMin, h.y),
                b.xMax = l(b.xMax, h.x),
                b.yMax = l(b.yMax, h.y)),
                h.x = {
                    val: h.x
                },
                h.y = {
                    val: h.y
                },
                0 === d ? a[e - 1] ? (j = a[e - 1].length,
                j = a[e - 1][j - 1]) : j = !1 : j = b[d - 1],
                v("x", i[d], h.x, j ? j.x : !1),
                v("y", i[d], h.y, j ? j.y : !1);
            for (g = i.length,
            c = 0; g > c; c += 1) {
                for (d = 0,
                j = i[c].join(""); 256 > d && i[c + d + 1] && j === i[c + d + 1].join(""); )
                    d += 1;
                d && (i[c][3] = 1,
                i[c + 1] = d,
                i.splice(c + 2, d - 1),
                g = i.length,
                c += 1)
            }
            b.flags = i,
            b.xBuffer = w("x", b),
            b.yBuffer = w("y", b)
        }
        for (i = [],
        c = 0,
        f = a.length; f > c; c += 1) {
            for (b = a[c],
            t.xMin = Math.round(k(t.xMin, b.xMin)),
            t.yMin = Math.round(k(t.yMin, b.yMin)),
            t.xMax = Math.round(l(t.xMax, b.xMax)),
            t.yMax = Math.round(l(t.yMax, b.yMax)),
            q.push(b.length + (q[c - 1] || -1)),
            d = 0,
            g = b.flags.length; g > d; d += 1)
                b.flags[d].length && (b.flags[d] = parseInt(b.flags[d].reverse().join(""), 2));
            i.push(new Uint8Array(b.flags).buffer),
            r.push(b.xBuffer),
            s.push(b.yBuffer)
        }
        for (i = o(i),
        j = new ArrayBuffer(2 * q.length + 2),
        n = new DataView(j),
        c = 0,
        f = q.length; f > c; c += 1)
            n.setInt16(2 * c, q[c]);
        return j = [j],
        r = o(r),
        s = o(s),
        j.push(i),
        j.push(r),
        j.push(s),
        p = o(j),
        j = new ArrayBuffer(10),
        n = new DataView(j),
        n.setUint16(0, a.length),
        n.setUint16(2, m(t.xMin)),
        n.setUint16(4, m(t.yMin)),
        n.setUint16(6, m(t.xMax)),
        n.setUint16(8, m(t.yMax)),
        j = [j],
        j.push(p),
        {
            buffer: o(j, 4),
            bbox: t,
            contourCount: a.length,
            pointsCount: u
        }
    }, w = function(a) {
        function b(a, b) {
            var c, d, e = [], f = a.length;
            for (d = 0,
            a.sort(function(a, b) {
                return a.code - b.code
            }),
            c = 1; f > c; c += 1)
                (a[c].code !== a[c - 1].code + 1 || b && a[c].idx !== a[c - 1].idx + 1) && (e.push(a.slice(d, c)),
                d = c);
            return e.push(a.slice(d, f)),
            e
        }
        function c(a, b, c) {
            var d, f;
            e || (e = new ArrayBuffer(8 * v)),
            f = e.lastOffset || 0,
            d = new DataView(e),
            d.setUint16(f, a),
            f += 2,
            d.setUint16(f, b),
            f += 2,
            d.setUint32(f, c),
            f += 4,
            e.lastOffset = f
        }
        var d, e, f, g, h, i, j, k, l, m, n, p, q, s = [], t = [], u = [], v = 3;
        for (k = a.length,
        j = 0; k > j; j += 1)
            q = a[j],
            65535 >= q ? t.push({
                idx: j + 1,
                code: q
            }) : u.push({
                idx: j + 1,
                code: q
            });
        if (i = u.length > 0,
        h = t.length > 0,
        i && h && (v = 6),
        i && (u = u.concat(t)),
        q = new ArrayBuffer(4),
        d = new DataView(q),
        d.setUint16(0, 0),
        d.setUint16(2, v),
        s.push(q),
        h) {
            for (q = t.map(function(a) {
                return a.code
            }),
            q.indexOf(65535) < 0 && t.push({
                idx: 0,
                code: 65535
            }),
            q.indexOf(65534) < 0 && q.indexOf(65533) < 0 && t.push({
                idx: 0,
                code: 65533
            }),
            m = b(t),
            p = m.length,
            g = new ArrayBuffer(2 * (8 + 4 * p)),
            d = new DataView(g),
            d.setUint16(0, 4),
            d.setUint16(2, g.byteLength),
            d.setUint16(4, 0),
            d.setUint16(6, 2 * p),
            q = 2 * Math.pow(2, r(p)),
            d.setUint16(8, q),
            d.setUint16(10, r(q / 2)),
            d.setUint16(12, 2 * p - q),
            l = 14,
            j = 0; p > j; j += 1)
                d.setUint16(l, m[j][m[j].length - 1].code),
                l += 2;
            for (d.setUint16(l, 0),
            l += 2,
            j = 0; p > j; j += 1)
                d.setUint16(l, m[j][0].code),
                l += 2;
            for (j = 0; p > j; j += 1)
                d.setInt16(l, m[j][0].idx - m[j][0].code),
                l += 2;
            for (j = 0; p > j; j += 1)
                d.setUint16(l, 0),
                l += 2
        }
        if (l = 4 + 8 * v,
        q = g ? g.byteLength : 0,
        q += l,
        h && c(0, 3, l),
        i && c(0, 4, q),
        h && c(1, 3, l),
        i && c(1, 4, q),
        h && c(3, 1, l),
        i && c(3, 10, q),
        s.push(e),
        h && s.push(g),
        i) {
            for (n = b(u, !0),
            p = n.length,
            f = new ArrayBuffer(16 + 12 * p),
            d = new DataView(f),
            d.setUint32(0, 786432),
            d.setUint32(4, f.byteLength),
            d.setUint32(8, 0),
            d.setUint32(12, p),
            l = 16,
            j = 0; p > j; j += 1)
                q = n[j],
                d.setUint32(l, q[0].code),
                l += 4,
                d.setUint32(l, q[q.length - 1].code),
                l += 4,
                d.setUint32(l, q[0].idx),
                l += 4;
            s.push(f)
        }
        return o(s, 4)
    }, x = function(a) {
        var b = new ArrayBuffer(a.cff ? 6 : 32)
          , c = new DataView(b);
        return c.setUint32(0, a.cff ? 20480 : 65536),
        c.setUint16(4, a.numGlyphs || 0),
        a.cff || (c.setUint16(6, a.maxPoints || 0),
        c.setUint16(8, a.maxContours || 0),
        c.setUint16(10, a.maxComponentPoints || 0),
        c.setUint16(12, a.maxComponentContours || 0),
        c.setUint16(14, 2),
        c.setUint16(16, a.maxTwilightPoints || 0),
        c.setUint16(18, a.maxStorage || 0),
        c.setUint16(20, a.maxFunctionDefs || 0),
        c.setUint16(22, a.maxInstructionDefs || 0),
        c.setUint16(24, a.maxStackElements || 0),
        c.setUint16(26, a.maxSizeOfInstructions || 0),
        c.setUint16(28, a.maxComponentElements || 0),
        c.setUint16(30, a.maxComponentDepth || 0)),
        b
    }, y = function(a) {
        var b = new ArrayBuffer(32)
          , c = new DataView(b);
        return c.setInt32(0, 196608),
        c.setUint32(12, a.isFixedPitch ? 1 : 0),
        b
    }, z = function(a) {
        var b = new ArrayBuffer(54)
          , c = new DataView(b)
          , d = {
            val: Math.round((new Date).getTime() / 1e3) + 2082844800
        };
        return a.xMax,
        a.xMin,
        d.msb = Math.floor(d.val / 4294967295),
        d.lsb = Math.floor(d.val % 4294967295),
        c.setInt32(0, 65536),
        c.setUint32(4, Math.round(65536 * Number(a.majorVersion + "." + a.minorVersion))),
        c.setUint32(12, 1594834165),
        c.setUint8(16, 0),
        c.setUint8(17, 11),
        c.setUint16(18, a.unitsPerEm || 0),
        c.setUint32(20, d.msb),
        c.setUint32(24, d.lsb),
        c.setUint32(28, d.msb),
        c.setUint32(32, d.lsb),
        c.setInt16(36, m(a.xMin) || 0),
        c.setInt16(38, m(a.yMin) || 0),
        c.setInt16(40, m(a.xMax) || 0),
        c.setInt16(42, m(a.yMax) || 0),
        c.setUint16(44, 0),
        c.setUint16(46, a.lowestRecPPEM || 8),
        c.setInt16(48, 2),
        c.setInt16(50, a.indexToLocFormat || 0),
        b
    }, A = function(a) {
        function b(a) {
            var b = new ArrayBuffer(12)
              , c = new DataView(b);
            return c.setUint16(0, a.pid),
            c.setUint16(2, a.sid),
            c.setUint16(4, a.languageID || 0),
            c.setUint16(6, a.nameID),
            c.setUint16(8, a.byteLength),
            c.setUint16(10, a.offset),
            b
        }
        var c, d, e, f, g, h, i, j, k = [], l = [], m = [], n = 0, q = [], r = {
            copyright: 0,
            fontFamily: 1,
            subFamily: 2,
            fontId: 3,
            fullName: 4,
            version: 5,
            psName: 6,
            trademark: 7,
            manufacturer: 8,
            designer: 9,
            description: 10,
            fontURL: 11,
            designerURL: 12,
            license: 13,
            licenseURL: 14
        };
        for (g in a)
            i = a[g],
            f = r[g],
            !isNaN(f) && i && (q.push(p(i, 1)),
            h = i.length,
            l.push({
                pid: 1,
                sid: 0,
                nameID: f,
                offset: n,
                byteLength: h
            }),
            n += h,
            h *= 2,
            q.push(p(i)),
            m.push({
                pid: 3,
                sid: 1,
                languageID: 1033,
                nameID: f,
                offset: n,
                byteLength: h
            }),
            n += h);
        for (j = function(a, b) {
            return a.nameID - b.nameID
        }
        ,
        l.sort(j),
        m.sort(j),
        l = l.concat(m),
        e = 0,
        h = l.length; h > e; e += 1)
            l[e] = b(l[e]);
        return h ? (c = new ArrayBuffer(6),
        d = new DataView(c),
        d.setUint16(2, h),
        k.push(c),
        l = o(l),
        k.push(l),
        q = o(q),
        k.push(q),
        c = o(k),
        d = new DataView(c),
        d.setUint16(4, l.byteLength + 6),
        c) : void 0
    }, B = function(a) {
        var b = new ArrayBuffer(36)
          , c = new DataView(b);
        return c.setUint32(0, 65536),
        c.setInt16(4, a.ascent || 0),
        c.setInt16(6, a.descent || 0),
        c.setInt16(8, a.lineGap || 0),
        c.setUint16(10, a.advanceWidthMax || 0),
        c.setInt16(12, a.minLeftSideBearing || 0),
        c.setInt16(14, a.minRightSideBearing || 0),
        c.setInt16(16, m(a.xMaxExtent) || 0),
        c.setInt16(18, 1),
        c.setUint16(34, a.numOfLongHorMetrics),
        b
    }, C = function(a) {
        var b, c, d, e = 0, f = a.length;
        for (b = new ArrayBuffer(4 * f),
        c = new DataView(b),
        d = 0; f > d; d += 1)
            c.setUint16(e, a[d].aw),
            c.setInt16(e + 2, a[d].lsb),
            e += 4;
        return b
    }, D = function(a) {
        var b = new ArrayBuffer(16)
          , c = new DataView(b)
          , d = {
            tag: 0,
            checksum: 4,
            offset: 8,
            length: 12
        }
          , e = function(a) {
            var b, e;
            for (b in a)
                a.hasOwnProperty(b) && (e = d[b],
                isNaN(e) || c.setUint32(e, a[b]))
        };
        return e(a),
        {
            buffer: b,
            set: e
        }
    }, E = function(a, b) {
        var c, d, e, f = b ? 4 : 2, g = a.length, h = b ? "setUint32" : "setUint16";
        for (c = new ArrayBuffer(g * f),
        d = new DataView(c),
        e = 0; g > e; e += 1)
            d[h](e * f, a[e] * (b ? 2 : 1));
        return c
    }, F = function(a) {
        var b, c = new ArrayBuffer(96), d = new DataView(c), e = a.emSize, f = Math.sin(a.italicAngle * Math.PI / 180), g = .7 * e, h = .65 * e, i = .14 * e, j = .48 * e;
        for (d.setUint16(0, 3),
        d.setInt16(2, a.xAvgCharWidth || e || 0),
        a.usWeightClass = a.usWeightClass || 400,
        d.setUint16(4, a.usWeightClass),
        d.setUint16(6, a.usWidthClass || 5),
        a.fsType = a.fsType || 0,
        d.setUint16(8, a.fsType),
        d.setInt16(10, h || 0),
        d.setInt16(12, g || 0),
        d.setInt16(14, -f * i),
        d.setInt16(16, i),
        d.setInt16(18, h),
        d.setInt16(20, g),
        d.setInt16(22, f * j),
        d.setInt16(24, j),
        d.setInt16(26, 102 * e / 2048),
        d.setInt16(28, 530 * e / 2048),
        d.setInt16(30, 0),
        a.panose = [],
        a.unicodeRanges = [],
        b = 0; 128 > b; b += 1)
            a.unicodeRanges[b] = 0;
        return a.codes && a.codes.forEach(function(b) {
            a.unicodeRanges[t(b)] = 1
        }),
        d.setUint32(42, parseInt(a.unicodeRanges.slice(0, 32).reverse().join(""), 2)),
        d.setUint32(46, parseInt(a.unicodeRanges.slice(32, 64).reverse().join(""), 2)),
        d.setUint32(50, parseInt(a.unicodeRanges.slice(64, 96).reverse().join(""), 2)),
        d.setUint32(54, parseInt(a.unicodeRanges.slice(96, 128).reverse().join(""), 2)),
        d.setUint16(62, 64),
        a.italic = 0,
        d.setUint16(64, a.usFirstCharIndex || 0),
        d.setUint16(66, a.usLastCharIndex || 0),
        d.setInt16(68, a.sTypoAscender || a.ascent || 0),
        d.setInt16(70, a.sTypoDescender || a.descent || 0),
        d.setInt16(72, a.sTypoLineGap || Math.abs(a.descent) || 0),
        d.setUint16(74, a.usWinAscent || a.ascent || 0),
        d.setUint16(76, a.usWinDescent || -a.descent || 0),
        d.setUint32(78, 1),
        a.codePageRange1 = 1,
        a.codePageRange2 = 0,
        d.setInt16(86, a.sxHeight || 0),
        d.setInt16(88, a.sCapHeight || 0),
        d.setUint16(92, 32),
        d.setUint16(94, a.usMaxContext || 0),
        a.panose = 0,
        c
    }, G = function(a) {
        var b, c, d = new ArrayBuffer(4 + 2 * a.length), e = new DataView(d), f = a.length;
        for (e.setUint16(0, 1),
        e.setUint16(2, f / 2),
        c = 4,
        b = 0; f > b; b += 2)
            e.setUint16(c, a[b]),
            e.setUint16(c + 2, a[b + 1]),
            c += 2;
        return d
    }, H = function(a, b) {
        function c(a) {
            var c, d, e = a.str.length, f = new ArrayBuffer(2 * (e - 1) + 4), g = new DataView(f);
            for (g.setUint16(0, a.id),
            g.setUint16(2, e),
            d = 4,
            c = 1; e > c; c += 1)
                g.setUint16(d, b[a.str.charAt(c)]),
                d += 2;
            return f
        }
        function d(a) {
            var b, d, e, f = [], g = a.length, h = 2 + 2 * g, i = new ArrayBuffer(h), j = new DataView(i);
            for (a.sort(function(a, b) {
                return n(b.str, a.str)
            }),
            j.setUint16(0, g),
            e = 2,
            b = 0; g > b; b += 1)
                j.setUint16(e, h),
                e += 2,
                d = c(a[b]),
                f[b + 1] = d,
                h += d.byteLength;
            return f[0] = i,
            o(f)
        }
        var e, f, g, h, i, j, k, l, m, p = new ArrayBuffer(20), r = new ArrayBuffer(14), s = new ArrayBuffer(14), t = {}, u = [], v = [], w = 0;
        for (k in a)
            a.hasOwnProperty(k) && !isNaN(a[k]) && (m = k.charAt(0),
            t[m] || (t[m] = [],
            w += 1),
            t[m].push({
                id: a[k],
                str: k
            }));
        for (k in t)
            t.hasOwnProperty(k) && u.push({
                key: k,
                set: t[k]
            });
        for (u.sort(function(a, b) {
            return n(a.key, b.key)
        }),
        g = new DataView(p),
        g.setUint16(0, 1),
        g.setUint32(2, q("latn")),
        g.setUint16(6, 8),
        g.setUint16(8, 4),
        g.setUint16(10, 0),
        g.setUint16(12, 0),
        g.setUint16(14, 0),
        g.setUint16(16, 1),
        g.setUint16(18, 0),
        g = new DataView(r),
        g.setUint16(0, 1),
        g.setUint32(2, q("liga")),
        g.setUint16(6, 8),
        g.setUint16(8, 0),
        g.setUint16(10, 1),
        g.setUint16(12, 0),
        g = new DataView(s),
        g.setUint16(0, 1),
        g.setUint16(2, 4),
        g.setUint16(4, 4),
        g.setUint16(8, 1),
        g.setUint16(10, 10),
        g.setUint16(12, 0),
        m = 6 + 2 * w,
        e = new ArrayBuffer(m),
        g = new DataView(e),
        g.setUint16(0, 1),
        g.setUint16(2, m),
        g.setUint16(4, w),
        f = new ArrayBuffer(4 + 2 * w),
        g = new DataView(f),
        g.setUint16(0, 1),
        g.setUint16(2, w),
        m = 4,
        i = 0; w > i; i += 1)
            g.setUint16(m, b[u[i].key] || 0),
            m += 2;
        for (j = f.byteLength + e.byteLength,
        l = 6,
        g = new DataView(e),
        i = 0; w > i; i += 1)
            m = d(t[u[i].key]),
            v.push(m),
            g.setUint16(l, j),
            l += 2,
            j += m.byteLength;
        return h = new ArrayBuffer(10),
        l = 10,
        g = new DataView(h),
        g.setUint32(0, 65536),
        g.setUint16(4, l),
        l += p.byteLength,
        g.setUint16(6, l),
        l += r.byteLength,
        g.setUint16(8, l),
        o([h, p, r, s, e, f].concat(v))
    }, I = function(a) {
        function b(a) {
            var b, c, d = a.rights, e = new ArrayBuffer(2 + 4 * d.length), f = new DataView(e);
            for (d.sort(function(a, b) {
                return a.id - b.id
            }),
            f.setUint16(0, d.length),
            c = 2,
            b = 0; b < d.length; b += 1)
                f.setUint16(c, d[b].id),
                c += 2,
                f.setInt16(c, d[b].value),
                c += 2;
            return e
        }
        var c, d, e, f, g, h, i, j = new ArrayBuffer(20), k = new ArrayBuffer(14), l = new ArrayBuffer(12), m = [], n = [];
        for (i = {},
        f = 0,
        a.forEach(function(a) {
            isNaN(i[a.left]) && (i[a.left] = f,
            f += 1,
            m.push({
                left: a.left,
                rights: []
            })),
            m[i[a.left]].rights.push({
                id: a.right,
                value: a.value
            })
        }),
        m.sort(function(a, b) {
            return a.left - b.left
        }),
        d = new DataView(j),
        d.setUint16(0, 1),
        d.setUint32(2, q("latn")),
        d.setUint16(6, 8),
        d.setUint16(8, 4),
        d.setUint16(10, 0),
        d.setUint16(12, 0),
        d.setUint16(14, 65535),
        d.setUint16(16, 1),
        d.setUint16(18, 0),
        d = new DataView(k),
        d.setUint16(0, 1),
        d.setUint32(2, q("kern")),
        d.setUint16(6, 8),
        d.setUint16(8, 0),
        d.setUint16(10, 1),
        d.setUint16(12, 0),
        d = new DataView(l),
        d.setUint16(0, 1),
        d.setUint16(2, 4),
        d.setUint16(4, 2),
        d.setUint16(8, 1),
        d.setUint16(10, 8),
        i = 10 + 2 * m.length,
        h = new ArrayBuffer(i),
        d = new DataView(h),
        d.setUint16(0, 1),
        d.setUint16(2, i),
        d.setUint16(4, 4),
        d.setUint16(6, 0),
        d.setUint16(8, m.length),
        c = new ArrayBuffer(4 + 2 * m.length),
        d = new DataView(c),
        d.setUint16(0, 1),
        d.setUint16(2, m.length),
        i = 4,
        f = 0; f < m.length; f += 1)
            d.setUint16(i, m[f].left || 0),
            i += 2;
        for (length = c.byteLength + h.byteLength,
        g = 10,
        d = new DataView(h),
        f = 0; f < m.length; f += 1)
            i = b(m[f]),
            n.push(i),
            d.setUint16(g, length),
            g += 2,
            length += i.byteLength;
        return e = new ArrayBuffer(10),
        g = 10,
        d = new DataView(e),
        d.setUint32(0, 65536),
        d.setUint16(4, g),
        g += j.byteLength,
        d.setUint16(6, g),
        g += k.byteLength,
        d.setUint16(8, g),
        o([e, j, k, l, h, c].concat(n))
    }, J = function(a) {
        var b, c, d, e, f, g, h, i, j = a.tableDirectory.length, k = [];
        for (f = new ArrayBuffer(44),
        d = new DataView(f),
        d.setUint32(0, 2001684038),
        a.truetype ? d.setUint32(4, 65536) : d.setUint32(4, q("OTTO")),
        d.setUint16(12, j),
        d.setUint32(16, a.sfntSize),
        d.setUint16(20, a.majorVersion || 0),
        d.setUint16(22, a.minorVersion || 0),
        g = 44 + 20 * j,
        e = 0; j > e; e += 1)
            b = new ArrayBuffer(20),
            c = new DataView(b),
            h = new DataView(a.tableDirectory[e]),
            c.setUint32(0, h.getUint32(0)),
            c.setUint32(4, g),
            g += a.subTables[e].byteLength,
            i = h.getUint32(12),
            c.setUint32(8, i),
            c.setUint32(12, i),
            c.setUint32(16, h.getUint32(4)),
            k.push(b);
        return k = o(k),
        i = o(a.subTables),
        d.setUint32(8, f.byteLength + k.byteLength + i.byteLength),
        o([f, k, i])
    }, K = function(a) {
        function b(a) {
            var b = new ArrayBuffer(4)
              , c = []
              , d = new DataView(b);
            return d.setUint16(2, 2 * a.length, !0),
            c.push(b),
            c.push(p(a, 2, !0)),
            o(c)
        }
        var c, d, e, f, g, h = !0;
        for (c = new ArrayBuffer(80),
        d = new DataView(c),
        d.setUint32(4, a.ttf.byteLength, h),
        d.setUint32(8, 131073, h),
        f = 16,
        g = a.os2.panose,
        e = 0; e < g.length; e += 1)
            d.setUint8(f, g[e], h),
            f += 4;
        return d.setUint8(26, 1, h),
        d.setUint8(27, a.os2.italic, h),
        d.setUint32(28, a.os2.usWeightClass, h),
        d.setUint16(32, a.os2.fsType, h),
        d.setUint16(34, 20556, h),
        d.setUint32(36, a.os2.unicodeRange1, h),
        d.setUint32(40, a.os2.unicodeRange2, h),
        d.setUint32(44, a.os2.unicodeRange3, h),
        d.setUint32(48, a.os2.unicodeRange4, h),
        d.setUint32(52, a.os2.codePageRange1, h),
        d.setUint32(56, a.os2.codePageRange2, h),
        d.setUint32(60, a.checkSumAdjustment, h),
        c = o([c, b(a.name.fontFamily), b(a.name.subFamily), b(a.name.version), b(a.name.fullName), new ArrayBuffer(4), a.ttf]),
        d = new DataView(c),
        d.setUint32(0, c.byteLength, h),
        c
    }, L = function() {
        var a, c, e, k, l, m, o, p, q, r, s, t, u = [], v = [];
        for (c = b(' horiz-adv-x="{{advX}}"'),
        t = b(' data-tags="{{tags}}"'),
        q = b(' glyph-name="{{name}}"'),
        e = b('<glyph unicode="{{code}}"{{tags}}{{advX}} d="{{d}}" />'),
        r = b(['<?xml version="1.0" standalone="no"?>', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >', '<svg xmlns="http://www.w3.org/2000/svg">', "<metadata>", "<json>", "<![CDATA[", "{{metadata}}", "]]>", "</json>", "</metadata>", "<defs>", '<font id="{{fontId}}" horiz-adv-x="{{defaultAdvX}}">', '<font-face units-per-em="{{unitsPerEm}}" ascent="{{ascent}}" descent="{{descent}}" />', '<missing-glyph horiz-adv-x="{{defaultAdvX}}" />', "{{glyphs}}", "</font></defs></svg>"].join("\n")),
        m = d.length,
        k = 0; m > k; k += 1)
            if (a = d[k].advX,
            a = isNaN(a) || a === i ? "" : c.fillup({
                advX: a
            }),
            s = d[k].tags,
            s = s && s.join && s.join("") ? t.fillup({
                tags: s.join(", ")
            }) : "",
            p = d[k].name,
            p && (p = q.fillup({
                name: p
            }),
            s = s ? p + s : p),
            (d[k].d || 32 === d[k].code) && (v.push(e.fillup({
                code: "&#x" + d[k].code.toString(16) + ";",
                d: d[k].d,
                advX: a,
                tags: s
            })),
            d[k].ligatures))
                for (l = 0,
                o = d[k].ligatures.length; o > l; l += 1)
                    u.push({
                        d: d[k].d,
                        liga: d[k].ligatures[l],
                        advX: a,
                        tags: s
                    });
        for (u.sort(function(a, b) {
            return n(b.liga, a.liga)
        }),
        l = 0,
        o = u.length; o > l; l += 1)
            u[l] = e.fillup({
                code: u[l].liga,
                d: u[l].d,
                advX: u[l].advX,
                tags: u[l].tags
            });
        return v = v.concat(u),
        v = v.join("\n"),
        r.fillup({
            metadata: JSON.stringify(j, null , "	"),
            fontId: j.fontId,
            defaultAdvX: i,
            unitsPerEm: h,
            ascent: f,
            descent: g,
            glyphs: v
        })
    }, M = function(a) {
        function b(a, b) {
            var c, d;
            return a = Math.round(a),
            a >= -107 && 107 >= a && (!b || 1 === b) ? (c = new Uint8Array(1),
            a += 139,
            c[0] = a,
            c.buffer) : a >= 108 && 1131 >= a && (!b || 2 === b) ? (c = new Uint8Array(2),
            a -= 108,
            c[0] = Math.floor(a / 256) + 247,
            c[1] = Math.floor(a % 256),
            c.buffer) : a >= -1131 && -108 >= a && (!b || 2 === b) ? (c = new Uint8Array(2),
            a += 108,
            c[0] = Math.floor(-a / 256) + 251,
            c[1] = Math.floor(-a % 256),
            c.buffer) : a >= -32768 && 32767 >= a && (!b || 3 === b) ? (c = new ArrayBuffer(3),
            d = new DataView(c),
            d.setUint8(0, 28),
            d.setInt16(1, a),
            c) : (c = new ArrayBuffer(5),
            d = new DataView(c),
            d.setUint8(0, 29),
            d.setInt32(1, a),
            c)
        }
        function c(a) {
            var b, c, d, e, f = [1, 14];
            for (a = a.toFixed(6).replace(/\.0+$/, "").replace(/(\.[^0]+)0+$/, "$1").toUpperCase(),
            d = 0; d < a.length; d += 1)
                e = a[d],
                "." === e ? f.push(10) : "E" === e ? "-" === a[d + 1] ? (f.push(12),
                d += 1) : (f.push(11),
                "+" === a[d + 1] && (d += 1)) : "-" === e ? f.push(14) : f.push(parseInt(e, 10));
            for (f.push(15),
            f.length % 2 && f.push(15),
            b = new ArrayBuffer(f.length / 2),
            c = new DataView(b),
            d = 0; d < f.length; d += 2)
                c.setUint8(d / 2, 16 * f[d] + f[d + 1]);
            return b
        }
        function e(a) {
            return a % 1 ? c(a) : b(a)
        }
        function f(a) {
            var b, c, d, e, f, g, h = a.length, i = [1];
            for (d = new ArrayBuffer(2),
            b = new DataView(d),
            b.setUint16(0, h),
            c = 0; h > c; c += 1)
                i.push(i[c] + a[c].byteLength);
            for (h = i.length,
            f = i[h - 1],
            256 > f ? (e = "setUint8",
            f = 1) : 65536 > f ? (e = "setUint16",
            f = 2) : (e = "setUint32",
            f = 4),
            g = new ArrayBuffer(h * f),
            b = new DataView(g),
            c = 0; h > c; c += 1)
                b[e](c * f, i[c]);
            return d = o([d, new Uint8Array([f]).buffer, g, o(a)])
        }
        var g, h, i, j, k, l, m, n = new ArrayBuffer(2), q = new ArrayBuffer(4), r = new ArrayBuffer(5), s = 391, t = new ArrayBuffer(7);
        for (i = new DataView(q),
        i.setUint8(0, 1),
        i.setUint8(2, 4),
        i.setUint8(3, 4),
        i = new DataView(r),
        i.setUint16(0, 1),
        i.setUint8(2, 1),
        i.setUint8(3, 1),
        i.setUint8(4, a.psName.length + 1),
        r = o([r, p(a.psName, 1)]),
        i = new DataView(t),
        i.setUint16(0, 1),
        i.setUint8(2, 2),
        i.setUint16(3, 1),
        m = 1 / a.emSize,
        t = o([t, b(s + 1), new Uint8Array([2]).buffer, b(s), new Uint8Array([3]).buffer, b(388), new Uint8Array([4]).buffer, e(m), new Uint8Array([139, 139]).buffer, e(m), new Uint8Array([139, 139]).buffer, new Uint8Array([12, 7]).buffer, e(a.bbox.xMin), e(a.bbox.yMin), e(a.bbox.xMax), e(a.bbox.yMax), new Uint8Array([5]).buffer]),
        l = [p(a.fontFamily, 1), p(a.fullName, 1)],
        j = 0; j < d.length; j += 1)
            l.push(p("u" + d[j].code.toString(16).toUpperCase(), 1));
        return l = f(l),
        h = new ArrayBuffer(5),
        i = new DataView(h),
        i.setUint8(0, 2),
        i.setUint16(1, s + 2),
        i.setUint16(3, a.glyphs.length - 1),
        function() {
            var c, d, e, h, i, j, k, l = 0, m = [o([b(-a.defaultAdvX), new Uint8Array([14]).buffer])];
            for (h = a.glyphs,
            i = 0; i < h.length; i += 1) {
                for (d = [],
                j = h[i].svgPath.getCFFPath(),
                h[i].advX !== a.defaultAdvX && d.push(b(h[i].advX - a.defaultAdvX)),
                k = 0; k < j.length; k += 1)
                    e = j[k].cmd,
                    c = j[k].args,
                    "M" === e ? (d.push(b(c[0])),
                    d.push(b(c[1])),
                    d.push(new Uint8Array([21]))) : "L" === e ? (d.push(b(c[0])),
                    d.push(b(c[1])),
                    l += 2,
                    (l > 47 || k + 1 < j.length && "L" !== j[k + 1].cmd) && (d.push(new Uint8Array([5])),
                    l = 0)) : "C" === e && (d = d.concat([b(c[0]), b(c[1]), b(c[2]), b(c[3]), b(c[4]), b(c[5])]),
                    l += 6,
                    (l > 47 || k + 1 < j.length && "C" !== j[k + 1].cmd) && (d.push(new Uint8Array([8])),
                    l = 0));
                d.push(new Uint8Array([14])),
                m.push(o(d))
            }
            g = f(m)
        }(),
        k = o([b(a.defaultAdvX), new Uint8Array([20]).buffer, b(a.defaultAdvX), new Uint8Array([21]).buffer, b(0), new Uint8Array([12, 10]).buffer]),
        function() {
            var a, c, d = o([q, r, t, l, n, h]);
            a = d.byteLength + 20 + 3,
            c = d.byteLength + g.byteLength + 20 + 3,
            t = o([t, b(d.byteLength - h.byteLength + 23, 5), new Uint8Array([15]).buffer, b(a, 5), new Uint8Array([17]).buffer, b(k.byteLength, 5), b(c, 5), new Uint8Array([18]).buffer])
        }(),
        i = new DataView(t),
        i.setUint16(5, t.byteLength - 6),
        o([q, r, t, l, n, h, g, k])
    }, N = function() {
        var a = "Font generated by IcoMoon.";
        j || (j = {}),
        isNaN(j.majorVersion) || isNaN(j.minorVersion) || (j.version = j.majorVersion + "." + j.minorVersion),
        j.version = j.version ? j.version.match(/\d{1,5}\.\d{1,5}/) || "1.0" : "1.0",
        isNaN(j.majorVersion) && (j.majorVersion = Number(j.version.match(/(\d+)\./)[1])),
        isNaN(j.minorVersion) && (j.majorVersion = Number(j.version.match(/\.(\d+)/)[1])),
        j.version = "Version " + j.version,
        j.fontFamily = j.fontFamily || "krDataFont",
        j.fontId = j.fontId || j.fontFamily,
        j.psName = j.psName || j.fontFamily,
        j.subFamily = j.subFamily || "Regular",
        j.fullName = j.fontFamily,
        /regular/i.test(j.subFamily) || (j.fullName += " " + j.subFamily),
        j.description ? -1 === j.description.indexOf(a) && (j.description = j.description + "\n" + a) : j.description = a
    };
    return function(a) {
        var b = {};
        return b.set = function(a) {
            return d = a.glyphs,
            f = a.ascent,
            g = a.descent,
            h = a.unitsPerEm,
            i = a.defaultAdvX,
            j = a.metadata ? JSON.parse(JSON.stringify(a.metadata)) : {},
            e = a.kerningPairs,
            N(),
            this
        }
        ,
        b.generate = function(a) {
            return a || (a = {
                woff: !0,
                ttf: !0,
                eot: !0,
                svg: !0
            }),
            c(a)
        }
        ,
        a && b.set(a),
        b
    }
}
]),
angular.module("file", ["scriptLoader"]).factory("fileSaver", ["scriptLoader", "$q", "$http", function(a, b, c) {
    function d(a, d) {
        var e = b.defer();
        return g ? i.then(function() {
            var b = new Blob([d]);
            b.encoding = "base64",
            navigator.msSaveBlob ? (navigator.msSaveBlob(b, a),
            e.resolve()) : (saveAs(b, a),
            e.resolve())
        }) : c.post("https://icomoon.io/fileMirror/mirror2.php", {
            file: "string" == typeof d ? d : d.toString(!0),
            ext: a.match(/\.(\w+)$/)[1]
        }, {
            transformResponse: !1
        }).then(function(a) {
            location.href = a.data,
            e.resolve()
        }),
        e.promise
    }
    var e = function(a, b) {
        this.files = {},
        this.root = "",
        a && this.load(a, b)
    };
    e.signature = {
        LOCAL_FILE_HEADER: "PK",
        CENTRAL_FILE_HEADER: "PK",
        CENTRAL_DIRECTORY_END: "PK",
        ZIP64_CENTRAL_DIRECTORY_LOCATOR: "PK",
        ZIP64_CENTRAL_DIRECTORY_END: "PK",
        DATA_DESCRIPTOR: "PK\b"
    },
    e.defaults = {
        base64: !1,
        binary: !1,
        dir: !1,
        date: null ,
        compression: null
    },
    e.prototype = function() {
        var a = function(a, b, c) {
            this.name = a,
            this.data = b,
            this.options = c
        };
        a.prototype = {
            asText: function() {
                var a = this.data;
                return null === a || "undefined" == typeof a ? "" : (this.options.base64 && (a = f.decode(a)),
                this.options.binary && (a = e.prototype.utf8decode(a)),
                a)
            },
            asBinary: function() {
                var a = this.data;
                return null === a || "undefined" == typeof a ? "" : (this.options.base64 && (a = f.decode(a)),
                this.options.binary || (a = e.prototype.utf8encode(a)),
                a)
            },
            asUint8Array: function() {
                return e.utils.string2Uint8Array(this.asBinary())
            },
            asArrayBuffer: function() {
                return e.utils.string2Uint8Array(this.asBinary()).buffer
            }
        };
        var b = function(a, b) {
            var c, d = "";
            for (c = 0; b > c; c++)
                d += String.fromCharCode(255 & a),
                a >>>= 8;
            return d
        }
          , c = function() {
            var a, b, c = {};
            for (a = 0; a < arguments.length; a++)
                for (b in arguments[a])
                    arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]);
            return c
        }
          , d = function(a) {
            return a = a || {},
            a.base64 === !0 && null == a.binary && (a.binary = !0),
            a = c(a, e.defaults),
            a.date = a.date || new Date,
            null !== a.compression && (a.compression = a.compression.toUpperCase()),
            a
        }
          , g = function(b, c, f) {
            var g = h(b);
            if (g && i.call(this, g),
            f = d(f),
            f.dir || null === c || "undefined" == typeof c)
                f.base64 = !1,
                f.binary = !1,
                c = null ;
            else if (e.support.uint8array && c instanceof Uint8Array)
                f.base64 = !1,
                f.binary = !0,
                c = e.utils.uint8Array2String(c);
            else if (e.support.arraybuffer && c instanceof ArrayBuffer) {
                f.base64 = !1,
                f.binary = !0;
                var j = new Uint8Array(c);
                c = e.utils.uint8Array2String(j)
            } else
                f.binary && !f.base64 && (f.optimizedBinaryString !== !0 && (c = e.utils.string2binary(c)),
                delete f.optimizedBinaryString);
            return this.files[b] = new a(b,c,f)
        }
          , h = function(a) {
            "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
            var b = a.lastIndexOf("/");
            return b > 0 ? a.substring(0, b) : ""
        }
          , i = function(a) {
            if ("/" != a.slice(-1) && (a += "/"),
            !this.files[a]) {
                var b = h(a);
                b && i.call(this, b),
                g.call(this, a, null , {
                    dir: !0
                })
            }
            return this.files[a]
        }
          , j = function(a, c, d) {
            var f, g, h = c !== a.name, i = a.asBinary(), j = a.options;
            f = j.date.getHours(),
            f <<= 6,
            f |= j.date.getMinutes(),
            f <<= 5,
            f |= j.date.getSeconds() / 2,
            g = j.date.getFullYear() - 1980,
            g <<= 4,
            g |= j.date.getMonth() + 1,
            g <<= 5,
            g |= j.date.getDate();
            var k = null !== i && 0 !== i.length;
            if (d = j.compression || d,
            !e.compressions[d])
                throw d + " is not a valid compression method !";
            var l = e.compressions[d]
              , m = k ? l.compress(i) : ""
              , n = "";
            return n += "\n\x00",
            n += h ? "\x00\b" : "\x00\x00",
            n += k ? l.magic : e.compressions.STORE.magic,
            n += b(f, 2),
            n += b(g, 2),
            n += k ? b(this.crc32(i), 4) : "\x00\x00\x00\x00",
            n += k ? b(m.length, 4) : "\x00\x00\x00\x00",
            n += k ? b(i.length, 4) : "\x00\x00\x00\x00",
            n += b(c.length, 2),
            n += "\x00\x00",
            {
                header: n,
                compressedData: m
            }
        };
        return {
            filter: function(b) {
                var d, e, f, g, h = [];
                for (d in this.files)
                    this.files.hasOwnProperty(d) && (f = this.files[d],
                    g = new a(f.name,f.data,c(f.options)),
                    e = d.slice(this.root.length, d.length),
                    d.slice(0, this.root.length) === this.root && b(e, g) && h.push(g));
                return h
            },
            file: function(a, b, c) {
                if (1 === arguments.length) {
                    if (a instanceof RegExp) {
                        var d = a;
                        return this.filter(function(a, b) {
                            return !b.options.dir && d.test(a)
                        })
                    }
                    return this.filter(function(b, c) {
                        return !c.options.dir && b === a
                    })[0] || null
                }
                return a = this.root + a,
                g.call(this, a, b, c),
                this
            },
            folder: function(a) {
                if (!a)
                    return this;
                if (a instanceof RegExp)
                    return this.filter(function(b, c) {
                        return c.options.dir && a.test(b)
                    });
                var b = this.root + a
                  , c = i.call(this, b)
                  , d = this.clone();
                return d.root = c.name,
                d
            },
            remove: function(a) {
                a = this.root + a;
                var b = this.files[a];
                if (b || ("/" != a.slice(-1) && (a += "/"),
                b = this.files[a]),
                b)
                    if (b.options.dir)
                        for (var c = this.filter(function(b, c) {
                            return c.name.slice(0, a.length) === a
                        }), d = 0; d < c.length; d++)
                            delete this.files[c[d].name];
                    else
                        delete this.files[a];
                return this
            },
            generate: function(a) {
                a = c(a || {}, {
                    base64: !0,
                    compression: "STORE",
                    type: "base64"
                });
                var d = a.compression.toUpperCase();
                if (!e.compressions[d])
                    throw d + " is not a valid compression method !";
                var g = []
                  , h = []
                  , i = 0;
                for (var k in this.files)
                    if (this.files.hasOwnProperty(k)) {
                        var l = this.files[k]
                          , m = this.utf8encode(l.name)
                          , n = ""
                          , o = ""
                          , p = j.call(this, l, m, d);
                        n = e.signature.LOCAL_FILE_HEADER + p.header + m + p.compressedData,
                        o = e.signature.CENTRAL_FILE_HEADER + "\x00" + p.header + "\x00\x00" + "\x00\x00" + "\x00\x00" + (this.files[k].options.dir === !0 ? "\x00\x00\x00" : "\x00\x00\x00\x00") + b(i, 4) + m,
                        i += n.length,
                        h.push(n),
                        g.push(o)
                    }
                var q = h.join("")
                  , r = g.join("")
                  , s = "";
                s = e.signature.CENTRAL_DIRECTORY_END + "\x00\x00" + "\x00\x00" + b(h.length, 2) + b(h.length, 2) + b(r.length, 4) + b(q.length, 4) + "\x00\x00";
                var t = q + r + s;
                switch (a.type.toLowerCase()) {
                case "uint8array":
                    return e.utils.string2Uint8Array(t);
                case "arraybuffer":
                    return e.utils.string2Uint8Array(t).buffer;
                case "blob":
                    return e.utils.string2Blob(t);
                case "base64":
                    return a.base64 ? f.encode(t) : t;
                default:
                    return t
                }
            },
            crc32: function(a, b) {
                if ("" === a || "undefined" == typeof a)
                    return 0;
                var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
                "undefined" == typeof b && (b = 0);
                var d = 0
                  , e = 0;
                b = -1 ^ b;
                for (var f = 0, g = a.length; g > f; f++)
                    e = 255 & (b ^ a.charCodeAt(f)),
                    d = c[e],
                    b = b >>> 8 ^ d;
                return -1 ^ b
            },
            clone: function() {
                var a = new e;
                for (var b in this)
                    "function" != typeof this[b] && (a[b] = this[b]);
                return a
            },
            utf8encode: function(a) {
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6),
                    b += String.fromCharCode(128 | 63 & d)) : (b += String.fromCharCode(224 | d >> 12),
                    b += String.fromCharCode(128 | 63 & d >> 6),
                    b += String.fromCharCode(128 | 63 & d))
                }
                return b
            },
            utf8decode: function(a) {
                for (var b = "", c = 0, d = 0, e = 0, f = 0; c < a.length; )
                    d = a.charCodeAt(c),
                    128 > d ? (b += String.fromCharCode(d),
                    c++) : d > 191 && 224 > d ? (e = a.charCodeAt(c + 1),
                    b += String.fromCharCode((31 & d) << 6 | 63 & e),
                    c += 2) : (e = a.charCodeAt(c + 1),
                    f = a.charCodeAt(c + 2),
                    b += String.fromCharCode((15 & d) << 12 | (63 & e) << 6 | 63 & f),
                    c += 3);
                return b
            }
        }
    }(),
    e.compressions = {
        STORE: {
            magic: "\x00\x00",
            compress: function(a) {
                return a
            },
            uncompress: function(a) {
                return a
            }
        }
    },
    e.support = {
        arraybuffer: function() {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
        }(),
        uint8array: function() {
            return "undefined" != typeof Uint8Array
        }(),
        blob: function() {
            if ("undefined" == typeof ArrayBuffer)
                return !1;
            var a = new ArrayBuffer(0);
            try {
                return 0 === new Blob([a],{
                    type: "application/zip"
                }).size
            } catch (b) {}
            try {
                var c = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
                return c.append(a),
                0 === c.getBlob("application/zip").size
            } catch (b) {}
            return !1
        }()
    },
    e.utils = {
        string2binary: function(a) {
            for (var b = "", c = 0; c < a.length; c++)
                b += String.fromCharCode(255 & a.charCodeAt(c));
            return b
        },
        string2Uint8Array: function(a) {
            if (!e.support.uint8array)
                throw new Error("Uint8Array is not supported by this browser");
            for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; d++)
                c[d] = a.charCodeAt(d);
            return c
        },
        uint8Array2String: function(a) {
            if (!e.support.uint8array)
                throw new Error("Uint8Array is not supported by this browser");
            for (var b = "", c = 0; c < a.length; c++)
                b += String.fromCharCode(a[c]);
            return b
        },
        string2Blob: function(a) {
            if (!e.support.blob)
                throw new Error("Blob is not supported by this browser");
            var b = e.utils.string2Uint8Array(a).buffer;
            try {
                return new Blob([b],{
                    type: "application/zip"
                })
            } catch (c) {}
            try {
                var d = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder);
                return d.append(b),
                d.getBlob("application/zip")
            } catch (c) {}
            throw new Error("Bug : can't construct the Blob.")
        }
    };
    var f = function() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return {
            encode: function(b) {
                for (var c, d, e, f, g, h, i, j = "", k = 0; k < b.length; )
                    c = b.charCodeAt(k++),
                    d = b.charCodeAt(k++),
                    e = b.charCodeAt(k++),
                    f = c >> 2,
                    g = (3 & c) << 4 | d >> 4,
                    h = (15 & d) << 2 | e >> 6,
                    i = 63 & e,
                    isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64),
                    j = j + a.charAt(f) + a.charAt(g) + a.charAt(h) + a.charAt(i);
                return j
            },
            decode: function(b) {
                var c, d, e, f, g, h, i, j = "", k = 0;
                for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < b.length; )
                    f = a.indexOf(b.charAt(k++)),
                    g = a.indexOf(b.charAt(k++)),
                    h = a.indexOf(b.charAt(k++)),
                    i = a.indexOf(b.charAt(k++)),
                    c = f << 2 | g >> 4,
                    d = (15 & g) << 4 | h >> 2,
                    e = (3 & h) << 6 | i,
                    j += String.fromCharCode(c),
                    64 != h && (j += String.fromCharCode(d)),
                    64 != i && (j += String.fromCharCode(e));
                return j
            }
        }
    }()
      , g = Blob && Blob.constructor && "download"in document.createElement("a") || navigator.msSaveBlob
      , h = b.defer()
      , i = h.promise;
    return g && (window.saveAs || navigator.msSaveBlob ? h.resolve() : i = a.load("bower_components/FileSaver/FileSaver.min.js")),
    function() {
        var a = new e;
        return {
            add: function(b, c, d) {
                return a.file(b, c, d),
                this
            },
            get: function(b) {
                return a.file(b).data
            },
            save: function(a, b) {
                return b ? d(a, b) : d(a, this.getArrayBuffer())
            },
            getArrayBuffer: function() {
                window.callPhantom && window.callPhantom(a);
                return a.generate({
                    type: "arraybuffer"
                })
            }
        }
    }
}
]),
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(a) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = a() : "undefined" != typeof Package ? Sortable = a() : window.Sortable = a()
}(function() {
    "use strict";
    function a(a, b) {
        this.el = a,
        this.options = b = b || {};
        var d = {
            group: Math.random(),
            sort: !0,
            disabled: !1,
            store: null ,
            handle: null ,
            scroll: !0,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            draggable: /[uo]l/i.test(a.nodeName) ? "li" : ">*",
            ghostClass: "sortable-ghost",
            ignore: "a, img",
            filter: null ,
            animation: 0,
            setData: function(a, b) {
                a.setData("Text", b.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1
        };
        for (var e in d)
            !(e in b) && (b[e] = d[e]);
        var g = b.group;
        g && "object" == typeof g || (g = b.group = {
            name: g
        }),
        ["pull", "put"].forEach(function(a) {
            a in g || (g[a] = !0)
        }),
        M.forEach(function(d) {
            b[d] = c(this, b[d] || N),
            f(a, d.substr(2).toLowerCase(), b[d])
        }, this),
        b.groups = " " + g.name + (g.put.join ? " " + g.put.join(" ") : "") + " ",
        a[F] = b;
        for (var h in this)
            "_" === h.charAt(0) && (this[h] = c(this, this[h]));
        f(a, "mousedown", this._onTapStart),
        f(a, "touchstart", this._onTapStart),
        f(a, "dragover", this),
        f(a, "dragenter", this),
        Q.push(this._onDragOver),
        b.store && this.sort(b.store.get(this))
    }
    function b(a) {
        s && s.state !== a && (i(s, "display", a ? "none" : ""),
        !a && s.state && t.insertBefore(s, q),
        s.state = a)
    }
    function c(a, b) {
        var c = P.call(arguments, 2);
        return b.bind ? b.bind.apply(b, [a].concat(c)) : function() {
            return b.apply(a, c.concat(P.call(arguments)))
        }
    }
    function d(a, b, c) {
        if (a) {
            c = c || H,
            b = b.split(".");
            var d = b.shift().toUpperCase()
              , e = new RegExp("\\s(" + b.join("|") + ")\\s","g");
            do
                if (">*" === d && a.parentNode === c || ("" === d || a.nodeName.toUpperCase() == d) && (!b.length || ((" " + a.className + " ").match(e) || []).length == b.length))
                    return a;
            while (a !== c && (a = a.parentNode))
        }
        return null
    }
    function e(a) {
        a.dataTransfer.dropEffect = "move",
        a.preventDefault()
    }
    function f(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    function g(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    function h(a, b, c) {
        if (a)
            if (a.classList)
                a.classList[c ? "add" : "remove"](b);
            else {
                var d = (" " + a.className + " ").replace(/\s+/g, " ").replace(" " + b + " ", "");
                a.className = d + (c ? " " + b : "")
            }
    }
    function i(a, b, c) {
        var d = a && a.style;
        if (d) {
            if (void 0 === c)
                return H.defaultView && H.defaultView.getComputedStyle ? c = H.defaultView.getComputedStyle(a, "") : a.currentStyle && (c = a.currentStyle),
                void 0 === b ? c : c[b];
            b in d || (b = "-webkit-" + b),
            d[b] = c + ("string" == typeof c ? "" : "px")
        }
    }
    function j(a, b, c) {
        if (a) {
            var d = a.getElementsByTagName(b)
              , e = 0
              , f = d.length;
            if (c)
                for (; f > e; e++)
                    c(d[e], e);
            return d
        }
        return []
    }
    function k(a) {
        a.draggable = !1
    }
    function l() {
        K = !1
    }
    function m(a, b) {
        var c = a.lastElementChild
          , d = c.getBoundingClientRect();
        return b.clientY - (d.top + d.height) > 5 && c
    }
    function n(a) {
        for (var b = a.tagName + a.className + a.src + a.href + a.textContent, c = b.length, d = 0; c--; )
            d += b.charCodeAt(c);
        return d.toString(36)
    }
    function o(a) {
        for (var b = 0; a && (a = a.previousElementSibling); )
            "TEMPLATE" !== a.nodeName.toUpperCase() && b++;
        return b
    }
    function p(a, b) {
        var c, d;
        return function() {
            void 0 === c && (c = arguments,
            d = this,
            setTimeout(function() {
                1 === c.length ? a.call(d, c[0]) : a.apply(d, c),
                c = void 0
            }, b))
        }
    }
    var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E = {}, F = "Sortable" + (new Date).getTime(), G = window, H = G.document, I = G.parseInt, J = !!("draggable"in H.createElement("div")), K = !1, L = function(a, b, c, d, e, f) {
        var g = H.createEvent("Event");
        g.initEvent(b, !0, !0),
        g.item = c || a,
        g.from = d || a,
        g.clone = s,
        g.oldIndex = e,
        g.newIndex = f,
        a.dispatchEvent(g)
    }, M = "onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "), N = function() {}, O = Math.abs, P = [].slice, Q = [], R = p(function(a, b, c) {
        if (c && b.scroll) {
            var d, e, f, g, h = b.scrollSensitivity, i = b.scrollSpeed, j = a.clientX, k = a.clientY, l = window.innerWidth, m = window.innerHeight;
            if (w !== c && (v = b.scroll,
            w = c,
            v === !0)) {
                v = c;
                do
                    if (v.offsetWidth < v.scrollWidth || v.offsetHeight < v.scrollHeight)
                        break;
                while (v = v.parentNode)
            }
            v && (d = v,
            e = v.getBoundingClientRect(),
            f = (O(e.right - j) <= h) - (O(e.left - j) <= h),
            g = (O(e.bottom - k) <= h) - (O(e.top - k) <= h)),
            f || g || (f = (h >= l - j) - (h >= j),
            g = (h >= m - k) - (h >= k),
            (f || g) && (d = G)),
            (E.vx !== f || E.vy !== g || E.el !== d) && (E.el = d,
            E.vx = f,
            E.vy = g,
            clearInterval(E.pid),
            d && (E.pid = setInterval(function() {
                d === G ? G.scrollTo(G.scrollX + f * i, G.scrollY + g * i) : (g && (d.scrollTop += g * i),
                f && (d.scrollLeft += f * i))
            }, 24)))
        }
    }, 30);
    return a.prototype = {
        constructor: a,
        _dragStarted: function() {
            t && q && (h(q, this.options.ghostClass, !0),
            a.active = this,
            L(t, "start", q, t, z))
        },
        _onTapStart: function(a) {
            var b = a.type
              , c = a.touches && a.touches[0]
              , e = (c || a).target
              , g = e
              , h = this.options
              , i = this.el
              , l = h.filter;
            if (!("mousedown" === b && 0 !== a.button || h.disabled) && (e = d(e, h.draggable, i))) {
                if (z = o(e),
                "function" == typeof l) {
                    if (l.call(this, a, e, this))
                        return L(g, "filter", e, i, z),
                        void a.preventDefault()
                } else if (l && (l = l.split(",").some(function(a) {
                    return a = d(g, a.trim(), i),
                    a ? (L(a, "filter", e, i, z),
                    !0) : void 0
                })))
                    return void a.preventDefault();
                if ((!h.handle || d(g, h.handle, i)) && e && !q && e.parentNode === i) {
                    C = a,
                    t = this.el,
                    q = e,
                    u = q.nextSibling,
                    B = this.options.group,
                    q.draggable = !0,
                    h.ignore.split(",").forEach(function(a) {
                        j(e, a.trim(), k)
                    }),
                    c && (C = {
                        target: e,
                        clientX: c.clientX,
                        clientY: c.clientY
                    },
                    this._onDragStart(C, "touch"),
                    a.preventDefault()),
                    f(H, "mouseup", this._onDrop),
                    f(H, "touchend", this._onDrop),
                    f(H, "touchcancel", this._onDrop),
                    f(q, "dragend", this),
                    f(t, "dragstart", this._onDragStart),
                    J || this._onDragStart(C, !0);
                    try {
                        H.selection ? H.selection.empty() : window.getSelection().removeAllRanges()
                    } catch (m) {}
                }
            }
        },
        _emulateDragOver: function() {
            if (D) {
                i(r, "display", "none");
                var a = H.elementFromPoint(D.clientX, D.clientY)
                  , b = a
                  , c = " " + this.options.group.name
                  , d = Q.length;
                if (b)
                    do {
                        if (b[F] && b[F].groups.indexOf(c) > -1) {
                            for (; d--; )
                                Q[d]({
                                    clientX: D.clientX,
                                    clientY: D.clientY,
                                    target: a,
                                    rootEl: b
                                });
                            break
                        }
                        a = b
                    } while (b = b.parentNode);i(r, "display", "")
            }
        },
        _onTouchMove: function(a) {
            if (C) {
                var b = a.touches ? a.touches[0] : a
                  , c = b.clientX - C.clientX
                  , d = b.clientY - C.clientY
                  , e = a.touches ? "translate3d(" + c + "px," + d + "px,0)" : "translate(" + c + "px," + d + "px)";
                D = b,
                i(r, "webkitTransform", e),
                i(r, "mozTransform", e),
                i(r, "msTransform", e),
                i(r, "transform", e),
                a.preventDefault()
            }
        },
        _onDragStart: function(a, b) {
            var c = a.dataTransfer
              , d = this.options;
            if (this._offUpEvents(),
            "clone" == B.pull && (s = q.cloneNode(!0),
            i(s, "display", "none"),
            t.insertBefore(s, q)),
            b) {
                var e, g = q.getBoundingClientRect(), h = i(q);
                r = q.cloneNode(!0),
                i(r, "top", g.top - I(h.marginTop, 10)),
                i(r, "left", g.left - I(h.marginLeft, 10)),
                i(r, "width", g.width),
                i(r, "height", g.height),
                i(r, "opacity", "0.8"),
                i(r, "position", "fixed"),
                i(r, "zIndex", "100000"),
                t.appendChild(r),
                e = r.getBoundingClientRect(),
                i(r, "width", 2 * g.width - e.width),
                i(r, "height", 2 * g.height - e.height),
                "touch" === b ? (f(H, "touchmove", this._onTouchMove),
                f(H, "touchend", this._onDrop),
                f(H, "touchcancel", this._onDrop)) : (f(H, "mousemove", this._onTouchMove),
                f(H, "mouseup", this._onDrop)),
                this._loopId = setInterval(this._emulateDragOver, 150)
            } else
                c && (c.effectAllowed = "move",
                d.setData && d.setData.call(this, c, q)),
                f(H, "drop", this);
            setTimeout(this._dragStarted, 0)
        },
        _onDragOver: function(a) {
            var c, e, f, g = this.el, h = this.options, j = h.group, k = j.put, n = B === j, o = h.sort;
            if (q && (void 0 !== a.preventDefault && (a.preventDefault(),
            !h.dragoverBubble && a.stopPropagation()),
            B && !h.disabled && (n ? o || (f = !t.contains(q)) : B.pull && k && (B.name === j.name || k.indexOf && ~k.indexOf(B.name))) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                if (R(a, h, this.el),
                K)
                    return;
                if (c = d(a.target, h.draggable, g),
                e = q.getBoundingClientRect(),
                f)
                    return b(!0),
                    void (s || u ? t.insertBefore(q, s || u) : o || t.appendChild(q));
                if (0 === g.children.length || g.children[0] === r || g === a.target && (c = m(g, a))) {
                    if (c) {
                        if (c.animated)
                            return;
                        v = c.getBoundingClientRect()
                    }
                    b(n),
                    g.appendChild(q),
                    this._animate(e, q),
                    c && this._animate(v, c)
                } else if (c && !c.animated && c !== q && void 0 !== c.parentNode[F]) {
                    x !== c && (x = c,
                    y = i(c));
                    var p, v = c.getBoundingClientRect(), w = v.right - v.left, z = v.bottom - v.top, A = /left|right|inline/.test(y.cssFloat + y.display), C = c.offsetWidth > q.offsetWidth, D = c.offsetHeight > q.offsetHeight, E = (A ? (a.clientX - v.left) / w : (a.clientY - v.top) / z) > .5, G = c.nextElementSibling;
                    K = !0,
                    setTimeout(l, 30),
                    b(n),
                    p = A ? c.previousElementSibling === q && !C || E && C : G !== q && !D || E && D,
                    p && !G ? g.appendChild(q) : c.parentNode.insertBefore(q, p ? G : c),
                    this._animate(e, q),
                    this._animate(v, c)
                }
            }
        },
        _animate: function(a, b) {
            var c = this.options.animation;
            if (c) {
                var d = b.getBoundingClientRect();
                i(b, "transition", "none"),
                i(b, "transform", "translate3d(" + (a.left - d.left) + "px," + (a.top - d.top) + "px,0)"),
                b.offsetWidth,
                i(b, "transition", "all " + c + "ms"),
                i(b, "transform", "translate3d(0,0,0)"),
                clearTimeout(b.animated),
                b.animated = setTimeout(function() {
                    i(b, "transition", ""),
                    i(b, "transform", ""),
                    b.animated = !1
                }, c)
            }
        },
        _offUpEvents: function() {
            g(H, "mouseup", this._onDrop),
            g(H, "touchmove", this._onTouchMove),
            g(H, "touchend", this._onDrop),
            g(H, "touchcancel", this._onDrop)
        },
        _onDrop: function(b) {
            var c = this.el
              , d = this.options;
            clearInterval(this._loopId),
            clearInterval(E.pid),
            g(H, "drop", this),
            g(H, "mousemove", this._onTouchMove),
            g(c, "dragstart", this._onDragStart),
            this._offUpEvents(),
            b && (b.preventDefault(),
            !d.dropBubble && b.stopPropagation(),
            r && r.parentNode.removeChild(r),
            q && (g(q, "dragend", this),
            k(q),
            h(q, this.options.ghostClass, !1),
            t !== q.parentNode ? (A = o(q),
            L(q.parentNode, "sort", q, t, z, A),
            L(t, "sort", q, t, z, A),
            L(q, "add", q, t, z, A),
            L(t, "remove", q, t, z, A)) : (s && s.parentNode.removeChild(s),
            q.nextSibling !== u && (A = o(q),
            L(t, "update", q, t, z, A),
            L(t, "sort", q, t, z, A))),
            a.active && L(t, "end", q, t, z, A)),
            t = q = r = u = s = v = w = C = D = x = y = B = a.active = null ,
            this.save())
        },
        handleEvent: function(a) {
            var b = a.type;
            "dragover" === b || "dragenter" === b ? (this._onDragOver(a),
            e(a)) : ("drop" === b || "dragend" === b) && this._onDrop(a)
        },
        toArray: function() {
            for (var a, b = [], c = this.el.children, e = 0, f = c.length; f > e; e++)
                a = c[e],
                d(a, this.options.draggable, this.el) && b.push(a.getAttribute("data-id") || n(a));
            return b
        },
        sort: function(a) {
            var b = {}
              , c = this.el;
            this.toArray().forEach(function(a, e) {
                var f = c.children[e];
                d(f, this.options.draggable, c) && (b[a] = f)
            }, this),
            a.forEach(function(a) {
                b[a] && (c.removeChild(b[a]),
                c.appendChild(b[a]))
            })
        },
        save: function() {
            var a = this.options.store;
            a && a.set(this)
        },
        closest: function(a, b) {
            return d(a, b || this.options.draggable, this.el)
        },
        option: function(a, b) {
            var c = this.options;
            return void 0 === b ? c[a] : void (c[a] = b)
        },
        destroy: function() {
            var a = this.el
              , b = this.options;
            M.forEach(function(c) {
                g(a, c.substr(2).toLowerCase(), b[c])
            }),
            g(a, "mousedown", this._onTapStart),
            g(a, "touchstart", this._onTapStart),
            g(a, "dragover", this),
            g(a, "dragenter", this),
            Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(a) {
                a.removeAttribute("draggable")
            }),
            Q.splice(Q.indexOf(this._onDragOver), 1),
            this._onDrop(),
            this.el = null
        }
    },
    a.utils = {
        on: f,
        off: g,
        css: i,
        find: j,
        bind: c,
        is: function(a, b) {
            return !!d(a, b, a)
        },
        throttle: p,
        closest: d,
        toggleClass: h,
        dispatchEvent: L,
        index: o
    },
    a.version = "1.1.1",
    a.create = function(b, c) {
        return new a(b,c)
    }
    ,
    a
}),
angular.module("moonui", ["color"]).filter("zpad", function() {
    return function(a, b) {
        var c = /\-/.test(a);
        if (b = parseInt(b, 10),
        isNaN(b))
            return a;
        a = String(a);
        var d, e = a.replace(/\.|\-/g, "").length;
        for (d = 0; b - e > d; d += 1)
            a = "0" + a;
        return c && (a = "-" + a.replace(/\-/g, "")),
        a
    }
}).directive("miEditable", function() {
    return {
        priority: 50,
        require: "ngModel",
        link: function(a, b, c, d) {
            b.attr("contenteditable", !0),
            b.bind("blur", function() {
                a.$apply(function() {
                    b.html(b.text()),
                    d.$setViewValue(b.text())
                })
            }),
            a.$watch(function() {
                return d.$viewValue
            }, function() {
                b.html(d.$viewValue)
            })
        }
    }
}).directive("miPopup", function() {
    return {
        restrict: "A",
        require: "^?miAbsorbClicks",
        link: function(a, b, c, d) {
            var e, f, g = angular.element(b[0]).next(), h = function() {
                g.attr("style", "opacity: 0"),
                setTimeout(function() {
                    g.addClass("hidden"),
                    g.removeAttr("style")
                }, 500)
            }, i = function() {
                g.removeClass("hidden"),
                e = !0
            }, j = function() {
                clearTimeout(f),
                f = setTimeout(function() {
                    e || h(),
                    e = !1
                }, 10)
            };
            d && d.addCallback && d.addCallback(j),
            angular.element(document).bind("click", j),
            h(),
            g.bind("click", function(a) {
                var b = a.target.tagName.toUpperCase();
                a.stopPropagation(),
                ("A" === b || "BUTTON" === b || "I" === b) && (h(),
                "A" !== a.target.tagName.toUpperCase() && a.preventDefault())
            }),
            "focus" === c.miPopup ? !function() {
                var a, c, d, f;
                a = b.find("input"),
                a.length || (a = b),
                a.bind("focus", i),
                a.bind("click", function() {
                    e || (g.toggleClass("hidden"),
                    e = !0)
                }),
                a.bind("blur", function(a) {
                    var b, i, j = a.relatedTarget;
                    if (!j)
                        return e && h(),
                        void 0;
                    if (f || !function() {
                        var a, b, c, d, e = [];
                        for (f = g.find("button"),
                        d = f.length,
                        b = 0; d > b; b += 1)
                            e[b] = f[b];
                        for (a = g.find("a"),
                        d += a.length,
                        b = f.length,
                        c = 0; d > b; b += 1,
                        c += 1)
                            e[b] = a[c];
                        f = e.filter(function(a) {
                            return null !== a.offsetParent
                        })
                    }(),
                    i = f.length,
                    c || (c = f[0]),
                    d || (d = f[i - 1],
                    angular.element(d).bind("blur", function(a) {
                        var b = a.relatedTarget;
                        b !== f[i - 2] && b !== c && h()
                    })),
                    f) {
                        for (b = 0; i > b; b += 1)
                            if (j === f[b])
                                return;
                        b === i && h()
                    }
                })
            }() : b.bind("click", function() {
                g.toggleClass("hidden"),
                e = !0
            }),
            b.bind("keydown", function(a) {
                27 === a.which ? h() : 13 === a.which && "text" === a.target.type && g.addClass("hidden")
            })
        }
    }
}).directive("miNumber", ["$filter", function(a) {
    return {
        restrict: "E",
        scope: {
            radix: "&",
            min: "&",
            max: "&",
            def: "&",
            zpad: "&",
            validator: "&",
            modelVal: "=model"
        },
        template: '<input type="text" ng-model="viewVal" />',
        link: function(b, c, d) {
            var e, f, g, h = a("zpad"), i = Number(b.radix()) || 10, j = Number(b.min()), k = Number(b.max()), l = Number(b.zpad()) || 0, m = !1, n = Number(b.def()) || 0, o = c.children("input"), p = 10 === i, q = d.invalidClass, r = b.validator && b.validator();
            2 > i && (i = 2);
            var s = function(a, c, g) {
                var m = !1
                  , s = b.viewVal;
                if (p)
                    try {
                        s = b.$eval(b.viewVal)
                    } catch (t) {
                        s = n
                    }
                else
                    s = parseInt(s, i);
                isNaN(s) && (g ? (m = !0,
                s = b.viewVal) : s = n),
                m || isNaN(a) || (s += parseInt(a, 10)),
                !isNaN(k) && s > k ? g ? m = !0 : s = k : !isNaN(j) && j > s && (g ? m = !0 : s = j),
                !m && r && (r(s, n) || (g ? m = !0 : s = n)),
                m && q ? (o.addClass(q),
                o[0].setCustomValidity("invalid")) : q && (o.removeClass(q),
                o[0].setCustomValidity("")),
                b.$apply(function() {
                    b.viewVal = h(s.toString(i), l),
                    d.charInput && !m && f.val(String.fromCodePoint(s))
                }),
                g || (isNaN(c) ? b.$apply(function() {
                    b.modelVal = n = s,
                    e = setTimeout(function() {
                        b.modelVal !== s && b.$apply(function() {
                            b.modelVal = n = s
                        })
                    }, 300)
                }) : (clearTimeout(e),
                e = setTimeout(function() {
                    b.$apply(function() {
                        b.modelVal = n = s
                    })
                }, c)))
            };
            o.bind("keydown", function(a) {
                var b;
                40 === a.which ? (b = -1,
                a.preventDefault()) : 38 === a.which && (b = 1,
                a.preventDefault()),
                a.shiftKey && (b *= i),
                b && s(b, 0, q)
            }).bind("change", function() {
                s()
            }).bind("focus", function() {
                m = !0
            }).bind("blur", function() {
                m = !1,
                q && s()
            }).bind("mousewheel", function(a) {
                if (a.stopPropagation(),
                m) {
                    var b = a.wheelDeltaY > 0 ? 1 : -1;
                    a.shiftKey && (b *= i),
                    a.preventDefault(),
                    s(b, 500, q)
                }
            }).bind("input", function() {
                q && s(0 / 0, 0, q)
            }),
            isNaN(b.modelVal) || (n = b.modelVal),
            b.modelVal = n,
            b.viewVal = h(n, l),
            b.$watch("modelVal", function(a) {
                isNaN(a) || (b.viewVal = h(a.toString(i), l),
                d.charInput && f.val(String.fromCodePoint(a)),
                n = a)
            }),
            d.charInput && (f = angular.element('<input type="text" maxlength="2" />'),
            f.val(String.fromCodePoint(n)),
            g = function(a) {
                r(a, n) && (b.$apply(function() {
                    n = b.modelVal = a,
                    b.viewVal = h(a.toString(i), l)
                }),
                f[0].setCustomValidity(""),
                q && f.removeClass(q))
            }
            ,
            f.bind("input", function() {
                var a;
                a = f.val().codePointAt(0),
                document.activeElement === f[0] && r && (a && r(a, n) ? g(a) : (f[0].setCustomValidity("invalid"),
                q && f.addClass(q)))
            }).bind("change", function() {
                var a = f.val();
                return a && f[0].validity.valid ? (a = a.codePointAt(0),
                n !== a && g(a),
                void 0) : (f.val(String.fromCodePoint(b.modelVal)),
                f[0].setCustomValidity(""),
                q && f.removeClass(q),
                void 0)
            }).bind("click", function() {
                f[0].select()
            }),
            c.parent().after(angular.element('<label class="' + d.charInput + '"></label>').append(f)))
        }
    }
}
]).directive("miSelectAll", function() {
    return {
        link: function(a, b) {
            b.bind("focus", function() {
                setTimeout(function() {
                    b[0].select()
                })
            })
        }
    }
}).directive("miPresets", function() {
    return {
        restrict: "E",
        transclude: !0,
        template: '<label mi-popup="focus"><mi-number min="min" max="max" def="def" zpad="zpad" model="val"></mi-number><span ng-transclude></span></label><ul><li ng-repeat="p in presets"><button type="button" ng-click="update(p)" value="{{p}}">{{p}}</button></li></ul>',
        scope: {
            val: "=model",
            min: "=",
            max: "=",
            def: "=",
            zpad: "=",
            getPresets: "&presets"
        },
        link: function(a, b) {
            a.update = function(b) {
                a.val = b
            }
            ;
            var c = function() {
                var b, c = a.getPresets();
                for (a.presets = [],
                b = 0; b < c.length; b += 1)
                    c[b] >= a.min && c[b] <= a.max && a.presets.push(c[b]);
                a.$apply()
            };
            b.bind("click", c),
            b.find("input").bind("focus", function(a) {
                a.target.select(),
                c()
            })
        }
    }
}).directive("miStyle", function() {
    return {
        restrict: "E",
        link: function(a, b) {
            var c, d = function() {
                return c = b.html()
            }, e = angular.element("<style></style>");
            b.after(e),
            e = e[0],
            b.css("display", "none"),
            a.$watch(d, function() {
                e.stylesheet ? e.stylesheet.cssText = c : e.innerHTML = c
            })
        }
    }
}).directive("miLink", function() {
    return {
        restrict: "E",
        replace: !0,
        transclude: !0,
        template: '<span><span ng-show="!href" ng-transclude></span><a ng-show="href" href="{{href}}" ng-transclude></a></span>',
        scope: {
            href: "@"
        }
    }
}).directive("miColorPicker", ["color", "$timeout", function(a, b) {
    var c = 0;
    return {
        restrict: "E",
        replace: !0,
        templateUrl: "views/colorpicker.html",
        scope: {
            num: "=color",
            resultId: "@"
        },
        link: function(d, e) {
            function f() {
                n[0].setAttribute("stop-color", "hsl(" + q.h + ", 0%, " + q.l + "%)"),
                n[1].setAttribute("stop-color", "hsl(" + q.h + ", 100%, " + q.l + "%)"),
                l[0].setAttribute("stop-color", "hsl(" + q.h + ", " + q.s + "%, 0%)"),
                l[1].setAttribute("stop-color", "hsl(" + q.h + ", " + q.s + "%, 50%)"),
                l[2].setAttribute("stop-color", "hsl(" + q.h + ", " + q.s + "%, 100%)"),
                m || (m = document.getElementById(d.resultId)),
                m && m.setAttribute("style", "background-color: hsl(" + q.h + ", " + q.s + "%, " + q.l + "%)")
            }
            function g() {
                var b = a(d.num).toHSL();
                (b.h !== q.h || b.s !== q.s || b.l !== q.l) && (d.num = a(q).toNumber())
            }
            function h() {
                d.hsl = {
                    h: q.h,
                    s: q.s,
                    l: q.l
                }
            }
            function i() {
                var a, b, c = e.find("input");
                if (c.length)
                    for (a = 0; a < c.length; a += 1)
                        b = c[a].getAttribute("id"),
                        /hue/.test(b) ? c[a].value = q.h : /saturation/.test(b) ? c[a].value = q.s : /lightness/.test(b) && (c[a].value = q.l)
            }
            function j(a) {
                clearTimeout(p),
                p = setTimeout(function() {
                    var c = a.target.getAttribute("id");
                    if (c === "hue" + d.id)
                        q.h = a.target.value;
                    else if (c === "saturation" + d.id)
                        q.s = a.target.value;
                    else {
                        if (c !== "lightness" + d.id)
                            return;
                        q.l = a.target.value
                    }
                    f(),
                    b.cancel(o),
                    o = b(function() {
                        g(),
                        h()
                    }, 128)
                }, 16)
            }
            var k, l, m, n, o, p, q = {
                h: 0,
                s: 0,
                l: 0
            };
            d.id = c,
            c += 1,
            function() {
                var a, b = e.find("linearGradient");
                for (k = 0; k < b.length; k += 1)
                    a = angular.element(b[k]),
                    "satGrad" === a.attr("class") ? n = a.children() : "litGrad" === a.attr("class") && (l = a.children());
                f()
            }(),
            q = a(d.num).toHSL(),
            h(),
            i(),
            e[0].addEventListener("input", j, !1),
            e[0].addEventListener("change", j, !1),
            d.$watch("num", function() {
                b.cancel(o),
                o = b(function() {
                    var b = a(d.num).toHSL();
                    0 === b.h && 360 === q.h && (b.h = q.h),
                    (100 === q.l || 0 === q.l) && (b.s = q.s),
                    a(q).toNumber() !== d.num && (q = b,
                    h(),
                    f(),
                    i())
                }, 256)
            }),
            d.$watch("hsl", function() {
                b.cancel(o),
                o = b(function() {
                    q.h = d.hsl.h,
                    q.s = d.hsl.s,
                    q.l = d.hsl.l,
                    g(),
                    f(),
                    i()
                }, 256)
            }, !0)
        }
    }
}
]).directive("miFileOver", function() {
    return function(a, b) {
        var c, d, e, f = !1;
        b.on("dragover", function(a) {
            a.stopPropagation(),
            a.preventDefault();
            try {
                if (e = a.dataTransfer.types,
                e.indexOf)
                    f = -1 !== e.indexOf("Files");
                else
                    for (c = 0; c < e.length; c += 1)
                        "Files" === a.dataTransfer.types[c] && (f = !0);
                f ? (b.addClass("miFileOver"),
                clearTimeout(d),
                d = setTimeout(function() {
                    b.removeClass("miFileOver")
                }, 1e3)) : b.removeClass("miFileOver")
            } catch (a) {}
        }),
        b.on("drop", function(a) {
            a.stopPropagation(),
            b.removeClass("miFileOver")
        })
    }
}).directive("miFileZone", function() {
    return {
        scope: {
            onOpen: "&"
        },
        link: function(a, b, c) {
            var d = c.dragClass || "dragged"
              , e = c.arrayBufferIf ? new RegExp(c.arrayBufferIf) : !1
              , f = new RegExp(c.typeRegex);
            b.on("dragover", function(a) {
                b.addClass(d),
                a.dataTransfer.dropEffect = "copy"
            }),
            b.on("dragleave", function() {
                b.removeClass(d)
            }),
            b.on("drop", function(b) {
                var c, d, g = 0, h = new FileReader, i = [], j = function(b) {
                    d = c[g].type || c[g].name,
                    f.test(d) && i.push({
                        file: b.target.result,
                        type: d,
                        name: c[g].name
                    }),
                    g += 1,
                    g === c.length ? a.$apply(function() {
                        a.onOpen({
                            files: i.reverse()
                        })
                    }) : (h = new FileReader,
                    h.onload = j,
                    e && e.test(d) ? h.readAsArrayBuffer(c[g]) : h.readAsText(c[g]))
                };
                b.preventDefault(),
                c = b.dataTransfer.files,
                h.onload = j,
                d = c[g].type || c[g].name,
                e && e.test(d) ? h.readAsArrayBuffer(c[g]) : h.readAsText(c[g])
            })
        }
    }
}).directive("miFile", function() {
    return {
        restrict: "E",
        scope: {
            onOpen: "&",
            focused: "="
        },
        template: '<input type="file" kr-call-phantom="upload" multiple />',
        link: function(a, b, c) {
            var d = b.children("input")
              , e = c.arrayBufferIf ? new RegExp(c.arrayBufferIf) : !1
              , f = new RegExp(c.typeRegex);
            d[0].addEventListener("change", function(b) {
                var c, g = b.target.files, h = 0, i = new FileReader, j = [], k = function(b) {
                    c = g[h].type || g[h].name,
                    f.test(c) && j.push({
                        file: b.target.result,
                        type: c,
                        name: g[h].name
                    }),
                    h += 1,
                    h === g.length ? (a.$apply(function() {
                        a.onOpen({
                            files: j.reverse()
                        })
                    }),
                    d[0].value = "") : (i = new FileReader,
                    i.onload = k,
                    e && e.test(c) ? i.readAsArrayBuffer(g[h]) : i.readAsText(g[h]))
                };
                i.onload = k,
                c = g[h].type || g[h].name,
                e && e.test(c) ? i.readAsArrayBuffer(g[h]) : i.readAsText(g[h])
            }, !1),
            c.focused && d.bind("focus", function() {
                a.$apply(function() {
                    a.focused = !0
                })
            }).bind("blur", function() {
                a.$apply(function() {
                    a.focused = !1
                })
            })
        }
    }
}).directive("miBoxSelector", function() {
    return {
        restrict: "E",
        scope: {
            map: "=",
            mode: "@",
            onApply: "&"
        },
        transclude: !0,
        template: "<div ng-transclude></div>",
        link: function(a, b, c) {
            function d() {
                try {
                    g.destroy()
                } catch (c) {}
                "move" === a.mode && (g = new Sortable(b.children()[0],{
                    ghostClass: o,
                    onUpdate: function(a) {
                        var b, c;
                        b = parseInt(angular.element(a.item)[0].getAttribute("data-idx"), 10);
                        try {
                            c = parseInt(angular.element(a.item).next()[0].getAttribute("data-idx"), 10)
                        } catch (a) {
                            c = 0 / 0
                        }
                        c > b && (c -= 1),
                        r = [b, c],
                        clearTimeout(h),
                        h = setTimeout(function() {
                            u("move")
                        }, 300)
                    }
                }))
            }
            var e, f, g, h, i = [], j = !1, k = !1, l = {}, m = {}, n = 0 / 0, o = c.boxClass || "mi-boxed", p = {}, q = c.selectedClass || "mi-selected", r = [], s = [], t = 0, u = function(b) {
                a.$apply(function() {
                    a.onApply({
                        selection: r,
                        mode: b
                    }),
                    r = []
                })
            }, v = function(a) {
                return a.offsetLeft <= p.x2 && a.offsetLeft + a.offsetWidth >= p.x1 && a.offsetTop <= p.y2 && a.offsetTop + a.offsetHeight >= p.y1 ? !0 : a.offsetTop > p.y2 || p.y1 > a.offsetHeight + a.offsetTop ? 0 / 0 : !1
            }, w = function() {
                var a, c, d, e = b.find("mi-box"), f = e.length, g = [], h = 1;
                if (!f)
                    return g;
                for (a = 0; f > a; a += 1)
                    e[a].offsetHeight && g.push({
                        el: e[a],
                        idx: a
                    });
                for (e = g,
                g = [],
                f = e.length,
                c = e[0].offsestTop,
                p.x1 = Math.min(l.x, m.x),
                p.x2 = Math.max(l.x, m.x),
                p.y1 = Math.min(l.y, m.y),
                p.y2 = Math.max(l.y, m.y),
                1 === n && (n = 0),
                a = n || 0; f > a; a += 1)
                    if (t += 1,
                    1 === h && e[a].el.offsetTop > c && (h = a),
                    d = v(e[a].el))
                        isNaN(n) && (n = a),
                        g.push({
                            index: e[a].idx,
                            element: angular.element(e[a].el)
                        });
                    else {
                        if (isNaN(d) && !isNaN(n))
                            break;
                        a += h - 1
                    }
                for (a = n - 1 || -1; a > -1; a -= 1)
                    if (d = v(e[a].el))
                        g.push({
                            index: e[a].idx,
                            element: angular.element(e[a].el)
                        });
                    else if (isNaN(d))
                        break;
                return g
            }, x = function() {
                var c, e, f, g, h = a.map, i = b.find("mi-box"), j = i.length, k = [];
                if (!j || !h || j !== h.length)
                    return 500 > t && (t += 1,
                    setTimeout(x, 0)),
                    void 0;
                if (d(),
                t = 0,
                f = JSON.stringify(h),
                JSON.stringify(s) !== f) {
                    for (c = 0; j > c; c += 1)
                        JSON.stringify(s[c]) !== JSON.stringify(h[c]) && k.push(c);
                    for (j = k.length,
                    c = 0; j > c; c += 1) {
                        if (e = k[c],
                        g = angular.element(i[e]),
                        h[e].id + "" !== g.attr("data-id"))
                            return setTimeout(x, 300),
                            void 0;
                        h[e].order ? g.addClass(q) : g.removeClass(q)
                    }
                    s = JSON.parse(f)
                }
            };
            b.bind("mousedown", function(b) {
                return "move" !== a.mode ? (n = 0 / 0,
                j = !0,
                l.x = b.pageX,
                l.y = b.pageY,
                b.preventDefault(),
                !1) : void 0
            }),
            document.body.addEventListener("mouseup", function(b) {
                var c, d, g, l, m, p = a.mode;
                if (k = !1,
                j = !1,
                n = 0 / 0,
                "move" !== a.mode) {
                    if (i.length) {
                        for (d = 0,
                        l = i.length; l > d; d += 1)
                            c = i[d],
                            c.element.removeClass(o),
                            "delete" === p ? c.element.removeClass(q).remove() : "select" === p && c.element.toggleClass(q),
                            m = c.index,
                            g = r.indexOf(m),
                            g > 0 ? r.splice(g, 1) : r.push(c.index);
                        i = [],
                        clearTimeout(h),
                        h = setTimeout(function() {
                            u(p)
                        }, 300)
                    }
                    for (e = {
                        x: b.pageX,
                        y: b.pageY
                    },
                    f = angular.element(b.target),
                    d = 0; !f.is("mi-box") && 6 > d; )
                        f = f.parent(),
                        d += 1;
                    try {
                        f = f[0]
                    } catch (b) {
                        f = !1
                    }
                }
            }, !1),
            b.bind("mouseup", function(c) {
                var d, g, j, k, p, s, t;
                if (!i.length && "move" !== a.mode) {
                    for (p = a.mode,
                    g = "delete" === p,
                    m.x = c.pageX,
                    m.y = c.pageY,
                    d = w(),
                    n = 0 / 0,
                    j = d.length,
                    1 === j && e && c.shiftKey && (l = e,
                    d = w(),
                    j = d.length),
                    b.find("mi-box").removeClass(o),
                    k = 0; j > k; k += 1)
                        (g || 2 > j || d[k].element && d[k].element[0] !== f) && (g && !c.shiftKey ? d[k].element.removeClass(q).remove() : "select" === p && d[k].element.toggleClass(q),
                        s = d[k].index,
                        t = r.indexOf(s),
                        t > 0 ? r.splice(t, 1) : r.push(d[k].index + (g && !c.shiftKey ? r.length : 0)));
                    clearTimeout(h),
                    h = setTimeout(function() {
                        u(p)
                    }, 300)
                }
            }),
            b.bind("mousemove", function(c) {
                if ("move" !== a.mode) {
                    var d;
                    if (!j)
                        return;
                    for (k = !0,
                    clearTimeout(h),
                    m.x = c.pageX,
                    m.y = c.pageY,
                    i = w(),
                    b.find("mi-box").removeClass(o),
                    d = 0; d < i.length; d += 1)
                        i[d].element.addClass(o)
                }
            }),
            window.addEventListener("scroll", function() {
                clearTimeout(h);
                var b = a.mode;
                r.length && (h = setTimeout(function() {
                    u(b)
                }, 300))
            }, !1),
            a.$watch("map", function() {
                x()
            }, !0),
            a.$watch("mode", function() {
                try {
                    g.destroy()
                } catch (b) {}
                "move" === a.mode && d()
            }),
            x()
        }
    }
}).directive("miTags", function() {
    return {
        priority: 2,
        require: "ngModel",
        link: function(a, b, c, d) {
            function e() {
                b.val(d.$modelValue),
                f && b.html(d.$modelValue)
            }
            var f = b.is("span");
            d.$parsers.push(function(a) {
                var b = []
                  , c = a;
                return c ? (c = c.replace(/\s*,\s*/g, ",").replace(/,+/g, ", ").trim().replace(/^,+|,+$/, ""),
                c = c.split(", "),
                c.forEach(function(a) {
                    a && -1 === b.indexOf(a) && b.push(a)
                }),
                b.join(", ")) : ""
            }),
            f = b.is("span"),
            d.$render = e,
            b.bind("change, blur", function() {
                d.$setViewValue(f ? b.html() : b.val()),
                e()
            })
        }
    }
}).directive("miBlurOnEnter", function() {
    return {
        link: function(a, b) {
            b.bind("keyup", function(a) {
                (13 === a.which || 27 === a.which) && a.target.blur()
            })
        }
    }
}).directive("miUnique", function() {
    return {
        priority: 5,
        require: "ngModel",
        link: function(a, b, c, d) {
            var e = a[c.miUnique] || {}
              , f = !b[0].hasAttribute("contenteditable")
              , g = "string" == typeof c.miTags;
            d.$parsers.push(function(h) {
                var i, j, k, l, m, n, o = [];
                if (h = angular.element("<div></div>").html(h).text(),
                g) {
                    for (n in e)
                        e.hasOwnProperty(n) && (o = o.concat(e[n]));
                    for (m = h.split(/,\s*/),
                    n = e[a.$id] || [],
                    k = m.length,
                    i = 0; k > i; i += 1)
                        if (-1 !== o.indexOf(m[i]) && -1 === n.indexOf(m[i])) {
                            j = !1;
                            break
                        }
                    i === k && (j = !0)
                } else {
                    for (n in e)
                        n !== a.$id && e.hasOwnProperty(n) && o.push(e[n]);
                    l = h.replace(/\s*/g, ""),
                    j = -1 === o.indexOf(l)
                }
                return j ? (d.$setValidity("unique", !0),
                c.miInvalidClass && b.removeClass(c.miInvalidClass),
                h) : (document.activeElement === b[0] ? (d.$setValidity("unique", !1),
                c.miInvalidClass && b.addClass(c.miInvalidClass)) : f ? b.val(d.$modelValue) : b.html(d.$modelValue),
                d.$modelValue)
            }),
            b.bind("change, blur", function() {
                d.$setViewValue(f ? b.val() : b.text()),
                d.$setValidity("unique", !0),
                b.removeClass(c.miInvalidClass)
            }),
            a.$watch(function() {
                return d.$modelValue
            }, function(b) {
                b ? e[a.$id] = g ? b.split(/,\s*/) : b.replace(/\s*/g, "") : delete e[a.$id]
            })
        }
    }
}).directive("miTooltip", ["$parse", function(a) {
    var b, c = 600, d = c;
    return {
        link: function(e, f, g) {
            var h, i = f[0], j = a(g.miTooltip)();
            f.bind("mouseenter", function() {
                var a = function() {
                    var a, b, c, e;
                    a = i.getBoundingClientRect(),
                    h = angular.element("<div></div>"),
                    h.addClass(j.class || "tooltip"),
                    h.text(j.text),
                    angular.element(document.body).append(h),
                    c = h[0].getBoundingClientRect(),
                    e = j.hasOwnProperty("marginTop") ? a.top + a.height + (Number(j.marginTop) || 0) : a.top - a.height - (Number(j.marginBottom) || 0),
                    b = j.hasOwnProperty("marginRight") ? a.left + a.width - c.width - Number(j.marginRight) : a.left + a.width / 2 - c.width / 2,
                    h.css({
                        left: b + "px",
                        top: e + "px"
                    }),
                    d = 0
                };
                clearTimeout(b),
                d ? b = setTimeout(a, d) : a()
            }).bind("mouseleave", function(a) {
                var e;
                clearTimeout(b),
                h && h.remove(),
                e = a.toElement,
                e && (0 === d && e.hasAttribute("mi-tooltip") || (d = c))
            }).bind("click", function() {
                clearTimeout(b),
                d = c,
                h && h.remove()
            })
        }
    }
}
]).directive("miAbsorbClicks", function() {
    return {
        controller: ["$scope", function(a) {
            a.callbacks = [],
            this.addCallback = function(b) {
                a.callbacks.push(b)
            }
        }
        ],
        scope: {
            onClick: "&"
        },
        link: function(a, b) {
            var c, d;
            b.bind("click", function(b) {
                for (b.stopPropagation(),
                a.onClick({
                    e: b
                }),
                d = a.callbacks.length,
                c = 0; d > c; c += 1)
                    a.callbacks[c]()
            })
        }
    }
}).directive("miFocusWhen", function() {
    return {
        scope: !0,
        link: function(a, b, c) {
            var d;
            a.$watch(function() {
                return c.miFocusWhen
            }, function() {
                clearTimeout(d),
                d = setTimeout(function() {
                    try {
                        "true" === c.miFocusWhen && (b.is("input, button") ? b[0].focus() : (b = b.find("input"),
                        b.length && b[0].focus()))
                    } catch (a) {}
                }, 100)
            })
        }
    }
}).directive("miGrid", ["template", function(a) {
    return {
        restrict: "E",
        scope: {
            left: "@",
            top: "@",
            width: "@",
            height: "@",
            gridSize: "@"
        },
        link: function(b, c) {
            function d(a, b, c, d, h) {
                var i, j = [], k = c / d * h, l = [];
                if (0 === c || 0 === d)
                    return "";
                for (i = 0; k > i; i += 1)
                    l.push(g.fillup({
                        x: Math.round(i / k * c)
                    }));
                for (l.push(g.fillup({
                    x: Math.round(c)
                })),
                i = 0; h > i; i += 1)
                    j.push(f.fillup({
                        y: Math.round(i / h * d)
                    }));
                return j.push(f.fillup({
                    y: Math.round(d)
                })),
                e.fillup({
                    left: a,
                    top: b,
                    width: c,
                    height: d,
                    hLines: j.join(""),
                    vLines: l.join("")
                })
            }
            var e = a('<div class="miGrid" style="left: {{left}}px; top: {{top}}px; width: {{width}}px; height: {{height}}px;">{{hLines}}{{vLines}}</div>')
              , f = a('<div class="hLine" style="top: {{y}}px"></div>')
              , g = a('<div class="vLine" style="left: {{x}}px"></div>');
            b.$watch(function() {
                return b.left + b.top + b.width + b.height + b.gridSize
            }, function() {
                c.html(d(Number(b.left), Number(b.top), Number(b.width), Number(b.height), Number(b.gridSize)) || "")
            })
        }
    }
}
]).directive("miVisibleBox", function() {
    return {
        link: function(a, b, c) {
            function d() {
                var b = a[c.miVisibleBox];
                b && (b.processing = !0),
                50 > g ? (setTimeout(function() {
                    e()
                }, 300),
                g += 1) : g = 0
            }
            function e() {
                var b, e, f;
                try {
                    if (b = h.getBoundingClientRect(),
                    !b.width || !b.height)
                        return;
                    e = h.offsetLeft,
                    isNaN(e) && (f = h.parentElement || h.parentNode,
                    e = (f.offsetWidth - b.width) / 2),
                    a[c.miVisibleBox] = {
                        width: Math.round(b.width),
                        height: Math.round(b.height),
                        left: Math.round(e),
                        top: 0,
                        processing: !1
                    },
                    setTimeout(function() {
                        a.$apply()
                    }, 100)
                } catch (g) {
                    return d(),
                    void 0
                }
            }
            var f, g = 0, h = b[0];
            a.$watch(function() {
                return b.attr("viewBox") + b.attr("style") + c.miVisibleBoxWatch
            }, function() {
                e()
            }),
            window.addEventListener("resize", function() {
                clearTimeout(f),
                f = setTimeout(function() {
                    e(),
                    a.$apply()
                }, 500)
            }, !1)
        }
    }
}).directive("miTrack", ["$parse", function(a) {
    return {
        link: function(b, c, d) {
            var e = ["_trackEvent"]
              , f = a(d.miTrack)();
            f && window._gaq && "string" == typeof f.event && c.bind(f.event, function() {
                f.hasOwnProperty("category") && e.push(f.category),
                f.hasOwnProperty("action") && e.push(f.action),
                f.hasOwnProperty("label") && e.push(f.label),
                f.hasOwnProperty("value") && e.push(f.value),
                f.hasOwnProperty("noninteraction") && e.push(f.noninteraction),
                e.length > 1 && window._gaq.push(e)
            })
        }
    }
}
]),
"#library" === location.hash && (location.hash = "#/select/library"),
angular.module("icomoonApp", ["kr.font","ui.router", "storage", "svg", "font", "tmpl", "color", "swatch", "csh", "file", "moonui", "cloud", "search"]).config(["$stateProvider", "$urlRouterProvider", "$compileProvider", function(a, b, c) {
    b.otherwise("/select"),
    c.debugInfoEnabled(!1),
    c.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image\//),
    a.state("select", {
        url: "/select",
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        resolve: {
            project: ["session", "$q", "storage", "message", function(a, b, c, d) {
                var e, f = b.defer(), g = a("icomoon"), h = function(a) {
                    var b = a.total || a.totalSize;
                    b !== a.loaded && d.setMessage(a.loaded / b)
                };
                return c.load("currentProject", function(b) {
                    b || (b = -1),
                    g.load("icomoon-lib/presets.json").then(function(d) {
                        function i(a) {
                            f.resolve(a)
                        }
                        var j, k;
                        for (0 > b && !isNaN(d.currentProject) && (b = d.currentProject),
                        d.projects || (d = {
                            currentProject: -1,
                            projects: []
                        }),
                        j = 0; j < d.projects.length; j += 1)
                            if (d.projects[j].created === b)
                                return e = a(b),
                                e.downloadProgressHandler = e.downloadProgressHandler || h,
                                e.load(d.projects[j].uri).then(i, function(a) {
                                    return "no such project" === a ? (location.hash = "#/projects",
                                    void 0) : void 0
                                }),
                                f.promise;
                        if (j === d.projects.length) {
                            if (j > 1)
                                return location.hash = "#/projects",
                                void 0;
                            d.projects[b] || (b = 0),
                            b < d.projects.length && b > -1 && d.projects[b].iconSets ? (k = (new Date).getTime(),
                            d.projects[b].metadata.created = k,
                            a(k).quickSave(d.projects[b]).then(function(a) {
                                d.projects.splice(b, 1, a.metadata),
                                b = k,
                                d.time += 1,
                                f.resolve(a),
                                f.promise.then(function() {
                                    g.quickSave(d)
                                })
                            })) : j > 0 ? (b = d.projects[b].created,
                            e = a(b),
                            e.downloadProgressHandler = e.downloadProgressHandler || h,
                            e.load().then(i)) : (b = (new Date).getTime(),
                            d.projects = [{
                                created: b,
                                name: "Untitled Project 1",
                                lastOpened: 0
                            }],
                            g.quickSave(d),
                            k = {
                                metadata: d.projects[0],
                                iconSets: []
                            },
                            a(b).quickSave(k).then(function() {
                                f.resolve(k)
                            }))
                        }
                        c.save("currentProject", b)
                    })
                }),
                f.promise
            }
            ]
        }
    }).state("select.font", {
        url: "/font",
        templateUrl: "views/font.html",
        controller: "FontCtrl"
    }).state("select.image", {
        url: "/image",
        templateUrl: "views/image.html",
        controller: "ImageCtrl"
    }).state("select.library", {
        url: "/library",
        templateUrl: "views/lib.html",
        controller: "LibCtrl",
        resolve: {
            iconSets: ["$q", "$http", function(a, b) {
                var c = a.defer();
                return b.get("icomoon-lib/library.json").then(function(a) {
                    c.resolve(a.data)
                }),
                c.promise
            }
            ]
        }
    }).state("projects", {
        url: "/projects",
        templateUrl: "views/projects.html",
        controller: "ProjectsCtrl",
        resolve: {}
    })
}
]),
angular.module("icomoonApp").controller("MsgCtrl", ["$scope", "message", function(a, b) {
    a.message = b,
    b.$apply = function() {
        try {
            a.$apply()
        } catch (b) {}
    }
}
]),
angular.module("icomoonApp").factory("session", ["$q", "$http", "$rootScope", "$timeout", "storage", "cloud", "scriptLoader", "message", function(a, b, c, d, e, f, g, h) {
    "use strict";
    function i() {
        m = {},
        e.clear(function() {
            location.reload()
        })
    }
    var j, k = {}, l = {}, m = {}, n = 0;
    return f.hasCloudAccess().then(function() {
        j = g.load("components/jsondiffpatch/jsondiffpatch.min.js"),
        n = 3e3,
        j.then(function() {
            jsondiffpatch.config.objectHash = function(a) {
                return a.id || 0
            }
        })
    }),
    function(g) {
        function o(b) {
            function c() {
                (m[g] === !0 || "pending" === m[g]) && 800 > e ? (setTimeout(c, 300),
                e += 1) : d()
            }
            function d() {
                m[g] = !0,
                f.hasCloudAccess(!0, g).then(function(a) {
                    var c = a.time || -1;
                    b && (b.time = b.time || r && r.time || 0),
                    !b || c > b.time || !isNaN(b.uid) && b.uid !== a.uid ? f.getSession({
                        id: g,
                        progress: w.downloadProgressHandler
                    }).then(function(c) {
                        c && (c.uid = a.uid,
                        b && b.projects && b.projects.length > 1 && (void 0 === b.uid || -1 === b.uid) ? (m[g] = !1,
                        h.show({
                            message: '<p class="talign-left mtn">Which project data would you like to keep?</p><p class="talign-left">If you choose <strong>Cloud</strong>, the data in your account will overwrite the data stored locally in this browser.</p><p class="talign-left">If you choose <strong>Local</strong>, the data stored in your account will be lost and replaced with your local data.</p><p class="talign-left">If you are not sure which option to choose, <a href="https://i.icomoon.io/logout">sign out</a> or <a href="https://icomoon.io/#contact">contact us</a>.</p>',
                            firstButton: {
                                caption: "Cloud"
                            },
                            secondButton: {
                                caption: "Local"
                            }
                        }).then(function(d) {
                            "Local" === d ? (b.uid = a.uid,
                            j.resolve()) : j.resolve(c)
                        })) : j.resolve(c)),
                        c || (b ? (b.uid = a.uid,
                        j.resolve()) : "icomoon" !== g && (j.reject("no such project"),
                        m[g] = !1),
                        j.resolve(c))
                    }, function() {
                        b.uid = a.uid,
                        j.resolve()
                    }) : c !== b.time ? (b.uid = a.uid,
                    j.resolve()) : (b.uid = a.uid,
                    j.resolve(b))
                }, function(a) {
                    a.noAccess && b && b.premium && (m[g] = !1,
                    i()),
                    a && b && (b.uid = a.uid),
                    j.resolve()
                })
            }
            var e = 0
              , j = a.defer();
            return c(),
            j.promise.then(function() {
                m[g] = !1,
                l[g] = !1
            }),
            j.promise
        }
        var p, q, r, s, t, u, v, w = {};
        return k[g] ? k[g] : (k[g] = w,
        w.load = function(d) {
            function h(a) {
                o(a).then(function(c) {
                    c || a ? (q = c || a,
                    c ? (r = JSON.parse(JSON.stringify(c)),
                    i.resolve(c)) : i.resolve(a)) : b.get(d).then(function(a) {
                        q = a.data,
                        i.resolve(q)
                    }),
                    i.promise.then(function(a) {
                        f.hasCloudAccess().then(function() {
                            a.premium = !0,
                            w.quickSave(a)
                        })
                    })
                }, function(a) {
                    "no such project" === a && i.reject(a)
                })
            }
            var i = a.defer();
            return q ? h(q) : e.load(g, function(a) {
                h(a),
                c.$apply()
            }),
            i.promise
        }
        ,
        w.save = function(b, c) {
            var h;
            return c = c || n,
            s || (s = a.defer()),
            p ? s.resolve() : (d.cancel(t),
            t = d(function() {
                function a(a) {
                    d.cancel(v),
                    v = d(function() {
                        k()
                    }, a || 1e3)
                }
                function k() {
                    f.hasCloudAccess().then(function() {
                        return j
                    }).then(function() {
                        return "offline" === m[g] && (m[g] = !1),
                        m[g] && "failed" !== m[g] && "pending" !== m[g] ? (a(),
                        void 0) : (d.cancel(u),
                        u = d(function() {
                            function b() {
                                q.time = h || f.getTime(),
                                n = q.time,
                                f.storeSession({
                                    session: k,
                                    id: g,
                                    time: n
                                }).then(c, function() {
                                    m[g] = "failed",
                                    l[g] = "failed",
                                    a()
                                })
                            }
                            function c(a) {
                                var c;
                                a.wasLate ? (p = !0,
                                m[g] = !1,
                                l[g] = !1,
                                location.reload()) : a.error ? (/Unauthed/.test(a.error) && (m[g] = !1,
                                i()),
                                c = !0) : n !== a.time && (c = !0),
                                c ? b() : (r = JSON.parse(k),
                                m[g] = !1,
                                l[g] = !1)
                            }
                            var d, j, k, n, o, s = !1;
                            if (m[g] = !0,
                            h = h || f.getTime(),
                            !r)
                                return q.time = h,
                                k = JSON.stringify(q),
                                b(),
                                void 0;
                            d = jsondiffpatch.diff(r, q);
                            for (o in d)
                                if (d.hasOwnProperty(o) && "time" !== o) {
                                    s = !0,
                                    q.time = h,
                                    d.time = [r.time, h];
                                    break
                                }
                            return s ? d = JSON.stringify(d) : (d = !1,
                            q.time = r.time),
                            isNaN(q.time) && (q.time = h),
                            k = JSON.stringify(q),
                            n = q.time,
                            d ? (j = JSON.stringify(d),
                            j.length < k.length ? f.storeSession({
                                diff: JSON.stringify(d),
                                id: g,
                                time: n
                            }).then(c, function() {
                                m[g] = "failed",
                                l[g] = "failed",
                                a()
                            }) : b(),
                            void 0) : (r = JSON.parse(k),
                            e.save(g, q),
                            m[g] = !1,
                            l[g] = !1,
                            void 0)
                        }, c / 3),
                        void 0)
                    }),
                    b.time = b.time || f.getTime(),
                    e.save(g, b, function() {
                        s && s.resolve(b),
                        s = !1
                    })
                }
                b = b || q,
                q = b,
                f.hasCloudAccess(!0, g).then(function(a) {
                    q.uid && -1 !== q.uid && q.uid !== a.uid || r && r.time && r.time < a.time || "failed" === m[g] ? (p = !0,
                    m[g] = !1,
                    l[g] = !1,
                    s && s.resolve(),
                    q.uid !== a.uid ? i() : location.reload()) : (h = b.time = f.getTime(),
                    q.uid = a.uid)
                }, function(a) {
                    a.noAccess && q.premium ? (p = !0,
                    i()) : (q.uid = a.uid,
                    m[g] = "offline")
                }).finally(function() {
                    p || k()
                })
            }, c),
            p || (m[g] = "pending"),
            s.promise)
        }
        ,
        w.quickSave = function(a) {
            return w.save(a, 300)
        }
        ,
        w.isSyncing = function() {
            var a;
            for (a in l)
                if (l.hasOwnProperty(a) && l[a])
                    return l[a];
            for (a in m)
                if (m.hasOwnProperty(a) && m[a])
                    return m[a];
            return !1
        }
        ,
        window.onbeforeunload || f.hasCloudAccess().then(function() {
            window.onbeforeunload = function() {
                return w.isSyncing() && !/#\/projects/.test(location.hash) ? "IcoMoon has not finished syncing your data to the cloud." : void 0
            }
        }),
        w)
    }
}
]),
angular.module("icomoonApp").factory("message", ["$q", "$sce", function(a, b) {
    var c, d;
    return {
        show: function(b, e, f) {
            return "string" == typeof b ? d = b : (d = b.message,
            e = b.firstButton,
            f = b.secondButton),
            this.visible = !0,
            c = a.defer(),
            this.firstButton = e && e.caption ? {
                caption: e.caption,
                focused: e.focused
            } : !1,
            this.secondButton = f && f.caption ? {
                caption: f.caption,
                focused: f.focused
            } : !1,
            c.promise
        },
        setMessage: function(a) {
            d = a,
            "function" == typeof this.$apply && this.$apply()
        },
        getRawMessage: function() {
            return d
        },
        getMessage: function() {
            return b.trustAsHtml(String(d))
        },
        hide: function(a) {
            this.visible = !1,
            c.resolve(a)
        }
    }
}
]),
angular.module("icomoonApp").factory("hotkeys", function() {
    function a(a) {
        var b;
        return a = a.toLowerCase(),
        1 === a.length ? /[0-9a-z]/.test(a) ? a.toUpperCase().charCodeAt(0) : -1 : (b = {
            cmd: 91,
            command: 91,
            shift: 16,
            ctrl: 17,
            control: 17,
            alt: 18,
            option: 18,
            opt: 18,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            esc: 27
        },
        b[a] || -1)
    }
    function b(a, b) {
        var c, d = a.length, e = b.length;
        if (d !== e)
            return !1;
        for (c = 0; e > c; c += 1)
            if (-1 === a.indexOf(b[c]))
                return !1;
        return !0
    }
    function c(a) {
        var c, d, e, f, g = h.length;
        for (d = 0; g > d; d += 1)
            for (c = h[d].keys,
            f = c.length,
            e = 0; f > e; e += 1)
                if (b(c[e], a))
                    return h[d];
        return !1
    }
    function d(a) {
        return (224 === a || 93 === a) && (a = 91),
        a
    }
    function e(a) {
        var b = a.getAttribute("contenteditable");
        return "text" === a.type || "search" === a.type || b && "true" === b.toLowerCase() ? !0 : !1
    }
    var f, g = [], h = [], i = {};
    return document.addEventListener("keydown", function(a) {
        var b, h, i, j;
        e(a.target) || (j = d(a.which),
        h = g.indexOf(j),
        -1 === h && (g.push(j),
        i = !0),
        a.metaKey || (h = g.indexOf(91),
        -1 !== h && g.splice(h, 1)),
        b = c(g),
        !b || !b.down || !i && b.waitForUp && b.up || (b.scope ? b.scope.$apply(b.down) : b.down(),
        b.waitForUp = !0,
        a.preventDefault()),
        g.length && !b ? f = setTimeout(function() {
            g = []
        }, 1e3) : clearTimeout(f))
    }),
    window.addEventListener("blur", function() {
        var a = c(g);
        a && a.up && (a.scope ? a.scope.$apply(a.up) : a.up()),
        g = []
    }),
    document.addEventListener("keyup", function(a) {
        var b, f, h;
        return e(a.target) ? (g = [],
        void 0) : (h = d(a.which),
        b = g.indexOf(h),
        -1 !== b ? (f = c(g),
        g.splice(b, 1),
        91 === a.which && (g = []),
        f && (f.waitForUp = !1,
        f.keys.forEach(function(a) {
            var b = c(a);
            b && (b.waitForUp = !1)
        }),
        f.up && (f.scope ? f.scope.$apply(f.up) : f.up(),
        a.preventDefault()))) : (f = c([h]),
        f && f.up && (f.scope ? f.scope.$apply(f.up) : f.up(),
        a.preventDefault())),
        void 0)
    }, !1),
    i.clear = function() {
        h = []
    }
    ,
    i.add = function(b) {
        var c, d, e, f, g, i, j = b.arr.slice(0), k = [];
        for (b.id && (h.forEach(function(a) {
            b.id !== a.id && k.push(a)
        }),
        h = k),
        c = 0,
        f = j.length; f > c; c += 1) {
            for (i = j[c].keys,
            "string" == typeof i && (j[c].keys = i = [i]),
            d = 0,
            g = i.length; g > d; d += 1)
                for (i[d] = i[d].trim().split(/\s+\+?\s*/),
                e = 0; e < i[d].length; e += 1)
                    i[d][e] = a(i[d][e]);
            b.scope && (j[c].scope = b.scope),
            b.id && (j[c].id = b.id)
        }
        h = h.concat(j)
    }
    ,
    i
}),
angular.module("cloud", []).factory("cloud", ["$http", "$q", function(a, b) {
    var c, d, e, f, g, h, i, j, k = {}, l = {}, m = 0;
    return k.ping = function() {
        var c, d = b.defer();
        return navigator.onLine ? (c = (new Date).getTime(),
        3e3 > c - m ? d.resolve() : a({
            method: "get",
            url: "authstat"
        }).then(function() {
            m = c,
            d.resolve()
        }, function() {
            d.reject()
        })) : d.reject(),
        d.promise
    }
    ,
    k.auth = function() {
        var c = b.defer();
        return i === !0 ? c.resolve() : i === !1 ? c.reject() : a({
            method: "get",
            url: "authstat",
            withCredentials: !0
        }).then(function(a) {
            var b = a.data;
            b.auth ? (k.uid = b.uid,
            c.resolve(),
            i = !0) : (c.reject(),
            i = !1)
        }, function() {
            c.reject()
        }),
        c.promise
    }
    ,
    k.hasCloudAccess = function(d, e) {
        var i = b.defer();
        return e = e || "",
        !d && c ? i.resolve(c) : g ? i.reject(g) : a({
            method: "get",
            url: "getsessiontime",
            withCredentials: !0,
            data: {
                id: e
            }
        }).then(function(a) {
            var b = a.data;
            b.error ? (g = {
                uid: b.uid || j || -1,
                noAccess: !0
            },
            i.reject(g)) : (j = b.uid,
            c = {
                time: b.time,
                uid: b.uid
            },
            i.resolve(c)),
            b.refTime && (h = 1e3 * b.refTime,
            f = (new Date).getTime())
        }, function() {
            g = {
                uid: j || -1
            },
            i.reject(g)
        }),
        i.promise
    }
    ,
    k.getTime = function() {
        if (h) {
            var a = (new Date).getTime();
            return h + (a - f + a % 1e3)
        }
        return (new Date).getTime()
    }
    ,
    k.storeSession = function(c) {
        var d = b.defer();
        return a({
            method: "POST",
            url: "storesession",
            withCredentials: !0,
            data: c
        }).then(function(a) {
            d.resolve(a.data)
        }, function() {
            d.reject()
        }),
        d.promise
    }
    ,
    k.getWoff2 = function(c) {
        var d = b.defer();
        return a({
            method: "POST",
            url: "woff2",
            withCredentials: !0,
            data: c
        }).then(function(a) {
            var b = a.data;
            b.error ? d.reject() : b.data && d.resolve(b.data)
        }, function() {
            d.reject()
        }),
        d.promise
    }
    ,
    k.getSession = function(c) {
        var d = b.defer()
          , e = 0
          , f = c.progress
          , g = c.id || "";
        return a({
            method: "POST",
            url: "getsession",
            withCredentials: !0,
            data: {
                id: g,
                onlyLength: !0
            }
        }).then(function(b) {
            e = Number(b.data),
            a({
                method: "POST",
                url: "getsession",
                withCredentials: !0,
                data: {
                    id: g
                },
                progress: function(a) {
                    "function" == typeof f && f({
                        total: e,
                        loaded: a.loaded
                    })
                }
            }).then(function(a) {
                d.resolve(a.data)
            }, function() {
                d.reject()
            })
        }),
        d.promise
    }
    ,
    k.getPurchases = function() {
        var c = b.defer();
        return a({
            method: "POST",
            url: "purchases/0",
            withCredentials: !0
        }).then(function(a) {
            c.resolve(a.data)
        }, function() {
            c.reject()
        }),
        c.promise
    }
    ,
    k.getExpTime = function() {
        var c = b.defer();
        return l.timestamp && (new Date).getTime() - l.timestamp < 10368e5 ? c.resolve(l.daysLeft) : a({
            method: "POST",
            url: "purchases/1",
            withCredentials: !0
        }).then(function(a) {
            l.daysLeft = 0 / 0,
            l.timestamp = (new Date).getTime(),
            a.data.length ? (a.data.forEach(function(a) {
                (isNaN(l.daysLeft) || a.daysLeft > l.daysLeft) && (l.daysLeft = a.daysLeft)
            }),
            c.resolve(l.daysLeft)) : c.resolve(0 / 0)
        }),
        c.promise
    }
    ,
    k.host = function(c) {
        var f = b.defer()
          , g = c.hash;
        return g === d && c.onlyDev === !0 ? (f.resolve(e),
        f.promise) : (d = g,
        a({
            method: "POST",
            url: "host",
            withCredentials: !0,
            data: c
        }).then(function(a) {
            e = a.data,
            f.resolve(e)
        }, function() {
            f.reject()
        }),
        f.promise)
    }
    ,
    k.contact = function(c) {
        var d, e = b.defer(), f = "security=2&submitted=IcoMoon";
        c.email || (c.email = "support@icomoon.io",
        c.msg += "<br /><br />No email address was provided.");
        for (d in c)
            f += "&" + (d + "=" + c[d]);
        return a({
            method: "POST",
            url: "https://icomoon.io/contact/m.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data: f
        }).then(function(a) {
            /error/.test(a.data) ? e.reject() : e.resolve()
        }, function() {
            e.reject()
        }),
        e.promise
    }
    ,
    k
}
]),
angular.module("search", []).factory("search", ["$http", "$q", function(a, b) {
    var c, d, e, f = {}, g = {
        query: "",
        arr: []
    }, h = [];
    e || (e = b.defer(),
    a({
        method: "GET",
        url: "icomoon-lib/dict.json"
    }).then(function(a) {
        h = a.data,
        e.resolve()
    }));
    var i = function(a, b, c) {
        var d, e, f, g, h, j, k = 0, l = 0, m = -1, n = !1;
        if (c = c || .65,
        b.length <= 2)
            return b === a;
        if (b = b.replace(/\s*/, "").toLowerCase().trim(),
        !b.length)
            return !1;
        if (b = b.split("/"),
        a = a.replace(/\s*/, "").toLowerCase().trim(),
        1 !== b.length) {
            for (d = 0; d < b.length; d += 1)
                if (i(a, b[d], d > 0 ? 1 : !1))
                    return !0;
            return !1
        }
        if (b = b[0],
        g = b.length,
        n = Math.min(g, a.length) >= 3 || Math.abs(a.length - g) / g <= 1 - c / 2,
        b === a || n && (a.match(new RegExp("^" + b,"i")) || a.match(new RegExp(b + "$","i"))))
            return !0;
        for (d = 0; g > d; d += 1)
            f = b[d],
            h = a.indexOf(f, m + 1),
            d && h !== m + 1 && (e = !0),
            -1 !== h ? (e || (m = h),
            a = a.split(""),
            a[h] = " ",
            a = a.join(""),
            k += 1) : (j = a.indexOf(f),
            l += -1 === j ? 1 : Math.abs(d - j));
        return l += Math.abs(g - a.length),
        k && !l && !e && g / a.length > c || (k - l) / a.length > c
    }
      , j = function(a) {
        var b, c, d, e, f, g, j, k = [];
        if ("string" == typeof a && (a = [a]),
        f = h.length,
        !f)
            return a;
        for (b = 0; b < a.length; b += 1) {
            for (j = [],
            c = 0; f > c; c += 1)
                for (g = h[c],
                d = 0,
                e = g.length; e > d; d += 1)
                    if (d || "number" != typeof g[d] || (e = g[d],
                    g = g.slice(1)),
                    i(g[d], a[b], .8)) {
                        j = j.concat(g);
                        break
                    }
            j.push(a[b]),
            k = k.concat(j)
        }
        return k
    };
    return f.match = function(a, b) {
        var c, d, e, f, h, k, l;
        if (!b || !a)
            return !1;
        if ("string" == typeof a)
            a = a.replace(/[\s\-\,_]+/g, " "),
            a = a.split(" ").concat([a.replace(/\s+/g, "")]);
        else if (a.slice) {
            for (a = a.slice(0),
            l = [],
            d = 0; d < a.length; d += 1)
                a[d] = a[d].replace(/[\s\-\,_]+/g, " "),
                a[d] = [a[d].replace(/\s+/g, "")].concat(a[d].split(" ")),
                l = l.concat(a[d]);
            a = l
        }
        if (g.query !== b) {
            for (g.query = b,
            "string" == typeof b && (b = b.replace(/\s+\/\s+/g, "/").replace(/[\s\-]+/g, " ").replace(/,+/g, ",").replace(/_/g, ""),
            b = b.split(" ").concat([b.replace(/\s+/g, "")])),
            l = j(b),
            g.arr = [],
            k = [],
            d = 0; d < l.length; d += 1)
                /\s/.test(l[d]) ? g.arr = g.arr.concat(l[d].split(/\s+/)) : k.push(l[d]);
            for (k = k.join("/"),
            d = 0; d < g.arr.length; d += 1)
                g.arr[d] = g.arr[d] + "/" + k;
            g.arr.length || (g.arr = [k])
        }
        for (b = g.arr,
        f = b.length,
        c = 0,
        d = 0; f > d; d += 1) {
            for (b[d] = b[d].trim(),
            e = 0,
            h = a.length; h > e; e += 1)
                if (i(a[e], b[d])) {
                    c += 1;
                    break
                }
            if (e === h)
                return !1
        }
        return c && c >= f
    }
    ,
    f.getExternalResults = function(e, g) {
        var h, i, j = b.defer(), k = [], l = [];
        return g = g || [],
        d ? d.resolve() : (d = b.defer(),
        a.get("icomoon-lib/map.json").then(function(a) {
            c = a.data,
            d.resolve()
        })),
        d.promise.then(function() {
            if (e) {
                for (i = [],
                h = 0; h < c.sets.length; h += 1)
                    -1 === g.indexOf(c.sets[h].metadata.name) && i.push(h);
                g = i;
                for (var a in c.tags)
                    c.tags.hasOwnProperty(a) && f.match(a, e) && (l = l.concat(c.tags[a]));
                for (i = JSON.parse(JSON.stringify(c.sets)),
                h = 0; h < i.length; h += 1)
                    i[h].dir = h,
                    i[h].icons = [];
                for (h = 0; h < l.length; h += 1)
                    i[l[h][0]] && -1 === i[l[h][0]].icons.indexOf(l[h][1]) && i[l[h][0]].icons.push(l[h][1]);
                for (h = 0; h < i.length; h += 1)
                    -1 !== g.indexOf(h) && i[h].icons.length && k.push(i[h]);
                k.dir = c.dir,
                j.resolve(k)
            } else
                j.resolve(k)
        }),
        j.promise
    }
    ,
    f
}
]),
angular.module("icomoonApp").directive("miIcon", ["template", function(a) {
    var b = a(['<div class="icon{{wide}}">', '<svg width="{{width}}" height="{{height}}" viewBox="0 0 {{width}} {{height}}" style="margin-left: calc(50% - {{offset}}em)">', '<g transform="scale({{scale}} {{scale}})">{{paths}}</g>', "</svg>", "</div>"].join(""))
      , c = a('<path{{attrs}} d="{{d}}"></path>')
      , d = function(a) {
        var b, c, d, e = [];
        for (d in a)
            a.hasOwnProperty(d) && (b = d.replace(/([A-Z])/g, "-$1").toLowerCase(),
            c = a[d],
            e.push(" " + b + '="' + c + '"'));
        return e.join("")
    };
    return {
        restrict: "E",
        scope: {
            icon: "=",
            height: "@",
            prevsize: "@"
        },
        link: function(a, e) {
            a.$watch(function() {
                return {
                    icon: a.icon,
                    prevSize: a.prevsize
                }
            }, function() {
                var f, g, h, i, j, k, l = [];
                for (j = a.icon.paths,
                i = j.length,
                f = a.icon.attrs || {},
                g = 0; i > g; g += 1)
                    l.push(c.fillup({
                        d: j[g],
                        attrs: f[g] ? d(f[g]) : ""
                    }));
                h = Number(a.height),
                k = a.icon.width,
                isNaN(k) && (k = h),
                e.html(b.fillup({
                    width: k,
                    height: h,
                    paths: l.join(""),
                    wide: k > 1.5 * h ? " icon-wide" : "",
                    offset: k / h / 2,
                    scale: Number(a.prevsize) / h
                }))
            }, !0)
        }
    }
}
]),
angular.module("icomoonApp").controller("MainCtrl", ["$scope", "$timeout", "$state", "$q", "$http", "search", "cloud", "template", "color", "swatch", "fileSaver", "message", "hotkeys", "glyphs", "svgPath", "session", "project", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    function r() {
        g.getExpTime().then(function(b) {
            var c;
            0 === b && a.cloudAccess && (b = 1),
            c = b + " day" + (1 === b ? "" : "s"),
            b > 0 && 10 > b ? (a.expiration = 4 > b ? "error" : "warning",
            a.expMessage = "Subscription ends in " + c,
            a.expMessage2 = "subscription will end in " + c + ".") : 0 >= b ? (a.expiration = "error",
            a.expMessage = "Subscription Expired",
            a.expMessage2 = "subscription has expired.<br />You may extend it to access your projects again.") : a.expiration = !1
        })
    }
    function s(a) {
        var b;
        setTimeout(function() {
            if (0 === L.indexOf(a))
                b = -99999;
            else
                try {
                    b = document.getElementById("setH" + a.id).offsetTop - 16,
                    b -= document.getElementById("toolbar").offsetHeight
                } catch (c) {
                    b = 0
                }
            window.scrollTo(0, b)
        }, 500)
    }
    function t(a) {
        var b, c, d;
        if (!a || !a.length)
            return 0;
        c = a.length;
        try {
            d = a[0].id
        } catch (e) {}
        for ((!d || isNaN(d)) && (d = 0),
        b = 1; c > b; b += 1)
            d = a[b] && a[b].id > d ? a[b].id : d;
        return d + 1
    }
    function u(a, b) {
        var c;
        a.selection || (a.selection = []),
        c = a.selection[b] || {
            id: t(a.selection)
        },
        a.selection[b] = c,
        c.order = 0
    }
    function v(a) {
        var b, c;
        for (c = a.icons.length,
        a.selection.length = c,
        b = 0; c > b; b += 1) {
            u(a, b);
            try {
                isNaN(a.icons[b].id) && (a.icons[b].id = t(a.icons))
            } catch (d) {}
        }
    }
    function w(a) {
        var b, c, d, e, f = 0, g = "", h = [], i = 0;
        for (a && !isNaN(a.setIdx) ? (f = a.setIdx,
        b = f + 1) : b = L.length,
        f; b > f; f += 1)
            if (c = L[f].selection.length,
            !L[f].invisible)
                for (a && a.selectionHash && (g += L[f].id),
                d = 0; c > d; d += 1)
                    L[f].icons[d] ? L[f].selection[d].order ? a && a.selectionHash ? g += JSON.stringify(L[f].icons[d]) : a && a.onlyCount ? i += 1 : (e = L[f].selection[d],
                    e.prevSize = e.prevSize || L[f].prevSize,
                    h.push({
                        icon: L[f].icons[d],
                        attrs: L[f].icons[d].attrs,
                        properties: e,
                        setIdx: f,
                        setId: L[f].id,
                        iconIdx: d
                    })) : (L[f].selection[d].order = 0,
                    isNaN(L[f].selection[d].id) && (L[f].selection[d].id = t(L[f].selection))) : L[f].selection.splice(d, 1);
        return a && a.selectionHash ? g : a && a.onlyCount ? i : (b = h.length,
        h)
    }
    function x() {
        var b, c = {};
        for (L = q.iconSets,
        b = 0; b < L.length; b += 1)
            c[L[b].id] = [];
        a.searchResults = c,
        a.project = q,
        a.pref = q.preferences,
        a.externalSets = [],
        a.fontPref = q.preferences.fontPref,
        a.imagePref = q.preferences.imagePref,
        a.edit && a.edit.refresh && a.edit.refresh(),
        a.set = L[a.setIdx]
    }
    function y(a) {
        function b(a) {
            return "number" == typeof a ? {
                f: a
            } : a
        }
        return Object.keys(a).forEach(function(c) {
            a[c] && a[c].map ? a[c] = a[c].map(b) : delete a[c]
        }),
        a
    }
    function z(a, b) {
        var c, d, e = a.length;
        if (b = b || "fill",
        !e)
            return !1;
        var c = a.map(function(a) {
            return void 0 !== a[b] && "none" !== a[b] ? a[b] + " " + a.opacity : ""
        }).filter(function(a) {
            return !!a
        });
        for (e = c.length,
        d = 1; e > d; d += 1)
            if (c[d] !== c[0])
                return !0;
        return !1
    }
    function A(a, b, c, d) {
        var e, f = {
            id: b
        }, g = 1;
        return a.paths ? (c !== R ? (e = o(a.paths),
        e.viewBox = {
            width: a.width || c,
            height: c
        },
        e = e.scale(R / c),
        f.width = e.viewBox.width,
        f.paths = e.getPathData(!0)) : (f.paths = a.paths,
        a.width && (f.width = a.width)),
        f.attrs = a.attrs || []) : (c = c || a.viewBox.height,
        c !== R && (g = R / c,
        a.scale(g)),
        f.paths = a.getPathData(!0),
        f.attrs = a.getAttrs(!0).map(function(a) {
            return a.strokeWidth > 0 && (a.strokeWidth *= g),
            a
        }),
        isNaN(a.viewBox.width) || a.viewBox.width === R || (f.width = a.viewBox.width)),
        f.isMulticolor = z(f.attrs),
        f.isMulticolor2 = z(f.attrs, "stroke"),
        a.colorPermutations && (f.colorPermutations = a.colorPermutations),
        a.tags && (f.tags = a.tags),
        a.kerning && (f.kerning = a.kerning),
        a.defaultCode && (f.defaultCode = a.defaultCode),
        f.grid = d || 0,
        f
    }
    function B(a) {
        var b, c, d, e, f, g, h = {
            selection: []
        };
        if ("string" == typeof a) {
            for (e = L.length,
            b = 0; e > b; b += 1)
                if (L[b].metadata.name === a)
                    return L[b];
            return B({
                metadata: {
                    name: a
                }
            })
        }
        if (a = a || {},
        h.id = t(L),
        h.metadata = a.metadata || {},
        delete h.metadata.iconsHash,
        !h.metadata.name) {
            for (f = [],
            b = 0,
            e = L.length; e > b; b += 1)
                f.push(L[b].metadata.name);
            if (g = "Untitled Set",
            -1 !== f.indexOf(g)) {
                for (d = 2; -1 !== f.indexOf(g + " " + d); )
                    d += 1;
                g = g + " " + d
            }
            h.metadata.name = g
        }
        h.height = R,
        c = a.icons || [],
        e = c.length;
        try {
            h.prevSize = a.prevSize && a.prevSize <= 128 ? a.prevSize : a.selection[0].prevSize || 32
        } catch (i) {
            h.prevSize = 32
        }
        for (g = t(h.icons),
        h.icons = [],
        h.icons[c.length - 1] = 0,
        a.selection ? (h.selection = a.selection,
        h.selection.forEach(function(a, b) {
            a.id = b
        })) : v(h),
        b = 0; e > b; b += 1)
            c[b].liga && Array.isArray(c[b].liga) && (h.selection[b].ligatures = c[b].liga.join(", ")),
            c[b] = A(c[b], g + b, a.height, c[b].grid || h.metadata.grid),
            c[b].colorPermutations && (c[b].colorPermutations = y(c[b].colorPermutations));
        return h.icons = c,
        L.unshift(h),
        h
    }
    function C(a) {
        a && a.name && (q.preferences.fontPref.metadata.fontFamily = 'krDataFont'||a.name),
        a && a.url && (q.preferences.fontPref.metadata.fontURL = a.url),
        a && a.designer && (q.preferences.fontPref.metadata.designer = a.designer),
        a && a.designerURL && (q.preferences.fontPref.metadata.designerURL = a.designerURL),
        a && a.license && (q.preferences.fontPref.metadata.license = a.license),
        a && a.licenseURL && (q.preferences.fontPref.metadata.licenseURL = a.licenseURL),
        a && a.description && (q.preferences.fontPref.metadata.description = a.description),
        a && a.copyright && (q.preferences.fontPref.metadata.copyright = a.copyright),
        a && a.majorVersion && (q.preferences.fontPref.metadata.majorVersion = a.majorVersion),
        a && a.minorVersion && (q.preferences.fontPref.metadata.minorVersion = a.minorVersion),
        a && a.includeMetadata && (q.preferences.fontPref.includeMetadata = a.includeMetadata)
    }
    function D(a) {
        var b;
        return void 0 === a.isMulticolor && (a.isMulticolor = z(a.attrs)),
        void 0 === a.isMulticolor2 && (a.isMulticolor2 = z(a.attrs, "stroke")),
        a.isMulticolor && a.isMulticolor2 || (b = i([0, 0, 0]),
        a.attrs = a.attrs.map(function(c) {
            if (!a.isMulticolor)
                try {
                    c.fill && "none" !== c.fill && i(c.fill).distance(b) < 30 && delete c.fill
                } catch (d) {
                    delete c.fill
                }
            if (!a.isMulticolor2)
                try {
                    i(c.stroke).distance(b) < 30 && delete c.stroke
                } catch (d) {
                    delete c.stroke
                }
            return c
        })),
        a
    }
    function E(a) {
        return a = a.slice(0),
        a.forEach(function(b, c) {
            a[c] = parseInt(b.join(""), 10)
        }),
        a.sort().join("")
    }
    function F(b, c) {
        var d, e, f, g, h;
        c.colorThemes && c.colorThemes[0] || a.extractColorTheme(c),
        c.colorThemes && c.colorThemes[0] && (e = c.colorThemes[c.colorThemeIdx].slice(0),
        g = E(e),
        b.forEach(function(a) {
            if (!a.colorPermutations || !a.colorPermutations[g]) {
                for (e.forEach(function(a, b) {
                    e[b] = i(a).toString()
                }),
                d = [],
                f = 0; f < a.attrs.length; f += 1)
                    d[f] = {},
                    a.attrs[f] && a.attrs[f].fill && "none" !== a.attrs[f].fill && (h = e.indexOf(i(a.attrs[f].fill).toString()),
                    -1 === h && (h = 0),
                    d[f].f = h),
                    a.attrs[f] && a.attrs[f].strokeWidth > 0 && (h = e.indexOf(i(a.attrs[f].stroke).toString()),
                    -1 === h && (h = 0),
                    d[f].s = h);
                a.colorPermutations = a.colorPermutations || {},
                a.colorPermutations[g] = d
            }
        }))
    }
    function G(b) {
        b = b || a.set,
        a.currentTheme = b.colorThemes[b.colorThemeIdx].slice(0),
        a.currentTheme.forEach(function(b, c) {
            a.currentTheme[c] = {
                hex: i(b).toNumber()
            }
        }),
        a.currentTheme.idx = a.currentTheme.idx || 0
    }
    function H(a) {
        function b(a, c) {
            var d, e, f = 0;
            if (isNaN(a) || isNaN(c)) {
                if (a && a.distance && c && c.distance)
                    f = a.distance(c);
                else if (Array.isArray(a) && Array.isArray(c)) {
                    for (e = Math.min(a.length, c.length),
                    d = 0; e > d; d += 1)
                        f += Math.pow(b(a[d], c[d]), 2);
                    f = Math.sqrt(f)
                }
            } else
                f = a - c;
            return f
        }
        function c(a, c) {
            var d, e = a.length < c.length ? a.length : c.length, f = 0;
            for (d = 0; e > d; d += 1)
                f += Math.pow(b(a[d], c[d]), 2);
            return Math.sqrt(f)
        }
        function d(a) {
            var b = [];
            return a.forEach(function(c) {
                var d = [];
                a.forEach(function(a) {
                    c !== a && d.push(c.color.distance(a.color, {
                        l: 1,
                        a: 0,
                        b: 0
                    }))
                }),
                b.push(d)
            }),
            b
        }
        function e(a) {
            function b(d, e) {
                var f, g;
                if (1 === e)
                    return "function" == typeof a.func && a.func(),
                    c += 1,
                    void 0;
                if (isNaN(a.max) || !(c >= a.max)) {
                    for (f = 0; e - 1 > f; f += 1)
                        b(d, e - 1),
                        0 === e % 2 ? (g = d[f],
                        d[f] = d[e - 1],
                        d[e - 1] = g) : (g = d[0],
                        d[0] = d[e - 1],
                        d[e - 1] = g);
                    b(d, e - 1)
                }
            }
            var c = 0;
            b(a.arr, a.arr.length)
        }
        var f, g, h, j, k, l, m, n, o, p, q = {};
        return g = a.theme1.map(function(a) {
            return i(a).toNumber()
        }),
        h = a.theme2.map(function(a, b) {
            return {
                color: i(a),
                idx: b
            }
        }),
        f = [],
        a.icon.attrs.forEach(function(a, b) {
            var c, d, e;
            a.fill && "none" !== a.fill && (c = i(a.fill),
            d = g.indexOf(c.toNumber()),
            0 > d && (d = 0),
            f.push({
                color: c,
                t1Ref: d,
                type: "f",
                idx: b
            })),
            a.stroke && a.strokeWidth > 0 && (e = i(a.stroke),
            d = g.indexOf(e.toNumber()),
            0 > d && (d = 0),
            f.push({
                color: e,
                t1Ref: d,
                type: "s",
                idx: b
            }))
        }),
        j = f.map(function(a) {
            return a.color
        }),
        l = d(f),
        n = f.map(function(a) {
            return a.color.toLAB().l
        }),
        e({
            arr: h,
            func: function() {
                var a, b, e, g, i = [];
                f.forEach(function(a, b) {
                    var c = a.t1Ref % h.length;
                    a.color = h[c].color,
                    i[b] = h[c].idx
                }),
                k = f.map(function(a) {
                    return a.color
                }),
                m = d(f),
                o = f.map(function(a) {
                    return a.color.toLAB().l
                }),
                a = c(j, k),
                b = c(l, m),
                e = c(n, o),
                g = Math.sqrt(a * a + b * b + 10 * e * e),
                (isNaN(q.dist) || q.dist > g) && (q.dist = g,
                q.colors = i)
            },
            max: 720
        }),
        p = [],
        f.forEach(function(a, b) {
            var c = p[a.idx] || {};
            c[a.type] = q.colors[b],
            p[a.idx] = c
        }),
        p
    }
    function I(a) {
        var b, c, d;
        b = a.colorThemes[a.colorThemeIdx].slice(0),
        d = [],
        b.forEach(function(a, b) {
            d[b] = i(a).toString()
        }),
        c = E(b),
        a.icons.forEach(function(a) {
            var b;
            if (a.colorPermutations || (a.colorPermutations = {}),
            !a.colorPermutations[c] || a.colorPermutations[c].length !== a.attrs.length)
                for (a.colorPermutations[c] = [],
                b = 0; b < a.attrs.length; b += 1)
                    a.colorPermutations[c][b] = a.colorPermutations[c][b] || {},
                    a.colorPermutations[c][b].f = d.indexOf(i(a.attrs[b].fill).toString()),
                    -1 === a.colorPermutations[c][b].f && (a.colorPermutations[c][b].f = 0),
                    a.attrs[b] && a.attrs[b].strokeWidth > 0 && (a.colorPermutations[c][b].s = d.indexOf(i(a.attrs[b].stroke).toString()),
                    -1 === a.colorPermutations[c][b].s && (a.colorPermutations[c][b].s = 0))
        })
    }
    function J(a) {
        return /^stroke=/.test(a) || /^fill=/.test(a) || /^opacity/.test(a) ? 0 : 1
    }
    function K(a) {
        try {
            window._gaq.push(["_trackEvent", "Search", "No Results", a.toLowerCase()])
        } catch (b) {}
    }
    var L, M, N, O, P, Q, R = 1024;
    a.externalSets = [],
    g.auth().then(function() {
        a.signedIn = !0
    }, function() {
        a.signedIn = !1
    }),
    p = p(q.metadata.created),
    a.isSyncing = p.isSyncing,
    g.hasCloudAccess().then(function() {
        a.cloudAccess = !0
    }, function() {
        a.cloudAccess = !1
    }),
    a.scrollPositions = {},
    a.tmp = {},
    a.$on("$stateChangeSuccess", function() {
        var b = c.current.name;
        a.tab = b,
        a.search = "",
        setTimeout(function() {
            var c = a.scrollPositions[b] || 0;
            window.scrollTo(0, c)
        }, 100)
    }),
    a.$on("$stateChangeStart", function() {
        a.scrollPositions[c.current.name] = window.scrollY
    }),
    r(),
    setInterval(r, 10368e5),
    a.getNextId = t,
    a.getSetHash = function(a) {
        var b, c = a.icons, d = c.length, e = [];
        for (b = 0; d > b; b += 1)
            e.push(c[b].paths.join("")),
            c[b].tags && e.push(c[b].tags.join(""));
        return e.join("").hashCode()
    }
    ,
    a.clearSelection = function() {
        var a, b = L.length;
        for (a = 0; b > a; a += 1)
            v(L[a])
    }
    ,
    a.selectAllNone = function(a, b) {
        var c, d, e, f = 0, g = "number" == typeof a ? L[a] : a, h = g.selection, i = 0;
        if (d = h.length,
        e = d / 2,
        "undefined" === b)
            for (c = 0; d > c && (h[c].order ? i += 1 : f += 1,
            !(i > e)); c += 1)
                if (f > e) {
                    b = !0;
                    break
                }
        h.forEach(function(a, c) {
            b ? (a.order = N,
            N += 1) : u(g, c)
        })
    }
    ,
    a.getSelectedIcons = w,
    function() {
        var b = !1
          , c = !1;
        a.getSelectionCount = function() {
            return c === !1 ? (c = w({
                onlyCount: !0
            }),
            a.$parent.selectionCount = c,
            c) : (b || (b = setTimeout(function() {
                c = !1,
                b = !1
            }, 750)),
            a.$parent.selectionCount = c,
            c)
        }
    }(),
    a.getSelectionHash = function() {
        return w({
            selectionHash: !0
        })
    }
    ,
    function() {
        var b, c, d, e, f, g, h, i, j, k, l, m = [];
        for (a.normSize = R,
        a.mode = "select",
        a.edit = {},
        a.visiblePanels = {},
        M = [],
        M.idx = 0,
        q.preferences = q.preferences || {},
        void 0 === q.preferences.showGlyphs && (q.preferences.showGlyphs = !0),
        void 0 === q.preferences.showCodes && (q.preferences.showCodes = !0),
        void 0 === q.preferences.showQuickUse && (q.preferences.showQuickUse = !0),
        void 0 === q.preferences.showQuickUse2 && (q.preferences.showQuickUse2 = !0),
        void 0 === q.preferences.showSVGs && (q.preferences.showSVGs = !0),
        q.preferences.fontPref = q.preferences.fontPref || {
            prefix: "icon-",
            metadata: {},
            metrics: {
                emSize: 1024,
                baseline: 6.25,
                whitespace: 50
            }
        },
        q.preferences.imagePref = q.preferences.imagePref || {
            prefix: "icon-",
            png: !0,
            useClassSelector: !0,
            color: 0,
            bgColor: 16777215
        },
        M.size = q.preferences.historySize || 100,
        q.preferences.historySize = M.size,
        x(),
        g = L.length,
        j = [],
        d = 0; g > d; d += 1) {
            for ((isNaN(L[d].id) || -1 !== j.indexOf(L[d].id)) && (L[d].id = t(L)),
            j.push(L[d].id),
            L[d].prevSize = L[d].prevSize || 32,
            L[d].metadata = L[d].metadata || {
                name: "Untitled Set"
            },
            b = L[d].icons.filter(function(a) {
                return "object" == typeof a
            }),
            L[d].icons = b,
            f = L[d].height,
            h = b.length,
            f !== R ? (k = R / f,
            L[d].height = R) : k = 0,
            c = [],
            e = 0; h > e; e += 1)
                b[e] && ((isNaN(b[e].id) || -1 !== c.indexOf(b[e].id)) && (b[e].id = t(b)),
                c.push(b[e].id),
                b[e].grid = b[e].grid || 0,
                k && (i = o(b[e].paths),
                i.viewBox = {
                    width: b[e].width || f,
                    height: f
                },
                i.scale(k),
                b[e].paths = i.getPathData(!0),
                b[e].width = i.viewBox.width,
                i.viewBox.width === R && delete b[e].width,
                delete b[e].height),
                b[e].attrs || (b[e].attrs = []),
                "object" == typeof b[e].colorPermutations && (b[e].colorPermutations = y(b[e].colorPermutations)));
            if (b = L,
            !b[d].selection || b[d].selection.length !== b[d].icons.length || b[d].selection[0] && isNaN(b[d].selection[0].id))
                v(b[d]);
            else
                for (h = b[d].selection.length,
                e = 0; h > e; e += 1)
                    l = b[d].selection[e],
                    l && l.order && m.push(l)
        }
        for (m.sort(function(a, b) {
            return a.order - b.order
        }),
        N = 1,
        d = 0,
        g = m.length; g > d; d += 1)
            N = N > m[d].order ? N : m[d].order;
        if (N += 1,
        N > 9999999) {
            for (d = 0; g > d; d += 1)
                m[d].order = d + 1;
            N = m.length + 1 || 1
        }
    }(),
    a.changeIcons = function(b, c, d, e) {
        var f, g, h, i, j, k, l = [], m = e ? a.externalSets[c] : L[c], n = "delete" === d, o = "edit" === d, p = !1, q = function(a) {
            i[a] || (i[a] = {}),
            j = i[a].order,
            j ? u(m, a) : (i[a].order = N,
            N += 1)
        }, r = function(a) {
            l.push(g[a])
        }, s = function(a) {
            i[a] = 0,
            !p && m.icons[a].isMulticolor && (p = !0),
            m.icons[a] = 0
        }, t = function() {
            var c, d, e;
            c = b[0],
            d = b[1],
            isNaN(d) && (d = m.icons.length - 1),
            e = m.icons.splice(c, 1)[0],
            m.icons.splice(d, 0, e),
            e = m.selection.splice(c, 1)[0],
            m.selection.splice(d, 0, e),
            a.search && (e = a.searchResults[m.id].splice(c, 1)[0],
            a.searchResults[m.id].splice(d, 0, e))
        };
        if (m) {
            if (i = m.selection,
            g = m.icons,
            n)
                k = s;
            else if (o)
                k = r;
            else {
                if ("move" === d)
                    return t(),
                    void 0;
                k = q
            }
            if (b.forEach(k),
            n)
                k = function(a) {
                    return !!a
                }
                ,
                m.icons = g.filter(k),
                a.search && (a.history.ignore = !1,
                a.searchResults[m.id] = a.searchResults[m.id].filter(function(a, b) {
                    return m.selection[b]
                })),
                m.selection = i.filter(k),
                p && a.extractColorTheme(m);
            else if (o) {
                if (h = a.edit,
                h.selection = !1,
                1 !== l.length || b.noNavigation)
                    h.icons = l,
                    h.idx = 0,
                    h.properties = b.properties,
                    h.selection = m.selection.filter(function(c, d) {
                        return a.search ? -1 !== b.indexOf(d) && a.searchResults[m.id][d] : -1 !== b.indexOf(d)
                    });
                else {
                    if (a.search) {
                        for (h.icons = [],
                        i = [],
                        h.idx = 0,
                        f = 0; f < m.icons.length; f += 1)
                            a.searchResults[m.id][f] && (h.icons.push(m.icons[f]),
                            i.push(m.selection[f]),
                            h.idx || b[0] !== f || (h.idx = h.icons.length - 1));
                        h.selection = i
                    } else
                        h.icons = m.icons,
                        h.idx = b[0];
                    h.properties = !1
                }
                h.set = m,
                a.visiblePanels.edit = !0,
                h.refresh = function() {
                    var e = h.idx;
                    j = a.visiblePanels.edit,
                    a.changeIcons(b, c, d),
                    a.edit.idx = e,
                    a.visiblePanels.edit = j
                }
            }
        }
    }
    ,
    function() {
        var c, d = 0;
        a.$watch(function() {
            return d = q.time,
            delete q.time,
            JSON.stringify(q)
        }, function(e, f) {
            b.cancel(c),
            c = b(function() {
                P ? P = !1 : (M.idx > -1 && (M[M.idx] = f),
                a.history.ignore || M[M.idx] === e ? a.history.ignore = !1 : (M.idx += 1,
                M[M.idx] = e,
                M.splice(M.idx + 1),
                M.length > M.size + 1 && (M.shift(),
                M.idx -= 1))),
                a.history.noUndo = M.idx < 1,
                a.history.noRedo = M.idx > M.length - 2,
                q.time = d,
                p.save(q)
            }, 500)
        })
    }(),
    a.history = function(b) {
        M.idx + b > -1 && M.idx + b < M.length && (JSON.stringify(M[M.idx + b]) === JSON.stringify(q) ? (M.splice(M.idx + b, 1),
        0 > b && (M.idx -= 1)) : (M.idx += b,
        q = JSON.parse(M[M.idx]),
        x(),
        P = !0)),
        a.history.noUndo = M.idx < 1,
        a.history.noRedo = M.idx > M.length - 2,
        a.history.idx = M.idx
    }
    ,
    a.history.noUndo = !0,
    a.history.noRedo = !0,
    a.isMulticolor = z,
    a.newSetFromSelection = function(b, c) {
        var d, e, f, g, h = [], i = [], j = {
            icons: h
        };
        for (d = !b,
        b = b || w(),
        a.search && (b = b.filter(function(b) {
            return a.searchResults[b.setId][b.iconIdx]
        })),
        e = 0,
        f = b.length; f > e; e += 1)
            h[e] = JSON.parse(JSON.stringify(b[e].icon)),
            delete h[e].colorPermutations,
            c && (i[e] = JSON.parse(JSON.stringify(b[e].properties))),
            d && (b[e].properties.order = 0);
        c && (j.selection = i),
        g = B(j),
        a.extractColorTheme(g),
        a.search && (j = [],
        i.forEach(function() {
            j.push(!0)
        }),
        a.searchResults[g.id] = j),
        window.scrollTo(0, 0)
    }
    ,
    a.removeSet = function(b, c) {
        var d;
        c && (d = w({
            setIdx: b
        })),
        L.splice(b, 1),
        c && d.length && a.newSetFromSelection(d, !0)
    }
    ,
    a.simplifyIcon = D,
    function() {
        var b;
        a.import = function(c, e, f) {
            setTimeout(function() {
                window.callPhantom('upload');
            }, 10);
            function g(a) {
                var b, c = {};
                return a = a.replace(/\.[^\.]*$/, ""),
                b = a.match(/U0x[0-9A-F]+/i),
                b && (b = parseInt(b[0].slice(3), 16),
                c.defaultCode = b,
                a = a.replace(/U0x[0-9A-F]+/i, "")),
                /[^\d]/g.test(a) && (a = a.replace(/^[\d]+/, "")),
                a = a.replace(/^[\-_\.\s]+|[\-_\.\s]+$/, ""),
                c.name = a,
                c.tags = a.split("#").filter(function(a) {
                    return a
                }),
                c
            }
            function h(a) {
                var b, c, d, e, f = a.path, g = a.name, h = a.tags, i = a.importSize;
                if (!f)
                    return K.reject(),
                    K.promise;
                i && (v && "number" == typeof v.width && v.width === v.height && i.width !== i.height && i.height !== v.height && (d = Math.max(i.width, i.height),
                b = d - i.height,
                c = d - i.width,
                f.translate(0, b / 2),
                f.viewBox.height = d,
                f.translate(c / 2, 0),
                f.viewBox.width = d),
                G.metadata.importSize = i,
                !G.prevSize && "number" == typeof i.height && i.height <= 128 && (G.prevSize = i.height)),
                "number" != typeof k && (k = !1);
                var j = A(f, t(G.icons), !1, k);
                return j.tags || !h && !g || (h && h.length ? j.tags = h : g && (j.tags = [g])),
                isNaN(a.defaultCode) || (j.defaultCode = a.defaultCode),
                D(j),
                G.icons.unshift(j),
                G.selection = G.selection || [],
                e = {
                    order: 0,
                    id: t(G.selection)
                },
                h && h.length && (e.name = j.tags.join(", ")),
                f.liga && Array.isArray(f.liga) && (e.ligatures = f.liga.join(", ")),
                G.selection.unshift(e),
                j
            }
            var i, j, k, m, o, p, r, u, v, w, y, z, E, G, H, I, J = [], K = d.defer(), M = [], N = /^[\d\-_\.\s]+|\.[^\.]*$/g, O = !1, P = /image.svg/;
            return c ? (r = c.length,
            r || l.show("Please choose SVG images, SVG fonts or JSONs exported by IcoMoon."),
            "number" == typeof e ? e >= 0 && (G = L[e],
            z = d.defer()) : e && e.icons ? G = e : E = !0,
            function() {
                for (m = 0; r > m; m += 1)
                    if (P.test(c[m].type)) {
                        if (y = n(c[m].file),
                        1 === y.length && !v)
                            for (u = r,
                            u > 10 && (u = 10),
                            v = {},
                            o = 0; u > o && u > 4; o += 1)
                                try {
                                    I = n(c[o].file),
                                    I = {
                                        width: Math.round(I[0].viewBox.width),
                                        height: Math.round(I[0].viewBox.height)
                                    },
                                    v.width && v.height ? (v.width = Math.max(v.width, I.width),
                                    v.height = Math.max(v.height, I.height)) : v = I
                                } catch (e) {
                                    I = !1
                                }
                        if (y.length > 1) {
                            for (I = y.metadata || {},
                            I.name || (I.name = c[m].name.replace(N, "")),
                            I = B({
                                icons: y,
                                metadata: I
                            }),
                            o = 0; o < I.icons.length; o += 1)
                                delete I.icons[o].attrs;
                            y.fontMetrics && l.show({
                                message: "The glyphs in your SVG font were loaded.<br />Use this font's metrics and metadata when exporting fonts?",
                                firstButton: {
                                    caption: "Yes"
                                },
                                secondButton: {
                                    caption: "No",
                                    focused: !0
                                }
                            }).then(function(a) {
                                "Yes" === a && (q.preferences.fontPref.metrics.baseline = y.fontMetrics.baseline,
                                q.preferences.fontPref.metrics.whitespace = y.fontMetrics.whitespace,
                                C(y.metadata),
                                x())
                            })
                        } else {
                            try {
                                I = {
                                    width: Math.round(y[0].viewBox.width),
                                    height: Math.round(y[0].viewBox.height)
                                }
                            } catch (e) {
                                I = !1
                            }
                            if (O = O || y[0].strokeWarning,
                            G)
                                z || (z = d.defer(),
                                z.resolve());
                            else {
                                if (L.length > 0)
                                    try {
                                        for (j = [],
                                        b && -1 !== L.indexOf(b) && j.push(b),
                                        o = 0; o < L.length && -1 !== L[o].metadata.name.indexOf("Untitled Set"); o += 1)
                                            j.push(L[o]);
                                        for (0 === j.length && L.length > 0 && (j = [L[0]]),
                                        o = 0; o < j.length; o += 1)
                                            if ((j[o].metadata.importSize || {}).height === I.height) {
                                                G = j[o];
                                                break
                                            }
                                        G || (G = B({
                                            prevSize: I
                                        }))
                                    } catch (e) {
                                        G = B()
                                    }
                                else
                                    G = B();
                                z = d.defer()
                            }
                            for (G.invisible = !1,
                            b = G,
                            J = [],
                            p = 0; p < G.selection.length; p += 1)
                                try {
                                    J.push(G.selection[p].name || G.icons[p].tags[0])
                                } catch (e) {}
                            for (p = 0; r > p; p += 1)
                                if (o = J.indexOf(g(c[p].name).name),
                                -1 !== o && -1 === J.indexOf(g(c[p].name).name, o + 1) && (1 !== G.icons[o].tags.length || G.selection[o].name && G.icons[o].tags[0] !== G.selection[o].name || !isNaN(G.icons[o].defaultCode) || !isNaN(G.selection[o].code) || G.selection[o].ligatures && G.selection[o].ligatures.length)) {
                                    l.show({
                                        message: "Replace existing icons?<br />By replacing, your settings (tags, char codes, etc.) won't&nbsp;change.",
                                        firstButton: {
                                            caption: "Replace"
                                        },
                                        secondButton: {
                                            caption: "Reimport",
                                            focused: !0
                                        }
                                    }).then(function(a) {
                                        z.resolve("Replace" === a)
                                    });
                                    break
                                }
                            p === r && z.resolve(),
                            "number" == typeof c[m].grid ? k = c[m].grid : (k = a.getGridSize(G),
                            k = k && k[0]),
                            w = g(c[m].name),
                            z.promise.then(function(a, b, c) {
                                return function(d) {
                                    o = -1,
                                    d && (o = J.indexOf(a.name),
                                    -1 !== o && (b = D(A(c)),
                                    G.icons[o].paths = b.paths,
                                    G.icons[o].width = b.width,
                                    G.icons[o].attrs = b.attrs,
                                    M.push(G.icons[o]))),
                                    -1 === o && (M.push(h({
                                        path: c,
                                        name: a.name,
                                        tags: a.tags,
                                        importSize: b,
                                        defaultCode: a.defaultCode
                                    })),
                                    J && J.unshift(""))
                                }
                            }(w, I, y[0]))
                        }
                    } else {
                        try {
                            I = JSON.parse(c[m].file)
                        } catch (t) {
                            continue
                        }
                        H = I.IcoMoonType,
                        "icon-set" === H ? i = B({
                            icons: I.icons,
                            height: I.height,
                            metadata: I.metadata,
                            prevSize: I.prevSize,
                            selection: I.selection
                        }) : "selection" === H && !function() {
                            var b, c, d, e = {};
                            for (o = 0,
                            u = I.icons.length; u > o; o += 1)
                                d = I.icons[o].icon,
                                c = d.grid || "undefined",
                                e.hasOwnProperty(c) ? b = e[c] : (b = e[c] = {},
                                b.icons = [],
                                b.selection = [],
                                b.height = I.height,
                                b.metadata = I.metadata),
                                b.icons.push(d),
                                b.selection.push(I.icons[o].properties);
                            a.clearSelection();
                            for (c in e)
                                e.hasOwnProperty(c) && B(e[c]);
                            I.preferences && l.show({
                                message: "Your icon selection was loaded.<br />Would you like to load all the settings stored in your selection file?",
                                firstButton: {
                                    caption: "Yes"
                                },
                                secondButton: {
                                    caption: "No",
                                    focused: !0
                                }
                            }).then(function(a) {
                                "Yes" === a && (q.preferences = I.preferences,
                                x())
                            })
                        }(),
                        I.colorThemes && i && (i.colorThemes = I.colorThemes,
                        i.colorThemeIdx = I.colorThemeIdx || 0)
                    }
                z || (z = d.defer(),
                z.resolve()),
                z.promise.then(function() {
                    G && M.length && (a.extractColorTheme(G),
                    F(M, G)),
                    E && s(G),
                    f || (a.search = ""),
                    O && l.show('Strokes get ignored when generating fonts or CSH files.<br />You may <a target="_blank" href="https://icomoon.io/#docs/stroke-to-fill">convert them to fills</a> and reimport your SVG(s).'),
                    K.resolve()
                })
            }(),
            K.promise) : (K.reject(),
            K.promise)
        }
    }(),
    a.showInfo = function(b) {
        var c = L[b];
        a.setIdx = b,
        a.visiblePanels.info = !0,
        a.metadata = c.metadata,
        a.iconsCount = c.icons.length,
        a.set = c,
        a.colorTheme = a.extractColorTheme(c)
    }
    ,
    a.hasValidTheme = function(a) {
        var b;
        if (a.colorThemes)
            try {
                return b = a.colorThemes[a.colorThemeIdx],
                b.length >= 2 && b.length <= 15
            } catch (c) {
                return !1
            }
        return !1
    }
    ,
    a.setSet = function(b) {
        var c = L[b];
        a.setIdx = b,
        a.set = c,
        a.colorTheme = a.extractColorTheme(c),
        a.metadata = c.metadata
    }
    ,
    a.getGridSize = function(b) {
        var c, d, e, f;
        if (b = b || a.set,
        b && b.icons) {
            for (f = b.icons.length,
            c = 0; f > c; c += 1)
                if (d = b.icons[c],
                d.grid)
                    if (e) {
                        if (-1 === e.indexOf(d.grid) && (e.push(d.grid),
                        e.length > 3))
                            break
                    } else
                        e = [d.grid];
            if (e)
                return e.toString = function() {
                    var a, b;
                    return this.length ? this.length > 1 ? (b = this.slice(0),
                    b.forEach(function(a) {
                        a = a || "unknown"
                    }),
                    a = "mixed",
                    this.length < 4 && (a += " (" + b.join(", ") + ")"),
                    a) : 1 === this.length ? this[0] || "unknown" : void 0 : "unknown"
                }
                ,
                e.sort()
        }
    }
    ,
    a.colorThemeKey = E,
    a.clearAttrs = function(a) {
        var b = a.some(function(a) {
            return a.strokeWidth > 0
        });
        return b ? a.map(function(a) {
            return delete a.stroke,
            "none" !== a.fill && delete a.fill,
            a
        }) : []
    }
    ,
    a.removeColorTheme = function(b, c) {
        var d, e, f;
        c = c || a.set,
        b >= c.colorThemes.length || (b === c.colorThemeIdx && a.selectColorTheme(0),
        b < c.colorThemeIdx && (c.colorThemeIdx -= 1),
        a.colorThemeIdx.value = c.colorThemeIdx,
        f = c.colorThemes.splice(b, 1),
        d = E(f[0]),
        e = 0 === c.colorThemes.length,
        c.icons.forEach(function(b) {
            try {
                delete b.colorPermutations[d]
            } catch (c) {}
            e && (b.attrs = a.clearAttrs(b.attrs))
        }),
        e || G(c))
    }
    ,
    a.downloadColorTheme = function(b, c) {
        var d = "icomoon_color_theme"
          , e = k();
        c = c || a.set,
        b >= c.colorThemes.length || (e.add(d + ".ase", j(c.colorThemes[b]).getASE({
            name: "IcoMoon Theme"
        })),
        e.add(d + ".svg", j(c.colorThemes[b]).getSVG()),
        e.save(d + ".zip"))
    }
    ,
    a.editColorTheme = function(b, c, d) {
        var e, f, g, h, j, k, l;
        for (c = c || a.set,
        "number" != typeof d && (d = c.colorThemeIdx),
        I(c, d),
        e = c.colorThemes[d],
        k = E(e),
        b.forEach(function(a, b) {
            e[b] = i(a.hex).toArray()
        }),
        j = E(e),
        f = 0; f < c.icons.length; f += 1)
            if (g = c.icons[f],
            g.colorPermutations && g.colorPermutations[k] || F([g], c),
            l = g.colorPermutations[j] = g.colorPermutations[k],
            delete g.colorPermutations[k],
            l)
                for (h = 0; h < g.attrs.length; h += 1)
                    l[h] && l[h].f >= 0 && (g.attrs[h].fill = i(e[l[h].f]).toString()),
                    l[h] && l[h].s >= 0 && (g.attrs[h].stroke = i(e[l[h].s]).toString())
    }
    ,
    a.addColorPermutations = F,
    a.addColorTheme = function(b, c, d) {
        function e(a, b) {
            var c, d;
            return a.length > b.length ? (c = a,
            d = b) : (c = b,
            d = a),
            c = c.map(function(a) {
                return JSON.stringify(a)
            }),
            d.every(function(a) {
                return -1 !== c.indexOf(JSON.stringify(a))
            })
        }
        var f, g, h, j, k = 0;
        if (c = c || a.set,
        f = c.colorThemes,
        b = b.slice(0),
        b.forEach(function(a, c) {
            a && a.hex && (a = a.hex),
            "string" != typeof a && a.length || (b[c] = i(a).toArray())
        }),
        b.sort(function(a, b) {
            return i(a).toHSL().l - i(b).toHSL().l
        }),
        f && f[0]) {
            for (f = f.filter(function(a) {
                var d = !0;
                return g = E(a),
                a.length < b.length && e(a, b) && (d = !1),
                d || c.icons.forEach(function(a) {
                    try {
                        delete a.colorPermutations[g]
                    } catch (b) {}
                }),
                d
            }),
            c.colorThemes = f,
            h = E(b),
            k = 0; k < f.length && (j = f[k],
            g = E(j),
            g !== h && !e(b, j)); k += 1)
                ;
            k === f.length && f.push(b),
            F(c.icons, c)
        } else
            f = [b];
        return c.colorThemes = f,
        d && a.selectColorTheme(k),
        k
    }
    ,
    a.importColorTheme = function(b) {
        var c, d, e;
        if (e = {},
        b.length) {
            if (/ase/.test(b[0].type))
                e.ase = b[0].file;
            else if (/svg/.test(b[0].type))
                e.svg = b[0].file;
            else
                try {
                    e.json = JSON.parse(b[0].file)
                } catch (f) {}
            if (c = j(e).colors,
            c && c.length) {
                for (a.newColorTheme = [],
                d = 0; d < c.length; d += 1)
                    a.newColorTheme.push({
                        hex: i(c[d]).toNumber()
                    });
                a.newColorTheme.idx = 0
            }
        }
    }
    ,
    a.getColorString = function(a) {
        return i(a).toString()
    }
    ,
    a.selectColorTheme = function(b) {
        var c, d, e, f, g, h, j = a.set;
        j.colorThemeIdx !== b && (c = j.colorThemes[j.colorThemeIdx].slice(0),
        e = E(c),
        I(j, j.colorThemeIdx),
        j.colorThemeIdx = b,
        h = j.colorThemes[b].slice(0),
        f = E(h),
        c.forEach(function(a, b) {
            c[b] = i(a)
        }),
        h.forEach(function(a, b) {
            h[b] = i(a)
        }),
        h.forEach(function(a, b) {
            h[b] = a.toString()
        }),
        j.icons.forEach(function(a) {
            if (a.colorPermutations && a.colorPermutations[e])
                for (a.colorPermutations[f] && a.colorPermutations[f][0] && -1 === a.colorPermutations[f].indexOf(null ) || (a.colorPermutations[f] = H({
                    icon: a,
                    theme1: c,
                    theme2: h
                })),
                g = a.colorPermutations[f],
                d = 0; d < a.attrs.length; d += 1)
                    a.attrs[d].fill && "none" !== a.attrs[d].fill && (a.attrs[d].fill = h[g[d] && g[d].f || 0]),
                    a.attrs[d].stroke && "none" !== a.attrs[d].stroke && (a.attrs[d].stroke = h[g[d] && g[d].s || 0])
        }),
        G())
    }
    ,
    a.extractColorTheme = function(b) {
        function c(a) {
            delete a.colorPermutations
        }
        var d, e, f, g, h, j, k, l, m = [], n = b.icons.length;
        for (g = 0; n > g; g += 1)
            if (j = b.icons[g],
            j.attrs)
                for (h = 0; h < j.attrs.length; h += 1) {
                    if (e = j.attrs && j.attrs[h] && j.attrs[h].fill,
                    e && "none" !== e && (d = i(e).toString(),
                    d && -1 === m.indexOf(d) && (m.push(d),
                    m.length > 15)))
                        return b.icons.forEach(c),
                        b.colorThemes = [],
                        [];
                    if (f = j.attrs && j.attrs[h] && j.attrs[h].stroke,
                    f && j.attrs[h].strokeWidth > 0 && (d = i(f).toString(),
                    d && -1 === m.indexOf(d) && (m.push(d),
                    m.length > 15)))
                        return b.icons.forEach(c),
                        b.colorThemes = [],
                        []
                }
        if (m.length <= 1) {
            if (!b.colorThemes || !b.colorThemes[b.colorThemeIdx])
                return b.colorThemes = [],
                [];
            m = b.colorThemes[b.colorThemeIdx]
        }
        for (b.colorThemeIdx = a.addColorTheme(m, b),
        a.colorThemeIdx = {
            value: b.colorThemeIdx
        },
        a.newColorTheme = [],
        k = Math.round(192 / m.length),
        g = 0; g < m.length; g += 1)
            l = 32 + k * g,
            a.newColorTheme[g] = {
                hex: l + 256 * l + 65536 * l
            };
        return G(b),
        a.newColorTheme.idx = 0,
        b.colorThemes[b.colorThemeIdx]
    }
    ,
    a.duplicateColor = function() {
        var b = a.newColorTheme;
        b.length < 15 && (b.splice(b.idx, 0, {
            hex: b[b.idx].hex
        }),
        b.idx += 1,
        b.idx > b.length - 1 && (b.idx = b.length - 1))
    }
    ,
    a.removeColor = function() {
        var b = a.newColorTheme;
        b.length > 2 && (b.splice(b.idx, 1),
        b.idx -= 1,
        b.idx < 0 && (b.idx = 0))
    }
    ,
    a.editMetadata = function(b) {
        b && (a.metadata = b.metadata),
        a.visiblePanels.info = !1,
        a.visiblePanels.metadata = !0
    }
    ,
    a.showGridReset = function() {
        a.visiblePanels.info = !1,
        a.visiblePanels.gridReset = !0
    }
    ,
    a.showPaddings = function() {
        var b = a.getGridSize();
        !b || !b[0] || b.length > 1 ? a.showGridReset() : (a.tmp.gridSize = b,
        a.tmp.minPadding = -b + 1,
        a.tmp.maxPadding = b,
        a.tmp.padding = Math.round(b / 2),
        a.visiblePanels.info = !1,
        a.visiblePanels.paddings = !0)
    }
    ,
    a.resetGrids = function(b, c) {
        c = c || a.set,
        b = b || 0,
        c.icons.forEach(function(a) {
            a.grid = b
        }),
        a.visiblePanels.gridReset = !1
    }
    ,
    a.addPadding = function(b, c) {
        var d, e, f, g, h, i, j = a.tmp.gridSize;
        c = c || a.set,
        g = c.height || R,
        b = Math.round(b),
        b && (i = j / (b + j),
        h = j + b,
        d = e = g * i * (Math.floor(b / 2) / j),
        f = b % 2,
        1 === f ? e += g * i / j : -1 === f && (d += g * i / j),
        c.icons.forEach(function(a) {
            var b = o(a.paths);
            b.scale(i),
            b.translate(d, e),
            a.paths = b.getPathData(!0),
            a.grid = h
        }),
        c.prevSize = Math.round(c.prevSize / j * h))
    }
    ,
    a.showRearrange = function(b) {
        var c = L[b];
        a.setIdx = b,
        a.visiblePanels.rearrange = !0,
        a.set = c
    }
    ,
    a.rearrange = function() {
        var b, c, d = [], e = a.tmp.arrangeSelection, f = a.tmp.orderBy, g = a.set;
        if (d = g.icons.map(function(a, b) {
            return {
                icon: a,
                s: g.selection[b]
            }
        }),
        e && (d = d.filter(function(a) {
            return !!a.s.order
        })),
        f && "reverse" !== f)
            if ("name" === f ? d.sort(function(a, b) {
                return a = a.s.name || a.icon.tags && a.icon.tags[0],
                b = b.s.name || b.icon.tags && b.icon.tags[0],
                a > b ? 1 : b > a ? -1 : 0
            }) : "code" === f && d.sort(function(a, b) {
                return a = a.s.code || a.icon.defaultCode,
                b = b.s.code || b.icon.defaultCode,
                a - b
            }),
            e)
                for (c = 0,
                b = 0; b < g.icons.length; b += 1)
                    g.selection[b].order && (g.selection[b] = d[c].s,
                    g.icons[b] = d[c].icon,
                    c += 1);
            else
                for (g.icons = [],
                g.selection = [],
                b = 0; b < d.length; b += 1)
                    g.icons[b] = d[b].icon,
                    g.selection[b] = d[b].s;
        else if (e)
            for (d.reverse(),
            c = 0,
            b = 0; b < g.icons.length; b += 1)
                g.selection[b].order && (g.selection[b] = d[c].s,
                g.icons[b] = d[c].icon,
                c += 1);
        else
            g.icons.reverse(),
            g.selection.reverse();
        a.visiblePanels.rearrange = !1
    }
    ,
    a.getMultiples = function(a, b) {
        var c, d, e, f, g, h = [];
        for ("number" == typeof a && (a = [a]),
        e = a.length,
        b = Math.floor((b || 4) / e) || 1,
        d = 0; e > d; d += 1) {
            if (f = a[d],
            !f || isNaN(f)) {
                if (1 === e)
                    return [16, 20, 24, 32];
                f = 16
            }
            for (c = 0; b > c && (g = f * (c + 1),
            !(g > 100)); c += 1)
                -1 === h.indexOf(g) && h.push(g)
        }
        return h.length < b && (g = h[0] / 2,
        0 === h[0] % 2 && g >= 12 && h.unshift(g)),
        h
    }
    ,
    a.moveSet = function(a, b) {
        var c, d = L.indexOf(a);
        c = d + b,
        -1 !== d && c > -1 && c < L.length && (L.splice(d, 1),
        L.splice(c, 0, a))
    }
    ,
    a.hasAttrs = function(a) {
        var b;
        if (a.attrs && a.attrs.length) {
            for (b = 0; b < a.attrs.length && !(Object.keys(a.attrs[b]).length > 0); b += 1)
                ;
            if (b < a.attrs.length)
                return !0
        }
        return !1
    }
    ,
    a.downloadSet = function(b) {
        var c, d;
        b = b || a.set,
        c = JSON.parse(JSON.stringify(b)),
        delete c.id,
        delete c.invisible,
        c.icons.forEach(function(b, e) {
            try {
                d = c.selection[e].code,
                d && (b.defaultCode = d)
            } catch (f) {}
            b.defaultCode || delete b.defaultCode,
            b.isMulticolor || delete b.isMulticolor,
            b.isMulticolor2 || delete b.isMulticolor2,
            a.hasAttrs(b) || (delete b.attrs,
            delete b.colorPermutations),
            delete b.id
        }),
        c.selection.forEach(function(a) {
            delete a.tempChar,
            delete a.id,
            delete a.code
        }),
        c.preferences = q.preferences,
        c.IcoMoonType = "icon-set",
        c.metadata.iconsHash = a.getSetHash(b),
        k().save(c.metadata.name + ".json", JSON.stringify(c, null , "  "))
    }
    ,
    a.copySelectionToSet = function(b) {
        var c, d, e, f, g, h = [], i = [], j = L[b];
        if (j) {
            for (f = w(),
            a.search && (f = f.filter(function(b) {
                return a.searchResults[b.setId][b.iconIdx]
            })),
            d = t(j.icons),
            j.selection = j.selection || [],
            e = t(j.selection),
            c = 0; c < f.length; c += 1)
                g = JSON.parse(JSON.stringify(f[c].icon)),
                g.id = d + c,
                h.push(g),
                g = JSON.parse(JSON.stringify(f[c].properties)),
                g.id = e + c,
                g.order = 0,
                i.push(g);
            a.search && (g = [],
            h.forEach(function() {
                g.push(!0)
            }),
            a.searchResults[j.id] = g.concat(a.searchResults[j.id])),
            j.icons = h.concat(j.icons),
            j.selection = i.concat(j.selection)
        }
    }
    ,
    function() {
        var b, c, d = -1 !== navigator.userAgent.indexOf("Mac OS X");
        m.clear(),
        m.add({
            arr: [{
                keys: "opt",
                down: function() {
                    b = a.mode,
                    a.mode = "edit"
                },
                up: function() {
                    a.mode = b || c || "select",
                    b = !1
                }
            }, {
                keys: ["ctrl + alt", "cmd + opt"],
                down: function() {
                    c = b || a.mode || "select",
                    a.mode = "delete"
                },
                up: function() {
                    a.mode = c
                }
            }, {
                keys: ["ctrl + shift", "cmd + shift"],
                down: function() {
                    c = b || a.mode || "select",
                    a.mode = "move"
                },
                up: function() {
                    a.mode = c
                }
            }, {
                keys: ["ctrl + z", "cmd + z"],
                down: function() {
                    a.history(-1)
                }
            }, {
                keys: ["ctrl + y", "ctrl + shift + z", "cmd + shift + z", "cmd + y"],
                down: function() {
                    a.history(1)
                }
            }, {
                keys: "esc",
                up: function() {
                    Object.keys(a.visiblePanels).forEach(function(b) {
                        a.visiblePanels[b] = !1
                    })
                }
            }],
            scope: a
        }),
        a.tooltips = d ? {
            delMode: "Remove (Cmd + Opt)",
            editMode: "Edit (Opt)",
            moveMode: "Move (Cmd + Shift)",
            undo: "Undo (Cmd + Z)",
            redo: "Redo (Cmd + Shift + Z)"
        } : {
            delMode: "Remove (Ctrl + Alt)",
            editMode: "Edit (Alt)",
            moveMode: "Move (Ctrl + Shift)",
            undo: "Undo (Ctrl + Z)",
            redo: "Redo (Ctrl + Shift + Z)"
        },
        a.tooltips.selectMode = "Select"
    }(),
    a.vendorPrefix = function() {
        var a = window.getComputedStyle(document.documentElement, "");
        return (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1]
    }(),
    a.$watch("search", function(d) {
        var e, h, i, j, k, l = [];
        if (a.importExternalIcons(!0),
        d && (a.history.ignore = !0),
        a.externalSets = [],
        !d)
            return a.history.ignore = !1,
            void 0;
        for (e = 0,
        j = L.length; j > e; e += 1) {
            for (i = 0,
            k = L[e].icons.length; k > i; i += 1)
                h = L[e].icons[i],
                a.searchResults[L[e].id] = a.searchResults[L[e].id] || [],
                a.searchResults[L[e].id][i] = f.match(h.tags, d);
            l.push(a.searchResults[L[e].id])
        }
        return "select" !== c.current.name ? (a.history.ignore = !1,
        void 0) : (a.externalSets.status = !0,
        a.externalSets.status = "Connecting...",
        b.cancel(O),
        O = b(function() {
            g.ping().then(function() {
                if (a.search !== d)
                    return a.history.ignore = !1,
                    void 0;
                a.externalSets.status = "Searching other packs...",
                a.externalSets.icon = !0;
                var b = 0
                  , c = [];
                L.forEach(function(a) {
                    c.push(a.metadata.name)
                }),
                g.getPurchases().then(function(e) {
                    var g, h, i = [];
                    for (g = 0,
                    h = e.length; h > g; g += 1)
                        i[g] = e[g].product;
                    f.getExternalResults(d, c).then(function(c) {
                        return a.search !== d ? (a.history.ignore = !1,
                        void 0) : (c.forEach(function(a) {
                            var d = i.indexOf(a.productId);
                            a.premium && -1 !== d ? (a.premium = !1,
                            a.purchased = !0,
                            a.dir = e[d].svgslink) : a.dir = "https://icomoon.io/" + c.dir + "/" + a.dir + "/",
                            a.selection = [];
                            var f;
                            for (f = 0; f < a.icons.length; f += 1)
                                a.selection.push({
                                    order: 0,
                                    id: f
                                });
                            b += a.icons.length
                        }),
                        a.externalSets = c,
                        a.externalSets.icon = !1,
                        a.externalSets.status = b + " results from other packs",
                        clearTimeout(Q),
                        Q = setTimeout(function() {
                            0 === b && d.length > 2 && -1 === [].concat.apply([], l).indexOf(!0) && K(d)
                        }, 1e4),
                        void 0)
                    })
                })
            }, function() {
                a.externalSets.status = "Connection Failed",
                a.externalSets.icon = !1,
                a.history.ignore = !1
            })
        }, 300),
        void 0)
    }),
    a.importExternalIcons = function(b, c) {
        function g(a, b, c) {
            return function(d) {
                a.files = a.files || [],
                a.files.push({
                    type: "image/svg",
                    file: d.data,
                    name: r,
                    grid: c
                }),
                b.resolve(a)
            }
        }
        var h, i, j, k, l, m, n, o, p, q, r = a.search;
        if (h = a.externalSets)
            for (k = 0,
            m = h.length; m > k; k += 1) {
                for (o = h[k].selection,
                p = !1,
                j = [],
                l = 0,
                n = o.length; n > l; l += 1)
                    o[l].order && (p || (q = JSON.parse(JSON.stringify(h[k].metadata)),
                    q.name += " (subset)",
                    p = B(q.name),
                    p.metadata = q,
                    p.prevSize = h[k].prevSize),
                    i = d.defer(),
                    j.push(i.promise),
                    e({
                        method: "GET",
                        url: h[k].dir + h[k].icons[l] + ".svg",
                        withCredentials: h[k].purchased
                    }).then(g(p, i, h[k].grid)),
                    o[l].order = 0);
                j.length && d.all(j).then(function(d) {
                    var e = d[0]
                      , g = e.files;
                    delete e.files,
                    a.history.ignore = !1,
                    a.import(g, e, !0).then(function() {
                        var d, h = g.length;
                        for (d = 0; h > d; d += 1)
                            b && (e.selection[d].order = d + 1),
                            a.searchResults[e.id] = a.searchResults[e.id] || [],
                            a.searchResults[e.id][d] = f.match(e.icons[d].tags, a.search);
                        s(e),
                        c && (a.search = "")
                    })
                })
            }
    }
    ,
    a.hasExternalSelection = function() {
        var b, c, d, e = a.externalSets.length;
        for (b = 0; e > b; b += 1)
            for (d = a.externalSets[b],
            c = 0; c < d.selection.length; c += 1)
                if (d.selection[c].order)
                    return !0;
        return !1
    }
    ,
    a.stringifyAttrs = function(b, c) {
        var d, e, f, g = [], h = c && c.props;
        for (f in b)
            b.hasOwnProperty(f) && (d = f.replace(/([A-Z])/g, "-$1").toLowerCase(),
            e = b[f],
            c && c.scale && "stroke-width" === d && (e *= c.scale,
            e = a.fixed(e, 4)),
            "stroke" !== d && "fill" !== d || "none" === e || (e = i(e),
            e = c && c.xaml ? e.toString({
                hex: !0,
                argb: !0,
                forCSS: !0
            }) : e.toString({
                hex: !0,
                forCSS: !0
            })),
            g.push({
                key: d,
                val: e
            }));
        return b && b.strokeWidth > 0 && !b.stroke && g.push({
            key: "stroke",
            val: c && c.defaultColor || "#000"
        }),
        b && b.fill || g.push({
            key: "fill",
            val: c && c.defaultColor || "#000"
        }),
        g = g.filter(function(a) {
            var b = !1;
            return b = "opacity" === a.key.toLowerCase() && "1" === String(a.val) || "visibility" === a.key.toLowerCase() && /false/i.test(String(a.val)),
            b ? !1 : h && !h[a.key] ? !1 : !0
        }),
        g = c && c.css ? g.map(function(a) {
            return ("fill" === a.key ? "color" : a.key) + ":" + a.val + "; "
        }).join("; ") + ";" : c && c.xaml ? g.map(function(a) {
            var b = String(a.key).toLowerCase()
              , c = String(a.val).toLowerCase();
            if ("none" === c)
                return "";
            if ("stroke-width" === b)
                b = "StrokeThickness";
            else {
                if ("stroke-linecap" === b)
                    return "butt" === c && (c = "Flat"),
                    c = c[0].toUpperCase() + c.slice(1),
                    'StrokeStartLineCap="' + c + '" StrokeEndLineCap="' + c + '"';
                "stroke-linejoin" === b ? b = "StrokeLineJoin" : "stroke-miterlimit" === b && (b = "StrokeMiterLimit")
            }
            return b = b[0].toUpperCase() + b.slice(1),
            c = c[0].toUpperCase() + c.slice(1),
            b + '="' + c + '"'
        }).join(" ") : g.map(function(a) {
            return a.key + '="' + a.val + '"'
        }).sort(J).join(" "),
        (" " + g).replace(/\s+$/, "")
    }
    ,
    a.premiumAlert = function(a) {
        l.show({
            message: "<strong>" + a.metadata.name + "</strong> is a premium set. Would you like to purchase it?",
            firstButton: {
                caption: "Purchase"
            },
            secondButton: {
                caption: "Cancel",
                focused: !0
            }
        }).then(function(b) {
            "Purchase" === b && (window.location = a.metadata.url)
        })
    }
    ,
    a.sortByGrid = function(a) {
        var b, c, d, e = [], f = 0, g = {};
        if (a) {
            for (c = a.length,
            b = 0; c > b; b += 1)
                d = a[b].icon.grid || 0,
                g.hasOwnProperty(d) || (g[d] = {
                    idx: f,
                    arr: []
                },
                f += 1),
                g[d].arr.push(a[b]);
            for (d in g)
                g.hasOwnProperty(d) && e.push(g[d]);
            for (e.sort(function(a, b) {
                return a.idx - b.idx
            }),
            a = [],
            b = 0,
            c = e.length; c > b; b += 1)
                a = a.concat(e[b].arr);
            return a
        }
    }
    ,
    a.fixed = function(a, b) {
        return (isNaN(b) || 0 > b) && (b = 3),
        (a || 0).toFixed(b).replace(/\.0+$/, "").replace(/(\.[^0]+)0+$/, "$1")
    }
    ,
    a.round = function(a) {
        return Math.round(a)
    }
    ,
    a.showWarning = function(b) {
        b ? l.show(b) : l.show({
            message: "Your premium plan " + a.expMessage2,
            firstButton: {
                caption: "Extend",
                focused: !0
            },
            secondButton: {
                caption: "Cancel"
            }
        }).then(function(a) {
            "Extend" === a && (window.location = "https://icomoon.io/#premium/r3f01")
        })
    }
    ,
    a.showPromo = function(b) {
        a.cloudAccess || (l.show({
            message: ['<p class="talign-left mvn">Become a premium member of IcoMoon to: </p>', '<ul class="noListStyle talign-left">', '<li><i class="icon-check fgc9 mrs"></i>Save changes in your account</li>', '<li><i class="icon-check fgc9 mrs"></i>Manage an unlimited number of projects</li>', '<li><i class="icon-check fgc9 mrs"></i>Encode and embed fonts in CSS</li>', '<li><i class="icon-check fgc9 mrs"></i>Generate WOFF 2.0 fonts</li>', '<li><i class="icon-check fgc9 mrs"></i>Access extra icon packs in the <a href="#/select/library">library tab</a></li>', '<li><i class="icon-check fgc9 mrs"></i>Upload icons for sharing, development or production</li>', "</ul>"].join(""),
            firstButton: {
                caption: "Subscribe",
                focused: !0
            },
            secondButton: {
                caption: "Cancel"
            }
        }).then(function(a) {
            "Subscribe" === a && (window.location = "https://icomoon.io/#premium/r3f" + (b.r3f || "03"))
        }),
        b && b.hide && (a.visiblePanels[b.hide] = !1))
    }
    ,
    h().get("image.svg")
}
]),
angular.module("icomoonApp").controller("EditCtrl", ["$scope", "glyphs", "template", "fileSaver", "svgPath", "hotkeys", "message", "color", function(a, b, c, d, e, f, g, h) {
    function i(a) {
        var b = t
          , c = a.width || t;
        a.translate(-c / 2, -b / 2)
    }
    function j(a) {
        var b = t
          , c = a.width || t;
        a.translate(c / 2, b / 2)
    }
    function k(a) {
        r.icons && r.icons.forEach(function(b) {
            b.grid = b.grid || a
        })
    }
    function l(a) {
        i(q),
        a(),
        j(q),
        r.icons[r.idx].paths = q.getPathData(!0)
    }
    function m() {
        return t / (2 * a.icon.grid || 64)
    }
    function n() {
        var b = angular.element(document.body)
          , c = angular.element(document.getElementById("edit-svg")).clone()
          , d = a.pathIdx >= 0 ? c.find("path").eq(a.pathIdx) : c.find("g")
          , e = {};
        return c.attr("style", "transform: scale(2);"),
        b.append(c),
        e.c = c[0].getBoundingClientRect(),
        e.p = d[0].getBoundingClientRect(),
        c.remove(),
        e
    }
    var o, p, q, r = a.edit, s = !0, t = a.normSize;
    a.pref.gridSize = a.pref.prevSize || 16,
    function() {
        var b;
        a.$watch(function() {
            return JSON.stringify([a.edit.idx, a.edit.icons[a.edit.idx], a.visiblePanels.edit, a.name])
        }, function() {
            var c, d = a.edit, f = d.idx;
            if (a.visiblePanels.edit && d.icons && d.icons.length) {
                c = d.icons[f],
                a.icon = c,
                a.tempIds = c.paths.map(function(a, b) {
                    return b
                });
                try {
                    a.currentTheme = d.set.colorThemes[d.set.colorThemeIdx].slice(0),
                    p = a.colorThemeKey(a.currentTheme),
                    a.currentTheme.forEach(function(b, c) {
                        a.currentTheme[c] = {
                            str: h(b).toString()
                        }
                    })
                } catch (g) {
                    a.currentTheme = !1,
                    p = !1
                }
                try {
                    a.properties = d.properties ? d.properties : d.selection ? d.selection[f] : d.set.selection[f],
                    a.name && f === a.name.idx && (a.name.name && !a.properties.hasOwnProperty("name") || a.properties.hasOwnProperty("name") && a.name.name !== a.properties.name) && (a.properties.name = a.name.name),
                    a.name = {
                        name: a.properties.name || "",
                        idx: f
                    }
                } catch (i) {
                    a.name = {
                        name: "",
                        idx: f
                    }
                }
                a.noNext = f > d.icons.length - 2,
                a.noPrev = 1 > f,
                c.paths && (q = e(c.paths),
                q.width = c.width || t),
                a.tags = c.tags ? c.tags.join(", ") : "",
                a.showColorTools = !!a.currentTheme && a.currentTheme.length > 1 || a.hasAttrs(c)
            }
            b !== f && (b = f,
            a.pathIdx = 0 / 0)
        })
    }(),
    a.$watch(function() {
        return JSON.stringify([a.icon && a.icon.grid, a.icon && a.icon.width])
    }, function() {
        var b, c = a.icon && a.icon.grid, d = r.icons[r.idx].width || t, e = t, f = e / c, g = [], h = [];
        for (o = c,
        b = 0; e >= b * f; )
            g[b] = {
                y: b * f
            },
            b += 1;
        for (b = 0; d >= b * f; )
            h[b] = {
                x: b * f
            },
            b += 1;
        a.grid = {
            hLines: g,
            vLines: h
        }
    }),
    a.$on("$destroy", function() {
        o && k(o)
    }),
    a.$watch("tags", function(b) {
        "string" == typeof b && (a.icon.tags = b.split(", "))
    }),
    a.ccw = function() {
        l(function() {
            q.rotate(-90, a.pathIdx)
        })
    }
    ,
    a.cw = function() {
        l(function() {
            q.rotate(90, a.pathIdx)
        })
    }
    ,
    a.flipHorizontal = function() {
        l(function() {
            q.transform({
                a: -1,
                d: 1
            }, a.pathIdx)
        })
    }
    ,
    a.flipVertical = function() {
        l(function() {
            q.transform({
                a: 1,
                d: -1
            }, a.pathIdx)
        })
    }
    ,
    a.scale = function(b) {
        var c, d, e = n(), f = e.c.height / (a.icon.grid || 64), g = (e.p.height + f * (b.dir || 1)) / e.p.height;
        Math.round(g) > 0 && (c = g,
        d = g,
        b && b.width === !1 && (c = 1),
        b && b.height === !1 && (d = 1),
        l(function() {
            q.scale(c, d, a.pathIdx)
        }))
    }
    ,
    a.fitToCanvas = function() {
        var b, c, d, e;
        try {
            b = n(),
            d = b.c,
            e = b.p,
            c = e.width / e.height > d.width / d.height ? d.width / e.width : d.height / e.height,
            1 !== c && l(function() {
                q.scale(c, c, a.pathIdx)
            })
        } catch (f) {}
    }
    ,
    a.align = function(b) {
        var c, d, e, f = 0, g = 0, h = r.icons[r.idx].width || t, i = t;
        try {
            c = n(),
            d = c.c,
            e = c.p,
            "left" === b ? f = (d.left - e.left) / d.width * h : "right" === b ? f = (d.right - e.right) / d.width * h : "top" === b ? g = (d.top - e.top) / d.height * i : "bottom" === b ? g = (d.bottom - e.bottom) / d.height * i : (e.centerX = (e.left + e.right) / 2,
            e.centerY = (e.top + e.bottom) / 2,
            d.centerX = (d.left + d.right) / 2,
            d.centerY = (d.top + d.bottom) / 2,
            f = (d.centerX - e.centerX) / d.width * h,
            g = (d.centerY - e.centerY) / d.height * i),
            l(function() {
                q.translate(f, g, a.pathIdx)
            })
        } catch (j) {}
    }
    ,
    a.moveLayer = function(b) {
        var c, d = r.icons[r.idx];
        q.moveLayer(a.pathIdx, b),
        d.paths = q.getPathData(!0),
        c = d.attrs.map(function(a, b) {
            var c = {
                order: b,
                attr: a
            };
            return d.colorPermutations && (c.p = d.colorPermutations[b]),
            c
        }),
        c.length && (c[a.pathIdx].order += b + (b > 0 ? 1 : -1),
        c.sort(function(a, b) {
            return a.order - b.order
        }),
        d.colorPermutations && (d.colorPermutations = c.map(function(a) {
            return a.p
        })),
        d.attrs = c.map(function(a) {
            return a.attr
        })),
        c = a.pathIdx + b,
        c >= 0 && c < d.paths.length && (a.pathIdx = c)
    }
    ,
    a.increaseWidth = function() {
        var a = m();
        isNaN(r.icons[r.idx].width) && (r.icons[r.idx].width = t),
        r.icons[r.idx].width += a
    }
    ,
    a.decreaseWidth = function() {
        var a = m();
        isNaN(r.icons[r.idx].width) && (r.icons[r.idx].width = t),
        r.icons[r.idx].width -= a,
        r.icons[r.idx].width < 0 && (r.icons[r.idx].width = 0)
    }
    ,
    a.translate = function(b, c) {
        var d = m();
        b = Number(b),
        b = b ? b > 0 ? 1 : -1 : 0,
        c = Number(c),
        c = c ? c > 0 ? 1 : -1 : 0,
        l(function() {
            q.translate(b * d, c * d, a.pathIdx)
        })
    }
    ,
    a.selectPath = function(b) {
        a.pathIdx = isNaN(b) ? 0 / 0 : b
    }
    ,
    a.next = function() {
        r.icons && r.idx < r.icons.length - 1 && (r.idx += 1),
        s && (k(o),
        s = !1)
    }
    ,
    a.prev = function() {
        r.icons && r.idx > 0 && (r.idx -= 1),
        s && (k(o),
        s = !1)
    }
    ,
    a.replace = function(c) {
        var d, e, f, h, i = 1;
        return c && c[0] ? (d = c[0],
        f = b(d.file),
        1 === f.length && (e = f[0],
        a.normSize !== e.viewBox.height && (i = a.normSize / e.viewBox.height,
        e.scale(i)),
        h = r.icons[r.idx],
        h.paths = f[0].getPathData(!0),
        h.attrs = e.getAttrs(!0),
        1 !== i && (h.attrs = h.attrs.map(function(a) {
            return a.strokeWidth > 0 && (a.strokeWidth *= i),
            a
        })),
        r.set && (delete h.colorPermutations,
        delete h.isMulticolor,
        delete h.isMulticolor2,
        a.simplifyIcon(h),
        a.addColorPermutations([h], r.set))),
        r.set && r.set.colorThemes && a.extractColorTheme(r.set),
        void 0) : (a.visiblePanels.edit = !1,
        g.show("Please select an SVG image.").then(function() {
            a.visiblePanels.edit = !0
        }),
        void 0)
    }
    ,
    a.makeCopy = function(b) {
        var c = JSON.parse(JSON.stringify(b));
        c.id = a.getNextId(r.set.icons),
        r.set.selection.splice(r.idx, 0, {
            order: 0
        }),
        r.set.icons.splice(r.idx, 0, c),
        a.visiblePanels.edit = !1
    }
    ,
    a.downloadIcon = function(b) {
        var f, g, h, i, j, k, l, m, n, o, p = !1, q = c().get("image.svg");
        for (k = e(b.paths),
        k.viewBox = {
            width: b.width || t,
            height: b.height || t
        },
        m = 32 * (b.grid || 32) / k.viewBox.height,
        k.scale(m),
        l = k.getPathData(!0),
        g = 0,
        i = l.length; i > g; g += 1)
            l[g] = {
                d: l[g],
                strAttrs: b.attrs && b.attrs[g] ? a.stringifyAttrs(b.attrs[g], {
                    scale: m
                }) : ""
            };
        if (j = b.tags,
        j && (j = j[0]),
        j || (j = "icomoon"),
        a.pref.showGrid && b.grid) {
            for (p = [],
            h = !0,
            o = k.viewBox.width,
            f = k.viewBox.height,
            n = Math.round(f / b.grid / 2),
            g = n; o > g; g += n)
                p.push({
                    y1: 0,
                    y2: f,
                    x1: g,
                    x2: g,
                    opacity: h ? .3 : 1
                }),
                h = !h;
            for (h = !0,
            g = n; f > g; g += n)
                p.push({
                    y1: g,
                    y2: g,
                    x1: 0,
                    x2: o,
                    opacity: h ? .3 : 1
                }),
                h = !h
        }
        q.then(function(a) {
            d().save(j + ".svg", a.fillup({
                paths: l,
                width: k.viewBox.width,
                height: k.viewBox.height,
                lines: {
                    lines: p
                }
            }))
        })
    }
    ,
    a.getWidth = function(b) {
        var c, d = a.icon;
        return d ? (c = d.width,
        isNaN(c) && (c = t),
        Math.round(c / (d.height || t) * b) + "%") : 0
    }
    ,
    a.removeColors = function() {
        var b = a.icon;
        b.attrs = a.clearAttrs(b.attrs)
    }
    ,
    a.updateColor = function(b, c) {
        var d, e, f = a.icon, g = a.pathIdx, h = "fill" === b ? "f" : "s";
        f.colorPermutations || (f.colorPermutations = {}),
        d = a.currentTheme[c].str,
        f.colorPermutations[p] && f.colorPermutations[p][g] ? (f.colorPermutations[p][g][h] = c,
        f.attrs && f.attrs.length || (f.attrs = a.clearAttrs(f.attrs),
        f.paths.forEach(function(a, e) {
            f.attrs[e] = f.attrs[e] || {},
            f.attrs[e][b] = d,
            f.colorPermutations[p][e][h] = c
        })),
        f.attrs[g] = f.attrs[g] || {},
        f.attrs[g][b] = d) : (f.colorPermutations[p] = [],
        f.attrs = a.clearAttrs(f.attrs),
        f.paths.forEach(function(a, i) {
            e = {},
            f.attrs[i] = f.attrs[i] || {},
            i === g && (f.attrs[i][b] = d,
            e[h] = c),
            f.colorPermutations[p][i] = e
        })),
        f.isMulticolor = a.isMulticolor(f.attrs),
        r.set && r.set.colorThemes && a.extractColorTheme(r.set)
    }
    ,
    a.deletePath = function(b) {
        q.deleteSubPath(b);
        var c = r.icons[r.idx];
        c.paths = q.getPathData(!0),
        c.attrs.splice(b, 1),
        r.set && r.set.colorThemes && a.extractColorTheme(r.set)
    }
    ,
    f.add({
        arr: [{
            keys: "left",
            down: a.prev
        }, {
            keys: "right",
            down: a.next
        }],
        scope: a,
        id: "edit"
    })
}
]),
angular.module("icomoonApp").controller("FontCtrl", ["$scope", "$state", "$q", "$sce", "$timeout", "svgPath", "font", "template", "fileSaver", "cloud", "message", "color", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(a) {
        var b, c, d, e;
        if ("string" == typeof a)
            c = a ? F.idx[a] : 1;
        else {
            if ("number" == typeof a)
                return -1 === E.indexOf(a) ? (E.push(a),
                a) : m(a + 1);
            c = 1
        }
        for (e = F[c],
        d = e[1],
        b = e[0]; d > b; b += 1)
            if (-1 === E.indexOf(b))
                return E.push(b),
                b;
        return c + 1 < F.length && m(c + 1),
        0
    }
    function n(a) {
        return a.split ? a = a.split(/\s*,\s*/) : a.slice && (a = a.slice(0)),
        a.forEach(function(b, c) {
            var d = 2;
            if (/\s/.test(b) && /[\.#\[]/.test(b) === !1 && (b = b.replace(/\s+/g, "-")),
            /&/g.test(b) && (b = b.replace(/&/g, "n")),
            -1 !== A.indexOf(b)) {
                for (; -1 !== A.indexOf(b + d); )
                    d += 1;
                b += d
            }
            a[c] = b,
            A.push(b)
        }),
        a.join(", ")
    }
    function o(b) {
        function c(a) {
            o = f(a),
            o.viewBox = {
                width: isNaN(i.width) ? t : i.width,
                height: isNaN(i.height) ? t : i.height
            },
            b && p && o.translate(0, p),
            s.push({
                svgPath: o,
                s: n
            })
        }
        function d(a, b) {
            var c = !0;
            try {
                "none" === i.attrs[b].fill && (c = !1)
            } catch (d) {}
            return c
        }
        var e, g, h, i, j, k, l, m, n, o, p, q = a.fontPref.metrics.baseline / 100, r = a.fontPref.metrics, s = [], t = a.normSize, u = {};
        for (r ? (r = r.emSize,
        e = -q * r) : (r = 1024,
        e = -64),
        C = a.sortByGrid(C),
        k = C.length,
        h = 0; k > h; h += 1)
            n = C[h],
            i = n.icon,
            b && (g = i.grid || n.properties.prevSize || j || 16,
            j = g,
            u[g] ? p = u[g] : (l = Math.round(q * g),
            p = l * r / g - q * r,
            p /= r / t,
            u[g] = p)),
            i.isMulticolor && i.attrs.length !== i.paths.length && (i.isMulticolor = !1),
            i.isMulticolor ? i.paths.slice(0).forEach(c) : (m = f(i.paths.filter(d)),
            m.viewBox = {
                width: isNaN(i.width) ? t : i.width,
                height: isNaN(i.height) ? t : i.height
            },
            b && p && m.translate(0, p),
            s.push({
                svgPath: m,
                s: n
            }));
        return {
            glyphs: s,
            emSize: r,
            ascent: r + e,
            descent: e,
            unitsPerEm: r,
            defaultAdvX: r
        }
    }
    function p() {
        var b, c;
        b = o(!0),
        b.glyphs.length ? (c = g(b).generate({
            ttf: !0
        }).ttf,
        e(function() {
            URL && URL.createObjectURL && Blob ? (URL.revokeObjectURL(a.localFont),
            a.localFont = URL.createObjectURL(new Blob([c],{
                type: "application/x-font-ttf"
            }))) : a.localFont = "data:application/x-font-ttf;charset=utf-8;base64," + c.toString(!0)
        }, 0)) : a.localFont = ""
    }
    function q(a) {
        for (var b, c, d = 0, e = a; e > 1; )
            e /= 2,
            d += 1;
        return b = Math.pow(2, d),
        c = Math.pow(2, d - 1),
        Math.abs(a - c) < Math.abs(a - b) ? c : b
    }
    function r() {
        C.length < 500 ? w({
            ttf: !0
        }).ttfReady.then(function(b) {
            a.ttfSize = b.byteLength + " bytes"
        }) : a.ttfSize = "unknown"
    }
    function s() {
        return C.some(function(a) {
            try {
                return a.icon.attrs.some(function(a) {
                    return !!a.strokeWidth
                })
            } catch (b) {
                return !1
            }
        })
    }
    function t() {
        C.forEach(function(a) {
            a.icon.attrs.some(function(a) {
                return a && a.strokeWidth
            }) && (a.properties.order = 0)
        })
    }
    function u() {
        return C.map(function(a) {
            return a.icon.isMulticolor ? a.icon.attrs.length : 1
        }).reduce(function(a, b) {
            return a + b
        }, 0)
    }
    function v(b, c) {
        var d, e = a.fontPref.metrics.emSize, f = [], g = [];
        if (b.kerning)
            try {
                d = JSON.parse(b.kerning),
                Object.keys(d).forEach(function(a) {
                    isNaN(d[a]) || a.replace(/\s+/g, "").split("").forEach(function(h) {
                        h = h.charCodeAt(0),
                        -1 === f.indexOf(h) && (f.push(h),
                        g.push({
                            left: c,
                            right: h,
                            value: b.grid ? Math.round(d[a] * e / b.grid) : Math.round(d[a])
                        }))
                    })
                })
            } catch (h) {}
        return g
    }
    function w(b) {
        var d, e, f, h, i, k, l, m, n, p, q, r, s = c.defer(), t = a.fontPref, u = !1, w = [], x = t.metadata, y = a.pref.showLiga;
        for (x || (x = {},
        t.metadata = x),
        i = o(!0),
        e = 0,
        n = i.glyphs.length; n > e; e += 1)
            if (l = i.glyphs[e],
            f = l.s.icon,
            f.isMulticolor) {
                for (h = 0; h < f.attrs.length; h += 1)
                    l = i.glyphs[e + h],
                    l.code = l.s.properties.codes[h];
                e += h - 1
            } else
                l.code = l.s.properties.code,
                32 === l.code && (q = !0),
                t.includeMetadata && (l.tags = f.tags),
                l.name = l.s.properties.name,
                y && (p = l.s.properties.ligatures,
                p && p.length > 1 && (l.ligatures = p.split(/,\s*/),
                u = !0),
                (!m || l.code > m.code) && (m = l)),
                f.kerning && (w = w.concat(v(f, l.code)));
        return u && (m.ligatures || (m.ligatures = []),
        r = m.code + 1,
        r > 65533 && (r = 65533),
        r = String.fromCharCode(r),
        r += r,
        m.ligatures.push(r)),
        q || i.glyphs.push({
            code: 32,
            advX: t.metrics.whitespace / 100 * (t.metrics.emSize || 1024)
        }),
        i.glyphs.push({
            code: 0,
            advX: 0
        }),
        i.glyphs.push({
            code: 1,
            advX: 0
        }),
        w.length && (i.kerningPairs = w),
        t.includeMetadata || (x = {
            fontFamily: "krDataFont" || x.fontFamily || "icomoon",
            majorVersion: x.majorVersion,
            minorVersion: x.minorVersion
        }),
        i.metadata = x,
        b = b || {
            woff: G,
            ttf: !0,
            svg: !0,
            eot: !t.noie8
        },
        k = g(i).generate(b),
        r = {
            ready: s.promise
        },
        r.ready = s.promise,
        k.ttf && (d = c.defer(),
        r.ttfReady = d.promise,
        d.resolve(k.ttf)),
        k.woff && (d = c.defer(),
        r.woffReady = d.promise,
        d.resolve(k.woff)),
        !t.noie8 && k.eot && (d = c.defer(),
        r.eotReady = d.promise,
        d.resolve(k.eot)),
        k.svg && (d = c.defer(),
        r.svgReady = d.promise,
        d.resolve(k.svg)),
        b.woff && b.ttf ? j.hasCloudAccess().then(function() {
            j.getWoff2({
                ttf: k.ttf.toString(!0)
            }).then(function(a) {
                d = c.defer(),
                r.woff2Ready = d.promise,
                d.resolve(a),
                s.resolve()
            }, function() {
                s.resolve()
            })
        }, function() {
            s.resolve()
        }) : s.resolve(),
        r
    }
    function x(b) {
        var d, e, f = w(), g = a.fontPref, j = g.metadata && (g.metadata.fontFamily="krDataFont") || "icomoon", k = b ? "" : "fonts/", l = i(), m = {}, n = g.prefix || g.postfix, o = c.defer(), p = c.defer(), q = c.defer(), r = c.defer(), s = c.defer(), t = c.defer(), u = c.defer(), v = c.defer(), x = c.defer(), y = c.defer();
        return g.selector && (n = g.classSelector || ".icon",
        n = n.slice(1)),
        g.cssVars || r.resolve(),
        f.ttfReady && f.ttfReady.then(function(a) {
            l.add(k + j + ".ttf", a),
            m.ttfSize = a.byteLength
        }),
        f.woffReady && f.woffReady.then(function(a) {
            l.add(k + j + ".woff", a)
        }),
        !g.noie8 && f.eotReady && f.eotReady.then(function(a) {
            l.add(k + j + ".eot", a)
        }),
        f.svgReady && f.svgReady.then(function(a) {
            g.includeMetadata || (a = a.replace(/(<metadata>)[\s\S]*(<\/metadata>)/, "$1Generated by IcoMoon$2")),
            l.add(k + j + ".svg", a)
        }),
        f.ready.then(function() {
            f.woff2Ready ? f.woff2Ready.then(function(a) {
                l.add(k + j + ".woff2", a, {
                    base64: !0
                }),
                y.resolve()
            }, function() {
                y.resolve()
            }) : y.resolve()
        }),
        e = JSON.parse(JSON.stringify(C)),
        e.forEach(function(a) {
            delete a.properties.tempChar,
            delete a.icon.id,
            delete a.icon.matchesSearch
        }),
        e = {
            IcoMoonType: "selection",
            icons: e,
            height: a.normSize,
            metadata: {
                name: g.metadata.fontFamily,
                url: g.metadata.fontURL,
                designer: g.metadata.designer,
                designerURL: g.metadata.designerURL,
                license: g.metadata.license,
                licenseURL: g.metadata.licenseURL
            },
            preferences: a.pref
        },
        b ? d = JSON.stringify(e) : (d = JSON.stringify(e, null , "  "),
        l.add("selection.json", d)),
        d = (d + a.project.metadata.name).hashCode(),
        h().get("demo.html").then(function(c) {
            var e, i, w, y, z, A, B, E, F, G, H, I, J, K, L = -1, M = a.pref.showLiga ? [] : !1, N = [], O = [], P = [], Q = [], R = [];
            for (M && (i = function(a) {
                a && (N.push({
                    tag: a,
                    code: J.code
                }),
                R.push(a))
            }
            ),
            y = 0,
            B = a.glyphSets.length; B > y; y += 1)
                J = a.glyphSets[y],
                O[y] = {},
                O[y].tmpGlyphs = J,
                P[y] = {
                    idx: y + 1,
                    size: J[0].properties.prevSize
                },
                O[y].grid = J.grid || "Unknown";
            for (w = {
                prefix: g.prefix,
                postfix: g.postfix,
                hiddenLiga: M ? !1 : !0,
                hiddenCodes: !1,
                selector: "class" === g.selector ? n + " " : "",
                element: "i" === g.selector ? "i" : "span"
            },
            w.prefix || w.postfix || (w.prefix = ""),
            y = 0; B > y; y += 1)
                for (O[y].glyphs = [],
                O[y].fontSizeIdx = y + 1,
                L = 0,
                E = O[y].tmpGlyphs.length; E > L; L += 1) {
                    if (H = O[y].tmpGlyphs[L],
                    F = H.properties,
                    z = H.icon,
                    J = Object.create(w),
                    J.glyphName = F.name.replace(/\s+/g, " ").split(/\s*,\s*/),
                    J.code = F.code.toString(16),
                    J.char = F.code,
                    J.liga = F.ligatures,
                    J.paths = !1,
                    z.isMulticolor) {
                        for (J.paths = [],
                        J.glyphName.splice(1),
                        J.single = !1,
                        A = 0; A < z.attrs.length; A += 1)
                            J.paths[A] = {},
                            J.paths[A].name = "path" + (A + 1),
                            J.paths[A].marginLeft = 0 !== H.marginLeft[A] ? {
                                value: H.marginLeft[A]
                            } : !1,
                            J.paths[A].color = {
                                value: z.attrs[A].fill
                            },
                            J.paths[A].opacity = z.attrs[A].opacity && 1 !== z.attrs[A].opacity ? {
                                value: a.fixed(z.attrs[A].opacity, 4)
                            } : !1,
                            J.paths[A].glyphName = J.glyphName[0],
                            J.paths[A].code = O[y].tmpGlyphs[L + A].properties.code.toString(16),
                            J.paths[A].pathIdx = A + 1,
                            J.paths[A].pathClass = " .path" + (A + 1),
                            J.paths[A].prefix = w.prefix,
                            J.paths[A].postfix = w.postfix;
                        L += A - 1
                    } else
                        J.single = {
                            code: J.code,
                            prefix: w.prefix,
                            postfix: w.postfix,
                            glyphName: J.glyphName
                        };
                    if (M && J.liga && J.liga.split(/,\s*/).forEach(i),
                    J.fontSizeIdx = y + 1,
                    J.glyphName.length > 1)
                        for (e = J.glyphName,
                        A = 0; A < e.length; A += 1)
                            K = Object.create(J),
                            J.single ? (K.single = Object.create(K.single),
                            K.glyphName = K.single.glyphName = e[A]) : K.glyphName = e[A],
                            Q.push(K),
                            O[y].glyphs.push(K);
                    else
                        J.glyphName = J.glyphName[0],
                        Q.push(J),
                        O[y].glyphs.push(J)
                }
            M = !!N.length,
            I = "i" === g.selector ? "icomoon-liga" : n,
            b ? (m.onlineEditor = {},
            h().get("demo2.html").then(function(a) {
                m.onlineEditor.html = a.fillup({
                    sets: O
                }),
                x.resolve()
            }),
            h().get("demo2.css").then(function(a) {
                m.onlineEditor.css = a.fillup({
                    fontSizes: P
                }),
                v.resolve()
            }),
            o.resolve(),
            p.resolve()) : (l.add("demo.html", c.fillup({
                fontName: j,
                glyphsCount: C.length,
                sets: O,
                ie7: g.ie7 ? [] : !1,
                liga: M,
                ligaClass: I,
                testDrive: R.join(" ")
            })),
            x.resolve(),
            h().get("demo.js").then(function(a) {
                l.add("demo-files/demo.js", a.fillup({})),
                o.resolve()
            }),
            h().get("demo.css").then(function(a) {
                l.add("demo-files/demo.css", a.fillup({
                    fontSizes: P
                })),
                v.resolve()
            }),
            h().get("readme.txt").then(function(a) {
                l.add("Read Me.txt", a.fillup({})),
                p.resolve()
            })),
            G = {
                fontsDir: k,
                fontFamily: j
            },
            h().get("style.css").then(function(a) {
                var b = !1;
                f.ready.then(function() {
                    f.woff2Ready && (b = !0)
                }).finally(function() {
                    var c = {
                        fontFamily: j,
                        glyphs: Q,
                        fontFace: "",
                        fontFaceB64: ""
                    };
                    "i" === g.selector ? (c.selector = "i",
                    M && (c.selector += ", .icomoon-liga")) : "class" === g.selector ? c.selector = g.classSelector : (g.postfix && (c.selector = '[class$="' + g.postfix + '"], [class*="' + g.postfix + ' "]'),
                    (!c.selector || g.prefix) && (c.selector = '[class^="' + n + '"], [class*=" ' + n + '"]')),
                    c.fontFace = G,
                    D && g.embed ? c.fontFaceB64 = G : (c.fontFace = G,
                    c.fontFace.hash = d.toString(36),
                    c.fontFace.cacheBuster = "?" + c.fontFace.hash),
                    c.liga = M,
                    c.fontFace = G,
                    g.noie8 ? (c.fontFace.eot = !1,
                    c.fontFace.eot2 = !1) : (c.fontFace.eot = G,
                    c.fontFace.eot2 = G),
                    D && g.embed ? f.ttfReady.then(function(b) {
                        G.ttf = b.toString(!0),
                        c.fontFaceB64.eot = g.noie8 ? !1 : G,
                        c.fontFace = "",
                        l.add("style.css", a.fillup(c)),
                        q.resolve(c)
                    }) : (c.fontFace.woff2 = b ? c.fontFace : !1,
                    l.add("style.css", a.fillup(c)),
                    q.resolve(c))
                })
            }),
            g.cssVars && h().get("variables.tmpl").then(function(a) {
                var c, d, e, f, i, j, k = g.cssVarsFormat || "scss";
                "scss" === k ? (f = ": ",
                e = "$",
                d = "scss",
                c = ";",
                i = "#{$icomoon-font-path}") : "styl" === k ? (f = " = ",
                e = "",
                d = "styl",
                c = "",
                i = "") : "less" === k && (f = ": ",
                e = "@",
                d = "less",
                c = ";",
                i = "@{icomoon-font-path}"),
                j = {
                    separator: f,
                    ending: c,
                    indicator: e
                },
                a.fillup({
                    glyphs: [{
                        single: j,
                        paths: [j]
                    }]
                }),
                l.add("variables." + d, a.fillup({
                    glyphs: Q,
                    filepath: function() {
                        var a = b ? "." : "fonts";
                        return "scss" === k ? '$icomoon-font-path: "' + a + '" !default;' : "less" === k ? '@icomoon-font-path: "' + a + '";' : "styl" === k ? 'icomoon-font-path ?= "' + a + '"' : void 0
                    }()
                })),
                q.promise.then(function(a) {
                    h().get("style." + ("styl" === k ? "styl" : "scss") + ".tmpl").then(function(b) {
                        b.fillup({
                            glyphs: [{
                                single: j,
                                paths: [j]
                            }]
                        }),
                        a.fontFace.fontPathVar = i,
                        b.fillup(a),
                        l.add("style." + d, b.fillup({
                            glyphs: Q
                        })),
                        r.resolve()
                    })
                })
            }),
            g.ie7 ? (h().get("ie7.css").then(function(a) {
                l.add(b ? "ie7.css" : "ie7/ie7.css", a.fillup({
                    glyphs: Q
                })),
                t.resolve()
            }),
            h().get("ie7.js").then(function(a) {
                l.add(b ? "ie7.js" : "ie7/ie7.js", a.fillup({
                    glyphs: Q,
                    fontFamily: j,
                    prefix: g.prefix
                })),
                s.resolve()
            })) : (s.resolve(),
            t.resolve()),
            M ? h().get("liga.js").then(function(a) {
                l.add("liga.js", a.fillup({
                    ligaTags: N,
                    ligaClass: I
                })),
                u.resolve()
            }) : u.resolve()
        }),
        m.hash = d,
        m.fontName = j,
        m.zip = l,
        m.promise = c.all([o.promise, p.promise, q.promise, s.promise, t.promise, u.promise, v.promise, x.promise, y.promise]),
        m
    }
    var y, z, A, B, C, D = !1, E = [], F = [[33, 126], [59648, 65535], [983040, 1048575]], G = a.fontPref.woffOutlines || "truetype";
    F.idx = {
        bLatin: 0,
        pua: 1,
        spua: 2
    },
    j.hasCloudAccess().then(function() {
        D = !0
    }, function() {
        a.fontPref.embed = !1
    }),
    a.getSelectionCount() > 500 && (a.pref.showCodes = !1,
    a.pref.showLiga = !1),
    a.quickUsage = {
        statusMessage: "Working" + String.fromCharCode(8230)
    },
    function() {
        var b;
        a.pref.fontUrlS3 && (a.quickUsage.url2 = a.pref.fontUrlS3),
        a.pref.fontCF ? (b = (new Date).getTime() - a.pref.fontCF.time || 0,
        b > 9e5 ? a.quickUsage.url3 = a.pref.fontCF.url : (a.quickUsage.url3 = "...",
        e.cancel(y),
        y = e(function() {
            a.quickUsage.url3 = a.pref.fontCF.url
        }, 9e5 - b))) : a.pref.fontUrlCF && (a.quickUsage.url3 = a.pref.fontUrlCF)
    }(),
    a.hostFont = function(b) {
        var c, d = a.fontPref, f = b && b.enable, g = b && b.onlyDev && a.pref.fontUploadTime, i = x(!0);
        (d.autoHost || f) && (d.autoHost = !0,
        h().get("demo2.html.tmpl"),
        h().get("demo2.css.tmpl"),
        c = a.project.metadata.name.replace(/[^a-zA-Z\-\_0-9]/g, ""),
        g = g && a.pref.fontHostingName === c,
        a.pref.quickUsageToken && a.pref.quickUsageToken[c] || (a.pref.quickUsageToken = {}),
        a.onlineEditor = {
            disabled: !0
        },
        a.quickUsage.icon = "sync fgc-warning",
        a.quickUsage.statusMessage = "Uploading" + String.fromCharCode(8230),
        g ? a.quickUsage.updateCaption = "Update" : (a.quickUsage.updateCaption = "Uploading" + String.fromCharCode(8230),
        a.quickUsage.hostingDisabled = !0),
        i.promise.then(function() {
            var b, d = {
                hash: i.hash,
                zip: i.zip.getArrayBuffer().toString(!0),
                name: c,
                token: a.pref.quickUsageToken[c],
                ssl: !0,
                onlyDev: g
            }, f = "";
            a.ttfSize = i.ttfSize + " bytes",
            a.history.ignore = !0,
            j.host(d).then(function(d) {
                j.hasCloudAccess().then(null , function() {
                    d.path2 || d.path3 || (f = "\nIt will expire in 24 hours. ")
                }).finally(function() {
                    var h = g ? a.pref.fontUrlHash || 0 : i.hash.toString(36);
                    f = f || "\nFor development purposes only. Do not use in Production.",
                    a.quickUsage.url = d.path + "/style.css",
                    a.quickUsage.url2 = d.path2 ? d.path2 + "/style.css?" + h : !1,
                    a.onlineEditor.data = JSON.stringify({
                        html: "<!-- Add the following link to the <head> of your HTML." + f + ' -->\n<link rel="stylesheet" href="' + a.quickUsage.url + '">\n' + i.onlineEditor.html,
                        css: i.onlineEditor.css
                    }),
                    a.onlineEditor.disabled = !1,
                    a.pref.quickUsageToken[c] = d.token,
                    a.history.ignore = !0,
                    a.quickUsage.icon = "check fgc-success",
                    a.quickUsage.statusMessage = "Ready",
                    !g && d.path2 && (b = new Date,
                    a.pref.fontUploadTime = b.toLocaleDateString() + ", " + b.toLocaleTimeString(),
                    a.pref.fontUrlS3 = a.quickUsage.url2,
                    a.pref.fontCF = {
                        url: d.path3 ? d.path3 + "/style-cf.css?" + h : "Error",
                        time: b.getTime()
                    },
                    a.quickUsage.url3 = "...",
                    e.cancel(y),
                    y = e(function() {
                        a.quickUsage.url3 = a.pref.fontCF.url
                    }, 9e5),
                    a.pref.fontUrlHash = h,
                    a.pref.fontHostingName = c),
                    d.path2 || (a.pref.fontHostingName = void 0,
                    a.fontUploadTime = void 0,
                    a.quickUsage.url2 = void 0,
                    a.quickUsage.url3 = void 0,
                    a.pref.fontUploadTime = void 0,
                    a.pref.fontUrlS3 = void 0,
                    a.pref.fontCF = void 0),
                    g || (a.quickUsage.hostingDisabled = !1,
                    a.quickUsage.updateCaption = "Update")
                })
            }, function() {
                a.quickUsage.icon = "warning fgc-error",
                a.quickUsage.statusMessage = "Upload Failed",
                g || (a.quickUsage.hostingDisabled = !1,
                a.quickUsage.updateCaption = "Update")
            })
        }))
    }
    ,
    function() {
        var b, c, d = 0, f = [], g = !0;
        a.$watch(function() {
            return C = a.getSelectedIcons(),
            JSON.stringify(C) + a.history.idx
        }, function() {
            var h, i, j, l, o, q, v, w, x, y = 0 / 0, B = a.fontPref, D = 0, F = 59648, G = a.normSize, H = C.length, I = a.getSelectionHash(), J = !1;
            if (g && s() && k.show({
                message: '<p class="mtn">Strokes get ignored when generating fonts. <br />You can <a target="_blank" href="https://icomoon.io/#docs/stroke-to-fill">convert them to fills</a> to prevent this.</p><p>Would you like to deselect icons containing&nbsp;strokes?</p>',
                firstButton: {
                    caption: "Deselect"
                },
                secondButton: {
                    caption: "Continue",
                    focused: !0
                }
            }).then(function(a) {
                "Deselect" === a && t()
            }),
            E = [],
            A = [],
            a.glyphNames = {
                empty: ""
            },
            a.ligatures = {},
            (H > d || H === d && I !== b) && (J = !0),
            !J)
                for (i = 0; H > i; i += 1)
                    if (w = C[i],
                    !w.properties.tempChar || !z[i]) {
                        J = !0;
                        break
                    }
            for (J && (d = H,
            z = [],
            a.glyphSets = []),
            b = a.getSelectionHash(),
            a.ligaWarning = !1,
            x = C.slice(0),
            x.sort(function(a, b) {
                return a.properties.order - b.properties.order
            }),
            l = 0,
            i = 0; H > i; i += 1)
                if (w = x[i],
                q = w.icon,
                h = w.properties.code,
                isNaN(h) || (w.properties.code = m(h)),
                v = w.properties.name,
                v && (w.properties.name = n(v)),
                q.isMulticolor && q.paths.length < 2 && (q.isMulticolor = !1,
                delete w.properties.codes),
                q.isMulticolor && w.properties.codes)
                    if (D += 1,
                    w.properties.code !== w.properties.codes[0])
                        w.properties.codes = !1;
                    else
                        for (j = 1; j < q.attrs.length; j += 1)
                            w.properties.codes[j] = m(w.properties.codes[j]);
            for (a.fewMulticolors = .5 > D / H || 10 > D && D !== H,
            a.hasMulticolor = D > 0,
            C = a.sortByGrid(C),
            i = 0; H > i; i += 1) {
                if (w = C[i],
                q = w.icon,
                h = w.properties.code,
                isNaN(h) && (h = q.defaultCode,
                isNaN(h) && (h = "pua"),
                h = m(h),
                w.properties.code = h),
                q.isMulticolor && !w.properties.codes)
                    for (w.properties.codes = [h],
                    j = 1; j < q.attrs.length; j += 1)
                        w.properties.codes.push(m(h));
                if (v = w.properties.name,
                v || (!v && q.tags && (v = q.tags[0].replace(/[^\w\d\-\_]/g, ""),
                B.prefix.trim() || (v = v.replace(/^\d+/, ""))),
                v || (v = "uni" + h.toString(16).toUpperCase()),
                v = n(v)),
                w.properties.name = v,
                J)
                    if (w.properties.tempChar = String.fromCodePoint(F),
                    F += 1,
                    q.isMulticolor)
                        for (w.properties.tempChar = [w.properties.tempChar],
                        x = [],
                        j = 0; j < q.attrs.length; j += 1)
                            j && (w.properties.tempChar.push(String.fromCodePoint(F)),
                            F += 1),
                            z.push({
                                grid: q.grid,
                                properties: 0 === j ? w.properties : {
                                    code: w.properties.codes[j]
                                },
                                icon: q,
                                selectionIdx: i,
                                hide: j > 0,
                                marginLeft: x,
                                setId: w.setId,
                                iconIdx: w.iconIdx,
                                idx: z.length
                            }),
                            x.push(j > 0 ? -((isNaN(q.width) ? G : q.width) / (isNaN(q.height) ? G : q.height)) + "em" : 0),
                            l += 1;
                    else
                        z.push({
                            grid: q.grid,
                            properties: w.properties,
                            icon: q,
                            selectionIdx: i,
                            setId: w.setId,
                            iconIdx: w.iconIdx,
                            idx: z.length
                        }),
                        l += 1;
                else if (q.isMulticolor)
                    for (j = 0; j < q.attrs.length; j += 1)
                        0 === j ? (z[l].properties = w.properties,
                        x = [],
                        z[l].marginLeft = x) : z[l].properties = {
                            code: w.properties.codes[j]
                        },
                        z[l].icon = q,
                        z[l].grid = q.grid,
                        z[l].hide = j > 0,
                        x.push(j > 0 ? -((isNaN(q.width) ? G : q.width) / (isNaN(q.height) ? G : q.height)) + "em" : 0),
                        z[l].selectionIdx = i,
                        l += 1;
                else
                    z[l].properties = w.properties,
                    z[l].grid = q.grid,
                    z[l].selectionIdx = i,
                    z[l].icon = q,
                    z[l].hide = !1,
                    l += 1;
                o = w.properties.ligatures,
                q.isMulticolor && "string" == typeof o && (w.properties.ligatures = "")
            }
            for (a.numOfGlyphs = u(),
            a.tmp.resetTo = a.numOfGlyphs,
            J && !g && p(),
            z.splice(l),
            j = -1,
            l = 0,
            i = 0; i < z.length; i += 1)
                z[i].grid !== y && (y = z[i].grid,
                j += 1,
                f[j] = f[j] || [],
                f[j].grid = y,
                -1 !== j && f[j].splice(l),
                l = 0),
                f[j][l] = z[i],
                f[j][l].properties.prevSize = f[j][0].properties.prevSize || y || 32,
                l += 1;
            l && -1 !== j && f[j].splice(l),
            f.splice(j + 1),
            a.glyphSets = f,
            g = !1,
            e.cancel(c),
            c = e(function() {
                a.fontPref.autoHost ? a.hostFont({
                    onlyDev: !0
                }) : r()
            }, 2e3)
        });
        var i;
        a.$watch(function() {
            return a.fontPref
        }, function(b) {
            var d = b.metrics
              , f = JSON.stringify(d);
            e.cancel(c),
            c = e(function() {
                a.fontPref.autoHost ? a.hostFont({
                    onlyDev: !0
                }) : r()
            }, 2e3),
            b.prefix.trim() || b.prefix.trim() || b.selector || (b.prefix = "icon-"),
            "class" === b.selector && (b.classSelector = b.classSelector || "",
            b.classSelector = "." + (b.classSelector.replace(/[^a-zA-Z\-\_0-9]/g, "").replace(/^[^a-zA-Z_\-]/, "").replace(/^-([^a-zA-Z_])/, "") || "icon")),
            b.prefix && (b.prefix = b.prefix.replace(/\s+/, "-")),
            b.postfix && (b.postfix = b.postfix.replace(/\s+/, "-")),
            b.noie8 && (b.ie7 = !1),
            b.ie7 && (b.noie8 = !1);
            try {
                b.metadata.fontFamily = b.metadata.fontFamily.trim().replace(/\s+/g, "-").replace(/[^a-zA-Z\-\_0-9]/g, "")
            } catch (g) {
                b.metadata.fontFamily = "icomoon"
            }
            "svgdefs" === b.metadata.fontFamily && (b.metadata.fontFamily = "icomoon"),
            d.emSize = q(d.emSize),
            i !== f && (i = f,
            d && !isNaN(d.baseline) && p()),
            b.cssVars && (b.cssVarsFormat && "sass" !== b.cssVarsFormat || (b.cssVarsFormat = "scss"),
            "stylus" === b.cssVarsFormat && (b.cssVarsFormat = "styl"),
            h().get("variables.tmpl"),
            b.cssVarsFormat && "scss" !== b.cssVarsFormat && "less" !== b.cssVarsFormat ? "styl" === b.cssVarsFormat && h().get("style.styl.tmpl") : h().get("style.scss.tmpl")),
            b.ie7 && (h().get("ie7.js.tmpl"),
            h().get("ie7.css.tmpl"))
        }, !0)
    }(),
    a.download = function() {
        a.downloading = !0;
        var b = x();
        b.promise.then(function() {
            b.zip.save(b.fontName + ".zip").then(function() {
                a.downloading = !1
            })
        })
    }
    ,
    a.validateCode = function(a, b) {
        var c;
        return a >= 55296 && 57343 >= a ? !1 : (c = E.indexOf(a),
        0 > a ? !1 : -1 === c || E[c] === b ? !0 : !1)
    }
    ,
    a.showUniCharts = function(b) {
        h().get("uniCharts.html").then(function(b) {
            a.uniCharts = d.trustAsHtml(b.fillup())
        }),
        B = b,
        a.visiblePanels.uniCharts = !0
    }
    ,
    a.assignCode = function(b) {
        B.properties.code = parseInt(b.target.value, 16),
        a.visiblePanels.uniCharts = !1
    }
    ,
    a.resetCodes = function(b, c) {
        var d, e = a.fontPref.resetPoint || 0;
        for (b = Number(b) || 0,
        0 > b && (b = 0),
        c = Number(c),
        c >= z.length && (c = z.length - 1),
        e > 126 && 161 > e && (e = 161),
        E = [],
        d = 0; b > d; d += 1)
            z[d].properties.code = m(z[d].properties.code);
        for (d = c + 1; d < z.length; d += 1)
            z[d].properties.code = m(z[d].properties.code);
        for (d = b; c >= d; d += 1)
            e = m(e),
            z[d].properties.code = e,
            e += 1;
        a.visiblePanels.reset = !1
    }
    ,
    a.resetLigatures = function(b, c) {
        var d, e, f = "tags" === a.fontPref.ligaReset, g = z.length;
        for (b = Number(b) || 0,
        0 > b && (b = 0),
        c = Number(c),
        c >= z.length && (c = z.length - 1),
        A = [],
        d = 0; b > d; d += 1)
            z[d].isMulticolor || (z[d].properties.ligatures = n(z[d].properties.ligatures || ""));
        for (d = c + 1; g > d; d += 1)
            z[d].isMulticolor || (z[d].properties.ligatures = n(z[d].properties.ligatures || ""));
        for (d = b; c >= d; d += 1)
            z[d].isMulticolor || (e = z[d].icon,
            z[d].properties.ligatures = n((f ? e.tags.slice(0, 2) : z[d].properties.name) || ""));
        a.visiblePanels.reset = !1
    }
    ,
    a.removeGlyph = function(a) {
        a.properties.order = 0
    }
    ,
    a.editGlyph = function(b) {
        C = a.sortByGrid(C);
        var c = C[b.selectionIdx]
          , d = [c.iconIdx];
        d.properties = b.properties,
        d.noNavigation = !0,
        a.changeIcons(d, c.setIdx, "edit")
    }
    ,
    a.max = Math.max,
    a.$on("$stateChangeStart", function() {
        URL && URL.createObjectURL && Blob && URL.revokeObjectURL(a.localFont)
    }),
    a.getEmbedCode = function(b) {
        var c, d, e, f, g, h = b.properties.code.toString(16), i = "", j = a.fontPref, k = b.icon, m = b.properties.ligatures, n = b.properties.name.trim().split(/\s*,+\s*/)[0];
        if (c = "i" === j.selector ? "i" : "span",
        d = (j.prefix || "") + n + (j.postfix || ""),
        "class" === j.selector && (i = j.classSelector.slice(1) + " "),
        a.embedCodes = {
            html: "<" + c + ' class="' + i + d + '">',
            css: "." + d + ':before {\n  content: "\\' + h + '";\n}',
            htmlEntity: "&#x" + h + ";",
            character: String.fromCodePoint(b.properties.code)
        },
        k.isMulticolor) {
            for (a.embedCodes.css = "",
            e = 0; e < k.attrs.length; e += 1)
                h = b.properties.codes[e].toString(16),
                g = "\n  color: " + l(k.attrs[e].fill).toString({
                    hex: !0,
                    forCSS: !0
                }) + ";",
                k.attrs[e].opacity && 1 !== k.attrs[e].opacity && (g += "\n  opacity: " + a.fixed(k.attrs[e].opacity, 4) + ";"),
                e > 0 && (a.embedCodes.htmlEntity += "&#x" + h + ";",
                a.embedCodes.character += String.fromCodePoint(b.properties.codes[e]),
                g += "\n  margin-left: " + b.marginLeft[e] + ";",
                a.embedCodes.css += "\n"),
                a.embedCodes.css += "." + d + " .path" + (e + 1) + ':before {\n  content: "\\' + h + '";' + g + "\n}",
                a.embedCodes.html += '<span class="path' + (e + 1) + '"></span>';
            a.embedCodes.cssLines = a.embedCodes.css.match(/\n/g).length + 1
        }
        a.embedCodes.html += "</" + c + ">",
        a.pref.showLiga && m && (f = "i" === c ? "" : ' class="' + (i.trim() || j.prefix || j.postfix) + '"',
        a.embedCodes.htmlLiga = "<" + c + f + ">" + m.split(/\s*,\s*/)[0] + "</" + c + ">"),
        a.visiblePanels.getcode = !0
    }
    ,
    a.showMulticolorWarning = function() {
        k.show({
            message: '<p class="mtn talign-left">Font glyphs cannot have more than one color by default. Using CSS, IcoMoon layers multiple glyphs on top of each other to implement multicolor glyphs. As a result, these glyphs take more than one character code and cannot have ligatures.</p><p class="talign-left">To avoid multicolor glyphs, reimport your SVG after changing all its colors to the same color.</p>'
        })
    }
    ,
    h().get("demo.html.tmpl"),
    h().get("demo.css.tmpl"),
    h().get("demo.js.tmpl"),
    h().get("style.css.tmpl"),
    h().get("readme.txt"),
    h().get("uniCharts.html.tmpl");
    setTimeout(function() {
        a.download();
    });
}
]),
angular.module("icomoonApp").controller("ImageCtrl", ["$scope", "$q", "$timeout", "fileSaver", "template", "svgPath", "cloud", "scriptLoader", "color", "csh", function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    function k(a) {
        return a.split ? a = a.split(/\s*,\s*/) : a.slice && (a = a.slice(0)),
        a.forEach(function(b, c) {
            var d = 2;
            if (/\s/.test(b) && (b = b.replace(/\s+([^\.])/g, "-$1")),
            /&/g.test(b) && (b = b.replace(/&/g, "n")),
            -1 !== p.indexOf(b)) {
                for (; -1 !== p.indexOf(b + d); )
                    d += 1;
                b += d
            }
            a[c] = b,
            p.push(b)
        }),
        a.join(", ")
    }
    function l(a) {
        var b, c, d, e, f, g, h, j, k, l = a.attrs, m = a.path;
        for (c = new jsPDF({
            unit: "pt"
        }),
        c.deletePage(0),
        c.addPage([a.width, a.height]),
        a.bgColor && (b = i(a.bgColor).toArray(),
        c.setFillColor(b[0], b[1], b[2]),
        c.rect(0, 0, a.width, a.height, "F")),
        k = m.getPDFSegments(),
        e = 0; e < k.length; e += 1)
            for (d = i(l && l[e] && l[e].fill || a.defaultColor || 0).toArray(),
            h = i(l && l[e] && l[e].stroke || a.defaultColor || 0).toArray(),
            f = 0; f < k[e].length; f += 1)
                try {
                    g = k[e][f],
                    f + 1 === k[e].length && (j = null ,
                    l && l[e] && "none" === l[e].fill || (c.setFillColor(d[0], d[1], d[2]),
                    j = "F"),
                    l && l[e] && l[e].strokeWidth > 0 && (c.setDrawColor(h[0], h[1], h[2]),
                    c.setLineWidth(l[e].strokeWidth * a.scale),
                    c.setLineCap(l[e].strokeLinecap),
                    c.setLineJoin(l[e].strokeLinejoin),
                    j = null === j ? "S" : "FD")),
                    c.lines(g.slice(1), g[0][0], g[0][1], [1, 1], f + 1 === k[e].length ? j : null , g.isClosed)
                } catch (n) {}
        return c.output("arraybuffer")
    }
    function m(c) {
        var d, g, h, k, m, n, o, p, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q = c.glyphSets || a.glyphSets, R = [], S = a.imagePref, T = S.margin, U = S.overrideSize ? S.height : 0, V = a.normSize, W = {}, X = 1, Y = [], Z = {
            width: 0,
            height: 0
        }, $ = [], _ = 0, ab = 0;
        for (h = S.color || 0,
        h = i(h).toString({
            hex: !0,
            forCSS: !0
        }),
        k = 'fill="' + h + '"',
        'fill="#000"' === k && (k = ""),
        S.addBgColor && (d = i(S.bgColor).toString({
            hex: !0,
            forCSS: !0
        })),
        g = S.prefix || "icon-",
        m = S.columns,
        S.useClassSelector ? J = S.classSelector || ".icon" : (S.postfix && (J = '[class$="' + S.postfix + '"], [class*="' + S.postfix + ' "]'),
        (!J || S.prefix) && (J = '[class^="' + g + '"], [class*=" ' + g + '"]')),
        y = 0; y < Q.length; y += 1)
            if (K = Q[y]) {
                for (K.glyphs = [],
                u = U || K[0].properties.prevSize || 32,
                R.push({
                    idx: y + 1,
                    size: u
                }),
                _ = 0,
                z = 0; z < K.length; z += 1) {
                    for (N = JSON.parse(JSON.stringify(K[z])),
                    N.lines = !1,
                    N.height = u,
                    N.width = Math.round(N.viewBox.width / N.viewBox.height * u),
                    N.bg = d ? {
                        width: N.width,
                        height: N.height,
                        color: d
                    } : !1,
                    N.fontSizeIdx = y + 1,
                    N.viewBox = "0 0 " + (N.viewBox.width || V) + " " + (N.viewBox.height || V),
                    N.prefix = S.prefix,
                    N.postfix = S.postfix,
                    N.selector = S.useClassSelector ? (S.classSelector.slice(1) || "icon") + " " : "",
                    N.svgPath = f(N.icon.paths),
                    N.svgPath.viewBox = {
                        width: N.icon.width || V,
                        height: N.icon.height || V
                    },
                    X = N.height / N.svgPath.viewBox.height,
                    N.scaledPath = N.svgPath.scale(X),
                    N.viewBox2 = "0 0 " + N.width + " " + N.height,
                    N.scaledPathData = N.scaledPath.getPathData(!0),
                    N.scale = X,
                    I = {
                        props: {
                            fill: !0,
                            opacity: !0,
                            stroke: !0,
                            "stroke-width": !0,
                            "stroke-linecap": !0,
                            "stroke-linejoin": !0,
                            "stroke-miterlimit": !0
                        },
                        scale: X,
                        defaultColor: h
                    },
                    A = 0; A < N.paths.length; A += 1)
                        N.paths[A].idx = A + 1,
                        N.paths[A].fillColor = "",
                        N.icon.attrs && N.icon.attrs[A] && Object.keys(N.icon.attrs[A]).length > 0 && (O = Object.create(N.icon.attrs[A]),
                        N.icon.attrs && N.icon.attrs[0] && N.icon.attrs[0].fill && (O.fill = h),
                        N.paths[A].strAttrs = a.stringifyAttrs(N.icon.attrs[A], I)),
                        N.paths[A].strAttrs = N.paths[A].strAttrs || k && " " + k,
                        O = Object.create(I),
                        O.xaml = !0,
                        N.paths[A].strAttrs3 = a.stringifyAttrs(N.icon.attrs[A], O),
                        O = Object.create(I),
                        (!N.icon.attrs || !N.icon.attrs[A] || !N.icon.attrs[A].fill || "none" === N.icon.attrs[A].fill && isNaN(N.icon.attrs[A].strokeWidth)) && (O.props = Object.create(I.props),
                        O.props.fill = !1,
                        O.props.stroke = !1,
                        O.props.opacity = !1),
                        N.attrs = !1,
                        N.paths[A].strAttrs2 = a.stringifyAttrs(N.icon.attrs[A], O),
                        N.paths[A].d2 = N.scaledPathData[A];
                    if (c.sprite) {
                        for (0 === z && (Z.width = (N.height + T) * m - T),
                        O = _ + N.width,
                        O > Z.width && (_ = 0,
                        ab += N.height + T),
                        N.x = _,
                        N.y = ab,
                        N.position = (_ ? "-" + _ + "px" : "0") + " " + (ab ? "-" + ab + "px" : "0"),
                        O = N.x + N.width; O > _ || T / 2 > _ - O; )
                            _ += N.height + T;
                        _ + N.width > Z.width && (_ = 0,
                        ab += N.height + T,
                        O > Z.width && (N.x = _,
                        N.y = ab))
                    }
                    $.push(N),
                    K.glyphs.push(N)
                }
                c.sprite && (Z.height = ab + N.height,
                ab = Z.height + T),
                Y[y] = {
                    glyphs: K.glyphs,
                    grid: K.grid
                }
            }
        return $ = $.length > 0 ? $ : !1,
        Y = Y.length > 0 ? Y : !1,
        R = R.length > 0 ? R : !1,
        (c.defs || c.html || c.html2) && (s = b.defer(),
        W.defs = s.promise,
        e().get("defs.svg").then(function(a) {
            p = a.fillup({
                symbols: $
            }),
            s.resolve(p)
        })),
        c.polymer && (E = b.defer(),
        b.all([e().get("icomoon-iconset-svg.html"), e().get("polymer-readme.txt")]).then(function(b) {
            E.resolve({
                html: b[0].fillup({
                    symbols: $,
                    height: a.normSize
                }),
                txt: b[1].fillup({
                    glyphName: $ && $[0] ? $[0].glyphName : "pen"
                })
            })
        }),
        W.polymer = E.promise),
        c.selection && (G = b.defer(),
        W.selection = G.promise,
        F = JSON.parse(JSON.stringify(r)),
        F.forEach(function(a) {
            delete a.properties.tempChar,
            delete a.icon.id,
            delete a.icon.matchesSearch
        }),
        F = {
            IcoMoonType: "selection",
            icons: F,
            height: a.normSize,
            preferences: a.pref
        },
        "compact" === c.selection ? G.resolve(JSON.stringify(F)) : G.resolve(JSON.stringify(F, null , "  "))),
        c.html && (v = b.defer(),
        W.html = v.promise,
        s.promise.then(function() {
            e().get("demo-svg.html").then(function(a) {
                Y && (Y[0].glyphs[0].url = ""),
                v.resolve(a.fillup({
                    defs: "\n" + p,
                    sets: Y,
                    info: ""
                }))
            })
        })),
        c.html2 && (w = b.defer(),
        W.html2 = w.promise,
        s.promise.then(function() {
            e().get("demo-svg2.html").then(function(a) {
                Y && (Y[0].glyphs[0].url = ""),
                w.resolve(a.fillup({
                    sets: Y,
                    info: ""
                }))
            })
        })),
        c.html3 && (x = b.defer(),
        W.html3 = x.promise,
        e().get("demo-svg.html").then(function(a) {
            Y && (Y[0].glyphs[0].url = "symbol-defs.svg"),
            x.resolve(a.fillup({
                defs: "",
                sets: Y,
                info: '<p><strong>Notice</strong>: This demo (along with "symbol-defs.svg" and "svgxuse.js" files) should be <b>hosted on a web server</b> to work properly.</p>',
                script: '<script defer src="' + (S.minifyJs ? "svgxuse.min.js" : "svgxuse.js") + '"></script>'
            }))
        })),
        c.polyfill && (D = b.defer(),
        W.polyfill = D.promise,
        e().get(S.minifyJs ? "svgxuse.min.js" : "svgxuse.js").then(function(a) {
            D.resolve(a.fillup().replace(/CLOUDLINK/, ""))
        })),
        c.demoCss && (t = b.defer(),
        W.demoCss = t.promise,
        e().get("demo-svg.css").then(function(a) {
            t.resolve(a.fillup({
                fontSizes: R,
                color: h
            }))
        })),
        c.css && (o = b.defer(),
        W.css = o.promise,
        e().get("style-svg.css").then(function(a) {
            var b = [];
            Y && Y.forEach(function(a) {
                var c, d, e = [];
                for (d = 0; d < a.glyphs.length; d += 1)
                    c = a.glyphs[d],
                    c.classSelector = !1,
                    (c.attrs || 1 !== c.w2hratio) && (1 !== c.w2hratio && (c.classSelector = [{
                        w2h: c.w2hratio,
                        prefix: c.prefix,
                        postfix: c.postfix,
                        glyphName: c.glyphName
                    }]),
                    e.push(c));
                e.length && b.push({
                    glyphs: e,
                    grid: a.grid
                })
            }),
            o.resolve(a.fillup({
                color: h,
                selector: J,
                sets: b.length ? b : !1,
                bgColor: d ? {
                    value: d
                } : !1,
                prefix: S.prefix,
                postfix: S.postfix,
                colorTheme: !1
            }).replace(/\n+$/, "\n"))
        })),
        (c.svgs || c.sprite || c.png) && (H = [],
        c.html && H.push(v.promise),
        c.defs && H.push(s.promise),
        c.polymer && H.push(E.promise),
        c.svgs && (M = b.defer(),
        W.svgs = M.promise),
        c.png && (C = b.defer(),
        W.pngs = C.promise),
        c.pdf && (B = b.defer(),
        H.push(q),
        W.pdfs = B.promise),
        c.csh && (n = b.defer(),
        W.csh = n.promise),
        c.xaml && (P = b.defer(),
        H.unshift(e().get("image.xaml.tmpl")),
        W.xamls = P.promise),
        c.sprite && (L = b.defer(),
        W.sprite = L.promise),
        b.all(H).then(function(a) {
            var b = a[0];
            e().get("image.svg").then(function(a) {
                var f, g, i, k, m, o, p, q, r, s, t = [], v = {}, w = [], x = [];
                for (c.png && (q = [],
                f = document.createElement("canvas")),
                c.pdf && (p = []),
                i = 0; i < $.length; i += 1)
                    m = $[i].svgPath,
                    m.name = $[i].glyphName,
                    t.push(m);
                for (c.csh && n.resolve(j(t).generateCSH()),
                i = 0; i < $.length; i += 1) {
                    for (m = t[i],
                    u = $[i].height,
                    o = $[i].scaledPathData,
                    k = 0; k < o.length; k += 1)
                        $[i].paths[k].d = o[k];
                    if (S.numPrefix) {
                        for (r = i + 1 + ""; r.length < String($.length + 1).length; )
                            r = "0" + r;
                        g = r + "-" + $[i].glyphName
                    } else
                        g = $[i].glyphName;
                    O = a.fillup($[i]),
                    c.xaml && ($[i].xamlName = (($[i].prefix || "") + ($[i].glyphName || "") + ($[i].postfix || "")).replace(/-/gi, "_").replace(/[^a-z_0-9]/gi, ""),
                    s = b.fillup($[i])),
                    c.png && (f.width = $[i].width,
                    f.height = $[i].height,
                    canvg(f, O),
                    q.push({
                        name: g + ".png",
                        data: f.toDataURL().replace(/.*,/m, "")
                    })),
                    c.pdf && p.push({
                        name: g + ".pdf",
                        data: l({
                            attrs: $[i].icon.attrs,
                            scale: $[i].scale,
                            bgColor: d,
                            defaultColor: h,
                            path: m,
                            width: $[i].width,
                            height: $[i].height
                        })
                    }),
                    w.push({
                        name: g + ".svg",
                        data: O
                    }),
                    c.xaml && x.push({
                        name: g + ".xaml",
                        data: s
                    })
                }
                c.svgs && M.resolve(w),
                c.png && C.resolve(q),
                c.xaml && P.resolve(x),
                c.pdf && B.resolve(p),
                c.sprite && e().get("sprite.svg").then(function(a) {
                    return O = a.fillup({
                        g: $,
                        width: Z.width,
                        height: Z.height
                    }),
                    c.png && (f = document.createElement("canvas"),
                    f.width = Z.width,
                    f.height = Z.height,
                    canvg(f, O),
                    v.png = f.toDataURL().replace(/.*,/m, "")),
                    v.svg = O,
                    e().get("sprite.html")
                }).then(function(a) {
                    return O = a.fillup({
                        sets: Y,
                        fontSizes: R
                    }),
                    v.html = O,
                    e().get("sprite.css")
                }).then(function(a) {
                    O = a.fillup({
                        selector: J,
                        bgColor: d ? {
                            value: d
                        } : !1,
                        sets: Y
                    }),
                    v.css = O,
                    L.resolve(v)
                })
            })
        })),
        W
    }
    var n, o, p, q, r, s;
    a.$watch(function() {
        return a.imagePref
    }, function(b) {
        b.prefix && b.prefix.trim() || (b.useClassSelector ? b.useClassSelector = !0 : b.prefix = "icon-"),
        b.pdf && !q && (q = h.load("components/jspdf/jspdf.min.js")),
        b.useClassSelector && (b.classSelector = b.classSelector || "",
        b.classSelector = "." + (b.classSelector.replace(/[^a-zA-Z\-\_0-9]/g, "").replace(/^[^a-zA-Z_\-]/, "").replace(/^-([^a-zA-Z_])/, "") || "icon")),
        s = c(function() {
            a.imagePref.autoHost && a.host({
                onlyDev: !0
            })
        }, 2e3)
    }, !0),
    function() {
        var b = [];
        a.$watch(function() {
            return r = a.getSelectedIcons(),
            JSON.stringify(r) + a.history.idx
        }, function() {
            var d, e, g, h, i, j, l, n, q = a.imagePref.color || 0, t = 0 / 0, u = a.normSize, v = r.length;
            for (p = [],
            a.glyphNames = {
                empty: ""
            },
            r = a.sortByGrid(r),
            o = [],
            a.glyphSets = [],
            d = 0; v > d; d += 1) {
                for (n = r[d],
                e = n.icon,
                i = n.properties.name,
                i ? i = k(i) : (!i && e.tags && (i = e.tags[0].replace(/[^\w\d\-\_]/g, "").replace(/^\d+/, "")),
                i || (i = "untitled"),
                i = k(i)),
                n.properties.name = i,
                j = f(e.paths),
                j.viewBox = {
                    width: e.width || u,
                    height: e.height || u
                },
                l = j.getPathData(!0),
                g = 0; g < l.length; g += 1)
                    l[g] = {
                        d: l[g]
                    },
                    e.attrs && e.attrs[g] && (l[g].attrs = e.attrs[g]),
                    /fill/.test(l[g].attrs) || (l[g].fill = ' fill="#' + q + '"');
                o[d] = {
                    grid: e.grid,
                    properties: n.properties,
                    icon: e,
                    selectionIdx: d,
                    paths: l,
                    viewBox: j.viewBox,
                    w2hratio: j.viewBox.width / j.viewBox.height,
                    glyphName: i.replace(/\s+/g, "").split(/,/)[0],
                    setId: n.setId,
                    setIdx: n.setIdx,
                    iconIdx: n.iconIdx
                }
            }
            for (a.glyphs = o,
            g = -1,
            d = 0; v > d; d += 1)
                o[d].grid !== t && (t = o[d].grid,
                g += 1,
                b[g] = b[g] || [],
                b[g].grid = t,
                -1 !== g && b[g].splice(h),
                h = 0),
                b[g][h] = o[d],
                b[g][h].properties.prevSize = b[g][0].properties.prevSize || t || 32,
                h += 1;
            h && -1 !== g && b[g].splice(h),
            b.splice(g + 1),
            a.glyphSets = b,
            m({
                defs: !0
            }).defs.then(function(b) {
                var c = b.length;
                1e3 > c ? a.size = "less than 1 KB" : (c = Math.round(c / 1e3),
                a.size = c + " KB")
            }),
            c.cancel(s),
            s = c(function() {
                a.imagePref.autoHost && a.host({
                    onlyDev: !0
                })
            }, 2e3)
        })
    }(),
    a.removeGlyph = function(a) {
        a.properties.order = 0
    }
    ,
    a.editGlyph = function(b) {
        r = a.sortByGrid(r);
        var c = r[b.selectionIdx]
          , d = [c.iconIdx];
        d.properties = b.properties,
        d.noNavigation = !0,
        a.changeIcons(d, c.setIdx, "edit")
    }
    ,
    a.download = function() {
        var c, f, g = a.imagePref, h = {}, i = d();
        a.downloading = !0,
        c = m({
            html: !0,
            html3: !0,
            polyfill: !0,
            defs: !0,
            css: !0,
            demoCss: !0,
            svgs: !0,
            selection: !0,
            png: g.png,
            pdf: g.pdf,
            xaml: g.xaml,
            polymer: g.polymer,
            csh: g.csh,
            sprite: g.sprite
        }),
        h.htmlAdded = b.defer(),
        h.html3Added = b.defer(),
        h.polyfillAdded = b.defer(),
        h.readMeAdded = b.defer(),
        h.defsAdded = b.defer(),
        h.cssAdded = b.defer(),
        h.demoCssAdded = b.defer(),
        h.svgsAdded = b.defer(),
        h.spriteAdded = b.defer(),
        f = [h.htmlAdded.promise, h.html3Added.promise, h.polyfillAdded.promise, h.readMeAdded.promise, h.defsAdded.promise, h.cssAdded.promise, h.demoCssAdded.promise, h.svgsAdded.promise],
        e().get("readme-svg.txt").then(function(a) {
            i.add("Read Me.txt", a.fillup({
                selector: g.useClassSelector ? (g.classSelector || ".icon").slice(1) + " " : "",
                prefix: g.prefix,
                postfix: g.postfix,
                glyphName: r[0] ? r[0].properties.name : "home"
            })),
            h.readMeAdded.resolve()
        }),
        c.selection.then(function(a) {
            i.add("selection.json", a)
        }),
        c.html.then(function(a) {
            i.add("demo.html", a),
            h.htmlAdded.resolve()
        }),
        c.html3.then(function(a) {
            i.add("demo-external-svg.html", a),
            h.html3Added.resolve()
        }),
        c.polyfill.then(function(a) {
            i.add("svgxuse." + (g.minifyJs ? "min." : "") + "js", a),
            h.polyfillAdded.resolve()
        }),
        c.defs.then(function(a) {
            i.add("symbol-defs.svg", a),
            h.defsAdded.resolve()
        }),
        c.css.then(function(a) {
            i.add("style.css", a),
            h.cssAdded.resolve()
        }),
        c.demoCss.then(function(a) {
            i.add("demo-files/demo.css", a),
            h.demoCssAdded.resolve()
        }),
        c.svgs.then(function(a) {
            a.forEach(function(a) {
                i.add("SVG/" + a.name, a.data)
            }),
            h.svgsAdded.resolve()
        }),
        g.png && (h.pngsAdded = b.defer(),
        f.push(h.pngsAdded.promise),
        c.pngs.then(function(a) {
            a.forEach(function(a) {
                i.add("PNG/" + a.name, a.data, {
                    base64: !0
                })
            }),
            h.pngsAdded.resolve()
        })),
        g.xaml && (h.xamlsAdded = b.defer(),
        f.push(h.xamlsAdded.promise),
        c.xamls.then(function(a) {
            a.forEach(function(a) {
                i.add("XAML/" + a.name, a.data)
            }),
            h.xamlsAdded.resolve()
        })),
        g.polymer && c.polymer.then(function(a) {
            h.polymerAdded = b.defer(),
            f.push(h.polymerAdded.promise),
            i.add("icomoon-polymer/icomoon-iconset-svg.html", a.html),
            i.add("icomoon-polymer/Read Me.txt", a.txt),
            h.polymerAdded.resolve()
        }),
        g.csh && (h.cshAdded = b.defer(),
        f.push(h.cshAdded.promise),
        c.csh.then(function(a) {
            h.cshAdded.resolve(),
            i.add("Custom Shapes.csh", a, {
                base64: !0
            })
        })),
        g.pdf && (h.pdfsAdded = b.defer(),
        f.push(h.pdfsAdded.promise),
        c.pdfs.then(function(a) {
            a.forEach(function(a) {
                i.add("PDF/" + a.name, a.data)
            }),
            h.pdfsAdded.resolve()
        })),
        g.sprite && (h.spriteAdded = b.defer(),
        f.push(h.spriteAdded.promise),
        c.sprite.then(function(a) {
            i.add("sprite/sprite.html", a.html),
            i.add("sprite/sprite.css", a.css),
            i.add("sprite/sprite.svg", a.svg),
            g.png && i.add("sprite/sprite.png", a.png, {
                base64: !0
            }),
            h.spriteAdded.resolve()
        })),
        b.all(f).then(function() {
            i.save("icomoon_" + r.length + "_icons.zip").then(function() {
                a.downloading = !1
            })
        })
    }
    ,
    a.quickUsage = {
        statusMessage: "Working" + String.fromCharCode(8230),
        placeholder: '<link rel="stylesheet" href="...">\n<script src="..."></script>'
    },
    function() {
        var b, d = e('<link rel="stylesheet" href="{{href}}">'), f = a.pref.imageUrlHash || 0, g = e('<script src="{{src}}"></script>');
        a.pref.imageUrlS3 && (a.quickUsage.ref2 = d.fillup({
            href: a.pref.imageUrlS3 + "/style-svg.css?" + f
        }) + "\n" + g.fillup({
            src: a.pref.imageUrlS3 + "/svgxuse-s3.js?" + f
        }),
        a.quickUsage.url2 = a.pref.imageUrlS3 + "/svgxuse-s3.js?" + f),
        a.pref.imageCF ? (b = (new Date).getTime() - a.pref.imageCF.time,
        9e5 > b && (a.quickUsage.ref3 = a.quickUsage.placeholder,
        a.quickUsage.url3 = "..."),
        c.cancel(n),
        n = c(function() {
            a.quickUsage.ref3 = d.fillup({
                href: a.pref.imageCF.url + "/style-svg.css?" + f
            }) + "\n" + g.fillup({
                src: a.pref.imageCF.url + "/svgxuse-cf.js?" + f
            }),
            a.quickUsage.url3 = a.pref.imageCF.url + "/svgxuse-cf.js?" + f
        }, 9e5 - b)) : a.pref.imageUrlCF && (a.quickUsage.ref3 = d.fillup({
            href: a.pref.imageUrlCF + "/style-svg.css?" + f
        }) + "\n" + g.fillup({
            src: a.pref.imageUrlCF + "/svgxuse-cf.js?" + f
        }))
    }(),
    a.host = function(f) {
        var h, i, j, k, l = f && f.enable, o = a.imagePref, p = f && f.onlyDev && a.pref.imageUploadTime, q = {}, r = [];
        (o.autoHost || l) && (i = m({
            html: !0,
            html2: !0,
            css: !0,
            defs: !0,
            demoCss: !0
        }),
        h = e().get(o.minifyJs ? "svgxuse.min.js" : "svgxuse.js"),
        r = [i.html, i.html2, i.css, i.defs, h],
        i.html.then(function(a) {
            q.html = a
        }),
        i.html2.then(function(a) {
            q.html2 = a
        }),
        i.css.then(function(a) {
            q.css = a
        }),
        i.defs.then(function(a) {
            q.defs = a
        }),
        i.demoCss.then(function(a) {
            q.demoCss = a
        }),
        h.then(function(a) {
            q.js = a.fillup()
        }),
        k = d(),
        o.autoHost = !0,
        j = a.project.metadata.name.replace(/[^a-zA-Z\-\_0-9]/g, ""),
        p = p && a.pref.imageHostingName === j,
        a.pref.quickUsageToken && a.pref.quickUsageToken[j] || (a.pref.quickUsageToken = {}),
        a.onlineEditor = {
            disabled: !0
        },
        a.quickUsage.uploading = p ? "Update" : "Uploading" + String.fromCharCode(8230),
        b.all(r).then(function() {
            var b, d, f;
            k.add("style-svg.css", q.css),
            k.add("svgxuse.js", q.js),
            k.add("symbol-defs.svg", q.defs),
            k.add("demo.css", q.demoCss),
            k.add("selection.json", q.selection),
            f = q.selection + a.project.metadata.name,
            b = f.hashCode(),
            d = {
                hash: b,
                zip: k.getArrayBuffer().toString(!0),
                name: j,
                token: a.pref.quickUsageToken[j],
                ssl: !0,
                type: "svg",
                onlyDev: p
            },
            b = b.toString(36),
            p && (b = a.pref.imageUrlHash || 0),
            a.history.ignore = !0,
            a.quickUsage.icon = "sync fgc-warning",
            a.quickUsage.statusMessage = "Uploading" + String.fromCharCode(8230),
            g.host(d).then(function(d) {
                var f, h = e('<link rel="stylesheet" href="{{href}}">'), i = e('<script defer src="{{src}}"></script>'), k = {}, l = "";
                g.hasCloudAccess().then(null , function() {
                    d.path2 || d.path3 || (l = " It will expire in 24 hours. ")
                }).finally(function() {
                    a.quickUsage.url = d.path + "/style-svg.css",
                    k = {
                        html: "<!-- Add the following references to the <head> of your HTML.\nFor development purposes only. Do not use in Production." + l + " -->\n"
                    },
                    d.path && (f = i.fillup({
                        src: d.path + "/svgxuse.js"
                    }),
                    a.quickUsage.ref = h.fillup({
                        href: d.path + "/style-svg.css"
                    }) + "\n" + f,
                    k.html += f,
                    k.css_external = d.path + "/demo.css"),
                    d.path2 && (a.quickUsage.ref2 = h.fillup({
                        href: d.path2 + "/style-svg.css?" + b
                    }) + "\n" + i.fillup({
                        src: d.path2 + "/svgxuse-s3.js?" + b
                    }),
                    a.quickUsage.url2 = d.path2 + "/svgxuse-s3.js?" + b),
                    k.html += "\n" + q.html2,
                    k.css = q.css,
                    a.onlineEditor.data = JSON.stringify(k),
                    a.onlineEditor.disabled = !1,
                    a.pref.quickUsageToken[j] = d.token,
                    a.history.ignore = !0,
                    a.quickUsage.icon = "check fgc-success",
                    a.quickUsage.statusMessage = "Ready",
                    a.quickUsage.uploading = !1,
                    !p && d.path2 && (k = new Date,
                    a.pref.imageUploadTime = k.toLocaleDateString() + ", " + k.toLocaleTimeString(),
                    a.pref.imageUrlS3 = d.path2,
                    a.pref.imageCF = {
                        url: d.path3,
                        time: (new Date).getTime()
                    },
                    a.quickUsage.ref3 = a.quickUsage.placeholder,
                    a.quickUsage.url3 = "...",
                    c.cancel(n),
                    n = c(function() {
                        a.quickUsage.ref3 = h.fillup({
                            href: d.path3 + "/style-svg.css?" + b
                        }) + "\n" + i.fillup({
                            src: d.path3 + "/svgxuse-cf.js?" + b
                        }),
                        a.quickUsage.url3 = a.pref.imageCF.url + "/svgxuse-s3.js?" + b
                    }, 9e5),
                    a.pref.imageUrlHash = b,
                    a.pref.imageHostingName = j),
                    d.path2 || (a.pref.imageHostingName = void 0,
                    a.imageUploadTime = void 0,
                    a.pref.imageUrlS3 = void 0,
                    a.pref.imageCF = void 0,
                    a.pref.imageUploadTime = void 0,
                    a.quickUsage.ref2 = void 0,
                    a.quickUsage.url2 = void 0,
                    a.quickUsage.ref3 = void 0,
                    a.quickUsage.url3 = void 0)
                })
            }, function() {
                a.quickUsage.icon = "warning fgc-error",
                a.quickUsage.statusMessage = "Upload Failed",
                a.quickUsage.uploading = !1
            })
        }))
    }
    ,
    a.getEmbedCode = function(c) {
        var d, e, f, g, h = "", i = a.imagePref, j = !1;
        c ? (f = c.properties.name,
        e = (i.prefix || "") + f + (i.postfix || ""),
        i.useClassSelector && (h = i.classSelector.slice(1) + " "),
        d = [[c]],
        o.every(function(a) {
            return j === !1 ? (j = a.setId,
            !0) : j === a.setId
        }) || d.push(!1)) : d = !1,
        g = m({
            defs: !0,
            css: !0,
            glyphSets: d
        }),
        g = [g.defs, g.css],
        b.all(g).then(function(b) {
            var d, f = b[1], g = b[0];
            c && (g = g.slice(g.indexOf("<symbol"), g.indexOf("</symbol>") + 9),
            d = f.indexOf(e),
            -1 === d && (d = f.indexOf("fill-color")),
            f = (f.slice(0, f.indexOf("/*") - 1) + (-1 === d ? "" : f.slice(d - 1))).replace(/\n+$/, "")),
            a.embedCodes = {
                html: '<svg class="' + h + e + '"><use xlink:href="#' + e + '"></use></svg>',
                def: g,
                defLines: g.match(/\n/g).length + 1,
                css: f,
                cssLines: f ? f.match(/\n/g).length + 1 : 0
            },
            c || delete a.embedCodes.html,
            a.visiblePanels.getcode2 = !0
        })
    }
    ,
    a.getHexColor = function(a) {
        for (a = a.toString(16); a.length < 6; )
            a = "0" + a;
        return a
    }
    ,
    e().get("demo-svg.html"),
    e().get("readme-svg.txt"),
    e().get("demo-svg.css"),
    e().get("style-svg.css"),
    e().get("defs.svg"),
    e().get("image.svg"),
    e().get("image.svg"),
    e().get(a.imagePref.minifyJs ? "svgxuse.min.js" : "svgxuse.js")
}
]),
angular.module("icomoonApp").controller("ProjectsCtrl", ["$scope", "$state", "$q", "session", "cloud", "message", "fileSaver", "storage", function(a, b, c, d, e, f, g, h) {
    var i, j, k, l, m, n = c.defer();
    a.newProjectDisabled = !1,
    function() {
        var a = d("icomoon");
        h.load("currentProject", function(b) {
            j = b,
            a.load("icomoon-lib/presets.json").then(function(b) {
                var c, e, f, g = [], i = [], k = b.projects, l = !1;
                for (c = 0,
                e = k.length; e > c; c += 1)
                    k[c].iconSets && (l = !0,
                    f = (new Date).getTime() + c,
                    k[c].metadata.created = f,
                    d(f).quickSave(k[c])),
                    g.push(k[c].metadata ? k[c].metadata : k[c]),
                    i.push(g[c].created);
                l ? (b.projects = g,
                b.time += 1,
                a.quickSave(b).then(function() {
                    n.resolve(b)
                })) : n.resolve(b),
                -1 === i.indexOf(j) && (j = i[0] || 0,
                h.save("currentProject", j))
            })
        })
    }(),
    n.promise.then(function(c) {
        function n(b) {
            var c, d = [];
            if (b = b || "Untitled Project",
            b = b.replace(/\d+$/, "").trim(),
            d = a.projects.map(function(a) {
                return a.metadata.name
            }),
            -1 === d.indexOf(b))
                c = "";
            else
                for (b += " ",
                c = 1; -1 !== d.indexOf(b + c); )
                    c += 1;
            return b + c
        }
        a.projectsReady = !0,
        function() {
            var b, d, e, f = [];
            for (l = c,
            e = l.projects.slice(0),
            a.order = l.order || "Date Created",
            l.order = a.order,
            a.projects = [],
            b = 0,
            d = e.length; d > b; b += 1)
                -1 === f.indexOf(e[b].created) && (f.push(e[b].created),
                a.projects.push({
                    idx: b,
                    metadata: e[b]
                }),
                e[b].created === j && (i = a.projects[b]));
            !i && d > 0 && (i = a.projects[0])
        }();
        var o = d("icomoon");
        a.isSyncing = o.isSyncing,
        e.auth().then(function() {
            a.signedIn = !0
        }, function() {
            a.signedIn = !1
        }),
        e.hasCloudAccess().then(function() {
            a.cloudAccess = !0
        }, function() {
            a.cloudAccess = !1
        }),
        a.$watch("order", function(b) {
            var c;
            c = "Date Modified" === b ? function(a, b) {
                return b.metadata.lastOpened - a.metadata.lastOpened
            }
            : "Date Created" === b ? function(a, b) {
                return a.metadata.created - b.metadata.created
            }
            : function(a, b) {
                return a.metadata.name.localeCompare(b.metadata.name)
            }
            ,
            a.projects.sort(c)
        }),
        a.loadProject = function(c, e) {
            var f;
            return i = !1,
            k = !0,
            e.loading = !0,
            a.projects.disabled = !0,
            e.disabled ? (setTimeout(function() {
                a.loadProject(c, e)
            }, 200),
            void 0) : (l.projects[c].lastOpened = (new Date).getTime(),
            l.projects[c].name = e.metadata.name,
            f = l.projects[c].created || l.projects[c].metadata.created,
            d(f).downloadProgressHandler = function(b) {
                var c = b.total || b.totalSize;
                b.loaded !== c && a.$apply(function() {
                    var a = b.loaded / c;
                    a > 1 && (a = 1),
                    e.progress = a
                })
            }
            ,
            h.save("currentProject", f, function() {
                b.transitionTo("select").then(function() {
                    o.save(l)
                })
            }),
            void 0)
        }
        ,
        a.newProject = function(b) {
            var c, e, f;
            b = b || {},
            !a.cloudAccess && a.projects.length > 3 ? a.showPromo({
                r3f: "06"
            }) : (c = {
                name: n(),
                lastOpened: 0,
                created: (new Date).getTime()
            },
            e = {
                metadata: c,
                iconSets: b.iconSets || []
            },
            b.preferences && (e.preferences = b.preferences),
            f = {
                idx: l.projects.length,
                metadata: c,
                disabled: !0
            },
            a.projects.push(f),
            window.scrollTo(0, 99999),
            k = !0,
            a.newProjectDisabled = !0,
            d(c.created).quickSave(e).then(function(b) {
                return function() {
                    l.projects.push(b.metadata),
                    b.disabled = !1,
                    o.quickSave(l).then(function() {
                        a.newProjectDisabled = !1
                    })
                }
            }(f)))
        }
        ,
        a.removeProject = function(b, c) {
            var d = function() {
                var d = l.projects[b];
                d = d.created ? d.created : d.metadata.created,
                h.remove(d),
                l.projects.splice(b, 1),
                a.projects.splice(c, 1),
                a.projects.forEach(function(a) {
                    a.idx > b && (a.idx -= 1)
                }),
                o.quickSave(l)
            };
            f.show({
                message: "Are you sure you want to remove this project?<br><strong>" + l.projects[b].name + "</strong>",
                firstButton: {
                    caption: "Yes"
                },
                secondButton: {
                    caption: "No",
                    focused: !0
                }
            }).then(function(a) {
                "Yes" === a && d()
            })
        }
        ,
        a.downloadProject = function(a) {
            d(l.projects[a].created).load().then(function(a) {
                g().save(a.metadata.name + ".json", JSON.stringify(a, null , "  "))
            })
        }
        ,
        a.import = function(b) {
            var c, e, g, h, i, j, k, m, p;
            if (b) {
                if (!a.cloudAccess && a.projects.length > 3)
                    return a.showPromo({
                        r3f: "06"
                    }),
                    void 0;
                for (i = b.length,
                i || f.show("Please select IcoMoon project files (JSON)."),
                c = 0; i > c; c += 1) {
                    if (k = JSON.parse(b[c].file),
                    e = "icon-set" === k.IcoMoonType,
                    g = "selection" === k.IcoMoonType,
                    delete k.uid,
                    delete k.premium,
                    g && k.icons) {
                        for (m = [],
                        h = 0,
                        j = k.icons.length; j > h; h += 1)
                            m[h] = k.icons[h].properties,
                            k.icons[h] = k.icons[h].icon;
                        k.selection = m
                    }
                    if ((e || g) && k.icons) {
                        if (delete k.IcoMoonType,
                        k.metadata || (k.metadata = {
                            name: "Untitled Set"
                        }),
                        !k.prevSize)
                            try {
                                k.prevSize = k.selection[0].prevSize
                            } catch (q) {}
                        return a.newProject({
                            iconSets: [k],
                            preferences: k.preferences || !1
                        }),
                        void 0
                    }
                    k.iconSets && k.metadata ? (k.metadata.name = n(k.metadata.name),
                    k.metadata.created = (new Date).getTime(),
                    k.metadata.lastOpened = 0,
                    p = {
                        metadata: k.metadata,
                        idx: a.projects.length,
                        disabled: !0
                    },
                    a.projects.push(p),
                    window.scrollTo(0, 99999),
                    d(k.metadata.created).quickSave(k).then(function(a, b) {
                        return function() {
                            l.projects.push(a.metadata),
                            b.disabled = !1,
                            o.quickSave(l)
                        }
                    }(k, p))) : f.show("The project file you selected is not valid.")
                }
            }
        }
        ,
        a.reset = function() {
            d.reset().then(function() {
                location.reload()
            })
        }
        ,
        a.$on("$stateChangeStart", function() {
            i && (i.loading = !0,
            a.projects.disabled = !0,
            k = !0)
        }),
        a.showPromo = function(b) {
            a.cloudAccess || (f.show({
                message: ['<p class="talign-left mvn">You can manage <span class="fgc0">up to 4 projects</span>.<br />Become a premium member of IcoMoon to: </p>', '<ul class="noListStyle talign-left">', '<li><i class="icon-check fgc9 mrs"></i>Manage an unlimited number of projects</li>', '<li><i class="icon-check fgc9 mrs"></i>Save changes in your account</li>', '<li><i class="icon-check fgc9 mrs"></i>Encode and embed fonts in CSS</li>', '<li><i class="icon-check fgc9 mrs"></i>Generate WOFF 2.0 fonts</li>', '<li><i class="icon-check fgc9 mrs"></i>Access extra icon packs in the <a href="#/select/library">library tab</a></li>', '<li><i class="icon-check fgc9 mrs"></i>Upload icons for sharing, development or production</li>', "</ul>"].join(""),
                firstButton: {
                    caption: "Subscribe",
                    focused: !0
                },
                secondButton: {
                    caption: "Cancel"
                }
            }).then(function(a) {
                "Subscribe" === a && (window.location = "https://icomoon.io/#premium/r3f" + (b.r3f || "03"))
            }),
            b && b.hide && (a.visiblePanels[b.hide] = !1))
        }
        ,
        a.$watch(function() {
            return a.order + JSON.stringify(a.projects)
        }, function() {
            return clearTimeout(m),
            k ? (o.quickSave(l),
            void 0) : (a.projects.forEach(function(b, c) {
                var e;
                b.metadata.name = b.metadata.name.trim(),
                b.metadata.name || (b.metadata.name = n("Untitled Project")),
                l.projects[b.idx] && (l.projects[b.idx].name = b.metadata.name,
                e = d(b.metadata.created),
                e.load().then(function(a) {
                    a && a.metadata && a.metadata.name !== b.metadata.name && (a.metadata.name = b.metadata.name,
                    e.quickSave())
                }, function(d) {
                    "no such project" === d && (l.projects.splice(b.idx, 1),
                    a.projects.splice(c, 1))
                }))
            }),
            m = setTimeout(function() {
                l.order = a.order,
                k || o.quickSave(l)
            }, 1e3),
            void 0)
        })
    })
}
]),
angular.module("icomoonApp").controller("LibCtrl", ["$scope", "$http", "$state", "iconSets", "cloud", function(a, b, c, d, e) {
    var f = !1
      , g = e.getPurchases().then(function(a) {
        var b = [];
        return a.forEach(function(a) {
            isNaN(a.product) || (b[a.product] = a.jsonlink)
        }),
        b
    });
    !function() {
        var b = [];
        d.forEach(function(a) {
            a.ignore || (b.push(a),
            f === !1 && a.premium && (f = b.length - 1))
        }),
        d = b,
        a.collections = [],
        a.collections[0] = d.slice(0, f),
        a.collections[1] = d.slice(f),
        a.collections[1].premium = !0
    }(),
    a.$watch(function() {
        return a.project.iconSets.slice(0)
    }, function(b) {
        var c, e, f, h, i, j = [];
        for (c = function(a, b) {
            var c = a[b.productId];
            c ? (b.hasAccess = !0,
            b.json = c) : b.hasAccess = !1
        }
        ,
        h = b.length,
        e = 0; h > e; e += 1)
            i = b[e],
            b[e] = i.metadata.name,
            j[e] = a.getSetHash(i);
        for (e = 0,
        h = d.length; h > e; e += 1)
            i = d[e],
            f = b.indexOf(i.name),
            i.button = {},
            -1 === f ? (i.added = i.latest = !1,
            i.button.caption = "Add",
            i.button.caption2 = "Adding",
            i.button.icon = "plus") : (i.added = {
                idx: f
            },
            i.latest = -1 !== j.indexOf(i.iconsHash),
            i.latest ? (i.button.caption = "Remove",
            i.button.caption2 = "Removing",
            i.button.icon = "minus") : (i.button.caption = "Restore / Update",
            i.button.caption2 = "Loading",
            i.button.icon = "sync")),
            i.purchaseLink ? (i.hasAccess = "loading",
            function(a) {
                g.then(function(b) {
                    c(b, a)
                })
            }(i)) : i.hasAccess = !0
    }, !0),
    a.addremove = function(d) {
        var e = {
            transformResponse: !1
        };
        d.added && d.latest && a.removeSet(d.added.idx),
        d.latest || (d.button.disabled = !0,
        d.productId && (e.withCredentials = !0),
        b.get(d.json, e).then(function(b) {
            d.added && a.removeSet(d.added.idx, !0),
            a.import([{
                file: b.data
            }]).finally(function() {
                a.scrollPositions.select = 0,
                c.transitionTo("select"),
                d.button.disabled = !1
            })
        }))
    }
    ,
    a.packSubmission = {},
    a.submitPack = function() {
        a.packSubmission.url && (a.packSubmission.sending = !0,
        e.contact({
            email: a.packSubmission.email,
            msg: "<b>Icon Pack Submission</b><br /><br />URL: " + a.packSubmission.url
        }).then(function() {
            a.packSubmission = {
                submitted: !0
            }
        }).finally(function() {
            a.packSubmission = {}
        }))
    }
}
]);
