<template>
  <div class="container">
      <ul>
        <li>Nombre: {{detailClient.nombre}}</li>
        <li>RUT: {{detailClient.rut_n}}</li>
        <li>Dirección Entrega: {{detailClient.direccion_entrega}}</li>
        <li>Contacto: {{detailClient.contacto}}</li>
        <li>Fono: {{detailClient.fono}}</li>
        <li>Email: {{detailClient.email}}</li>
      </ul>
      
  </div>
</template>

<script>
export default {
  name: 'DataClient',

  computed: {
    detailClient() {
        return this.$store.getters.sendDetailOrder.cliente;
    }
  }

}
</script>

<style>

</style>