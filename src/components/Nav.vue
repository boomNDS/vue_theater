<template>
    <div>
        <section class="hero is-bold">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Logo">
                </a>
                <!--
            Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
            -->
                <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <!--
            Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
            -->
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="navbar-end">
                  <router-link  class="navbar-item" to="/">About</router-link>
                  <router-link  class="navbar-item" to="/">About</router-link>
                  <router-link  class="navbar-item" to="/">About</router-link>
                </div>
            </div>
            </nav>
        </div>
        </section>
    </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
        showNav: false
    }
  }
}
</script>
<style scoped>
</style>
