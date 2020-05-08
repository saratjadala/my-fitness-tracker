<template>
  <form class="container" @submit.prevent="login">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-dark">
            Login
            </button>
        </p>
        </div>
         <figure class="image is 60x20">
          <img src="https://www.hdwallpaper.nu/wp-content/uploads/2015/06/best-motivational-gym-quotes-hd-wallpaper.jpg">
         </figure>
  </form>
</template>

<script>
import { Login } from "../models/Users";
export default {
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            try {
                Login(this.email, this.password);
                this.$router.push('/welcome');
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>

<style>
</style>