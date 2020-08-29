import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cumplimientoOrdenes: []
  },

  getters: {
    mostrarCumplimientoOrdenes(state) {
      return state.cumplimientoOrdenes;
    }
  }, 

  mutations: {
    dataDashboardMutation(state, dataDashboard) {
      state.cumplimientoOrdenes = dataDashboard;
    }
  },
  actions: {
    guardaDataDashboard(context, dataDashboard) {
      context.commit('dataDashboardMutation', dataDashboard);
    }
  }
})
