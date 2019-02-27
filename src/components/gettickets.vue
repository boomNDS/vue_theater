<template>
  <div>
    <div class="container is-centered is-fluid">
      <div class="cover">
        <div class="card" id ="divName">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="img" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Passion Theater</p>
                <p class="subtitle is-6">{{movies[0].name.th}}</p>
              </div>
            </div>

            <div class="has-text-left">
              <p><b>Date:</b> 27 กพ 2562</p>
              <p><b>Theater</b> 4</p>
              <h4><b>A1, A2</b></h4>
              <p><b>Price</b> 120 THB</p>
              <br>
              <time datetime="2016-1-1">9.30 AM - 9.45 AM<br> 27 กพ 2562</time>
            </div>
          </div>
          <button class="button is-success">Email</button>
          <button  @click = "printDiv('divName')" class="button is-warning">print</button>
        </div>
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
      movies,
      img: "https://www.iom.int/sites/default/files/gmff/logo_simple.png"
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
.cover {
  padding: 5% 40%;
}
</style>
