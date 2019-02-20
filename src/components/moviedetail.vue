<template>
  <div>
    <div class="container is-centered">
      <div class="columns notification">
        <div class="column">
          <div class="videoWrapper">
            <iframe width="560" height="349" :src="movie.video" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-3">{{movie.name.th+" "}} ({{movie.name.en}})</h1>
          <div class="has-text-left">
            <p>
              <strong>ผู้กำกับ:</strong>
              <span v-for="director in movie.director">{{director}}</span>
            </p>
            <p>
              <strong>นักแสดง:</strong>
              <span v-for="actor in movie.actors">{{actor}}</span>
            </p>
            <p>
              <strong>หมวดหมู่:</strong>
              <span v-for="category in movie.categories">{{category+", "}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import movies from "../assets/data/movies.js";

export default {
  name: "moviedetail",
  data: function() {
    return {
      movies: movies,
      movie: movies[0]
    };
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
