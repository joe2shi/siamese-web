<template>
  <v-card flat tile class="layout" color="secondary">
    <app-bar/>
    <v-main>
      <v-card flat class="ma-4 pa-4" color="accent">
        <breadcrumb/>
        <router-view/>
      </v-card>
    </v-main>
  </v-card>
</template>

<script>
import AppBar from './AppBar'
import Breadcrumb from '../layout/Breadcrumb'

export default {
  name: 'Layout',
  components: {
    AppBar,
    Breadcrumb
  }
}
</script>
