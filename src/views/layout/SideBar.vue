<template>
  <v-navigation-drawer color="accent" v-model="drawer" :mini-variant="miniVariant" floating hide-overlay app>
    <v-list>
      <v-list-item v-show="!miniVariant">
        <v-list-item-avatar class="mx-auto" width="80" height="80">
          <v-img class="grey" :src="avatar"/>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item v-show="!miniVariant">
        <v-list-item-content>
          <v-list-item-title class="text-center text-body-1 font-weight-regular" v-text="username"/>
          <v-list-item-title class="text-center text-caption grey--text" v-text="motto"/>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="px-2" v-show="miniVariant">
        <v-list-item-avatar>
          <v-list-item-avatar class="mx-auto">
            <v-img :src="avatar"/>
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
              <span v-text="$t(item.text)"/>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-regular" v-text="$t(item.text)"/>
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
    drawer: null,
    avatar: 'http://file.joe2shi.com/image/M00/00/00/wKgBfGAguGOAdf9wAAF0bzqHPeM888.jpg',
    prefixMenu: 'Menu',
    items: [
      { text: 'Menu.Dashboard', icon: 'mdi-palette', path: '/dashboard' },
      { text: 'Menu.Repository', icon: 'mdi-github' },
      { text: 'Menu.Friends', icon: 'mdi-account' },
      { text: 'Menu.Album', icon: 'mdi-image', path: '/album' },
      { text: 'Menu.Diary', icon: 'mdi-notebook' },
      { text: 'Menu.About', icon: 'mdi-information' }
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
