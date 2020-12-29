module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 80,
    host: '0.0.0.0',
    https: false,
    open: true
  },
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
