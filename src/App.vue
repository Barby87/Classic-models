<template>
  <div>
    <div>
      <NavBar1 v-if="traerToken.length == 0"/>
      <NavBar2 v-else/>
    </div>
    <router-view class="py-5"/>
  </div>
</template>

<script>
// Componentes
import NavBar1 from './components/NavBar1.vue';
import NavBar2 from './components/NavBar2.vue';
export default {
  name: 'App',
  components: {
    NavBar1,
    NavBar2
  },

  computed: {
    traerToken() {
      return this.$store.getters.enviarToken;
    }
  }
}
</script>

<style lang="scss">

</style>
