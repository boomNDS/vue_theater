<template>
    <div>
        <div class="container is-fluid">
            <!-- <p>{{movies[movieID]}}</p> -->
        <div class="columns is-multiline is-6 is-centered">
            <div class="column is-3-desktop is-12-mobile">
            <moviecard  :id="movieID" :title="movies[movieID].name.th" :types="movies[movieID].categories" :path="movies[movieID].poster" :showbtn="false"></moviecard>
            </div>
            <div class="column  is-9-desktop is-12-moblie">
                <h3 class="is-size-2">{{theaters[locationID].name+" "+roomname}}</h3>
                <h1 class="is-size-4">{{" วันที่ "+movies[movieID].days[date_select].date+" เวลา"+time_sel}}</h1>
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
                <div class="columns">
                    <div class="column is-6">
                        <p>Normal - Adult</p>
                    </div>
                    <div class="column is-6">
                        <button class="num_btn" @click="count <= 0 ? count = 0: count--">-</button>
                        <input type="number" max="10" min="0" v-model="count">
                        <button class="num_btn" @click="count >= maxcount ? count = maxcount: count++">+</button>
                    </div>
                </div>
            </div>
            <div class="column is-6-desktop is-12-moblie box">
                <h3 class="is-size-3">Summary</h3>
                <div class="columns">
                    <div class="column is-6">
                        <p>Normal - Adult</p>
                    </div>
                    <div class="column is-6">
                        <p>{{"X "+count}}</p>
                        <p>{{"Total: "+(count*120)}}</p>
                    </div>
                </div>
            </div>
            <div class="column is-12 columns">
                <div class="column">
                    <button  class="button is-success"><router-link :to="'/payment'" class="btn">ยืนยัน</router-link></button>
                    <button  class="button is-danger"><router-link :to="'/'" class="btn">ยกเลิก</router-link></button>
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
    name: 'moviebooking',
  components: {
    moviecard,
    seat
  },
  data() {
      return{
          movies: movies,
          theaters: theaters,
          seats: seats,
          count: 0,
          maxcount: 10,
          movieID: localStorage.getItem('moviesId'),
          locationID: localStorage.getItem('locationID'),
          roomname: localStorage.getItem('roomname'),
          date_select: localStorage.getItem('date_select'),
          time_sel: localStorage.getItem('time_sel'),
      }
  },
    mounted() {
      localStorage.setItem("seats_sel", JSON.stringify(["AC","BC"]));
  },
    computed: {
    }
}
</script>
<style scoped>
.selecting_seats{
    margin: 20px;
    background: #e5e5e5;
    width: 100%;
    height: 450px;
    border-radius: 15px;
}
.box{
    background: #e5e5e5;
    margin: 20px;
    width: 450px;
    height: 300px;
    border-radius: 15px;
}
.btn{
    color: #fff;
}

</style>
