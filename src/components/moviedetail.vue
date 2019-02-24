<template>
  <div>
    <div class="container is-centered is-fluid">
      <!-- <moviedetailcard></moviedetailcard> -->
      <moviedetailcard :movies="movies" :moviesId="moviesId" :categories="categories"></moviedetailcard>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <font-awesome-icon icon="bookmark" class="bookmark"/>
          </div>
          <div class="level-item">
            <h2 class="title is-2">Recommend</h2>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-6">
        <div class="column is-3-desktop is-12-mobile" v-for="movie in movies" :key="movie.id">
          <moviecard  :id="movie.id" :title="movie.name.th" :types="movie.categories" :path="movie.poster" :showbtn="true"></moviecard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import categories from "../assets/data/categories.js";
import moviecard from "./movie/moviecard.vue";
import moviedetailcard from "./movie/moviedetailcard.vue";

export default {
  name: "moviedetail",
  components: {
    moviecard,
    moviedetailcard
  },
  data: function() {
    return {
      movies: movies,
      moviesId: this.$route.params.id-1,
      categories,
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
  computed:{
  }
};
</script>
<style scoped>
.container {
  margin-top: 3%;
  padding: 5%;
}
</style>
