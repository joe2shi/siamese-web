<template>
  <router-view/>
</template>

<script>
export default {
  name: 'SingInLayout',
  created () {
    this.$i18n.locale = this.$store.getters.language
  }
}
</script>
