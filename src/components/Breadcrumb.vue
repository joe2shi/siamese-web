<template>
  <v-card flat>
    <v-breadcrumbs class="text-caption py-2" :items="items"/>
<!--    <v-img max-height="321" src="http://file.joe2shi.com/image/M00/00/00/wKgBfGAjtoGATRY-AAF3z5W_Bng904.jpg"/>-->
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

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
    },
    'language' () {
      this.getItems(this.$route.matched)
    }
  },
  methods: {
    getItems: function (breadcrumbs) {
      this.items = []
      for (let i = 0; i < breadcrumbs.length; i++) {
        if (i !== 0) {
          this.items.push(
            {
              text: this.$t(`Menu.${breadcrumbs[i].meta.title}`),
              disabled: i === breadcrumbs.length - 1,
              href: breadcrumbs[i].path
            }
          )
        }
      }
      document.title = `${this.$t('Base.ApplicationName')} / ${this.items[this.items.length - 1].text}`
    }
  },
  computed: {
    ...mapState(['language'])
  }
}
</script>
