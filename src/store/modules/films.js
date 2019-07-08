import axios from "axios";

const state = {
  films: [],
  genres: [],
  youtubeSearchResults: [],
  currentFilm: []
};

const getters = {
  allFilms: state => state.films,
  allGenres: state => state.genres,
  currentFilm: state => state.currentFilm,
  genreById() {
    return id => state.genres.find(item => item.id == id);
  }
};

const actions = {
  async fetchFilms({ commit }) {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=d4b2ef2c0b83491e9846e0c0f9e0bbe7"
    );
    commit("setFilms", response.data.results);
  },
  async fetchGenres({ commit }) {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d4b2ef2c0b83491e9846e0c0f9e0bbe7"
    );
    commit("setGenres", response.data.genres);
  },
  async filmDetail({ commit }, id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d4b2ef2c0b83491e9846e0c0f9e0bbe7`
    );
    console.log(response.data);
    commit("setCurrentFilm", response.data);
  }
};

const mutations = {
  setFilms: (state, films) => (state.films = films),
  setGenres: (state, genres) => (state.genres = genres),
  setCurrentFilm: (state, film) => (state.currentFilm = film)
};

export default {
  state,
  getters,
  actions,
  mutations
};
