;(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-b8747d2c"],
  {
    "0e3f": function (e, t, c) {},
    "1d47": function (e, t, c) {
      e.exports = c.p + "img/step4.7ac9692a.png"
    },
    "344d": function (e, t, c) {
      e.exports = c.p + "img/step1.22d74e6c.png"
    },
    "4e4c": function (e, t, c) {
      e.exports = c.p + "img/step2.c41675c9.png"
    },
    5878: function (e, t, c) {
      e.exports = c.p + "img/step5.bd26a9d6.png"
    },
    "687f": function (e, t, c) {
      "use strict"
      c.r(t)
      var n = c("8bbf"),
        a = { class: "guide" },
        o = { class: "module-choice" }
      function i(e, t, c, i, s, d) {
        var r = Object(n["resolveComponent"])("nav-title"),
          p = Object(n["resolveComponent"])("guide-manual"),
          b = Object(n["resolveComponent"])("guide-question")
        return (
          Object(n["openBlock"])(),
          Object(n["createElementBlock"])("div", a, [
            Object(n["createVNode"])(r, { title: "服务指南" }),
            Object(n["createElementVNode"])("div", o, [
              Object(n["createElementVNode"])(
                "span",
                {
                  onClick:
                    t[0] ||
                    (t[0] = function (t) {
                      return (e.choice = 0)
                    }),
                  class: Object(n["normalizeClass"])({ active: 0 === e.choice })
                },
                "服务指南",
                2
              ),
              Object(n["createElementVNode"])(
                "span",
                {
                  onClick:
                    t[1] ||
                    (t[1] = function (t) {
                      return (e.choice = 1)
                    }),
                  class: Object(n["normalizeClass"])({ active: 1 === e.choice })
                },
                "常见问题",
                2
              )
            ]),
            0 === e.choice
              ? (Object(n["openBlock"])(),
                Object(n["createBlock"])(p, { key: 0 }))
              : Object(n["createCommentVNode"])("", !0),
            1 === e.choice
              ? (Object(n["openBlock"])(),
                Object(n["createBlock"])(
                  b,
                  { key: 1, questions: e.questions },
                  null,
                  8,
                  ["questions"]
                ))
              : Object(n["createCommentVNode"])("", !0)
          ])
        )
      }
      var s = c("d310"),
        d = c("344d"),
        r = c.n(d),
        p = c("4e4c"),
        b = c.n(p),
        u = c("6e69"),
        l = c.n(u),
        v = c("1d47"),
        f = c.n(v),
        j = c("5878"),
        O = c.n(j),
        m = { class: "guide-manual" },
        g = Object(n["createStaticVNode"])(
          '<div class="step" data-v-55b00c0c><img src="' +
            r.a +
            '" alt="step1" data-v-55b00c0c><div data-v-55b00c0c><h4 data-v-55b00c0c>1.登录并进入首页</h4><p data-v-55b00c0c>登录账号后进入首页，下滑至产品信息板块可预览秒杀活动产品</p></div></div><div class="step" data-v-55b00c0c><img src="' +
            b.a +
            '" alt="step2" data-v-55b00c0c><div data-v-55b00c0c><h4 data-v-55b00c0c>2.进入产品详情页</h4><p data-v-55b00c0c>点击产品的任意空白区域进入产品详情页面了解详情</p></div></div><div class="step" data-v-55b00c0c><img src="' +
            l.a +
            '" alt="step3" data-v-55b00c0c><div data-v-55b00c0c><h4 data-v-55b00c0c>3.点击“抢”</h4><p data-v-55b00c0c>1. 可在首页直接“抢”</p><p data-v-55b00c0c>2. 在详情页点击“抢”</p></div></div><div class="step" data-v-55b00c0c><img src="' +
            f.a +
            '" alt="step4" data-v-55b00c0c><div data-v-55b00c0c><h4 data-v-55b00c0c>4.确认并支付</h4><p data-v-55b00c0c>在弹窗确认信息并点击前往支付，若放弃则点击返回</p></div></div><div class="step" data-v-55b00c0c><img src="' +
            O.a +
            '" alt="step5" data-v-55b00c0c><div data-v-55b00c0c><h4 data-v-55b00c0c>5.支付完成</h4><p data-v-55b00c0c>选择支付方式，输入密码，支付成功，可在“我的秒杀”中产看订单详情</p></div></div>',
          5
        ),
        k = [g]
      function h(e, t, c, a, o, i) {
        return (
          Object(n["openBlock"])(), Object(n["createElementBlock"])("div", m, k)
        )
      }
      var B = Object(n["defineComponent"])({
          setup: function () {
            return {}
          }
        }),
        q = (c("ea11"), c("6b0d")),
        C = c.n(q)
      const E = C()(B, [
        ["render", h],
        ["__scopeId", "data-v-55b00c0c"]
      ])
      var y = E,
        N = (c("ac1f"), c("1276"), { class: "guide-question" })
      function V(e, t, c, a, o, i) {
        return (
          Object(n["openBlock"])(),
          Object(n["createElementBlock"])("div", N, [
            (Object(n["openBlock"])(!0),
            Object(n["createElementBlock"])(
              n["Fragment"],
              null,
              Object(n["renderList"])(e.questions, function (e, t) {
                return (
                  Object(n["openBlock"])(),
                  Object(n["createElementBlock"])(
                    "div",
                    { class: "question", key: t },
                    [
                      Object(n["createElementVNode"])(
                        "h4",
                        null,
                        Object(n["toDisplayString"])(t + 1) +
                          "." +
                          Object(n["toDisplayString"])(e.question),
                        1
                      ),
                      (Object(n["openBlock"])(!0),
                      Object(n["createElementBlock"])(
                        n["Fragment"],
                        null,
                        Object(n["renderList"])(
                          e.answer.split(";"),
                          function (e, t) {
                            return (
                              Object(n["openBlock"])(),
                              Object(n["createElementBlock"])(
                                "p",
                                { key: t },
                                Object(n["toDisplayString"])(e),
                                1
                              )
                            )
                          }
                        ),
                        128
                      ))
                    ]
                  )
                )
              }),
              128
            ))
          ])
        )
      }
      var _ = Object(n["defineComponent"])({
        props: { questions: { type: Array, required: !0 } },
        setup: function () {
          return {}
        }
      })
      c("f3e5")
      const w = C()(_, [
        ["render", V],
        ["__scopeId", "data-v-598954ba"]
      ])
      var S = w,
        x = c("5880"),
        D = Object(n["defineComponent"])({
          components: { NavTitle: s["a"], GuideManual: y, GuideQuestion: S },
          setup: function () {
            var e = Object(n["ref"])(0),
              t = Object(x["useStore"])()
            t.dispatch("guide/getQuestionsAction")
            var c = Object(n["computed"])(function () {
              return t.state.guide.questions
            })
            return { choice: e, questions: c }
          }
        })
      c("c00d")
      const I = C()(D, [
        ["render", i],
        ["__scopeId", "data-v-05ac123f"]
      ])
      t["default"] = I
    },
    "6e69": function (e, t, c) {
      e.exports = c.p + "img/step3.ee312fbb.png"
    },
    "78bf": function (e, t, c) {},
    9058: function (e, t, c) {},
    a83e: function (e, t, c) {},
    c00d: function (e, t, c) {
      "use strict"
      c("a83e")
    },
    c641: function (e, t, c) {
      "use strict"
      c("0e3f")
    },
    d310: function (e, t, c) {
      "use strict"
      var n = c("8bbf"),
        a = { class: "nav-title" }
      function o(e, t, c, o, i, s) {
        return (
          Object(n["openBlock"])(),
          Object(n["createElementBlock"])(
            "div",
            a,
            Object(n["toDisplayString"])(e.title),
            1
          )
        )
      }
      var i = Object(n["defineComponent"])({
          props: { title: { type: String, required: !0 } },
          setup: function () {
            return {}
          }
        }),
        s = (c("c641"), c("6b0d")),
        d = c.n(s)
      const r = d()(i, [
        ["render", o],
        ["__scopeId", "data-v-7ffa35a6"]
      ])
      var p = r
      t["a"] = p
    },
    ea11: function (e, t, c) {
      "use strict"
      c("78bf")
    },
    f3e5: function (e, t, c) {
      "use strict"
      c("9058")
    }
  }
])
//# sourceMappingURL=chunk-b8747d2c.3f271463.js.map
