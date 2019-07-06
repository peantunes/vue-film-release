import Vuex from "vuex";
import Vue from "vue";
import Films from "./modules/films";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    Films
  }
});
