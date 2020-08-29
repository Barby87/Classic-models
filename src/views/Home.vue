<template>
  <div>
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

    <div class="row mb-5 container">
      <div class="col-md-6">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div id="progress1">

              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{traerCumplimientoOrdenes.kpis[0].nombre}}</h5>
                <div class="row">
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes.kpis[0].entregadas}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes entregadas</small></p>
                  </div>
                  <div class="col">
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
            <div class="col-md-4">
              <div id="progress2">

              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{traerCumplimientoOrdenes.kpis[1].nombre}}</h5>
                <div class="row">
                  <div class="col">
                    <h2>{{traerCumplimientoOrdenes.kpis[1].totales}}</h2>
                    <p class="card-text"><small class="text-muted">Ordenes totales</small></p>
                  </div>
                  <div class="col">
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

    <div class="row">
      <div class="col-lg-6">
        <h4 class="font-weight-bold">Últimas Ordenes</h4>
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
        <h4 class="font-weight-bold">Últimas Devoluciones</h4>
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
      console.log('response Dashboard', response)
      this.$store.dispatch('guardaDataDashboard', response);
    }).catch(error => console.error(error));
  },
}
</script>

<style>

</style>
