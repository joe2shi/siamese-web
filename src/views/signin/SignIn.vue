<template>
  <v-col cols="12" class="col-md-7 col-lg-4 ma-auto">
    <v-card outlined class="px-12 py-10">
      <v-card-title class="text-h5 font-weight-light mb-2 px-0" v-text="$t(`${applicationName}`)"/>
      <v-card-subtitle class="text-caption grey--text font-weight-light px-0" v-text="$t(`${signInTip}`)"/>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
    applicationName: 'Page.SignIn.ApplicationName',
    signInTip: 'Page.SignIn.SignInTip'
  })
}
</script>
