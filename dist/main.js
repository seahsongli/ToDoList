(() => {
  "use strict";
  var e = {
      497: (e, t, n) => {
        n.d(t, { Z: () => A });
        var o = n(537),
          r = n.n(o),
          i = n(645),
          a = n.n(i)()(r());
        a.push([
          e.id,
          "body{\n    margin:0px;\n    padding:0px;\n    overflow:hidden;\n}\n\n.content{\n    margin:0px;\n    padding:0px;\n    height:100vh;\n    width:100vw;\n    background-color: #101820FF;\n}\n\n.header {\n    display:flex;\n    font-size:30px;\n    font-weight: bold;\n    height:10%;\n    justify-content: center;\n    align-items: center;\n    text-decoration: underline;\n    border-bottom: 1px solid black;\n    background-color: #FDD408; \n}\n\n.list{\n    height:100%;\n    display:flex;\n    justify-content: center;\n}\n\n.sidebar {\n    display:flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 70%;\n    height:50px;\n    gap:10px 20px;\n    cursor:pointer;\n    margin-top: 10px;\n    color:white;\n    font-weight: bold;\n}\n\n.taskHeaders{\n    display:flex;\n    height:100%;\n    align-items: center;\n    justify-content: center;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n}\n\n#overall{\n    background-color: rgb(235,236,240);\n    color:black;\n    border-bottom-left-radius: 9px;\n}\n\n.listContents{\n    display:flex;\n    align-items: center;\n    width:100%;\n    height:100%;\n    flex-direction: column;\n}\n\n.addButton{\n    width:170px;\n    height:90px;\n    gap:10px 10px;\n    border-radius: 15px;\n    font-size: 30px;\n    font-weight: bold;\n    align-self: flex-end;\n    margin-right: 80px;\n    cursor:pointer;\n    box-shadow: 3px 3px black;\n}\n\n.toDoContainer{\n    display:flex;   \n    flex-direction: column;\n    gap:15px 15px;\n    width:70%;\n    border-radius: 10px;\n    height:70%;\n}\n\n\n/* styling for each individual To-Do-Item */\n\n.toDoItem{\n    border-radius: 15px;\n    width:70%;\n    background-color: rgb(235,236,240);\n    color:black;\n    align-self: center;\n    align-content: center;\n    padding:10px;\n    box-shadow: 5px 5px black;\n}\n\n.itemContents{\n    display:flex;\n    flex-direction: column;\n    width:90%;\n}\n\n.title, \n.dueDate{\n    font-weight: bold;\n}\n\n.title{\n    font-size:20px;\n}\n\n.dueDate{\n    font-size:17px;\n}\n\n.deleteToDoItem{\n    width:30px;\n    height:30px;\n    border-radius:30px;\n    align-self:center;\n    margin-left: 30px;\n}\n\n/* End of styling for each individual To-Do-Item */\n\n\n/* Start of Styling for Forms */\n.overlay{\n    display:none;\n    position:absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    background: rgba(0,0,0,0.8);\n    z-index:2;\n    height:100vh;\n    width:100vw;\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display:flex;\n    flex-direction: column;\n    width:30%;\n    height:45%;\n    gap:10px 10px;\n    font-size:15px;\n    background-color: gray;\n    padding:10px 10px;\n    border-radius: 4px;\n    box-shadow: 3px 6px;\n}\n\nform>input{\n    border-radius: 8px;\n    height:70px;\n    font-size:15px;\n}\n\n.deleteButton{\n    border-radius: 50%;\n    width:30px;\n    height:40px;\n    align-self: flex-end;\n    font-weight: bold;\n    font-size:15px;\n}\n\n.descriptionBox{\n    width:99%;\n    height:100%;\n    font-size:15px;\n    border-radius: 8px;\n}\n\n.radioButtons{\n    display:flex;\n    gap:20px 20px;\n    align-self: center;\n    justify-content: center;\n}\n\n.radioButtonText{\n    font-size:20px;\n    text-align: center;\n}\n\n.radioButtonDiv{\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:5px 5px;\n}\n\ninput[type=radio]{\n    align-self: center;\n    justify-self: center;\n}\n\n.submitButton{\n    border-radius: 5px;\n    width:100px;\n    height:50px;\n    align-self: center;\n    font-weight: bold;\n    font-size:20px;\n}\n\n/* End of Styling for Forms */",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/header.css"],
            names: [],
            mappings:
              "AAAA;IACI,UAAU;IACV,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,kCAAkC;IAClC,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,UAAU;AACd;;;AAGA,2CAA2C;;AAE3C;IACI,mBAAmB;IACnB,SAAS;IACT,kCAAkC;IAClC,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA,kDAAkD;;;AAGlD,+BAA+B;AAC/B;IACI,YAAY;IACZ,iBAAiB;IACjB,KAAK;IACL,OAAO;IACP,QAAQ;IACR,MAAM;IACN,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,oBAAoB;IACpB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA,6BAA6B",
            sourcesContent: [
              "body{\n    margin:0px;\n    padding:0px;\n    overflow:hidden;\n}\n\n.content{\n    margin:0px;\n    padding:0px;\n    height:100vh;\n    width:100vw;\n    background-color: #101820FF;\n}\n\n.header {\n    display:flex;\n    font-size:30px;\n    font-weight: bold;\n    height:10%;\n    justify-content: center;\n    align-items: center;\n    text-decoration: underline;\n    border-bottom: 1px solid black;\n    background-color: #FDD408; \n}\n\n.list{\n    height:100%;\n    display:flex;\n    justify-content: center;\n}\n\n.sidebar {\n    display:flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 70%;\n    height:50px;\n    gap:10px 20px;\n    cursor:pointer;\n    margin-top: 10px;\n    color:white;\n    font-weight: bold;\n}\n\n.taskHeaders{\n    display:flex;\n    height:100%;\n    align-items: center;\n    justify-content: center;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n}\n\n#overall{\n    background-color: rgb(235,236,240);\n    color:black;\n    border-bottom-left-radius: 9px;\n}\n\n.listContents{\n    display:flex;\n    align-items: center;\n    width:100%;\n    height:100%;\n    flex-direction: column;\n}\n\n.addButton{\n    width:170px;\n    height:90px;\n    gap:10px 10px;\n    border-radius: 15px;\n    font-size: 30px;\n    font-weight: bold;\n    align-self: flex-end;\n    margin-right: 80px;\n    cursor:pointer;\n    box-shadow: 3px 3px black;\n}\n\n.toDoContainer{\n    display:flex;   \n    flex-direction: column;\n    gap:15px 15px;\n    width:70%;\n    border-radius: 10px;\n    height:70%;\n}\n\n\n/* styling for each individual To-Do-Item */\n\n.toDoItem{\n    border-radius: 15px;\n    width:70%;\n    background-color: rgb(235,236,240);\n    color:black;\n    align-self: center;\n    align-content: center;\n    padding:10px;\n    box-shadow: 5px 5px black;\n}\n\n.itemContents{\n    display:flex;\n    flex-direction: column;\n    width:90%;\n}\n\n.title, \n.dueDate{\n    font-weight: bold;\n}\n\n.title{\n    font-size:20px;\n}\n\n.dueDate{\n    font-size:17px;\n}\n\n.deleteToDoItem{\n    width:30px;\n    height:30px;\n    border-radius:30px;\n    align-self:center;\n    margin-left: 30px;\n}\n\n/* End of styling for each individual To-Do-Item */\n\n\n/* Start of Styling for Forms */\n.overlay{\n    display:none;\n    position:absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    background: rgba(0,0,0,0.8);\n    z-index:2;\n    height:100vh;\n    width:100vw;\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display:flex;\n    flex-direction: column;\n    width:30%;\n    height:45%;\n    gap:10px 10px;\n    font-size:15px;\n    background-color: gray;\n    padding:10px 10px;\n    border-radius: 4px;\n    box-shadow: 3px 6px;\n}\n\nform>input{\n    border-radius: 8px;\n    height:70px;\n    font-size:15px;\n}\n\n.deleteButton{\n    border-radius: 50%;\n    width:30px;\n    height:40px;\n    align-self: flex-end;\n    font-weight: bold;\n    font-size:15px;\n}\n\n.descriptionBox{\n    width:99%;\n    height:100%;\n    font-size:15px;\n    border-radius: 8px;\n}\n\n.radioButtons{\n    display:flex;\n    gap:20px 20px;\n    align-self: center;\n    justify-content: center;\n}\n\n.radioButtonText{\n    font-size:20px;\n    text-align: center;\n}\n\n.radioButtonDiv{\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:5px 5px;\n}\n\ninput[type=radio]{\n    align-self: center;\n    justify-self: center;\n}\n\n.submitButton{\n    border-radius: 5px;\n    width:100px;\n    height:50px;\n    align-self: center;\n    font-weight: bold;\n    font-size:20px;\n}\n\n/* End of Styling for Forms */",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (o)
                for (var A = 0; A < this.length; A++) {
                  var l = this[A][0];
                  null != l && (a[l] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var s = [].concat(e[d]);
                (o && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  r &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = r))
                      : (s[4] = "".concat(r))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              i = "/*# ".concat(r, " */"),
              a = n.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(n.sourceRoot || "")
                  .concat(e, " */");
              });
            return [t].concat(a).concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var i = {}, a = [], A = 0; A < e.length; A++) {
            var l = e[A],
              d = o.base ? l[0] + o.base : l[0],
              s = i[d] || 0,
              c = "".concat(d, " ").concat(s);
            i[d] = s + 1;
            var u = n(c),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(p);
            else {
              var m = r(p, o);
              (o.byIndex = A),
                t.splice(A, 0, { identifier: c, updater: m, references: 1 });
            }
            a.push(c);
          }
          return a;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var i = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var A = n(i[a]);
              t[A].references--;
            }
            for (var l = o(e, r), d = 0; d < i.length; d++) {
              var s = n(i[d]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            i = l;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { id: o, exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      function e() {
        document.querySelector(".overlay").style.display = "none";
      }
      function t(e) {
        let t = Array.from(document.querySelectorAll(".toDoItem"));
        for (let n = 0; n < t.length; n++)
          "Low" === e[n].priority
            ? ((t[n].style.borderRight = "15px solid yellow"),
              t[n].setAttribute("id", "low"))
            : "Medium" === e[n].priority
            ? ((t[n].style.borderRight = "15px solid orange"),
              t[n].setAttribute("id", "medium"))
            : ((t[n].style.borderRight = "15px solid red"),
              t[n].setAttribute("id", "high"));
      }
      function o(e) {
        let n = JSON.parse(localStorage.getItem(e)),
          o = document.querySelector(".toDoContainer"),
          r = document.createElement("div");
        r.classList.add("toDoItem"), (r.style.display = "flex"), o.append(r);
        let i = document.createElement("div");
        i.classList.add("itemContents"), r.append(i), a(i, n.name, n.dueDate);
        let l = document.createElement("DETAILS"),
          d = document.createElement("p");
        (d.innerText = n.description),
          l.classList.add("descriptionButton"),
          l.append(d),
          i.append(l),
          A();
        let s = [];
        for (let e = 0; e < localStorage.length; e++)
          s.push(JSON.parse(localStorage[localStorage.key(e)]));
        t(s);
      }
      const r = document.querySelector(".content");
      let i = [];
      function a(e, t, n) {
        let o = document.createElement("div");
        (o.innerText = t), o.classList.add("title");
        let r = document.createElement("div");
        r.classList.add("dueDate"), (r.innerText = n), e.append(o, r);
      }
      function A() {
        let e = Array.from(document.querySelectorAll(".toDoItem")),
          t =
            (document.querySelector(".toDoContainer"),
            document.createElement("button"));
        (t.innerText = "X"),
          t.classList.add("deleteToDoItem"),
          e.pop().append(t),
          t.addEventListener("click", (e) => {
            localStorage.removeItem(
              localStorage.key(e.target.previousSibling.firstChild.innerText)
            ),
              e.target.parentNode.remove();
          });
      }
      var l = n(379),
        d = n.n(l),
        s = n(795),
        c = n.n(s),
        u = n(569),
        p = n.n(u),
        m = n(565),
        f = n.n(m),
        x = n(216),
        B = n.n(x),
        g = n(589),
        C = n.n(g),
        y = n(497),
        h = {};
      (h.styleTagTransform = C()),
        (h.setAttributes = f()),
        (h.insert = p().bind(null, "head")),
        (h.domAPI = c()),
        (h.insertStyleElement = B()),
        d()(y.Z, h),
        y.Z && y.Z.locals && y.Z.locals,
        (function () {
          let e = document.createElement("div");
          (e.innerText = "TO DO LIST"), e.classList.add("header"), r.append(e);
        })(),
        (function () {
          let e = document.createElement("list"),
            t = document.createElement("div");
          e.classList.add("list"),
            t.classList.add("listContents"),
            e.append(t),
            r.append(e);
        })(),
        (function () {
          let e = document.createElement("div"),
            t = document.querySelector(".listContents");
          e.classList.add("overlay"), t.append(e);
        })(),
        (function () {
          let e = document.querySelector(".overlay");
          document.createElement("div").classList.add("popup");
          let t = document.createElement("form");
          t.classList.add("form"), t.setAttribute("method", "post");
          let n = document.createElement("button");
          (n.innerText = "X"),
            n.classList.add("deleteButton"),
            n.setAttribute("type", "button");
          let o = document.createElement("input");
          o.setAttribute("type", "text"),
            o.setAttribute("name", "Title"),
            o.setAttribute("placeholder", "Title");
          let r = document.createElement("TEXTAREA");
          r.setAttribute("type", "text"),
            r.setAttribute("name", "description"),
            r.setAttribute("placeholder", "Description Of Task"),
            r.classList.add("descriptionBox");
          let i = document.createElement("input");
          i.setAttribute("type", "text"),
            i.setAttribute("name", "dueDate"),
            i.setAttribute("placeholder", "Date, DD/MM/YYYY");
          let a = document.createElement("div");
          a.classList.add("radioButtons");
          let A = document.createElement("div"),
            l = document.createElement("input"),
            d = document.createElement("div");
          (d.innerText = "Low"),
            d.classList.add("radioButtonText"),
            l.setAttribute("type", "radio"),
            l.setAttribute("name", "priority"),
            l.setAttribute("value", "Low"),
            A.classList.add("radioButtonDiv"),
            A.append(l, d);
          let s = document.createElement("div"),
            c = document.createElement("input"),
            u = document.createElement("div");
          (u.innerText = "Medium"),
            u.classList.add("radioButtonText"),
            c.setAttribute("type", "radio"),
            c.setAttribute("name", "priority"),
            c.setAttribute("value", "Medium"),
            s.classList.add("radioButtonDiv"),
            s.append(c, u);
          let p = document.createElement("div"),
            m = document.createElement("input"),
            f = document.createElement("div");
          (f.innerText = "High"),
            f.classList.add("radioButtonText"),
            m.setAttribute("type", "radio"),
            m.setAttribute("name", "priority"),
            m.setAttribute("value", "High"),
            p.classList.add("radioButtonDiv"),
            p.append(m, f),
            a.append(A, s, p);
          let x = document.createElement("input");
          x.setAttribute("type", "submit"),
            x.setAttribute("value", "Submit"),
            x.classList.add("submitButton"),
            t.append(n, o, i, r, a, x),
            e.append(t);
        })(),
        (function () {
          let e = document.querySelector(".listContents"),
            t = document.createElement("div");
          t.classList.add("sidebar");
          let n = document.createElement("div");
          (n.innerText = "Overall"),
            n.classList.add("taskHeaders"),
            n.setAttribute("id", "overall");
          let o = document.createElement("div");
          (o.innerText = "Low Priority"),
            o.classList.add("taskHeaders"),
            o.setAttribute("id", "lowPriority");
          let r = document.createElement("div");
          (r.innerText = "Medium Priority"),
            r.classList.add("taskHeaders"),
            r.setAttribute("id", "mediumPriority");
          let i = document.createElement("div");
          (i.innerText = "High Priority"),
            i.classList.add("taskHeaders"),
            i.setAttribute("id", "highPriority"),
            t.append(n, o, r, i),
            e.append(t);
        })(),
        (function () {
          let e = document.querySelector(".listContents"),
            t = document.createElement("div");
          t.classList.add("toDoContainer"), e.append(t);
        })(),
        (function () {
          let e = document.createElement("button");
          (e.innerText = "+Add"),
            e.classList.add("addButton"),
            document.querySelector(".listContents").append(e);
        })(),
        document.querySelector(".addButton").addEventListener("click", () => {
          document.querySelector(".overlay").style.display = "flex";
        }),
        document.querySelector(".form").addEventListener("submit", (e) => {
          e.preventDefault();
          let n = document.querySelector(".toDoContainer"),
            o = document.createElement("div");
          o.classList.add("toDoItem"), (o.style.display = "flex"), n.append(o);
          let r = document.createElement("div");
          r.classList.add("itemContents"), o.append(r);
          let l = e.target.Title.value,
            d = e.target.dueDate.value,
            s = (function (e) {
              let t = document.querySelector(".form"),
                n = {},
                o = Array.from(
                  document.querySelectorAll('input[name="priority"]')
                );
              (n.name = t.Title.value),
                (n.dueDate = t.dueDate.value),
                (n.description = t.description.value);
              for (const e of o) e.checked && (n.priority = e.value);
              return n;
            })();
          i.push(s),
            console.log(i),
            a(r, l, d),
            (function (e, t) {
              Array.from(document.querySelectorAll(".toDoItem"));
              let n = document.createElement("DETAILS"),
                o = document.createElement("p");
              (o.innerText = e.target.description.value),
                n.classList.add("descriptionButton"),
                n.append(o),
                t.append(n);
            })(e, r),
            A(),
            t(i),
            (function (e, t) {
              let n = JSON.stringify(t);
              localStorage.setItem(e, n), console.log(localStorage);
            })(l, s);
        }),
        document
          .querySelector(".submitButton")
          .addEventListener("click", () => {
            e();
          }),
        document
          .querySelector(".deleteButton")
          .addEventListener("click", () => {
            e();
          }),
        (function () {
          let e = Array.from(document.querySelectorAll(".taskHeaders"));
          for (let t of e)
            t.addEventListener("click", (e) => {
              let t = Array.from(document.querySelectorAll(".toDoItem")),
                n = Array.from(document.querySelectorAll(".taskHeaders"));
              for (let e of n)
                (e.style.backgroundColor = "#101820FF"),
                  (e.style.color = "white");
              if ("lowPriority" === e.target.id) {
                let e = document.querySelector("#lowPriority");
                (e.style.backgroundColor = "rgb(235,236,240)"),
                  (e.style.color = "black");
                for (let e of t)
                  "low" === e.id
                    ? (e.style.display = "flex")
                    : (e.style.display = "none");
              } else if ("mediumPriority" === e.target.id) {
                let e = document.querySelector("#mediumPriority");
                (e.style.backgroundColor = "rgb(235,236,240)"),
                  (e.style.color = "black");
                for (let e of t)
                  "medium" === e.id
                    ? (e.style.display = "flex")
                    : (e.style.display = "none");
              } else if ("highPriority" === e.target.id) {
                let e = document.querySelector("#highPriority");
                (e.style.backgroundColor = "rgb(235,236,240)"),
                  (e.style.color = "black");
                for (let e of t)
                  "high" === e.id
                    ? (e.style.display = "flex")
                    : (e.style.display = "none");
              } else {
                let e = document.querySelector("#overall");
                (e.style.backgroundColor = "rgb(235,236,240)"),
                  (e.style.color = "black");
                for (let e of t) e.style.display = "flex";
              }
            });
        })(),
        (function () {
          if (localStorage.length > 0)
            for (var e = 0; e < localStorage.length; e++)
              o(localStorage.key(e));
        })();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoid0ZBR0lBLEUsTUFBMEIsR0FBNEIsS0FFMURBLEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksd29IQUF5b0gsR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMscUNBQXFDLE1BQVEsR0FBRyxTQUFXLDAwREFBMDBELGVBQWlCLENBQUMseW9IQUF5b0gsV0FBYSxNQUUxdlMsUyxVQ0RBRCxFQUFPRSxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQU8sR0E2RlgsT0EzRkFBLEVBQUtDLFNBQVcsV0FDZCxPQUFPQyxLQUFLQyxLQUFJLFNBQVVDLEdBQ3hCLElBQUlDLEVBQVUsR0FDVkMsT0FBK0IsSUFBWkYsRUFBSyxHQTRCNUIsT0ExQklBLEVBQUssS0FDUEMsR0FBVyxjQUFjRSxPQUFPSCxFQUFLLEdBQUksUUFHdkNBLEVBQUssS0FDUEMsR0FBVyxVQUFVRSxPQUFPSCxFQUFLLEdBQUksT0FHbkNFLElBQ0ZELEdBQVcsU0FBU0UsT0FBT0gsRUFBSyxHQUFHSSxPQUFTLEVBQUksSUFBSUQsT0FBT0gsRUFBSyxJQUFNLEdBQUksT0FHNUVDLEdBQVdOLEVBQXVCSyxHQUU5QkUsSUFDRkQsR0FBVyxLQUdURCxFQUFLLEtBQ1BDLEdBQVcsS0FHVEQsRUFBSyxLQUNQQyxHQUFXLEtBR05BLENBQ1QsSUFBR0ksS0FBSyxHQUNWLEVBR0FULEVBQUtVLEVBQUksU0FBV0MsRUFBU0MsRUFBT0MsRUFBUUMsRUFBVUMsR0FDN0IsaUJBQVpKLElBQ1RBLEVBQVUsQ0FBQyxDQUFDLEtBQU1BLE9BQVNLLEtBRzdCLElBQUlDLEVBQXlCLENBQUMsRUFFOUIsR0FBSUosRUFDRixJQUFLLElBQUlLLEVBQUksRUFBR0EsRUFBSWhCLEtBQUtNLE9BQVFVLElBQUssQ0FDcEMsSUFBSXJCLEVBQUtLLEtBQUtnQixHQUFHLEdBRVAsTUFBTnJCLElBQ0ZvQixFQUF1QnBCLElBQU0sRUFFakMsQ0FHRixJQUFLLElBQUlzQixFQUFLLEVBQUdBLEVBQUtSLEVBQVFILE9BQVFXLElBQU0sQ0FDMUMsSUFBSWYsRUFBTyxHQUFHRyxPQUFPSSxFQUFRUSxJQUV6Qk4sR0FBVUksRUFBdUJiLEVBQUssV0FJckIsSUFBVlcsU0FDYyxJQUFaWCxFQUFLLEtBR2RBLEVBQUssR0FBSyxTQUFTRyxPQUFPSCxFQUFLLEdBQUdJLE9BQVMsRUFBSSxJQUFJRCxPQUFPSCxFQUFLLElBQU0sR0FBSSxNQUFNRyxPQUFPSCxFQUFLLEdBQUksTUFGL0ZBLEVBQUssR0FBS1csR0FPVkgsSUFDR1IsRUFBSyxJQUdSQSxFQUFLLEdBQUssVUFBVUcsT0FBT0gsRUFBSyxHQUFJLE1BQU1HLE9BQU9ILEVBQUssR0FBSSxLQUMxREEsRUFBSyxHQUFLUSxHQUhWUixFQUFLLEdBQUtRLEdBT1ZFLElBQ0dWLEVBQUssSUFHUkEsRUFBSyxHQUFLLGNBQWNHLE9BQU9ILEVBQUssR0FBSSxPQUFPRyxPQUFPSCxFQUFLLEdBQUksS0FDL0RBLEVBQUssR0FBS1UsR0FIVlYsRUFBSyxHQUFLLEdBQUdHLE9BQU9PLElBT3hCZCxFQUFLTCxLQUFLUyxHQUNaLENBQ0YsRUFFT0osQ0FDVCxDLFVDbkdBSixFQUFPRSxRQUFVLFNBQVVNLEdBQ3pCLElBQUlDLEVBQVVELEVBQUssR0FDZmdCLEVBQWFoQixFQUFLLEdBRXRCLElBQUtnQixFQUNILE9BQU9mLEVBR1QsR0FBb0IsbUJBQVRnQixLQUFxQixDQUM5QixJQUFJQyxFQUFTRCxLQUFLRSxTQUFTQyxtQkFBbUJDLEtBQUtDLFVBQVVOLE1BQ3pETyxFQUFPLCtEQUErRHBCLE9BQU9lLEdBQzdFTSxFQUFnQixPQUFPckIsT0FBT29CLEVBQU0sT0FDcENFLEVBQWFULEVBQVdVLFFBQVEzQixLQUFJLFNBQVU0QixHQUNoRCxNQUFPLGlCQUFpQnhCLE9BQU9hLEVBQVdZLFlBQWMsSUFBSXpCLE9BQU93QixFQUFRLE1BQzdFLElBQ0EsTUFBTyxDQUFDMUIsR0FBU0UsT0FBT3NCLEdBQVl0QixPQUFPLENBQUNxQixJQUFnQm5CLEtBQUssS0FDbkUsQ0FFQSxNQUFPLENBQUNKLEdBQVNJLEtBQUssS0FDeEIsQyxVQ25CQSxJQUFJd0IsRUFBYyxHQUVsQixTQUFTQyxFQUFxQkMsR0FHNUIsSUFGQSxJQUFJQyxHQUFVLEVBRUwxQixFQUFJLEVBQUdBLEVBQUl1QixFQUFZekIsT0FBUUUsSUFDdEMsR0FBSXVCLEVBQVl2QixHQUFHeUIsYUFBZUEsRUFBWSxDQUM1Q0MsRUFBUzFCLEVBQ1QsS0FDRixDQUdGLE9BQU8wQixDQUNULENBRUEsU0FBU0MsRUFBYXJDLEVBQU1zQyxHQUkxQixJQUhBLElBQUlDLEVBQWEsQ0FBQyxFQUNkQyxFQUFjLEdBRVQ5QixFQUFJLEVBQUdBLEVBQUlWLEVBQUtRLE9BQVFFLElBQUssQ0FDcEMsSUFBSU4sRUFBT0osRUFBS1UsR0FDWmIsRUFBS3lDLEVBQVFHLEtBQU9yQyxFQUFLLEdBQUtrQyxFQUFRRyxLQUFPckMsRUFBSyxHQUNsRHNDLEVBQVFILEVBQVcxQyxJQUFPLEVBQzFCc0MsRUFBYSxHQUFHNUIsT0FBT1YsRUFBSSxLQUFLVSxPQUFPbUMsR0FDM0NILEVBQVcxQyxHQUFNNkMsRUFBUSxFQUN6QixJQUFJQyxFQUFvQlQsRUFBcUJDLEdBQ3pDUyxFQUFNLENBQ1JDLElBQUt6QyxFQUFLLEdBQ1ZRLE1BQU9SLEVBQUssR0FDWjBDLFVBQVcxQyxFQUFLLEdBQ2hCVSxTQUFVVixFQUFLLEdBQ2ZXLE1BQU9YLEVBQUssSUFHZCxJQUEyQixJQUF2QnVDLEVBQ0ZWLEVBQVlVLEdBQW1CSSxhQUMvQmQsRUFBWVUsR0FBbUJLLFFBQVFKLE9BQ2xDLENBQ0wsSUFBSUksRUFBVUMsRUFBZ0JMLEVBQUtOLEdBQ25DQSxFQUFRWSxRQUFVeEMsRUFDbEJ1QixFQUFZa0IsT0FBT3pDLEVBQUcsRUFBRyxDQUN2QnlCLFdBQVlBLEVBQ1phLFFBQVNBLEVBQ1RELFdBQVksR0FFaEIsQ0FFQVAsRUFBWTdDLEtBQUt3QyxFQUNuQixDQUVBLE9BQU9LLENBQ1QsQ0FFQSxTQUFTUyxFQUFnQkwsRUFBS04sR0FDNUIsSUFBSWMsRUFBTWQsRUFBUWUsT0FBT2YsR0FlekIsT0FkQWMsRUFBSUUsT0FBT1YsR0FFRyxTQUFpQlcsR0FDN0IsR0FBSUEsRUFBUSxDQUNWLEdBQUlBLEVBQU9WLE1BQVFELEVBQUlDLEtBQU9VLEVBQU8zQyxRQUFVZ0MsRUFBSWhDLE9BQVMyQyxFQUFPVCxZQUFjRixFQUFJRSxXQUFhUyxFQUFPekMsV0FBYThCLEVBQUk5QixVQUFZeUMsRUFBT3hDLFFBQVU2QixFQUFJN0IsTUFDekosT0FHRnFDLEVBQUlFLE9BQU9WLEVBQU1XLEVBQ25CLE1BQ0VILEVBQUlJLFFBRVIsQ0FHRixDQUVBNUQsRUFBT0UsUUFBVSxTQUFVRSxFQUFNc0MsR0FHL0IsSUFBSW1CLEVBQWtCcEIsRUFEdEJyQyxFQUFPQSxHQUFRLEdBRGZzQyxFQUFVQSxHQUFXLENBQUMsR0FHdEIsT0FBTyxTQUFnQm9CLEdBQ3JCQSxFQUFVQSxHQUFXLEdBRXJCLElBQUssSUFBSWhELEVBQUksRUFBR0EsRUFBSStDLEVBQWdCakQsT0FBUUUsSUFBSyxDQUMvQyxJQUNJaUQsRUFBUXpCLEVBREt1QixFQUFnQi9DLElBRWpDdUIsRUFBWTBCLEdBQU9aLFlBQ3JCLENBSUEsSUFGQSxJQUFJYSxFQUFxQnZCLEVBQWFxQixFQUFTcEIsR0FFdEN1QixFQUFLLEVBQUdBLEVBQUtKLEVBQWdCakQsT0FBUXFELElBQU0sQ0FDbEQsSUFFSUMsRUFBUzVCLEVBRkt1QixFQUFnQkksSUFJSyxJQUFuQzVCLEVBQVk2QixHQUFRZixhQUN0QmQsRUFBWTZCLEdBQVFkLFVBRXBCZixFQUFZa0IsT0FBT1csRUFBUSxHQUUvQixDQUVBTCxFQUFrQkcsQ0FDcEIsQ0FDRixDLFVDckdBLElBQUlHLEVBQU8sQ0FBQyxFQW9DWm5FLEVBQU9FLFFBVlAsU0FBMEJrRSxFQUFRQyxHQUNoQyxJQUFJQyxFQXhCTixTQUFtQkEsR0FDakIsUUFBNEIsSUFBakJILEVBQUtHLEdBQXlCLENBQ3ZDLElBQUlDLEVBQWNDLFNBQVNDLGNBQWNILEdBRXpDLEdBQUlJLE9BQU9DLG1CQUFxQkosYUFBdUJHLE9BQU9DLGtCQUM1RCxJQUdFSixFQUFjQSxFQUFZSyxnQkFBZ0JDLElBSTVDLENBSEUsTUFBT0MsR0FFUFAsRUFBYyxJQUNoQixDQUdGSixFQUFLRyxHQUFVQyxDQUNqQixDQUVBLE9BQU9KLEVBQUtHLEVBQ2QsQ0FLZVMsQ0FBVVgsR0FFdkIsSUFBS0UsRUFDSCxNQUFNLElBQUlVLE1BQU0sMkdBR2xCVixFQUFPVyxZQUFZWixFQUNyQixDLFVDMUJBckUsRUFBT0UsUUFQUCxTQUE0QndDLEdBQzFCLElBQUl3QyxFQUFVVixTQUFTVyxjQUFjLFNBR3JDLE9BRkF6QyxFQUFRMEMsY0FBY0YsRUFBU3hDLEVBQVEyQyxZQUN2QzNDLEVBQVEwQixPQUFPYyxFQUFTeEMsRUFBUUEsU0FDekJ3QyxDQUNULEMsZ0JDR0FsRixFQUFPRSxRQVJQLFNBQXdDb0YsR0FDdEMsSUFBSUMsRUFBbUQsS0FFbkRBLEdBQ0ZELEVBQWFFLGFBQWEsUUFBU0QsRUFFdkMsQyxVQzREQXZGLEVBQU9FLFFBWlAsU0FBZ0J3QyxHQUNkLElBQUk0QyxFQUFlNUMsRUFBUStDLG1CQUFtQi9DLEdBQzlDLE1BQU8sQ0FDTGdCLE9BQVEsU0FBZ0JWLElBekQ1QixTQUFlc0MsRUFBYzVDLEVBQVNNLEdBQ3BDLElBQUlDLEVBQU0sR0FFTkQsRUFBSTlCLFdBQ04rQixHQUFPLGNBQWN0QyxPQUFPcUMsRUFBSTlCLFNBQVUsUUFHeEM4QixFQUFJaEMsUUFDTmlDLEdBQU8sVUFBVXRDLE9BQU9xQyxFQUFJaEMsTUFBTyxPQUdyQyxJQUFJTixPQUFpQyxJQUFkc0MsRUFBSTdCLE1BRXZCVCxJQUNGdUMsR0FBTyxTQUFTdEMsT0FBT3FDLEVBQUk3QixNQUFNUCxPQUFTLEVBQUksSUFBSUQsT0FBT3FDLEVBQUk3QixPQUFTLEdBQUksT0FHNUU4QixHQUFPRCxFQUFJQyxJQUVQdkMsSUFDRnVDLEdBQU8sS0FHTEQsRUFBSWhDLFFBQ05pQyxHQUFPLEtBR0xELEVBQUk5QixXQUNOK0IsR0FBTyxLQUdULElBQUlDLEVBQVlGLEVBQUlFLFVBRWhCQSxHQUE2QixvQkFBVHpCLE9BQ3RCd0IsR0FBTyx1REFBdUR0QyxPQUFPYyxLQUFLRSxTQUFTQyxtQkFBbUJDLEtBQUtDLFVBQVVvQixNQUFlLFFBTXRJUixFQUFRZ0Qsa0JBQWtCekMsRUFBS3FDLEVBQWM1QyxFQUFRQSxRQUN2RCxDQWlCTWlELENBQU1MLEVBQWM1QyxFQUFTTSxFQUMvQixFQUNBWSxPQUFRLFlBakJaLFNBQTRCMEIsR0FFMUIsR0FBZ0MsT0FBNUJBLEVBQWFNLFdBQ2YsT0FBTyxFQUdUTixFQUFhTSxXQUFXQyxZQUFZUCxFQUN0QyxDQVdNUSxDQUFtQlIsRUFDckIsRUFFSixDLFVDcERBdEYsRUFBT0UsUUFaUCxTQUEyQitDLEVBQUtxQyxHQUM5QixHQUFJQSxFQUFhUyxXQUNmVCxFQUFhUyxXQUFXQyxRQUFVL0MsTUFDN0IsQ0FDTCxLQUFPcUMsRUFBYVcsWUFDbEJYLEVBQWFPLFlBQVlQLEVBQWFXLFlBR3hDWCxFQUFhTCxZQUFZVCxTQUFTMEIsZUFBZWpELEdBQ25ELENBQ0YsQyxHQ1pJa0QsRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCakYsSUFBakJrRixFQUNILE9BQU9BLEVBQWFwRyxRQUdyQixJQUFJRixFQUFTbUcsRUFBeUJFLEdBQVksQ0FDakRwRyxHQUFJb0csRUFFSm5HLFFBQVMsQ0FBQyxHQU9YLE9BSEFxRyxFQUFvQkYsR0FBVXJHLEVBQVFBLEVBQU9FLFFBQVNrRyxHQUcvQ3BHLEVBQU9FLE9BQ2YsQ0NyQkFrRyxFQUFvQkksRUFBS3hHLElBQ3hCLElBQUl5RyxFQUFTekcsR0FBVUEsRUFBTzBHLFdBQzdCLElBQU8xRyxFQUFpQixRQUN4QixJQUFNLEVBRVAsT0FEQW9HLEVBQW9CTyxFQUFFRixFQUFRLENBQUVHLEVBQUdILElBQzVCQSxDQUFNLEVDTGRMLEVBQW9CTyxFQUFJLENBQUN6RyxFQUFTMkcsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYVCxFQUFvQlcsRUFBRUYsRUFBWUMsS0FBU1YsRUFBb0JXLEVBQUU3RyxFQUFTNEcsSUFDNUVFLE9BQU9DLGVBQWUvRyxFQUFTNEcsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLElBRTFFLEVDTkRWLEVBQW9CVyxFQUFJLENBQUMvRCxFQUFLb0UsSUFBVUosT0FBT0ssVUFBVUMsZUFBZUMsS0FBS3ZFLEVBQUtvRSxHQ0FsRmhCLEVBQW9Cb0IsUUFBS3BHLEUsTUNnQnpCLFNBQVNxRyxJQUNTakQsU0FBU0MsY0FBYyxZQUM3QkosTUFBTXFELFFBQVUsTUFDNUIsQ0FzQ0EsU0FBU0MsRUFBaUJDLEdBQ3RCLElBQUlDLEVBQVlDLE1BQU1DLEtBQUt2RCxTQUFTd0QsaUJBQWlCLGNBQ3JELElBQUksSUFBSWxILEVBQUUsRUFBRUEsRUFBRStHLEVBQVVqSCxPQUFPRSxJQUNRLFFBQS9COEcsRUFBWTlHLEdBQWEsVUFDekIrRyxFQUFVL0csR0FBR3VELE1BQU00RCxZQUFjLG9CQUNqQ0osRUFBVS9HLEdBQUcwRSxhQUFhLEtBQU0sUUFHSSxXQUEvQm9DLEVBQVk5RyxHQUFhLFVBQzlCK0csRUFBVS9HLEdBQUd1RCxNQUFNNEQsWUFBYyxvQkFDakNKLEVBQVUvRyxHQUFHMEUsYUFBYSxLQUFNLFlBSWhDcUMsRUFBVS9HLEdBQUd1RCxNQUFNNEQsWUFBYyxpQkFDakNKLEVBQVUvRyxHQUFHMEUsYUFBYSxLQUFNLFFBSTVDLENBaUZBLFNBQVMwQyxFQUFtQkMsR0FDeEIsSUFBSUMsRUFBNEJ2RyxLQUFLd0csTUFBTUMsYUFBYUMsUUFBUUosSUFDNURLLEVBQWdCaEUsU0FBU0MsY0FBYyxrQkFFdkNnRSxFQUFXakUsU0FBU1csY0FBYyxPQUN0Q3NELEVBQVNDLFVBQVVDLElBQUksWUFDdkJGLEVBQVNwRSxNQUFNcUQsUUFBVSxPQUV6QmMsRUFBY0ksT0FBT0gsR0FFckIsSUFBSUksRUFBZXJFLFNBQVNXLGNBQWMsT0FDMUMwRCxFQUFhSCxVQUFVQyxJQUFJLGdCQUMzQkYsRUFBU0csT0FBT0MsR0FJaEJDLEVBQWtCRCxFQUZOVCxFQUFnQyxLQUM3QkEsRUFBbUMsU0FHbEQsSUFBSVcsRUFBb0J2RSxTQUFTVyxjQUFjLFdBQzNDNkQsRUFBY3hFLFNBQVNXLGNBQWMsS0FDekM2RCxFQUFZQyxVQUFZYixFQUF1QyxZQUMvRFcsRUFBa0JMLFVBQVVDLElBQUkscUJBQ2hDSSxFQUFrQkgsT0FBT0ksR0FDekJILEVBQWFELE9BQU9HLEdBR3BCRyxJQUNBLElBQUlDLEVBQXNCLEdBQzFCLElBQUksSUFBSUMsRUFBRSxFQUFFQSxFQUFFZCxhQUFhMUgsT0FBT3dJLElBQzlCRCxFQUFvQnBKLEtBQUs4QixLQUFLd0csTUFBTUMsYUFBYUEsYUFBYXhCLElBQUlzQyxNQUd0RXpCLEVBQWlCd0IsRUFHckIsQ0M3TEEsTUFBTTFJLEVBQVUrRCxTQUFTQyxjQUFjLFlBRXZDLElBQUltRCxFQUFjLEdBeU1sQixTQUFTa0IsRUFBa0JELEVBQWNWLEVBQU9rQixHQUM1QyxJQUFJQyxFQUFROUUsU0FBU1csY0FBYyxPQUNuQ21FLEVBQU1MLFVBQVlkLEVBQ2xCbUIsRUFBTVosVUFBVUMsSUFBSSxTQUVwQixJQUFJWSxFQUFXL0UsU0FBU1csY0FBYyxPQUN0Q29FLEVBQVNiLFVBQVVDLElBQUksV0FDdkJZLEVBQVNOLFVBQVlJLEVBRXJCUixFQUFhRCxPQUFPVSxFQUFNQyxFQUM5QixDQWNBLFNBQVNMLElBQ0wsSUFBSVQsRUFBV1gsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsY0FFaER3QixHQURnQmhGLFNBQVNDLGNBQWMsa0JBQ2hCRCxTQUFTVyxjQUFjLFdBQ2xEcUUsRUFBcUJQLFVBQVksSUFDakNPLEVBQXFCZCxVQUFVQyxJQUFJLGtCQUNuQ0YsRUFBU2dCLE1BQU1iLE9BQU9ZLEdBQ3RCQSxFQUFxQkUsaUJBQWlCLFNBQVU1RSxJQUM3Q3dELGFBQWFxQixXQUFXckIsYUFBYXhCLElBQUloQyxFQUFFUixPQUFPc0YsZ0JBQWdCM0QsV0FBV2dELFlBQzdFbkUsRUFBRVIsT0FBT3NCLFdBQVdoQyxRQUFRLEdBR25DLEMseUhDdk9JbEIsRUFBVSxDQUFDLEVBRWZBLEVBQVFnRCxrQkFBb0IsSUFDNUJoRCxFQUFRMEMsY0FBZ0IsSUFFbEIxQyxFQUFRMEIsT0FBUyxTQUFjLEtBQU0sUUFFM0MxQixFQUFRZSxPQUFTLElBQ2pCZixFQUFRK0MsbUJBQXFCLElBRWhCLElBQUksSUFBUy9DLEdBS0osS0FBVyxZQUFpQixXRG5CbEQsV0FDSSxJQUFJbUgsRUFBU3JGLFNBQVNXLGNBQWMsT0FDcEMwRSxFQUFPWixVQUFZLGFBQ25CWSxFQUFPbkIsVUFBVUMsSUFBSSxVQUNyQmxJLEVBQVFtSSxPQUFPaUIsRUFDbkIsQ0VKQUMsR0ZPQSxXQUNJLElBQUkxSixFQUFPb0UsU0FBU1csY0FBYyxRQUM5QjRFLEVBQWV2RixTQUFTVyxjQUFjLE9BQzFDL0UsRUFBS3NJLFVBQVVDLElBQUksUUFDbkJvQixFQUFhckIsVUFBVUMsSUFBSSxnQkFDM0J2SSxFQUFLd0ksT0FBT21CLEdBQ1p0SixFQUFRbUksT0FBT3hJLEVBQ25CLENFYkE0SixHRnlCQSxXQUNJLElBQUlDLEVBQVV6RixTQUFTVyxjQUFjLE9BQ2pDNEUsRUFBZXZGLFNBQVNDLGNBQWMsaUJBQzFDd0YsRUFBUXZCLFVBQVVDLElBQUksV0FDdEJvQixFQUFhbkIsT0FBT3FCLEVBQ3hCLENFN0JBQyxHRmdDQSxXQUNJLElBQUlELEVBQVV6RixTQUFTQyxjQUFjLFlBQ3pCRCxTQUFTVyxjQUFjLE9BQzdCdUQsVUFBVUMsSUFBSSxTQUdwQixJQUFJd0IsRUFBTzNGLFNBQVNXLGNBQWMsUUFDbENnRixFQUFLekIsVUFBVUMsSUFBSSxRQUNuQndCLEVBQUszRSxhQUFhLFNBQVUsUUFHNUIsSUFBSTRFLEVBQWU1RixTQUFTVyxjQUFjLFVBQzFDaUYsRUFBYW5CLFVBQVksSUFDekJtQixFQUFhMUIsVUFBVUMsSUFBSSxnQkFDM0J5QixFQUFhNUUsYUFBYSxPQUFRLFVBR2xDLElBQUk4RCxFQUFROUUsU0FBU1csY0FBYyxTQUNuQ21FLEVBQU05RCxhQUFhLE9BQVEsUUFDM0I4RCxFQUFNOUQsYUFBYSxPQUFRLFNBQzNCOEQsRUFBTTlELGFBQWEsY0FBZSxTQUdsQyxJQUFJd0QsRUFBYXhFLFNBQVNXLGNBQWMsWUFDeEM2RCxFQUFZeEQsYUFBYSxPQUFRLFFBQ2pDd0QsRUFBWXhELGFBQWEsT0FBUSxlQUNqQ3dELEVBQVl4RCxhQUFhLGNBQWUsdUJBQ3hDd0QsRUFBWU4sVUFBVUMsSUFBSSxrQkFHMUIsSUFBSVUsRUFBVTdFLFNBQVNXLGNBQWMsU0FDckNrRSxFQUFRN0QsYUFBYSxPQUFRLFFBQzdCNkQsRUFBUTdELGFBQWEsT0FBUSxXQUM3QjZELEVBQVE3RCxhQUFhLGNBQWUsb0JBR3BDLElBQUk2RSxFQUFlN0YsU0FBU1csY0FBYyxPQUMxQ2tGLEVBQWEzQixVQUFVQyxJQUFJLGdCQUczQixJQUFJMkIsRUFBaUI5RixTQUFTVyxjQUFjLE9BQ3hDb0YsRUFBYy9GLFNBQVNXLGNBQWMsU0FDckNxRixFQUFrQmhHLFNBQVNXLGNBQWMsT0FDN0NxRixFQUFnQnZCLFVBQVksTUFDNUJ1QixFQUFnQjlCLFVBQVVDLElBQUksbUJBQzlCNEIsRUFBWS9FLGFBQWEsT0FBUSxTQUNqQytFLEVBQVkvRSxhQUFhLE9BQVEsWUFDakMrRSxFQUFZL0UsYUFBYSxRQUFTLE9BQ2xDOEUsRUFBZTVCLFVBQVVDLElBQUksa0JBQzdCMkIsRUFBZTFCLE9BQU8yQixFQUFZQyxHQUdsQyxJQUFJQyxFQUFvQmpHLFNBQVNXLGNBQWMsT0FDM0N1RixFQUFpQmxHLFNBQVNXLGNBQWMsU0FDeEN3RixFQUFxQm5HLFNBQVNXLGNBQWMsT0FDaER3RixFQUFtQjFCLFVBQVksU0FDL0IwQixFQUFtQmpDLFVBQVVDLElBQUksbUJBQ2pDK0IsRUFBZWxGLGFBQWEsT0FBUSxTQUNwQ2tGLEVBQWVsRixhQUFhLE9BQVEsWUFDcENrRixFQUFlbEYsYUFBYSxRQUFTLFVBQ3JDaUYsRUFBa0IvQixVQUFVQyxJQUFJLGtCQUNoQzhCLEVBQWtCN0IsT0FBTzhCLEVBQWVDLEdBR3hDLElBQUlDLEVBQWtCcEcsU0FBU1csY0FBYyxPQUN6QzBGLEVBQWVyRyxTQUFTVyxjQUFjLFNBQ3RDMkYsRUFBbUJ0RyxTQUFTVyxjQUFjLE9BQzlDMkYsRUFBaUI3QixVQUFZLE9BQzdCNkIsRUFBaUJwQyxVQUFVQyxJQUFJLG1CQUMvQmtDLEVBQWFyRixhQUFhLE9BQVEsU0FDbENxRixFQUFhckYsYUFBYSxPQUFRLFlBQ2xDcUYsRUFBYXJGLGFBQWEsUUFBUyxRQUNuQ29GLEVBQWdCbEMsVUFBVUMsSUFBSSxrQkFDOUJpQyxFQUFnQmhDLE9BQU9pQyxFQUFhQyxHQUVwQ1QsRUFBYXpCLE9BQU8wQixFQUFlRyxFQUFrQkcsR0FHckQsSUFBSUcsRUFBZXZHLFNBQVNXLGNBQWMsU0FDMUM0RixFQUFhdkYsYUFBYSxPQUFRLFVBQ2xDdUYsRUFBYXZGLGFBQWEsUUFBUyxVQUNuQ3VGLEVBQWFyQyxVQUFVQyxJQUFJLGdCQUUzQndCLEVBQUt2QixPQUFPd0IsRUFBY2QsRUFBT0QsRUFBU0wsRUFBWXFCLEVBQWFVLEdBQ25FZCxFQUFRckIsT0FBT3VCLEVBRW5CLENFckhBYSxHRndIQSxXQUNJLElBQUlqQixFQUFldkYsU0FBU0MsY0FBYyxpQkFDdEN3RyxFQUFVekcsU0FBU1csY0FBYyxPQUNyQzhGLEVBQVF2QyxVQUFVQyxJQUFJLFdBRXRCLElBQUl1QyxFQUFVMUcsU0FBU1csY0FBYyxPQUNyQytGLEVBQVFqQyxVQUFZLFVBQ3BCaUMsRUFBUXhDLFVBQVVDLElBQUksZUFDdEJ1QyxFQUFRMUYsYUFBYSxLQUFNLFdBRTNCLElBQUkrRSxFQUFjL0YsU0FBU1csY0FBYyxPQUN6Q29GLEVBQVl0QixVQUFZLGVBQ3hCc0IsRUFBWTdCLFVBQVVDLElBQUksZUFDMUI0QixFQUFZL0UsYUFBYSxLQUFNLGVBRS9CLElBQUlrRixFQUFpQmxHLFNBQVNXLGNBQWMsT0FDNUN1RixFQUFlekIsVUFBWSxrQkFDM0J5QixFQUFlaEMsVUFBVUMsSUFBSSxlQUM3QitCLEVBQWVsRixhQUFhLEtBQU0sa0JBRWxDLElBQUlxRixFQUFlckcsU0FBU1csY0FBYyxPQUMxQzBGLEVBQWE1QixVQUFZLGdCQUN6QjRCLEVBQWFuQyxVQUFVQyxJQUFJLGVBQzNCa0MsRUFBYXJGLGFBQWEsS0FBTSxnQkFFaEN5RixFQUFRckMsT0FBT3NDLEVBQVNYLEVBQWFHLEVBQWdCRyxHQUNyRGQsRUFBYW5CLE9BQU9xQyxFQUN4QixDRWxKQUUsR0ZxSkEsV0FDSSxJQUFJcEIsRUFBZXZGLFNBQVNDLGNBQWMsaUJBQ3RDK0QsRUFBZ0JoRSxTQUFTVyxjQUFjLE9BQzNDcUQsRUFBY0UsVUFBVUMsSUFBSSxpQkFDNUJvQixFQUFhbkIsT0FBT0osRUFDeEIsQ0V6SkE0QyxHRllBLFdBQ0ksSUFBSUMsRUFBWTdHLFNBQVNXLGNBQWMsVUFDdkNrRyxFQUFVcEMsVUFBWSxPQUN0Qm9DLEVBQVUzQyxVQUFVQyxJQUFJLGFBQ0xuRSxTQUFTQyxjQUFjLGlCQUM3Qm1FLE9BQU95QyxFQUN4QixDRWpCQUMsR0hYb0I5RyxTQUFTQyxjQUFjLGNBQzdCaUYsaUJBQWlCLFNBQVMsS0FPdEJsRixTQUFTQyxjQUFjLFlBQzdCSixNQUFNcUQsUUFBVSxNQVBULElDcUtKbEQsU0FBU0MsY0FBYyxTQUU3QmlGLGlCQUFpQixVQUFXNUUsSUFDN0JBLEVBQUV5RyxpQkFDRixJQUFJL0MsRUFBZ0JoRSxTQUFTQyxjQUFjLGtCQUV2Q2dFLEVBQVdqRSxTQUFTVyxjQUFjLE9BQ3RDc0QsRUFBU0MsVUFBVUMsSUFBSSxZQUN2QkYsRUFBU3BFLE1BQU1xRCxRQUFVLE9BRXpCYyxFQUFjSSxPQUFPSCxHQUVyQixJQUFJSSxFQUFlckUsU0FBU1csY0FBYyxPQUMxQzBELEVBQWFILFVBQVVDLElBQUksZ0JBQzNCRixFQUFTRyxPQUFPQyxHQUVoQixJQUFJVixFQUFPckQsRUFBRVIsT0FBYyxNQUFFa0gsTUFDekJDLEVBQVUzRyxFQUFFUixPQUFnQixRQUFFa0gsTUFHOUJFLEVEdkpaLFNBQTZCakQsR0FDekIsSUFBSTBCLEVBQU8zRixTQUFTQyxjQUFjLFNBRTlCa0gsRUFBVSxDQUFDLEVBQ1h0QixFQUFldkMsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsMkJBQ3hEMkQsRUFBUXhELEtBQU9nQyxFQUFZLE1BQUVxQixNQUM3QkcsRUFBUXRDLFFBQVVjLEVBQWMsUUFBRXFCLE1BQ2xDRyxFQUFRM0MsWUFBY21CLEVBQWtCLFlBQUVxQixNQUMxQyxJQUFLLE1BQU1JLEtBQWV2QixFQUNsQnVCLEVBQVlDLFVBQ1pGLEVBQVFHLFNBQVdGLEVBQVlKLE9BSXZDLE9BQU9HLENBQ1gsQ0N3STJCSSxHQUNuQm5FLEVBQVk3SCxLQUFLMkwsR0FDakJNLFFBQVFDLElBQUlyRSxHQUVaa0IsRUFBa0JELEVBQWFWLEVBQUtzRCxHQXlCNUMsU0FBMkIzRyxFQUFHK0QsR0FDWGYsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsY0FBcEQsSUFDSWUsRUFBb0J2RSxTQUFTVyxjQUFjLFdBQzNDNkQsRUFBY3hFLFNBQVNXLGNBQWMsS0FDekM2RCxFQUFZQyxVQUFZbkUsRUFBRVIsT0FBb0IsWUFBRWtILE1BQ2hEekMsRUFBa0JMLFVBQVVDLElBQUkscUJBQ2hDSSxFQUFrQkgsT0FBT0ksR0FDekJILEVBQWFELE9BQU9HLEVBQ3hCLENBaENRbUQsQ0FBa0JwSCxFQUFHK0QsR0FDckJLLElBQ0F2QixFQUFpQkMsR0QvQ3pCLFNBQW9CTyxFQUFNdUQsR0FDdEIsSUFBSVMsRUFBMEJ0SyxLQUFLQyxVQUFVNEosR0FDN0NwRCxhQUFhOEQsUUFBUWpFLEVBQU1nRSxHQUMzQkgsUUFBUUMsSUFBSTNELGFBQ2hCLENDNENRK0QsQ0FBV2xFLEVBQU11RCxFQUFhLElEL0tmbEgsU0FBU0MsY0FBYyxpQkFDN0JpRixpQkFBaUIsU0FBUyxLQUNuQ2pDLEdBQVksSUFNR2pELFNBQVNDLGNBQWMsaUJBQzdCaUYsaUJBQWlCLFNBQVMsS0FDbkNqQyxHQUFZLElBOENwQixXQUNJLElBQUk2RSxFQUFVeEUsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsaUJBQ25ELElBQUssSUFBSXVFLEtBQU9ELEVBQ1pDLEVBQUk3QyxpQkFBaUIsU0FBVTVFLElBQzNCLElBQUkwSCxFQUFXMUUsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsY0FDaER5RSxFQUFhM0UsTUFBTUMsS0FBS3ZELFNBQVN3RCxpQkFBaUIsaUJBR3RELElBQUssSUFBSTZCLEtBQVU0QyxFQUNmNUMsRUFBT3hGLE1BQU1xSSxnQkFBa0IsWUFDL0I3QyxFQUFPeEYsTUFBTXNJLE1BQVEsUUFJekIsR0FBbUIsZ0JBQWhCN0gsRUFBRVIsT0FBT3JFLEdBQXFCLENBQzdCLElBQUkyTSxFQUFpQnBJLFNBQVNDLGNBQWMsZ0JBQzVDbUksRUFBZXZJLE1BQU1xSSxnQkFBa0IsbUJBQ3ZDRSxFQUFldkksTUFBTXNJLE1BQVEsUUFDekIsSUFBSyxJQUFJbk0sS0FBUWdNLEVBQ0csUUFBWmhNLEVBQUtQLEdBQWNPLEVBQUs2RCxNQUFNcUQsUUFBVSxPQUN2Q2xILEVBQUs2RCxNQUFNcUQsUUFBVSxNQUVsQyxNQUdDLEdBQW1CLG1CQUFoQjVDLEVBQUVSLE9BQU9yRSxHQUF3QixDQUNyQyxJQUFJNE0sRUFBb0JySSxTQUFTQyxjQUFjLG1CQUMvQ29JLEVBQWtCeEksTUFBTXFJLGdCQUFrQixtQkFDMUNHLEVBQWtCeEksTUFBTXNJLE1BQVEsUUFDaEMsSUFBSyxJQUFJbk0sS0FBUWdNLEVBQ0csV0FBWmhNLEVBQUtQLEdBQWlCTyxFQUFLNkQsTUFBTXFELFFBQVUsT0FDMUNsSCxFQUFLNkQsTUFBTXFELFFBQVUsTUFFbEMsTUFHSyxHQUFtQixpQkFBaEI1QyxFQUFFUixPQUFPckUsR0FBc0IsQ0FDbkMsSUFBSTZNLEVBQWtCdEksU0FBU0MsY0FBYyxpQkFDN0NxSSxFQUFnQnpJLE1BQU1xSSxnQkFBa0IsbUJBQ3hDSSxFQUFnQnpJLE1BQU1zSSxNQUFRLFFBQzlCLElBQUssSUFBSW5NLEtBQVFnTSxFQUNHLFNBQVpoTSxFQUFLUCxHQUFlTyxFQUFLNkQsTUFBTXFELFFBQVUsT0FDeENsSCxFQUFLNkQsTUFBTXFELFFBQVUsTUFFbEMsS0FHTSxDQUNGLElBQUlxRixFQUFhdkksU0FBU0MsY0FBYyxZQUN4Q3NJLEVBQVcxSSxNQUFNcUksZ0JBQWtCLG1CQUNuQ0ssRUFBVzFJLE1BQU1zSSxNQUFRLFFBQ3pCLElBQUssSUFBSW5NLEtBQVFnTSxFQUNiaE0sRUFBSzZELE1BQU1xRCxRQUFVLE1BRTVCLElBSWIsQ0d0SEFzRixHSCtLQSxXQUNJLEdBQUkxRSxhQUFhMUgsT0FBTyxFQUNwQixJQUFLLElBQUlFLEVBQUUsRUFBR0EsRUFBSXdILGFBQWExSCxPQUFRRSxJQUNuQ29ILEVBQW1CSSxhQUFheEIsSUFBSWhHLEdBSWhELENHckxBbU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz9lNjhiIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODIwRkY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZvbnQtc2l6ZTozMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OjEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREQ0MDg7IFxcbn1cXG5cXG4ubGlzdHtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGdhcDoxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrSGVhZGVyc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jb3ZlcmFsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwyMzYsMjQwKTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDlweDtcXG59XFxuXFxuLmxpc3RDb250ZW50c3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZEJ1dHRvbntcXG4gICAgd2lkdGg6MTcwcHg7XFxuICAgIGhlaWdodDo5MHB4O1xcbiAgICBnYXA6MTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCBibGFjaztcXG59XFxuXFxuLnRvRG9Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDsgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjE1cHggMTVweDtcXG4gICAgd2lkdGg6NzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6NzAlO1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIGZvciBlYWNoIGluZGl2aWR1YWwgVG8tRG8tSXRlbSAqL1xcblxcbi50b0RvSXRlbXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6NzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LDIzNiwyNDApO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCBibGFjaztcXG59XFxuXFxuLml0ZW1Db250ZW50c3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo5MCU7XFxufVxcblxcbi50aXRsZSwgXFxuLmR1ZURhdGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZXtcXG4gICAgZm9udC1zaXplOjE3cHg7XFxufVxcblxcbi5kZWxldGVUb0RvSXRlbXtcXG4gICAgd2lkdGg6MzBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4vKiBFbmQgb2Ygc3R5bGluZyBmb3IgZWFjaCBpbmRpdmlkdWFsIFRvLURvLUl0ZW0gKi9cXG5cXG5cXG4vKiBTdGFydCBvZiBTdHlsaW5nIGZvciBGb3JtcyAqL1xcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xcbiAgICB6LWluZGV4OjI7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjMwJTtcXG4gICAgaGVpZ2h0OjQ1JTtcXG4gICAgZ2FwOjEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA2cHg7XFxufVxcblxcbmZvcm0+aW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OjcwcHg7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOjMwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25Cb3h7XFxuICAgIHdpZHRoOjk5JTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yYWRpb0J1dHRvbnN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjIwcHggMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJhZGlvQnV0dG9uVGV4dHtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJhZGlvQnV0dG9uRGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6NXB4IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb117XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXRCdXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6MjBweDtcXG59XFxuXFxuLyogRW5kIG9mIFN0eWxpbmcgZm9yIEZvcm1zICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOzs7QUFHQSwyQ0FBMkM7O0FBRTNDO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQSxrREFBa0Q7OztBQUdsRCwrQkFBK0I7QUFDL0I7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQSw2QkFBNkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODIwRkY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZvbnQtc2l6ZTozMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OjEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREQ0MDg7IFxcbn1cXG5cXG4ubGlzdHtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIGdhcDoxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrSGVhZGVyc3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jb3ZlcmFsbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwyMzYsMjQwKTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDlweDtcXG59XFxuXFxuLmxpc3RDb250ZW50c3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZEJ1dHRvbntcXG4gICAgd2lkdGg6MTcwcHg7XFxuICAgIGhlaWdodDo5MHB4O1xcbiAgICBnYXA6MTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCBibGFjaztcXG59XFxuXFxuLnRvRG9Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDsgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjE1cHggMTVweDtcXG4gICAgd2lkdGg6NzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6NzAlO1xcbn1cXG5cXG5cXG4vKiBzdHlsaW5nIGZvciBlYWNoIGluZGl2aWR1YWwgVG8tRG8tSXRlbSAqL1xcblxcbi50b0RvSXRlbXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6NzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LDIzNiwyNDApO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCBibGFjaztcXG59XFxuXFxuLml0ZW1Db250ZW50c3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDo5MCU7XFxufVxcblxcbi50aXRsZSwgXFxuLmR1ZURhdGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZXtcXG4gICAgZm9udC1zaXplOjE3cHg7XFxufVxcblxcbi5kZWxldGVUb0RvSXRlbXtcXG4gICAgd2lkdGg6MzBweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4vKiBFbmQgb2Ygc3R5bGluZyBmb3IgZWFjaCBpbmRpdmlkdWFsIFRvLURvLUl0ZW0gKi9cXG5cXG5cXG4vKiBTdGFydCBvZiBTdHlsaW5nIGZvciBGb3JtcyAqL1xcbi5vdmVybGF5e1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xcbiAgICB6LWluZGV4OjI7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOjMwJTtcXG4gICAgaGVpZ2h0OjQ1JTtcXG4gICAgZ2FwOjEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCA2cHg7XFxufVxcblxcbmZvcm0+aW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OjcwcHg7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOjMwcHg7XFxuICAgIGhlaWdodDo0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25Cb3h7XFxuICAgIHdpZHRoOjk5JTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGZvbnQtc2l6ZToxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yYWRpb0J1dHRvbnN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjIwcHggMjBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJhZGlvQnV0dG9uVGV4dHtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJhZGlvQnV0dG9uRGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6NXB4IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb117XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXRCdXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDo1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6MjBweDtcXG59XFxuXFxuLyogRW5kIG9mIFN0eWxpbmcgZm9yIEZvcm1zICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVJdGVtLGNyZWF0ZUl0ZW1EZXRhaWxzLCBkZWxldGVUb0RvSXRlbX0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmZ1bmN0aW9uIGJ1dHRvbkxvZ2ljKCl7XG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gb3Blbk1vZGFsKCl7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59O1xuXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKXtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cblxuZnVuY3Rpb24gc3VibWl0QnV0dG9uTG9naWMoKXtcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVCdXR0b25Mb2dpYygpe1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZUJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG5cbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2VPYmplY3QodG9Eb0l0ZW0pe1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICBsZXQgZGV0YWlscyA9IHt9O1xuICAgIGxldCByYWRpb0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpKVxuICAgIGRldGFpbHMubmFtZSA9IGZvcm1bXCJUaXRsZVwiXS52YWx1ZTtcbiAgICBkZXRhaWxzLmR1ZURhdGUgPSBmb3JtW1wiZHVlRGF0ZVwiXS52YWx1ZTtcbiAgICBkZXRhaWxzLmRlc2NyaXB0aW9uID0gZm9ybVtcImRlc2NyaXB0aW9uXCJdLnZhbHVlO1xuICAgIGZvciAoY29uc3QgcmFkaW9CdXR0b24gb2YgcmFkaW9CdXR0b25zKXtcbiAgICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGRldGFpbHMucHJpb3JpdHkgPSByYWRpb0J1dHRvbi52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmplY3RbdG9Eb0l0ZW1dID0gZGV0YWlscztcbiAgICByZXR1cm4gZGV0YWlscztcbn1cblxuXG5mdW5jdGlvbiBwcmlvcml0eUNvbG9yaW5nKGxpc3RPZkl0ZW1zKXtcbiAgICBsZXQgdG9Eb0l0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvRG9JdGVtXCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPHRvRG9JdGVtcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYgKGxpc3RPZkl0ZW1zW2ldW1wicHJpb3JpdHlcIl0gPT09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIHRvRG9JdGVtc1tpXS5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMTVweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgICAgIHRvRG9JdGVtc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGxpc3RPZkl0ZW1zW2ldW1wicHJpb3JpdHlcIl0gPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIHRvRG9JdGVtc1tpXS5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMTVweCBzb2xpZCBvcmFuZ2VcIjtcbiAgICAgICAgICAgIHRvRG9JdGVtc1tpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9Eb0l0ZW1zW2ldLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIxNXB4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgdG9Eb0l0ZW1zW2ldLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc3dpdGNoVGFiTG9naWMoKXtcbiAgICBsZXQgaGVhZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrSGVhZGVyc1wiKSk7XG4gICAgZm9yIChsZXQgdGFiIG9mIGhlYWRlcnMpe1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgbGV0IGFsbEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvRG9JdGVtXCIpKTtcbiAgICAgICAgICAgIGxldCBhbGxIZWFkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tIZWFkZXJzXCIpKTtcblxuICAgICAgICAgICAgLy8gVG8gcmVzZXQgYW55IGN1cnJlbnQgc2VsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBoZWFkZXIgb2YgYWxsSGVhZGVycyl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzEwMTgyMEZGXCI7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIExvdyBQcmlvcml0eSBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09IFwibG93UHJpb3JpdHlcIil7XG4gICAgICAgICAgICAgICAgbGV0IGxvd1ByaW9yaXR5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dQcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICBsb3dQcmlvcml0eVRhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMzUsMjM2LDI0MClcIjtcbiAgICAgICAgICAgICAgICBsb3dQcmlvcml0eVRhYi5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhbGxJdGVtcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gXCJsb3dcIikgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIE1lZGl1bSBQcmlvcml0eSBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgZWxzZSBpZihlLnRhcmdldC5pZCA9PT0gXCJtZWRpdW1Qcmlvcml0eVwiKXtcbiAgICAgICAgICAgICAgICBsZXQgbWVkaXVtUHJpb3JpdHlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZGl1bVByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5VGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIzNSwyMzYsMjQwKVwiO1xuICAgICAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5VGFiLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsSXRlbXMpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gXCJtZWRpdW1cIikgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIEhpZ2ggUHJpb3JpdHkgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2UgaWYoZS50YXJnZXQuaWQgPT09IFwiaGlnaFByaW9yaXR5XCIpe1xuICAgICAgICAgICAgICAgIGxldCBoaWdoUHJpb3JpdHlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2hQcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICBoaWdoUHJpb3JpdHlUYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjM1LDIzNiwyNDApXCI7XG4gICAgICAgICAgICAgICAgaGlnaFByaW9yaXR5VGFiLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsSXRlbXMpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gXCJoaWdoXCIpIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC8vIFdoZW4gT3ZlcmFsbCBUYWIgaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmFsbFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmFsbFwiKTtcbiAgICAgICAgICAgICAgICBvdmVyYWxsVGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIzNSwyMzYsMjQwKVwiO1xuICAgICAgICAgICAgICAgIG92ZXJhbGxUYWIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhbGxJdGVtcyl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKXtcbiAgICBsZXQgbGlzdE9mRGF0ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHVlRGF0ZVwiKSk7XG4gICAgbGV0IGR1ZURhdGVzID0gW107XG4gICAgZm9yKGxldCBpPTA7aTxsaXN0T2ZEYXRlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgZHVlRGF0ZXMucHVzaChsaXN0T2ZEYXRlc1tpXS5pbm5lclRleHQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkdWVEYXRlcyk7XG4gICAgcmV0dXJuIGR1ZURhdGVzO1xufVxuXG5cbmZ1bmN0aW9uIHNldFN0b3JhZ2UobmFtZSwgZGV0YWlsT2ZJdGVtKXtcbiAgICBsZXQgZGV0YWlsT2ZJdGVtX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShkZXRhaWxPZkl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGRldGFpbE9mSXRlbV9zZXJpYWxpemVkKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2VJdGVtcyhuYW1lKXtcbiAgICBsZXQgZGV0YWlsT2ZJdGVtX2Rlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuICAgIGxldCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvQ29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9Eb0l0ZW1cIik7XG4gICAgdG9Eb0l0ZW0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0l0ZW0pO1xuXG4gICAgbGV0IGl0ZW1Db250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ29udGVudHNcIik7XG4gICAgdG9Eb0l0ZW0uYXBwZW5kKGl0ZW1Db250ZW50cyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkZXRhaWxPZkl0ZW1fZGVzZXJpYWxpemVkW1wibmFtZVwiXTtcbiAgICBsZXQgZHVlZGF0ZSA9ICBkZXRhaWxPZkl0ZW1fZGVzZXJpYWxpemVkW1wiZHVlRGF0ZVwiXTtcbiAgICBjcmVhdGVJdGVtRGV0YWlscyhpdGVtQ29udGVudHMsdGl0bGUsZHVlZGF0ZSk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiREVUQUlMU1wiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXRhaWxPZkl0ZW1fZGVzZXJpYWxpemVkW1wiZGVzY3JpcHRpb25cIl07XG4gICAgZGVzY3JpcHRpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uQnV0dG9uXCIpO1xuICAgIGRlc2NyaXB0aW9uQnV0dG9uLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgaXRlbUNvbnRlbnRzLmFwcGVuZChkZXNjcmlwdGlvbkJ1dHRvbik7XG4gICAgICAgIFxuICAgIFxuICAgIGRlbGV0ZVRvRG9JdGVtKCk7XG4gICAgbGV0IGxpc3RPZlN0b3JhZ2VPYmplY3QgPSBbXVxuICAgIGZvcihsZXQgaj0wO2o8bG9jYWxTdG9yYWdlLmxlbmd0aDtqKyspe1xuICAgICAgICBsaXN0T2ZTdG9yYWdlT2JqZWN0LnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbbG9jYWxTdG9yYWdlLmtleShqKV0pKTtcbiAgICB9XG5cbiAgICBwcmlvcml0eUNvbG9yaW5nKGxpc3RPZlN0b3JhZ2VPYmplY3QpO1xuICAgIFxuICAgICAgIFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKXtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aD4wKXtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNyZWF0ZVN0b3JhZ2VJdGVtcyhsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5cblxuXG5cblxuZXhwb3J0e2J1dHRvbkxvZ2ljLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsc3VibWl0QnV0dG9uTG9naWMsIGRlbGV0ZUJ1dHRvbkxvZ2ljLCBjcmVhdGVTdG9yYWdlT2JqZWN0LCBwcmlvcml0eUNvbG9yaW5nLCBzd2l0Y2hUYWJMb2dpYywgZ2V0RGF0ZSwgc2V0U3RvcmFnZSxjcmVhdGVTdG9yYWdlSXRlbXMsIHBvcHVsYXRlU3RvcmFnZX1cblxuIiwiaW1wb3J0IHsgYnV0dG9uTG9naWMsIGNsb3NlTW9kYWwsIGNyZWF0ZVN0b3JhZ2VPYmplY3QsIHByaW9yaXR5Q29sb3JpbmcsZ2V0RGF0ZSxzZXRTdG9yYWdlfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxubGV0IGxpc3RPZkl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJUTyBETyBMSVNUXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCl7XG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlzdFwiKVxuICAgIGxldCBsaXN0Q29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgbGlzdENvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGVudHNcIik7XG4gICAgbGlzdC5hcHBlbmQobGlzdENvbnRlbnRzKTtcbiAgICBjb250ZW50LmFwcGVuZChsaXN0KTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oKXtcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCIrQWRkXCI7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRCdXR0b25cIik7XG4gICAgbGV0IGxpc3RDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRlbnRzXCIpO1xuICAgIGxpc3RDb250ZW50cy5hcHBlbmQoYWRkQnV0dG9uKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVPdmVyTGF5KCl7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBsaXN0Q29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RDb250ZW50c1wiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuICAgIGxpc3RDb250ZW50cy5hcHBlbmQob3ZlcmxheSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUG9wVXAoKXtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBsZXQgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcblxuXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcblxuICAgIC8vQ3JlYXRlIGEgZXNjYXBlIGJ1dHRvbiBmb3IgZm9ybXNcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgICAvL0NyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aXRsZVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiVGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcblxuICAgIC8vQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIGRlc2NyaXB0aW9uXG4gICAgbGV0IGRlc2NyaXB0aW9uPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEVYVEFSRUFcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb24gT2YgVGFza1wiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25Cb3hcIik7XG5cbiAgICAvL0NyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciBkdWUgZGF0ZVxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGF0ZSwgREQvTU0vWVlZWVwiKTtcblxuICAgIC8vQ3JlYXRlIHJhZGlvIGJ1dHRvbiBmb3IgcHJpb3JpdHkgcmFua2luZ1xuICAgIGxldCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhZGlvQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25zXCIpO1xuXG4gICAgLy9Gb3IgTG93IFByaW9yaXR5XG4gICAgbGV0IGxvd1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBsZXQgbG93UHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb3dQcmlvcml0eVRleHQuaW5uZXJUZXh0ID0gXCJMb3dcIjtcbiAgICBsb3dQcmlvcml0eVRleHQuY2xhc3NMaXN0LmFkZChcInJhZGlvQnV0dG9uVGV4dFwiKTtcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICAgIGxvd1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJyYWRpb0J1dHRvbkRpdlwiKTtcbiAgICBsb3dQcmlvcml0eURpdi5hcHBlbmQobG93UHJpb3JpdHksbG93UHJpb3JpdHlUZXh0KTtcbiAgICBcbiAgICAvL0ZvciBNZWRpdW0gUHJpb3JpdHlcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGxldCBtZWRpdW1Qcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lZGl1bVByaW9yaXR5VGV4dC5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuICAgIG1lZGl1bVByaW9yaXR5VGV4dC5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25UZXh0XCIpO1xuICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gICAgbWVkaXVtUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInJhZGlvQnV0dG9uRGl2XCIpO1xuICAgIG1lZGl1bVByaW9yaXR5RGl2LmFwcGVuZChtZWRpdW1Qcmlvcml0eSxtZWRpdW1Qcmlvcml0eVRleHQpO1xuXG4gICAgLy9Gb3IgSGlnaCBQcmlvcml0eVxuICAgIGxldCBoaWdoUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBsZXQgaGlnaFByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGlnaFByaW9yaXR5VGV4dC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcbiAgICBoaWdoUHJpb3JpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJyYWRpb0J1dHRvblRleHRcIik7XG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gICAgaGlnaFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJyYWRpb0J1dHRvbkRpdlwiKTtcbiAgICBoaWdoUHJpb3JpdHlEaXYuYXBwZW5kKGhpZ2hQcmlvcml0eSxoaWdoUHJpb3JpdHlUZXh0KTtcblxuICAgIHJhZGlvQnV0dG9ucy5hcHBlbmQobG93UHJpb3JpdHlEaXYsbWVkaXVtUHJpb3JpdHlEaXYsaGlnaFByaW9yaXR5RGl2KTtcblxuICAgIC8vQ3JlYXRlIGEgc3VibWl0IGJ1dHRvbiBmb3IgZm9ybXNcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKTtcblxuICAgIGZvcm0uYXBwZW5kKGRlbGV0ZUJ1dHRvbiwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLHJhZGlvQnV0dG9ucyxzdWJtaXRCdXR0b24pO1xuICAgIG92ZXJsYXkuYXBwZW5kKGZvcm0pO1xuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0hlYWRlcnMoKXtcbiAgICBsZXQgbGlzdENvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udGVudHNcIik7XG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICBsZXQgb3ZlcmFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmFsbC5pbm5lclRleHQgPSBcIk92ZXJhbGxcIjtcbiAgICBvdmVyYWxsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSGVhZGVyc1wiKTtcbiAgICBvdmVyYWxsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3ZlcmFsbFwiKTtcblxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG93UHJpb3JpdHkuaW5uZXJUZXh0ID0gXCJMb3cgUHJpb3JpdHlcIjtcbiAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza0hlYWRlcnNcIik7XG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dQcmlvcml0eVwiKTtcblxuICAgIGxldCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVkaXVtUHJpb3JpdHkuaW5uZXJUZXh0ID0gXCJNZWRpdW0gUHJpb3JpdHlcIjtcbiAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza0hlYWRlcnNcIik7XG4gICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZWRpdW1Qcmlvcml0eVwiKTtcblxuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhpZ2hQcmlvcml0eS5pbm5lclRleHQgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tIZWFkZXJzXCIpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hQcmlvcml0eVwiKTtcblxuICAgIHNpZGViYXIuYXBwZW5kKG92ZXJhbGwsIGxvd1ByaW9yaXR5LCBtZWRpdW1Qcmlvcml0eSwgaGlnaFByaW9yaXR5KTtcbiAgICBsaXN0Q29udGVudHMuYXBwZW5kKHNpZGViYXIpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvRG9Db250YWluZXIoKXtcbiAgICBsZXQgbGlzdENvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udGVudHNcIik7XG4gICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvRG9Db250YWluZXJcIik7XG4gICAgbGlzdENvbnRlbnRzLmFwcGVuZCh0b0RvQ29udGFpbmVyKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKCl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9Db250YWluZXJcIik7XG5cbiAgICAgICAgbGV0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvRG9JdGVtXCIpO1xuICAgICAgICB0b0RvSXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmQodG9Eb0l0ZW0pO1xuXG4gICAgICAgIGxldCBpdGVtQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtQ29udGVudHMuY2xhc3NMaXN0LmFkZChcIml0ZW1Db250ZW50c1wiKTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kKGl0ZW1Db250ZW50cyk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSBlLnRhcmdldFtcIlRpdGxlXCJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlZGF0ZSA9IGUudGFyZ2V0W1wiZHVlRGF0ZVwiXS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgZGV0YWlsT2ZJdGVtID0gY3JlYXRlU3RvcmFnZU9iamVjdCh0b0RvSXRlbSk7XG4gICAgICAgIGxpc3RPZkl0ZW1zLnB1c2goZGV0YWlsT2ZJdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE9mSXRlbXMpO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlSXRlbURldGFpbHMoaXRlbUNvbnRlbnRzLG5hbWUsZHVlZGF0ZSk7XG4gICAgICAgIGNyZWF0ZURlc2NyaXB0aW9uKGUsIGl0ZW1Db250ZW50cyk7XG4gICAgICAgIGRlbGV0ZVRvRG9JdGVtKCk7XG4gICAgICAgIHByaW9yaXR5Q29sb3JpbmcobGlzdE9mSXRlbXMpO1xuICAgICAgICBzZXRTdG9yYWdlKG5hbWUsIGRldGFpbE9mSXRlbSk7XG4gICAgICAgXG4gICAgfSlcbiAgIFxuICAgIHJldHVybiBsaXN0T2ZJdGVtcztcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtRGV0YWlscyhpdGVtQ29udGVudHMsIG5hbWUgLCBkdWVEYXRlKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgbGV0IGRlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgICBkZWFkbGluZS5pbm5lclRleHQgPSBkdWVEYXRlO1xuXG4gICAgaXRlbUNvbnRlbnRzLmFwcGVuZCh0aXRsZSxkZWFkbGluZSk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oZSwgaXRlbUNvbnRlbnRzKXtcbiAgICBsZXQgdG9Eb0l0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9Eb0l0ZW1cIikpO1xuICAgIGxldCBkZXNjcmlwdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJERVRBSUxTXCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGUudGFyZ2V0W1wiZGVzY3JpcHRpb25cIl0udmFsdWU7XG4gICAgZGVzY3JpcHRpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uQnV0dG9uXCIpO1xuICAgIGRlc2NyaXB0aW9uQnV0dG9uLmFwcGVuZChkZXNjcmlwdGlvbik7XG4gICAgaXRlbUNvbnRlbnRzLmFwcGVuZChkZXNjcmlwdGlvbkJ1dHRvbik7XG59XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9Eb0l0ZW0oKXtcbiAgICBsZXQgdG9Eb0l0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9Eb0l0ZW1cIikpO1xuICAgIGxldCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvQ29udGFpbmVyXCIpO1xuICAgIGxldCBkZWxldGVUb0RvSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRvRG9JdGVtXCIpO1xuICAgIHRvRG9JdGVtLnBvcCgpLmFwcGVuZChkZWxldGVUb0RvSXRlbUJ1dHRvbik7XG4gICAgZGVsZXRlVG9Eb0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZS5rZXkoZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0KSk7XG4gICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICBcbiAgICB9KVxufVxuXG5cblxuXG5cbmV4cG9ydHtjcmVhdGVIZWFkZXIsIGNyZWF0ZUxpc3QsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlT3ZlckxheSwgY3JlYXRlUG9wVXAsIGNyZWF0ZVRhc2tIZWFkZXJzLCBjcmVhdGVUb0RvQ29udGFpbmVyLGNyZWF0ZUl0ZW0sIGNyZWF0ZUl0ZW1EZXRhaWxzLCBkZWxldGVUb0RvSXRlbX07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQge2NyZWF0ZUhlYWRlciwgY3JlYXRlTGlzdCwgY3JlYXRlQnV0dG9uLCBjcmVhdGVPdmVyTGF5LCBjcmVhdGVQb3BVcCwgY3JlYXRlVG9Eb0NvbnRhaW5lciwgY3JlYXRlSXRlbSwgY3JlYXRlRGVzY3JpcHRpb24sIGNyZWF0ZVRhc2tIZWFkZXJzfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCAgXCIuLi9zcmMvc3R5bGVzL2hlYWRlci5jc3NcIjtcbmltcG9ydCB7YnV0dG9uTG9naWMsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCxzdWJtaXRCdXR0b25Mb2dpYywgZGVsZXRlQnV0dG9uTG9naWMsIHByaW9yaXR5Q29sb3JpbmcsIHN3aXRjaFRhYkxvZ2ljLCBwb3B1bGF0ZVN0b3JhZ2UsIGNyZWF0ZVN0b3JhZ2VJdGVtc30gZnJvbSBcIi4vbG9naWNcIjtcblxuXG5cblxuXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZUxpc3QoKTtcbmNyZWF0ZU92ZXJMYXkoKTtcbmNyZWF0ZVBvcFVwKCk7XG5jcmVhdGVUYXNrSGVhZGVycygpO1xuY3JlYXRlVG9Eb0NvbnRhaW5lcigpO1xuY3JlYXRlQnV0dG9uKCk7XG5idXR0b25Mb2dpYygpO1xuY3JlYXRlSXRlbSgpO1xuc3VibWl0QnV0dG9uTG9naWMoKTtcbmRlbGV0ZUJ1dHRvbkxvZ2ljKCk7XG5zd2l0Y2hUYWJMb2dpYygpO1xucG9wdWxhdGVTdG9yYWdlKCk7XG5cbi8vIGZvcihsZXQgbmFtZSBpbiBsb2NhbFN0b3JhZ2UpIHtcbi8vICAgICBwb3B1bGF0ZVN0b3JhZ2UobmFtZSk7XG4vLyB9XG5cblxuXG4vLyBUbyBEbyBMaXN0XG4vLyAxLiBpbmNsdWRlIGFkZGl0aW9uYWwgZGV0YWlscyBmb3IgaXRlbSBbZG9uZV1cbi8vIDIuIGluY2x1ZGUgZGVsZXRlIGJ1dHRvbiBmb3IgaXRlbSBbZG9uZV1cbi8vIDMuIFN0eWxpbmcgZm9yIGl0ZW1zIFxuLy8gNC4gTWF5YmUgY2hlY2tsaXN0P1xuLy8gNS4gRml4IG15IGRlbGV0ZSBidXR0b24gZm9yIGZvcm1zIChjdXJyZW50bHkgc3VibWl0dGluZykgW2RvbmVdXG4vLyA2LiBQcmlvcml0eSBjb2xvdXJpbmcuIFtkb25lXVxuLy8gNy4gU2hvdyBvbmx5IHR3byBkZXRhaWxzLCBUaXRsZSBhbmQgRHVlIERhdGUuIFtkb25lXVxuLy8gOC4gRm9ybSBWYWxpZGF0aW9uXG4vLyA5LiBTb3J0IGJ5IGRhdGVzIFxuXG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5jIiwiY2xvc2VNb2RhbCIsImRpc3BsYXkiLCJwcmlvcml0eUNvbG9yaW5nIiwibGlzdE9mSXRlbXMiLCJ0b0RvSXRlbXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9yZGVyUmlnaHQiLCJjcmVhdGVTdG9yYWdlSXRlbXMiLCJuYW1lIiwiZGV0YWlsT2ZJdGVtX2Rlc2VyaWFsaXplZCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvRG9Db250YWluZXIiLCJ0b0RvSXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsIml0ZW1Db250ZW50cyIsImNyZWF0ZUl0ZW1EZXRhaWxzIiwiZGVzY3JpcHRpb25CdXR0b24iLCJkZXNjcmlwdGlvbiIsImlubmVyVGV4dCIsImRlbGV0ZVRvRG9JdGVtIiwibGlzdE9mU3RvcmFnZU9iamVjdCIsImoiLCJkdWVEYXRlIiwidGl0bGUiLCJkZWFkbGluZSIsImRlbGV0ZVRvRG9JdGVtQnV0dG9uIiwicG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW0iLCJwcmV2aW91c1NpYmxpbmciLCJoZWFkZXIiLCJjcmVhdGVIZWFkZXIiLCJsaXN0Q29udGVudHMiLCJjcmVhdGVMaXN0Iiwib3ZlcmxheSIsImNyZWF0ZU92ZXJMYXkiLCJmb3JtIiwiZGVsZXRlQnV0dG9uIiwicmFkaW9CdXR0b25zIiwibG93UHJpb3JpdHlEaXYiLCJsb3dQcmlvcml0eSIsImxvd1ByaW9yaXR5VGV4dCIsIm1lZGl1bVByaW9yaXR5RGl2IiwibWVkaXVtUHJpb3JpdHkiLCJtZWRpdW1Qcmlvcml0eVRleHQiLCJoaWdoUHJpb3JpdHlEaXYiLCJoaWdoUHJpb3JpdHkiLCJoaWdoUHJpb3JpdHlUZXh0Iiwic3VibWl0QnV0dG9uIiwiY3JlYXRlUG9wVXAiLCJzaWRlYmFyIiwib3ZlcmFsbCIsImNyZWF0ZVRhc2tIZWFkZXJzIiwiY3JlYXRlVG9Eb0NvbnRhaW5lciIsImFkZEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJkdWVkYXRlIiwiZGV0YWlsT2ZJdGVtIiwiZGV0YWlscyIsInJhZGlvQnV0dG9uIiwiY2hlY2tlZCIsInByaW9yaXR5IiwiY3JlYXRlU3RvcmFnZU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVEZXNjcmlwdGlvbiIsImRldGFpbE9mSXRlbV9zZXJpYWxpemVkIiwic2V0SXRlbSIsInNldFN0b3JhZ2UiLCJoZWFkZXJzIiwidGFiIiwiYWxsSXRlbXMiLCJhbGxIZWFkZXJzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJsb3dQcmlvcml0eVRhYiIsIm1lZGl1bVByaW9yaXR5VGFiIiwiaGlnaFByaW9yaXR5VGFiIiwib3ZlcmFsbFRhYiIsInN3aXRjaFRhYkxvZ2ljIiwicG9wdWxhdGVTdG9yYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==
