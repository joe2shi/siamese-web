<template>
  <v-menu offset-y transition="slide-y-transition" fixed>
    <template v-slot:activator="{on, attrs}">
      <v-btn depressed v-bind="attrs" v-on="on" class="text-caption text-none hidden-xs-only" text>
        <v-icon small left>mdi-translate</v-icon>
        {{ language === 'zh' ? '简体中文' : 'English' }}
      </v-btn>
      <v-btn depressed v-bind="attrs" v-on="on" class="text-caption text-none hidden-sm-and-up" text>
        <v-icon small>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list dense nav>
      <v-list-item v-for="(language, index) in languages" :key="index" @click="switchLanguage(language)">
        <v-list-item-action-text>
          {{ language === 'zh' ? '简体中文' : 'English' }}
        </v-list-item-action-text>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    languages: ['zh', 'en']
  }),
  computed: {
    ...mapState(['language'])
  },
  methods: {
    switchLanguage (language) {
      this.$i18n.locale = language
      this.$store.dispatch('switchLanguage', language)
    }
  }
}
</script>
