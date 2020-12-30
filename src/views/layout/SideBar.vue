<template>
  <v-navigation-drawer color="accent" v-model="drawer" :mini-variant="miniVariant" floating hide-overlay app>
    <v-list>
      <v-list-item v-show="!miniVariant">
        <v-list-item-avatar class="mx-auto" width="80" height="80">
          <v-img class="grey" src="http://file.joe2shi.com/image/M00/00/00/wKgBfF_bNtOAIf4yAAIPMCPtLD8624.jpg"/>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item v-show="!miniVariant">
        <v-list-item-content>
          <v-list-item-title class="text-center" v-text="username"/>
          <v-list-item-title class="text-center text-caption grey--text" v-text="motto"/>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="px-2" v-show="miniVariant">
        <v-list-item-avatar>
          <v-list-item-avatar class="mx-auto">
            <v-img src="http://file.joe2shi.com/image/M00/00/00/wKgBfF_bNtOAIf4yAAIPMCPtLD8624.jpg"/>
          </v-list-item-avatar>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-divider/>
    <v-list nav dense>
      <v-list-item-group color="primary" mandatory>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
          <v-list-item-icon>
            <v-tooltip right :disabled="!miniVariant">
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-text="item.icon" class="px-1" v-bind="attrs" v-on="on" small/>
              </template>
              <span class="text-caption" v-text="item.text"/>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-caption font-weight-regular" v-text="item.text"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    username: {
      type: String,
      default: null
    },
    motto: {
      type: String,
      default: null
    }
  },
  data: () => ({
    miniVariant: null,
    drawer: true,
    items: [
      { text: 'Dashboard', icon: 'mdi-palette', path: '/dashboard' },
      { text: 'Repository', icon: 'mdi-github' },
      { text: 'Friends', icon: 'mdi-account' },
      { text: 'Album', icon: 'mdi-image', path: '/album' },
      { text: 'Diary', icon: 'mdi-notebook' },
      { text: 'About', icon: 'mdi-information' }
    ]
  }),
  created () {
    this.miniVariant = this.$store.getters.miniSidebar === 'open'
  },
  watch: {
    miniSidebar (newValue) {
      this.miniVariant = newValue === 'open'
    }
  },
  computed: {
    miniSidebar () {
      return this.$store.getters.miniSidebar
    }
  }
}
</script>
