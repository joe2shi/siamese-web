import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: Cookies.get('theme') || 'light',
    language: Cookies.get('language') || 'zh',
    loading: false,
    message: null,
    color: null,
    icon: null
  },
  mutations: {
    SWITCH_THEME: (state, payload) => {
      state.theme = payload
      Cookies.set('theme', payload)
    },
    SWITCH_LANGUAGE: (state, payload) => {
      state.language = payload
      Cookies.set('language', payload)
    },
    SWITCH_LOADING: (state, payload) => {
      state.loading = payload
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
    switchTheme ({ commit }, payload) {
      commit('SWITCH_THEME', payload)
    },
    switchLanguage ({ commit }, payload) {
      commit('SWITCH_LANGUAGE', payload)
    },
    switchLoading ({ commit }, payload) {
      commit('SWITCH_LOADING', payload)
    },
    showSnackbar ({ commit }, payload) {
      commit('SHOW_SNACKBAR', payload)
    }
  },
  getters: {
    theme: state => state.theme,
    language: state => state.language,
    loading: state => state.loading,
    text: state => state.message,
    color: state => state.color,
    icon: state => state.icon
  }
})
