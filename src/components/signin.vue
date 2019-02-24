<template>
  <div>
    <div class="container is-centered is-fluid" style="padding:2% 25%;">
      <div class="cover notification">
        <div class="box">
          <form action>
            <h1 class="title is-3">ลงชื่อเข้าใช้</h1>
            <div class="field">
              <p class="control">
                <input class="input" type="email" placeholder="อีเมล" required>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="password" placeholder="รหัสผ่าน" required>
              </p>
            </div>
            <div class="field">
              <p class="control has-text-centered">
                <button class="button is-success"><router-link to="/" class="btn">เข้าสู่ระบบ</router-link></button>
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
  name: "signin"
};
</script>
<style scoped>
.cover {
  padding: 8% 10%;
  border-radius: 2%;
}
.field {
  margin: 8%;
}
</style>
