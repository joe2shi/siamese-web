<template>
  <v-app id="app" class="grey">
    <router-view v-wechat-title='`${$route.meta.title} | Siamese`'/>
  </v-app>
</template>
