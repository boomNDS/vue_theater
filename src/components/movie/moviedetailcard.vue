<template>
    <div class="moviedetail">
        <!-- <p>asfa</p> -->
        <!-- <p v-for="i in movies[moviesId].director" :key="i">{{i}}</p> -->
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
                        <span v-for="name in movies[moviesId].director" :key="name">{{name}}</span>
                    </p>
                    <p>
                        <strong>นักแสดง:</strong>
                        <span v-for="name in movies[moviesId].actors" :key="name">{{name}}</span>
                    </p>
                    <p>
                        <strong>หมวดหมู่:</strong>
                        <span class="tag is-dark" v-for="category in movies[moviesId].categories" :key="category">{{categories[category].name+" "}}</span>
                    </p>
                </div>
            </div>
        </div>
<!-- <div class="column">
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
              <span v-for="category in movies[moviesId].categories">{{categories[category].name+" "}}</span>
            </p>
          </div>
        </div> -->
    </div>
</template>
<script>
export default {
    naem: 'moviedetailcard',
    props: ['movies','moviesId', 'categories']
}
</script>
<style scoped>
.moviedetail{
    margin-bottom: 1.2em;
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
.tag{
    margin: 1%;
}
</style>
