module.exports = {
  compact: false,
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
      }
    ]
  ]
  // presets: [
  //   [
  //     "env",
  //     {
  //       modules: true
  //     }
  //   ],
  //   "stage-2"
  // ],
  // plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-preset-env"],
  // comments: false,
  // env: {
  //   test: {
  //     presets: ["env", "stage-2"],
  //     plugins: ["istanbul"]
  //   }
  // }
  // presets: ["@vue/cli-plugin-babel/preset"]
}
