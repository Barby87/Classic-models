<template>
    <div class="container">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th>Cod. Producto</th>
              <th>Descripción</th>
              <th>Precio Unit.</th>
              <th>Cant. Pedido</th>
              <th>Cant. Pickeado</th>
              <th>Cumplimiento</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in detailOrder.productos" :key="index">
            <tr>
              <td>{{item.cod_prod}}</td>
              <td>{{item.descripcion}}</td>
              <td>{{item.precio_unit}}</td>
              <td>{{item.cant_pedido}}</td>
              <td>{{item.cant_pickeado}}</td>
              <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" :style='`width: ${detailOrder.orden.avance_preparacion*100}%`' :aria-valuenow='`${detailOrder.orden.avance_preparacion*100}`' aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {{detailOrder.orden.avance_preparacion*100}}
              </td>
              <td>{{detailOrder.orden.estado}}</td>
              <td>
                <button class="btn btn-primary btn-sm">Ver Detalle</button>
              </td>
            </tr>
          </tbody>
        </table>        
    </div>
</template>

<script>
export default {
    name: 'Products',

    computed: {
        detailOrder() {
            return this.$store.getters.sendDetailOrder;
        }
    }
}
</script>

<style>

</style>