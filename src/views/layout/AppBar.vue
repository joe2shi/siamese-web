<template>
  <v-card tile>
    <v-app-bar flat fixed app color="accent">
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title class="text-h6 font-weight-light">Siamese</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="accent" v-model="drawer" persistent :mini-variant="miniVariant" app>
      <v-list>
        <v-list-item>
          <v-list-item-avatar class="mx-auto" width="80" height="80">
            <v-img src="http://file.joe2shi.com/image/M00/00/00/wKgBfF_YLFqACSOzAAF0bzqHPeM860.jpg"/>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center">Siamese</v-list-item-title>
            <v-list-item-title class="text-center font-weight-light text-caption">只要心还跳</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider/>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary" mandatory>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
            <v-list-item-icon>
              <v-icon v-text="item.icon" small/>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-caption font-weight-light" v-text="item.text"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
    miniVariant: false,
    selectedItem: 0,
    items: [
      { text: '首页', icon: 'mdi-palette', path: '/dashboard' },
      { text: '仓库', icon: 'mdi-github' },
      { text: '朋友', icon: 'mdi-account' },
      { text: '相册', icon: 'mdi-image', path: '/album' },
      { text: '日记', icon: 'mdi-notebook' },
      { text: '关于', icon: 'mdi-information' }
    ]
  })
}
</script>
