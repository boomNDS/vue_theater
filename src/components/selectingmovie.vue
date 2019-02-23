<template>
  <div>
      <div class="container is-fluid">
      <moviedetailcard :movies="movies" :moviesId="moviesId" :categories="categories"></moviedetailcard>
      <theater v-for="location in movies[moviesId].locations" :location="location" :movieID="moviesId" :key="location"></theater>
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
      theaters
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
.block{
    margin-bottom: 30px;
    margin-top: 20px;
}
</style>
