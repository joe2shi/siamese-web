<template>
  <v-app id="app" class="grey">
    <snackbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Snackbar from './components/basic/Snackbar'
import { mapState } from 'vuex'

export default {
  name: 'SingInLayout',
  components: { Snackbar },
  created () {
    this.init()
    this.switchTitle(this.$route.matched)
  },
  watch: {
    '$route.matched' (newValue) {
      this.switchTitle(newValue)
    },
    'language' () {
      this.switchTitle(this.$route.matched)
    }
  },
  methods: {
    init: function () {
      this.$vuetify.theme.dark = this.theme !== 'light'
      this.switchBackgroundColor()
    },
    switchBackgroundColor: function () {
      if (this.$vuetify.theme.dark) document.body.style.backgroundColor = '#191919'
      else document.body.style.backgroundColor = '#f1f3f4'
    },
    switchTitle: function (matched) {
      const size = matched.length
      if (size > 0) {
        document.title = `${this.$t('Base.ApplicationName')} / ${this.$t(`Menu.${matched[size - 1].meta.title}`)}`
      }
    }
  },
  computed: {
    ...mapState(['theme', 'language'])
  }
}
</script>
