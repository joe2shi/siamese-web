<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    class="text-caption"
    centered
    :color="color"
    :elevation="2"
    app
    top
    right>
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  data: () => ({
    timeout: 3000,
    message: null,
    snackbar: false,
    color: null
  })
}
</script>
