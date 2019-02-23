<template>
  <div>
      <div class="container is-centered is-fluid">
      <moviedetailcard :movies="movies" :moviesId="moviesId" :categories="categories"></moviedetailcard>
      <theater v-for="i in 3" :key="i"></theater>
      </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import categories from "../assets/data/categories.js";
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

</style>
