<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item" active-class="is-current">Home</router-link> 
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-dark" href="/signup">
            signup
          </a>
          <a class="button is-dark" href="/SignIn">
            SignIn
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
data: ()=>({
    isopen: false
})
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #9B59B6;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>