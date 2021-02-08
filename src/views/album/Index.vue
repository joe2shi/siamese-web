<template>
  <v-card flat class="dashboard" color="accent">
    <v-row>
      <v-col v-for="(image, index) in images" :key="index" cols="4">
        <v-card>
          <v-img :src="image.address" aspect-ratio="1"/>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { getListAPI } from '../../api/index'

export default {
  name: 'Album',
  data: () => ({
    images: []
  }),
  created () {
    this.getAllImage()
  },
  methods: {
    getAllImage () {
      getListAPI('/api/siamese-file-interface/image/items')
        .then(response => {
          if (response) {
            this.images = response.data.data
          }
        })
    }
  }
}
</script>
