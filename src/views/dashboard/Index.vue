<template>
  <v-card flat class="dashboard" height="1000" color="accent">
    <v-row>
      <v-col cols="6" class="pt-0">
        <v-card flat>
          <v-card-title class="text-body-1">
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
  }
}
</script>
