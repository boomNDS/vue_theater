<template>
  <div>
    <div class="container is-centered is-fluid">
      <h1 class="upcomming">Tickets</h1>
      <div id="printableArea" class="item box">
        <div class="item-right">
          <h2 class="day">{{movies[movieID].days[date_select].date}}</h2>
          <span class="up-border"></span>
          <span class="down-border"></span>
        </div>
        <!-- end item-right -->
        <div class="item-left">
          <p class="event">{{movies[movieID].name.th+" ("+movies[movieID].name.en+")"}}</p>
          <h2 class="title">Passion Theater</h2>

          <div class="sce">
            <div class="icon">
              <i class="fa fa-table"></i>
            </div>
            <p><b>{{movies[movieID].days[date_select].date+"  เวลา "+time_sel}}</b></p>
          </div>
          <div class="fix"></div>
          <div class="loc">
            <div class="icon">
              <i class="fa fa-map-marker"></i>
            </div>
            <p>{{theaters[locationID].name+" "+roomname}}</p>
            <br>
          </div>
          <div class="fix">
            <p>Seats :</p>
            <b>No.</b> <span v-for="seat in seats_list" :key="seat">{{seat+" "}}</span>
          </div>
          <button @click="printDiv('printableArea')"  class="button is-success tickets" value="print a div!">Print</button>
        </div>
        <!-- end item-right -->
      </div>
      <!-- end item -->
    </div> 
            <div class="columns">
                <div class="column is-12">
                    <button  class="button is-success"><router-link :to="'/'" class="btn">ยืนยัน</router-link></button>
                    <button  class="button is-danger"><router-link :to="'/'" class="btn">ยกเลิก</router-link></button>
                </div>
            </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import theaters from "../assets/data/theaters.js";

export default {
  name: "gettickets",
  data: function() {
    return {
      movies: movies,
      theaters: theaters,
      theater: "Passion Theater Cinema",

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
    },
    roomname(){
      return localStorage.getItem('roomname')
    }
  },
  methods: {
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #ddd;
  font-family: "Inknut Antiqua", serif;
  font-family: "Ravi Prakash", cursive;
  font-family: "Lora", serif;
  font-family: "Indie Flower", cursive;
  font-family: "Cabin", sans-serif;
}
div.container {
  max-width: 1350px;
  margin: 0 auto;
  overflow: hidden;
}
.upcomming {
  font-size: 45px;
  text-transform: uppercase;
  padding-left: 12px;
  margin: 18px 8px;
}
.container .item {
  width: 48%;
  float: left;
  padding: 0 20px;
  background: #fff;
  overflow: hidden;
  margin: 10px;
}
.container .item-right,
.container .item-left {
  float: left;
  padding: 20px;
}
.container .item-right {
  padding: 79px 50px;
  margin-right: 20px;
  width: 25%;
  position: relative;
  height: 286px;
  background: #f4c542;
}
.container .item-right .up-border,
.container .item-right .down-border {
  padding: 14px 15px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
}
.container .item-right .up-border {
  top: -8px;
  right: -35px;
}
.container .item-right .down-border {
  bottom: -13px;
  right: -35px;
}
.container .item-right .num {
  font-size: 60px;
  text-align: center;
  color: #111;
}
.container .item-right .day,
.container .item-left .event {
  color: #555;
  font-size: 20px;
  margin-bottom: 9px;
}
.container .item-right .day {
  text-align: center;
  font-size: 25px;
}
.container .item-left {
  width: 71%;
  padding: 34px 0px 19px 46px;
  border-left: 3px dotted #999;
}
.container .item-left .title {
  color: #111;
  font-size: 34px;
  margin-bottom: 12px;
}
.container .item-left .sce {
  margin-top: 5px;
  display: block;
}
.container .item-left .sce .icon,
.container .item-left .sce p,
.container .item-left .loc .icon,
.container .item-left .loc p {
  float: left;
  word-spacing: 5px;
  letter-spacing: 1px;
  color: #888;
  margin-bottom: 10px;
}
.container .item-left .sce .icon,
.container .item-left .loc .icon {
  margin-right: 10px;
  font-size: 20px;
  color: #666;
}
.container .item-left .loc {
  display: block;
}
.fix {
  clear: both;
}
.container .item .tickets,
.booked,
.cancel {
  color: #fff;
  padding: 6px 14px;
  float: right;
  margin-top: 10px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}
.container .item .tickets {
  background: #777;
}
.container .item .booked {
  background: #3d71e9;
}
.container .item .cancel {
  background: #df5454;
}
.linethrough {
  text-decoration: line-through;
}
.btn{
    color: #fff;
}
@media only screen and (max-width: 1150px) {
  .container .item {
    width: 100%;
    margin-right: 20px;
  }
  div.container {
    margin: 0 20px auto;
  }
}
</style>
