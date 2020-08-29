<template>
  <div class="container">
    <h3>Home</h3>
    <!-- Jumbotron -->
    <div class="jumbotron">
      <div>
        <img src="" alt="Vitrina">
      </div>
      <hr class="my-4">
      <h4>Bienvenido</h4>
      <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModels.</p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="" class="card-img" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{traerCumplimientoOrdenes[0].nombre}}</h5>
                <div class="row">
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes[0].entregadas}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes entregadas</small></p>
                  </div>
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes[0].pendientes}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes pendientes</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="" class="card-img" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{traerCumplimientoOrdenes[1].nombre}}</h5>
                <div class="row">
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes[1].totales}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes totales</small></p>
                  </div>
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes[1].atrasadas}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes atrasadas</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { conectionApi } from '../config/configApi';
export default {
  name: 'Home',

  components: {
  },

   computed: {
    traerCumplimientoOrdenes() {
      return this.$store.getters.mostrarCumplimientoOrdenes;
    }
  },

  mounted() {
    conectionApi('dashboard').then(response => {
      console.log('response Dashboard', response.kpis)
      this.$store.dispatch('guardaDataDashboard', response.kpis);
    }).catch(error => console.error(error));
  },

  methods: {

  },


}
</script>
