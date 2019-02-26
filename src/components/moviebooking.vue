<template>
  <div>
    <div class="container is-fluid">
      <!-- <p>{{movies[movieID]}}</p> -->
      <div class="columns is-multiline is-6 is-centered">
        <div class="column is-3-desktop is-12-mobile">
          <moviecard
            :id="movieID"
            :title="movies[movieID].name.th"
            :types="movies[movieID].categories"
            :path="movies[movieID].poster"
            :showbtn="false"
          ></moviecard>
        </div>
        <div class="column is-9-desktop is-12-moblie">
          <h3 class="is-size-2">{{theaters[locationID].name+" "+roomname}}</h3>
          <h1
            class="is-size-4"
          >{{" วันที่ "+movies[movieID].days[date_select].date+" เวลา"+time_sel}}</h1>
          <div class="selecting_seats columns is-centered">
            <div v-for="i in 12" :key="i">
              <div class="column is-1" v-for="seat in seats" :key="seat">
                <seat :name="seat+i"></seat>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6-desktop is-12-moblie box">
          <h3 class="is-size-3">Tickets</h3>
          <div class="columns is-multiline">
            <div class="column is-6">
              <p>Child</p>
            </div>
            <div class="column is-6">
              <button class="num_btn" @click= "validateChildNumSeatMinus">-</button>
              <input type="number" :max= "maxcount" min="0" v-model= "childcount">
              <button class="num_btn" @click = "validateChildNumSeatPlus">+</button>
            </div>
            <div class="column is-6">
              <p>Adult</p>
            </div>
            <div class="column is-6">
              <!-- <button class="num_btn" @click="adultcount <= 0 ? adultcount = 0: adultcount--">-</button> -->
              <button class="num_btn" @click = "validateAdultNumSeatMinus">-</button>
              <input type="number" :max="maxcount" min="0" v-model="adultcount">
              <button class="num_btn" @click = "validateAdultNumSeatPlus">+</button>
            </div>
            <div class="column is-6">
              <p>Older Person</p>
            </div>
            <div class="column is-6">
              <button class="num_btn" @click = "validateOtherNumSeatMinus">-</button>
              <input type="number" :max="maxcount" min="0" v-model="oldercount">
              <button class="num_btn" @click = "validateOtherNumSeatPlus">+</button>
            </div>
          </div>
        </div>
        <div class="column is-6-desktop is-12-moblie box">
          <h3 class="is-size-3">Summary</h3>
          <div class="columns is-multiline">
            <div class="column is-6">
              <p>Child</p>
            </div>
            <div class="column is-6">
              <p>{{"80 X "+childcount}}</p>
            </div>
            <div class="column is-6">
              <p>Adult</p>
            </div>
            <div class="column is-6">
              <p>{{"120 X "+adultcount}}</p>
            </div>
            <div class="column is-6">
              <p>Older Person</p>
            </div>
            <div class="column is-6">
              <p>{{"80 X "+oldercount}}</p>
            </div>
            <div class="column is-6">
              <p>Total</p>
            </div>
            <div class="column is-6">
              <p>{{total}}</p>
            </div>
          </div>
        </div>
        <div class="column is-12 columns">
          <div class="column">
            <button class="button is-success">
              <router-link :to="'/payment'" class="btn">ยืนยัน</router-link>
            </button>
            <button class="button is-danger">
              <router-link :to="'/'" class="btn">ยกเลิก</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import theaters from "../assets/data/theaters.js";
import categories from "../assets/data/categories.js";
import seats from "../assets/data/seats.js";
import moviecard from "./movie/moviecard.vue";
import seat from "./movie/seat.vue";
export default {
  name: "moviebooking",
  components: {
    moviecard,
    seat
  },
  data() {
    return {
      movies: movies,
      theaters: theaters,
      seats: seats,
      childcount: 0,
      oldercount: 0,
      maxcount: JSON.parse(localStorage.getItem("seats_sel")).length,
      movieID: localStorage.getItem("moviesId"),
      locationID: localStorage.getItem("locationID"),
      roomname: localStorage.getItem("roomname"),
      date_select: localStorage.getItem("date_select"),
      time_sel: localStorage.getItem("time_sel")
    };
  },
  methods: {
    validateChildNumSeatPlus() {
      if (this.oldercount > 0) {
        this.oldercount--
        this.childcount++
      } else if (this.adultcount > 0) {
        this.adultcount--
        this.childcount++
      } 
    },
    validateChildNumSeatMinus() {
      if (this.childcount > 0) {
        this.childcount--
      }
    },
    validateAdultNumSeatPlus(){
     if(this.oldercount > 0){
         this.oldercount--
         this.adultcount++
     }else if(this.childcount> 0){
         this.childcount--
         this.adultcount++
     }
    },
    validateAdultNumSeatMinus(){
        if(this.adultcount >0 ){
            this.adultcount -=1
        }
    },
    validateOtherNumSeatPlus(){
        if(this.childcount > 0){
            this.childcount--
            this.oldercount++
        }else if(this.adultcount > 0){
            this.adultcount--
            this.oldercount++
        }
    },
    validateOtherNumSeatMinus(){
        if(this.oldercount > 0){
            this.oldercount--
        }
    }
  },
  mounted() {
    localStorage.setItem("seats_sel", JSON.stringify(["AC", "BC", "CC", "DC"]));
  },
  computed: {
    total() {
      let num =
        this.childcount * 80 + this.adultcount * 120 + this.oldercount * 80;
      localStorage.setItem("total", num);
      return num;
    },
    adultcount() {
      return this.maxcount - this.childcount - this.oldercount;
    }
  },
  watch: {
    total() {
      localStorage.setItem("total", this.total);
    }
  }
};
</script>
<style scoped>
.selecting_seats {
  margin: 20px;
  background: #e5e5e5;
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
.box {
  background: #e5e5e5;
  margin: 20px;
  width: 450px;
  height: 300px;
  border-radius: 15px;
}
.btn {
  color: #fff;
}
</style>
