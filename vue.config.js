/* eslint-disable */
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: "./build",
  publicPath:
    process.env.NODE_ENV === "production" ? "/sanxiangseckillmobile" : "/",
  // publicPath: "/",
  devServer: {
    proxy: {
      "^/api/hyh": {
        target: "http://124.221.252.162:8077", // 后台接口地址
        pathRewrite: {
          "^/api/hyh": "" // /api/hyh -> ""
        },
        changeOrigin: true //是否跨域
      },
      "^/api/yhy": {
        target: "http://124.221.252.162:8082",
        pathRewrite: {
          "^/api/yhy": ""
        },
        changeOrigin: true
      },
      "^/api/czc": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api/czc": "/"
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    },
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      vant: "vant",
      axios: "axios"
    },
    // plugins: [new BundleAnalyzerPlugin()]
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        bypassOnDebug: true
      })
      .end()
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
