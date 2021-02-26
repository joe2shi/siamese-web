import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miniSidebar: Cookies.get('miniSidebar') || 'close',
    theme: Cookies.get('theme') || 'light',
    language: Cookies.get('language') || 'zh',
    loading: false,
    message: '',
    color: '',
    icon: ''
  },
  mutations: {
    SWITCH_MINI_SIDEBAR: (state, miniSidebar) => {
      state.miniSidebar = miniSidebar
      Cookies.set('miniSidebar', miniSidebar)
    },
    SWITCH_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
    },
    SWITCH_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SWITCH_LOADING: (state, loading) => {
      state.loading = loading
    },
    SHOW_SNACKBAR: (state, payload) => {
      switch (payload.color) {
        case 'success':
          payload.icon = 'mdi-check-circle'
          break
        case 'warning':
          payload.icon = 'mdi-alert-outline'
          break
        case 'error':
          payload.icon = 'mdi-alert-octagon-outline'
          break
        case 'info':
          payload.icon = 'mdi-alert-circle-outline'
          break
      }
      state.message = payload.message
      state.color = payload.color
      state.icon = payload.icon
    }
  },
  actions: {
    switchMiniSidebar ({ commit }, miniSidebar) {
      commit('SWITCH_MINI_SIDEBAR', miniSidebar)
    },
    switchTheme ({ commit }, theme) {
      commit('SWITCH_THEME', theme)
    },
    switchLanguage ({ commit }, language) {
      commit('SWITCH_LANGUAGE', language)
    },
    switchLoading ({ commit }, loading) {
      commit('SWITCH_LOADING', loading)
    },
    showSnackbar ({ commit }, payload) {
      commit('SHOW_SNACKBAR', payload)
    }
  },
  getters: {
    miniSidebar: state => state.miniSidebar,
    theme: state => state.theme,
    language: state => state.language,
    loading: state => state.loading,
    text: state => state.message,
    color: state => state.color,
    icon: state => state.icon
  }
})
