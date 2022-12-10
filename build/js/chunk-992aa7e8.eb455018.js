;(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-992aa7e8"],
  {
    "0e3f": function (e, t, n) {},
    5178: function (e, t, n) {},
    5627: function (e, t, n) {},
    7505: function (e, t, n) {
      "use strict"
      n("5178")
    },
    7512: function (e, t, n) {
      "use strict"
      n("93e7")
    },
    "7ecf": function (e, t, n) {
      "use strict"
      n("be8e")
    },
    "93e7": function (e, t, n) {},
    "95eb": function (e, t, n) {
      "use strict"
      n.r(t)
      var o = n("8bbf"),
        a = { class: "product-list" }
      function c(e, t, n, c, l, i) {
        var r,
          s,
          u,
          d,
          p,
          b = Object(o["resolveComponent"])("nav-title"),
          O = Object(o["resolveComponent"])("van-search"),
          v = Object(o["resolveComponent"])("product-list-select"),
          f = Object(o["resolveComponent"])("zc-table-column-sort"),
          m = Object(o["resolveComponent"])("product-list-detail"),
          j = Object(o["resolveComponent"])("van-pagination")
        return (
          Object(o["openBlock"])(),
          Object(o["createElementBlock"])("div", a, [
            Object(o["createVNode"])(b, { title: "产品列表" }),
            Object(o["createVNode"])(
              O,
              {
                modelValue: e.payload.keyWords,
                "onUpdate:modelValue":
                  t[0] ||
                  (t[0] = function (t) {
                    return (e.payload.keyWords = t)
                  }),
                modelModifiers: { lazy: !0 },
                placeholder: "请输入搜索关键词"
              },
              null,
              8,
              ["modelValue"]
            ),
            Object(o["createVNode"])(
              v,
              {
                onSelectOptionsChange: e.selectOptionsChange,
                selectTypeConfig: e.selectTypeConfig
              },
              null,
              8,
              ["onSelectOptionsChange", "selectTypeConfig"]
            ),
            Object(o["createVNode"])(
              f,
              {
                onSortOptionsChange: e.sortOptionsChange,
                sortOptions: e.sortOptionsConfig
              },
              null,
              8,
              ["onSortOptionsChange", "sortOptions"]
            ),
            Object(o["createVNode"])(
              m,
              {
                productList:
                  null === (r = e.productList) || void 0 === r ? void 0 : r.data
              },
              null,
              8,
              ["productList"]
            ),
            Object(o["createVNode"])(
              j,
              {
                class: "my-pagination",
                modelValue: e.payload.curPage,
                "onUpdate:modelValue":
                  t[1] ||
                  (t[1] = function (t) {
                    return (e.payload.curPage = t)
                  }),
                "total-items":
                  null !==
                    (s =
                      null === (u = e.productList) || void 0 === u
                        ? void 0
                        : u.total_records) && void 0 !== s
                    ? s
                    : 1,
                "page-count":
                  null !==
                    (d =
                      null === (p = e.productList) || void 0 === p
                        ? void 0
                        : p.total_pages) && void 0 !== d
                    ? d
                    : 1,
                "force-ellipses": ""
              },
              null,
              8,
              ["modelValue", "total-items", "page-count"]
            )
          ])
        )
      }
      var l = n("5880"),
        i = n("d310"),
        r = (n("b0c0"), { class: "zc-table-column-sort" }),
        s = { class: "label" },
        u = { class: "caret-wrapper" },
        d = ["onClick"],
        p = ["onClick"]
      function b(e, t, n, a, c, l) {
        return (
          Object(o["openBlock"])(),
          Object(o["createElementBlock"])("div", r, [
            (Object(o["openBlock"])(!0),
            Object(o["createElementBlock"])(
              o["Fragment"],
              null,
              Object(o["renderList"])(e.sortOptionsOriginData, function (t, n) {
                return (
                  Object(o["openBlock"])(),
                  Object(o["createElementBlock"])(
                    "div",
                    { class: "sort-option", key: t.name },
                    [
                      Object(o["createElementVNode"])(
                        "span",
                        s,
                        Object(o["toDisplayString"])(t.label),
                        1
                      ),
                      Object(o["createElementVNode"])("span", u, [
                        Object(o["createElementVNode"])(
                          "i",
                          {
                            class: Object(o["normalizeClass"])([
                              {
                                "ascending-active":
                                  t.state === e.SortType.ASCENDING
                              },
                              "ascending"
                            ]),
                            onClick: function (o) {
                              return e.handleSortBtnClick(
                                t.prop,
                                n,
                                e.SortType.ASCENDING
                              )
                            }
                          },
                          null,
                          10,
                          d
                        ),
                        Object(o["createElementVNode"])(
                          "i",
                          {
                            class: Object(o["normalizeClass"])([
                              {
                                "descending-active":
                                  t.state === e.SortType.DESCENDING
                              },
                              "descending"
                            ]),
                            onClick: function (o) {
                              return e.handleSortBtnClick(
                                t.prop,
                                n,
                                e.SortType.DESCENDING
                              )
                            }
                          },
                          null,
                          10,
                          p
                        )
                      ])
                    ]
                  )
                )
              }),
              128
            ))
          ])
        )
      }
      n("e9c4"), n("d3b7"), n("159b")
      var O = Object(o["defineComponent"])({
          props: {
            sortOptions: {
              type: Array,
              default: function () {
                return []
              }
            }
          },
          emits: ["sortOptionsChange"],
          setup: function (e, t) {
            var n,
              a = t.emit,
              c = Object(o["ref"])(JSON.parse(JSON.stringify(e.sortOptions)))
            ;(function (e) {
              ;(e[(e["UNSORTED"] = 0)] = "UNSORTED"),
                (e[(e["ASCENDING"] = 1)] = "ASCENDING"),
                (e[(e["DESCENDING"] = 2)] = "DESCENDING")
            })(n || (n = {}))
            var l = function () {
              c.value.forEach(function (e) {
                e["state"] = n.UNSORTED
              })
            }
            l()
            var i = function (e, t, o) {
              if (c.value[t].state === o)
                return (
                  (c.value[t].state = n.UNSORTED),
                  void a("sortOptionsChange", e, n.UNSORTED)
                )
              l(), (c.value[t].state = o), a("sortOptionsChange", e, o)
            }
            return {
              SortType: n,
              sortOptionsOriginData: c,
              handleSortBtnClick: i
            }
          }
        }),
        v = (n("7ecf"), n("6b0d")),
        f = n.n(v)
      const m = f()(O, [
        ["render", b],
        ["__scopeId", "data-v-4452d525"]
      ])
      var j = m,
        g = j,
        C = (n("d81d"), { class: "product-list-select" }),
        S = ["onClick"],
        N = { class: "label" }
      function h(e, t, n, a, c, l) {
        var i = Object(o["resolveComponent"])("van-picker"),
          r = Object(o["resolveComponent"])("van-popup")
        return (
          Object(o["openBlock"])(),
          Object(o["createElementBlock"])("div", C, [
            (Object(o["openBlock"])(!0),
            Object(o["createElementBlock"])(
              o["Fragment"],
              null,
              Object(o["renderList"])(e.selectTypeData, function (t, n) {
                return (
                  Object(o["openBlock"])(),
                  Object(o["createElementBlock"])(
                    "div",
                    {
                      class: "select-item",
                      key: n,
                      onClick: function (t) {
                        return e.handleSelectClick(n)
                      }
                    },
                    [
                      Object(o["createElementVNode"])(
                        "span",
                        N,
                        Object(o["toDisplayString"])(
                          t.options[t.activeIndex].label
                        ),
                        1
                      ),
                      Object(o["createElementVNode"])(
                        "i",
                        {
                          class: Object(o["normalizeClass"])({
                            "lower-triangle": !e.isShow || e.showIndex !== n,
                            "upper-triangle": e.showIndex === n && e.isShow
                          })
                        },
                        null,
                        2
                      )
                    ],
                    8,
                    S
                  )
                )
              }),
              128
            )),
            Object(o["createVNode"])(
              r,
              {
                show: e.isShow,
                "onUpdate:show":
                  t[1] ||
                  (t[1] = function (t) {
                    return (e.isShow = t)
                  }),
                round: "",
                position: "bottom"
              },
              {
                default: Object(o["withCtx"])(function () {
                  var n
                  return [
                    Object(o["createVNode"])(
                      i,
                      {
                        title: e.selectTypeData[e.showIndex].label,
                        defaultIndex: 1,
                        columns:
                          null ===
                            (n = e.selectTypeData[e.showIndex].options) ||
                          void 0 === n
                            ? void 0
                            : n.map(function (e) {
                                return e.label
                              }),
                        onConfirm: e.handleConfirm,
                        onCancel:
                          t[0] ||
                          (t[0] = function (t) {
                            return (e.isShow = !1)
                          })
                      },
                      null,
                      8,
                      ["title", "columns", "onConfirm"]
                    )
                  ]
                }),
                _: 1
              },
              8,
              ["show"]
            )
          ])
        )
      }
      var k = n("2909"),
        y =
          (n("99af"),
          Object(o["defineComponent"])({
            props: { selectTypeConfig: { type: Array, required: !0 } },
            emits: ["selectOptionsChange"],
            setup: function (e, t) {
              var n = t.emit,
                a = Object(o["ref"])(!1),
                c = Object(o["ref"])(0),
                l = Object(o["ref"])(
                  JSON.parse(JSON.stringify(e.selectTypeConfig))
                ),
                i = function (e) {
                  ;(a.value = !0), (c.value = e)
                },
                r = function (e, t) {
                  ;(l.value[c.value].activeIndex = t), (a.value = !1)
                  var o = l.value.map(function (e) {
                    return e.options[e.activeIndex].value
                  })
                  n.apply(
                    void 0,
                    ["selectOptionsChange"].concat(Object(k["a"])(o))
                  )
                }
              return {
                isShow: a,
                showIndex: c,
                selectTypeData: l,
                handleSelectClick: i,
                handleConfirm: r
              }
            }
          }))
      n("7512")
      const E = f()(y, [
        ["render", h],
        ["__scopeId", "data-v-260c90b6"]
      ])
      var D = E,
        V =
          (n("b680"),
          function (e) {
            return (
              Object(o["pushScopeId"])("data-v-49ae6b5e"),
              (e = e()),
              Object(o["popScopeId"])(),
              e
            )
          }),
        I = { class: "product-list-detail" },
        B = V(function () {
          return Object(o["createElementVNode"])(
            "div",
            { class: "sec-kill-ing" },
            "秒杀中",
            -1
          )
        }),
        w = { class: "left" },
        T = { class: "left-top" },
        R = V(function () {
          return Object(o["createElementVNode"])(
            "div",
            { class: "left-bottom" },
            "业绩比较基准",
            -1
          )
        }),
        L = { class: "right" },
        x = { class: "right-top" },
        A = { class: "right-bottom" },
        _ = { class: "item" },
        G = { class: "item" },
        U = { class: "right-bottom" },
        z = { class: "item" },
        J = { class: "item" }
      function P(e, t, n, a, c, l) {
        return (
          Object(o["openBlock"])(),
          Object(o["createElementBlock"])("div", I, [
            (Object(o["openBlock"])(!0),
            Object(o["createElementBlock"])(
              o["Fragment"],
              null,
              Object(o["renderList"])(e.productList, function (e) {
                return (
                  Object(o["openBlock"])(),
                  Object(o["createElementBlock"])(
                    "div",
                    { class: "product-item", key: e.id },
                    [
                      B,
                      Object(o["createElementVNode"])("div", w, [
                        Object(o["createElementVNode"])(
                          "div",
                          T,
                          Object(o["toDisplayString"])(
                            e.rateOfComparative.toFixed(2)
                          ) + "%",
                          1
                        ),
                        R
                      ]),
                      Object(o["createElementVNode"])("div", L, [
                        Object(o["createElementVNode"])(
                          "h5",
                          x,
                          Object(o["toDisplayString"])(e.name),
                          1
                        ),
                        Object(o["createElementVNode"])("div", A, [
                          Object(o["createElementVNode"])(
                            "div",
                            _,
                            Object(o["toDisplayString"])(e.initialAmount) +
                              "元起购",
                            1
                          ),
                          Object(o["createElementVNode"])(
                            "div",
                            G,
                            "封闭" +
                              Object(o["toDisplayString"])(e.deadLine) +
                              "天",
                            1
                          )
                        ]),
                        Object(o["createElementVNode"])("div", U, [
                          Object(o["createElementVNode"])(
                            "div",
                            z,
                            " 七日年化收益率" +
                              Object(o["toDisplayString"])(
                                e.rateOfReturn.toFixed(2)
                              ) +
                              "% ",
                            1
                          ),
                          Object(o["createElementVNode"])(
                            "div",
                            J,
                            "风险等级" +
                              Object(o["toDisplayString"])(e.riskRating),
                            1
                          )
                        ])
                      ])
                    ]
                  )
                )
              }),
              128
            ))
          ])
        )
      }
      var F = Object(o["defineComponent"])({
        props: ["productList"],
        setup: function () {
          return {}
        }
      })
      n("7505")
      const W = f()(F, [
        ["render", P],
        ["__scopeId", "data-v-49ae6b5e"]
      ])
      var q = W,
        M = [
          { prop: "rateOfReturn", label: "七日年化%" },
          { prop: "rateOfComparative", label: "业绩比较%" },
          { prop: "initialAmount", label: "起购金额" },
          { prop: "deadLine", label: "有效期限" }
        ],
        Z = [
          {
            prop: "initialAmount",
            label: "起购金额",
            options: [
              { value: "-1", label: "起购金额" },
              { value: "10000", label: "1万及以上" },
              { value: "20000", label: "2万及以上" },
              { value: "50000", label: "5万及以上" },
              { value: "100000", label: "10万及以上" }
            ],
            activeIndex: 0
          },
          {
            prop: "deadLine",
            label: "产品期限",
            options: [
              { value: "-1", label: "产品期限" },
              { value: "30", label: "30天" },
              { value: "90", label: "90天" },
              { value: "180", label: "180天" },
              { value: "270", label: "270天" },
              { value: "360", label: "360天" },
              { value: "720", label: "720天" }
            ],
            activeIndex: 0
          },
          {
            prop: "riskRating",
            label: "风险等级",
            options: [
              { value: "", label: "风险等级" },
              { value: "R1", label: "R1（谨慎型）" },
              { value: "R2", label: "R2（稳健型）" },
              { value: "R3", label: "R3（平衡型）" },
              { value: "R4", label: "R4（进取型）" },
              { value: "R5", label: "R5（激进型）" }
            ],
            activeIndex: 0
          }
        ],
        H = Object(o["defineComponent"])({
          components: {
            NavTitle: i["a"],
            ZcTableColumnSort: g,
            ProductListSelect: D,
            ProductListDetail: q
          },
          setup: function () {
            var e = Object(l["useStore"])(),
              t = Object(o["ref"])({
                keyWords: "",
                initialAmount: "-1",
                deadLine: "-1",
                riskRating: "",
                selectType: "",
                state: 0,
                curPage: 1,
                pageSize: 5
              }),
              n = function (e, n) {
                ;(t.value.selectType = e), (t.value.state = n)
              },
              a = function (e, n, o) {
                ;(t.value.initialAmount = e),
                  (t.value.deadLine = n),
                  (t.value.riskRating = o)
              }
            Object(o["watch"])(
              t.value,
              function () {
                e.dispatch("product/getProductListAction", t.value)
              },
              { deep: !0, immediate: !0 }
            )
            var c = Object(o["computed"])(function () {
              return e.state.product.productList
            })
            return {
              payload: t,
              productList: c,
              sortOptionsConfig: M,
              selectTypeConfig: Z,
              sortOptionsChange: n,
              selectOptionsChange: a
            }
          }
        })
      n("f5db")
      const K = f()(H, [
        ["render", c],
        ["__scopeId", "data-v-373a5653"]
      ])
      t["default"] = K
    },
    be8e: function (e, t, n) {},
    c641: function (e, t, n) {
      "use strict"
      n("0e3f")
    },
    d310: function (e, t, n) {
      "use strict"
      var o = n("8bbf"),
        a = { class: "nav-title" }
      function c(e, t, n, c, l, i) {
        return (
          Object(o["openBlock"])(),
          Object(o["createElementBlock"])(
            "div",
            a,
            Object(o["toDisplayString"])(e.title),
            1
          )
        )
      }
      var l = Object(o["defineComponent"])({
          props: { title: { type: String, required: !0 } },
          setup: function () {
            return {}
          }
        }),
        i = (n("c641"), n("6b0d")),
        r = n.n(i)
      const s = r()(l, [
        ["render", c],
        ["__scopeId", "data-v-7ffa35a6"]
      ])
      var u = s
      t["a"] = u
    },
    d81d: function (e, t, n) {
      "use strict"
      var o = n("23e7"),
        a = n("b727").map,
        c = n("1dde"),
        l = c("map")
      o(
        { target: "Array", proto: !0, forced: !l },
        {
          map: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
        }
      )
    },
    f5db: function (e, t, n) {
      "use strict"
      n("5627")
    }
  }
])
//# sourceMappingURL=chunk-992aa7e8.eb455018.js.map
