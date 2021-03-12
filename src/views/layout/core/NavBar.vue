<template>
  <v-app-bar flat app clipped-left clipped-right color="accent" elevation="1">
    <v-app-bar-nav-icon @click="showDrawer()" class="hidden-lg-and-up"/>
    <v-toolbar-title class="text-subtitle-1 font-weight-medium mx-auto" v-text="$t('Base.ApplicationName')"/>
    <v-spacer/>
    <v-responsive class="hidden-sm-and-down mr-2" max-width="300">
      <v-text-field
        flat
        hide-details
        single-line
        rounded
        class="text-caption"
        background-color="secondary"
        prepend-inner-icon="mdi-magnify"
        :placeholder="$t('Common.Search')"/>
    </v-responsive>
    <internationalization/>
    <v-btn icon class="hidden-sm-and-down" target="_blank" :href="github">
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <v-btn icon @click="changeTheme()">
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Internationalization from './Internationalization'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'NavBar',
  components: { Internationalization },
  props: ['github'],
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...mapActions(['switchTheme', 'switchDrawer']),
    changeTheme: function () {
      this.$vuetify.theme.dark = this.theme === 'light'
      this.switchTheme(this.theme === 'light' ? 'dark' : 'light')
      this.switchBackgroundColor()
    },
    switchBackgroundColor: function () {
      if (this.$vuetify.theme.dark) document.body.style.backgroundColor = '#191919'
      else document.body.style.backgroundColor = '#f1f3f4'
    },
    showDrawer: function () {
      this.switchDrawer(true)
    }
  }
}
</script>
