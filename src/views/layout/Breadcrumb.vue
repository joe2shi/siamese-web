<template>
  <v-card flat>
    <v-breadcrumbs class="py-2" :items="items"/>
  </v-card>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data: () => ({
    items: []
  }),
  created () {
    this.getItems(this.$route.matched)
  },
  watch: {
    '$route.matched' (newValue) {
      this.getItems(newValue)
    }
  },
  methods: {
    getItems (breadcrumbs) {
      this.items = []
      for (let i = 0; i < breadcrumbs.length; i++) {
        if (i !== 0) {
          this.items.push(
            {
              text: breadcrumbs[i].meta.title,
              disabled: i === breadcrumbs.length - 1,
              href: breadcrumbs[i].path
            }
          )
        }
      }
    }
  }
}
</script>
