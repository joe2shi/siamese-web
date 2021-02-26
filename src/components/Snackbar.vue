<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    elevation="1"
    text
    app
    right
    top>
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn class="text-none font-weight-light" text v-bind="attrs" @click="show = false">
        {{ $t('Common.Close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SHOW_SNACKBAR') {
        this.message = state.message
        this.color = state.color
        this.show = true
      }
    })
  },
  data: () => ({
    show: false,
    color: '',
    message: '',
    timeout: 3000
  })
}
</script>
