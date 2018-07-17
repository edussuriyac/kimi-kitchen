<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex x10 offset-xs1>
      <div class = "whit elevation-2">
        <v-toolbar flat dense class = "green accent-2">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <div class ="pl-4 pr-4 pt-2 pb-2">
            <h1>Login</h1>
            <br>
            <v-text-field
              label="Email"
              v-model = "email"
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model = "password"
            ></v-text-field>
            <v-btn
              class="green accent-2"
              @click = "login"
              >Login
            </v-btn>
            <div class = "error" v-html = "error"/>
          </div>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Header from '@/components/Header.vue'
export default {
  name: 'login',
  components: {
    Header
  },
  data () {
    return {
      email: 'email',
      password: 'password',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$router.push({ name: 'login' })
        console.log('logind', this.email, this.password)
      } catch (error) {
        this.error = error.response.data.error
      }
    }

  }
}
</script>

<style scoped>
.error {
  color: red
}
</style>
