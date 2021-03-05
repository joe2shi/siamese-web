<template>
  <v-card flat tile class="layout" color="secondary">
    <snackbar/>
    <nav-bar :github="user.github"/>
    <side-bar :username="user.username" :motto="user.motto" :avatar="user.avatar"/>
    <v-main>
      <loading :loading="loading"/>
      <v-card flat class="ma-4" color="accent">
        <breadcrumb/>
        <router-view/>
      </v-card>
    </v-main>
    <directory/>
  </v-card>
</template>

<script>
import Loading from './core/Loading'
import Snackbar from './core/Snackbar'
import Breadcrumb from './core/Breadcrumb'
import NavBar from './core/NavBar'
import SideBar from './core/SideBar'
import Directory from './core/Directory'
import { mapActions, mapState } from 'vuex'
import { getListAPI, postAPI } from '../../api'

export default {
  name: 'Layout',
  components: {
    Directory,
    Loading,
    Snackbar,
    NavBar,
    SideBar,
    Breadcrumb
  },
  data: () => ({
    user: {
      username: '',
      motto: '',
      github: '',
      avatar: ''
    }
  }),
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['showSnackbar', 'switchDrawer']),
    init: function () {
      this.$vuetify.theme.dark = this.theme !== 'light'
      this.switchBackgroundColor()
      this.sigIn()
    },
    switchBackgroundColor: function () {
      if (this.$vuetify.theme.dark) document.body.style.backgroundColor = '#191919'
      else document.body.style.backgroundColor = '#f1f3f4'
    },
    sigIn: function () {
      postAPI('/siamese-auth/accredit', { username: 'Joe', password: '19990628sq' })
        .then(response => {
          if (response) {
            localStorage.setItem('token', response.data.data)
            this.showSnackbar({ message: response.data.message, color: 'success' })
            this.getUserInformation()
          }
        })
    },
    getUserInformation: function () {
      getListAPI('/siamese-user-interface/user')
        .then(response => {
          if (response) {
            this.user = response.data.data
          }
        })
    }
  },
  computed: {
    ...mapState(['loading', 'theme'])
  }
}
</script>
