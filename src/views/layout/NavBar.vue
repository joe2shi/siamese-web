<template>
  <v-app-bar flat fixed app color="accent">
    <v-app-bar-nav-icon class="ml-2" @click="switchMiniVariant"/>
    <v-toolbar-title class="text-h6 font-weight-regular" v-text="applicationName"/>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    applicationName: 'Siamese'
  }),
  methods: {
    switchMiniVariant () {
      this.$store.dispatch('switchMiniVariant', this.$store.getters.miniVariant === 'true')
    }
  }
}
</script>
