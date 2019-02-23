<template>
  <div>
    <div class="container is-centered is-fluid">
      <div class="cover">
        <h1 class="title is-3 has-text-left">รายการสั่งซื้อทั้งหมด</h1>
        <div class="notification">
          <div class="content">
            <div class="columns">
              <div class="column is-4 ">
                <div class="image is-square">
                  <img  v-bind:src="movies[0].poster" alt="">
                </div>
              </div>
              <div class="column">
            <div class="block" style="padding:0 10%;">
              <article class="message is-warning">
                <div class="message-header">
                  <h3>{{movies[0].name.th+" ("+movies[0].name.en+")"}}</h3>
                </div>
                <div class="message-body">
                  <div class="columns">
                    <div class="column">
                      <p class="has-text-left"><i>{{date}}</i><br><b>เวลา </b>{{time}}<br><b>ประเภทที่นั่ง</b> Premium Chair 4DX<br>
                      <b>No.</b> S17, S16</p>

                    </div>
                  </div>
                  <div>
                   <div class="columns" style="border-radius: 2%">
                    <div class="column">
                      <h4 class="has-text-left">ราคารวมสุทธิ</h4>
                    </div>
                    <div class="column">
                      <h4 class="has-text-right">{{cost+" THB"}}</h4>
                    </div>
                   </div>
                  </div>
                </div>
              </article>
              <div class="block">
                <a href class="button is-success">ตกลง</a>
                <a href class="button is-danger">ยกเลิก</a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
export default {
  name: "payment",
  data: function() {
    return {
      cost: 120,
      movies: movies,
      date:"27 กุมภาพันธ์ 2562",
      time:"11.00",
    };
  },
  methods: {}
};
</script>

<style scoped>
.container {
  margin-top: 10%;
}
.content {
  background: white;
  padding: 2% 8%;
  border-radius: 1.5%;

}
.notification{
  border-radius: 1.5%;
}
</style>

