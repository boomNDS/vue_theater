<template>
  <div>
      <div class="container is-fluid">
      <moviedetailcard :movies="movies" :moviesId="moviesId" :categories="categories"></moviedetailcard>
      <div class="box">
        <div id="ck-button" v-for="day in movies[moviesId].days" :key="day">
            <label>
                <input type="radio" :value="day.dayID" v-model="date_select" name="day"><span>{{day.date}}</span>
            </label>
        </div>
      </div>
      <div>
        <theater v-for="location in movies[moviesId].days[date_select].locations" :location="location" :movieID="moviesId" :key="location"></theater>          
      </div>
        <div class="block">
            <button  class="button is-success">ตกลง</button>
            <button  class="button is-danger">ยกเลิก</button>
        </div>
      </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import categories from "../assets/data/categories.js";
    import theaters  from '../assets/data/theaters.js'
    import moviedetailcard from "./movie/moviedetailcard.vue";
    import theater from "./movie/theater.vue";
export default {
    name: 'selectingmovie',
    components: {
        moviedetailcard,
        theater
    },
  data: function() {
    return {
      movies: movies,
      moviesId: this.$route.params.id-1,
      categories,
      theaters,
      date_select: 0
    };
  },
  methods: {
    updateMovieId() {
      this.moviesId = this.$route.params.id-1;
    }
  },
  watch: {
    $route: "updateMovieId"
  },
}
</script>
<style scoped>
.box{
    display: inline-block;
}
.block{
    margin-bottom: 30px;
    margin-top: 20px;
}
#ck-button {
    margin:4px;
    background-color:#EFEFEF;
    border-radius:4px;
    border:1px solid #D0D0D0;
    overflow:auto;
    float:left;
}

#ck-button label {
    float:left;
    width:10.0em;
}

#ck-button label span {
    text-align:center;
    padding:3px 0px;
    display:block;
}

#ck-button label input {
    position:absolute;
    top:-20px;
}

#ck-button input:checked + span {
    background-color:#911;
    color:#fff;
}
input {
    visibility:hidden;
}
</style>
