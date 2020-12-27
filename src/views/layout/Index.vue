<template>
  <v-card flat tile class="layout" color="secondary">
    <nav-bar :mini-variant="miniVariant"/>
    <side-bar :username="username" :motto="motto" :drawer="drawer" :mini-variant="miniVariant"/>
    <v-main>
      <v-card flat class="ma-4 pa-4" color="accent">
        <breadcrumb/>
        <router-view/>
      </v-card>
    </v-main>
  </v-card>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'
import Breadcrumb from '../layout/Breadcrumb'

export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    Breadcrumb
  },
  data: () => ({
    username: 'Joe',
    motto: 'As long as the heart is beating',
    drawer: true,
    miniVariant: false
  })
}
</script>
