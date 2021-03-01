<template>
  <v-card flat tile class="layout" color="secondary">
    <loading :loading="loading"/>
    <snackbar/>
    <v-app-bar flat app clipped-left clipped-right color="accent" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-and-up"/>
      <v-toolbar-title class="text-subtitle-1 font-weight-medium mx-auto" v-text="$t('Base.ApplicationName')"/>
      <v-spacer/>
      <v-responsive class="hidden-sm-and-down mr-2" max-width="300">
        <v-text-field
          flat
          hide-details
          single-line
          rounded
          :dark="theme !== 'light'"
          class="text-caption"
          background-color="secondary"
          prepend-inner-icon="mdi-magnify"
          :placeholder="$t('Common.Search')"/>
      </v-responsive>
      <internationalization/>
      <v-btn icon class="hidden-sm-and-down" target="_blank" :href="github">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down" @click="switchTheme()">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer color="accent" :mini-variant="miniVariant" v-model="drawer" floating clipped app>
      <v-list>
        <v-list-item v-show="!miniVariant">
          <v-list-item-avatar class="mx-auto" width="80" height="80">
            <v-img class="grey" :src="avatar"/>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item v-show="!miniVariant">
          <v-list-item-content class="py-0">
            <v-list-item-title class="text-center text-body-1 font-weight-medium" v-text="username"/>
            <v-list-item-subtitle class="text-center text-caption" v-text="motto"/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="px-2" v-show="miniVariant">
          <v-list-item-avatar>
            <v-list-item-avatar class="mx-auto">
              <v-img :src="avatar"/>
            </v-list-item-avatar>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-divider/>
      <v-list nav dense>
        <v-list-item-group color="primary" mandatory>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
            <v-list-item-icon>
              <v-tooltip right :disabled="!miniVariant">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-text="item.icon" class="px-1" v-bind="attrs" v-on="on" small/>
                </template>
                <span class="text-caption" v-text="$t(item.text)"/>
              </v-tooltip>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular" v-text="$t(item.text)"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-card flat class="ma-4" color="accent">
        <breadcrumb/>
        <router-view/>
      </v-card>
    </v-main>
    <v-navigation-drawer color="accent" right floating clipped app>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import Loading from '../../components/Loading'
import Snackbar from '../../components/Snackbar'
import Breadcrumb from '../../components/Breadcrumb'
import Internationalization from '../../components/Internationalization'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Loading,
    Snackbar,
    Breadcrumb,
    Internationalization
  },
  created () {
    this.$vuetify.theme.dark = this.theme !== 'light'
    this.$vuetify.theme.dark ? document.body.style.backgroundColor = '#191919' : document.body.style.backgroundColor = '#f1f3f4'
  },
  mounted () {
    this.$nextTick(() => {
      this.showSnackbar({ message: this.$t('Tip.Welcome'), color: 'success' })
    })
  },
  data: () => ({
    drawer: null,
    miniVariant: false,
    username: 'Joe',
    motto: 'As long as the heart is beating',
    github: 'https://github.com/joe2shi',
    avatar: 'http://file.joe2shi.com/image/M00/00/00/wKgBfGAguGOAdf9wAAF0bzqHPeM888.jpg',
    prefixMenu: 'Menu',
    items: [
      { text: 'Menu.Dashboard', icon: 'mdi-palette', path: '/dashboard' },
      { text: 'Menu.Repository', icon: 'mdi-github' },
      { text: 'Menu.Friends', icon: 'mdi-account' },
      { text: 'Menu.Album', icon: 'mdi-image', path: '/album' },
      { text: 'Menu.Diary', icon: 'mdi-notebook' },
      { text: 'Menu.About', icon: 'mdi-information' }
    ]
  }),
  methods: {
    ...mapActions(['showSnackbar']),
    switchTheme: function () {
      this.$vuetify.theme.dark = this.theme === 'light'
      this.$vuetify.theme.dark ? document.body.style.backgroundColor = '#191919' : document.body.style.backgroundColor = '#f1f3f4'
      this.$store.dispatch('switchTheme', this.theme === 'light' ? 'dark' : 'light')
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapState(['theme'])
  }
}
</script>
