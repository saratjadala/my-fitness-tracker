<template>
<form class="container" @submit="signup">
  {{error}}
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="signin with google or facebook" placeholder="sign in with google or facebook">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
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
    <input class="input" type="phonenumber" placeholder="mobilenumber">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    
    <button class="button is-dark">
      signup
    </button>
  </p>
</div>
</form>
</template>

<script>

    export default {
        name: 'signup',
        
    }
</script>

<style >
  
    
</style>