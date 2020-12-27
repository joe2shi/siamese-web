<template>
  <v-navigation-drawer color="accent" v-model="drawer" persistent :mini-variant="miniVariant" app>
    <v-list>
      <v-list-item v-show="!miniVariant">
        <v-list-item-avatar class="mx-auto" width="80" height="80">
          <v-img class="grey" src="http://file.joe2shi.com/image/M00/00/00/wKgBfF_YLFqACSOzAAF0bzqHPeM860.jpg"/>
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
            <v-img src="http://file.joe2shi.com/image/M00/00/00/wKgBfF_YLFqACSOzAAF0bzqHPeM860.jpg"/>
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
    },
    drawer: {
      type: Boolean,
      default: true
    },
    miniVariant: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      { text: 'Dashboard', icon: 'mdi-palette', path: '/dashboard' },
      { text: 'Github', icon: 'mdi-github' },
      { text: 'Friends', icon: 'mdi-account' },
      { text: 'Album', icon: 'mdi-image', path: '/album' },
      { text: 'Diary', icon: 'mdi-notebook' },
      { text: 'About', icon: 'mdi-information' }
    ]
  })
}
</script>
