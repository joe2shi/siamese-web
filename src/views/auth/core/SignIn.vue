<template>
  <v-row class="ma-0">
    <v-col lg="4" md="6" sm="12" class="mx-auto">
      <v-card flat class="pa-8 mx-auto mt-6">
        <div class="text-center text-uppercase text-caption text-overline primary--text mb-3">Account</div>
        <div class="text-h4 font-weight-bold mb-12 text-center">Sign In Siamese</div>
        <v-form ref="form" lazy-validation>
          <v-container>
            <v-text-field prepend-inner-icon="mdi-account-outline" outlined v-model="signInForm.username" placeholder="Username / Phone Number"/>
            <v-text-field prepend-inner-icon="mdi-lock-outline" type="password" outlined v-model="signInForm.password" placeholder="Password"/>
            <v-btn elevation="0" x-large block color="primary" class="text-h6 text-none mb-5" @click="signIn" :loading="loading">Sign In</v-btn>
            <div class="text-center"><a href="">Forgot your password?</a></div>
            <div class="d-flex my-4">
              <v-divider class="my-4"/>
              <div class="text-overline mx-3">Or Sign In With</div>
              <v-divider class="my-4"/>
            </div>
            <v-row>
              <v-col cols="4" v-for="(item, index) in signInItems" :key="index">
                <v-btn elevation="0" outlined block color="primary">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <div class="text-center text-caption text-uppercase mt-12">By signing in, you agree to the</div>
            <div class="text-center text-caption text-uppercase">
              <a href="">TERMS OF SERVICE</a>
              <div class="mx-3 d-inline-block">&</div>
              <a href="">PRIVACY POLICY</a>
            </div>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { postAPI } from '../../../api'
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data: () => ({
    loading: false,
    signInForm: {
      username: '',
      password: ''
    },
    signInItems: [
      { icon: 'mdi-wechat', path: '' },
      { icon: 'mdi-qqchat ', path: '' },
      { icon: 'mdi-github', path: '' }
    ]
  }),
  methods: {
    ...mapActions(['showSnackbar']),
    signIn: function () {
      const that = this
      postAPI('/siamese-auth/accredit', that.signInForm)
        .then(response => {
          if (response) {
            localStorage.setItem('token', response.data.data)
            that.showSnackbar({ message: response.data.message, color: 'success' })
            setTimeout(function () {
              that.$router.push({ path: '/dashboard' })
            }, 1000)
          }
        })
    }
  }
}
</script>
