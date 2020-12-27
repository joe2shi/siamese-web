<template>
  <v-app-bar flat fixed app color="accent">
    <v-toolbar-title class="text-h6 font-weight-regular" v-text="applicationName"/>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    miniVariant: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    applicationName: 'Siamese'
  })
}
</script>
