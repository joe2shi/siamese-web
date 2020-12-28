<template>
  <div class="base-snackbar">
    <v-snackbar v-model="snackbar" :timeout="timeout" content-class="snackbar-content" centered :color="color" :elevation="2" app top right>
      <v-alert class="ma-0 text-caption" border="left" :color="color" dense icon="mdi-account">{{text}}</v-alert>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'BaseSnackbars',
  data: () => ({
    timeout: 3000,
    text: null,
    snackbar: true,
    color: null
  })
}
</script>
