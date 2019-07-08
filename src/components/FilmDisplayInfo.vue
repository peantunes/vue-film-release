<template>
  <div class="film-detail-info" :v-if="selectedFilm!=null">
    <h3>{{selectedFilm.title}}</h3>
    <div>
      <!-- <span>length</span> -->
      <span>{{selectedFilm.vote_average}}/10</span>
      <span>{{selectedFilm.release_date.split("-")[0]}}</span>
      <!-- <span>country</span> -->
      <span>{{selectedFilm.genre_ids.map((id)=>genreById(id).name).join(', ')}}</span>
    </div>
    <p>{{selectedFilm.overview}}</p>

    <router-link :to="'/film/'+selectedFilm.id">Detail</router-link>|
    <a
      :href="'https://www.youtube.com/results?search_query=trailer+' + selectedFilm.title"
      target="_blank"
    >Trailers</a>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilmDisplayInfo",
  props: ["selectedFilm"],
  methods: {
    ...mapActions(["fetchGenres", "youtubeSearch"])
  },
  computed: {
    ...mapGetters(["genreById"])
  },
  created() {
    this.fetchGenres();
  }
};
</script>

<style scoped>
.film-detail-info {
  background-color: #00a;
  padding: 20px;
  color: #fff;
}
span {
  padding-right: 5px;
  font-size: small;
  font-weight: 100;
  color: #bbb;
  border-right: 1px solid #ccc;
}
span:not(:first-of-type) {
  padding-left: 5px;
}
span:last-of-type {
  border-right: 0px;
}
h3 {
  padding: 0px;
  margin: 0px;
}
a {
  color: #fff;
}
</style>
