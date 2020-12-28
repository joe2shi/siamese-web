<template>
  <v-card flat class="dashboard mt-2" height="1000" color="accent">
    <v-row>
      <v-col cols="8">
        <v-card flat>
          <v-card-title>
            {{$t('Base.Author')}}
          </v-card-title>
          <snackbar/>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Snackbar from '../../components/base/snackbar'

export default {
  name: 'Dashboard',
  components: {
    Snackbar
  }
}
</script>
