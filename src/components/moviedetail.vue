<template>
  <div>
    <div class="container is-centered">
      <div class="columns notification">
        <div class="column">
          <div class="videoWrapper">
            <iframe
              width="560"
              height="349"
              src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="column">
          <h1 class="title is-3">Movie</h1>
          <p
            class="content has-text-left is-small"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cum minima corporis ea aut optio? Sequi reiciendis pariatur facilis id ullam? Beatae facilis placeat ipsum consectetur in corrupti numquam explicabo.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "moviedetail"
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
