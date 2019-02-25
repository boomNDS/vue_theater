<template>
  <div>
    <div class="container is-centered is-fluid" style="padding:2% 25%;">
      <div class="cover notification">
        <div class="box">
          <form action>
            <h1 class="title is-3">ลงชื่อเข้าใช้</h1>
            <div class="field">
              <p class="control">
                <input class="input" type="email" placeholder="อีเมล" required v-model="email">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="password" placeholder="รหัสผ่าน" required v-model="password">
              </p>
            </div>
            <div class="field">
              <p class="control has-text-centered">
                <button class="button is-success" v-on:click="submitLogin">เข้าสู่ระบบ</button>
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
  name: "signin",
  data(){
    return{
      email: "",
      password: "",
    }
  },
  methods:{
    login: function(){
      // $router.push("/")
    },
    say: function (message) {
      this.$router.push('/');
    },
  // fix by using arrow function
  submitLogin: function (event) {
    const email = localStorage.getItem('email');
    // const email = sanitizeHtml(this.email);
    // const password = sanitizeHtml(this.password);
    const password = localStorage.getItem('password');
    if(email == this.email && password == this.password) {
        localStorage.setItem("loginState", true)
        this.$router.push('/')
      }else{
        localStorage.setItem("loginState", false)
        alert("email or password wrong")
      }
  }
  }
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
