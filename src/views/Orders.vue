<template>
  <div class="mx-4">
    <h5 class="font-weight-bold mb-5">Monitor de Órdenes</h5>
    <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th>N° Orden</th>
              <th>Cliente</th>
              <th>Monto Orden</th>
              <th>Cant. Productos</th>
              <th>Fecha Entrega</th>
              <th>Avance Preparación</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in traerOrdenes['ordenes:']" :key="index">
            <tr>
              <th>{{item.num_orden}}</th>
              <td>{{item.cliente}}</td>
              <td>{{item.monto}}</td>
              <td>{{item.cant_productos}}</td>
              <td>{{item.fecha_entrega}}</td>
              <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" :style='`width: ${item.avance_preparacion*100}%`' :aria-valuenow='`${item.avance_preparacion*100}`' aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {{item.avance_preparacion*100}}
              </td>
              <td>{{item.estado}}</td>
              <td>
                <button class="btn btn-primary btn-sm">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
import { conectionApi } from '@/config/configApi';
export default {
  name: 'Orders',

  data() {
    return {
      
    }
  },

  components: {
  },

  computed: {
    traerOrdenes() {
      return this.$store.getters.mostrarOrdenes;
    }
  },

  mounted() {
    conectionApi('secure/ordenes').then(response => {
      console.log('response Ordenes', response)
      this.$store.dispatch('guardaDataOrdenes', response);
    }).catch(error => console.error(error));
  },
}
</script>
