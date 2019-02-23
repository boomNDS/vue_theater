<template>
  <div>
    <div class="container is-centered is-fluid">
      <div class="cover">
        <h1 class="title is-3 has-text-left">รายการสั่งซื้อทั้งหมด</h1>
        <div class="notification">
          <div class="content">
            <div class="columns">
              <div class="column is-4">
                <div class="image is-square">
                  <img v-bind:src="movies[0].poster" alt>
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
                          <p class="has-text-left">
                            <i>{{date}}</i>
                            <br>
                            <b>เวลา</b>
                            {{time}}
                            <br>
                            <b>ประเภทที่นั่ง</b> Premium Chair 4DX
                            <br>
                            <b>No.</b> S17, S16
                            <br>
                            <i>{{theater}}</i>
                          </p>
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
                </div>
              </div>
            </div>
            <hr>
            <div style="padding:2% 18%">
              <h1 class="title is-4">ยืนยันการทำรายการ</h1>
              <p class="has-text-left">กรุณากรอกข้อมูลเพื่อใช้ในการรับตั๋ว</p>
              <div class="columns is-centered notification">
                <div class="column">
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
                      <input class="input" type="tel" placeholder="Mobile No.">
                      <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div style="padding:2% 18%">
              <h1 class="title is-4">สำหรับซื้อตั๋ว</h1>
              <p class="has-text-left">เมื่อท่านได้รับรหัส กรุณานำรหัสจองและหมายเลขโทรศัพท์มารับบัตรที่ตู้จำหน่ายบัตรชมภาพยนตร์อัตโนมัติหรือเคาน์เตอร์วีไอพี</p>
              <fieldset>
                <legend class="title is-5">เลือกช่องทางการชำระเงิน</legend>
                <div class="columns">
                  <div class="column is-centered" v-for="payment in paymenttype" :key="payment.id">
                    <div class="image is-3by2">
                      <a href=""><img :src="payment.src" alt=""></a>
                    </div>
                  </div>
                </div>
              </fieldset>
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
      date: "27 กุมภาพันธ์ 2562",
      time: "11.00",
      theater: "Passion Theater cinema KMITL",
      paymenttype:[{
        id:1,
        src:"https://www.newsuptown.com/wp-content/uploads/2018/11/Visa-and-Mastercard-provide-tourist-card-fee-cut-in-EU-antitrust-probe.png",   
      },
      {
        id:2,
        src:"http://www.9tana.com/wp-content/uploads/2018/09/rabbit-line-pay.jpg"
      }]
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
.notification {
  border-radius: 1.5%;
}
</style>

