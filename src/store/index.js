import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miniSidebar: Cookies.get('miniSidebar') || 'close',
    theme: Cookies.get('miniSidebar') || 'light'
  },
  mutations: {
    SWITCH_MINI_SIDEBAR: (state, miniSidebar) => {
      state.miniSidebar = miniSidebar
      Cookies.set('miniSidebar', miniSidebar)
    },
    SWITCH_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
    }
  },
  actions: {
    switchMiniSidebar ({ commit }, miniSidebar) {
      commit('SWITCH_MINI_SIDEBAR', miniSidebar)
    },
    switchTheme ({ commit }, theme) {
      commit('SWITCH_THEME', theme)
    }
  },
  getters: {
    miniSidebar: state => state.miniSidebar,
    theme: state => state.theme
  }
})
