import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cumplimientoOrdenes: [],
    ordenes: []
  },

  getters: {
    mostrarCumplimientoOrdenes(state) {
      return state.cumplimientoOrdenes;
    },

    mostrarOrdenes(state) {
      return state.ordenes;
    }
  }, 

  mutations: {
    dataDashboardMutation(state, dataDashboard) {
      state.cumplimientoOrdenes = dataDashboard;
    },

    dataOrdenesMutation(state, dataOrdenes) {
      state.ordenes = dataOrdenes;
    },
  },
  actions: {
    guardaDataDashboard(context, dataDashboard) {
      context.commit('dataDashboardMutation', dataDashboard);
    },

    guardaDataOrdenes(context, dataOrdenes) {
      context.commit('dataOrdenesMutation', dataOrdenes);
    },
  }
})
