<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    elevation="1"
    app right top>
    <div class="v-alert__border v-alert__border--left"/>
    <v-icon v-show="icon" class="ml-2 mr-4">{{ icon }}</v-icon>
    <span class="align-middle">{{ message }}</span>
    <v-btn class="text-none ml-4" text small @click="show = false">
      {{ $t('Common.Close') }}
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SHOW_SNACKBAR') {
        this.message = state.message
        this.color = state.color
        this.icon = state.icon
        this.show = true
      }
    })
  },
  data: () => ({
    show: false,
    color: '',
    message: '',
    timeout: 3000,
    icon: ''
  })
}
</script>
