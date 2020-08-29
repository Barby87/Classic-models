<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <router-view class="py-5"/>
  </div>
</template>

<script>
// Importando función conectionApi como módulo
// import { conectionApi } from './config/configApi';
// Componentes
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  },

  // mounted() {
  //   conectionApi();
  // }
}
</script>

<style lang="scss">

</style>
