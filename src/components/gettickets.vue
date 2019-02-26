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

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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

export default {
  name: "gettickets",
  data: function() {
    return {
      movies,
      img: "https://www.iom.int/sites/default/files/gmff/logo_simple.png"
    };
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
