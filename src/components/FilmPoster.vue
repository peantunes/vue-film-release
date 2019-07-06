<template>
  <div class="film-poster" @click="$emit('film-selected', film)">
    <img :src="base_url+film.poster_path" />
  </div>
</template>

<script>
import { image_settings } from "../variables";
export default {
  name: "FilmPoster",
  props: ["film"],
  computed: {
    base_url() {
      return image_settings.base_url;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 200px;
  margin: auto;
}
.film-poster {
  text-align: center;
  background: #fff;
  border: 1px solid #000;
  margin: 10px;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  transition-property: transform background-color width height;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 0;
  /* transform: scale(1); */
}
.film-poster:hover {
  z-index: 1;
  transition-property: transform background-color width height;
  transition-duration: 0.2s;

  transition-timing-function: cubic-bezier(0.6, -0.4, 0.735, 0.045);
  /* cubic-bezier(0.075, 0.82, 0.165, 1); */

  transform: scale(1.2);
  /* margin-top: 20px; */
}
</style>
