import Vue from 'vue';
import Vuex from 'vuex';
import { postApiLogin } from '@/config/configApi';
// import { conectionApi, postApiLogin } from '@/config/configApi';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cumplimientoOrdenes: [],
    ordenes: [],
    token: '',
    detailOrder: []
  },

  getters: {
    mostrarCumplimientoOrdenes(state) {
      return state.cumplimientoOrdenes;
    },

    mostrarOrdenes(state) {
      return state.ordenes;
    },

    enviarToken(state) {
      return state.token;
    },

    sendDetailOrder(state) {
      return state.detailOrder;
    }
  }, 

  mutations: {
    dataDashboardMutation(state, dataDashboard) {
      state.cumplimientoOrdenes = dataDashboard;
    },

    dataOrdenesMutation(state, dataOrdenes) {
      state.ordenes = dataOrdenes;
    },

    guardaTokenMutation(state, token) {
      state.token = token;
    },

    resetToken(state) {
      state.token = '';
    },

    saveDetailOrderMutation(state, detailOrderResponse) {
      state.detailOrder = detailOrderResponse;
    },
  },

  actions: {
    guardaDataDashboard(context, dataDashboard) {
      context.commit('dataDashboardMutation', dataDashboard);
    },

    guardaDataOrdenes(context, dataOrdenes) {
      context.commit('dataOrdenesMutation', dataOrdenes);
    },

    guardaToken(context, user, password) {
      async function apiToken() {
        const token = await postApiLogin(user, password);
        context.commit('guardaTokenMutation', token.token)
      }
      return apiToken();
    },

    resetToken(context) {
      context.commit('resetToken');      
    },

    saveDetailOrder(context, detailOrderResponse) {
        context.commit('saveDetailOrderMutation', detailOrderResponse);
    }
  }
})
