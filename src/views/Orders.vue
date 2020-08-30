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
              <td>{{item.avance_preparacion}}</td>
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
import { conectionApi } from '../config/configApi';
export default {
  name: 'Orders',

  components: {
  },

  computed: {
    traerOrdenes() {
      return this.$store.getters.mostrarOrdenes;
    }    
  },

  mounted() {
    conectionApi('ordenes').then(response => {
      console.log('response Ordenes', response)
      this.$store.dispatch('guardaDataOrdenes', response);
    }).catch(error => console.error(error));
  },
}
</script>
