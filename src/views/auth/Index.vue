<template>
  <v-card flat tile min-height="100%">
    <router-view/>
  </v-card>
</template>

<script>
export default {
  name: 'SingInLayout',
  created () {
    this.$i18n.locale = this.$store.getters.language
  }
}
</script>
