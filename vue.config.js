module.exports = {
  devServer: {
    disableHostCheck: true
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
