const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    host: "37.187.134.126",
    port: 8080, // CHANGE YOUR PORT HERE!
  }
})
