<template>
  <div class="container">
      <ul>
        <li>N° Orden: {{detailOrder.num_orden}}</li>
        <li>Monto Orden: {{detailOrder.monto}}</li>
        <li>Cant. Productos: {{detailOrder.cant_productos}}</li>
        <li>Fecha Entrega: {{detailOrder.fecha_entrega}}</li>
        <li>Vendedor: {{detailOrder.vendedor}}</li>
        <li>Estado: {{detailOrder.estado}}</li>
        <li>Avance Preparación: 
          <div class="progress">
            <div class="progress-bar" role="progressbar" :style='`width: ${detailOrder.avance_preparacion*100}%`' :aria-valuenow='`${detailOrder.avance_preparacion*100}`' aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'General',

  computed: {
    detailOrder() {
        return this.$store.getters.sendDetailOrder.orden;
    }
  }
}
</script>

<style>

</style>