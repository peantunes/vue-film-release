<template>
  <div class="container">
    <h3>Home</h3>
    <div class="films">
      <FilmPoster
        v-for="film in allFilms"
        :key="film.id"
        :film="film"
        v-on:film-selected="select(film)"
      />
    </div>
    <FilmDisplayInfo :selected-film="selectedFilm" />
  </div>
</template>

<script>
import FilmPoster from "./FilmPoster";
import FilmDisplayInfo from "./FilmDisplayInfo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Films",
  components: {
    FilmPoster,
    FilmDisplayInfo
  },
  data() {
    return {
      selectedFilm: null
    };
  },
  methods: {
    ...mapActions(["fetchFilms"]),
    select(item) {
      this.selectedFilm = item;
    }
  },
  computed: {
    ...mapGetters(["allFilms"])
  },
  created() {
    this.fetchFilms();
  }
};
</script>

<style scoped>
.container {
}
.films {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 40px;
  background-color: #aaa;
}
h3 {
  background-color: #444;
  color: #fff;
  padding: 20px;
  margin: 0px;
}
</style>
