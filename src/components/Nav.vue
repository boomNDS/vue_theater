<template>
    <div class="all">
        <section class="hero is-bold">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar is-fixed-top">
            <div class="navbar-brand">
               <router-link  class="navbar-item" to="/">
                <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Logo"> -->
                    <font-awesome-icon icon="film" class="film"/>
                    <p> Passion Theater</p>
                </router-link>
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
                  <router-link  class="navbar-item" to="/payment">payment</router-link>
                  <router-link  class="navbar-item" to="/moviedetail/1">moviedetail</router-link>
                  <router-link  class="navbar-item" to="/selectingmovie/1">selectingmovie</router-link>
                  <router-link  class="navbar-item" to="/moviebooking">moviebooking</router-link>
                  <router-link  class="navbar-item" to="/gettickets">gettickets</router-link>
                  <router-link  class="navbar-item" to="/signin"><button class="button  is-success  is-outlined">Sign In</button></router-link>
                  <router-link  class="navbar-item" to="/signup"><button class="button  is-info is-outlined">Sign Up</button></router-link>
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
.film{
    font-size: 200%;
    margin-right: 10px;
}
p{
    font-size: 1.2em;
}
.navbar {
    background-color: white;
    min-height: 3.25rem;
    /* position: relative; */
    /* z-index: auto; */
}
.all{
    margin-bottom: 3.6em;
}
</style>
