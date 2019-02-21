<template>
  <div>
    <p>{{moviesId}}</p>
    <div class="container is-centered is-fluid">
      <div class="columns notification">
        <div class="column">
          <div class="videoWrapper">
            <iframe
              width="560"
              height="349"
              :src="movies[moviesId].video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-3">{{movies[moviesId].name.th+" "}} ({{movies[moviesId].name.en}})</h1>
          <div class="has-text-left">
            <p>
              <strong>ผู้กำกับ:</strong>
              <span v-for="director in movies[moviesId].director">{{director}}</span>
            </p>
            <p>
              <strong>นักแสดง:</strong>
              <span v-for="actor in movies[moviesId].actors">{{actor}}</span>
            </p>
            <p>
              <strong>หมวดหมู่:</strong>
              <span
                v-for="category in movies[moviesId].categories"
              >{{categories[category].name+" "}}</span>
            </p>
          </div>
        </div>
      </div>
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
          <moviecard  :title="movie.name.th" :types="movies.categories" :path="movie.poster"></moviecard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";
import categories from "../assets/data/categories.js";
import moviecard from "./movie/moviecard.vue";

export default {
  name: "moviedetail",
  components: {
    moviecard
  },
  data: function() {
    return {
      movies: movies,
      moviesId: this.$route.params.id,
      categories,
    };
  },
  methods: {
    updateMovieId() {
      this.moviesId = this.$route.params.id;
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
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
