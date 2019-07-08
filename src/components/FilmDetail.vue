<template>
  <div>
    <div
      class="background"
      :style="{backgroundImage: 'url(' + base_url+currentFilm.backdrop_path + ')'}"
    >a</div>
    <div>
      <h3>{{currentFilm.title}}</h3>
      <img :src="base_url+currentFilm.poster_path" />
      <p>{{currentFilm.overview}}</p>
    </div>
  </div>
</template>

<script>
import { image_settings } from "../variables";
import FilmDisplayInfo from "./FilmDisplayInfo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilmDetail",
  components: {
    FilmDisplayInfo
  },
  // props: ["film"],
  computed: {
    // base_url() {
    //   return image_settings.base_url;
    // }
  },
  data() {
    return {
      base_url: image_settings.base_url
    };
  },
  methods: {
    ...mapActions(["filmDetail"]),
    detailFilm(id) {
      this.filmDetail(id);
    },
    select(item) {
      this.selectedFilm = item;
    }
  },
  computed: {
    ...mapGetters(["currentFilm"])
  },
  created() {
    this.detailFilm(this.$route.params.id);
  }
};
</script>

<style scoped>
div.background {
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  min-width: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  opacity: 0.4;
  position: absolute;

  z-index: -1;
}
.main {
}
img {
  /* margin-top: 20%; */
  margin-right: auto;
  margin-left: auto;
  display: block;
  max-width: 33%;
  min-width: 120px;
  border: 2px solid #000;
}
h3 {
  text-align: center;
  /* color: #fff; */
}
p {
  margin: 20px 20% 20px 20%;
  text-align: center;
}
</style>
