<template>
  <v-row class="ma-0">
    <v-col xl="3" lg="4" md="5" sm="8" class="mx-auto">
      <v-card flat class="pa-0 mx-auto mt-6">
        <div class="text-center text-uppercase text-caption text-overline primary--text mb-3">Account</div>
        <div class="text-h4 font-weight-bold mb-12 text-center">Sign In</div>
        <v-form ref="form" lazy-validation>
          <v-container>
            <v-text-field
              prepend-inner-icon="mdi-account-outline"
              class="text-body-2"
              dense
              clearable
              label="Username / Phone Number"
              outlined
              hint="At least 3 characters"
              v-model="signInForm.username"/>
            <v-text-field
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              class="text-body-2"
              clearable
              dense
              label="Password"
              hint="At least 6 characters"
              :type="showPassword ? 'text' : 'password'"
              outlined
              v-model="signInForm.password"
              @click:append="showPassword = !showPassword"/>
            <v-btn elevation="0" large block color="primary" class="text-body-1 text-none mb-5" @click="signIn" :loading="loading">Sign In</v-btn>
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
    showPassword: false,
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
