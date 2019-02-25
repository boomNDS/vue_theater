<template>
  <div>
    <div class="container is-centered is-fluid" style="padding:2% 25%;">
      <div class="cover notification">
        <div class="box">
          <form action>
            <h1 class="title is-3">สมัครสมาชิก</h1>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="username" required>
              </div>
            <div class="field">
              <p class="control">
                <input class="input" type="email" placeholder="Email" required>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="password" placeholder="Password" required>
              </p>
            </div>
            </div>
            <div class="field">
              <p class="control has-text-centered">
                <button class="button is-success"><router-link to="/signin">ยืนยัน</router-link></button>
                <button class="button is-danger"><router-link to="/">ยกเลิก</router-link></button>
                    <!-- <router-link  class="navbar-item" to="/">About</router-link> -->
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "signup"
};
</script>
<style scoped>
.cover {
  padding: 8% 10%;
  border-radius: 2%;
}
.field {
  margin: 7%;
}
</style>
