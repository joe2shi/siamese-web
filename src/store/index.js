import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miniVariant: Cookies.get('miniVariant') || true
  },
  mutations: {
    SWITCH_MINI_VARIANT: (state, miniVariant) => {
      state.mini_variant = miniVariant
      Cookies.set('miniVariant', miniVariant)
    }
  },
  actions: {
    switchMiniVariant ({ commit }, miniVariant) {
      commit('SWITCH_MINI_VARIANT', miniVariant)
    }
  },
  getters: {
    miniVariant: state => state.miniVariant
  }
})
