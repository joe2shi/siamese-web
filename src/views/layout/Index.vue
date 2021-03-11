<template>
  <v-card flat tile class="layout" color="secondary">
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
import Loading from '../../components/basic/Loading'
import Breadcrumb from './core/Breadcrumb'
import NavBar from './core/NavBar'
import SideBar from './core/SideBar'
import Directory from './core/Directory'
import { mapActions, mapState } from 'vuex'
import { getListAPI } from '../../api'

export default {
  name: 'Layout',
  components: {
    Directory,
    Loading,
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
    this.getUserInformation()
  },
  methods: {
    ...mapActions(['switchDrawer']),
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
