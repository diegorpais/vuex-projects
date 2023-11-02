import Vue from 'vue'
import Vuex from 'vuex'

import counter from '@/views/counter/resources/store';

const modules = {
  counter
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  /*  state: {
   },
   getters: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
   } */
})
