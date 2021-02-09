<template>
  <v-app-bar flat fixed app color="accent">
    <v-app-bar-nav-icon @click="switchMiniSidebar"/>
    <v-toolbar-title class="text-body-1 font-weight-medium" v-text="$t('Base.ApplicationName')"/>
    <v-spacer/>
    <internationalization/>
    <v-btn icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn icon @click="switchTheme">
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Internationalization from './Internationalization'

export default {
  name: 'NavBar',
  components: { Internationalization },
  created () {
    this.$vuetify.theme.dark = this.theme !== 'light'
  },
  methods: {
    switchMiniSidebar () {
      this.$store.dispatch('switchMiniSidebar', this.miniSidebar === 'open' ? 'close' : 'open')
    },
    switchTheme () {
      this.$vuetify.theme.dark = this.theme === 'light'
      this.$store.dispatch('switchTheme', this.theme === 'light' ? 'dark' : 'light')
    }
  },
  computed: {
    theme () {
      return this.$store.getters.theme
    },
    miniSidebar () {
      return this.$store.getters.miniSidebar
    }
  }
}
</script>
