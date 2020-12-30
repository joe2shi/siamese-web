<template>
  <v-app-bar flat fixed app color="accent">
    <v-app-bar-nav-icon @click="switchMiniSidebar"/>
    <v-toolbar-title class="text-body-1 text-uppercase" v-text="applicationName"/>
    <v-spacer/>
    <v-btn icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn icon @click="switchTheme">
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    applicationName: 'Siamese'
  }),
  methods: {
    switchMiniSidebar () {
      this.$store.dispatch('switchMiniSidebar', this.$store.getters.miniSidebar === 'open' ? 'close' : 'open')
    },
    switchTheme () {
      this.$store.dispatch('switchTheme', this.$store.getters.theme === 'dark' ? 'light' : 'dark')
      this.$vuetify.theme.dark = this.$store.getters.theme === 'dark'
    }
  }
}
</script>
