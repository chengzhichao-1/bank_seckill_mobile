;(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-69212b28"],
  {
    "0e3f": function (e, t, n) {},
    "46ad": function (e, t, n) {},
    a479: function (e, t, n) {},
    c641: function (e, t, n) {
      "use strict"
      n("0e3f")
    },
    d310: function (e, t, n) {
      "use strict"
      var c = n("8bbf"),
        r = { class: "nav-title" }
      function o(e, t, n, o, a, l) {
        return (
          Object(c["openBlock"])(),
          Object(c["createElementBlock"])(
            "div",
            r,
            Object(c["toDisplayString"])(e.title),
            1
          )
        )
      }
      var a = Object(c["defineComponent"])({
          props: { title: { type: String, required: !0 } },
          setup: function () {
            return {}
          }
        }),
        l = (n("c641"), n("6b0d")),
        i = n.n(l)
      const d = i()(a, [
        ["render", o],
        ["__scopeId", "data-v-7ffa35a6"]
      ])
      var u = d
      t["a"] = u
    },
    dcb3: function (e, t, n) {
      "use strict"
      n("ed48")
    },
    ebc1: function (e, t, n) {
      "use strict"
      n.r(t)
      n("b0c0")
      var c = n("8bbf"),
        r = { class: "product-detail" }
      function o(e, t, n, o, a, l) {
        var i,
          d = Object(c["resolveComponent"])("nav-title"),
          u = Object(c["resolveComponent"])("product-detail-main"),
          s = Object(c["resolveComponent"])("product-detail-other")
        return (
          Object(c["openBlock"])(),
          Object(c["createElementBlock"])("div", r, [
            Object(c["createVNode"])(d, { title: "产品详情" }),
            Object(c["createVNode"])(
              u,
              { productDetail: e.productDetail },
              null,
              8,
              ["productDetail"]
            ),
            Object(c["createVNode"])(
              s,
              {
                productName:
                  null === (i = e.productDetail) || void 0 === i
                    ? void 0
                    : i.name
              },
              null,
              8,
              ["productName"]
            )
          ])
        )
      }
      var a = n("5880"),
        l = n("6389"),
        i = n("d310"),
        d = { class: "product-detail-main" }
      function u(e, t, n, r, o, a) {
        var l = Object(c["resolveComponent"])("order-detail"),
          i = Object(c["resolveComponent"])("van-overlay"),
          u = Object(c["resolveComponent"])("product-detail-info")
        return (
          Object(c["openBlock"])(),
          Object(c["createElementBlock"])("div", d, [
            Object(c["createVNode"])(
              u,
              {
                onOrderShowChange: e.orderShowChange,
                currentProducts: [e.productDetail],
                currentIndex: 0
              },
              {
                order: Object(c["withCtx"])(function () {
                  return [
                    Object(c["createVNode"])(
                      i,
                      {
                        class: "my-overlay",
                        show: e.isOrderShow,
                        onClick:
                          t[1] ||
                          (t[1] = function (t) {
                            return (e.isOrderShow = !1)
                          })
                      },
                      {
                        default: Object(c["withCtx"])(function () {
                          return [
                            Object(c["createElementVNode"])(
                              "div",
                              {
                                class: "wrapper",
                                onClick:
                                  t[0] ||
                                  (t[0] = Object(c["withModifiers"])(
                                    function () {},
                                    ["stop"]
                                  ))
                              },
                              [
                                Object(c["createVNode"])(
                                  l,
                                  {
                                    productDetail: e.productDetail,
                                    onOrderShowChange: e.orderShowChange
                                  },
                                  null,
                                  8,
                                  ["productDetail", "onOrderShowChange"]
                                )
                              ]
                            )
                          ]
                        }),
                        _: 1
                      },
                      8,
                      ["show"]
                    )
                  ]
                }),
                _: 1
              },
              8,
              ["onOrderShowChange", "currentProducts"]
            )
          ])
        )
      }
      var s = n("b8bc"),
        b = function (e) {
          return (
            Object(c["pushScopeId"])("data-v-356df687"),
            (e = e()),
            Object(c["popScopeId"])(),
            e
          )
        },
        p = { class: "order-detail" },
        m = b(function () {
          return Object(c["createElementVNode"])("h4", null, "订单详情", -1)
        }),
        O = { class: "item" },
        j = { class: "key" },
        f = { class: "item" },
        v = b(function () {
          return Object(c["createElementVNode"])(
            "div",
            { class: "key" },
            "存入金额",
            -1
          )
        }),
        h = { class: "value" },
        N = { class: "item" },
        E = b(function () {
          return Object(c["createElementVNode"])(
            "div",
            { class: "key" },
            "产品期限",
            -1
          )
        }),
        V = { class: "value" },
        D = { class: "item" },
        g = b(function () {
          return Object(c["createElementVNode"])(
            "div",
            { class: "key" },
            "年利率",
            -1
          )
        }),
        C = { class: "value" },
        w = { class: "item" },
        k = b(function () {
          return Object(c["createElementVNode"])(
            "div",
            { class: "key" },
            "到期日期",
            -1
          )
        }),
        S = { class: "value" },
        y = { class: "btns" }
      function I(e, t, n, r, o, a) {
        return (
          Object(c["openBlock"])(),
          Object(c["createElementBlock"])("div", p, [
            m,
            Object(c["createElementVNode"])("div", O, [
              Object(c["createElementVNode"])(
                "div",
                j,
                Object(c["toDisplayString"])(e.productDetail.name),
                1
              )
            ]),
            Object(c["createElementVNode"])("div", f, [
              v,
              Object(c["createElementVNode"])(
                "div",
                h,
                Object(c["toDisplayString"])(e.productDetail.initialAmount) +
                  "元",
                1
              )
            ]),
            Object(c["createElementVNode"])("div", N, [
              E,
              Object(c["createElementVNode"])(
                "div",
                V,
                Object(c["toDisplayString"])(e.productDetail.deadLine) + "天",
                1
              )
            ]),
            Object(c["createElementVNode"])("div", D, [
              g,
              Object(c["createElementVNode"])(
                "div",
                C,
                Object(c["toDisplayString"])(e.productDetail.rateOfReturn) +
                  "%",
                1
              )
            ]),
            Object(c["createElementVNode"])("div", w, [
              k,
              Object(c["createElementVNode"])(
                "div",
                S,
                Object(c["toDisplayString"])(
                  e.$filters.formatTime(
                    new Date().getTime() +
                      24 * e.productDetail.deadLine * 60 * 60 * 1e3
                  )
                ),
                1
              )
            ]),
            Object(c["createElementVNode"])("div", y, [
              Object(c["createElementVNode"])(
                "button",
                {
                  onClick:
                    t[0] ||
                    (t[0] = function () {
                      return (
                        e.handleCannel && e.handleCannel.apply(e, arguments)
                      )
                    })
                },
                "取消"
              ),
              Object(c["createElementVNode"])(
                "button",
                {
                  onClick:
                    t[1] ||
                    (t[1] = function () {
                      return e.handleClick && e.handleClick.apply(e, arguments)
                    })
                },
                "确认并前往支付"
              )
            ])
          ])
        )
      }
      var B = n("1da1"),
        T = (n("b680"), n("96cf"), n("3089")),
        x = n("b7e8"),
        R = n("d80c"),
        L = Object(c["defineComponent"])({
          props: ["productDetail"],
          setup: function (e, t) {
            var n = t.emit,
              c = Object(l["useRouter"])(),
              r = Object(a["useStore"])(),
              o = function () {
                n("orderShowChange", !1)
              },
              i = function () {
                var e, t
                11 !== r.state.phone.length
                  ? (T["Toast"].fail("请先登录"), c.push("/login"))
                  : null !== (e = r.state.login.userBaseInfo) &&
                    void 0 !== e &&
                    e.customerName &&
                    null !== (t = r.state.login.userBaseInfo) &&
                    void 0 !== t &&
                    t.customerBankCard
                  ? d()
                  : (T["Toast"].fail("请先完善个人信息"),
                    c.push("/myinformation"))
              },
              d = (function () {
                var t = Object(B["a"])(
                  regeneratorRuntime.mark(function t() {
                    var n
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Object(x["e"])(
                                r.state.phone,
                                e.productDetail.activityID,
                                String(3)
                              )
                            )
                          case 2:
                            ;(n = t.sent),
                              200 === n.code
                                ? s(n.obj)
                                : T["Toast"].fail(n.message)
                          case 4:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function () {
                  return t.apply(this, arguments)
                }
              })(),
              u = (function () {
                var t = Object(B["a"])(
                  regeneratorRuntime.mark(function t() {
                    var n
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Object(x["f"])(
                                r.state.phone,
                                e.productDetail.activityID
                              )
                            )
                          case 2:
                            ;(n = t.sent),
                              "Failed" === n.message
                                ? u()
                                : "SUCCESS" === n.message &&
                                  (T["Toast"].success("抢购成功"),
                                  r.dispatch("login/accountLoginAction", {
                                    tel: R["a"].getCache("userBaseInfo")
                                      .customerPhoneNumber,
                                    password:
                                      R["a"].getCache("userBaseInfo")
                                        .customerPassword,
                                    noToast: !0
                                  }),
                                  c.push({
                                    path: "/pay",
                                    name: "Pay",
                                    params: {
                                      name: e.productDetail.name,
                                      initialAmount:
                                        e.productDetail.initialAmount,
                                      deadLine: e.productDetail.deadLine,
                                      rateOfReturn:
                                        e.productDetail.rateOfReturn,
                                      deadLineDate: b(e.productDetail.deadLine),
                                      expectedIncome: p(
                                        e.productDetail.rateOfReturn,
                                        e.productDetail.initialAmount,
                                        e.productDetail.deadLine
                                      ),
                                      localCacheExpirationTimestamp:
                                        new Date().getTime() + 864e5,
                                      orderID: n.obj
                                    }
                                  }))
                          case 4:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function () {
                  return t.apply(this, arguments)
                }
              })(),
              s = (function () {
                var t = Object(B["a"])(
                  regeneratorRuntime.mark(function t(n) {
                    var c
                    return regeneratorRuntime.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Object(x["g"])(
                                r.state.phone,
                                e.productDetail.activityID,
                                String(3),
                                n
                              )
                            )
                          case 2:
                            ;(c = t.sent),
                              0 === c.code || 200 === c.code
                                ? (T["Toast"].success("排队中"),
                                  setTimeout(function () {
                                    u()
                                  }, 1e3))
                                : T["Toast"].fail(c.message)
                          case 4:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })(),
              b = function (e) {
                var t = new Date(new Date().getTime() + 24 * e * 60 * 60 * 1e3)
                return (
                  t.getFullYear() +
                  (t.getMonth() + 1 < 10 ? "-0" : "-") +
                  (t.getMonth() + 1) +
                  (t.getDate() < 10 ? "-0" : "-") +
                  t.getDate()
                )
              },
              p = function (e, t, n) {
                return ((e * t * n) / 100 / 365).toFixed(2)
              }
            return { handleCannel: o, handleClick: i, handleGetPath: d }
          }
        }),
        P = (n("f1bd"), n("6b0d")),
        _ = n.n(P)
      const A = _()(L, [
        ["render", I],
        ["__scopeId", "data-v-356df687"]
      ])
      var F = A,
        M = Object(c["defineComponent"])({
          components: { ProductDetailInfo: s["a"], OrderDetail: F },
          props: ["productDetail"],
          setup: function () {
            var e = Object(c["ref"])(!1),
              t = function (t) {
                e.value = t
              }
            return { isOrderShow: e, orderShowChange: t }
          }
        })
      n("fb24")
      const J = _()(M, [
        ["render", u],
        ["__scopeId", "data-v-284b5653"]
      ])
      var q = J,
        z = function (e) {
          return (
            Object(c["pushScopeId"])("data-v-2d6ca4e8"),
            (e = e()),
            Object(c["popScopeId"])(),
            e
          )
        },
        G = { class: "product-detail-other" },
        U = { class: "top" },
        Y = ["onClick"],
        Z = { class: "inner" },
        $ = { class: "content" },
        H = z(function () {
          return Object(c["createElementVNode"])("td", null, "名称", -1)
        }),
        K = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])(
                "td",
                null,
                "全国银行业理财信息登记系统登记编号"
              ),
              Object(c["createElementVNode"])(
                "td",
                null,
                " 产品登记编码：Z7001621000402（养老），投资者可以根据该登记编号在中国理财网查询产品信息。 "
              )
            ],
            -1
          )
        }),
        Q = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "产品代码"),
              Object(c["createElementVNode"])("td", null, "103507")
            ],
            -1
          )
        }),
        W = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "理财币种"),
              Object(c["createElementVNode"])("td", null, "人民币")
            ],
            -1
          )
        }),
        X = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "产品类型"),
              Object(c["createElementVNode"])("td", null, "固定收益类")
            ],
            -1
          )
        }),
        ee = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "产品代码"),
              Object(c["createElementVNode"])("td", null, "103507")
            ],
            -1
          )
        }),
        te = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "募集方式"),
              Object(c["createElementVNode"])("td", null, "公募发行")
            ],
            -1
          )
        }),
        ne = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "运作方式"),
              Object(c["createElementVNode"])(
                "td",
                null,
                " 封闭式，原则上存续期间不得申购和赎回，符合监管提前赎回情形或本理财计划产品说明书有特别约定的除外 "
              )
            ],
            -1
          )
        }),
        ce = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "发行对象"),
              Object(c["createElementVNode"])(
                "td",
                null,
                "持有试点地区（湖南）身份证的湖南三湘银行个人"
              )
            ],
            -1
          )
        }),
        re = z(function () {
          return Object(c["createElementVNode"])(
            "tr",
            null,
            [
              Object(c["createElementVNode"])("td", null, "发行规则"),
              Object(c["createElementVNode"])(
                "td",
                null,
                " 产品合计发行规模下限1亿元，上限30亿元。若本理财计划发行规模超出上限，销售服务机构及管理人有权暂停接受认购申请。详细内容见本《产品说明书之》“理财计划认购”。 "
              )
            ],
            -1
          )
        })
      function oe(e, t, n, r, o, a) {
        return (
          Object(c["openBlock"])(),
          Object(c["createElementBlock"])("div", G, [
            Object(c["createElementVNode"])("div", U, [
              (Object(c["openBlock"])(!0),
              Object(c["createElementBlock"])(
                c["Fragment"],
                null,
                Object(c["renderList"])(e.topTitleList, function (t, n) {
                  return (
                    Object(c["openBlock"])(),
                    Object(c["createElementBlock"])(
                      "div",
                      {
                        class: Object(c["normalizeClass"])([
                          { active: e.activeTitleIndex === n },
                          "item"
                        ]),
                        key: n,
                        onClick: function (t) {
                          return (e.activeTitleIndex = n)
                        }
                      },
                      [
                        Object(c["createElementVNode"])(
                          "div",
                          Z,
                          Object(c["toDisplayString"])(t),
                          1
                        )
                      ],
                      10,
                      Y
                    )
                  )
                }),
                128
              ))
            ]),
            Object(c["createElementVNode"])("div", $, [
              Object(c["createElementVNode"])("table", null, [
                Object(c["createElementVNode"])("tr", null, [
                  H,
                  Object(c["createElementVNode"])(
                    "td",
                    null,
                    Object(c["toDisplayString"])(e.productName),
                    1
                  )
                ]),
                K,
                Q,
                W,
                X,
                ee,
                te,
                ne,
                ce,
                re
              ])
            ])
          ])
        )
      }
      var ae = Object(c["defineComponent"])({
        props: ["productName"],
        setup: function () {
          var e = [
              "产品概览",
              "购买说明",
              "产品说明书",
              "风险揭示书",
              "产品公告",
              "产品净值",
              "投资报告"
            ],
            t = Object(c["ref"])(0)
          return { topTitleList: e, activeTitleIndex: t }
        }
      })
      n("dcb3")
      const le = _()(ae, [
        ["render", oe],
        ["__scopeId", "data-v-2d6ca4e8"]
      ])
      var ie = le,
        de = Object(c["defineComponent"])({
          components: {
            NavTitle: i["a"],
            ProductDetailMain: q,
            ProductDetailOther: ie
          },
          setup: function () {
            var e = Object(l["useRoute"])(),
              t = Object(a["useStore"])(),
              n = Object(c["ref"])({}),
              r = e.params.id,
              o = t.dispatch("product/getProductDetailAction", { id: r })
            return (
              o.then(function (e) {
                console.log(e), (n.value = e)
              }),
              { productDetail: n }
            )
          }
        })
      const ue = _()(de, [["render", o]])
      t["default"] = ue
    },
    ed48: function (e, t, n) {},
    f1bd: function (e, t, n) {
      "use strict"
      n("46ad")
    },
    fb24: function (e, t, n) {
      "use strict"
      n("a479")
    }
  }
])
//# sourceMappingURL=chunk-69212b28.02cdd825.js.map
