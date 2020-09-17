<template>
  <div class="mx-3 mx-md-5">
    <h5>{{$route.name}}</h5>
    <!-- <p>{{$route.path}}</p> -->

    <!-- Jumbotron -->
    <div class="jumbotron p-1">
      <div>
        <img class="img-auto" src='../assets/auto5.jpg' alt="Vitrina">
      </div>
      <hr class="my-4">
      <h4>Bienvenido</h4>
      <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModels.</p>
    </div>

    <!-- Cards -->
    <div class="container">
      <div class="row mb-5 d-flex">
        <div class="col-md-6">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-4 d-flex align-items-center">
                <radial-progress-bar :diameter="130" :completed-steps="parseInt(`${traerCumplimientoOrdenes.kpis[0].entregadas}`)" :total-steps="parseInt(`${traerCumplimientoOrdenes.kpis[0].entregadas}`) + parseInt(`${traerCumplimientoOrdenes.kpis[0].pendientes}`)" start-color="#12a180" stop-color="#12a180" innerStrokeColor="#fff">
                  <h2>{{porcentajeOrdenesCumplidas}}%</h2>
                </radial-progress-bar>
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">{{traerCumplimientoOrdenes.kpis[0].nombre}}</h5>
                  <div class="row">
                    <div class="col-6">
                      <h2>{{traerCumplimientoOrdenes.kpis[0].entregadas}}</h2>
                      <p class="card-text"><small class="text-muted">Ordenes entregadas</small></p>
                    </div>
                    <div class="col-6">
                      <h2>{{traerCumplimientoOrdenes.kpis[0].pendientes}}</h2>
                      <p class="card-text"><small class="text-muted">Ordenes pendientes</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-4 d-flex align-items-center p-3">
                <radial-progress-bar :diameter="130" :completed-steps="parseInt(`${traerCumplimientoOrdenes.kpis[1].atrasadas}`)" :total-steps="parseInt(`${traerCumplimientoOrdenes.kpis[1].totales}`)" start-color="#12a180" stop-color="#12a180" innerStrokeColor="#fff">
                  <h2>{{porcentajeOrdenesAtrasadas}}%</h2>
                </radial-progress-bar>
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">{{traerCumplimientoOrdenes.kpis[1].nombre}}</h5>
                  <div class="row">
                    <div class="col-6">
                      <h2>{{traerCumplimientoOrdenes.kpis[1].totales}}</h2>
                      <p class="card-text"><small class="text-muted">Ordenes totales</small></p>
                    </div>
                    <div class="col-6">
                      <h2>{{traerCumplimientoOrdenes.kpis[1].atrasadas}}</h2>
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
    
    <!-- Tables -->
    <div class="row">
      <div class="col-lg-6">
        <h4 class="font-weight-bold pb-4">Últimas Ordenes</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>N° Orden</th>
              <th>Cliente</th>
              <th>Fecha Entrega</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in traerCumplimientoOrdenes.utimas_ordenes" :key="index">
            <tr>
              <th>{{item.num_orden}}</th>
              <td>{{item.cliente}}</td>
              <td>{{item.fecha_entrega}}</td>
              <td>{{item.estado}}</td>
              <td>
                <button class="btn btn-primary btn-sm">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-lg-6">
        <h4 class="font-weight-bold pb-4">Últimas Devoluciones</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>N° Orden</th>
              <th>Cliente</th>
              <th>Fecha Devolución</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in traerCumplimientoOrdenes.utimas_ordenes" :key="index">
            <tr>
              <th>{{item.num_orden}}</th>
              <td>{{item.cliente}}</td>
              <td>{{item.fecha_entrega}}</td>
              <td>
                <button class="btn btn-primary btn-sm">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';
import { conectionApi } from '@/config/configApi';

export default {
  name: 'Home',

  components: {
    RadialProgressBar
  },

  computed: {
    traerCumplimientoOrdenes() {
      return this.$store.getters.mostrarCumplimientoOrdenes;
    },

    porcentajeOrdenesCumplidas() {
      return parseInt(this.$store.getters.mostrarCumplimientoOrdenes.kpis[0].entregadas) / (parseInt(this.$store.getters.mostrarCumplimientoOrdenes.kpis[0].entregadas) + parseInt(this.$store.getters.mostrarCumplimientoOrdenes.kpis[0].pendientes)) * 100 ;
    },

    porcentajeOrdenesAtrasadas() {
      return (this.$store.getters.mostrarCumplimientoOrdenes.kpis[1].atrasadas / this.$store.getters.mostrarCumplimientoOrdenes.kpis[1].totales) * 100;
    }
  },

  mounted() {
    conectionApi('secure/dashboard').then(response => {
      console.log('response Dashboard', response)
      this.$store.dispatch('guardaDataDashboard', response);
    }).catch(error => console.error(error));
  },
}
</script>

<style>
.img-auto {
  max-width: 100%;
  background-size: cover; 
}
</style>
