<template>
  <v-card flat class="dashboard mt-2" height="1000" color="accent">
    <v-row>
      <v-col cols="8">
        <v-card flat>
          <v-card-title>
            {{$t('Base.Author')}}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Dashboard',
  created () {
    this.$snackbar.success('Hello, Joe', 'success')
  }
}
</script>
