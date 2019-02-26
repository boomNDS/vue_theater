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
                  <img class="movieimg" :src="movies[movieID].poster">
                </div>
              </div>
              <div class="column">
                <div class="block" style="padding:0 10%;">
                  <article class="message is-warning">
                    <div class="message-header">
                      <h3>{{movies[movieID].name.th+" ("+movies[movieID].name.en+")"}}</h3>
                    </div>
                    <div class="message-body">
                      <div class="columns">
                        <div class="column">
                          <p class="has-text-left">
                            <i>{{movies[movieID].days[date_select].date}}</i>
                            <br>
                            <b>เวลา</b>
                            {{time_sel}}
                            <!-- <br>
                            <b>ประเภทที่นั่ง</b> Premium Chair 4DX
                            <br> -->
                            <b>No.</b> <span v-for="seat in seats_list" :key="seat">{{seat+" "}}</span>
                            <br>
                            <i>{{theater+" "+theaters[locationID].name}}</i>
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
              <h1 class="title is-4">สำหรับซื้อตั๋ว</h1>
              <p
                class="has-text-left"
              >เมื่อท่านได้รับรหัส กรุณานำรหัสจองและหมายเลขโทรศัพท์มารับบัตรที่ตู้จำหน่ายบัตรชมภาพยนตร์อัตโนมัติหรือเคาน์เตอร์วีไอพี</p>
              <fieldset>
                <legend class="title is-5">เลือกช่องทางการชำระเงิน</legend>
                <div class="columns">
                  <div class="column is-centered" v-for="payment in paymenttype" :key="payment.id">
                    <div class="image is-3by2" @click="payment_set">
                        <img :src="payment.src">
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="columns">
                <div class="column">
                    <button  class="button is-danger"><router-link :to="'/'" class="btn">ยกเลิก</router-link></button>
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
import theaters from "../assets/data/theaters.js";
export default {
  name: "payment",
  data: function() {
    return {
      movies: movies,
      theaters: theaters,
      theater: "Passion Theater Cinema",
      paymenttype: [
        {
          id: 1,
          src:
            "https://simplyadoorabledotcom.files.wordpress.com/2015/12/cash-payment-icon.png"
        },
        {
          id: 2,
          src:
            "https://www.ceoblog.co/wp-content/uploads/2017/10/PromptPay.jpg"
        },
        {
          id: 3,
          src:
            "https://www.newsuptown.com/wp-content/uploads/2018/11/Visa-and-Mastercard-provide-tourist-card-fee-cut-in-EU-antitrust-probe.png"
        }
      ]
    };
  },
  computed:{
    cost(){
      return localStorage.getItem('total')
    },
    date_select(){
      return localStorage.getItem('date_select')
    },
    movieID(){
      return localStorage.getItem('moviesId')
    },
    time_sel(){
      return localStorage.getItem('time_sel')
    },
    seats_list(){
      return JSON.parse(localStorage.getItem('seats_sel'))
    },
    locationID(){
      return localStorage.getItem('locationID')
    }
  },
  methods: {
    payment_set: function (event) {
      this.$router.push('/gettickets')
    }
  }
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
.movieimg{
  width: 300px;
  height: auto;
  border-radius: 15px;
}
</style>

