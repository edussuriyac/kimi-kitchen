<template>
    <div>
        <h1>Register</h1>
        <br>
        <input type="email" name = "email" v-model = "email"/> <br><br>
        <input type="password" name = "password" v-model = "password"/> <br>
        <button @click = "register" >Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'email',
      password: 'password'
    }
  },
  methods: {
    register () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log('registerd', this.email, this.password)
    }
  }
}
</script>
